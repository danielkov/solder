import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { ResponseInputAudio } from './ResponseInputAudio';
import { ResponseInputAudioSchema } from './ResponseInputAudio';
import type { ResponseInputFile } from './ResponseInputFile';
import { ResponseInputFileSchema } from './ResponseInputFile';
import type { ResponseInputImage } from './ResponseInputImage';
import { ResponseInputImageSchema } from './ResponseInputImage';
import type { ResponseInputText } from './ResponseInputText';
import { ResponseInputTextSchema } from './ResponseInputText';
export type InlineTypeUnionObjectContentUnion = ResponseInputText | ResponseInputImage | ResponseInputFile | ResponseInputAudio;

export const InlineTypeUnionObjectContentUnionSchema: TypedSchema<InlineTypeUnionObjectContentUnion> = typed<InlineTypeUnionObjectContentUnion>(union(ResponseInputTextSchema, ResponseInputImageSchema, ResponseInputFileSchema, ResponseInputAudioSchema));