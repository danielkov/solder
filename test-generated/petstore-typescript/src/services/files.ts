import type { FileImportRequest, UploadFileRequest, UploadFileWithMetadataRequest, UploadMultipleFilesRequest } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit } from './client';

// Operation-specific error classes

export class FilesService {
  constructor(private baseUrl: string, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Upload a file
   *
   * Upload a single file with optional description
   *
   * @param body 
   */
  async uploadFile(params: {
    body: UploadFileRequest;
  }): Promise<void> {
    const path = '/files';
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

    return;
  }

  /**
   * Upload multiple files
   *
   * Upload multiple files in a single request
   *
   * @param body 
   */
  async uploadMultipleFiles(params: {
    body: UploadMultipleFilesRequest;
  }): Promise<void> {
    const path = '/files/batch';
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

    return;
  }

  /**
   * Import a file with referenced schema
   *
   * Import a file using a referenced multipart schema (tests multipart with $ref)
   *
   * @param body 
   */
  async importFile(params: {
    body: FileImportRequest;
  }): Promise<void> {
    const path = '/files/import';
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

    return;
  }

  /**
   * Upload raw file bytes
   *
   * Upload a file as raw binary data in the request body
   *
   * @param body 
   */
  async uploadRawFile(params: {
    body: string;
  }): Promise<void> {
    const path = '/files/raw';
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
      await this.raise(new UnexpectedError(response.status, await response.text()));
    }

    return;
  }

  /**
   * Upload a file with metadata
   *
   * Upload a file along with structured metadata
   *
   * @param body 
   */
  async uploadFileWithMetadata(params: {
    body: UploadFileWithMetadataRequest;
  }): Promise<void> {
    const path = '/files/with-metadata';
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

    return;
  }

}