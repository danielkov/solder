import type { BadGatewayResponse, BadRequestResponse, CreateEmbeddingsRequest, CreateEmbeddingsResponse, EdgeNetworkTimeoutResponse, InternalServerResponse, ModelsListResponse, NotFoundResponse, PaymentRequiredResponse, ProviderOverloadedResponse, ServiceUnavailableResponse, TooManyRequestsResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when createEmbeddings returns status 400.
 */
export class CreateEmbeddingsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`CreateEmbeddingsBadRequestError`);
    this.name = 'CreateEmbeddingsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 401.
 */
export class CreateEmbeddingsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`CreateEmbeddingsUnauthorizedError`);
    this.name = 'CreateEmbeddingsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 402.
 */
export class CreateEmbeddingsStatus402Error extends globalThis.Error {
  readonly status = 402;
  readonly body: PaymentRequiredResponse;

  constructor(body: PaymentRequiredResponse) {
    super(`CreateEmbeddingsStatus402Error`);
    this.name = 'CreateEmbeddingsStatus402Error';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 404.
 */
export class CreateEmbeddingsNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`CreateEmbeddingsNotFoundError`);
    this.name = 'CreateEmbeddingsNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 429.
 */
export class CreateEmbeddingsTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`CreateEmbeddingsTooManyRequestsError`);
    this.name = 'CreateEmbeddingsTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 500.
 */
export class CreateEmbeddingsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`CreateEmbeddingsInternalServerErrorError`);
    this.name = 'CreateEmbeddingsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 502.
 */
export class CreateEmbeddingsBadGatewayError extends globalThis.Error {
  readonly status = 502;
  readonly body: BadGatewayResponse;

  constructor(body: BadGatewayResponse) {
    super(`CreateEmbeddingsBadGatewayError`);
    this.name = 'CreateEmbeddingsBadGatewayError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 503.
 */
export class CreateEmbeddingsServiceUnavailableError extends globalThis.Error {
  readonly status = 503;
  readonly body: ServiceUnavailableResponse;

  constructor(body: ServiceUnavailableResponse) {
    super(`CreateEmbeddingsServiceUnavailableError`);
    this.name = 'CreateEmbeddingsServiceUnavailableError';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 524.
 */
export class CreateEmbeddingsStatus524Error extends globalThis.Error {
  readonly status = 524;
  readonly body: EdgeNetworkTimeoutResponse;

  constructor(body: EdgeNetworkTimeoutResponse) {
    super(`CreateEmbeddingsStatus524Error`);
    this.name = 'CreateEmbeddingsStatus524Error';
    this.body = body;
  }
}

/**
 * Error thrown when createEmbeddings returns status 529.
 */
export class CreateEmbeddingsStatus529Error extends globalThis.Error {
  readonly status = 529;
  readonly body: ProviderOverloadedResponse;

  constructor(body: ProviderOverloadedResponse) {
    super(`CreateEmbeddingsStatus529Error`);
    this.name = 'CreateEmbeddingsStatus529Error';
    this.body = body;
  }
}

/**
 * Error thrown when listEmbeddingsModels returns status 400.
 */
export class ListEmbeddingsModelsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`ListEmbeddingsModelsBadRequestError`);
    this.name = 'ListEmbeddingsModelsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listEmbeddingsModels returns status 500.
 */
export class ListEmbeddingsModelsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListEmbeddingsModelsInternalServerErrorError`);
    this.name = 'ListEmbeddingsModelsInternalServerErrorError';
    this.body = body;
  }
}

export class EmbeddingsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Submit an embedding request
   *
   * Submits an embedding request to the embeddings router
   *
   * @param body 
   * @throws {CreateEmbeddingsBadRequestError | CreateEmbeddingsUnauthorizedError | CreateEmbeddingsStatus402Error | CreateEmbeddingsNotFoundError | CreateEmbeddingsTooManyRequestsError | CreateEmbeddingsInternalServerErrorError | CreateEmbeddingsBadGatewayError | CreateEmbeddingsServiceUnavailableError | CreateEmbeddingsStatus524Error | CreateEmbeddingsStatus529Error | UnexpectedError}
   */
  async createEmbeddings(params: {
    body: CreateEmbeddingsRequest;
  }): Promise<CreateEmbeddingsResponse> {
    const path = '/embeddings';
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
            await this.raise(new CreateEmbeddingsBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            await this.raise(new CreateEmbeddingsUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 402: {
          try {
            const body = await response.json() as PaymentRequiredResponse;
            await this.raise(new CreateEmbeddingsStatus402Error(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus402Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            await this.raise(new CreateEmbeddingsNotFoundError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            await this.raise(new CreateEmbeddingsTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new CreateEmbeddingsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 502: {
          try {
            const body = await response.json() as BadGatewayResponse;
            await this.raise(new CreateEmbeddingsBadGatewayError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsBadGatewayError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 503: {
          try {
            const body = await response.json() as ServiceUnavailableResponse;
            await this.raise(new CreateEmbeddingsServiceUnavailableError(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsServiceUnavailableError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 524: {
          try {
            const body = await response.json() as EdgeNetworkTimeoutResponse;
            await this.raise(new CreateEmbeddingsStatus524Error(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus524Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 529: {
          try {
            const body = await response.json() as ProviderOverloadedResponse;
            await this.raise(new CreateEmbeddingsStatus529Error(body));
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus529Error) throw e;
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
   * List all embeddings models
   *
   * Returns a list of all available embeddings models and their properties
   * @throws {ListEmbeddingsModelsBadRequestError | ListEmbeddingsModelsInternalServerErrorError | UnexpectedError}
   */
  async listEmbeddingsModels(): Promise<ModelsListResponse> {
    const path = '/embeddings/models';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
    }
    
    const request: SDKRequestInit = {
      method: 'GET',
      url,
      headers,
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
            await this.raise(new ListEmbeddingsModelsBadRequestError(body));
          } catch (e) {
            if (e instanceof ListEmbeddingsModelsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new ListEmbeddingsModelsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof ListEmbeddingsModelsInternalServerErrorError) throw e;
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