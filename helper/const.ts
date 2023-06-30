import {
  InfoTableOptionDetailsType,
  InfoTableOptions,
  PackageConfigType,
  PackageType,
  RequestDataFilterType,
  TableFieldType,
} from "./types";

const PENDLE_PROJECT_OWNER = "pendle";

const TX_MAIN_FIELDS: TableFieldType[] = [
  { id: "time", title: "Timestamp" },
  { id: "transactionHash", title: "Transaction Hash" },
  { id: "actionType", title: "Action Type" },
  { id: "chainId", title: "Chain ID" },
  { id: "pool", title: "Pool" },
  { id: "user", title: "User" },
  { id: "walletType", title: "Wallet Type" },
  { id: "taggedName", title: "Tagged Name" },
  { id: "tokensIn1", title: "Tokens In 1" },
  { id: "tokensInAmount1", title: "Tokens In Amount 1" },
  { id: "tokensOut1", title: "Tokens Out 1" },
  { id: "tokensOutAmount1", title: "Tokens Out Amount 1" },
  { id: "type", title: "Type" },
  { id: "valueUsd", title: "Value USD" },
];

const TX_EFFECTIVE_INFO_FIELDS: TableFieldType[] = [
  { id: "chainId", title: "Chain ID" },
  { id: "transactionHash", title: "Transaction Hash" },
  { id: "user", title: "User" },
  { id: "logIndex", title: "Log Index" },
  { id: "effectivePtVolume", title: "Effective PT Trade Volume" },
  { id: "swapFee", title: "Swap Fee" },
  { id: "effectiveImpliedYield", title: "Effective Implied Yield" },
];

export const INFO_TABLE_OPTIONS_DETAILS: Record<
  InfoTableOptions,
  InfoTableOptionDetailsType
> = {
  TX_EFFECTIVE_INFO: {
    packageType: PackageType.USER_ACTIVITIES,
    query: "event_name:Transaction_Effective_Info",
    fieldHeaders: TX_EFFECTIVE_INFO_FIELDS,
    jsonFileName: "tx_effective_info.json",
    csvName: "tx_effective_info.csv",
  },
  TX_MAIN: {
    packageType: PackageType.USER_ACTIVITIES,
    query: "event_name:Transaction_Action",
    fieldHeaders: TX_MAIN_FIELDS,
    jsonFileName: "tx_main.json",
    csvName: "tx_main.csv",
  },
};

export const DEFAULT_REQUEST_FILTER: RequestDataFilterType = {
  query: "",
  sorts: [],
  limit: 100000,
  timeRange: {
    start: {
      relativeTime: {
        unit: "days",
        value: -365,
      },
    },
    end: {
      relativeTime: {
        unit: "seconds",
        value: 0,
      },
    },
  },
};

export const API_URI_PREFIX: string =
  "https://app.sentio.xyz/api/v1/eventlogs/pendle";

export const PACKAGE_API_DETAILS: Record<string, PackageConfigType> = {
  INTERNAL_DASHBOARD: {
    url: `${API_URI_PREFIX}/pendle-internal-dashboard`,
    projectOwner: PENDLE_PROJECT_OWNER,
    projectSlug: "pendle-internal-dashboard",
    projectId: "oWaSDkaN",
    version: 14,
  },
  USER_ACTIVITIES: {
    url: `${API_URI_PREFIX}/user-activities`,
    projectOwner: PENDLE_PROJECT_OWNER,
    projectSlug: "user-activities",
    projectId: "oWaSDkaN",
    version: 14,
  },
  REVENUE: {
    url: `${API_URI_PREFIX}/pendle-internal-fees`,
    projectOwner: PENDLE_PROJECT_OWNER,
    projectSlug: "pendle-internal-fees",
    projectId: "oWaSDkaN",
    version: 14,
  },
};
