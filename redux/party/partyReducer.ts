interface PartyState {
  selectedParty: string;
}

const initialState: PartyState = {
  selectedParty: "",
};

export type Action = { type: "SELECT_PARTY"; payload: string };

export const partyReducer = (
  state: PartyState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "SELECT_PARTY": {
      return { ...state, selectedParty: "2" };
    }

    default: {
      return { ...state };
    }
  }
};
