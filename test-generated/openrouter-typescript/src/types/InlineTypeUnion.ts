import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObject } from './InlineTypeUnionObject';
import { InlineTypeUnionObjectSchema } from './InlineTypeUnionObject';
import type { InlineTypeUnionObject2 } from './InlineTypeUnionObject2';
import { InlineTypeUnionObject2Schema } from './InlineTypeUnionObject2';
import type { InlineTypeUnionObject3 } from './InlineTypeUnionObject3';
import { InlineTypeUnionObject3Schema } from './InlineTypeUnionObject3';
import type { InlineTypeUnionObject4 } from './InlineTypeUnionObject4';
import { InlineTypeUnionObject4Schema } from './InlineTypeUnionObject4';
import type { OutputItemImageGenerationCall } from './OutputItemImageGenerationCall';
import { OutputItemImageGenerationCallSchema } from './OutputItemImageGenerationCall';
import type { OutputMessage } from './OutputMessage';
import { OutputMessageSchema } from './OutputMessage';
export type InlineTypeUnion = InlineTypeUnionObject | InlineTypeUnionObject2 | InlineTypeUnionObject3 | InlineTypeUnionObject4 | OutputItemImageGenerationCall | OutputMessage;

export const InlineTypeUnionSchema: TypedSchema<InlineTypeUnion> = typed<InlineTypeUnion>(union(InlineTypeUnionObjectSchema, InlineTypeUnionObject2Schema, InlineTypeUnionObject3Schema, InlineTypeUnionObject4Schema, OutputItemImageGenerationCallSchema, OutputMessageSchema));