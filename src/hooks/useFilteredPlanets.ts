import { useEffect, useMemo, useState } from "react";
import { usePlanets } from "./api";
import { TerrainFilterOpts, ClimateFilterOpts } from "../types";
import debounce from "lodash.debounce";

export const useFilteredPlanets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedTerrain, setSelectedTerrain] = useState<
    TerrainFilterOpts | "all"
  >("all");
  const [selectedClimate, setSelectedClimate] = useState<
    ClimateFilterOpts | "all"
  >("all");
  const { data, isLoading, error } = usePlanets();

  const debouncedSetSearch = useMemo(
    () => debounce((term: string) => setDebouncedSearchTerm(term), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchTerm);
  }, [searchTerm, debouncedSetSearch]);

  const filteredPlanets = useMemo(() => {
    let filtered = data?.planets || [];

    if (debouncedSearchTerm) {
      filtered = filtered.filter((planet) =>
        planet.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    if (selectedTerrain !== "all") {
      filtered = filtered.filter((planet) =>
        planet.terrain.toLowerCase().includes(selectedTerrain.toLowerCase())
      );
    }

    if (selectedClimate !== "all") {
      filtered = filtered.filter((planet) =>
        planet.climate.toLowerCase().includes(selectedClimate.toLowerCase())
      );
    }

    return filtered;
  }, [data?.planets, debouncedSearchTerm, selectedTerrain, selectedClimate]);

  return {
    filteredPlanets,
    setSearchTerm,
    searchTerm,
    selectedTerrain,
    setSelectedTerrain,
    selectedClimate,
    setSelectedClimate,
    isLoading,
    error,
  };
};
