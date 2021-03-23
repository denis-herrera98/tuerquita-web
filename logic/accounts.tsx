import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";
import regions from "../data/opgg_regions.json";
import Summoner from "./../components/Summoner";

const OnlyOneSummonerCreator = (player: any, region: string) => {
  const { soloq, flex } = findFlexAndSoloqStatus(player.rank);

  return (
    <Summoner
      id={player.id}
      region={regions[region]}
      name={player.name}
      level={player.summonerLevel}
      soloq={soloq?.tier}
      flex={flex?.tier}
      onHover={true}
      profileIconId={player.profileIconId}
      key={player.id}
      interactive={true}
    />
  );
};

export default OnlyOneSummonerCreator;
/*
{
    "id": "ekjyLVD24ZL4x6a2Z4Rx3oLg1VjW0B6-pXhGSH44eoH6",
    "accountId": "sR7H8_J0htirl5q-ihLUNj72YVjOa2QZqApFHMJ9UA",
    "puuid": "EShyB98QadDOJlLjeBGjO63hiw7HXFmInLQHCy_QO20vpbsZKpGnXmFzN2Zb_xdK71HMwN8kWHOSwA",
    "name": "Mâin Feeder",
    "profileIconId": 57,
    "revisionDate": 1615600205000,
    "summonerLevel": 171,
    "rank": [
        {
            "leagueId": "47ab5463-dbbc-4f02-a722-8be9a6054b20",
            "queueType": "RANKED_SOLO_5x5",
            "tier": "DIAMOND",
            "rank": "III",
            "summonerId": "ekjyLVD24ZL4x6a2Z4Rx3oLg1VjW0B6-pXhGSH44eoH6",
            "summonerName": "Mâin Feeder",
            "leaguePoints": 39,
            "wins": 50,
            "losses": 37,
            "veteran": false,
            "inactive": false,
            "freshBlood": false,
            "hotStreak": false
        },
        {
            "leagueId": "d9b988f8-d7b2-4b98-bd6a-4454fb3500f0",
            "queueType": "RANKED_FLEX_SR",
            "tier": "PLATINUM",
            "rank": "IV",
            "summonerId": "ekjyLVD24ZL4x6a2Z4Rx3oLg1VjW0B6-pXhGSH44eoH6",
            "summonerName": "Mâin Feeder",
            "leaguePoints": 18,
            "wins": 16,
            "losses": 9,
            "veteran": false,
            "inactive": false,
            "freshBlood": true,
            "hotStreak": false
        }
    ]
}
*/
