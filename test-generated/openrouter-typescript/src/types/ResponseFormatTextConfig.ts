import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { ResponsesFormatJsonObject } from './ResponsesFormatJsonObject';
import { ResponsesFormatJsonObjectSchema } from './ResponsesFormatJsonObject';
import type { ResponsesFormatText } from './ResponsesFormatText';
import { ResponsesFormatTextSchema } from './ResponsesFormatText';
import type { ResponsesFormatTextJsonSchemaConfig } from './ResponsesFormatTextJsonSchemaConfig';
import { ResponsesFormatTextJsonSchemaConfigSchema } from './ResponsesFormatTextJsonSchemaConfig';
export type ResponseFormatTextConfig = ResponsesFormatText | ResponsesFormatJsonObject | ResponsesFormatTextJsonSchemaConfig;

export const ResponseFormatTextConfigSchema: TypedSchema<ResponseFormatTextConfig> = typed<ResponseFormatTextConfig>(union(ResponsesFormatTextSchema, ResponsesFormatJsonObjectSchema, ResponsesFormatTextJsonSchemaConfigSchema));