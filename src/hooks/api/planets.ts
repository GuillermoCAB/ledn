import { useQuery } from "@tanstack/react-query";
import { Planet, PlanetsResponse } from "../../types";
import api from "../../constants/baseApi";

export const usePlanets = () => {
  return useQuery<PlanetsResponse>({
    queryKey: ["planets"],
    queryFn: async () => {
      const { data } = await api.get("/planets");
      return data;
    },
  });
};

export const usePlanet = (id: string) => {
  return useQuery<Planet>({
    queryKey: ["planet", id],
    queryFn: async () => {
      const { data } = await api.get(`/planets/${id}`);
      return data.planet;
    },
    enabled: !!id,
  });
};
