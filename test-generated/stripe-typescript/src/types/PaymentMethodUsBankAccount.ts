import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodUsBankAccountStatusDetails } from './PaymentMethodUsBankAccountStatusDetails';
import { PaymentMethodUsBankAccountStatusDetailsSchema } from './PaymentMethodUsBankAccountStatusDetails';
import type { UsBankAccountNetworks } from './UsBankAccountNetworks';
import { UsBankAccountNetworksSchema } from './UsBankAccountNetworks';
/**
 * payment_method_us_bank_account
 *
 * 
 */
export interface PaymentMethodUsBankAccount {
  /**
   * Account holder type: individual or company.
   */
  accountHolderType?: string;
  /**
   * Account type: checkings or savings. Defaults to checking if omitted.
   */
  accountType?: string;
  /**
   * The name of the bank.
   */
  bankName?: string;
  /**
   * The ID of the Financial Connections Account used to create the payment method.
   */
  financialConnectionsAccount?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * Contains information about US bank account networks that can be used.
   */
  networks?: UsBankAccountNetworks;
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string;
  /**
   * Contains information about the future reusability of this PaymentMethod.
   */
  statusDetails?: PaymentMethodUsBankAccountStatusDetails;
}

export const PaymentMethodUsBankAccountSchema: TypedSchema<PaymentMethodUsBankAccount> = typed<PaymentMethodUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountType: optional(string()),
  bankName: optional(string()),
  financialConnectionsAccount: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  get networks() { return optional(UsBankAccountNetworksSchema) },
  routingNumber: optional(string()),
  get statusDetails() { return optional(PaymentMethodUsBankAccountStatusDetailsSchema) },
}));