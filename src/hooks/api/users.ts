import { useQuery } from "@tanstack/react-query";
import { UsersResponse } from "../../types";
import api from "../../constants/baseApi";

export const useUsers = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get("/users");
      return data;
    },
  });
};

export const useUsersByPlanet = (planetId: string) => {
  return useQuery<UsersResponse>({
    queryKey: ["users", "planet", planetId],
    queryFn: async () => {
      const { data } = await api.get(`/users/planet/${planetId}`);
      return data;
    },
    enabled: !!planetId,
  });
};
