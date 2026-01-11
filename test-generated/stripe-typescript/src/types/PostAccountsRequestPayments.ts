import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payments_settings_specs
 */
export interface PostAccountsRequestPayments {
  statementDescriptor?: string;
  statementDescriptorKana?: string;
  statementDescriptorKanji?: string;
}

export const PostAccountsRequestPaymentsSchema: TypedSchema<PostAccountsRequestPayments> = typed<PostAccountsRequestPayments>(object({
  statementDescriptor: optional(string()),
  statementDescriptorKana: optional(string()),
  statementDescriptorKanji: optional(string()),
}));