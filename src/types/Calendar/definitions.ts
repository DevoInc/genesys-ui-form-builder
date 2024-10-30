export type TDateRangeType = {
  from: Date | number;
  to: Date | number;
  realTime: boolean;
};

export type TValidateResult = {
  result: boolean;
  errorMessage: string;
};
