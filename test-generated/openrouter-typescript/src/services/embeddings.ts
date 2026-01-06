import type { BadGatewayResponse, BadRequestResponse, CreateEmbeddingsRequest, CreateEmbeddingsResponse, EdgeNetworkTimeoutResponse, InternalServerResponse, ModelsListResponse, NotFoundResponse, PaymentRequiredResponse, ProviderOverloadedResponse, ServiceUnavailableResponse, TooManyRequestsResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig) {}

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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as BadRequestResponse;
            throw new CreateEmbeddingsBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new CreateEmbeddingsUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 402: {
          try {
            const body = await response.json() as PaymentRequiredResponse;
            throw new CreateEmbeddingsStatus402Error(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus402Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new CreateEmbeddingsNotFoundError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new CreateEmbeddingsTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new CreateEmbeddingsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsInternalServerErrorError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 502: {
          try {
            const body = await response.json() as BadGatewayResponse;
            throw new CreateEmbeddingsBadGatewayError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsBadGatewayError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 503: {
          try {
            const body = await response.json() as ServiceUnavailableResponse;
            throw new CreateEmbeddingsServiceUnavailableError(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsServiceUnavailableError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 524: {
          try {
            const body = await response.json() as EdgeNetworkTimeoutResponse;
            throw new CreateEmbeddingsStatus524Error(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus524Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 529: {
          try {
            const body = await response.json() as ProviderOverloadedResponse;
            throw new CreateEmbeddingsStatus529Error(body);
          } catch (e) {
            if (e instanceof CreateEmbeddingsStatus529Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as BadRequestResponse;
            throw new ListEmbeddingsModelsBadRequestError(body);
          } catch (e) {
            if (e instanceof ListEmbeddingsModelsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListEmbeddingsModelsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListEmbeddingsModelsInternalServerErrorError) throw e;
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