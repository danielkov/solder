import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { InlineTypeObject } from './InlineTypeObject';
import { InlineTypeObjectSchema } from './InlineTypeObject';
import type { InlineTypeObject2 } from './InlineTypeObject2';
import { InlineTypeObject2Schema } from './InlineTypeObject2';
export type ChatMessageContentItemVideo = InlineTypeObject | InlineTypeObject2;

export const ChatMessageContentItemVideoSchema: TypedSchema<ChatMessageContentItemVideo> = typed<ChatMessageContentItemVideo>(union(InlineTypeObjectSchema, InlineTypeObject2Schema));