import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
import type { SigmaScheduledQueryRunError } from './SigmaScheduledQueryRunError';
import { SigmaScheduledQueryRunErrorSchema } from './SigmaScheduledQueryRunError';
/**
 * ScheduledQueryRun
 *
 * If you have [scheduled a Sigma query](https://stripe.com/docs/sigma/scheduled-queries), you'll
receive a `sigma.scheduled_query_run.created` webhook each time the query
runs. The webhook contains a `ScheduledQueryRun` object, which you can use to
retrieve the query results.
 */
export interface ScheduledQueryRun {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * When the query was run, Sigma contained a snapshot of your Stripe data at this time.
   */
  dataLoadTime: number;
  /**
   * SigmaScheduledQueryRunError
   *
   * 
   */
  error?: SigmaScheduledQueryRunError;
  /**
   * The file object representing the results of the query.
   */
  file?: File;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Time at which the result expires and is no longer available for download.
   */
  resultAvailableUntil: number;
  /**
   * SQL for the query.
   */
  sql: string;
  /**
   * The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
   */
  status: string;
  /**
   * Title of the query.
   */
  title: string;
}

export const ScheduledQueryRunSchema: TypedSchema<ScheduledQueryRun> = typed<ScheduledQueryRun>(object({
  created: number(),
  dataLoadTime: number(),
  get error() { return optional(SigmaScheduledQueryRunErrorSchema) },
  get file() { return optional(FileSchema) },
  id: string(),
  livemode: boolean(),
  object: string(),
  resultAvailableUntil: number(),
  sql: string(),
  status: string(),
  title: string(),
}));