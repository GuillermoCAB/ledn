import { useQuery } from "@tanstack/react-query";
import { ExchangeRate } from "../../types";
import api from "../../constants/baseApi";

export const useExchangeRate = () => {
  return useQuery<ExchangeRate>({
    queryKey: ["exchangeRate"],
    queryFn: async () => {
      const { data } = await api.get("/exchange-rate");
      return data;
    },
    refetchInterval: 1000,
  });
};
