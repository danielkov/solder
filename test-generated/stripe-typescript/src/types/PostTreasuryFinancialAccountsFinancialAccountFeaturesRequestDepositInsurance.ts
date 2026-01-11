import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * access
 *
 * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsuranceSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance>(object({
  requested: boolean(),
}));