import terminalKit from "terminal-kit";
export const term = terminalKit.terminal;
export const config = {
  gold: 0,
  producers: [
    {
      id: 1,
      title: "Miner",
      cost: 10,
      growthRate: 1.13,
      baseProduction: 0.1,
      count: 0,
    },
    {
      id: 2,
      title: "Adventurer",
      cost: 100,
      growthRate: 1.17,
      baseProduction: 1,
      count: 0,
    },
    {
      id: 3,
      title: "Professional",
      cost: 1200,
      growthRate: 1.14,
      baseProduction: 9,
      count: 0,
    },
  ],
  tickSpeed: 100,
  productionRate: 0,
  isInitCompleted: false,
  isProducerListUpdated: true,
};
