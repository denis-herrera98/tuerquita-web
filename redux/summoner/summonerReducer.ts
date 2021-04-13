import { TYPES } from "../types";

interface SummonerState {
  summoner: Summoner;
  region: string;
  activeUserId: string;
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
  activeUserId: "",
  region: "",
};

export interface SummonerActions {
  type: string;
  payload?: Summoner;
  idSummoner?: string;
  region?: string;
}

export const summonerReducer = (
  state: SummonerState = initialState,
  action: SummonerActions
): SummonerState => {
  switch (action.type) {
    case TYPES.SELECT_SUMMONER: {
      return { ...state, summoner: action.payload };
    }

    case TYPES.SET_ACTIVE_REGION: {
      return { ...state, region: action.region };
    }

    case TYPES.SET_ACTIVE_USER: {
      return { ...state, activeUserId: action.idSummoner };
    }

    case TYPES.DELETE_SUMMONER: {
      return { ...state, summoner: undefined };
    }

    default: {
      return { ...state };
    }
  }
};
