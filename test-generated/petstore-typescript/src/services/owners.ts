import type { NewOwner, Owner } from '../types';
import { UnexpectedError } from '../types/errors';


// Operation-specific error classes

export class OwnersService {
  constructor(private baseUrl: string, ) {}

  /**
   * List all pet owners
   *
   * Returns a list of registered pet owners
   */
  async listOwners(): Promise<Array<Owner>> {
    const path = '/owners';
    const url = `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Register a new owner
   *
   * Creates a new pet owner account
   *
   * @param body 
   */
  async createOwner(params: {
    body: NewOwner;
  }): Promise<Owner> {
    const path = '/owners';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

}