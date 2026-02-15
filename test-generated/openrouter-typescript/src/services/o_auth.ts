import type { BadRequestResponse, CreateAuthKeysCodeRequest, CreateAuthKeysCodeResponse, ExchangeAuthCodeForApiKeyRequest, ExchangeAuthCodeForApiKeyResponse, ForbiddenResponse, InternalServerResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when exchangeAuthCodeForApiKey returns status 400.
 */
export class ExchangeAuthCodeForApiKeyBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`ExchangeAuthCodeForApiKeyBadRequestError`);
    this.name = 'ExchangeAuthCodeForApiKeyBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when exchangeAuthCodeForApiKey returns status 403.
 */
export class ExchangeAuthCodeForApiKeyForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: ForbiddenResponse;

  constructor(body: ForbiddenResponse) {
    super(`ExchangeAuthCodeForApiKeyForbiddenError`);
    this.name = 'ExchangeAuthCodeForApiKeyForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when exchangeAuthCodeForApiKey returns status 500.
 */
export class ExchangeAuthCodeForApiKeyInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ExchangeAuthCodeForApiKeyInternalServerErrorError`);
    this.name = 'ExchangeAuthCodeForApiKeyInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createAuthKeysCode returns status 400.
 */
export class CreateAuthKeysCodeBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`CreateAuthKeysCodeBadRequestError`);
    this.name = 'CreateAuthKeysCodeBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createAuthKeysCode returns status 401.
 */
export class CreateAuthKeysCodeUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`CreateAuthKeysCodeUnauthorizedError`);
    this.name = 'CreateAuthKeysCodeUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createAuthKeysCode returns status 500.
 */
export class CreateAuthKeysCodeInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`CreateAuthKeysCodeInternalServerErrorError`);
    this.name = 'CreateAuthKeysCodeInternalServerErrorError';
    this.body = body;
  }
}

export class OAuthService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Exchange authorization code for API key
   *
   * Exchange an authorization code from the PKCE flow for a user-controlled API key
   *
   * @param body 
   * @throws {ExchangeAuthCodeForApiKeyBadRequestError | ExchangeAuthCodeForApiKeyForbiddenError | ExchangeAuthCodeForApiKeyInternalServerErrorError | UnexpectedError}
   */
  async exchangeAuthCodeForApiKey(params: {
    body: ExchangeAuthCodeForApiKeyRequest;
  }): Promise<ExchangeAuthCodeForApiKeyResponse> {
    const path = '/auth/keys';
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
            const body = await response.json() as BadRequestResponse;
            await this.raise(new ExchangeAuthCodeForApiKeyBadRequestError(body));
          } catch (e) {
            if (e instanceof ExchangeAuthCodeForApiKeyBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as ForbiddenResponse;
            await this.raise(new ExchangeAuthCodeForApiKeyForbiddenError(body));
          } catch (e) {
            if (e instanceof ExchangeAuthCodeForApiKeyForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new ExchangeAuthCodeForApiKeyInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof ExchangeAuthCodeForApiKeyInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

  /**
   * Create authorization code
   *
   * Create an authorization code for the PKCE flow to generate a user-controlled API key
   *
   * @param body 
   * @throws {CreateAuthKeysCodeBadRequestError | CreateAuthKeysCodeUnauthorizedError | CreateAuthKeysCodeInternalServerErrorError | UnexpectedError}
   */
  async createAuthKeysCode(params: {
    body: CreateAuthKeysCodeRequest;
  }): Promise<CreateAuthKeysCodeResponse> {
    const path = '/auth/keys/code';
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
            const body = await response.json() as BadRequestResponse;
            await this.raise(new CreateAuthKeysCodeBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateAuthKeysCodeBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            await this.raise(new CreateAuthKeysCodeUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateAuthKeysCodeUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new CreateAuthKeysCodeInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof CreateAuthKeysCodeInternalServerErrorError) throw e;
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