import {
  checkInitCompleted,
  formatNumber,
  updateGold,
  updateProducerList,
} from "./functions.js";

export const handleKeyPress = (term, state) => {
  return (name, matches, data) => {
    if (
      String.fromCharCode(data.code) === "g" ||
      String.fromCharCode(data.code) === "G"
    ) {
      state.gold++;
    }
    for (const obj of state.producers) {
      if (obj.id == String.fromCharCode(data.code) && obj.cost <= state.gold) {
        state.gold -= obj.cost;
        obj.cost *= obj.growthRate;
        obj.count++;
        state.productionRate += obj.baseProduction * (state.tickSpeed / 1000);
        updateProducerList(term, state);
        term.moveTo(25, 3);
        term.green(
          formatNumber(state.productionRate * (1000 / state.tickSpeed))
        );
      }
    }
    if (
      state.gold >= state.producers[0].cost &&
      state.isInitCompleted === false
    ) {
      checkInitCompleted(term, state);
    }
    if (!state.isProducerListUpdated) updateProducerList(term, state);
  };
};
export const handleStateChange = (term, state) => {
  return () => {
    updateGold(term, state);
  };
};
