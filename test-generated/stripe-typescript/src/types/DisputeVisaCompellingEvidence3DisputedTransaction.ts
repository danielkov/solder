import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DisputeTransactionShippingAddress } from './DisputeTransactionShippingAddress';
import { DisputeTransactionShippingAddressSchema } from './DisputeTransactionShippingAddress';
/**
 * DisputeVisaCompellingEvidence3DisputedTransaction
 *
 * 
 */
export interface DisputeVisaCompellingEvidence3DisputedTransaction {
  /**
   * User Account ID used to log into business platform. Must be recognizable by the user.
   */
  customerAccountId?: string;
  /**
   * Unique identifier of the cardholder’s device derived from a combination of at least two hardware and software attributes. Must be at least 20 characters.
   */
  customerDeviceFingerprint?: string;
  /**
   * Unique identifier of the cardholder’s device such as a device serial number (e.g., International Mobile Equipment Identity [IMEI]). Must be at least 15 characters.
   */
  customerDeviceId?: string;
  /**
   * The email address of the customer.
   */
  customerEmailAddress?: string;
  /**
   * The IP address that the customer used when making the purchase.
   */
  customerPurchaseIp?: string;
  /**
   * Categorization of disputed payment.
   */
  merchandiseOrServices?: string;
  /**
   * A description of the product or service that was sold.
   */
  productDescription?: string;
  /**
   * The address to which a physical product was shipped. All fields are required for Visa Compelling Evidence 3.0 evidence submission.
   */
  shippingAddress?: DisputeTransactionShippingAddress;
}

export const DisputeVisaCompellingEvidence3DisputedTransactionSchema: TypedSchema<DisputeVisaCompellingEvidence3DisputedTransaction> = typed<DisputeVisaCompellingEvidence3DisputedTransaction>(object({
  customerAccountId: optional(string()),
  customerDeviceFingerprint: optional(string()),
  customerDeviceId: optional(string()),
  customerEmailAddress: optional(string()),
  customerPurchaseIp: optional(string()),
  merchandiseOrServices: optional(string()),
  productDescription: optional(string()),
  get shippingAddress() { return optional(DisputeTransactionShippingAddressSchema) },
}));