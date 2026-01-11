import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * Model count data
 */
export interface DataProperty2 {
  /**
   * Total number of available models
   */
  count: number;
}

export const DataProperty2Schema: TypedSchema<DataProperty2> = typed<DataProperty2>(object({
  count: number(),
}));