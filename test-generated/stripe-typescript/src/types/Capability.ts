import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountCapabilityFutureRequirements } from './AccountCapabilityFutureRequirements';
import { AccountCapabilityFutureRequirementsSchema } from './AccountCapabilityFutureRequirements';
import type { AccountCapabilityRequirements } from './AccountCapabilityRequirements';
import { AccountCapabilityRequirementsSchema } from './AccountCapabilityRequirements';
import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
/**
 * AccountCapability
 *
 * This is an object representing a capability for a Stripe account.

Related guide: [Account capabilities](https://stripe.com/docs/connect/account-capabilities)
 */
export interface Capability {
  /**
   * The account for which the capability enables functionality.
   */
  account: AccountOrRef;
  /**
   * AccountCapabilityFutureRequirements
   *
   * 
   */
  futureRequirements?: AccountCapabilityFutureRequirements;
  /**
   * The identifier for the capability.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Whether the capability has been requested.
   */
  requested: boolean;
  /**
   * Time at which the capability was requested. Measured in seconds since the Unix epoch.
   */
  requestedAt?: number;
  /**
   * AccountCapabilityRequirements
   *
   * 
   */
  requirements?: AccountCapabilityRequirements;
  /**
   * The status of the capability.
   */
  status: string;
}

export const CapabilitySchema: TypedSchema<Capability> = typed<Capability>(object({
  account: AccountOrRefSchema,
  get futureRequirements() { return optional(AccountCapabilityFutureRequirementsSchema) },
  id: string(),
  object: string(),
  requested: boolean(),
  requestedAt: optional(number()),
  get requirements() { return optional(AccountCapabilityRequirementsSchema) },
  status: string(),
}));