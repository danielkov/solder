import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * A problem detail object as defined in RFC 7807.
 */
export interface Problem {
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  detail?: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem
   */
  instance?: string;
  /**
   * The HTTP status code
   */
  status?: number;
  /**
   * A short, human-readable summary of the problem type
   */
  title?: string;
  /**
   * A URI reference that identifies the problem type
   */
  type?: string;
}

export const ProblemSchema: TypedSchema<Problem> = typed<Problem>(object({
  detail: optional(string()),
  instance: optional(string()),
  status: optional(number()),
  title: optional(string()),
  type: optional(string()),
}));