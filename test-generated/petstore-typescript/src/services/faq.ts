import type { FaqItem, FaqList, HttpError } from '../types';
import { UnexpectedError } from '../types/errors';


// Operation-specific error classes

/**
 * Error thrown when listFaqItems returns status 500.
 */
export class ListFaqItemsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: HttpError;

  constructor(body: HttpError) {
    super(`ListFaqItemsInternalServerErrorError`);
    this.name = 'ListFaqItemsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when getFaqItem returns status 404.
 */
export class GetFaqItemNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: HttpError;

  constructor(body: HttpError) {
    super(`GetFaqItemNotFoundError`);
    this.name = 'GetFaqItemNotFoundError';
    this.body = body;
  }
}

export class FaqService {
  constructor(private baseUrl: string, ) {}

  /**
   * List FAQ items
   *
   * Returns a list of frequently asked questions - tests acronym handling
   *
   * @param category 
   * @throws {ListFaqItemsInternalServerErrorError | UnexpectedError}
   */
  async listFaqItems(params: {
    category?: string;
  }): Promise<FaqList> {
    const path = '/faq';
    const queryParams = new URLSearchParams();
    if (params.category !== undefined) {
      queryParams.append('category', String(params.category));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      switch (response.status) {
        case 500: {
          try {
            const body = await response.json() as HttpError;
            throw new ListFaqItemsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListFaqItemsInternalServerErrorError) throw e;
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
   * Get FAQ item by ID
   *
   * @param id 
   * @throws {GetFaqItemNotFoundError | UnexpectedError}
   */
  async getFaqItem(params: {
    id: string;
  }): Promise<FaqItem> {
    const path = `/faq/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      switch (response.status) {
        case 404: {
          try {
            const body = await response.json() as HttpError;
            throw new GetFaqItemNotFoundError(body);
          } catch (e) {
            if (e instanceof GetFaqItemNotFoundError) throw e;
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