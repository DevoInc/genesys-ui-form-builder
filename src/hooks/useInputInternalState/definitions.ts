import { TFieldStatus } from '@devoinc/genesys-ui';

export interface IValidationResult {
  message?: string;
  result: boolean;
  status?: TFieldStatus;
}

export type TValidateFunction = (value: number | string) => IValidationResult;
