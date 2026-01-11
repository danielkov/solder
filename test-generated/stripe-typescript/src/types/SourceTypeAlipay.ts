import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeAlipay {
  dataString?: string;
  nativeUrl?: string;
  statementDescriptor?: string;
}

export const SourceTypeAlipaySchema: TypedSchema<SourceTypeAlipay> = typed<SourceTypeAlipay>(object({
  dataString: optional(string()),
  nativeUrl: optional(string()),
  statementDescriptor: optional(string()),
}));