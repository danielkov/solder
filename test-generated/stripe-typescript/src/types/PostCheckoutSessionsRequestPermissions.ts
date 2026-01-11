import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * permissions_param
 *
 * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. Can only be set when creating `embedded` or `custom` sessions.

For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
 */
export interface PostCheckoutSessionsRequestPermissions {
  updateShippingDetails?: string;
}

export const PostCheckoutSessionsRequestPermissionsSchema: TypedSchema<PostCheckoutSessionsRequestPermissions> = typed<PostCheckoutSessionsRequestPermissions>(object({
  updateShippingDetails: optional(string()),
}));