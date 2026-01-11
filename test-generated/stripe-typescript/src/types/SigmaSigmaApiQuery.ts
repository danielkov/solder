import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * SigmaSigmaResourcesSigmaAPIQuery
 *
 * A saved query object represents a query that can be executed for a run.
 */
export interface SigmaSigmaApiQuery {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The name of the query.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The sql statement for the query.
   */
  sql: string;
}

export const SigmaSigmaApiQuerySchema: TypedSchema<SigmaSigmaApiQuery> = typed<SigmaSigmaApiQuery>(object({
  created: number(),
  id: string(),
  livemode: boolean(),
  name: string(),
  object: string(),
  sql: string(),
}));