import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type ModelName = string;

export const ModelNameSchema: TypedSchema<ModelName> = typed<ModelName>(string());