import type { ChatError, CompletionCreateParams, CompletionResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when createCompletions returns status 400.
 */
export class CreateCompletionsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`CreateCompletionsBadRequestError`);
    this.name = 'CreateCompletionsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createCompletions returns status 401.
 */
export class CreateCompletionsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`CreateCompletionsUnauthorizedError`);
    this.name = 'CreateCompletionsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createCompletions returns status 429.
 */
export class CreateCompletionsTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`CreateCompletionsTooManyRequestsError`);
    this.name = 'CreateCompletionsTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createCompletions returns status 500.
 */
export class CreateCompletionsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`CreateCompletionsInternalServerErrorError`);
    this.name = 'CreateCompletionsInternalServerErrorError';
    this.body = body;
  }
}

export class CompletionsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Create a completion
   *
   * Creates a completion for the provided prompt and parameters. Supports both streaming and non-streaming modes.
   *
   * @param body 
   * @throws {CreateCompletionsBadRequestError | CreateCompletionsUnauthorizedError | CreateCompletionsTooManyRequestsError | CreateCompletionsInternalServerErrorError | UnexpectedError}
   */
  async createCompletions(params: {
    body: CompletionCreateParams;
  }): Promise<CompletionResponse> {
    const path = '/completions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as ChatError;
            throw new CreateCompletionsBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateCompletionsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as ChatError;
            throw new CreateCompletionsUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateCompletionsUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as ChatError;
            throw new CreateCompletionsTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof CreateCompletionsTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as ChatError;
            throw new CreateCompletionsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof CreateCompletionsInternalServerErrorError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
      }
    }

    return response.json();
  }

}