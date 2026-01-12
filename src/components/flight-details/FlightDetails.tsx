import { useSearchParams } from "react-router";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { FLIGHTS } from "../flight-list/flights.data";
import { useMemo } from "react";
import { FlightImage } from "./FlightImage";
import { FlightHeader } from "./FlightHeader";
import { FlightInformarm } from "./FlightInformation";
import { FlightActions } from "./FlightActions";
import { FlightRoute } from "./FlightRoute";
import { FlighStatus } from "./FlightStatus";
import { FlightSchedule } from "./FlightSchedule";

export function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);

  const flight = useMemo(
    () => FLIGHTS.find((flight) => flight.id === selectedFlight),
    [selectedFlight]
  );

  if (!flight) return null;

  return (
    <aside
      className="absolute w-sm top-7 right-7 h-full rounded-xl bg-[#101010] overflow-hidden"
      style={{
        height: "calc(100% - 56px)",
      }}
    >
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />
      <div className="p-3.5">
        <FlightRoute flight={flight} />
        {/* <FlighStatus flight={flight} />
      <FlightSchedule flight={flight} /> */}
        <FlightInformarm flight={flight} />
        <FlightActions
          onRoute={() => {}}
          onFollow={() => {}}
          onShare={() => {}}
          onMore={() => {}}
        />
      </div>
    </aside>
  );
}
