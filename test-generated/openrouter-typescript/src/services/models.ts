import type { BadRequestResponse, InternalServerResponse, ModelsCountResponse, ModelsListResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getModels returns status 400.
 */
export class GetModelsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`GetModelsBadRequestError`);
    this.name = 'GetModelsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getModels returns status 500.
 */
export class GetModelsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetModelsInternalServerErrorError`);
    this.name = 'GetModelsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when listModelsCount returns status 500.
 */
export class ListModelsCountInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListModelsCountInternalServerErrorError`);
    this.name = 'ListModelsCountInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when listModelsUser returns status 401.
 */
export class ListModelsUserUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`ListModelsUserUnauthorizedError`);
    this.name = 'ListModelsUserUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when listModelsUser returns status 500.
 */
export class ListModelsUserInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListModelsUserInternalServerErrorError`);
    this.name = 'ListModelsUserInternalServerErrorError';
    this.body = body;
  }
}

export class ModelsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * List all models and their properties
   *
   * @param category 
   * @param supportedParameters 
   * @throws {GetModelsBadRequestError | GetModelsInternalServerErrorError | UnexpectedError}
   */
  async getModels(params: {
    category?: string;
    supportedParameters?: string;
  }): Promise<ModelsListResponse> {
    const path = '/models';
    const queryParams = new URLSearchParams();
    if (params.category !== undefined) {
      queryParams.append('category', String(params.category));
    }
    if (params.supportedParameters !== undefined) {
      queryParams.append('supported_parameters', String(params.supportedParameters));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
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
            throw new GetModelsBadRequestError(body);
          } catch (e) {
            if (e instanceof GetModelsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetModelsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetModelsInternalServerErrorError) throw e;
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
   * Get total count of available models
   * @throws {ListModelsCountInternalServerErrorError | UnexpectedError}
   */
  async listModelsCount(): Promise<ModelsCountResponse> {
    const path = '/models/count';
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
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListModelsCountInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListModelsCountInternalServerErrorError) throw e;
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
   * List models filtered by user provider preferences
   * @throws {ListModelsUserUnauthorizedError | ListModelsUserInternalServerErrorError | UnexpectedError}
   */
  async listModelsUser(): Promise<ModelsListResponse> {
    const path = '/models/user';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearer) {
      headers['Authorization'] = `Bearer ${this.security.bearer}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new ListModelsUserUnauthorizedError(body);
          } catch (e) {
            if (e instanceof ListModelsUserUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListModelsUserInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListModelsUserInternalServerErrorError) throw e;
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