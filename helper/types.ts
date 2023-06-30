export enum PackageType {
  USER_ACTIVITIES = "USER_ACTIVITIES",
  INTERNAL_DASHBOARD = "INTERNAL_DASHBOARD",
  REVENUE = "REVENUE",
}

export enum InfoTableOptions {
  TX_MAIN = "TX_MAIN",
  TX_EFFECTIVE_INFO = "TX_EFFECTIVE_INFO",
}

export type InfoTableOptionDetailsType = {
  packageType: PackageType;
  query: string;
  fieldHeaders: TableFieldType[];
  jsonFileName: string;
  csvName: string;
};

export type PackageConfigType = {
  url: string;
  projectOwner: string;
  projectSlug: string;
  projectId: string;
  version: number;
};

export type RequestDataFilterType = {
  query?: string;
  sorts?: string[];
  limit: number;
  timeRange: {
    start: {
      relativeTime: {
        unit: string;
        value: number;
      };
    };
    end: {
      relativeTime: {
        unit: string;
        value: number;
      };
    };
  };
};

export type TableFieldType = {
  id: string;
  title: string;
};
