import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";
import { InfoTableOptionDetailsType, InfoTableOptions } from "./types";
import { getSentioEventLogsInfo } from "./fetch";
import { INFO_TABLE_OPTIONS_DETAILS } from "./const";

export async function retrieveTableInfo(
  option: InfoTableOptions
): Promise<void> {
  const infoTableDetails = INFO_TABLE_OPTIONS_DETAILS[option];

  const data = await getSentioEventLogsInfo(option);
  processRawJsonDataToCsv(infoTableDetails);
}

function processRawJsonDataToCsv(
  infoTableOptionsDetails: InfoTableOptionDetailsType
): void {
  const { fieldHeaders, jsonFileName, csvName } = infoTableOptionsDetails;

  console.log(`Processing data from JSON to CSV...`);
  const jsonData = fs.readFileSync(`./input/${jsonFileName}`, "utf8");

  // Prase Json Data
  const data = JSON.parse(jsonData);
  console.log("Data Entry", data.entries[0]);
  const processedData = data.entries.map((entry: any) => ({
    ...entry.attributes,
    transactionHash: entry.attributes?.transactionHash ?? entry.transactionHash,
    chainId: entry.chainId,
  }));

  // Create a CSV writer with the specified fields
  const csvWriter = createObjectCsvWriter({
    path: `./output/${csvName}`,
    header: fieldHeaders,
  });

  // Write the JSON objects into a CSV file
  csvWriter
    .writeRecords(processedData)
    .then(() => console.log(`${csvName} file has been written successfully.`))
    .catch((err: any) =>
      console.error(`[ERROR WRITING CSV (${csvName})]`, err)
    );
}
