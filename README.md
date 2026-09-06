# CIVANTA — AI-Based Smart Logistics and Accessibility Intelligence Platform for NER

**Problem Statement ID:** 26002
**Title:** AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)
**Organization / Department:** Ministry of Development of North Eastern Region (MDoNER)
**Category:** Software
**Theme:** Transportation & Logistics

This repository is the merged codebase of two previously separate
repositories (**CIVANTA-NER** — intelligence/data team, and **CIVANTA** —
dashboard frontend team) into a single project, restructured around the
6-person team plan below.

---

## Problem Statement Summary

The North Eastern Region (NER) faces major logistics and accessibility
challenges due to difficult terrain, extreme weather, limited transport
connectivity, and frequent disruptions from landslides, floods, and
infrastructure gaps. CIVANTA aims to provide an AI/ML + GIS powered
platform that:

- Monitors real-time road, bridge, and transport accessibility
- Predicts route disruptions from weather, terrain, and historical data
- Suggests AI-based alternate routes and estimated delays
- Tracks vehicles carrying essential goods via GPS
- Generates automated alerts for blocked roads and high-risk corridors
- Lets field officials upload geo-tagged updates from remote locations
- Provides centralized dashboards for connectivity, bottlenecks, and
  emergency accessibility
- Supports multilingual notifications and offline sync for low-network areas

---

## Team & Ownership

| # | Name  | Role                    | Stack                                            | Folder in this repo                    | Status |
|---|-------|-------------------------|---------------------------------------------------|-----------------------------------------|--------|
| 1 | Khushi | Backend                | Python, FastAPI, PostgreSQL + PostGIS, Auth       | `backend-core/`                         | Not started — placeholder |
| 2 | Anshu  | GIS + Routing           | OSM, PostGIS, Leaflet/MapLibre, OSRM/GraphHopper  | `gis-routing-engine/`                   | Not started — placeholder |
| 3 | Ayush  | ML / Risk Engine        | Python, Pandas, NumPy, scikit-learn               | `intelligence-data/ml-risk-engine/`     | ✅ Done |
| 4 | Rehan  | Data Integration        | Weather/terrain data, GPS simulation, incident pipeline | `intelligence-data/data-integration/` | ✅ Done |
| 5 | Faiz   | Command Dashboard       | React + TypeScript/JS, Tailwind, Leaflet/MapLibre | `dashboard-frontend/`                   | ✅ Done (frontend, mock-data driven) |
| 6 | Harsh  | Field App + GPS         | Flutter + Dart, GPS, Camera, SQLite/Drift         | `field-app/`                            | ❌ Not started — placeholder |

**Teams:**
- **Team 1 — Backend + GIS/Routing** (Khushi, Anshu): core platform + route engine. *Not part of the two source zips merged here; placeholders added so the structure matches the full plan.*
- **Team 2 — ML + Data Integration** (Ayush, Rehan): intelligence + data pipeline. *Source: `CIVANTA-NER` repo.*
- **Team 3 — Dashboard + Field App** (Faiz, Harsh): user-facing apps + demo. *Source: `CIVANTA` repo (dashboard only — the Flutter field app was not part of that repo and has not been built yet).*

---

## Repository Structure

```
CIVANTA/
├── README.md                          # This file
│
├── intelligence-data/                 # Team 2 — from CIVANTA-NER
│   ├── ml-risk-engine/                # Ayush — Accessibility Risk Score model
│   │   ├── data/processed/            # training input
│   │   ├── scripts/train_risk_model.py
│   │   ├── outputs/                   # trained model, scores, schema, report
│   │   ├── predict_risk_score.py      # handoff function for backend/routing
│   │   └── README.md
│   │
│   └── data-integration/              # Rehan — road/terrain/rainfall + simulation
│       ├── raw_data/                  # real OSM + DEM + GSI + CHIRPS data
│       ├── scripts/                   # GPS simulation, incident pipeline, validation
│       ├── outputs/                   # simulated GPS + incidents (clearly labeled)
│       └── README.md
│
├── dashboard-frontend/                # Team 3 (Faiz) — from CIVANTA
│   ├── src/
│   │   ├── components/                # ui, layout, navbar, sidebar, ai
│   │   ├── pages/                     # public, auth, user, admin
│   │   ├── layouts/, routes/, context/
│   │   ├── services/                  # API layer (Axios) — mock-data driven for now
│   │   └── data/                      # mock data + i18n (6 languages)
│   ├── package.json / vite.config.js
│   └── README.md                      # full frontend setup guide (unchanged)
│
├── field-app/                         # Team 3 (Harsh) — NOT built yet
│   └── STATUS.md                      # planned scope + integration notes
│
├── backend-core/                      # Team 1 (Khushi) — NOT included in source zips
│   └── STATUS.md                      # planned scope + integration notes
│
└── gis-routing-engine/                # Team 1 (Anshu) — NOT included in source zips
    └── STATUS.md                      # planned scope + integration notes
```

---

## What Changed in This Merge

- Combined two separate repositories (`CIVANTA-NER-main` and
  `CIVANTA-main`) into one project tree, organized by function instead of
  by original repo name.
- Renamed top-level folders for clarity:
  - `ml-risk-engine` + `data-integration` → grouped under `intelligence-data/`
  - the React app (previously the repo root of `CIVANTA-main`) → `dashboard-frontend/`
- Added placeholder folders (`backend-core/`, `gis-routing-engine/`,
  `field-app/`) with `STATUS.md` files describing planned scope, so the
  repo structure reflects the complete 6-person plan even though those
  three pieces haven't been built yet.
- Checked both source zips file-by-file (via checksum comparison) for
  duplicate or conflicting files — **none were found**. No files were
  deleted for being duplicates.
- Removed one stray/junk file: a copy of `CIVANTA-main.zip` that was
  accidentally nested inside the `CIVANTA-NER-main.zip` archive itself
  (verified byte-identical to the actual `CIVANTA-main.zip`, so it carried
  no unique content — nothing was lost by excluding it).
- Updated ownership labels in the sub-READMEs and this root README to use
  real names (Khushi, Anshu, Ayush, Rehan, Faiz, Harsh) instead of
  "Person 1–6", while keeping each sub-project's original README content
  intact otherwise.

---

## How the Pieces Fit Together (Data Flow)

```
raw_data (OSM, DEM, GSI, CHIRPS)
        │
        ▼
data-integration/  ──────► road_risk_data_monsoon.csv, roads_with_terrain.geojson
        │                          │
        │ (simulated GPS/incidents, clearly labeled)
        ▼                          ▼
outputs/gps_simulated.csv   ml-risk-engine/  ──► accessibility_risk_model.joblib
outputs/incidents_simulated.csv     │              road_risk_scores.csv
        │                          ▼
        │                  predict_risk_score.py  ◄── handoff for backend/routing
        │                          │
        ▼                          ▼
   [field-app — pending]    [backend-core — pending] ◄──► [gis-routing-engine — pending]
                                       │
                                       ▼
                            dashboard-frontend/ (React) — currently runs on mock data,
                            API layer in src/services/ is ready to be pointed at
                            backend-core once it exists.
```

---

## Getting Started

### Intelligence & Data (Team 2 — ready to run)

```bash
cd intelligence-data/ml-risk-engine
python scripts/train_risk_model.py
```

```bash
cd intelligence-data/data-integration
python scripts/simulate_gps.py
python scripts/incident_pipeline.py
python scripts/output_summary.py
```

See `intelligence-data/ml-risk-engine/README.md` and
`intelligence-data/data-integration/README.md` for full details on inputs,
outputs, and join keys (`road_id`).

### Dashboard Frontend (Team 3 — ready to run)

```bash
cd dashboard-frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. Runs on mock data by default; see
`dashboard-frontend/README.md` for the full setup guide, demo accounts,
and how to point it at a real backend later.

### Not Yet Available

- `backend-core/` — no code yet, see `STATUS.md`
- `gis-routing-engine/` — no code yet, see `STATUS.md`
- `field-app/` — no code yet, see `STATUS.md`

---

## Notes on Data Authenticity

- `intelligence-data/data-integration/raw_data/` contains **real** road,
  terrain (Copernicus DEM), landslide history (GSI), and rainfall
  (CHIRPS) data.
- `intelligence-data/data-integration/outputs/gps_simulated.csv` and
  `incidents_simulated.csv` are **synthetic**, explicitly labeled
  `source=simulated`, standing in for a live GPS tracker and field
  incident app that don't exist yet (i.e., `field-app/`).
- `dashboard-frontend` currently runs entirely on **mock data**
  (`src/data/mockData.js`) until `backend-core` is built.

---

## License

Built for Smart India Hackathon — Problem Statement 26002, MDoNER.
