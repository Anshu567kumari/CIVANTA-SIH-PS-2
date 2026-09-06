# GIS + Routing — Person 2 (Anshu)

### 🛣️ GIS + Risk-Aware Routing Progress



The current implementation connects the **OSM road network with our risk database** using the `road_id` / OSM way ID. The database contains 1,401 road records with `risk_score` and `predicted_disruption` values.

### Completed

* Integrated **OpenStreetMap road network** using OSMnx.
* Added start and destination coordinate inputs.
* Implemented **standard shortest-path routing**.
* Implemented **risk-aware routing** using our team's road-risk data.
* Matched OSM `way/{id}` values with the database's `road_id`.
* Added road **risk scores and predicted disruptions** as routing factors.
* Added adjustable **Risk Weight** and **Disruption Penalty**.
* Added route statistics:

  * Distance
  * Average risk
  * Number of disrupted roads
* Added **Standard Route vs Risk-Aware Route** comparison.
* Added an interactive **Folium GIS map** showing both routes, start point, and destination.
* Added a **Streamlit interface** for running and testing the routing system.

### Current Status

The basic GIS + risk-aware routing prototype is implemented and connected to our provided database.


## Planned scope (from team roster)

- OpenStreetMap data
- PostGIS spatial queries
- Leaflet/MapLibre map rendering
- OSRM / GraphHopper routing engine
- Road network graph construction
- Alternative route calculation
- Risk-aware routing (consumes risk scores from
  `intelligence-data/ml-risk-engine/outputs/road_risk_scores.csv`)

This folder is a placeholder so the repository structure reflects the full
project plan (Team 1 — Backend + GIS/Routing). The road geometry already
available at
`intelligence-data/data-integration/raw_data/roads_with_terrain.geojson`
is a natural starting input for this component.
