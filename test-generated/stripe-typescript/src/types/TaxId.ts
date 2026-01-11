import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
import type { TaxIDsOwner } from './TaxIDsOwner';
import { TaxIDsOwnerSchema } from './TaxIDsOwner';
import type { TaxIdVerification } from './TaxIdVerification';
import { TaxIdVerificationSchema } from './TaxIdVerification';
/**
 * tax_id
 *
 * You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers) or account.
Customer and account tax IDs get displayed on related invoices and credit notes.

Related guides: [Customer tax identification numbers](https://stripe.com/docs/billing/taxes/tax-ids), [Account tax IDs](https://stripe.com/docs/invoicing/connect#account-tax-ids)
 */
export interface TaxId {
  /**
   * Two-letter ISO code representing the country of the tax ID.
   */
  country?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * ID of the customer.
   */
  customer?: CustomerOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account or customer the tax ID belongs to.
   */
  owner?: TaxIDsOwner;
  /**
   * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`. Note that some legacy tax IDs have type `unknown`
   */
  type: string;
  /**
   * Value of the tax ID.
   */
  value: string;
  /**
   * Tax ID verification information.
   */
  verification?: TaxIdVerification;
}

export const TaxIdSchema: TypedSchema<TaxId> = typed<TaxId>(object({
  country: optional(string()),
  created: number(),
  get customer() { return optional(CustomerOrRefSchema) },
  id: string(),
  livemode: boolean(),
  object: string(),
  get owner() { return optional(TaxIDsOwnerSchema) },
  type: string(),
  value: string(),
  get verification() { return optional(TaxIdVerificationSchema) },
}));