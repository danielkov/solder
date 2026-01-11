import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { OpenResponsesWebSearch20250826Tool } from './OpenResponsesWebSearch20250826Tool';
import { OpenResponsesWebSearch20250826ToolSchema } from './OpenResponsesWebSearch20250826Tool';
import type { OpenResponsesWebSearchPreview20250311Tool } from './OpenResponsesWebSearchPreview20250311Tool';
import { OpenResponsesWebSearchPreview20250311ToolSchema } from './OpenResponsesWebSearchPreview20250311Tool';
import type { OpenResponsesWebSearchPreviewTool } from './OpenResponsesWebSearchPreviewTool';
import { OpenResponsesWebSearchPreviewToolSchema } from './OpenResponsesWebSearchPreviewTool';
import type { OpenResponsesWebSearchTool } from './OpenResponsesWebSearchTool';
import { OpenResponsesWebSearchToolSchema } from './OpenResponsesWebSearchTool';
import type { ToolsItemUnionUnion } from './ToolsItemUnionUnion';
import { ToolsItemUnionUnionSchema } from './ToolsItemUnionUnion';
export type ToolsItemUnion = ToolsItemUnionUnion | OpenResponsesWebSearchPreviewTool | OpenResponsesWebSearchPreview20250311Tool | OpenResponsesWebSearchTool | OpenResponsesWebSearch20250826Tool;

export const ToolsItemUnionSchema: TypedSchema<ToolsItemUnion> = typed<ToolsItemUnion>(union(ToolsItemUnionUnionSchema, OpenResponsesWebSearchPreviewToolSchema, OpenResponsesWebSearchPreview20250311ToolSchema, OpenResponsesWebSearchToolSchema, OpenResponsesWebSearch20250826ToolSchema));