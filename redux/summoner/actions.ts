import { TYPES } from "../types";
import { SummonerActions, Summoner } from "./summonerReducer";

export const selectedSummoner = (summoner: Summoner): SummonerActions => {
  return {
    type: TYPES.SELECT_SUMMONER,
    payload: summoner,
  };
};

export const setActiveUser = (id: string): SummonerActions => {
  return {
    type: TYPES.SET_ACTIVE_USER,
    idSummoner: id,
  };
};
