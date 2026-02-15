import type { Error, NewPet, Pet, PetList, UpdatePet } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit } from './client';

// Operation-specific error classes

/**
 * Error thrown when listPets returns status 400.
 */
export class ListPetsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListPetsBadRequestError`);
    this.name = 'ListPetsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listPets returns status 500.
 */
export class ListPetsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListPetsInternalServerErrorError`);
    this.name = 'ListPetsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createPet returns status 400.
 */
export class CreatePetBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreatePetBadRequestError`);
    this.name = 'CreatePetBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getPetById returns status 404.
 */
export class GetPetByIdNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetPetByIdNotFoundError`);
    this.name = 'GetPetByIdNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updatePet returns status 404.
 */
export class UpdatePetNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdatePetNotFoundError`);
    this.name = 'UpdatePetNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deletePet returns status 404.
 */
export class DeletePetNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeletePetNotFoundError`);
    this.name = 'DeletePetNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getPetDocuments returns status 404.
 */
export class GetPetDocumentsNotFoundError extends globalThis.Error {
  readonly status = 404;

  constructor() {
    super(`GetPetDocumentsNotFoundError`);
    this.name = 'GetPetDocumentsNotFoundError';
  }
}

/**
 * Error thrown when getPetPhoto returns status 404.
 */
export class GetPetPhotoNotFoundError extends globalThis.Error {
  readonly status = 404;

  constructor() {
    super(`GetPetPhotoNotFoundError`);
    this.name = 'GetPetPhotoNotFoundError';
  }
}

export class PetsService {
  constructor(private baseUrl: string, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * List all pets
   *
   * Returns a paginated list of pets in the store
   *
   * @param limit 
   * @param offset 
   * @param status 
   * @throws {ListPetsBadRequestError | ListPetsInternalServerErrorError | UnexpectedError}
   */
  async listPets(params: {
    limit?: number;
    offset?: number;
    status?: string;
  }): Promise<PetList> {
    const path = '/pets';
    const queryParams = new URLSearchParams();
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.offset !== undefined) {
      queryParams.append('offset', String(params.offset));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
            const body = await response.json() as Error;
            await this.raise(new ListPetsBadRequestError(body));
          } catch (e) {
            if (e instanceof ListPetsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Error;
            await this.raise(new ListPetsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof ListPetsInternalServerErrorError) throw e;
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
   * Create a new pet
   *
   * Adds a new pet to the store
   *
   * @param body 
   * @throws {CreatePetBadRequestError | UnexpectedError}
   */
  async createPet(params: {
    body: NewPet;
  }): Promise<Pet> {
    const path = '/pets';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
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
            const body = await response.json() as Error;
            await this.raise(new CreatePetBadRequestError(body));
          } catch (e) {
            if (e instanceof CreatePetBadRequestError) throw e;
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
   * Export pets data
   *
   * Export all pets data as a binary archive file
   */
  async exportPets(): Promise<string> {
    const path = '/pets/export';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
      await this.raise(new UnexpectedError(response.status, await response.text()));
    }

    return response.json();
  }

  /**
   * Export pets data
   *
   * Export all pets data as a binary archive file
   */
  async exportPetsCsv(): Promise<string> {
    const path = '/pets/export/csv';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
      await this.raise(new UnexpectedError(response.status, await response.text()));
    }

    return response.json();
  }

  /**
   * Get a pet by ID
   *
   * Returns detailed information about a specific pet
   *
   * @param petId 
   * @throws {GetPetByIdNotFoundError | UnexpectedError}
   */
  async getPetById(params: {
    petId: string;
  }): Promise<Pet> {
    const path = `/pets/{petId}`.replace('{petId}', String(params.petId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetPetByIdNotFoundError(body));
          } catch (e) {
            if (e instanceof GetPetByIdNotFoundError) throw e;
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
   * Update a pet
   *
   * Updates an existing pet's information
   *
   * @param petId 
   * @param body 
   * @throws {UpdatePetNotFoundError | UnexpectedError}
   */
  async updatePet(params: {
    petId: string;
    body: UpdatePet;
  }): Promise<Pet> {
    const path = `/pets/{petId}`.replace('{petId}', String(params.petId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
    const request: SDKRequestInit = {
      method: 'PUT',
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
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new UpdatePetNotFoundError(body));
          } catch (e) {
            if (e instanceof UpdatePetNotFoundError) throw e;
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
   * Delete a pet
   *
   * Removes a pet from the store
   *
   * @param petId 
   * @throws {DeletePetNotFoundError | UnexpectedError}
   */
  async deletePet(params: {
    petId: string;
  }): Promise<void> {
    const path = `/pets/{petId}`.replace('{petId}', String(params.petId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
    const request: SDKRequestInit = {
      method: 'DELETE',
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
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeletePetNotFoundError(body));
          } catch (e) {
            if (e instanceof DeletePetNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return;
  }

  /**
   * Get pet documents
   *
   * Returns pet documents in various formats - tests multiple binary content types
   *
   * @param petId 
   * @param format 
   * @throws {GetPetDocumentsNotFoundError | UnexpectedError}
   */
  async getPetDocuments(params: {
    petId: string;
    format?: string;
  }): Promise<string> {
    const path = `/pets/{petId}/documents`.replace('{petId}', String(params.petId));
    const queryParams = new URLSearchParams();
    if (params.format !== undefined) {
      queryParams.append('format', String(params.format));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
        case 404: {
          await this.raise(new GetPetDocumentsNotFoundError());
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

  /**
   * Get pet photo
   *
   * Returns the pet's photo as binary data - tests single binary response handling
   *
   * @param petId 
   * @throws {GetPetPhotoNotFoundError | UnexpectedError}
   */
  async getPetPhoto(params: {
    petId: string;
  }): Promise<string> {
    const path = `/pets/{petId}/photo`.replace('{petId}', String(params.petId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
        case 404: {
          await this.raise(new GetPetPhotoNotFoundError());
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

}