import type { Error, InventoryUpdate, Product, ProductCreate, ProductList, ProductUpdate } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listProducts returns status 400.
 */
export class ListProductsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListProductsBadRequestError`);
    this.name = 'ListProductsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listProducts returns status 401.
 */
export class ListProductsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListProductsUnauthorizedError`);
    this.name = 'ListProductsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createProduct returns status 400.
 */
export class CreateProductBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateProductBadRequestError`);
    this.name = 'CreateProductBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createProduct returns status 401.
 */
export class CreateProductUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateProductUnauthorizedError`);
    this.name = 'CreateProductUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createProduct returns status 409.
 */
export class CreateProductConflictError extends globalThis.Error {
  readonly status = 409;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateProductConflictError`);
    this.name = 'CreateProductConflictError';
    this.body = body;
  }
}

/**
 * Error thrown when getProductById returns status 401.
 */
export class GetProductByIdUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetProductByIdUnauthorizedError`);
    this.name = 'GetProductByIdUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getProductById returns status 404.
 */
export class GetProductByIdNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetProductByIdNotFoundError`);
    this.name = 'GetProductByIdNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProduct returns status 400.
 */
export class UpdateProductBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductBadRequestError`);
    this.name = 'UpdateProductBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProduct returns status 401.
 */
export class UpdateProductUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductUnauthorizedError`);
    this.name = 'UpdateProductUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProduct returns status 404.
 */
export class UpdateProductNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductNotFoundError`);
    this.name = 'UpdateProductNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteProduct returns status 401.
 */
export class DeleteProductUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteProductUnauthorizedError`);
    this.name = 'DeleteProductUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteProduct returns status 404.
 */
export class DeleteProductNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteProductNotFoundError`);
    this.name = 'DeleteProductNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProductInventory returns status 400.
 */
export class UpdateProductInventoryBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductInventoryBadRequestError`);
    this.name = 'UpdateProductInventoryBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProductInventory returns status 401.
 */
export class UpdateProductInventoryUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductInventoryUnauthorizedError`);
    this.name = 'UpdateProductInventoryUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when updateProductInventory returns status 404.
 */
export class UpdateProductInventoryNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateProductInventoryNotFoundError`);
    this.name = 'UpdateProductInventoryNotFoundError';
    this.body = body;
  }
}

export class ProductsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * List all products
   *
   * Retrieve a paginated list of products from the catalog
   *
   * @param page 
   * @param pageSize 
   * @param category 
   * @param status 
   * @param minPrice 
   * @param maxPrice 
   * @param search 
   * @param tags 
   * @throws {ListProductsBadRequestError | ListProductsUnauthorizedError | UnexpectedError}
   */
  async listProducts(params: {
    page?: number;
    pageSize?: number;
    category?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
    tags?: string;
  }): Promise<ProductList> {
    const path = '/products';
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.pageSize !== undefined) {
      queryParams.append('pageSize', String(params.pageSize));
    }
    if (params.category !== undefined) {
      queryParams.append('category', String(params.category));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.minPrice !== undefined) {
      queryParams.append('minPrice', String(params.minPrice));
    }
    if (params.maxPrice !== undefined) {
      queryParams.append('maxPrice', String(params.maxPrice));
    }
    if (params.search !== undefined) {
      queryParams.append('search', String(params.search));
    }
    if (params.tags !== undefined) {
      queryParams.append('tags', String(params.tags));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new ListProductsBadRequestError(body);
          } catch (e) {
            if (e instanceof ListProductsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new ListProductsUnauthorizedError(body);
          } catch (e) {
            if (e instanceof ListProductsUnauthorizedError) throw e;
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
   * Create a new product
   *
   * Add a new product to the catalog
   *
   * @param body 
   * @throws {CreateProductBadRequestError | CreateProductUnauthorizedError | CreateProductConflictError | UnexpectedError}
   */
  async createProduct(params: {
    body: ProductCreate;
  }): Promise<Product> {
    const path = '/products';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
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
            const body = await response.json() as Error;
            throw new CreateProductBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateProductBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new CreateProductUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateProductUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 409: {
          try {
            const body = await response.json() as Error;
            throw new CreateProductConflictError(body);
          } catch (e) {
            if (e instanceof CreateProductConflictError) throw e;
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
   * Get product by ID
   *
   * Retrieve a specific product by its ID
   * @throws {GetProductByIdUnauthorizedError | GetProductByIdNotFoundError | UnexpectedError}
   */
  async getProductById(): Promise<Product> {
    const path = '/products/{productId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new GetProductByIdUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetProductByIdUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new GetProductByIdNotFoundError(body);
          } catch (e) {
            if (e instanceof GetProductByIdNotFoundError) throw e;
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
   * Update product
   *
   * Update an existing product
   *
   * @param body 
   * @throws {UpdateProductBadRequestError | UpdateProductUnauthorizedError | UpdateProductNotFoundError | UnexpectedError}
   */
  async updateProduct(params: {
    body: ProductUpdate;
  }): Promise<Product> {
    const path = '/products/{productId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductBadRequestError(body);
          } catch (e) {
            if (e instanceof UpdateProductBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductUnauthorizedError(body);
          } catch (e) {
            if (e instanceof UpdateProductUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductNotFoundError(body);
          } catch (e) {
            if (e instanceof UpdateProductNotFoundError) throw e;
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
   * Delete product
   *
   * Remove a product from the catalog
   * @throws {DeleteProductUnauthorizedError | DeleteProductNotFoundError | UnexpectedError}
   */
  async deleteProduct(): Promise<void> {
    const path = '/products/{productId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new DeleteProductUnauthorizedError(body);
          } catch (e) {
            if (e instanceof DeleteProductUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new DeleteProductNotFoundError(body);
          } catch (e) {
            if (e instanceof DeleteProductNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
      }
    }

    return;
  }

  /**
   * Update product inventory
   *
   * Update the inventory quantity for a product
   *
   * @param body 
   * @throws {UpdateProductInventoryBadRequestError | UpdateProductInventoryUnauthorizedError | UpdateProductInventoryNotFoundError | UnexpectedError}
   */
  async updateProductInventory(params: {
    body: InventoryUpdate;
  }): Promise<Product> {
    const path = '/products/{productId}/inventory';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductInventoryBadRequestError(body);
          } catch (e) {
            if (e instanceof UpdateProductInventoryBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductInventoryUnauthorizedError(body);
          } catch (e) {
            if (e instanceof UpdateProductInventoryUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new UpdateProductInventoryNotFoundError(body);
          } catch (e) {
            if (e instanceof UpdateProductInventoryNotFoundError) throw e;
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