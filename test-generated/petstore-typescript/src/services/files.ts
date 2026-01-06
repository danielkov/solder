import type { FileImportRequest, UploadFileRequest, UploadFileWithMetadataRequest, UploadMultipleFilesRequest } from '../types';
import { UnexpectedError } from '../types/errors';


// Operation-specific error classes

export class FilesService {
  constructor(private baseUrl: string, ) {}

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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return;
  }

}