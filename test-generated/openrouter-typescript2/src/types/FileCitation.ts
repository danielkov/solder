import { number, object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface FileCitation {
  fileId: string;
  filename: string;
  index: number;
  type: string;
}

export const FileCitationSchema: TypedSchema<FileCitation> = typed<FileCitation>(object({
  fileId: string(),
  filename: string(),
  index: number(),
  type: string(),
}));
