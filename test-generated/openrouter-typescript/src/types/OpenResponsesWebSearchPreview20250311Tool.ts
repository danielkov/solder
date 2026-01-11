import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ResponsesSearchContextSize } from './ResponsesSearchContextSize';
import { ResponsesSearchContextSizeSchema } from './ResponsesSearchContextSize';
import type { WebSearchPreviewToolUserLocation } from './WebSearchPreviewToolUserLocation';
import { WebSearchPreviewToolUserLocationSchema } from './WebSearchPreviewToolUserLocation';
/**
 * Web search preview tool configuration (2025-03-11 version)
 */
export interface OpenResponsesWebSearchPreview20250311Tool {
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  userLocation?: WebSearchPreviewToolUserLocation;
}

export const OpenResponsesWebSearchPreview20250311ToolSchema: TypedSchema<OpenResponsesWebSearchPreview20250311Tool> = typed<OpenResponsesWebSearchPreview20250311Tool>(object({
  get searchContextSize() { return optional(ResponsesSearchContextSizeSchema) },
  type: string(),
  get userLocation() { return optional(WebSearchPreviewToolUserLocationSchema) },
}));