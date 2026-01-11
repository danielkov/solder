import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeWechat {
  prepayId?: string;
  qrCodeUrl?: string;
  statementDescriptor?: string;
}

export const SourceTypeWechatSchema: TypedSchema<SourceTypeWechat> = typed<SourceTypeWechat>(object({
  prepayId: optional(string()),
  qrCodeUrl: optional(string()),
  statementDescriptor: optional(string()),
}));