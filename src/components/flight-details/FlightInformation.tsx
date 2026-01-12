import type { IFlight } from "../../types/flight.types";

export function FlightInformarm({ flight }: { flight: IFlight }) {
  return (
    <div>
      <img
        src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
        alt={flight?.from.code}
        width={24}
        height={18}
        className="inline-block rounded-sm shadow-sm"
      />
      <span>{flight?.airline.country}</span>
    </div>
  );
}
