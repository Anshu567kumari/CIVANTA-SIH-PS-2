"""
predict_risk_score.py

Handoff script for anyone (backend/GIS teammate) who needs an Accessibility
Risk Score for one or more road segments WITHOUT touching road_risk_scores.csv.

Loads accessibility_risk_model.joblib and exposes one function:

    predict_risk(rows) -> pandas.DataFrame with columns:
        risk_score          (0-100, float)
        predicted_disruption (0/1, int)

`rows` is a pandas DataFrame (or list of dicts) with EXACTLY these columns
(see model_input_schema.txt for the authoritative list):

    records__road_type                        (categorical/string)
    records__road_length_km                   (numeric)
    records__elevation_m                      (numeric)
    records__slope_deg                        (numeric)
    records__historical_landslide_count       (numeric)
    records__nearest_landslide_distance_km    (numeric)
    records__rainfall_24h_mm                  (numeric)
    records__rainfall_3d_mm                   (numeric)
    records__rainfall_7d_mm                   (numeric)

Do NOT pass: road_id, road_name, latitude/longitude, metadata__* columns,
the 4 high_* flags, disruption_risk_score, or disruption_occurred.
"""

import joblib
import pandas as pd

MODEL_PATH = "accessibility_risk_model.joblib"

_artifact = joblib.load(MODEL_PATH)
_model = _artifact["model"]
_features = _artifact["features"]
_threshold = _artifact["classification_threshold"]


def predict_risk(rows):
    """
    rows: pandas.DataFrame or list[dict] with the required feature columns.
    Extra columns (e.g. road_id) are ignored automatically - only the
    columns in `_features` are passed into the model.

    Returns a DataFrame aligned to the input rows' index, with:
      - risk_score: 0-100
      - predicted_disruption: 0 or 1
    """
    df = pd.DataFrame(rows)
    missing = [f for f in _features if f not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    X = df[_features]
    prob = _model.predict_proba(X)[:, 1]
    return pd.DataFrame({
        "risk_score": (prob * 100).clip(0, 100).round(2),
        "predicted_disruption": (prob >= _threshold).astype(int),
    }, index=df.index)


if __name__ == "__main__":
    # Example: teammate has one or more road segments in their own code,
    # no CSV needed - just build a dict (or DataFrame) with the required fields.
    sample_rows = [
        {
            "records__road_type": "trunk",
            "records__road_length_km": 12.4,
            "records__elevation_m": 850,
            "records__slope_deg": 18.2,
            "records__historical_landslide_count": 3,
            "records__nearest_landslide_distance_km": 0.8,
            "records__rainfall_24h_mm": 45,
            "records__rainfall_3d_mm": 120,
            "records__rainfall_7d_mm": 260,
        },
        {
            "records__road_type": "tertiary",
            "records__road_length_km": 4.1,
            "records__elevation_m": 300,
            "records__slope_deg": 4.5,
            "records__historical_landslide_count": 0,
            "records__nearest_landslide_distance_km": 15.2,
            "records__rainfall_24h_mm": 5,
            "records__rainfall_3d_mm": 12,
            "records__rainfall_7d_mm": 30,
        },
    ]

    result = predict_risk(sample_rows)
    print(result)
