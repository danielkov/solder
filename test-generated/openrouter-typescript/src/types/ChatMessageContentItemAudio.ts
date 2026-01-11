import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { InputAudioProperty } from './InputAudioProperty';
import { InputAudioPropertySchema } from './InputAudioProperty';
export interface ChatMessageContentItemAudio {
  inputAudio: InputAudioProperty;
  type: "input_audio";
}

export const ChatMessageContentItemAudioSchema: TypedSchema<ChatMessageContentItemAudio> = typed<ChatMessageContentItemAudio>(object({
  inputAudio: InputAudioPropertySchema,
  type: literal("input_audio"),
}));