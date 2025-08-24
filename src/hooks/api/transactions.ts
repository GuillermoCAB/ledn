import { useQuery } from "@tanstack/react-query";
import { TransactionsResponse } from "../../types";
import api from "../../constants/baseApi";

export const useTransactions = () => {
  return useQuery<TransactionsResponse>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await api.get("/transactions");
      return data;
    },
  });
};

export const useTransactionsByUsers = (userIds: string[]) => {
  return useQuery<TransactionsResponse>({
    queryKey: ["transactions", "users", userIds],
    queryFn: async () => {
      const { data } = await api.get(
        `/transactions/users/${JSON.stringify(userIds)}`
      );
      return data;
    },
    enabled: userIds.length > 0,
  });
};
