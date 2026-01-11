import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * cartes_bancaires_network_options_param
 */
export interface PostPaymentIntentsRequestCardObjectCartesBancaires {
  cbAvalgo: string;
  cbExemption?: string;
  cbScore?: number;
}

export const PostPaymentIntentsRequestCardObjectCartesBancairesSchema: TypedSchema<PostPaymentIntentsRequestCardObjectCartesBancaires> = typed<PostPaymentIntentsRequestCardObjectCartesBancaires>(object({
  cbAvalgo: string(),
  cbExemption: optional(string()),
  cbScore: optional(number()),
}));