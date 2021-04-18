export interface LkfTeam {
  active: boolean;
  info: string;
  region: string;
  timestamp: string;
  rejectedPlayers: string[];
  author: Author;
  data: Player[];
  discordid: string;
}

interface Author {
  avatar: string;
  name: string;
}

export interface Player {
  discordId: string;
  discordName: string;
  lolId: string;
  lolName: string;
  profileIconId: string;
  region: string;
  summonerLevel: number;
  rankedData: RankedData[];
}

interface RankedData {
  freshBlood: string;
  hotStreak: string;
  inactive: string;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
  wins: number;
}
