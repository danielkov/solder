import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferSpeiRecord
 *
 * SPEI Records contain Mexico bank account details per the SPEI format.
 */
export interface FundingInstructionsBankTransferSpeiRecord {
  /**
   * Address
   *
   * 
   */
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The three-digit bank code
   */
  bankCode: string;
  /**
   * The short banking institution name
   */
  bankName: string;
  /**
   * The CLABE number
   */
  clabe: string;
}

export const FundingInstructionsBankTransferSpeiRecordSchema: TypedSchema<FundingInstructionsBankTransferSpeiRecord> = typed<FundingInstructionsBankTransferSpeiRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: string(),
  bankAddress: AddressSchema,
  bankCode: string(),
  bankName: string(),
  clabe: string(),
}));