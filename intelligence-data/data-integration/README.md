# Data Integration — Person 4 (Rehan Ahmad)

PS 26002 — road/terrain/rainfall data, GPS simulation, incident data pipeline.

## Structure

```
data-integration/
├── raw_data/                          # real, collected data (not simulated)
│   ├── road_risk_data_monsoon.csv     # 1,401 roads: OSM geometry, Copernicus DEM,
│   │                                   # GSI landslide history, CHIRPS rainfall
│   ├── roads_with_terrain.csv
│   └── roads_with_terrain.geojson     # real road-shape geometry, used by simulate_gps.py
├── scripts/
│   ├── simulate_gps.py                # walks road geometry -> synthetic GPS trace
│   ├── incident_pipeline.py           # generates 60 risk-weighted sample incidents
│   └── output_summary.py              # validates row counts + road_id join keys
└── outputs/
    ├── gps_simulated.csv              # 22,725 rows, all 1,401 roads covered
    └── incidents_simulated.csv        # 60 rows, 58 distinct roads
```

Join key across every file: `road_id`.

## Important

Both files in `outputs/` are clearly labeled `source=simulated` — this is
synthetic data standing in for a live GPS tracker and field incident app
that don't exist yet. Not real telemetry or real incident reports.

Person 3 (ML/Risk Engine) consumes `raw_data/road_risk_data_monsoon.csv`,
not the simulated GPS/incident data, unless the team explicitly decides
to combine them.
