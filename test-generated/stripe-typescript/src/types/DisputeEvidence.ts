import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CancellationPolicyOrRef } from './CancellationPolicyOrRef';
import { CancellationPolicyOrRefSchema } from './CancellationPolicyOrRef';
import type { CustomerCommunicationOrRef } from './CustomerCommunicationOrRef';
import { CustomerCommunicationOrRefSchema } from './CustomerCommunicationOrRef';
import type { CustomerSignatureOrRef } from './CustomerSignatureOrRef';
import { CustomerSignatureOrRefSchema } from './CustomerSignatureOrRef';
import type { DisputeEnhancedEvidence } from './DisputeEnhancedEvidence';
import { DisputeEnhancedEvidenceSchema } from './DisputeEnhancedEvidence';
import type { DuplicateChargeDocumentationOrRef } from './DuplicateChargeDocumentationOrRef';
import { DuplicateChargeDocumentationOrRefSchema } from './DuplicateChargeDocumentationOrRef';
import type { ReceiptOrRef } from './ReceiptOrRef';
import { ReceiptOrRefSchema } from './ReceiptOrRef';
import type { RefundPolicyOrRef } from './RefundPolicyOrRef';
import { RefundPolicyOrRefSchema } from './RefundPolicyOrRef';
import type { ServiceDocumentationOrRef } from './ServiceDocumentationOrRef';
import { ServiceDocumentationOrRefSchema } from './ServiceDocumentationOrRef';
import type { ShippingDocumentationOrRef } from './ShippingDocumentationOrRef';
import { ShippingDocumentationOrRefSchema } from './ShippingDocumentationOrRef';
import type { UncategorizedFileOrRef } from './UncategorizedFileOrRef';
import { UncategorizedFileOrRefSchema } from './UncategorizedFileOrRef';
/**
 * DisputeEvidence
 *
 * 
 */
export interface DisputeEvidence {
  /**
   * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
   */
  accessActivityLog?: string;
  /**
   * The billing address provided by the customer.
   */
  billingAddress?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
   */
  cancellationPolicy?: CancellationPolicyOrRef;
  /**
   * An explanation of how and when the customer was shown your refund policy prior to purchase.
   */
  cancellationPolicyDisclosure?: string;
  /**
   * A justification for why the customer's subscription was not canceled.
   */
  cancellationRebuttal?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
   */
  customerCommunication?: CustomerCommunicationOrRef;
  /**
   * The email address of the customer.
   */
  customerEmailAddress?: string;
  /**
   * The name of the customer.
   */
  customerName?: string;
  /**
   * The IP address that the customer used when making the purchase.
   */
  customerPurchaseIp?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
   */
  customerSignature?: CustomerSignatureOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
   */
  duplicateChargeDocumentation?: DuplicateChargeDocumentationOrRef;
  /**
   * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
   */
  duplicateChargeExplanation?: string;
  /**
   * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
   */
  duplicateChargeId?: string;
  /**
   * DisputeEnhancedEvidence
   *
   * 
   */
  enhancedEvidence: DisputeEnhancedEvidence;
  /**
   * A description of the product or service that was sold.
   */
  productDescription?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
   */
  receipt?: ReceiptOrRef;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
   */
  refundPolicy?: RefundPolicyOrRef;
  /**
   * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
   */
  refundPolicyDisclosure?: string;
  /**
   * A justification for why the customer is not entitled to a refund.
   */
  refundRefusalExplanation?: string;
  /**
   * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
   */
  serviceDate?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
   */
  serviceDocumentation?: ServiceDocumentationOrRef;
  /**
   * The address to which a physical product was shipped. You should try to include as complete address information as possible.
   */
  shippingAddress?: string;
  /**
   * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
   */
  shippingCarrier?: string;
  /**
   * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
   */
  shippingDate?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
   */
  shippingDocumentation?: ShippingDocumentationOrRef;
  /**
   * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
   */
  shippingTrackingNumber?: string;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
   */
  uncategorizedFile?: UncategorizedFileOrRef;
  /**
   * Any additional evidence or statements.
   */
  uncategorizedText?: string;
}

export const DisputeEvidenceSchema: TypedSchema<DisputeEvidence> = typed<DisputeEvidence>(object({
  accessActivityLog: optional(string()),
  billingAddress: optional(string()),
  get cancellationPolicy() { return optional(CancellationPolicyOrRefSchema) },
  cancellationPolicyDisclosure: optional(string()),
  cancellationRebuttal: optional(string()),
  get customerCommunication() { return optional(CustomerCommunicationOrRefSchema) },
  customerEmailAddress: optional(string()),
  customerName: optional(string()),
  customerPurchaseIp: optional(string()),
  get customerSignature() { return optional(CustomerSignatureOrRefSchema) },
  get duplicateChargeDocumentation() { return optional(DuplicateChargeDocumentationOrRefSchema) },
  duplicateChargeExplanation: optional(string()),
  duplicateChargeId: optional(string()),
  enhancedEvidence: DisputeEnhancedEvidenceSchema,
  productDescription: optional(string()),
  get receipt() { return optional(ReceiptOrRefSchema) },
  get refundPolicy() { return optional(RefundPolicyOrRefSchema) },
  refundPolicyDisclosure: optional(string()),
  refundRefusalExplanation: optional(string()),
  serviceDate: optional(string()),
  get serviceDocumentation() { return optional(ServiceDocumentationOrRefSchema) },
  shippingAddress: optional(string()),
  shippingCarrier: optional(string()),
  shippingDate: optional(string()),
  get shippingDocumentation() { return optional(ShippingDocumentationOrRefSchema) },
  shippingTrackingNumber: optional(string()),
  get uncategorizedFile() { return optional(UncategorizedFileOrRefSchema) },
  uncategorizedText: optional(string()),
}));