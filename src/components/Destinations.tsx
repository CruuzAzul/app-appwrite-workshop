"use client";

import { getDestinations } from "@/api/client";
import { QUERY_KEY } from "@/constants/query-key";
import { useQuery } from "react-query";

export default function Destinations() {
  const { data: destinations } = useQuery(QUERY_KEY.getDestinations, {
    queryFn: getDestinations,
  });

  return (
    <ul>
      {(destinations ?? []).map((destination) => (
        <li key={destination.name}>{destination.name}</li>
      ))}
    </ul>
  );
}
