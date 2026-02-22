import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface SourceTypeEps {
  reference?: string;
  statementDescriptor?: string;
}

export const SourceTypeEpsSchema: TypedSchema<SourceTypeEps> = typed<SourceTypeEps>(object({
  reference: optional(string()),
  statementDescriptor: optional(string()),
}));
