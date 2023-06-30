import axios from "axios";
import dotenv from "dotenv";

// Constants
import {
  DEFAULT_REQUEST_FILTER,
  INFO_TABLE_OPTIONS_DETAILS,
  PACKAGE_API_DETAILS,
} from "./const";
import {
  InfoTableOptions,
  PackageConfigType,
  PackageType,
  RequestDataFilterType,
} from "./types";
dotenv.config();

export async function getSentioEventLogsInfo(
  infoTableOption: InfoTableOptions
) {
  const { packageType, query } = INFO_TABLE_OPTIONS_DETAILS[infoTableOption];
  const res = await fetchEventLogsInfo(packageType, query);

  return res;
}

async function fetchEventLogsInfo(
  packageType: PackageType,
  query: string = ""
) {
  try {

    const packageDetails = PACKAGE_API_DETAILS[packageType];
    const effectiveInfoRequestFilter = { ...DEFAULT_REQUEST_FILTER, query };
    const requestData = getRequestDataSchema(
      packageDetails,
      effectiveInfoRequestFilter
    );

    const response = await axios.post(packageDetails.url, requestData, {
      headers: {
        "api-key": process.env.SENTIO_API_KEY,
      },
      responseType: "json",
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error("[EFFECTIVE_INFO_FETCH ERROR] -", error);
    return null;
  }
}

function getRequestDataSchema(
  packageConfig: PackageConfigType,
  filter: RequestDataFilterType = DEFAULT_REQUEST_FILTER
) {
  const { projectOwner, projectSlug, projectId, version } = packageConfig;
  return {
    projectOwner,
    projectSlug,
    projectId,
    ...filter,
    version,
  };
}
