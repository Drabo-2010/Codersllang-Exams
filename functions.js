export const init = (term) => {
  term("Welcome to the mining game!");
  term.clear();
  term.hideCursor();
  term.grabInput();
};
export const updateGold = (term, state) => {
  state.gold += state.productionRate;
  term.moveTo(25, 2);
  term.eraseLineAfter();
  term.bold.yellow(`${formatNumber(state.gold)}   `);
};
export const checkInitCompleted = (term, state) => {
  state.isInitCompleted = true;
  term.moveTo(1, 1);
  term.eraseLineAfter();
  term(
    "You can purchase producers by clicking the number button (1, 2, 3, ...)"
  );
  term.moveTo(1, 2, "GOLD:");
  term.moveTo(1, 3, "PRODUCTION RATE:");
  state.isProducerListUpdated = false;
};
export const updateProducerList = (term, state) => {
  let curId = 0;
  term.moveTo(1, 5);
  for (const producer of state.producers) {
    if (producer.count > 0) {
      term(
        `${producer.title}: ${
          producer.count
        } | Production per second: ${producer.baseProduction.toFixed(
          1
        )} | Cost: ${producer.cost.toFixed(1)}\n`
      );
      curId++;
    }
  }
  if (curId < state.producers.length) {
    term(
      `${state.producers[curId].title}: ${
        state.producers[curId].count
      } | Production per second: ${state.producers[
        curId
      ].baseProduction.toFixed(1)} | Cost: ${state.producers[
        curId
      ].cost.toFixed(1)}\n`
    );
  }
  state.isProducerListUpdated = true;
};

export const formatNumber = (n) => {
  if (n < 1000) return n.toFixed(1);
  if (n >= 1000 && n < 1000000) return (n / 1000).toFixed(2) + "K";
  if (n >= 1000000 && n < 1000000000) return (n / 1000000).toFixed(2) + "M";
  if (n >= 1000000000 && n < 1000000000000)
    return (n / 1000000000).toFixed(2) + "B";
  else return (n / 1000000000000).toFixed(2) + "T";
};
