import { TYPES } from "../types";

interface SummonerState {
  summoner: Summoner;
}

export interface Summoner {
  name: string;
  flex: string;
  soloq: string;
  id: string;
  level: string;
  region: string;
  profileIconId: string;
}

const initialState: SummonerState = {
  summoner: undefined,
};

export interface SummonerActions {
  type: string;
  payload: Summoner;
}

export const summonerReducer = (
  state: SummonerState = initialState,
  action: SummonerActions
) => {
  switch (action.type) {
    case TYPES.SELECT_SUMMONER: {
      return { ...state, summoner: action.payload };
    }

    case TYPES.DELETE_SUMMONER: {
      return { ...state, summoner: undefined };
    }

    default: {
      return { ...state };
    }
  }
};
