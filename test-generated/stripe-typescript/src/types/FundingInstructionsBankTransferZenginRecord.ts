import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * FundingInstructionsBankTransferZenginRecord
 *
 * Zengin Records contain Japan bank account details per the Zengin format.
 */
export interface FundingInstructionsBankTransferZenginRecord {
  /**
   * Address
   *
   * 
   */
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName?: string;
  /**
   * The account number
   */
  accountNumber?: string;
  /**
   * The bank account type. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: string;
  /**
   * Address
   *
   * 
   */
  bankAddress: Address;
  /**
   * The bank code of the account
   */
  bankCode?: string;
  /**
   * The bank name of the account
   */
  bankName?: string;
  /**
   * The branch code of the account
   */
  branchCode?: string;
  /**
   * The branch name of the account
   */
  branchName?: string;
}

export const FundingInstructionsBankTransferZenginRecordSchema: TypedSchema<FundingInstructionsBankTransferZenginRecord> = typed<FundingInstructionsBankTransferZenginRecord>(object({
  accountHolderAddress: AddressSchema,
  accountHolderName: optional(string()),
  accountNumber: optional(string()),
  accountType: optional(string()),
  bankAddress: AddressSchema,
  bankCode: optional(string()),
  bankName: optional(string()),
  branchCode: optional(string()),
  branchName: optional(string()),
}));