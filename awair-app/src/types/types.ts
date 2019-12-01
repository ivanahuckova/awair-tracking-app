export interface FetchSensorDataProps {
  urlAppendix: string;
  setData: (data: any) => void;
  setLoading: (bool: boolean) => void;
  parameters: FetchParameters;
}

export interface FetchParameters {
  token: string;
  from?: string;
  to?: string;
  activeDevice?: ActiveDevice | null;
}

export interface ActiveDevice {
  deviceType: string;
  deviceId: number;
}
