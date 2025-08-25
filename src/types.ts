import Decimal from "decimal.js";

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  id: string;
}

export interface User {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  id: string;
}

export interface Transaction {
  id: string;
  user: number;
  amount: number;
  currency: CurrencyOpts;
  date: string;
  status: TransactionStatus;
}

export interface ExchangeRate {
  rate: string;
}

export interface ExchangeRate {
  rate: string;
}

export interface PlanetsResponse {
  planets: Planet[];
}

export interface UsersResponse {
  users: User[];
}

export interface TransactionsResponse {
  transactions: Transaction[];
}

export enum TransactionStatus {
  InProgress = "inProgress",
  Completed = "completed",
  Blocked = "blocked",
}

export enum CurrencyOpts {
  GCS = "GCS",
  ICS = "ICS",
}

export interface FinancialSummary {
  gcsTotal: Decimal;
  icsTotal: Decimal;
  gcsTransactions: number;
  icsTransactions: number;
  inProgressCount: number;
}

export interface PlanetFieldConfig {
  label: string;
  key: keyof Pick<Planet, "climate" | "terrain" | "population" | "gravity">;
  formatter?: (value: string) => string;
}
