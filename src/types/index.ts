export type SettingsType = {
  currency: number;
  stocks: number;
  crypto: number;
  type: AllocationType;
};

export enum AllocationType {
  MONTH = "month",
  BALANCED = "balanced",
}
