import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * buy_button_param
 */
export interface PostCustomerSessionsRequestBuyButton {
  enabled: boolean;
}

export const PostCustomerSessionsRequestBuyButtonSchema: TypedSchema<PostCustomerSessionsRequestBuyButton> = typed<PostCustomerSessionsRequestBuyButton>(object({
  enabled: boolean(),
}));