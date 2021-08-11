import { init } from "./functions.js";
import { handleKeyPress, handleStateChange } from "./handlers.js";
export const startMiningGame = (term, config) => {
  init(term);
  term.on("key", handleKeyPress(term, config));
  setInterval(handleStateChange(term, config), config.tickSpeed);
};
