import { number, object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface FilePath {
  fileId: string;
  index: number;
  type: string;
}

export const FilePathSchema: TypedSchema<FilePath> = typed<FilePath>(object({ fileId: string(), index: number(), type: string() }));
