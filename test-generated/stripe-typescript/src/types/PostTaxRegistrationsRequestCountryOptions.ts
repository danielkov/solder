import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestAe } from './PostTaxRegistrationsRequestAe';
import { PostTaxRegistrationsRequestAeSchema } from './PostTaxRegistrationsRequestAe';
import type { PostTaxRegistrationsRequestAm } from './PostTaxRegistrationsRequestAm';
import { PostTaxRegistrationsRequestAmSchema } from './PostTaxRegistrationsRequestAm';
import type { PostTaxRegistrationsRequestAt } from './PostTaxRegistrationsRequestAt';
import { PostTaxRegistrationsRequestAtSchema } from './PostTaxRegistrationsRequestAt';
import type { PostTaxRegistrationsRequestCa } from './PostTaxRegistrationsRequestCa';
import { PostTaxRegistrationsRequestCaSchema } from './PostTaxRegistrationsRequestCa';
import type { PostTaxRegistrationsRequestTh } from './PostTaxRegistrationsRequestTh';
import { PostTaxRegistrationsRequestThSchema } from './PostTaxRegistrationsRequestTh';
import type { PostTaxRegistrationsRequestUs } from './PostTaxRegistrationsRequestUs';
import { PostTaxRegistrationsRequestUsSchema } from './PostTaxRegistrationsRequestUs';
/**
 * country_options
 *
 * Specific options for a registration in the specified `country`.
 */
export interface PostTaxRegistrationsRequestCountryOptions {
  /**
   * default
   */
  ae?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  al?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  am?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  ao?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  at?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  au?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  aw?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  az?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  ba?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  bb?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  bd?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  be?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  bf?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  bg?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  bh?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  bj?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  bs?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  by?: PostTaxRegistrationsRequestAm;
  /**
   * canada
   */
  ca?: PostTaxRegistrationsRequestCa;
  /**
   * default
   */
  cd?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  ch?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  cl?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  cm?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  co?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  cr?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  cv?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  cy?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  cz?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  de?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  dk?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  ec?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  ee?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  eg?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  es?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  et?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  fi?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  fr?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  gb?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  ge?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  gn?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  gr?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  hr?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  hu?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  id?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  ie?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  in?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  is?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  it?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  jp?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  ke?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  kg?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  kh?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  kr?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  kz?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  la?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  lt?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  lu?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  lv?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  ma?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  md?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  me?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  mk?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  mr?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  mt?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  mx?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  my?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  ng?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  nl?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  no?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  np?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  nz?: PostTaxRegistrationsRequestAe;
  /**
   * default
   */
  om?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  pe?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  ph?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  pl?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  pt?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  ro?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  rs?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  ru?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  sa?: PostTaxRegistrationsRequestAm;
  /**
   * europe
   */
  se?: PostTaxRegistrationsRequestAt;
  /**
   * default
   */
  sg?: PostTaxRegistrationsRequestAe;
  /**
   * europe
   */
  si?: PostTaxRegistrationsRequestAt;
  /**
   * europe
   */
  sk?: PostTaxRegistrationsRequestAt;
  /**
   * simplified
   */
  sn?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  sr?: PostTaxRegistrationsRequestAe;
  /**
   * thailand
   */
  th?: PostTaxRegistrationsRequestTh;
  /**
   * simplified
   */
  tj?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  tr?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  tw?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  tz?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  ua?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  ug?: PostTaxRegistrationsRequestAm;
  /**
   * united_states
   */
  us?: PostTaxRegistrationsRequestUs;
  /**
   * default
   */
  uy?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  uz?: PostTaxRegistrationsRequestAm;
  /**
   * simplified
   */
  vn?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  za?: PostTaxRegistrationsRequestAe;
  /**
   * simplified
   */
  zm?: PostTaxRegistrationsRequestAm;
  /**
   * default
   */
  zw?: PostTaxRegistrationsRequestAe;
}

export const PostTaxRegistrationsRequestCountryOptionsSchema: TypedSchema<PostTaxRegistrationsRequestCountryOptions> = typed<PostTaxRegistrationsRequestCountryOptions>(object({
  get ae() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get al() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get am() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ao() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get at() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get au() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get aw() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get az() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ba() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get bb() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get bd() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get be() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get bf() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get bg() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get bh() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get bj() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get bs() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get by() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ca() { return optional(PostTaxRegistrationsRequestCaSchema) },
  get cd() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get ch() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get cl() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get cm() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get co() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get cr() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get cv() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get cy() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get cz() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get de() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get dk() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get ec() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ee() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get eg() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get es() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get et() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get fi() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get fr() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get gb() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get ge() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get gn() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get gr() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get hr() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get hu() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get id() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ie() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get in() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get is() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get it() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get jp() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get ke() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get kg() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get kh() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get kr() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get kz() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get la() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get lt() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get lu() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get lv() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get ma() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get md() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get me() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get mk() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get mr() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get mt() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get mx() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get my() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ng() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get nl() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get no() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get np() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get nz() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get om() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get pe() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ph() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get pl() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get pt() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get ro() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get rs() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get ru() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get sa() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get se() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get sg() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get si() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get sk() { return optional(PostTaxRegistrationsRequestAtSchema) },
  get sn() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get sr() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get th() { return optional(PostTaxRegistrationsRequestThSchema) },
  get tj() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get tr() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get tw() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get tz() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ua() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get ug() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get us() { return optional(PostTaxRegistrationsRequestUsSchema) },
  get uy() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get uz() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get vn() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get za() { return optional(PostTaxRegistrationsRequestAeSchema) },
  get zm() { return optional(PostTaxRegistrationsRequestAmSchema) },
  get zw() { return optional(PostTaxRegistrationsRequestAeSchema) },
}));