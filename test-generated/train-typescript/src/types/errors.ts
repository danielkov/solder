// Generated API error classes

/**
 * Thrown when the API returns an unexpected error status code,
 * or when JSON parsing fails for an expected error.
 */
export class UnexpectedError extends globalThis.Error {
  readonly status: number;
  readonly body: string;

  constructor(status: number, body: string) {
    super(`Unexpected error ${status}: ${body}`);
    this.name = 'UnexpectedError';
    this.status = status;
    this.body = body;
  }
}