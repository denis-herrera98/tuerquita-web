import Summoner from "./../components/Summoner";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

const SummonerComponentCreator = (team: any) => {
  const summonerComponents = [];

  team.data.map((player: any, index: number) => {
    const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);
    summonerComponents.push(
      <Summoner
        name={player.lolName}
        profileIconId={player.profileIconId}
        level={player.summonerLevel}
        region={findRegionOPGG(player.region)}
        soloq={soloq?.tier}
        flex={flex?.tier}
        key={index}
      />
    );
  });

  return summonerComponents;
};

export default SummonerComponentCreator;
/*
 *  "id": "4l7j5XjebG3smuqSdQfx",
        "data": [
            {
                "lolId": "mu0j0ur9TopOo29cgPh3x0sxSdJxuU_QoAf46RdISnmKmW2a",
                "discordId": "376939181814841344",
                "rankedData": [
                    {
                        "wins": "131",
                        "summonerName": "Thiff12",
                        "losses": "128",
                        "tier": "CACA",
                        "leagueId": "7b95bc7b-a57c-4559-92fc-6d2f33d2b216",
                        "queueType": "RANKED_FLEX_SR",
                        "rank": "III",
                        "summonerId": "UV_xiGDgrmbdHsMpSKc0oSb7N_XcVO8bkyfCR2xJ38YN8iM"
                    },
                    {
                        "wins": "131",
                        "summonerName": "Thiff12",
                        "losses": "128",
                        "tier": "DIAMOND",
                        "leagueId": "7b95bc7b-a57c-4559-92fc-6d2f33d2b216",
                        "queueType": "RANKED_SOLO_5x5",
                        "rank": "III",
                        "summonerId": "UV_xiGDgrmbdHsMpSKc0oSb7N_XcVO8bkyfCR2xJ38YN8iM"
                    }
                ],
                "lolName": "Beanovich",
                "region": "la1.api.riotgames.com",
                "discordName": "Denis Herrera"
            }
        ],
        "author": {
            "avatar": "https://images-ext-1.discordapp.net/external/yuLs-BR5wouOxTsTgnW__1xYrukdELkmTLkzVuiTFaU/%3Fsize%3D128/https/cdn.discordapp.com/avatars/376939181814841344/894dbb6ec07b9b67a7ed68625924e359.jpg",
            "name": "Denis Herrera"
        },
        "info": "3",
        "timestamp": 1615870584344
    }
 */
