import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferSortCodeRecord
 *
 * Sort Code Records contain U.K. bank account details per the sort code format.
 */
export interface FundingInstructionsBankTransferSortCodeRecord {
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
   * The account number
   */
  accountNumber: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The six-digit sort code
   */
  sortCode: string;
}

export const FundingInstructionsBankTransferSortCodeRecordSchema: TypedSchema<FundingInstructionsBankTransferSortCodeRecord> = typed<FundingInstructionsBankTransferSortCodeRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: string(),
  accountNumber: string(),
  bankAddress: AddressSchema,
  sortCode: string(),
}));