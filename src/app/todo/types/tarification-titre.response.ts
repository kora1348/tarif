export interface TarificationTitreResponse {
  PLN_PLC: PlnPlcInfo[];
}

export interface PlnPlcInfo {
  PLACECODE: number;
  PLACELABEL: string;
  PLN_SVM: PlnSvmInfo[];
}

export interface PlnSvmInfo {
  SVM: number;
  ISIN: string;
  LABEL: string;
  PLN: PlnDetail[];
}

export interface PlnDetail {
  CODE: string;
  PLAN: number;
  CANAL: string;
  AV: string;
  LIB: string;
  DATEV_EFFECTIVE: string;
  PLAGE: Plage[];
}

export interface Plage {
  BORNE: number;
  FRAIS_BORDEREAU: number;
  FRAIS_RETRAIT: number;
  TYPE_COURTAGE: number;
  COURTAGE: number;
  MIN_COURTAGE: number;
  TYPE_FRAIS_ETR: number;
  FRAIS_ETRANGERS: number;
  MIN_FRAIS_ETR: number;
}