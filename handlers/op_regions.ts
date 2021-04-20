const regions = new Map<string, string>([
  ["br1.api.riotgames.com", "br.op.gg"],
  ["eun1.api.riotgames.com", "eune.op.gg"],
  ["euw1.api.riotgames.com", "euw.op.gg"],
  ["jp1.api.riotgames.com", "jp.op.gg"],
  ["kr.api.riotgames.com", "op.gg"],
  ["la1.api.riotgames.com", "lan.op.gg"],
  ["la2.api.riotgames.com", "las.op.gg"],
  ["na1.api.riotgames.com", "na.op.gg"],
  ["oc1.api.riotgames.com", "oce.op.gg"],
  ["tr1.api.riotgames.com", "tr.op.gg"],
  ["ru.api.riotgames.com", "ru.op.gg"],
]);

export const findRegionOPGG = (region: string): string => {
  if (!regions.has(region)) {
    return "";
  }
  return regions.get(region);
};

const shortsRegions = new Map<string, string>([
  ["BR", "br.op.gg"],
  ["EUNE", "eune.op.gg"],
  ["EUW", "euw.op.gg"],
  ["JP", "jp.op.gg"],
  ["KR", "op.gg"],
  ["LAN", "lan.op.gg"],
  ["LAS", "las.op.gg"],
  ["NA", "na.op.gg"],
  ["OCE", "oce.op.gg"],
  ["TR", "tr.op.gg"],
  ["RU", "ru.op.gg"],
]);

export const shortRegionNameToOPGGPath = (region: string): string => {
  if (!shortsRegions.has(region)) {
    return "";
  }
  return shortsRegions.get(region);
};
