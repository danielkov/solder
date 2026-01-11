import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { AssistantMessage } from './AssistantMessage';
import { AssistantMessageSchema } from './AssistantMessage';
import type { InlineTypeObject3 } from './InlineTypeObject3';
import { InlineTypeObject3Schema } from './InlineTypeObject3';
import type { SystemMessage } from './SystemMessage';
import { SystemMessageSchema } from './SystemMessage';
import type { ToolResponseMessage } from './ToolResponseMessage';
import { ToolResponseMessageSchema } from './ToolResponseMessage';
import type { UserMessage } from './UserMessage';
import { UserMessageSchema } from './UserMessage';
export type Message = SystemMessage | UserMessage | InlineTypeObject3 | AssistantMessage | ToolResponseMessage;

export const MessageSchema: TypedSchema<Message> = typed<Message>(union(SystemMessageSchema, UserMessageSchema, InlineTypeObject3Schema, AssistantMessageSchema, ToolResponseMessageSchema));