// Constants
import { retrieveTableInfo } from "./helper/utils";
import { InfoTableOptions } from "./helper/types";

async function main() {
  await retrieveTableInfo(InfoTableOptions.TX_MAIN);
  // await retrieveTableInfo(InfoTableOptions.TX_EFFECTIVE_INFO);
}

main();
