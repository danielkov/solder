// Generated types from OpenAPI specification

export interface PaginatedResponse {
  items: Array<any>;
  pagination: PaginationMeta;
}

export interface PaginationMeta {
  limit?: number;
  page?: number;
  total?: number;
}

export interface RatingDistribution {
  /**
   * Count of 1-star ratings
   */
  1: number;
  /**
   * Count of 2-star ratings
   */
  2: number;
  /**
   * Count of 3-star ratings
   */
  3: number;
  /**
   * Count of 4-star ratings
   */
  4: number;
  /**
   * Count of 5-star ratings
   */
  5: number;
}

export interface RatingSummary {
  distribution: RatingDistribution;
}

export interface SuccessResponse {
  data?: any;
  success?: true;
}

export interface TestItem {
  id?: string;
  name?: string;
}

export interface TestResponse {
  items: Array<TestItem>;
  pagination: PaginationMeta;
}