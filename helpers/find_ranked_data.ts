export const findFlexAndSoloqStatus = (rankedData: any[]) => {
  const flex = rankedData.find((p) => p.queueType === "RANKED_FLEX_SR");
  const soloq = rankedData.find((p) => p.queueType === "RANKED_SOLO_5x5");

  return { soloq, flex };
};
