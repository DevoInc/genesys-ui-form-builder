export type TDateRangeType = {
  from: Date | number;
  to: Date | number;
  realTime: boolean;
};

export type ValidateResultType = {
  result: boolean;
  errorMessage: string;
};
