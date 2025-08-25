import { TerrainFilterOpts, ClimateFilterOpts } from "../types";

interface TerrainOptionsType {
  value: TerrainFilterOpts | "all";
  label: string;
  ariaLabel: string;
}

export const TerrainOptions: TerrainOptionsType[] = [
  {
    value: "all",
    label: "All Terrains",
    ariaLabel: "Show all terrain types",
  },
  {
    value: TerrainFilterOpts.Desert,
    label: "🏜️ Desert",
    ariaLabel: "Filter by desert terrain",
  },
  {
    value: TerrainFilterOpts.Grasslands,
    label: "🌾 Grasslands",
    ariaLabel: "Filter by grasslands terrain",
  },
  {
    value: TerrainFilterOpts.Jungle,
    label: "🌴 Jungle",
    ariaLabel: "Filter by jungle terrain",
  },
  {
    value: TerrainFilterOpts.Mountains,
    label: "⛰️ Mountains",
    ariaLabel: "Filter by mountain terrain",
  },
  {
    value: TerrainFilterOpts.Ocean,
    label: "🌊 Ocean",
    ariaLabel: "Filter by ocean terrain",
  },
  {
    value: TerrainFilterOpts.Swamp,
    label: "🌿 Swamp",
    ariaLabel: "Filter by swamp terrain",
  },
  {
    value: TerrainFilterOpts.Tundra,
    label: "❄️ Tundra",
    ariaLabel: "Filter by tundra terrain",
  },
  {
    value: TerrainFilterOpts.Urban,
    label: "🏙️ Urban",
    ariaLabel: "Filter by urban terrain",
  },
  {
    value: TerrainFilterOpts.Forest,
    label: "🌲 Forest",
    ariaLabel: "Filter by forest terrain",
  },
];

interface ClimateOptionsType {
  value: ClimateFilterOpts | "all";
  label: string;
  ariaLabel: string;
}

export const ClimateOptions: ClimateOptionsType[] = [
  {
    value: "all",
    label: "All Climates",
    ariaLabel: "Show all climate types",
  },
  {
    value: ClimateFilterOpts.Arid,
    label: "🏜️ Arid",
    ariaLabel: "Filter by arid climate",
  },
  {
    value: ClimateFilterOpts.Temperate,
    label: "🌤️ Temperate",
    ariaLabel: "Filter by temperate climate",
  },
  {
    value: ClimateFilterOpts.Tropical,
    label: "🌺 Tropical",
    ariaLabel: "Filter by tropical climate",
  },
  {
    value: ClimateFilterOpts.Frozen,
    label: "🧊 Frozen",
    ariaLabel: "Filter by frozen climate",
  },
  {
    value: ClimateFilterOpts.Hot,
    label: "🔥 Hot",
    ariaLabel: "Filter by hot climate",
  },
  {
    value: ClimateFilterOpts.Frigid,
    label: "❄️ Frigid",
    ariaLabel: "Filter by frigid climate",
  },
  {
    value: ClimateFilterOpts.Humid,
    label: "💧 Humid",
    ariaLabel: "Filter by humid climate",
  },
];
