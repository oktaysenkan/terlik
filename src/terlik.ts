import chalk from "chalk";

import { Action, State } from "./types";
import { prettier, currentTime } from "./utils";

export const log = (message: State | Action) => {
  const time = chalk.rgb(170, 170, 170).bold(`⧗ ${currentTime()}`);

  if (Object.keys(message).length === 1) {
    const prefix = chalk.greenBright.bold("NEW ACTION   ⯈");
    const action = chalk.yellowBright(message.type);

    console.log(`${prefix}   ${action}   ${time}`);
  } else {
    const prefix = chalk.greenBright.bold("NEW STATE    ⯈");
    const state = chalk.yellowBright(prettier(message));

    console.log(`${prefix}   ${time}

${state}`);
  }
};

const terlik = (store: any) => (next: any) => (action: any) => {
  log(action);
  next(action);
};

export default terlik;
