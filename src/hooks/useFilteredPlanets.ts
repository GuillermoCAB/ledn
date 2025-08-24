import { useEffect, useMemo, useState } from "react";
import { usePlanets } from "./api";
import debounce from "lodash.debounce";

export const useFilteredPlanets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { data, isLoading, error } = usePlanets();

  const debouncedSetSearch = useMemo(
    () => debounce((term: string) => setDebouncedSearchTerm(term), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchTerm);
  }, [searchTerm, debouncedSetSearch]);

  const filteredPlanets = useMemo(
    () =>
      data?.planets?.filter((planet) =>
        planet.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      ) || [],
    [data?.planets, debouncedSearchTerm]
  );

  return { filteredPlanets, setSearchTerm, searchTerm, isLoading, error };
};
