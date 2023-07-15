import { Destination } from "@/models/destination";

export const getDestinations = async (): Promise<Destination[]> => {
  const response = await fetch("/api/destinations");

  return response.json();
};
