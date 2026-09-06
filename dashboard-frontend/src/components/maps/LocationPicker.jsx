import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Crosshair } from "lucide-react";
import Button from "../ui/Button";

export default function LocationPicker({ value, onChange }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [coords, setCoords] = useState(value || { lat: 20.5937, lng: 78.9629 });
  const [address, setAddress] = useState(
    "Click on the map to select a location",
  );

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [coords.lat, coords.lng],
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Click handler
    map.on("click", async (e) => {
      const { lat, lng } = e.latlng;
      setCoords({ lat, lng });
      onChange && onChange({ lat, lng });

      // Update marker
      if (markerRef.current) markerRef.current.setLatLng([lat, lng]);
      else {
        markerRef.current = L.marker([lat, lng], { draggable: true }).addTo(
          map,
        );
        markerRef.current.on("dragend", async (ev) => {
          const pos = ev.target.getLatLng();
          setCoords({ lat: pos.lat, lng: pos.lng });
          onChange && onChange({ lat: pos.lat, lng: pos.lng });
          await reverseGeocode(pos.lat, pos.lng);
        });
      }

      await reverseGeocode(lat, lng);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Reverse geocode using free Nominatim API
  const reverseGeocode = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14`,
      );
      const data = await res.json();
      setAddress(data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    } catch {
      setAddress(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    }
  };

  // Use browser geolocation
  const useMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const map = mapInstanceRef.current;
        map.setView([latitude, longitude], 14);
        setCoords({ lat: latitude, lng: longitude });
        onChange && onChange({ lat: latitude, lng: longitude });

        if (markerRef.current)
          markerRef.current.setLatLng([latitude, longitude]);
        else
          markerRef.current = L.marker([latitude, longitude], {
            draggable: true,
          }).addTo(map);

        reverseGeocode(latitude, longitude);
      },
      () => alert("Unable to get your location"),
    );
  };

  return (
    <div className="space-y-3">
      <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-soft">
        <div ref={mapRef} style={{ height: "320px", width: "100%" }} />

        {/* Use my location button */}
        <button
          onClick={useMyLocation}
          className="absolute top-3 right-3 z-400 bg-white hover:bg-slate-50 rounded-lg shadow-card p-2 flex items-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200"
          title="Use my current location"
        >
          <Crosshair className="h-4 w-4 text-brand-600" />
          My Location
        </button>
      </div>

      {/* Selected location info */}
      <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
        <MapPin className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-slate-700">
            Selected Location
          </div>
          <div className="text-sm text-slate-600 truncate">{address}</div>
          <div className="text-xs text-slate-400 mt-0.5 font-mono">
            {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}
          </div>
        </div>
      </div>
    </div>
  );
}
