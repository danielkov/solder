import type { ChatError, ChatGenerationParams, ChatResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when sendChatCompletionRequest returns status 400.
 */
export class SendChatCompletionRequestBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`SendChatCompletionRequestBadRequestError`);
    this.name = 'SendChatCompletionRequestBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when sendChatCompletionRequest returns status 401.
 */
export class SendChatCompletionRequestUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`SendChatCompletionRequestUnauthorizedError`);
    this.name = 'SendChatCompletionRequestUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when sendChatCompletionRequest returns status 429.
 */
export class SendChatCompletionRequestTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`SendChatCompletionRequestTooManyRequestsError`);
    this.name = 'SendChatCompletionRequestTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when sendChatCompletionRequest returns status 500.
 */
export class SendChatCompletionRequestInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: ChatError;

  constructor(body: ChatError) {
    super(`SendChatCompletionRequestInternalServerErrorError`);
    this.name = 'SendChatCompletionRequestInternalServerErrorError';
    this.body = body;
  }
}

export class ChatService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Create a chat completion
   *
   * Sends a request for a model response for the given chat conversation. Supports both streaming and non-streaming modes.
   *
   * @param body 
   * @throws {SendChatCompletionRequestBadRequestError | SendChatCompletionRequestUnauthorizedError | SendChatCompletionRequestTooManyRequestsError | SendChatCompletionRequestInternalServerErrorError | UnexpectedError}
   */
  async sendChatCompletionRequest(params: {
    body: ChatGenerationParams;
  }): Promise<ChatResponse> {
    const path = '/chat/completions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
    }
    
    const request: SDKRequestInit = {
      method: 'POST',
      url,
      headers,
      body: JSON.stringify(params.body),
    };
    await this.hooks.onRequest?.(request);

    const response = await fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    await this.hooks.onResponse?.({
      method: request.method,
      url: request.url,
      status: response.status,
      headers: response.headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as ChatError;
            await this.raise(new SendChatCompletionRequestBadRequestError(body));
          } catch (e) {
            if (e instanceof SendChatCompletionRequestBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as ChatError;
            await this.raise(new SendChatCompletionRequestUnauthorizedError(body));
          } catch (e) {
            if (e instanceof SendChatCompletionRequestUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as ChatError;
            await this.raise(new SendChatCompletionRequestTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof SendChatCompletionRequestTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as ChatError;
            await this.raise(new SendChatCompletionRequestInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof SendChatCompletionRequestInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

}