import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostAccountsAccountCapabilitiesCapabilityRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * To request a new capability for an account, pass true. There can be a delay before the requested capability becomes active. If the capability has any activation requirements, the response includes them in the `requirements` arrays.

If a capability isn't permanent, you can remove it from the account by passing false. Some capabilities are permanent after they've been requested. Attempting to remove a permanent capability returns an error.
   */
  requested?: boolean;
}

export const PostAccountsAccountCapabilitiesCapabilityRequestSchema: TypedSchema<PostAccountsAccountCapabilitiesCapabilityRequest> = typed<PostAccountsAccountCapabilitiesCapabilityRequest>(object({
  expand: optional(array(string())),
  requested: optional(boolean()),
}));