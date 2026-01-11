import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * Default parameters for this model
 */
export interface DefaultParameters {
  frequencyPenalty?: number;
  temperature?: number;
  topP?: number;
}

export const DefaultParametersSchema: TypedSchema<DefaultParameters> = typed<DefaultParameters>(object({
  frequencyPenalty: optional(number()),
  temperature: optional(number()),
  topP: optional(number()),
}));