import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FiltersProperty } from './FiltersProperty';
import { FiltersPropertySchema } from './FiltersProperty';
import type { ResponsesSearchContextSize } from './ResponsesSearchContextSize';
import { ResponsesSearchContextSizeSchema } from './ResponsesSearchContextSize';
import type { ResponsesWebSearchUserLocation } from './ResponsesWebSearchUserLocation';
import { ResponsesWebSearchUserLocationSchema } from './ResponsesWebSearchUserLocation';
/**
 * Web search tool configuration
 */
export interface OpenResponsesWebSearchTool {
  filters?: FiltersProperty;
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  /**
   * User location information for web search
   */
  userLocation?: ResponsesWebSearchUserLocation;
}

export const OpenResponsesWebSearchToolSchema: TypedSchema<OpenResponsesWebSearchTool> = typed<OpenResponsesWebSearchTool>(object({
  get filters() { return optional(FiltersPropertySchema) },
  get searchContextSize() { return optional(ResponsesSearchContextSizeSchema) },
  type: string(),
  get userLocation() { return optional(ResponsesWebSearchUserLocationSchema) },
}));