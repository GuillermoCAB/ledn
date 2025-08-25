import { PlanetFieldConfig } from "../types";
import { formatNumericValue } from "../utils";

export const PLANET_FIELDS: PlanetFieldConfig[] = [
  { label: "Climate", key: "climate" },
  { label: "Terrain", key: "terrain" },
  {
    label: "Population",
    key: "population",
    formatter: formatNumericValue,
  },
  { label: "Gravity", key: "gravity" },
];
