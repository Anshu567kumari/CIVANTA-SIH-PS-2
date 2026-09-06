import MapView from "../../components/maps/MapView";
import { mockSubmissions } from "../../data/mockData";

export default function Map() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Live Map View
        </h1>
        <p className="text-sm text-slate-500">
          Track all submissions across India in real-time.
        </p>
      </div>
      <MapView submissions={mockSubmissions} height="600px" />
    </div>
  );
}
