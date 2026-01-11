import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface InputAudioProperty {
  data: string;
  format: string;
}

export const InputAudioPropertySchema: TypedSchema<InputAudioProperty> = typed<InputAudioProperty>(object({
  data: string(),
  format: string(),
}));