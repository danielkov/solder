import type { RatingSummary, SelfConflictTest, TestResponse } from '../types';
import { UnexpectedError } from '../types/errors';


// Operation-specific error classes

export class DefaultService {
  constructor(private baseUrl: string, ) {}

  async getRatings(): Promise<RatingSummary> {
    const path = '/ratings';
    const url = `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getSelfTest(): Promise<SelfConflictTest> {
    const path = '/self-test';
    const url = `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getTest(): Promise<TestResponse> {
    const path = '/test';
    const url = `${this.baseUrl}${path}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

}