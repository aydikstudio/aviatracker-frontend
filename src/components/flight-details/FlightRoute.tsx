import type { IFlight } from "@/types/flight.types";
import { Plane } from "lucide-react";

export function FlightRoute({ flight }: { flight: IFlight }) {
  return (
    <div className="bg-card rounded-t-lg px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <h3 className="text-white text-3xl font-semibold">
            {flight.from.code}
          </h3>
          <p className="text-neutral-400 text-sm">{flight.from.city}</p>
          <p className="text-neutral-500 text-xs mt-1">
            {flight.from.timezone}
          </p>
        </div>
        <div className="flex-1 mx-6 relative">
          <div className="flex items-center justify-center mb-2 bg-neutral-900 rounded-full w-10 h-10">
            <Plane className="text-amber-400" size={22} />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-white text-3xl font-semibold">
            {flight.to.code}
          </h3>
          <p className="text-neutral-400 text-sm">{flight.to.city}</p>
          <p className="text-neutral-500 text-xs mt-1">{flight.to.timezone}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <div className="text-neutral-400">
          <span className="text-white">2 715 km</span>
          <span className="mx-2">•</span>
          <span>3h 1m</span>
        </div>
        <div className="text-neutral-400">
          <span className="text-white">882 km</span>
          <span className="mx-2">•</span>
          <span>59 min</span>
        </div>
      </div>
    </div>
  );
}
