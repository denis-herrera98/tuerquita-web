export interface Solicitude {
  flex: string;
  id: string;
  level: number;
  lkfteam: string;
  name: string;
  profileIconId: number;
  region: string;
  soloq: string;
  state: StateType;
}

type StateType = "ACTIVE" | "INACTIVE" | "CLOSED";
