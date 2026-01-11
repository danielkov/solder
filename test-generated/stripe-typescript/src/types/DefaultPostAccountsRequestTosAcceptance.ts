import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * tos_acceptance_specs
 *
 * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
 */
export interface DefaultPostAccountsRequestTosAcceptance {
  date?: number;
  ip?: string;
  serviceAgreement?: string;
  userAgent?: string;
}

export const DefaultPostAccountsRequestTosAcceptanceSchema: TypedSchema<DefaultPostAccountsRequestTosAcceptance> = typed<DefaultPostAccountsRequestTosAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  serviceAgreement: optional(string()),
  userAgent: optional(string()),
}));