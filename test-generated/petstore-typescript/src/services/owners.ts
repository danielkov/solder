import type { NewOwner, Owner } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit } from './client';

// Operation-specific error classes

export class OwnersService {
  constructor(private baseUrl: string, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * List all pet owners
   *
   * Returns a list of registered pet owners
   */
  async listOwners(): Promise<Array<Owner>> {
    const path = '/owners';
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
      await this.raise(new UnexpectedError(response.status, await response.text()));
    }

    return response.json();
  }

}