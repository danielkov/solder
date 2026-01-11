import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferIbanRecord
 *
 * Iban Records contain E.U. bank account details per the SEPA format.
 */
export interface FundingInstructionsBankTransferIbanRecord {
  /**
   * Address
   *
   * 
   */
  accountHolderAddress: Address;
  /**
   * The name of the person or business that owns the bank account
   */
  accountHolderName: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The BIC/SWIFT code of the account.
   */
  bic: string;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * The IBAN of the account.
   */
  iban: string;
}

export const FundingInstructionsBankTransferIbanRecordSchema: TypedSchema<FundingInstructionsBankTransferIbanRecord> = typed<FundingInstructionsBankTransferIbanRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: string(),
  bankAddress: AddressSchema,
  bic: string(),
  country: string(),
  iban: string(),
}));