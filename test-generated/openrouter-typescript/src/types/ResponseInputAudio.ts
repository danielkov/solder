import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { InputAudioProperty } from './InputAudioProperty';
import { InputAudioPropertySchema } from './InputAudioProperty';
/**
 * Audio input content item
 */
export interface ResponseInputAudio {
  inputAudio: InputAudioProperty;
  type: string;
}

export const ResponseInputAudioSchema: TypedSchema<ResponseInputAudio> = typed<ResponseInputAudio>(object({
  inputAudio: InputAudioPropertySchema,
  type: string(),
}));