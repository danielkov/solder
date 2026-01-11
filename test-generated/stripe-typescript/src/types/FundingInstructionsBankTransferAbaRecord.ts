import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferABARecord
 *
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export interface FundingInstructionsBankTransferAbaRecord {
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
   * The ABA account number
   */
  accountNumber: string;
  /**
   * The account type
   */
  accountType: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The bank name
   */
  bankName: string;
  /**
   * The ABA routing number
   */
  routingNumber: string;
}

export const FundingInstructionsBankTransferAbaRecordSchema: TypedSchema<FundingInstructionsBankTransferAbaRecord> = typed<FundingInstructionsBankTransferAbaRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: string(),
  accountNumber: string(),
  accountType: string(),
  bankAddress: AddressSchema,
  bankName: string(),
  routingNumber: string(),
}));