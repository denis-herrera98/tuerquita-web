import { TYPES } from "../types";
import { SummonerActions, Summoner } from "./summonerReducer";

export const selectedSummoner = (summoner: Summoner): SummonerActions => {
  return {
    type: TYPES.SELECT_SUMMONER,
    payload: summoner,
  };
};

export const setActiveUser = (
  id: string,
  activeCollection: string
): SummonerActions => {
  return {
    type: TYPES.SET_ACTIVE_USER,
    idSummoner: id,
    activeCollection,
  };
};

export const setActiveRegion = (region: string): SummonerActions => {
  return {
    type: TYPES.SET_ACTIVE_REGION,
    region,
  };
};

export const deleteSummoner = (): SummonerActions => {
  return {
    type: TYPES.CHANGE_USER,
  };
};
