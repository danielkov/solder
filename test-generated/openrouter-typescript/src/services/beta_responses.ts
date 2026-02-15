import type { BadGatewayResponse, BadRequestResponse, EdgeNetworkTimeoutResponse, InternalServerResponse, NotFoundResponse, OpenResponsesNonStreamingResponse, OpenResponsesRequest, PayloadTooLargeResponse, PaymentRequiredResponse, ProviderOverloadedResponse, RequestTimeoutResponse, ServiceUnavailableResponse, TooManyRequestsResponse, UnauthorizedResponse, UnprocessableEntityResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when createResponses returns status 400.
 */
export class CreateResponsesBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`CreateResponsesBadRequestError`);
    this.name = 'CreateResponsesBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 401.
 */
export class CreateResponsesUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`CreateResponsesUnauthorizedError`);
    this.name = 'CreateResponsesUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 402.
 */
export class CreateResponsesStatus402Error extends globalThis.Error {
  readonly status = 402;
  readonly body: PaymentRequiredResponse;

  constructor(body: PaymentRequiredResponse) {
    super(`CreateResponsesStatus402Error`);
    this.name = 'CreateResponsesStatus402Error';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 404.
 */
export class CreateResponsesNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`CreateResponsesNotFoundError`);
    this.name = 'CreateResponsesNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 408.
 */
export class CreateResponsesStatus408Error extends globalThis.Error {
  readonly status = 408;
  readonly body: RequestTimeoutResponse;

  constructor(body: RequestTimeoutResponse) {
    super(`CreateResponsesStatus408Error`);
    this.name = 'CreateResponsesStatus408Error';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 413.
 */
export class CreateResponsesStatus413Error extends globalThis.Error {
  readonly status = 413;
  readonly body: PayloadTooLargeResponse;

  constructor(body: PayloadTooLargeResponse) {
    super(`CreateResponsesStatus413Error`);
    this.name = 'CreateResponsesStatus413Error';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 422.
 */
export class CreateResponsesUnprocessableEntityError extends globalThis.Error {
  readonly status = 422;
  readonly body: UnprocessableEntityResponse;

  constructor(body: UnprocessableEntityResponse) {
    super(`CreateResponsesUnprocessableEntityError`);
    this.name = 'CreateResponsesUnprocessableEntityError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 429.
 */
export class CreateResponsesTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`CreateResponsesTooManyRequestsError`);
    this.name = 'CreateResponsesTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 500.
 */
export class CreateResponsesInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`CreateResponsesInternalServerErrorError`);
    this.name = 'CreateResponsesInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 502.
 */
export class CreateResponsesBadGatewayError extends globalThis.Error {
  readonly status = 502;
  readonly body: BadGatewayResponse;

  constructor(body: BadGatewayResponse) {
    super(`CreateResponsesBadGatewayError`);
    this.name = 'CreateResponsesBadGatewayError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 503.
 */
export class CreateResponsesServiceUnavailableError extends globalThis.Error {
  readonly status = 503;
  readonly body: ServiceUnavailableResponse;

  constructor(body: ServiceUnavailableResponse) {
    super(`CreateResponsesServiceUnavailableError`);
    this.name = 'CreateResponsesServiceUnavailableError';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 524.
 */
export class CreateResponsesStatus524Error extends globalThis.Error {
  readonly status = 524;
  readonly body: EdgeNetworkTimeoutResponse;

  constructor(body: EdgeNetworkTimeoutResponse) {
    super(`CreateResponsesStatus524Error`);
    this.name = 'CreateResponsesStatus524Error';
    this.body = body;
  }
}

/**
 * Error thrown when createResponses returns status 529.
 */
export class CreateResponsesStatus529Error extends globalThis.Error {
  readonly status = 529;
  readonly body: ProviderOverloadedResponse;

  constructor(body: ProviderOverloadedResponse) {
    super(`CreateResponsesStatus529Error`);
    this.name = 'CreateResponsesStatus529Error';
    this.body = body;
  }
}

export class BetaResponsesService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Create a response
   *
   * Creates a streaming or non-streaming response using OpenResponses API format
   *
   * @param body 
   * @throws {CreateResponsesBadRequestError | CreateResponsesUnauthorizedError | CreateResponsesStatus402Error | CreateResponsesNotFoundError | CreateResponsesStatus408Error | CreateResponsesStatus413Error | CreateResponsesUnprocessableEntityError | CreateResponsesTooManyRequestsError | CreateResponsesInternalServerErrorError | CreateResponsesBadGatewayError | CreateResponsesServiceUnavailableError | CreateResponsesStatus524Error | CreateResponsesStatus529Error | UnexpectedError}
   */
  async createResponses(params: {
    body: OpenResponsesRequest;
  }): Promise<OpenResponsesNonStreamingResponse> {
    const path = '/responses';
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
            await this.raise(new CreateResponsesBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateResponsesBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            await this.raise(new CreateResponsesUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateResponsesUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 402: {
          try {
            const body = await response.json() as PaymentRequiredResponse;
            await this.raise(new CreateResponsesStatus402Error(body));
          } catch (e) {
            if (e instanceof CreateResponsesStatus402Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            await this.raise(new CreateResponsesNotFoundError(body));
          } catch (e) {
            if (e instanceof CreateResponsesNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 408: {
          try {
            const body = await response.json() as RequestTimeoutResponse;
            await this.raise(new CreateResponsesStatus408Error(body));
          } catch (e) {
            if (e instanceof CreateResponsesStatus408Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 413: {
          try {
            const body = await response.json() as PayloadTooLargeResponse;
            await this.raise(new CreateResponsesStatus413Error(body));
          } catch (e) {
            if (e instanceof CreateResponsesStatus413Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 422: {
          try {
            const body = await response.json() as UnprocessableEntityResponse;
            await this.raise(new CreateResponsesUnprocessableEntityError(body));
          } catch (e) {
            if (e instanceof CreateResponsesUnprocessableEntityError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            await this.raise(new CreateResponsesTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof CreateResponsesTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new CreateResponsesInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof CreateResponsesInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 502: {
          try {
            const body = await response.json() as BadGatewayResponse;
            await this.raise(new CreateResponsesBadGatewayError(body));
          } catch (e) {
            if (e instanceof CreateResponsesBadGatewayError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 503: {
          try {
            const body = await response.json() as ServiceUnavailableResponse;
            await this.raise(new CreateResponsesServiceUnavailableError(body));
          } catch (e) {
            if (e instanceof CreateResponsesServiceUnavailableError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 524: {
          try {
            const body = await response.json() as EdgeNetworkTimeoutResponse;
            await this.raise(new CreateResponsesStatus524Error(body));
          } catch (e) {
            if (e instanceof CreateResponsesStatus524Error) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 529: {
          try {
            const body = await response.json() as ProviderOverloadedResponse;
            await this.raise(new CreateResponsesStatus529Error(body));
          } catch (e) {
            if (e instanceof CreateResponsesStatus529Error) throw e;
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