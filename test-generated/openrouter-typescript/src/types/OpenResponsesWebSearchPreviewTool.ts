import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ResponsesSearchContextSize } from './ResponsesSearchContextSize';
import { ResponsesSearchContextSizeSchema } from './ResponsesSearchContextSize';
import type { WebSearchPreviewToolUserLocation } from './WebSearchPreviewToolUserLocation';
import { WebSearchPreviewToolUserLocationSchema } from './WebSearchPreviewToolUserLocation';
/**
 * Web search preview tool configuration
 */
export interface OpenResponsesWebSearchPreviewTool {
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  userLocation?: WebSearchPreviewToolUserLocation;
}

export const OpenResponsesWebSearchPreviewToolSchema: TypedSchema<OpenResponsesWebSearchPreviewTool> = typed<OpenResponsesWebSearchPreviewTool>(object({
  get searchContextSize() { return optional(ResponsesSearchContextSizeSchema) },
  type: string(),
  get userLocation() { return optional(WebSearchPreviewToolUserLocationSchema) },
}));