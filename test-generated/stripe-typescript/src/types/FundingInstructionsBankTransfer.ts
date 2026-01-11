import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { FundingInstructionsBankTransferFinancialAddress } from './FundingInstructionsBankTransferFinancialAddress';
import { FundingInstructionsBankTransferFinancialAddressSchema } from './FundingInstructionsBankTransferFinancialAddress';
/**
 * FundingInstructionsBankTransfer
 *
 * 
 */
export interface FundingInstructionsBankTransfer {
  /**
   * The country of the bank account to fund
   */
  country: string;
  /**
   * A list of financial addresses that can be used to fund a particular balance
   */
  financialAddresses: Array<FundingInstructionsBankTransferFinancialAddress>;
  /**
   * The bank_transfer type
   */
  type: string;
}

export const FundingInstructionsBankTransferSchema: TypedSchema<FundingInstructionsBankTransfer> = typed<FundingInstructionsBankTransfer>(object({
  country: string(),
  financialAddresses: array(FundingInstructionsBankTransferFinancialAddressSchema),
  type: string(),
}));