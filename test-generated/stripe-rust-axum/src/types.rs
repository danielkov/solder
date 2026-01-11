//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AccountOrRef {
    Variant1(String),
    Account(Box<Account>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AccountTaxIdsItemUnion {
    Variant1(String),
    TaxId(Box<TaxId>),
    DeletedTaxId(DeletedTaxId),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountsProperty {
    pub data: Vec<FinancialConnectionsAccount>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AcssDebitUnion {
    PaymentIntentPaymentMethodOptionsAcssDebit(PaymentIntentPaymentMethodOptionsAcssDebit),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AcssDebitUnion2 {
    SetupIntentPaymentMethodOptionsAcssDebit(SetupIntentPaymentMethodOptionsAcssDebit),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AdditionalDocumentationOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AffirmUnion {
    PaymentMethodOptionsAffirm(PaymentMethodOptionsAffirm),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AfterpayClearpayUnion {
    PaymentMethodOptionsAfterpayClearpay(PaymentMethodOptionsAfterpayClearpay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AlipayUnion {
    PaymentMethodOptionsAlipay(PaymentMethodOptionsAlipay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AlmaUnion {
    PaymentMethodOptionsAlma(PaymentMethodOptionsAlma),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AmazonPayUnion {
    PaymentMethodOptionsAmazonPay(PaymentMethodOptionsAmazonPay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AmazonPayUnion2 {
    SetupIntentPaymentMethodOptionsAmazonPay(SetupIntentPaymentMethodOptionsAmazonPay),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AmountDetailsUnion {
    PaymentFlowsAmountDetails(PaymentFlowsAmountDetails),
    PaymentFlowsAmountDetailsClient(PaymentFlowsAmountDetailsClient),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ApplicationFeeOrRef {
    Variant1(String),
    ApplicationFee(Box<ApplicationFee>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ApplicationOrRef {
    Variant1(String),
    Application(Application),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ApplicationUnion {
    Variant1(String),
    Application(Application),
    DeletedApplication(DeletedApplication),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AuBecsDebitUnion {
    PaymentIntentPaymentMethodOptionsAuBecsDebit(PaymentIntentPaymentMethodOptionsAuBecsDebit),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AuthorizationOrRef {
    Variant1(String),
    IssuingAuthorization(Box<IssuingAuthorization>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AvailableProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BackOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BacsDebitUnion {
    PaymentIntentPaymentMethodOptionsBacsDebit(PaymentIntentPaymentMethodOptionsBacsDebit),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BacsDebitUnion2 {
    SetupIntentPaymentMethodOptionsBacsDebit(SetupIntentPaymentMethodOptionsBacsDebit),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BalanceTransactionOrRef {
    Variant1(String),
    BalanceTransaction(Box<BalanceTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BancontactUnion {
    PaymentMethodOptionsBancontact(PaymentMethodOptionsBancontact),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BillieUnion {
    PaymentMethodOptionsBillie(PaymentMethodOptionsBillie),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BlikUnion {
    PaymentIntentPaymentMethodOptionsBlik(PaymentIntentPaymentMethodOptionsBlik),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BoletoUnion {
    PaymentMethodOptionsBoleto(PaymentMethodOptionsBoleto),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CancellationPolicyOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardLogoOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardOrRef {
    Variant1(String),
    IssuingCard(IssuingCard),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardPresentUnion {
    PaymentMethodOptionsCardPresent(PaymentMethodOptionsCardPresent),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardPresentUnion2 {
    SetupIntentPaymentMethodOptionsCardPresent(SetupIntentPaymentMethodOptionsCardPresent),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardStatementOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardUnion {
    PaymentIntentPaymentMethodOptionsCard(PaymentIntentPaymentMethodOptionsCard),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardUnion2 {
    SetupIntentPaymentMethodOptionsCard(SetupIntentPaymentMethodOptionsCard),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CardholderOrRef {
    Variant1(String),
    IssuingCardholder(IssuingCardholder),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CashProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CashReceiptOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CashappUnion {
    PaymentMethodOptionsCashapp(PaymentMethodOptionsCashapp),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ChargeOrRef {
    Variant1(String),
    Charge(Box<Charge>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CheckImageOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CheckoutSessionOrRef {
    Variant1(String),
    CheckoutSession(CheckoutSession),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ConfigurationOrRef {
    Variant1(String),
    BillingPortalConfiguration(BillingPortalConfiguration),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CouponOrRef {
    Variant1(String),
    Coupon(Coupon),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreditBalanceTransactionOrRef {
    Variant1(String),
    BillingCreditBalanceTransaction(Box<BillingCreditBalanceTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreditGrantOrRef {
    Variant1(String),
    BillingCreditGrant(Box<BillingCreditGrant>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreditNoteOrRef {
    Variant1(String),
    CreditNote(Box<CreditNote>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CryptoUnion {
    PaymentMethodOptionsCrypto(PaymentMethodOptionsCrypto),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CurrencyOptionsProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CurrentPricesPerMetricTonProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CurrentProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerBalanceTransactionOrRef {
    Variant1(String),
    CustomerBalanceTransaction(Box<CustomerBalanceTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerBalanceUnion {
    PaymentMethodOptionsCustomerBalance(PaymentMethodOptionsCustomerBalance),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerCommunicationOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerOrRef {
    Variant1(String),
    Customer(Box<Customer>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerSignatureOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CustomerUnion {
    Variant1(String),
    Customer(Box<Customer>),
    DeletedCustomer(DeletedCustomer),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DataItemUnion {
    BankAccount(Box<BankAccount>),
    Card(Box<Card>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DataItemUnion2 {
    BankAccount(Box<BankAccount>),
    Card(Box<Card>),
    Source(Source),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultAccountTaxIdsItemOrRef {
    Variant1(String),
    TaxId(Box<TaxId>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPaymentMethodOrRef {
    Variant1(String),
    PaymentMethod(Box<PaymentMethod>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostAccountSessionsRequestFeatures {
    pub disable_stripe_user_authentication: Option<bool>,
    pub edit_payout_schedule: Option<bool>,
    pub external_account_collection: Option<bool>,
    pub instant_payouts: Option<bool>,
    pub standard_payouts: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostAccountsRequestMetadata {
    Variant1(PostAccountsRequestMetadataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostAccountsRequestTosAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub service_agreement: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostAccountsRequestVerification {
    pub additional_document: Option<PostAccountsRequestAdditionalDocument>,
    pub document: Option<PostAccountsRequestAdditionalDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostCheckoutSessionsRequestMandateOptions {
    pub reference_prefix: Option<PostCheckoutSessionsRequestReferencePrefix>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostCheckoutSessionsRequestTransferData {
    pub amount_percent: Option<f32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostCustomerSessionsRequestFeatures {
    pub payment_method_allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_redisplay: Option<String>,
    pub payment_method_remove: Option<String>,
    pub payment_method_save: Option<String>,
    pub payment_method_save_allow_redisplay_override: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestAcssDebit {
    PaymentIntentPaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestAcssDebitObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestAcssDebitObject {
    pub mandate_options: Option<DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestAcssDebitObjectMandateOptions {
    pub custom_mandate_url: Option<PostAccountsRequestSupportUrl>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestAuBecsDebit {
    PaymentIntentPaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestAuBecsDebitObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestAuBecsDebitObject {
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestBacsDebit {
    PaymentIntentPaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestBacsDebitObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestBacsDebitObject {
    pub mandate_options: Option<DefaultPostCheckoutSessionsRequestMandateOptions>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestBoleto {
    PaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestBoletoObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestBoletoObject {
    pub expires_after_days: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestEps {
    PaymentIntentPaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestEpsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestEpsObject {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestFpx {
    PaymentMethodOptionsParam(PostCheckoutSessionsRequestBancontact),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestKlarna {
    PaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestKlarnaObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestKlarnaObject {
    pub capture_method: Option<String>,
    pub on_demand: Option<DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand>,
    pub preferred_locale: Option<String>,
    pub setup_future_usage: Option<String>,
    pub subscriptions: Option<DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand {
    pub average_amount: Option<i32>,
    pub maximum_amount: Option<i32>,
    pub minimum_amount: Option<i32>,
    pub purchase_interval: Option<String>,
    pub purchase_interval_count: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions {
    Variant1(Vec<DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObject {
    pub interval: String,
    pub interval_count: Option<i32>,
    pub name: Option<String>,
    pub next_billing: Option<PostCheckoutSessionsRequestSubscriptionsObjectNextBilling>,
    pub reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestP24 {
    PaymentMethodOptionsParam(PostCheckoutSessionsRequestP24),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestRadarOptions {
    pub session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestShipping {
    pub address: PostChargesRequestAddress,
    pub carrier: Option<String>,
    pub name: String,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestSofort {
    PaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestSofortObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestSofortObject {
    pub preferred_language: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestTax {
    pub calculation: PostAccountsRequestPaymentsPricing,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPostPaymentIntentsRequestUsBankAccount {
    PaymentIntentPaymentMethodOptionsParam(DefaultPostPaymentIntentsRequestUsBankAccountObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestUsBankAccountObject {
    pub financial_connections:
        Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections>,
    pub mandate_options: Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions>,
    pub networks: Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks>,
    pub preferred_settlement_speed: Option<String>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters {
    pub account_subcategories: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections {
    pub filters: Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters>,
    pub permissions: Option<Vec<String>>,
    pub prefetch: Option<Vec<String>>,
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions {
    pub collection_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks {
    pub requested: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentMethodsRequestCardObject {
    pub token: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostPaymentRecordsReportPaymentRequestCustom {
    pub payment_reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostSetupIntentsRequestMandateOptions {
    pub amount: i32,
    pub amount_type: String,
    pub currency: String,
    pub description: Option<String>,
    pub end_date: Option<i32>,
    pub interval: String,
    pub interval_count: Option<i32>,
    pub reference: String,
    pub start_date: i32,
    pub supported_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostTaxCalculationsRequestAddress {
    pub city: Option<PostAccountsRequestPaymentsPricing>,
    pub country: String,
    pub line1: Option<PostAccountsRequestPaymentsPricing>,
    pub line2: Option<PostAccountsRequestPaymentsPricing>,
    pub postal_code: Option<PostAccountsRequestPaymentsPricing>,
    pub state: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostTaxRegistrationsRequestStandard {
    pub place_of_supply_scheme: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultPostTestHelpersIssuingAuthorizationsRequestFuel {
    pub industry_product_code: Option<String>,
    pub quantity_decimal: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub unit: Option<String>,
    pub unit_cost_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultPriceOrRef {
    Variant1(String),
    Price(Box<Price>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultSourceUnion {
    Variant1(String),
    BankAccount(Box<BankAccount>),
    Card(Box<Card>),
    Source(Source),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DefaultTaxRatesItemOrRef {
    Variant1(String),
    TaxRate(TaxRate),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DeleteCustomersCustomerBankAccountsIdUnion {
    PaymentSource(PaymentSource),
    DeletedPaymentSource(DeletedPaymentSource),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest {
    pub expand: Option<Vec<String>>,
    pub invoice_now: Option<bool>,
    pub prorate: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeleteSubscriptionItemsItemRequest {
    pub clear_usage: Option<bool>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeleteSubscriptionsSubscriptionExposedIdRequest {
    pub cancellation_details:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails>,
    pub expand: Option<Vec<String>>,
    pub invoice_now: Option<bool>,
    pub prorate: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DestinationOrRef {
    Variant1(String),
    Account(Box<Account>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DestinationPaymentOrRef {
    Variant1(String),
    Charge(Box<Charge>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DestinationPaymentRefundOrRef {
    Variant1(String),
    Refund(Box<Refund>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DestinationUnion {
    Variant1(String),
    BankAccount(Box<BankAccount>),
    Card(Box<Card>),
    DeletedBankAccount(DeletedBankAccount),
    DeletedCard(DeletedCard),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DiscountOrRef {
    Variant1(String),
    Discount(Box<Discount>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DiscountUnion {
    Variant1(String),
    Discount(Box<Discount>),
    DeletedDiscount(Box<DeletedDiscount>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DiscountsItemOrRef {
    Variant1(String),
    Discount(Box<Discount>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DiscountsItemUnion {
    Variant1(String),
    Discount(Box<Discount>),
    DeletedDiscount(Box<DeletedDiscount>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DisputeOrRef {
    Variant1(String),
    IssuingDispute(Box<IssuingDispute>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DuplicateChargeDocumentationOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EntriesProperty {
    pub data: Vec<Box<TreasuryTransactionEntry>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EpsUnion {
    PaymentIntentPaymentMethodOptionsEps(PaymentIntentPaymentMethodOptionsEps),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExternalAccountsProperty {
    pub data: Vec<Box<DataItemUnion>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FailureBalanceTransactionOrRef {
    Variant1(String),
    BalanceTransaction(Box<BalanceTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FeatureOrRef {
    Variant1(String),
    EntitlementsFeature(EntitlementsFeature),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FeeOrRef {
    Variant1(String),
    ApplicationFee(Box<ApplicationFee>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FileOrRef {
    Variant1(String),
    File(Box<File>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FpxUnion {
    PaymentMethodOptionsFpx(PaymentMethodOptionsFpx),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FrontOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GeneratedCardOrRef {
    Variant1(String),
    PaymentMethod(Box<PaymentMethod>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GeneratedSepaDebitMandateOrRef {
    Variant1(String),
    Mandate(Box<Mandate>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GeneratedSepaDebitOrRef {
    Variant1(String),
    PaymentMethod(Box<PaymentMethod>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountRequest {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsAccountCapabilitiesResponse {
    pub data: Vec<Capability>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsAccountExternalAccountsResponse {
    pub data: Vec<DataItemUnion>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsAccountPeopleObject {
    pub authorizer: Option<bool>,
    pub director: Option<bool>,
    pub executive: Option<bool>,
    pub legal_guardian: Option<bool>,
    pub owner: Option<bool>,
    pub representative: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsAccountPeopleResponse {
    pub data: Vec<Person>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsResponse {
    pub data: Vec<Account>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetAccountsUnion {
    RangeQuerySpecs(GetAccountsUnionObject),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAccountsUnionObject {
    pub gt: Option<i32>,
    pub gte: Option<i32>,
    pub lt: Option<i32>,
    pub lte: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetApplePayDomainsResponse {
    pub data: Vec<ApplePayDomain>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetApplicationFeesIdRefundsResponse {
    pub data: Vec<FeeRefund>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetApplicationFeesResponse {
    pub data: Vec<ApplicationFee>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAppsSecretsObject {
    #[serde(rename = "type")]
    pub r#type: String,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetAppsSecretsResponse {
    pub data: Vec<AppsSecret>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBalanceHistoryResponse {
    pub data: Vec<BalanceTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingAlertsResponse {
    pub data: Vec<BillingAlert>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingCreditBalanceSummaryObject {
    pub applicability_scope: Option<GetBillingCreditBalanceSummaryObjectApplicabilityScope>,
    pub credit_grant: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingCreditBalanceSummaryObjectApplicabilityScope {
    pub price_type: Option<String>,
    pub prices: Option<Vec<GetBillingCreditBalanceSummaryObjectPricesItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingCreditBalanceSummaryObjectPricesItem {
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingCreditBalanceTransactionsResponse {
    pub data: Vec<BillingCreditBalanceTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingCreditGrantsResponse {
    pub data: Vec<BillingCreditGrant>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingMetersIdEventSummariesResponse {
    pub data: Vec<BillingMeterEventSummary>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingMetersResponse {
    pub data: Vec<BillingMeter>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBillingPortalConfigurationsResponse {
    pub data: Vec<BillingPortalConfiguration>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetChargesChargeRefundsResponse {
    pub data: Vec<Refund>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetChargesResponse {
    pub data: Vec<Charge>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetChargesSearchResponse {
    pub data: Vec<Charge>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCheckoutSessionsObject {
    pub email: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCheckoutSessionsResponse {
    pub data: Vec<CheckoutSession>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCheckoutSessionsSessionLineItemsResponse {
    pub data: Vec<Item>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetClimateOrdersResponse {
    pub data: Vec<ClimateOrder>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetClimateProductsResponse {
    pub data: Vec<ClimateProduct>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetClimateSuppliersResponse {
    pub data: Vec<ClimateSupplier>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCountrySpecsResponse {
    pub data: Vec<CountrySpec>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCouponsResponse {
    pub data: Vec<Coupon>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCreditNotesPreviewLinesResponse {
    pub data: Vec<CreditNoteLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCreditNotesPreviewObject {
    pub shipping_rate: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCreditNotesResponse {
    pub data: Vec<CreditNote>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerBalanceTransactionsResponse {
    pub data: Vec<CustomerBalanceTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerBankAccountsResponse {
    pub data: Vec<BankAccount>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerCardsResponse {
    pub data: Vec<Card>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerCashBalanceTransactionsResponse {
    pub data: Vec<CustomerCashBalanceTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerPaymentMethodsResponse {
    pub data: Vec<PaymentMethod>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerSourcesResponse {
    pub data: Vec<DataItemUnion2>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerSubscriptionsResponse {
    pub data: Vec<Subscription>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersCustomerTaxIdsResponse {
    pub data: Vec<TaxId>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetCustomersCustomerUnion {
    Customer(Customer),
    DeletedCustomer(DeletedCustomer),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersResponse {
    pub data: Vec<Customer>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCustomersSearchResponse {
    pub data: Vec<Customer>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetDisputesResponse {
    pub data: Vec<Dispute>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetEntitlementsActiveEntitlementsResponse {
    pub data: Vec<EntitlementsActiveEntitlement>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetEntitlementsFeaturesResponse {
    pub data: Vec<EntitlementsFeature>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetEventsResponse {
    pub data: Vec<Event>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetExchangeRatesResponse {
    pub data: Vec<ExchangeRate>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFileLinksResponse {
    pub data: Vec<FileLink>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFilesResponse {
    pub data: Vec<File>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFinancialConnectionsAccountsAccountOwnersResponse {
    pub data: Vec<FinancialConnectionsAccountOwner>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFinancialConnectionsAccountsObject {
    pub account: Option<String>,
    pub customer: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFinancialConnectionsAccountsResponse {
    pub data: Vec<FinancialConnectionsAccount>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFinancialConnectionsTransactionsObject {
    pub after: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetFinancialConnectionsTransactionsResponse {
    pub data: Vec<FinancialConnectionsTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetForwardingRequestsObject {
    pub gt: Option<i32>,
    pub gte: Option<i32>,
    pub lt: Option<i32>,
    pub lte: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetForwardingRequestsResponse {
    pub data: Vec<ForwardingRequest>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIdentityVerificationReportsResponse {
    pub data: Vec<IdentityVerificationReport>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIdentityVerificationSessionsResponse {
    pub data: Vec<IdentityVerificationSession>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoicePaymentsObject {
    pub payment_intent: Option<String>,
    pub payment_record: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoicePaymentsResponse {
    pub data: Vec<InvoicePayment>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoiceRenderingTemplatesResponse {
    pub data: Vec<InvoiceRenderingTemplate>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoiceitemsResponse {
    pub data: Vec<Invoiceitem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoicesInvoiceLinesResponse {
    pub data: Vec<LineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoicesResponse {
    pub data: Vec<Invoice>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetInvoicesSearchResponse {
    pub data: Vec<Invoice>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingAuthorizationsResponse {
    pub data: Vec<IssuingAuthorization>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingCardholdersResponse {
    pub data: Vec<IssuingCardholder>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingCardsResponse {
    pub data: Vec<IssuingCard>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingDisputesResponse {
    pub data: Vec<IssuingDispute>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingPersonalizationDesignsObject {
    pub is_default: Option<bool>,
    pub is_platform_default: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingPersonalizationDesignsResponse {
    pub data: Vec<IssuingPersonalizationDesign>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingPhysicalBundlesResponse {
    pub data: Vec<IssuingPhysicalBundle>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingTokensResponse {
    pub data: Vec<IssuingToken>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetIssuingTransactionsResponse {
    pub data: Vec<IssuingTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentAttemptRecordsResponse {
    pub data: Vec<PaymentAttemptRecord>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentIntentsIntentAmountDetailsLineItemsResponse {
    pub data: Vec<PaymentIntentAmountDetailsLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentIntentsResponse {
    pub data: Vec<PaymentIntent>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentIntentsSearchResponse {
    pub data: Vec<PaymentIntent>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentLinksPaymentLinkLineItemsResponse {
    pub data: Vec<Item>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentLinksResponse {
    pub data: Vec<PaymentLink>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentMethodConfigurationsResponse {
    pub data: Vec<PaymentMethodConfiguration>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetPaymentMethodConfigurationsUnion {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentMethodDomainsResponse {
    pub data: Vec<PaymentMethodDomain>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPaymentMethodsResponse {
    pub data: Vec<PaymentMethod>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPayoutsResponse {
    pub data: Vec<Payout>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPlansResponse {
    pub data: Vec<Plan>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPricesObject {
    pub interval: Option<String>,
    pub meter: Option<String>,
    pub usage_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPricesResponse {
    pub data: Vec<Price>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPricesSearchResponse {
    pub data: Vec<Price>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetProductsProductFeaturesResponse {
    pub data: Vec<ProductFeature>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetProductsResponse {
    pub data: Vec<Product>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetProductsSearchResponse {
    pub data: Vec<Product>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetPromotionCodesResponse {
    pub data: Vec<PromotionCode>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetQuotesQuoteComputedUpfrontLineItemsResponse {
    pub data: Vec<Item>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetQuotesResponse {
    pub data: Vec<Quote>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetRadarEarlyFraudWarningsResponse {
    pub data: Vec<RadarEarlyFraudWarning>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetRadarValueListItemsResponse {
    pub data: Vec<RadarValueListItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetRadarValueListsResponse {
    pub data: Vec<RadarValueList>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetRefundsResponse {
    pub data: Vec<Refund>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetReportingReportRunsResponse {
    pub data: Vec<ReportingReportRun>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetReportingReportTypesResponse {
    pub data: Vec<ReportingReportType>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetReviewsResponse {
    pub data: Vec<Review>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSetupAttemptsResponse {
    pub data: Vec<SetupAttempt>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSetupIntentsResponse {
    pub data: Vec<SetupIntent>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetShippingRatesResponse {
    pub data: Vec<ShippingRate>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSigmaScheduledQueryRunsResponse {
    pub data: Vec<ScheduledQueryRun>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSourcesSourceSourceTransactionsResponse {
    pub data: Vec<SourceTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSubscriptionItemsResponse {
    pub data: Vec<SubscriptionItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSubscriptionSchedulesResponse {
    pub data: Vec<SubscriptionSchedule>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSubscriptionsObject {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSubscriptionsResponse {
    pub data: Vec<Subscription>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetSubscriptionsSearchResponse {
    pub data: Vec<Subscription>,
    pub has_more: bool,
    pub next_page: Option<String>,
    pub object: String,
    pub total_count: Option<i32>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxCalculationsCalculationLineItemsResponse {
    pub data: Vec<TaxCalculationLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxCodesResponse {
    pub data: Vec<TaxCode>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxIdsObject {
    pub account: Option<String>,
    pub customer: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxRatesResponse {
    pub data: Vec<TaxRate>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxRegistrationsResponse {
    pub data: Vec<TaxRegistration>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTaxTransactionsTransactionLineItemsResponse {
    pub data: Vec<TaxTransactionLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetTerminalConfigurationsConfigurationUnion {
    TerminalConfiguration(TerminalConfiguration),
    DeletedTerminalConfiguration(DeletedTerminalConfiguration),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTerminalConfigurationsResponse {
    pub data: Vec<TerminalConfiguration>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetTerminalLocationsLocationUnion {
    TerminalLocation(TerminalLocation),
    DeletedTerminalLocation(DeletedTerminalLocation),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTerminalLocationsResponse {
    pub data: Vec<TerminalLocation>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GetTerminalReadersReaderUnion {
    TerminalReader(TerminalReader),
    DeletedTerminalReader(DeletedTerminalReader),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTerminalReadersResponse {
    pub data: Vec<TerminalReader>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTestHelpersTestClocksResponse {
    pub data: Vec<TestHelpersTestClock>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTopupsResponse {
    pub data: Vec<Topup>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTransfersIdReversalsResponse {
    pub data: Vec<TransferReversal>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTransfersResponse {
    pub data: Vec<Transfer>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryCreditReversalsResponse {
    pub data: Vec<TreasuryCreditReversal>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryDebitReversalsResponse {
    pub data: Vec<TreasuryDebitReversal>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryFinancialAccountsResponse {
    pub data: Vec<TreasuryFinancialAccount>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryInboundTransfersResponse {
    pub data: Vec<TreasuryInboundTransfer>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryOutboundPaymentsResponse {
    pub data: Vec<TreasuryOutboundPayment>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryOutboundTransfersResponse {
    pub data: Vec<TreasuryOutboundTransfer>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryReceivedCreditsObject {
    pub source_flow_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryReceivedCreditsResponse {
    pub data: Vec<TreasuryReceivedCredit>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryReceivedDebitsResponse {
    pub data: Vec<TreasuryReceivedDebit>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryTransactionEntriesResponse {
    pub data: Vec<TreasuryTransactionEntry>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryTransactionsObject {
    pub posted_at: Option<GetAccountsUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTreasuryTransactionsResponse {
    pub data: Vec<TreasuryTransaction>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetWebhookEndpointsResponse {
    pub data: Vec<WebhookEndpoint>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GiropayUnion {
    PaymentMethodOptionsGiropay(PaymentMethodOptionsGiropay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GrabpayUnion {
    PaymentMethodOptionsGrabpay(PaymentMethodOptionsGrabpay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum IconOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum IdealUnion {
    PaymentMethodOptionsIdeal(PaymentMethodOptionsIdeal),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InboundPendingProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InteracPresentUnion {
    PaymentMethodOptionsInteracPresent(PaymentMethodOptionsInteracPresent),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceCreditBalanceProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InvoiceOrRef {
    Variant1(String),
    Invoice(Box<Invoice>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InvoiceUnion {
    Variant1(String),
    Invoice(Box<Invoice>),
    DeletedInvoice(DeletedInvoice),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ItemsProperty {
    pub data: Vec<Box<SubscriptionItem>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum KakaoPayUnion {
    PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions(
        PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions,
    ),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum KlarnaUnion {
    PaymentMethodOptionsKlarna(PaymentMethodOptionsKlarna),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum KlarnaUnion2 {
    SetupIntentPaymentMethodOptionsKlarna(SetupIntentPaymentMethodOptionsKlarna),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum KonbiniUnion {
    PaymentMethodOptionsKonbini(PaymentMethodOptionsKonbini),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum KrCardUnion {
    PaymentMethodOptionsKrCard(PaymentMethodOptionsKrCard),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LastVerificationReportOrRef {
    Variant1(String),
    IdentityVerificationReport(IdentityVerificationReport),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LatestAttemptOrRef {
    Variant1(String),
    SetupAttempt(Box<SetupAttempt>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LatestChargeOrRef {
    Variant1(String),
    Charge(Box<Charge>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LatestInvoiceOrRef {
    Variant1(String),
    Invoice(Box<Invoice>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LatestRevisionOrRef {
    Variant1(String),
    Invoice(Box<Invoice>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsProperty {
    pub data: Vec<Item>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsProperty2 {
    pub data: Vec<PaymentIntentAmountDetailsLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsProperty3 {
    pub data: Vec<TaxCalculationLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsProperty4 {
    pub data: Vec<TaxTransactionLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinesProperty {
    pub data: Vec<CreditNoteLineItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinesProperty2 {
    pub data: Vec<Box<LineItem>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LinkUnion {
    PaymentIntentPaymentMethodOptionsLink(PaymentIntentPaymentMethodOptionsLink),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LinkUnion2 {
    SetupIntentPaymentMethodOptionsLink(SetupIntentPaymentMethodOptionsLink),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LinkedTransactionOrRef {
    Variant1(String),
    CustomerCashBalanceTransaction(Box<CustomerCashBalanceTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinksProperty {
    pub data: Vec<Box<FileLink>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListItemsProperty {
    pub data: Vec<RadarValueListItem>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LocationOrRef {
    Variant1(String),
    TerminalLocation(TerminalLocation),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogoOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MandateOrRef {
    Variant1(String),
    Mandate(Box<Mandate>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MbWayUnion {
    PaymentMethodOptionsMbWay(PaymentMethodOptionsMbWay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MetadataProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MeterOrRef {
    Variant1(String),
    BillingMeter(BillingMeter),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MinimumBalanceByCurrencyProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MobilepayUnion {
    PaymentIntentPaymentMethodOptionsMobilepay(PaymentIntentPaymentMethodOptionsMobilepay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MultibancoUnion {
    PaymentMethodOptionsMultibanco(PaymentMethodOptionsMultibanco),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum NaverPayUnion {
    PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions(
        PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions,
    ),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum NzBankAccountUnion {
    PaymentIntentPaymentMethodOptionsNzBankAccount(PaymentIntentPaymentMethodOptionsNzBankAccount),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OnBehalfOfOrRef {
    Variant1(String),
    Account(Box<Account>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OriginalPayoutOrRef {
    Variant1(String),
    Payout(Box<Payout>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OriginatingTransactionOrRef {
    Variant1(String),
    Charge(Box<Charge>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundPendingProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OwnersProperty {
    pub data: Vec<FinancialConnectionsAccountOwner>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OwnershipOrRef {
    Variant1(String),
    FinancialConnectionsAccountOwnership(FinancialConnectionsAccountOwnership),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OxxoUnion {
    PaymentMethodOptionsOxxo(PaymentMethodOptionsOxxo),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum P24Union {
    PaymentMethodOptionsP24(PaymentMethodOptionsP24),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PayByBankUnion {
    PaymentMethodOptionsPayByBank(PaymentMethodOptionsPayByBank),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaycoUnion {
    PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions(
        PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions,
    ),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayloadProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaymentIntentOrRef {
    Variant1(String),
    PaymentIntent(Box<PaymentIntent>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaymentLinkOrRef {
    Variant1(String),
    PaymentLink(PaymentLink),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaymentMethodOrRef {
    Variant1(String),
    PaymentMethod(Box<PaymentMethod>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaymentRecordOrRef {
    Variant1(String),
    PaymentRecord(Box<PaymentRecord>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsProperty {
    pub data: Vec<Box<InvoicePayment>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaynowUnion {
    PaymentMethodOptionsPaynow(PaymentMethodOptionsPaynow),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaypalUnion {
    PaymentMethodOptionsPaypal(PaymentMethodOptionsPaypal),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaypalUnion2 {
    SetupIntentPaymentMethodOptionsPaypal(SetupIntentPaymentMethodOptionsPaypal),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PendingSetupIntentOrRef {
    Variant1(String),
    SetupIntent(Box<SetupIntent>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PersonalizationDesignOrRef {
    Variant1(String),
    IssuingPersonalizationDesign(IssuingPersonalizationDesign),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PhysicalBundleOrRef {
    Variant1(String),
    IssuingPhysicalBundle(IssuingPhysicalBundle),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PixUnion {
    PaymentMethodOptionsPix(PaymentMethodOptionsPix),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountLinksRequest {
    pub account: String,
    pub collect: Option<String>,
    pub collection_options: Option<PostAccountLinksRequestCollectionOptions>,
    pub expand: Option<Vec<String>>,
    pub refresh_url: Option<String>,
    pub return_url: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountLinksRequestCollectionOptions {
    pub fields: Option<String>,
    pub future_requirements: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequest {
    pub account: String,
    pub components: PostAccountSessionsRequestComponents,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestAccountManagement {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestBalances {
    pub enabled: bool,
    pub features: Option<DefaultPostAccountSessionsRequestFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestComponents {
    pub account_management: Option<PostAccountSessionsRequestAccountManagement>,
    pub account_onboarding: Option<PostAccountSessionsRequestAccountManagement>,
    pub balances: Option<PostAccountSessionsRequestBalances>,
    pub disputes_list: Option<PostAccountSessionsRequestDisputesList>,
    pub documents: Option<PostAccountSessionsRequestDocuments>,
    pub financial_account: Option<PostAccountSessionsRequestFinancialAccount>,
    pub financial_account_transactions:
        Option<PostAccountSessionsRequestFinancialAccountTransactions>,
    pub instant_payouts_promotion: Option<PostAccountSessionsRequestInstantPayoutsPromotion>,
    pub issuing_card: Option<PostAccountSessionsRequestIssuingCard>,
    pub issuing_cards_list: Option<PostAccountSessionsRequestIssuingCardsList>,
    pub notification_banner: Option<PostAccountSessionsRequestAccountManagement>,
    pub payment_details: Option<PostAccountSessionsRequestPaymentDetails>,
    pub payment_disputes: Option<PostAccountSessionsRequestPaymentDisputes>,
    pub payments: Option<PostAccountSessionsRequestPaymentDetails>,
    pub payout_details: Option<PostAccountSessionsRequestDocuments>,
    pub payouts: Option<PostAccountSessionsRequestBalances>,
    pub payouts_list: Option<PostAccountSessionsRequestDocuments>,
    pub tax_registrations: Option<PostAccountSessionsRequestDocuments>,
    pub tax_settings: Option<PostAccountSessionsRequestDocuments>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestDisputesList {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestDocuments {
    pub enabled: bool,
    pub features: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures {
    pub disable_stripe_user_authentication: Option<bool>,
    pub external_account_collection: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures2 {
    pub capture_payments: Option<bool>,
    pub destination_on_behalf_of_charge_management: Option<bool>,
    pub dispute_management: Option<bool>,
    pub refund_management: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures3 {
    pub disable_stripe_user_authentication: Option<bool>,
    pub external_account_collection: Option<bool>,
    pub send_money: Option<bool>,
    pub transfer_balance: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures4 {
    pub card_spend_dispute_management: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures5 {
    pub disable_stripe_user_authentication: Option<bool>,
    pub external_account_collection: Option<bool>,
    pub instant_payouts: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures6 {
    pub card_management: Option<bool>,
    pub card_spend_dispute_management: Option<bool>,
    pub cardholder_management: Option<bool>,
    pub spend_control_management: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures7 {
    pub card_management: Option<bool>,
    pub card_spend_dispute_management: Option<bool>,
    pub cardholder_management: Option<bool>,
    pub disable_stripe_user_authentication: Option<bool>,
    pub spend_control_management: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFeatures8 {
    pub destination_on_behalf_of_charge_management: Option<bool>,
    pub dispute_management: Option<bool>,
    pub refund_management: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFinancialAccount {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures3>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestFinancialAccountTransactions {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures4>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestInstantPayoutsPromotion {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures5>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestIssuingCard {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures6>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestIssuingCardsList {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures7>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestPaymentDetails {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountSessionsRequestPaymentDisputes {
    pub enabled: bool,
    pub features: Option<PostAccountSessionsRequestFeatures8>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountBankAccountsIdRequest {
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub address_city: Option<String>,
    pub address_country: Option<String>,
    pub address_line1: Option<String>,
    pub address_line2: Option<String>,
    pub address_state: Option<String>,
    pub address_zip: Option<String>,
    pub default_for_currency: Option<bool>,
    pub documents: Option<PostAccountsAccountBankAccountsIdRequestDocuments>,
    pub exp_month: Option<String>,
    pub exp_year: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountBankAccountsIdRequestDocuments {
    pub bank_account_ownership_verification:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountBankAccountsRequest {
    pub bank_account: Option<PostAccountsRequestBankAccount>,
    pub default_for_currency: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub external_account: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountBankAccountsRequestMetadata {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountCapabilitiesCapabilityRequest {
    pub expand: Option<Vec<String>>,
    pub requested: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountLoginLinksRequest {
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequest {
    pub additional_tos_acceptances:
        Option<PostAccountsAccountPeopleRequestAdditionalTosAcceptances>,
    pub address: Option<PostAccountsAccountPeopleRequestAddress>,
    pub address_kana: Option<PostAccountsAccountPeopleRequestAddressKana>,
    pub address_kanji: Option<PostAccountsAccountPeopleRequestAddressKanji>,
    pub dob: Option<PostAccountsAccountPeopleRequestDob>,
    pub documents: Option<PostAccountsAccountPeopleRequestDocuments>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<PostAccountsAccountPeopleRequestFullNameAliases>,
    pub gender: Option<String>,
    pub id_number: Option<String>,
    pub id_number_secondary: Option<String>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub nationality: Option<String>,
    pub person_token: Option<String>,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<PostAccountsAccountPeopleRequestRegisteredAddress>,
    pub relationship: Option<PostAccountsAccountPeopleRequestRelationship>,
    pub ssn_last_4: Option<String>,
    pub us_cfpb_data: Option<PostAccountsAccountPeopleRequestUsCfpbData>,
    pub verification: Option<PostAccountsAccountPeopleRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestAdditionalTosAcceptances {
    pub account: Option<PostAccountsRequestTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestAddressKana {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestAddressKanji {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestCompanyAuthorization {
    pub files: Option<Vec<PostAccountsAccountPeopleRequestFilesItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsAccountPeopleRequestDob {
    DateOfBirthSpecs(PostAccountsRequestDobObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestDocuments {
    pub company_authorization: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
    pub passport: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
    pub visa: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestEthnicityDetails {
    pub ethnicity: Option<Vec<String>>,
    pub ethnicity_other: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsAccountPeopleRequestFilesItem {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsAccountPeopleRequestFullNameAliases {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestRaceDetails {
    pub race: Option<Vec<String>>,
    pub race_other: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestRegisteredAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestRelationship {
    pub authorizer: Option<bool>,
    pub director: Option<bool>,
    pub executive: Option<bool>,
    pub legal_guardian: Option<bool>,
    pub owner: Option<bool>,
    pub percent_ownership: Option<PostAccountsRequestPercentOwnership>,
    pub representative: Option<bool>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestUsCfpbData {
    pub ethnicity_details: Option<PostAccountsAccountPeopleRequestEthnicityDetails>,
    pub race_details: Option<PostAccountsAccountPeopleRequestRaceDetails>,
    pub self_identified_gender: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountPeopleRequestVerification {
    pub additional_document: Option<PostAccountsRequestAdditionalDocument>,
    pub document: Option<PostAccountsRequestAdditionalDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRejectRequest {
    pub expand: Option<Vec<String>>,
    pub reason: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequest {
    pub account_token: Option<String>,
    pub business_profile: Option<PostAccountsAccountRequestBusinessProfile>,
    pub business_type: Option<String>,
    pub capabilities: Option<PostAccountsRequestCapabilities>,
    pub company: Option<PostAccountsAccountRequestCompany>,
    pub default_currency: Option<String>,
    pub documents: Option<PostAccountsRequestDocuments>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub external_account: Option<String>,
    pub groups: Option<PostAccountsRequestGroups>,
    pub individual: Option<PostAccountsAccountRequestIndividual>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub settings: Option<PostAccountsAccountRequestSettings>,
    pub tos_acceptance: Option<DefaultPostAccountsRequestTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequestBusinessProfile {
    pub annual_revenue: Option<PostAccountsRequestAnnualRevenue>,
    pub estimated_worker_count: Option<i32>,
    pub mcc: Option<String>,
    pub minority_owned_business_designation: Option<Vec<String>>,
    pub monthly_estimated_revenue: Option<PostAccountsRequestMonthlyEstimatedRevenue>,
    pub name: Option<String>,
    pub product_description: Option<String>,
    pub support_address: Option<PostAccountsRequestSupportAddress>,
    pub support_email: Option<String>,
    pub support_phone: Option<String>,
    pub support_url: Option<PostAccountsRequestSupportUrl>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequestCompany {
    pub address: Option<PostAccountsRequestAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub directors_provided: Option<bool>,
    pub directorship_declaration: Option<PostAccountsRequestDirectorshipDeclaration>,
    pub executives_provided: Option<bool>,
    pub export_license_id: Option<String>,
    pub export_purpose_code: Option<String>,
    pub name: Option<String>,
    pub name_kana: Option<String>,
    pub name_kanji: Option<String>,
    pub owners_provided: Option<bool>,
    pub ownership_declaration: Option<PostAccountsRequestOwnershipDeclaration>,
    pub ownership_exemption_reason: Option<String>,
    pub phone: Option<String>,
    pub registration_date: Option<PostAccountsRequestRegistrationDate>,
    pub registration_number: Option<String>,
    pub representative_declaration: Option<PostAccountsRequestRepresentativeDeclaration>,
    pub structure: Option<String>,
    pub tax_id: Option<String>,
    pub tax_id_registrar: Option<String>,
    pub vat_id: Option<String>,
    pub verification: Option<PostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsAccountRequestDefaultAccountTaxIds {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequestIndividual {
    pub address: Option<PostAccountsRequestSupportAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub dob: Option<PostAccountsRequestDob>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<PostAccountsRequestFullNameAliases>,
    pub gender: Option<String>,
    pub id_number: Option<String>,
    pub id_number_secondary: Option<String>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<PostAccountsRequestSupportAddress>,
    pub relationship: Option<PostAccountsRequestRelationship>,
    pub ssn_last_4: Option<String>,
    pub verification: Option<DefaultPostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequestInvoices {
    pub default_account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub hosted_payment_method_save: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsAccountRequestSettings {
    pub bacs_debit_payments: Option<PostAccountsRequestBacsDebitPayments>,
    pub branding: Option<PostAccountsRequestBranding>,
    pub card_issuing: Option<PostAccountsRequestCardIssuing>,
    pub card_payments: Option<PostAccountsRequestCardPayments>,
    pub invoices: Option<PostAccountsAccountRequestInvoices>,
    pub payments: Option<PostAccountsRequestPayments>,
    pub payouts: Option<PostAccountsRequestPayouts>,
    pub treasury: Option<PostAccountsRequestTreasury>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequest {
    pub account_token: Option<String>,
    pub bank_account: Option<PostAccountsRequestBankAccount>,
    pub business_profile: Option<PostAccountsRequestBusinessProfile>,
    pub business_type: Option<String>,
    pub capabilities: Option<PostAccountsRequestCapabilities>,
    pub company: Option<PostAccountsRequestCompany>,
    pub controller: Option<PostAccountsRequestController>,
    pub country: Option<String>,
    pub default_currency: Option<String>,
    pub documents: Option<PostAccountsRequestDocuments>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub external_account: Option<String>,
    pub groups: Option<PostAccountsRequestGroups>,
    pub individual: Option<PostAccountsRequestIndividual>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub settings: Option<PostAccountsRequestSettings>,
    pub tos_acceptance: Option<DefaultPostAccountsRequestTosAcceptance>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAcssDebitPayments {
    pub requested: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAdditionalDocument {
    pub back: Option<String>,
    pub front: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAddressKana {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAddressKanji {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestAnnualRevenue {
    pub amount: i32,
    pub currency: String,
    pub fiscal_year_end: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBacsDebitPayments {
    pub display_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestBankAccount {
    ExternalAccountPayoutBankAccount(PostAccountsRequestBankAccountObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBankAccountObject {
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub account_number: String,
    pub account_type: Option<String>,
    pub country: String,
    pub currency: Option<String>,
    pub documents: Option<PostAccountsRequestBankAccountObjectDocuments>,
    pub object: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification {
    pub files: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBankAccountObjectDocuments {
    pub bank_account_ownership_verification:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBranding {
    pub icon: Option<String>,
    pub logo: Option<String>,
    pub primary_color: Option<String>,
    pub secondary_color: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestBusinessProfile {
    pub annual_revenue: Option<PostAccountsRequestAnnualRevenue>,
    pub estimated_worker_count: Option<i32>,
    pub mcc: Option<String>,
    pub minority_owned_business_designation: Option<Vec<String>>,
    pub monthly_estimated_revenue: Option<PostAccountsRequestMonthlyEstimatedRevenue>,
    pub name: Option<String>,
    pub product_description: Option<String>,
    pub support_address: Option<PostAccountsRequestSupportAddress>,
    pub support_email: Option<String>,
    pub support_phone: Option<String>,
    pub support_url: Option<PostAccountsRequestSupportUrl>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestCapabilities {
    pub acss_debit_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub affirm_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub afterpay_clearpay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub alma_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub amazon_pay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub au_becs_debit_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub bacs_debit_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub bancontact_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub billie_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub blik_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub boleto_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub card_issuing: Option<PostAccountsRequestAcssDebitPayments>,
    pub card_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub cartes_bancaires_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub cashapp_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub crypto_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub eps_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub fpx_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub gb_bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub giropay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub grabpay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub ideal_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub india_international_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub jcb_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub jp_bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub kakao_pay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub klarna_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub konbini_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub kr_card_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub legacy_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub link_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub mb_way_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub mobilepay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub multibanco_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub mx_bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub naver_pay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub nz_bank_account_becs_debit_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub oxxo_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub p24_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub pay_by_bank_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub payco_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub paynow_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub pix_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub promptpay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub revolut_pay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub samsung_pay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub satispay_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub sepa_bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub sepa_debit_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub sofort_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub swish_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub tax_reporting_us_1099_k: Option<PostAccountsRequestAcssDebitPayments>,
    pub tax_reporting_us_1099_misc: Option<PostAccountsRequestAcssDebitPayments>,
    pub transfers: Option<PostAccountsRequestAcssDebitPayments>,
    pub treasury: Option<PostAccountsRequestAcssDebitPayments>,
    pub twint_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub us_bank_account_ach_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub us_bank_transfer_payments: Option<PostAccountsRequestAcssDebitPayments>,
    pub zip_payments: Option<PostAccountsRequestAcssDebitPayments>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestCardIssuing {
    pub tos_acceptance: Option<PostAccountsRequestTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestCardPayments {
    pub decline_on: Option<PostAccountsRequestDeclineOn>,
    pub statement_descriptor_prefix: Option<String>,
    pub statement_descriptor_prefix_kana: Option<PostAccountsRequestStatementDescriptorPrefixKana>,
    pub statement_descriptor_prefix_kanji: Option<PostAccountsRequestStatementDescriptorPrefixKana>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestCompany {
    pub address: Option<PostAccountsRequestAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub directors_provided: Option<bool>,
    pub directorship_declaration: Option<PostAccountsRequestDirectorshipDeclaration>,
    pub executives_provided: Option<bool>,
    pub export_license_id: Option<String>,
    pub export_purpose_code: Option<String>,
    pub name: Option<String>,
    pub name_kana: Option<String>,
    pub name_kanji: Option<String>,
    pub owners_provided: Option<bool>,
    pub ownership_declaration: Option<PostAccountsRequestOwnershipDeclaration>,
    pub ownership_exemption_reason: Option<String>,
    pub phone: Option<String>,
    pub registration_date: Option<PostAccountsRequestRegistrationDate>,
    pub registration_number: Option<String>,
    pub representative_declaration: Option<PostAccountsRequestRepresentativeDeclaration>,
    pub structure: Option<String>,
    pub tax_id: Option<String>,
    pub tax_id_registrar: Option<String>,
    pub vat_id: Option<String>,
    pub verification: Option<PostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestController {
    pub fees: Option<PostAccountsRequestFees>,
    pub losses: Option<PostAccountsRequestLosses>,
    pub requirement_collection: Option<String>,
    pub stripe_dashboard: Option<PostAccountsRequestStripeDashboard>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestDeclineOn {
    pub avs_failure: Option<bool>,
    pub cvc_failure: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestDelayDays {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestDirectorshipDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestDob {
    DateOfBirthSpecs(PostAccountsRequestDobObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestDobObject {
    pub day: i32,
    pub month: i32,
    pub year: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestDocument {
    pub back: Option<String>,
    pub front: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestDocuments {
    pub bank_account_ownership_verification:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub company_license:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub company_memorandum_of_association:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub company_ministerial_decree:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub company_registration_verification:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub company_tax_id_verification:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub proof_of_address:
        Option<PostAccountsRequestBankAccountObjectBankAccountOwnershipVerification>,
    pub proof_of_registration: Option<PostAccountsRequestProofOfRegistration>,
    pub proof_of_ultimate_beneficial_ownership: Option<PostAccountsRequestProofOfRegistration>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestFees {
    pub payer: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestFullNameAliases {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestGroups {
    pub payments_pricing: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestIndividual {
    pub address: Option<PostAccountsRequestSupportAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub dob: Option<PostAccountsRequestDob>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<PostAccountsRequestFullNameAliases>,
    pub gender: Option<String>,
    pub id_number: Option<String>,
    pub id_number_secondary: Option<String>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<PostAccountsRequestSupportAddress>,
    pub relationship: Option<PostAccountsRequestRelationship>,
    pub ssn_last_4: Option<String>,
    pub verification: Option<DefaultPostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestInvoices {
    pub hosted_payment_method_save: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestLosses {
    pub payments: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestMetadata {
    Variant1(PostAccountsRequestMetadataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestMetadataObject {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestMonthlyEstimatedRevenue {
    pub amount: i32,
    pub currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestOwnershipDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestPayments {
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_kana: Option<String>,
    pub statement_descriptor_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestPaymentsPricing {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestPayouts {
    pub debit_negative_balances: Option<bool>,
    pub schedule: Option<PostAccountsRequestSchedule>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestPercentOwnership {
    Variant1(f32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestProofOfRegistration {
    pub files: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestRegistrationDate {
    RegistrationDateSpecs(PostAccountsRequestRegistrationDateObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestRegistrationDateObject {
    pub day: i32,
    pub month: i32,
    pub year: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestRelationship {
    pub director: Option<bool>,
    pub executive: Option<bool>,
    pub owner: Option<bool>,
    pub percent_ownership: Option<PostAccountsRequestPercentOwnership>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestRepresentativeDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestSchedule {
    pub delay_days: Option<PostAccountsRequestDelayDays>,
    pub interval: Option<String>,
    pub monthly_anchor: Option<i32>,
    pub monthly_payout_days: Option<Vec<i32>>,
    pub weekly_anchor: Option<String>,
    pub weekly_payout_days: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestSettings {
    pub bacs_debit_payments: Option<PostAccountsRequestBacsDebitPayments>,
    pub branding: Option<PostAccountsRequestBranding>,
    pub card_issuing: Option<PostAccountsRequestCardIssuing>,
    pub card_payments: Option<PostAccountsRequestCardPayments>,
    pub invoices: Option<PostAccountsRequestInvoices>,
    pub payments: Option<PostAccountsRequestPayments>,
    pub payouts: Option<PostAccountsRequestPayouts>,
    pub treasury: Option<PostAccountsRequestTreasury>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestStatementDescriptorPrefixKana {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestStripeDashboard {
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestSupportAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostAccountsRequestSupportUrl {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestTosAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestTreasury {
    pub tos_acceptance: Option<PostAccountsRequestTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAccountsRequestVerification {
    pub document: Option<PostAccountsRequestDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostApplePayDomainsRequest {
    pub domain_name: String,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostApplicationFeesFeeRefundsIdRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostApplicationFeesIdRefundRequest {
    pub amount: Option<i32>,
    pub directive: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostApplicationFeesIdRefundsRequest {
    pub amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAppsSecretsDeleteRequest {
    pub expand: Option<Vec<String>>,
    pub name: String,
    pub scope: PostAppsSecretsRequestScope,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAppsSecretsRequest {
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub name: String,
    pub payload: String,
    pub scope: PostAppsSecretsRequestScope,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostAppsSecretsRequestScope {
    #[serde(rename = "type")]
    pub r#type: String,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequest {
    pub expand: Option<Vec<String>>,
    pub payments: Option<PostBalanceSettingsRequestPayments>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBalanceSettingsRequestDelayDaysOverride {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBalanceSettingsRequestMinimumBalanceByCurrency {
    Variant1(PostBalanceSettingsRequestMinimumBalanceByCurrencyObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequestMinimumBalanceByCurrencyObject {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequestPayments {
    pub debit_negative_balances: Option<bool>,
    pub payouts: Option<PostBalanceSettingsRequestPayouts>,
    pub settlement_timing: Option<PostBalanceSettingsRequestSettlementTiming>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequestPayouts {
    pub minimum_balance_by_currency: Option<PostBalanceSettingsRequestMinimumBalanceByCurrency>,
    pub schedule: Option<PostBalanceSettingsRequestSchedule>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequestSchedule {
    pub interval: Option<String>,
    pub monthly_payout_days: Option<Vec<i32>>,
    pub weekly_payout_days: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBalanceSettingsRequestSettlementTiming {
    pub delay_days_override: Option<PostBalanceSettingsRequestDelayDaysOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingAlertsRequest {
    pub alert_type: String,
    pub expand: Option<Vec<String>>,
    pub title: String,
    pub usage_threshold: Option<PostBillingAlertsRequestUsageThreshold>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingAlertsRequestFiltersItem {
    pub customer: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingAlertsRequestUsageThreshold {
    pub filters: Option<Vec<PostBillingAlertsRequestFiltersItem>>,
    pub gte: i32,
    pub meter: String,
    pub recurrence: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsIdRequest {
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<PostBillingCreditGrantsIdRequestExpiresAt>,
    pub metadata: Option<PostBillingCreditGrantsIdRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingCreditGrantsIdRequestExpiresAt {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsIdRequestMetadata {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsRequest {
    pub amount: PostBillingCreditGrantsRequestAmount,
    pub applicability_config: PostBillingCreditGrantsRequestApplicabilityConfig,
    pub category: Option<String>,
    pub customer: String,
    pub effective_at: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub metadata: Option<PostBillingCreditGrantsRequestMetadata>,
    pub name: Option<String>,
    pub priority: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsRequestAmount {
    pub monetary: Option<PostBillingCreditGrantsRequestMonetary>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsRequestApplicabilityConfig {
    pub scope: GetBillingCreditBalanceSummaryObjectApplicabilityScope,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsRequestMetadata {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingCreditGrantsRequestMonetary {
    pub currency: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMeterEventAdjustmentsRequest {
    pub cancel: Option<PostBillingMeterEventAdjustmentsRequestCancel>,
    pub event_name: String,
    pub expand: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMeterEventAdjustmentsRequestCancel {
    pub identifier: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMeterEventsRequest {
    pub event_name: String,
    pub expand: Option<Vec<String>>,
    pub identifier: Option<String>,
    pub payload: PostBillingMeterEventsRequestPayload,
    pub timestamp: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMeterEventsRequestPayload {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMetersIdRequest {
    pub display_name: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMetersRequest {
    pub customer_mapping: Option<PostBillingMetersRequestCustomerMapping>,
    pub default_aggregation: PostBillingMetersRequestDefaultAggregation,
    pub display_name: String,
    pub event_name: String,
    pub event_time_window: Option<String>,
    pub expand: Option<Vec<String>>,
    pub value_settings: Option<PostBillingMetersRequestValueSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMetersRequestCustomerMapping {
    pub event_payload_key: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMetersRequestDefaultAggregation {
    pub formula: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingMetersRequestValueSettings {
    pub event_payload_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequest {
    pub active: Option<bool>,
    pub business_profile:
        Option<PostBillingPortalConfigurationsConfigurationRequestBusinessProfile>,
    pub default_return_url: Option<PostBillingPortalConfigurationsRequestDefaultReturnUrl>,
    pub expand: Option<Vec<String>>,
    pub features: Option<PostBillingPortalConfigurationsConfigurationRequestFeatures>,
    pub login_page: Option<PostBillingPortalConfigurationsConfigurationRequestLoginPage>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<PostBillingPortalConfigurationsRequestName>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestBusinessProfile {
    pub headline: Option<PostBillingPortalConfigurationsRequestHeadline>,
    pub privacy_policy_url: Option<PostAccountsRequestSupportUrl>,
    pub terms_of_service_url: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestCancellationReason {
    pub enabled: bool,
    pub options: Option<PostBillingPortalConfigurationsRequestOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsConfigurationRequestConditions {
    Variant1(Vec<PostBillingPortalConfigurationsRequestConditionsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate {
    pub allowed_updates: Option<PostBillingPortalConfigurationsRequestAllowedUpdates>,
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestFeatures {
    pub customer_update: Option<PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate>,
    pub invoice_history: Option<PostBillingPortalConfigurationsRequestInvoiceHistory>,
    pub payment_method_update: Option<PostBillingPortalConfigurationsRequestPaymentMethodUpdate>,
    pub subscription_cancel:
        Option<PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel>,
    pub subscription_update:
        Option<PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestLoginPage {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd {
    pub conditions: Option<PostBillingPortalConfigurationsConfigurationRequestConditions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel {
    pub cancellation_reason:
        Option<PostBillingPortalConfigurationsConfigurationRequestCancellationReason>,
    pub enabled: Option<bool>,
    pub mode: Option<String>,
    pub proration_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate {
    pub default_allowed_updates:
        Option<PostBillingPortalConfigurationsRequestDefaultAllowedUpdates>,
    pub enabled: Option<bool>,
    pub products: Option<PostBillingPortalConfigurationsRequestProducts>,
    pub proration_behavior: Option<String>,
    pub schedule_at_period_end:
        Option<PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd>,
    pub trial_update_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequest {
    pub business_profile: Option<PostBillingPortalConfigurationsRequestBusinessProfile>,
    pub default_return_url: Option<PostBillingPortalConfigurationsRequestDefaultReturnUrl>,
    pub expand: Option<Vec<String>>,
    pub features: PostBillingPortalConfigurationsRequestFeatures,
    pub login_page: Option<PostBillingPortalConfigurationsRequestLoginPage>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: Option<PostBillingPortalConfigurationsRequestName>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestAllowedUpdates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestBusinessProfile {
    pub headline: Option<PostBillingPortalConfigurationsRequestHeadline>,
    pub privacy_policy_url: Option<String>,
    pub terms_of_service_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestCancellationReason {
    pub enabled: bool,
    pub options: PostBillingPortalConfigurationsRequestOptions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestConditionsItem {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestCustomerUpdate {
    pub allowed_updates: Option<PostBillingPortalConfigurationsRequestAllowedUpdates>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestDefaultAllowedUpdates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestDefaultReturnUrl {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestFeatures {
    pub customer_update: Option<PostBillingPortalConfigurationsRequestCustomerUpdate>,
    pub invoice_history: Option<PostBillingPortalConfigurationsRequestInvoiceHistory>,
    pub payment_method_update: Option<PostBillingPortalConfigurationsRequestPaymentMethodUpdate>,
    pub subscription_cancel: Option<PostBillingPortalConfigurationsRequestSubscriptionCancel>,
    pub subscription_update: Option<PostBillingPortalConfigurationsRequestSubscriptionUpdate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestHeadline {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestInvoiceHistory {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestLoginPage {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestName {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestOptions {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestPaymentMethodUpdate {
    pub enabled: bool,
    pub payment_method_configuration: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostBillingPortalConfigurationsRequestProducts {
    Variant1(Vec<PostBillingPortalConfigurationsRequestProductsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestProductsObject {
    pub adjustable_quantity:
        Option<PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity>,
    pub prices: Vec<String>,
    pub product: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestProductsObjectAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd {
    pub conditions: Option<Vec<PostBillingPortalConfigurationsRequestConditionsItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestSubscriptionCancel {
    pub cancellation_reason: Option<PostBillingPortalConfigurationsRequestCancellationReason>,
    pub enabled: bool,
    pub mode: Option<String>,
    pub proration_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalConfigurationsRequestSubscriptionUpdate {
    pub default_allowed_updates:
        Option<PostBillingPortalConfigurationsRequestDefaultAllowedUpdates>,
    pub enabled: bool,
    pub products: Option<PostBillingPortalConfigurationsRequestProducts>,
    pub proration_behavior: Option<String>,
    pub schedule_at_period_end: Option<PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd>,
    pub trial_update_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequest {
    pub configuration: Option<String>,
    pub customer: String,
    pub expand: Option<Vec<String>>,
    pub flow_data: Option<PostBillingPortalSessionsRequestFlowData>,
    pub locale: Option<String>,
    pub on_behalf_of: Option<String>,
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestAfterCompletion {
    pub hosted_confirmation: Option<PostBillingPortalSessionsRequestHostedConfirmation>,
    pub redirect: Option<PostBillingPortalSessionsRequestRedirect>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestCouponOffer {
    pub coupon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestDiscountsItem {
    pub coupon: Option<String>,
    pub promotion_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestFlowData {
    pub after_completion: Option<PostBillingPortalSessionsRequestAfterCompletion>,
    pub subscription_cancel: Option<PostBillingPortalSessionsRequestSubscriptionCancel>,
    pub subscription_update: Option<PostBillingPortalSessionsRequestSubscriptionUpdate>,
    pub subscription_update_confirm:
        Option<PostBillingPortalSessionsRequestSubscriptionUpdateConfirm>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestHostedConfirmation {
    pub custom_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestItemsItem {
    pub id: String,
    pub price: Option<String>,
    pub quantity: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestRedirect {
    pub return_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestRetention {
    pub coupon_offer: PostBillingPortalSessionsRequestCouponOffer,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestSubscriptionCancel {
    pub retention: Option<PostBillingPortalSessionsRequestRetention>,
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestSubscriptionUpdate {
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostBillingPortalSessionsRequestSubscriptionUpdateConfirm {
    pub discounts: Option<Vec<PostBillingPortalSessionsRequestDiscountsItem>>,
    pub items: Vec<PostBillingPortalSessionsRequestItemsItem>,
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeCaptureRequest {
    pub amount: Option<i32>,
    pub application_fee: Option<i32>,
    pub application_fee_amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub receipt_email: Option<String>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostChargesChargeCaptureRequestTransferData>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeCaptureRequestTransferData {
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequest {
    pub evidence: Option<PostChargesChargeDisputeRequestEvidence>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub submit: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostChargesChargeDisputeRequestEnhancedEvidence {
    EnhancedEvidence(PostChargesChargeDisputeRequestEnhancedEvidenceObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObject {
    pub visa_compelling_evidence_3:
        Option<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3>,
    pub visa_compliance:
        Option<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction {
    pub customer_account_id: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_device_fingerprint: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_device_id: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_email_address: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_purchase_ip: Option<PostAccountsRequestPaymentsPricing>,
    pub merchandise_or_services: Option<String>,
    pub product_description: Option<PostAccountsRequestPaymentsPricing>,
    pub shipping_address:
        Option<PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem {
    pub charge: String,
    pub customer_account_id: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_device_fingerprint: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_device_id: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_email_address: Option<PostAccountsRequestPaymentsPricing>,
    pub customer_purchase_ip: Option<PostAccountsRequestPaymentsPricing>,
    pub product_description: Option<PostAccountsRequestPaymentsPricing>,
    pub shipping_address:
        Option<PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress {
    pub city: Option<PostAccountsRequestPaymentsPricing>,
    pub country: Option<PostAccountsRequestPaymentsPricing>,
    pub line1: Option<PostAccountsRequestPaymentsPricing>,
    pub line2: Option<PostAccountsRequestPaymentsPricing>,
    pub postal_code: Option<PostAccountsRequestPaymentsPricing>,
    pub state: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3 {
    pub disputed_transaction:
        Option<PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction>,
    pub prior_undisputed_transactions: Option<
        Vec<PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem>,
    >,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance {
    pub fee_acknowledged: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeDisputeRequestEvidence {
    pub access_activity_log: Option<String>,
    pub billing_address: Option<String>,
    pub cancellation_policy: Option<String>,
    pub cancellation_policy_disclosure: Option<String>,
    pub cancellation_rebuttal: Option<String>,
    pub customer_communication: Option<String>,
    pub customer_email_address: Option<String>,
    pub customer_name: Option<String>,
    pub customer_purchase_ip: Option<String>,
    pub customer_signature: Option<String>,
    pub duplicate_charge_documentation: Option<String>,
    pub duplicate_charge_explanation: Option<String>,
    pub duplicate_charge_id: Option<String>,
    pub enhanced_evidence: Option<PostChargesChargeDisputeRequestEnhancedEvidence>,
    pub product_description: Option<String>,
    pub receipt: Option<String>,
    pub refund_policy: Option<String>,
    pub refund_policy_disclosure: Option<String>,
    pub refund_refusal_explanation: Option<String>,
    pub service_date: Option<String>,
    pub service_documentation: Option<String>,
    pub shipping_address: Option<String>,
    pub shipping_carrier: Option<String>,
    pub shipping_date: Option<String>,
    pub shipping_documentation: Option<String>,
    pub shipping_tracking_number: Option<String>,
    pub uncategorized_file: Option<String>,
    pub uncategorized_text: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeRefundRequest {
    pub amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub instructions_email: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub payment_intent: Option<String>,
    pub reason: Option<String>,
    pub refund_application_fee: Option<bool>,
    pub reverse_transfer: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeRefundsRefundRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeRefundsRequest {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub expand: Option<Vec<String>>,
    pub instructions_email: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub origin: Option<String>,
    pub payment_intent: Option<String>,
    pub reason: Option<String>,
    pub refund_application_fee: Option<bool>,
    pub reverse_transfer: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeRequest {
    pub customer: Option<String>,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub fraud_details: Option<PostChargesChargeRequestFraudDetails>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub receipt_email: Option<String>,
    pub shipping: Option<PostChargesRequestShipping>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesChargeRequestFraudDetails {
    pub user_report: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequest {
    pub amount: Option<i32>,
    pub application_fee: Option<i32>,
    pub application_fee_amount: Option<i32>,
    pub capture: Option<bool>,
    pub card: Option<PostChargesRequestCard>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub destination: Option<PostChargesRequestDestination>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub on_behalf_of: Option<String>,
    pub radar_options: Option<PostChargesRequestRadarOptions>,
    pub receipt_email: Option<String>,
    pub shipping: Option<PostChargesRequestShipping>,
    pub source: Option<String>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostChargesRequestTransferData>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostChargesRequestCard {
    CustomerPaymentSourceCard(PostChargesRequestCardObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestCardObject {
    pub address_city: Option<String>,
    pub address_country: Option<String>,
    pub address_line1: Option<String>,
    pub address_line2: Option<String>,
    pub address_state: Option<String>,
    pub address_zip: Option<String>,
    pub cvc: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub name: Option<String>,
    pub number: String,
    pub object: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostChargesRequestDestination {
    DestinationSpecs(PostChargesRequestDestinationObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestDestinationObject {
    pub account: String,
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestRadarOptions {
    pub session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestShipping {
    pub address: PostChargesRequestAddress,
    pub carrier: Option<String>,
    pub name: String,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostChargesRequestTransferData {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequest {
    pub adaptive_pricing: Option<PostCheckoutSessionsRequestAdaptivePricing>,
    pub after_expiration: Option<PostCheckoutSessionsRequestAfterExpiration>,
    pub allow_promotion_codes: Option<bool>,
    pub automatic_tax: Option<PostCheckoutSessionsRequestAutomaticTax>,
    pub billing_address_collection: Option<String>,
    pub branding_settings: Option<PostCheckoutSessionsRequestBrandingSettings>,
    pub cancel_url: Option<String>,
    pub client_reference_id: Option<String>,
    pub consent_collection: Option<PostCheckoutSessionsRequestConsentCollection>,
    pub currency: Option<String>,
    pub custom_fields: Option<Vec<PostCheckoutSessionsRequestCustomFieldsItem>>,
    pub custom_text: Option<PostCheckoutSessionsRequestCustomText>,
    pub customer: Option<String>,
    pub customer_creation: Option<String>,
    pub customer_email: Option<String>,
    pub customer_update: Option<PostCheckoutSessionsRequestCustomerUpdate>,
    pub discounts: Option<Vec<PostCheckoutSessionsRequestDiscountsItem>>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub invoice_creation: Option<PostCheckoutSessionsRequestInvoiceCreation>,
    pub line_items: Option<Vec<PostCheckoutSessionsRequestLineItemsItem>>,
    pub locale: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub mode: Option<String>,
    pub name_collection: Option<PostCheckoutSessionsRequestNameCollection>,
    pub optional_items: Option<Vec<PostCheckoutSessionsRequestOptionalItemsItem>>,
    pub origin_context: Option<String>,
    pub payment_intent_data: Option<PostCheckoutSessionsRequestPaymentIntentData>,
    pub payment_method_collection: Option<String>,
    pub payment_method_configuration: Option<String>,
    pub payment_method_data: Option<PostCheckoutSessionsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostCheckoutSessionsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub permissions: Option<PostCheckoutSessionsRequestPermissions>,
    pub phone_number_collection: Option<PostCheckoutSessionsRequestPhoneNumberCollection>,
    pub redirect_on_completion: Option<String>,
    pub return_url: Option<String>,
    pub saved_payment_method_options: Option<PostCheckoutSessionsRequestSavedPaymentMethodOptions>,
    pub setup_intent_data: Option<PostCheckoutSessionsRequestSetupIntentData>,
    pub shipping_address_collection: Option<PostCheckoutSessionsRequestShippingAddressCollection>,
    pub shipping_options: Option<Vec<PostCheckoutSessionsRequestShippingOptionsItem>>,
    pub submit_type: Option<String>,
    pub subscription_data: Option<PostCheckoutSessionsRequestSubscriptionData>,
    pub success_url: Option<String>,
    pub tax_id_collection: Option<PostCheckoutSessionsRequestTaxIdCollection>,
    pub ui_mode: Option<String>,
    pub wallet_options: Option<PostCheckoutSessionsRequestWalletOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAcssDebit {
    pub currency: Option<String>,
    pub mandate_options: Option<PostCheckoutSessionsRequestMandateOptions>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAdaptivePricing {
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: String,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAffirm {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAfterExpiration {
    pub recovery: Option<PostCheckoutSessionsRequestRecovery>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsRequestAfterSubmit {
    CustomTextPositionParam(PostCheckoutSessionsRequestAfterSubmitObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAfterSubmitObject {
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAlipay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAlma {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAmazonPay {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAuBecsDebit {
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBacsDebit {
    pub mandate_options: Option<DefaultPostCheckoutSessionsRequestMandateOptions>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBancontact {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBankTransfer {
    pub eu_bank_transfer: Option<PostCheckoutSessionsRequestEuBankTransfer>,
    pub requested_address_types: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBillingMode {
    pub flexible: Option<PostCheckoutSessionsRequestFlexible>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBoleto {
    pub expires_after_days: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBrandingSettings {
    pub background_color: Option<PostAccountsRequestPaymentsPricing>,
    pub border_style: Option<String>,
    pub button_color: Option<PostAccountsRequestPaymentsPricing>,
    pub display_name: Option<String>,
    pub font_family: Option<String>,
    pub icon: Option<PostCheckoutSessionsRequestIcon>,
    pub logo: Option<PostCheckoutSessionsRequestLogo>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestBusiness {
    pub enabled: bool,
    pub optional: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCard {
    pub capture_method: Option<String>,
    pub installments: Option<PostCheckoutSessionsRequestInstallments>,
    pub request_extended_authorization: Option<String>,
    pub request_incremental_authorization: Option<String>,
    pub request_multicapture: Option<String>,
    pub request_overcapture: Option<String>,
    pub request_three_d_secure: Option<String>,
    pub restrictions: Option<PostCheckoutSessionsRequestRestrictions>,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor_suffix_kana: Option<String>,
    pub statement_descriptor_suffix_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCashapp {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestConsentCollection {
    pub payment_method_reuse_agreement:
        Option<PostCheckoutSessionsRequestPaymentMethodReuseAgreement>,
    pub promotions: Option<String>,
    pub terms_of_service: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsRequestCustomFields {
    Variant1(Vec<PostCheckoutSessionsRequestCustomFieldsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItem {
    pub dropdown: Option<PostCheckoutSessionsRequestCustomFieldsItemDropdown>,
    pub key: String,
    pub label: PostCheckoutSessionsRequestCustomFieldsItemLabel,
    pub numeric: Option<PostCheckoutSessionsRequestCustomFieldsItemNumeric>,
    pub optional: Option<bool>,
    pub text: Option<PostCheckoutSessionsRequestCustomFieldsItemText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItemDropdown {
    pub default_value: Option<String>,
    pub options: Vec<PostCheckoutSessionsRequestCustomFieldsItemOptionsItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItemLabel {
    pub custom: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItemNumeric {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItemOptionsItem {
    pub label: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsItemText {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomFieldsObject {
    pub name: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomText {
    pub after_submit: Option<PostCheckoutSessionsRequestAfterSubmit>,
    pub shipping_address: Option<PostCheckoutSessionsRequestAfterSubmit>,
    pub submit: Option<PostCheckoutSessionsRequestAfterSubmit>,
    pub terms_of_service_acceptance: Option<PostCheckoutSessionsRequestAfterSubmit>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomerBalance {
    pub bank_transfer: Option<PostCheckoutSessionsRequestBankTransfer>,
    pub funding_type: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestCustomerUpdate {
    pub address: Option<String>,
    pub name: Option<String>,
    pub shipping: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestDemoPay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestDiscountsItem {
    pub coupon: Option<String>,
    pub promotion_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestEndBehavior {
    pub missing_payment_method: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestEuBankTransfer {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestFinancialConnections {
    pub permissions: Option<Vec<String>>,
    pub prefetch: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestFlexible {
    pub proration_discounts: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestIcon {
    pub file: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestIndividual {
    pub enabled: bool,
    pub optional: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestInstallments {
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestInvoiceCreation {
    pub enabled: bool,
    pub invoice_data: Option<PostCheckoutSessionsRequestInvoiceData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestInvoiceData {
    pub account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub custom_fields: Option<PostCheckoutSessionsRequestCustomFields>,
    pub description: Option<String>,
    pub footer: Option<String>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub rendering_options: Option<PostCheckoutSessionsRequestRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestInvoiceSettings {
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestKlarna {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
    pub subscriptions: Option<PostCheckoutSessionsRequestSubscriptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestKonbini {
    pub expires_after_days: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLiability {
    pub account: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLineItemsItem {
    pub adjustable_quantity: Option<PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity>,
    pub dynamic_tax_rates: Option<Vec<String>>,
    pub price: Option<String>,
    pub price_data: Option<PostCheckoutSessionsRequestLineItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLineItemsItemPriceData {
    pub currency: String,
    pub product: Option<String>,
    pub product_data: Option<PostCheckoutSessionsRequestLineItemsItemProductData>,
    pub recurring: Option<PostCheckoutSessionsRequestLineItemsItemRecurring>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLineItemsItemProductData {
    pub description: Option<String>,
    pub images: Option<Vec<String>>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub name: String,
    pub tax_code: Option<String>,
    pub unit_label: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLineItemsItemRecurring {
    pub interval: String,
    pub interval_count: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLink {
    pub display: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestLogo {
    pub file: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestMandateOptions {
    pub custom_mandate_url: Option<PostAccountsRequestSupportUrl>,
    pub default_for: Option<Vec<String>>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestNameCollection {
    pub business: Option<PostCheckoutSessionsRequestBusiness>,
    pub individual: Option<PostCheckoutSessionsRequestIndividual>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestOptionalItemsItem {
    pub adjustable_quantity: Option<PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity>,
    pub price: String,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestP24 {
    pub setup_future_usage: Option<String>,
    pub tos_shown_and_accepted: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPaymentIntentData {
    pub application_fee_amount: Option<i32>,
    pub capture_method: Option<String>,
    pub description: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub on_behalf_of: Option<String>,
    pub receipt_email: Option<String>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<PostCheckoutSessionsRequestShipping>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostCheckoutSessionsRequestTransferData>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPaymentMethodData {
    pub allow_redisplay: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPaymentMethodOptions {
    pub acss_debit: Option<PostCheckoutSessionsRequestAcssDebit>,
    pub affirm: Option<PostCheckoutSessionsRequestAffirm>,
    pub afterpay_clearpay: Option<PostCheckoutSessionsRequestAffirm>,
    pub alipay: Option<PostCheckoutSessionsRequestAlipay>,
    pub alma: Option<PostCheckoutSessionsRequestAlma>,
    pub amazon_pay: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub au_becs_debit: Option<PostCheckoutSessionsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostCheckoutSessionsRequestBacsDebit>,
    pub bancontact: Option<PostCheckoutSessionsRequestBancontact>,
    pub billie: Option<PostCheckoutSessionsRequestAlma>,
    pub boleto: Option<PostCheckoutSessionsRequestBoleto>,
    pub card: Option<PostCheckoutSessionsRequestCard>,
    pub cashapp: Option<PostCheckoutSessionsRequestCashapp>,
    pub customer_balance: Option<PostCheckoutSessionsRequestCustomerBalance>,
    pub demo_pay: Option<PostCheckoutSessionsRequestDemoPay>,
    pub eps: Option<PostCheckoutSessionsRequestBancontact>,
    pub fpx: Option<PostCheckoutSessionsRequestBancontact>,
    pub giropay: Option<PostCheckoutSessionsRequestBancontact>,
    pub grabpay: Option<PostCheckoutSessionsRequestBancontact>,
    pub ideal: Option<PostCheckoutSessionsRequestBancontact>,
    pub kakao_pay: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub klarna: Option<PostCheckoutSessionsRequestKlarna>,
    pub konbini: Option<PostCheckoutSessionsRequestKonbini>,
    pub kr_card: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub link: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub mobilepay: Option<PostCheckoutSessionsRequestAffirm>,
    pub multibanco: Option<PostCheckoutSessionsRequestBancontact>,
    pub naver_pay: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub oxxo: Option<PostCheckoutSessionsRequestKonbini>,
    pub p24: Option<PostCheckoutSessionsRequestP24>,
    pub pay_by_bank: Option<serde_json::Value>,
    pub payco: Option<PostCheckoutSessionsRequestAlma>,
    pub paynow: Option<PostCheckoutSessionsRequestBancontact>,
    pub paypal: Option<PostCheckoutSessionsRequestPaypal>,
    pub pix: Option<PostCheckoutSessionsRequestPix>,
    pub revolut_pay: Option<PostCheckoutSessionsRequestAmazonPay>,
    pub samsung_pay: Option<PostCheckoutSessionsRequestAlma>,
    pub satispay: Option<PostCheckoutSessionsRequestAlma>,
    pub sepa_debit: Option<PostCheckoutSessionsRequestBacsDebit>,
    pub sofort: Option<PostCheckoutSessionsRequestBancontact>,
    pub swish: Option<PostCheckoutSessionsRequestSwish>,
    pub twint: Option<PostCheckoutSessionsRequestAlipay>,
    pub us_bank_account: Option<PostCheckoutSessionsRequestUsBankAccount>,
    pub wechat_pay: Option<PostCheckoutSessionsRequestWechatPay>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPaymentMethodReuseAgreement {
    pub position: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPaypal {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub reference: Option<String>,
    pub risk_correlation_id: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPermissions {
    pub update_shipping_details: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPhoneNumberCollection {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestPix {
    pub amount_includes_iof: Option<String>,
    pub expires_after_seconds: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestRecovery {
    pub allow_promotion_codes: Option<bool>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsRequestReferencePrefix {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsRequestRenderingOptions {
    CheckoutRenderingOptionsParam(PostCheckoutSessionsRequestRenderingOptionsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestRenderingOptionsObject {
    pub amount_tax_display: Option<String>,
    pub template: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestRestrictions {
    pub brands_blocked: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSavedPaymentMethodOptions {
    pub allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_remove: Option<String>,
    pub payment_method_save: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSetupIntentData {
    pub description: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub on_behalf_of: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShipping {
    pub address: PostCheckoutSessionsRequestAddress,
    pub carrier: Option<String>,
    pub name: String,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingAddressCollection {
    pub allowed_countries: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItem {
    pub shipping_rate: Option<String>,
    pub shipping_rate_data: Option<PostCheckoutSessionsRequestShippingOptionsItemShippingRateData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate {
    pub maximum: Option<PostCheckoutSessionsRequestShippingOptionsItemMaximum>,
    pub minimum: Option<PostCheckoutSessionsRequestShippingOptionsItemMaximum>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItemFixedAmount {
    pub amount: i32,
    pub currency: String,
    pub currency_options: Option<PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItemMaximum {
    pub unit: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestShippingOptionsItemShippingRateData {
    pub delivery_estimate: Option<PostCheckoutSessionsRequestShippingOptionsItemDeliveryEstimate>,
    pub display_name: String,
    pub fixed_amount: Option<PostCheckoutSessionsRequestShippingOptionsItemFixedAmount>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSubscriptionData {
    pub application_fee_percent: Option<f32>,
    pub billing_cycle_anchor: Option<i32>,
    pub billing_mode: Option<PostCheckoutSessionsRequestBillingMode>,
    pub default_tax_rates: Option<Vec<String>>,
    pub description: Option<String>,
    pub invoice_settings: Option<PostCheckoutSessionsRequestInvoiceSettings>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub on_behalf_of: Option<String>,
    pub proration_behavior: Option<String>,
    pub transfer_data: Option<DefaultPostCheckoutSessionsRequestTransferData>,
    pub trial_end: Option<i32>,
    pub trial_period_days: Option<i32>,
    pub trial_settings: Option<PostCheckoutSessionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsRequestSubscriptions {
    Variant1(Vec<PostCheckoutSessionsRequestSubscriptionsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSubscriptionsObject {
    pub interval: String,
    pub interval_count: Option<i32>,
    pub name: Option<String>,
    pub next_billing: PostCheckoutSessionsRequestSubscriptionsObjectNextBilling,
    pub reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSubscriptionsObjectNextBilling {
    pub amount: i32,
    pub date: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestSwish {
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestTaxIdCollection {
    pub enabled: bool,
    pub required: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestTransferData {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestTrialSettings {
    pub end_behavior: PostCheckoutSessionsRequestEndBehavior,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestUsBankAccount {
    pub financial_connections: Option<PostCheckoutSessionsRequestFinancialConnections>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestWalletOptions {
    pub link: Option<PostCheckoutSessionsRequestLink>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsRequestWechatPay {
    pub app_id: Option<String>,
    pub client: String,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsSessionRequest {
    pub collected_information: Option<PostCheckoutSessionsSessionRequestCollectedInformation>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub shipping_options: Option<PostCheckoutSessionsSessionRequestShippingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsSessionRequestAddress {
    pub city: Option<String>,
    pub country: String,
    pub line1: String,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsSessionRequestCollectedInformation {
    pub shipping_details: Option<PostCheckoutSessionsSessionRequestShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCheckoutSessionsSessionRequestShippingDetails {
    pub address: PostCheckoutSessionsSessionRequestAddress,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCheckoutSessionsSessionRequestShippingOptions {
    Variant1(Vec<PostCheckoutSessionsRequestShippingOptionsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostClimateOrdersOrderRequest {
    pub beneficiary: Option<PostClimateOrdersOrderRequestBeneficiary>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostClimateOrdersOrderRequestBeneficiary {
    BeneficiaryParams(PostClimateOrdersOrderRequestBeneficiaryObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostClimateOrdersOrderRequestBeneficiaryObject {
    pub public_name: PostAccountsRequestPaymentsPricing,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostClimateOrdersRequest {
    pub amount: Option<i32>,
    pub beneficiary: Option<PostClimateOrdersRequestBeneficiary>,
    pub currency: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub metric_tons: Option<String>,
    pub product: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostClimateOrdersRequestBeneficiary {
    pub public_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCouponsCouponRequest {
    pub currency_options: Option<PostCouponsCouponRequestCurrencyOptions>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCouponsCouponRequestCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCouponsRequest {
    pub amount_off: Option<i32>,
    pub applies_to: Option<PostCouponsRequestAppliesTo>,
    pub currency: Option<String>,
    pub currency_options: Option<PostCouponsRequestCurrencyOptions>,
    pub duration: Option<String>,
    pub duration_in_months: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub id: Option<String>,
    pub max_redemptions: Option<i32>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
    pub percent_off: Option<f32>,
    pub redeem_by: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCouponsRequestAppliesTo {
    pub products: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCouponsRequestCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesIdRequest {
    pub expand: Option<Vec<String>>,
    pub memo: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequest {
    pub amount: Option<i32>,
    pub credit_amount: Option<i32>,
    pub effective_at: Option<i32>,
    pub email_type: Option<String>,
    pub expand: Option<Vec<String>>,
    pub invoice: String,
    pub lines: Option<Vec<PostCreditNotesRequestLinesItem>>,
    pub memo: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub out_of_band_amount: Option<i32>,
    pub reason: Option<String>,
    pub refund_amount: Option<i32>,
    pub refunds: Option<Vec<PostCreditNotesRequestRefundsItem>>,
    pub shipping_cost: Option<PostCreditNotesRequestShippingCost>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequestLinesItem {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub invoice_line_item: Option<String>,
    pub quantity: Option<i32>,
    pub tax_amounts: Option<PostCreditNotesRequestLinesItemTaxAmounts>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCreditNotesRequestLinesItemTaxAmounts {
    Variant1(Vec<PostCreditNotesRequestLinesItemTaxAmountsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequestLinesItemTaxAmountsObject {
    pub amount: i32,
    pub tax_rate: String,
    pub taxable_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequestRefundsItem {
    pub amount_refunded: Option<i32>,
    pub payment_record_refund: Option<PostCreditNotesRequestRefundsItemPaymentRecordRefund>,
    pub refund: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequestRefundsItemPaymentRecordRefund {
    pub payment_record: String,
    pub refund_group: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCreditNotesRequestShippingCost {
    pub shipping_rate: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequest {
    pub components: PostCustomerSessionsRequestComponents,
    pub customer: String,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestBuyButton {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestComponents {
    pub buy_button: Option<PostCustomerSessionsRequestBuyButton>,
    pub customer_sheet: Option<PostCustomerSessionsRequestCustomerSheet>,
    pub mobile_payment_element: Option<PostCustomerSessionsRequestMobilePaymentElement>,
    pub payment_element: Option<PostCustomerSessionsRequestPaymentElement>,
    pub pricing_table: Option<PostCustomerSessionsRequestPricingTable>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestCustomerSheet {
    pub enabled: bool,
    pub features: Option<PostCustomerSessionsRequestFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestFeatures {
    pub payment_method_allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_remove: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestFeatures2 {
    pub payment_method_allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_redisplay: Option<String>,
    pub payment_method_redisplay_limit: Option<i32>,
    pub payment_method_remove: Option<String>,
    pub payment_method_save: Option<String>,
    pub payment_method_save_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestMobilePaymentElement {
    pub enabled: bool,
    pub features: Option<DefaultPostCustomerSessionsRequestFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestPaymentElement {
    pub enabled: bool,
    pub features: Option<PostCustomerSessionsRequestFeatures2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomerSessionsRequestPricingTable {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBalanceTransactionsRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBalanceTransactionsTransactionRequest {
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBankAccountsIdRequest {
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub address_city: Option<String>,
    pub address_country: Option<String>,
    pub address_line1: Option<String>,
    pub address_line2: Option<String>,
    pub address_state: Option<String>,
    pub address_zip: Option<String>,
    pub exp_month: Option<String>,
    pub exp_year: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
    pub owner: Option<PostCustomersCustomerBankAccountsIdRequestOwner>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBankAccountsIdRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBankAccountsIdRequestOwner {
    pub address: Option<PostCustomersCustomerBankAccountsIdRequestAddress>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerBankAccountsIdUnion {
    Card(Card),
    BankAccount(BankAccount),
    Source(Source),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBankAccountsIdVerifyRequest {
    pub amounts: Option<Vec<i32>>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerBankAccountsRequest {
    pub alipay_account: Option<String>,
    pub bank_account: Option<PostCustomersCustomerRequestBankAccount>,
    pub card: Option<PostChargesRequestCard>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub source: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerCashBalanceRequest {
    pub expand: Option<Vec<String>>,
    pub settings: Option<PostCustomersCustomerCashBalanceRequestSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerCashBalanceRequestSettings {
    pub reconciliation_mode: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerFundingInstructionsRequest {
    pub bank_transfer: PostCustomersCustomerFundingInstructionsRequestBankTransfer,
    pub currency: String,
    pub expand: Option<Vec<String>>,
    pub funding_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerFundingInstructionsRequestBankTransfer {
    pub eu_bank_transfer: Option<PostCustomersCustomerFundingInstructionsRequestEuBankTransfer>,
    pub requested_address_types: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerFundingInstructionsRequestEuBankTransfer {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerRequest {
    pub address: Option<PostCustomersRequestAddress>,
    pub balance: Option<i32>,
    pub bank_account: Option<PostCustomersCustomerRequestBankAccount>,
    pub business_name: Option<PostCustomersRequestBusinessName>,
    pub card: Option<PostChargesRequestCard>,
    pub cash_balance: Option<PostCustomersRequestCashBalance>,
    pub default_alipay_account: Option<String>,
    pub default_bank_account: Option<String>,
    pub default_card: Option<String>,
    pub default_source: Option<String>,
    pub description: Option<String>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub individual_name: Option<PostCustomersRequestIndividualName>,
    pub invoice_prefix: Option<String>,
    pub invoice_settings: Option<PostCustomersRequestInvoiceSettings>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
    pub next_invoice_sequence: Option<i32>,
    pub phone: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub shipping: Option<PostCustomersRequestShipping>,
    pub source: Option<String>,
    pub tax: Option<PostCustomersCustomerRequestTax>,
    pub tax_exempt: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerRequestBankAccount {
    CustomerPaymentSourceBankAccount(PostCustomersCustomerRequestBankAccountObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerRequestBankAccountObject {
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub account_number: String,
    pub country: String,
    pub currency: Option<String>,
    pub object: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerRequestTax {
    pub ip_address: Option<PostAccountsRequestSupportUrl>,
    pub validate_location: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequest {
    pub add_invoice_items:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>>,
    pub application_fee_percent:
        Option<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>,
    pub automatic_tax: Option<PostCustomersCustomerSubscriptionsRequestAutomaticTax>,
    pub backdate_start_date: Option<i32>,
    pub billing_cycle_anchor: Option<i32>,
    pub billing_thresholds: Option<PostCustomersCustomerSubscriptionsRequestBillingThresholds>,
    pub cancel_at: Option<PostCustomersCustomerSubscriptionsRequestCancelAt>,
    pub cancel_at_period_end: Option<bool>,
    pub collection_method: Option<String>,
    pub currency: Option<String>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source: Option<String>,
    pub default_tax_rates: Option<PostCustomersCustomerSubscriptionsRequestDefaultTaxRates>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice_settings: Option<PostCustomersCustomerSubscriptionsRequestInvoiceSettings>,
    pub items: Option<Vec<PostCustomersCustomerSubscriptionsRequestItemsItem>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub off_session: Option<bool>,
    pub payment_behavior: Option<String>,
    pub payment_settings: Option<PostCustomersCustomerSubscriptionsRequestPaymentSettings>,
    pub pending_invoice_item_interval:
        Option<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval>,
    pub proration_behavior: Option<String>,
    pub transfer_data: Option<PostCustomersCustomerSubscriptionsRequestTransferData>,
    pub trial_end: Option<PostCustomersCustomerSubscriptionsRequestTrialEnd>,
    pub trial_from_plan: Option<bool>,
    pub trial_period_days: Option<i32>,
    pub trial_settings: Option<PostCustomersCustomerSubscriptionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestAcssDebit {
    InvoicePaymentMethodOptionsParam(PostCustomersCustomerSubscriptionsRequestAcssDebitObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAcssDebitObject {
    pub mandate_options:
        Option<PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAcssDebitObjectMandateOptions {
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem {
    pub discounts:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub period: Option<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod>,
    pub price: Option<String>,
    pub price_data: Option<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem {
    pub coupon: Option<String>,
    pub discount: Option<String>,
    pub promotion_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod {
    pub end: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd,
    pub start: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData {
    pub currency: String,
    pub product: String,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestApplicationFeePercent {
    Variant1(f32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestBancontact {
    InvoicePaymentMethodOptionsParam(PostCustomersCustomerSubscriptionsRequestBancontactObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestBancontactObject {
    pub preferred_language: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestBillingThresholds {
    BillingThresholdsParam(PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject {
    pub amount_gte: Option<i32>,
    pub reset_billing_cycle_anchor: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestCancelAt {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestCard {
    SubscriptionPaymentMethodOptionsParam(PostCustomersCustomerSubscriptionsRequestCardObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestCardObject {
    pub mandate_options: Option<PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions>,
    pub network: Option<String>,
    pub request_three_d_secure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestCardObjectMandateOptions {
    pub amount: Option<i32>,
    pub amount_type: Option<String>,
    pub description: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestCustomerBalance {
    InvoicePaymentMethodOptionsParam(
        PostCustomersCustomerSubscriptionsRequestCustomerBalanceObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestCustomerBalanceObject {
    pub bank_transfer:
        Option<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer>,
    pub funding_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer {
    pub eu_bank_transfer:
        Option<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestDefaultTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestInvoiceSettings {
    pub account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestItemsItem {
    pub billing_thresholds:
        Option<PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub price: Option<String>,
    pub price_data: Option<PostCustomersCustomerSubscriptionsRequestItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds {
    ItemBillingThresholdsParam(
        PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject {
    pub usage_gte: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestItemsItemPriceData {
    pub currency: String,
    pub product: String,
    pub recurring: PostCheckoutSessionsRequestLineItemsItemRecurring,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestKonbini {
    InvoicePaymentMethodOptionsParam(serde_json::Value),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions {
    pub acss_debit: Option<PostCustomersCustomerSubscriptionsRequestAcssDebit>,
    pub bancontact: Option<PostCustomersCustomerSubscriptionsRequestBancontact>,
    pub card: Option<PostCustomersCustomerSubscriptionsRequestCard>,
    pub customer_balance: Option<PostCustomersCustomerSubscriptionsRequestCustomerBalance>,
    pub konbini: Option<PostCustomersCustomerSubscriptionsRequestKonbini>,
    pub sepa_debit: Option<PostCustomersCustomerSubscriptionsRequestKonbini>,
    pub us_bank_account: Option<PostCustomersCustomerSubscriptionsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestPaymentSettings {
    pub payment_method_options:
        Option<PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes>,
    pub save_default_payment_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval {
    PendingInvoiceItemIntervalParams(
        PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject {
    pub interval: String,
    pub interval_count: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestTransferData {
    pub amount_percent: Option<f32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestTrialEnd {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestTrialSettings {
    pub end_behavior: PostCheckoutSessionsRequestEndBehavior,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsRequestUsBankAccount {
    InvoicePaymentMethodOptionsParam(PostCustomersCustomerSubscriptionsRequestUsBankAccountObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestUsBankAccountObject {
    pub financial_connections:
        Option<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters {
    pub account_subcategories: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections {
    pub filters: Option<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters>,
    pub permissions: Option<Vec<String>>,
    pub prefetch: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest {
    pub add_invoice_items:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>>,
    pub application_fee_percent:
        Option<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>,
    pub automatic_tax:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<PostCustomersCustomerSubscriptionsRequestBillingThresholds>,
    pub cancel_at: Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt>,
    pub cancel_at_period_end: Option<bool>,
    pub cancellation_details:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails>,
    pub collection_method: Option<String>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource>,
    pub default_tax_rates:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice_settings: Option<PostCustomersCustomerSubscriptionsRequestInvoiceSettings>,
    pub items: Option<Vec<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub off_session: Option<bool>,
    pub pause_collection:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection>,
    pub payment_behavior: Option<String>,
    pub payment_settings: Option<PostCustomersCustomerSubscriptionsRequestPaymentSettings>,
    pub pending_invoice_item_interval:
        Option<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
    pub transfer_data:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData>,
    pub trial_end: Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd>,
    pub trial_from_plan: Option<bool>,
    pub trial_settings: Option<PostCustomersCustomerSubscriptionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt {
    Variant1(i32),
    Variant2(String),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails {
    pub comment: Option<PostAccountsRequestPaymentsPricing>,
    pub feedback: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem {
    pub billing_thresholds:
        Option<PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds>,
    pub clear_usage: Option<bool>,
    pub deleted: Option<bool>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub id: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub price: Option<String>,
    pub price_data: Option<PostCustomersCustomerSubscriptionsRequestItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection {
    PauseCollectionParam(
        PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject {
    pub behavior: String,
    pub resumes_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData {
    TransferDataSpecs(DefaultPostCheckoutSessionsRequestTransferData),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersCustomerTaxIdsRequest {
    pub expand: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequest {
    pub address: Option<PostCustomersRequestAddress>,
    pub balance: Option<i32>,
    pub business_name: Option<PostCustomersRequestBusinessName>,
    pub cash_balance: Option<PostCustomersRequestCashBalance>,
    pub description: Option<String>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub individual_name: Option<PostCustomersRequestIndividualName>,
    pub invoice_prefix: Option<String>,
    pub invoice_settings: Option<PostCustomersRequestInvoiceSettings>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
    pub next_invoice_sequence: Option<i32>,
    pub payment_method: Option<String>,
    pub phone: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub shipping: Option<PostCustomersRequestShipping>,
    pub source: Option<String>,
    pub tax: Option<PostCustomersRequestTax>,
    pub tax_exempt: Option<String>,
    pub tax_id_data: Option<Vec<PostCustomersRequestTaxIdDataItem>>,
    pub test_clock: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersRequestAddress {
    OptionalFieldsCustomerAddress(PostCustomersRequestAddressObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestAddressObject {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersRequestBusinessName {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestCashBalance {
    pub settings: Option<PostCustomersRequestSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersRequestIndividualName {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestInvoiceSettings {
    pub custom_fields: Option<PostCheckoutSessionsRequestCustomFields>,
    pub default_payment_method: Option<String>,
    pub footer: Option<String>,
    pub rendering_options: Option<PostCustomersRequestRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersRequestRenderingOptions {
    CustomerRenderingOptionsParam(PostCustomersRequestRenderingOptionsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestRenderingOptionsObject {
    pub amount_tax_display: Option<String>,
    pub template: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestSettings {
    pub reconciliation_mode: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostCustomersRequestShipping {
    CustomerShipping(PostCustomersRequestShippingObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestShippingObject {
    pub address: PostCustomersRequestAddressObject,
    pub name: String,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestTax {
    pub ip_address: Option<PostAccountsRequestSupportUrl>,
    pub validate_location: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostCustomersRequestTaxIdDataItem {
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostEntitlementsFeaturesIdRequest {
    pub active: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostEntitlementsFeaturesIdRequestMetadata>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostEntitlementsFeaturesIdRequestMetadata {
    Variant1(PostAccountsRequestMetadataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostEntitlementsFeaturesRequest {
    pub expand: Option<Vec<String>>,
    pub lookup_key: String,
    pub metadata: Option<PostEntitlementsFeaturesRequestMetadata>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostEntitlementsFeaturesRequestMetadata {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostEphemeralKeysRequest {
    pub customer: Option<String>,
    pub expand: Option<Vec<String>>,
    pub issuing_card: Option<String>,
    pub nonce: Option<String>,
    pub verification_session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFileLinksLinkRequest {
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<PostFileLinksLinkRequestExpiresAt>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostFileLinksLinkRequestExpiresAt {
    Variant1(String),
    Variant2(i32),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFileLinksRequest {
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub file: String,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFilesRequestFileLinkData {
    pub create: bool,
    pub expires_at: Option<i32>,
    pub metadata: Option<PostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsAccountsAccountRefreshRequest {
    pub expand: Option<Vec<String>>,
    pub features: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsAccountsAccountSubscribeRequest {
    pub expand: Option<Vec<String>>,
    pub features: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsAccountsAccountUnsubscribeRequest {
    pub expand: Option<Vec<String>>,
    pub features: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsSessionsRequest {
    pub account_holder: PostFinancialConnectionsSessionsRequestAccountHolder,
    pub expand: Option<Vec<String>>,
    pub filters: Option<PostFinancialConnectionsSessionsRequestFilters>,
    pub permissions: Vec<String>,
    pub prefetch: Option<Vec<String>>,
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsSessionsRequestAccountHolder {
    pub account: Option<String>,
    pub customer: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostFinancialConnectionsSessionsRequestFilters {
    pub account_subcategories: Option<Vec<String>>,
    pub countries: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostForwardingRequestsRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub payment_method: String,
    pub replacements: Vec<String>,
    pub request: Option<PostForwardingRequestsRequestRequest>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostForwardingRequestsRequestHeadersItem {
    pub name: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostForwardingRequestsRequestRequest {
    pub body: Option<String>,
    pub headers: Option<Vec<PostForwardingRequestsRequestHeadersItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsRequest {
    pub client_reference_id: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub options: Option<PostIdentityVerificationSessionsRequestOptions>,
    pub provided_details: Option<PostIdentityVerificationSessionsRequestProvidedDetails>,
    pub related_customer: Option<String>,
    pub related_person: Option<PostIdentityVerificationSessionsRequestRelatedPerson>,
    pub return_url: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub verification_flow: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIdentityVerificationSessionsRequestDocument {
    DocumentOptions(PostIdentityVerificationSessionsRequestDocumentObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsRequestDocumentObject {
    pub allowed_types: Option<Vec<String>>,
    pub require_id_number: Option<bool>,
    pub require_live_capture: Option<bool>,
    pub require_matching_selfie: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsRequestOptions {
    pub document: Option<PostIdentityVerificationSessionsRequestDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsRequestProvidedDetails {
    pub email: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsRequestRelatedPerson {
    pub account: String,
    pub person: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIdentityVerificationSessionsSessionRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub options: Option<PostIdentityVerificationSessionsRequestOptions>,
    pub provided_details: Option<PostIdentityVerificationSessionsRequestProvidedDetails>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoiceitemsInvoiceitemRequest {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostInvoiceitemsInvoiceitemRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub period: Option<PostInvoiceitemsRequestPeriod>,
    pub price_data: Option<PostInvoiceitemsRequestPriceData>,
    pub pricing: Option<PostInvoiceitemsRequestPricing>,
    pub quantity: Option<i32>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<PostInvoiceitemsRequestTaxCode>,
    pub tax_rates: Option<PostInvoiceitemsInvoiceitemRequestTaxRates>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoiceitemsInvoiceitemRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoiceitemsInvoiceitemRequestTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoiceitemsRequest {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub customer: String,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostInvoiceitemsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub period: Option<PostInvoiceitemsRequestPeriod>,
    pub price_data: Option<PostInvoiceitemsRequestPriceData>,
    pub pricing: Option<PostInvoiceitemsRequestPricing>,
    pub quantity: Option<i32>,
    pub subscription: Option<String>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<PostInvoiceitemsRequestTaxCode>,
    pub tax_rates: Option<Vec<String>>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoiceitemsRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoiceitemsRequestPeriod {
    pub end: i32,
    pub start: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoiceitemsRequestPriceData {
    pub currency: String,
    pub product: String,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoiceitemsRequestPricing {
    pub price: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoiceitemsRequestTaxCode {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequest {
    pub automatic_tax: Option<PostInvoicesCreatePreviewRequestAutomaticTax>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub customer_details: Option<PostInvoicesCreatePreviewRequestCustomerDetails>,
    pub discounts: Option<PostInvoicesCreatePreviewRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice_items: Option<Vec<PostInvoicesCreatePreviewRequestInvoiceItemsItem>>,
    pub issuer: Option<PostInvoicesRequestIssuer>,
    pub on_behalf_of: Option<PostInvoicesCreatePreviewRequestOnBehalfOf>,
    pub preview_mode: Option<String>,
    pub schedule: Option<String>,
    pub schedule_details: Option<PostInvoicesCreatePreviewRequestScheduleDetails>,
    pub subscription: Option<String>,
    pub subscription_details: Option<PostInvoicesCreatePreviewRequestSubscriptionDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestAddress {
    OptionalFieldsAddress(PostChargesRequestAddress),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestBillingCycleAnchor {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestCancelAt {
    Variant1(i32),
    Variant2(String),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestCustomerDetails {
    pub address: Option<PostInvoicesCreatePreviewRequestAddress>,
    pub shipping: Option<PostInvoicesCreatePreviewRequestShipping>,
    pub tax: Option<PostInvoicesCreatePreviewRequestTax>,
    pub tax_exempt: Option<String>,
    pub tax_ids: Option<Vec<PostCustomersRequestTaxIdDataItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestInvoiceItemsItem {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub invoiceitem: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub period: Option<PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod>,
    pub price: Option<String>,
    pub price_data: Option<PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<PostAccountsRequestSupportUrl>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod {
    pub end: i32,
    pub start: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData {
    pub currency: String,
    pub product: String,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestOnBehalfOf {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItem {
    pub add_invoice_items:
        Option<Vec<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem>>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds>,
    pub collection_method: Option<String>,
    pub default_payment_method: Option<String>,
    pub default_tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub description: Option<PostAccountsAccountPeopleRequestFilesItem>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub duration: Option<PostInvoicesCreatePreviewRequestPhasesItemDuration>,
    pub end_date: Option<PostInvoicesCreatePreviewRequestPhasesItemEndDate>,
    pub invoice_settings: Option<PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings>,
    pub items: Vec<PostInvoicesCreatePreviewRequestPhasesItemItemsItem>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub on_behalf_of: Option<String>,
    pub proration_behavior: Option<String>,
    pub start_date: Option<PostInvoicesCreatePreviewRequestPhasesItemEndDate>,
    pub transfer_data: Option<DefaultPostCheckoutSessionsRequestTransferData>,
    pub trial: Option<bool>,
    pub trial_end: Option<PostInvoicesCreatePreviewRequestPhasesItemEndDate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem {
    pub discounts:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub period: Option<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod>,
    pub price: Option<String>,
    pub price_data: Option<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod {
    pub end: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd,
    pub start: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds {
    BillingThresholdsParam(PostCustomersCustomerSubscriptionsRequestBillingThresholdsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemDuration {
    pub interval: String,
    pub interval_count: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestPhasesItemEndDate {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings {
    pub account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub days_until_due: Option<i32>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestPhasesItemItemsItem {
    pub billing_thresholds:
        Option<PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub price: Option<String>,
    pub price_data: Option<PostCustomersCustomerSubscriptionsRequestItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestScheduleDetails {
    pub billing_mode: Option<PostCheckoutSessionsRequestBillingMode>,
    pub end_behavior: Option<String>,
    pub phases: Option<Vec<PostInvoicesCreatePreviewRequestPhasesItem>>,
    pub proration_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestShipping {
    CustomerShipping(PostCustomersRequestShippingObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestSubscriptionDetails {
    pub billing_cycle_anchor: Option<PostInvoicesCreatePreviewRequestBillingCycleAnchor>,
    pub billing_mode: Option<PostCheckoutSessionsRequestBillingMode>,
    pub cancel_at: Option<PostInvoicesCreatePreviewRequestCancelAt>,
    pub cancel_at_period_end: Option<bool>,
    pub cancel_now: Option<bool>,
    pub default_tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub items: Option<Vec<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
    pub resume_at: Option<String>,
    pub start_date: Option<i32>,
    pub trial_end: Option<PostInvoicesCreatePreviewRequestTrialEnd>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesCreatePreviewRequestTax {
    pub ip_address: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesCreatePreviewRequestTrialEnd {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequest {
    pub expand: Option<Vec<String>>,
    pub invoice_metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub lines: Vec<PostInvoicesInvoiceAddLinesRequestLinesItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequestLinesItem {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub invoice_item: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub period: Option<PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod>,
    pub price_data: Option<PostInvoicesInvoiceAddLinesRequestLinesItemPriceData>,
    pub pricing: Option<PostInvoicesInvoiceAddLinesRequestLinesItemPricing>,
    pub quantity: Option<i32>,
    pub tax_amounts: Option<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequestLinesItemPriceData {
    pub currency: String,
    pub product: Option<String>,
    pub product_data: Option<PostCheckoutSessionsRequestLineItemsItemProductData>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequestLinesItemPricing {
    pub price: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts {
    Variant1(Vec<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject {
    pub amount: i32,
    pub tax_rate_data: PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData,
    pub taxability_reason: Option<String>,
    pub taxable_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObjectTaxRateData {
    pub country: Option<String>,
    pub description: Option<String>,
    pub display_name: String,
    pub inclusive: bool,
    pub jurisdiction: Option<String>,
    pub jurisdiction_level: Option<String>,
    pub percentage: f32,
    pub state: Option<String>,
    pub tax_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceAttachPaymentRequest {
    pub expand: Option<Vec<String>>,
    pub payment_intent: Option<String>,
    pub payment_record: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceFinalizeRequest {
    pub auto_advance: Option<bool>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceLinesLineItemIdRequest {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostInvoicesInvoiceLinesLineItemIdRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostInvoicesInvoiceLinesLineItemIdRequestMetadata>,
    pub period: Option<PostInvoiceitemsRequestPeriod>,
    pub price_data: Option<PostInvoicesInvoiceLinesLineItemIdRequestPriceData>,
    pub pricing: Option<PostInvoiceitemsRequestPricing>,
    pub quantity: Option<i32>,
    pub tax_amounts: Option<PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts>,
    pub tax_rates: Option<PostInvoicesInvoiceLinesLineItemIdRequestTaxRates>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceLinesLineItemIdRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceLinesLineItemIdRequestMetadata {
    Variant1(PostAccountsRequestMetadataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceLinesLineItemIdRequestPriceData {
    pub currency: String,
    pub product: Option<String>,
    pub product_data: Option<PostCheckoutSessionsRequestLineItemsItemProductData>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts {
    Variant1(Vec<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceLinesLineItemIdRequestTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoicePayRequest {
    pub expand: Option<Vec<String>>,
    pub forgive: Option<bool>,
    pub mandate: Option<PostInvoicesInvoicePayRequestMandate>,
    pub off_session: Option<bool>,
    pub paid_out_of_band: Option<bool>,
    pub payment_method: Option<String>,
    pub source: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoicePayRequestMandate {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRemoveLinesRequest {
    pub expand: Option<Vec<String>>,
    pub invoice_metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub lines: Vec<PostInvoicesInvoiceRemoveLinesRequestLinesItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRemoveLinesRequestLinesItem {
    pub behavior: String,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRequest {
    pub account_tax_ids: Option<PostInvoicesRequestAccountTaxIds>,
    pub application_fee_amount: Option<i32>,
    pub auto_advance: Option<bool>,
    pub automatic_tax: Option<PostInvoicesRequestAutomaticTax>,
    pub automatically_finalizes_at: Option<i32>,
    pub collection_method: Option<String>,
    pub custom_fields: Option<PostInvoicesInvoiceRequestCustomFields>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source: Option<PostInvoicesInvoiceRequestDefaultSource>,
    pub default_tax_rates: Option<PostInvoicesInvoiceRequestDefaultTaxRates>,
    pub description: Option<String>,
    pub discounts: Option<PostInvoicesInvoiceRequestDiscounts>,
    pub due_date: Option<i32>,
    pub effective_at: Option<PostInvoicesInvoiceRequestEffectiveAt>,
    pub expand: Option<Vec<String>>,
    pub footer: Option<String>,
    pub issuer: Option<PostInvoicesRequestIssuer>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub number: Option<PostInvoicesInvoiceRequestNumber>,
    pub on_behalf_of: Option<PostInvoicesCreatePreviewRequestOnBehalfOf>,
    pub payment_settings: Option<PostInvoicesRequestPaymentSettings>,
    pub rendering: Option<PostInvoicesRequestRendering>,
    pub shipping_cost: Option<PostInvoicesInvoiceRequestShippingCost>,
    pub shipping_details: Option<PostInvoicesInvoiceRequestShippingDetails>,
    pub statement_descriptor: Option<String>,
    pub transfer_data: Option<PostInvoicesInvoiceRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestCustomFields {
    Variant1(Vec<PostCheckoutSessionsRequestCustomFieldsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestDefaultSource {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestDefaultTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestEffectiveAt {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestNumber {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestShippingCost {
    ShippingCost(PostInvoicesInvoiceRequestShippingCostObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRequestShippingCostObject {
    pub shipping_rate: Option<String>,
    pub shipping_rate_data: Option<PostCheckoutSessionsRequestShippingOptionsItemShippingRateData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestShippingDetails {
    RecipientShippingWithOptionalFieldsAddress(PostInvoicesInvoiceRequestShippingDetailsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRequestShippingDetailsObject {
    pub address: PostChargesRequestAddress,
    pub name: String,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesInvoiceRequestTransferData {
    TransferDataSpecs(PostInvoicesInvoiceRequestTransferDataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceRequestTransferDataObject {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceUpdateLinesRequest {
    pub expand: Option<Vec<String>>,
    pub invoice_metadata: Option<PostInvoicesInvoiceLinesLineItemIdRequestMetadata>,
    pub lines: Vec<PostInvoicesInvoiceUpdateLinesRequestLinesItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesInvoiceUpdateLinesRequestLinesItem {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub discountable: Option<bool>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub id: String,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub period: Option<PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod>,
    pub price_data: Option<PostInvoicesInvoiceAddLinesRequestLinesItemPriceData>,
    pub pricing: Option<PostInvoicesInvoiceAddLinesRequestLinesItemPricing>,
    pub quantity: Option<i32>,
    pub tax_amounts: Option<PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequest {
    pub account_tax_ids: Option<PostInvoicesRequestAccountTaxIds>,
    pub application_fee_amount: Option<i32>,
    pub auto_advance: Option<bool>,
    pub automatic_tax: Option<PostInvoicesRequestAutomaticTax>,
    pub automatically_finalizes_at: Option<i32>,
    pub collection_method: Option<String>,
    pub currency: Option<String>,
    pub custom_fields: Option<PostInvoicesRequestCustomFields>,
    pub customer: Option<String>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source: Option<String>,
    pub default_tax_rates: Option<Vec<String>>,
    pub description: Option<String>,
    pub discounts: Option<PostInvoicesRequestDiscounts>,
    pub due_date: Option<i32>,
    pub effective_at: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub footer: Option<String>,
    pub from_invoice: Option<PostInvoicesRequestFromInvoice>,
    pub issuer: Option<PostInvoicesRequestIssuer>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub number: Option<String>,
    pub on_behalf_of: Option<String>,
    pub payment_settings: Option<PostInvoicesRequestPaymentSettings>,
    pub pending_invoice_items_behavior: Option<String>,
    pub rendering: Option<PostInvoicesRequestRendering>,
    pub shipping_cost: Option<PostInvoicesRequestShippingCost>,
    pub shipping_details: Option<PostInvoicesRequestShippingDetails>,
    pub statement_descriptor: Option<String>,
    pub subscription: Option<String>,
    pub transfer_data: Option<PostInvoicesRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesRequestAccountTaxIds {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesRequestCard {
    InvoicePaymentMethodOptionsParam(PostInvoicesRequestCardObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestCardObject {
    pub installments: Option<PostInvoicesRequestCardObjectInstallments>,
    pub request_three_d_secure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestCardObjectInstallments {
    pub enabled: Option<bool>,
    pub plan: Option<PostInvoicesRequestCardObjectPlan>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesRequestCardObjectPlan {
    InstallmentPlan(PostInvoicesRequestCardObjectPlanObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestCardObjectPlanObject {
    pub count: Option<i32>,
    pub interval: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesRequestCustomFields {
    Variant1(Vec<PostCheckoutSessionsRequestCustomFieldsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostInvoicesRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestFromInvoice {
    pub action: String,
    pub invoice: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestIssuer {
    pub account: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestPaymentMethodOptions {
    pub acss_debit: Option<PostCustomersCustomerSubscriptionsRequestAcssDebit>,
    pub bancontact: Option<PostCustomersCustomerSubscriptionsRequestBancontact>,
    pub card: Option<PostInvoicesRequestCard>,
    pub customer_balance: Option<PostCustomersCustomerSubscriptionsRequestCustomerBalance>,
    pub konbini: Option<PostCustomersCustomerSubscriptionsRequestKonbini>,
    pub sepa_debit: Option<PostCustomersCustomerSubscriptionsRequestKonbini>,
    pub us_bank_account: Option<PostCustomersCustomerSubscriptionsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestPaymentSettings {
    pub default_mandate: Option<PostAccountsRequestPaymentsPricing>,
    pub payment_method_options: Option<PostInvoicesRequestPaymentMethodOptions>,
    pub payment_method_types: Option<PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestPdf {
    pub page_size: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestRendering {
    pub amount_tax_display: Option<String>,
    pub pdf: Option<PostInvoicesRequestPdf>,
    pub template: Option<String>,
    pub template_version: Option<PostBalanceSettingsRequestDelayDaysOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestShippingCost {
    pub shipping_rate: Option<String>,
    pub shipping_rate_data: Option<PostCheckoutSessionsRequestShippingOptionsItemShippingRateData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestShippingDetails {
    pub address: PostChargesRequestAddress,
    pub name: String,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostInvoicesRequestTransferData {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingAuthorizationsAuthorizationApproveRequest {
    pub amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersCardholderRequest {
    pub billing: Option<PostIssuingCardholdersRequestBilling>,
    pub company: Option<PostIssuingCardholdersRequestCompany>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub individual: Option<PostIssuingCardholdersRequestIndividual>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub phone_number: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub spending_controls: Option<PostIssuingCardholdersRequestSpendingControls>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequest {
    pub billing: PostIssuingCardholdersRequestBilling,
    pub company: Option<PostIssuingCardholdersRequestCompany>,
    pub email: Option<String>,
    pub expand: Option<Vec<String>>,
    pub individual: Option<PostIssuingCardholdersRequestIndividual>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: String,
    pub phone_number: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub spending_controls: Option<PostIssuingCardholdersRequestSpendingControls>,
    pub status: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestAddress {
    pub city: String,
    pub country: String,
    pub line1: String,
    pub line2: Option<String>,
    pub postal_code: String,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestBilling {
    pub address: PostIssuingCardholdersRequestAddress,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestCardIssuing {
    pub user_terms_acceptance: Option<PostIssuingCardholdersRequestUserTermsAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestCompany {
    pub tax_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestDocument {
    pub back: Option<String>,
    pub front: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestIndividual {
    pub card_issuing: Option<PostIssuingCardholdersRequestCardIssuing>,
    pub dob: Option<PostAccountsRequestDobObject>,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub verification: Option<PostIssuingCardholdersRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestSpendingControls {
    pub allowed_categories: Option<Vec<String>>,
    pub allowed_merchant_countries: Option<Vec<String>>,
    pub blocked_categories: Option<Vec<String>>,
    pub blocked_merchant_countries: Option<Vec<String>>,
    pub spending_limits: Option<Vec<PostIssuingCardholdersRequestSpendingLimitsItem>>,
    pub spending_limits_currency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestSpendingLimitsItem {
    pub amount: i32,
    pub categories: Option<Vec<String>>,
    pub interval: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestUserTermsAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardholdersRequestVerification {
    pub document: Option<PostIssuingCardholdersRequestDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsCardRequest {
    pub cancellation_reason: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub personalization_design: Option<String>,
    pub pin: Option<PostIssuingCardsCardRequestPin>,
    pub shipping: Option<PostIssuingCardsCardRequestShipping>,
    pub spending_controls: Option<PostIssuingCardsRequestSpendingControls>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsCardRequestPin {
    pub encrypted_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsCardRequestShipping {
    pub address: PostIssuingCardholdersRequestAddress,
    pub address_validation: Option<PostIssuingCardsRequestAddressValidation>,
    pub customs: Option<PostIssuingCardsRequestCustoms>,
    pub name: String,
    pub phone_number: Option<String>,
    pub require_signature: Option<bool>,
    pub service: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequest {
    pub cardholder: Option<String>,
    pub currency: String,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub financial_account: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub personalization_design: Option<String>,
    pub pin: Option<PostIssuingCardsRequestPin>,
    pub replacement_for: Option<String>,
    pub replacement_reason: Option<String>,
    pub second_line: Option<PostIssuingCardsRequestSecondLine>,
    pub shipping: Option<PostIssuingCardsRequestShipping>,
    pub spending_controls: Option<PostIssuingCardsRequestSpendingControls>,
    pub status: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequestAddressValidation {
    pub mode: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequestCustoms {
    pub eori_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequestPin {
    pub encrypted_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingCardsRequestSecondLine {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequestShipping {
    pub address: PostIssuingCardholdersRequestAddress,
    pub address_validation: Option<PostIssuingCardsRequestAddressValidation>,
    pub customs: Option<PostIssuingCardsRequestCustoms>,
    pub name: String,
    pub phone_number: Option<String>,
    pub require_signature: Option<bool>,
    pub service: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingCardsRequestSpendingControls {
    pub allowed_categories: Option<Vec<String>>,
    pub allowed_merchant_countries: Option<Vec<String>>,
    pub blocked_categories: Option<Vec<String>>,
    pub blocked_merchant_countries: Option<Vec<String>>,
    pub spending_limits: Option<Vec<PostIssuingCardholdersRequestSpendingLimitsItem>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesDisputeRequest {
    pub amount: Option<i32>,
    pub evidence: Option<PostIssuingDisputesRequestEvidence>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequest {
    pub amount: Option<i32>,
    pub evidence: Option<PostIssuingDisputesRequestEvidence>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub transaction: Option<String>,
    pub treasury: Option<PostIssuingDisputesRequestTreasury>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestCanceled {
    Canceled(PostIssuingDisputesRequestCanceledObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestCanceledObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub canceled_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub cancellation_policy_provided:
        Option<PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided>,
    pub cancellation_reason: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub expected_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_description: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_type: Option<String>,
    pub return_status: Option<String>,
    pub returned_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestCanceledObjectCanceledAt {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided {
    Variant1(bool),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestCanceledObjectCancellationReason {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestDuplicate {
    Duplicate(PostIssuingDisputesRequestDuplicateObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestDuplicateObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub card_statement: Option<PostAccountsRequestSupportUrl>,
    pub cash_receipt: Option<PostAccountsRequestSupportUrl>,
    pub check_image: Option<PostAccountsRequestSupportUrl>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub original_transaction: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestEvidence {
    pub canceled: Option<PostIssuingDisputesRequestCanceled>,
    pub duplicate: Option<PostIssuingDisputesRequestDuplicate>,
    pub fraudulent: Option<PostIssuingDisputesRequestFraudulent>,
    pub merchandise_not_as_described: Option<PostIssuingDisputesRequestMerchandiseNotAsDescribed>,
    pub no_valid_authorization: Option<PostIssuingDisputesRequestNoValidAuthorization>,
    pub not_received: Option<PostIssuingDisputesRequestNotReceived>,
    pub other: Option<PostIssuingDisputesRequestOther>,
    pub reason: Option<String>,
    pub service_not_as_described: Option<PostIssuingDisputesRequestServiceNotAsDescribed>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestFraudulent {
    Fraudulent(PostIssuingDisputesRequestFraudulentObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestFraudulentObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestMerchandiseNotAsDescribed {
    MerchandiseNotAsDescribed(PostIssuingDisputesRequestMerchandiseNotAsDescribedObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestMerchandiseNotAsDescribedObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub received_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub return_description: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub return_status: Option<String>,
    pub returned_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestNoValidAuthorization {
    NoValidAuthorization(PostIssuingDisputesRequestNoValidAuthorizationObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestNoValidAuthorizationObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestNotReceived {
    NotReceived(PostIssuingDisputesRequestNotReceivedObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestNotReceivedObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub expected_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_description: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestOther {
    Other(PostIssuingDisputesRequestOtherObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestOtherObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_description: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub product_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingDisputesRequestServiceNotAsDescribed {
    ServiceNotAsDescribed(PostIssuingDisputesRequestServiceNotAsDescribedObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestServiceNotAsDescribedObject {
    pub additional_documentation: Option<PostAccountsRequestSupportUrl>,
    pub canceled_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub cancellation_reason: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub explanation: Option<PostIssuingDisputesRequestCanceledObjectCancellationReason>,
    pub received_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingDisputesRequestTreasury {
    pub received_debit: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingPersonalizationDesignsPersonalizationDesignRequest {
    pub card_logo: Option<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo>,
    pub carrier_text:
        Option<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText>,
    pub expand: Option<Vec<String>>,
    pub lookup_key: Option<PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: Option<PostIssuingPersonalizationDesignsPersonalizationDesignRequestName>,
    pub physical_bundle: Option<String>,
    pub preferences: Option<PostIssuingPersonalizationDesignsRequestPreferences>,
    pub transfer_lookup_key: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsPersonalizationDesignRequestCardLogo {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText {
    CarrierTextParam(
        PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject {
    pub footer_body: Option<PostIssuingPersonalizationDesignsRequestFooterBody>,
    pub footer_title: Option<PostIssuingPersonalizationDesignsRequestFooterTitle>,
    pub header_body: Option<PostIssuingPersonalizationDesignsRequestFooterBody>,
    pub header_title: Option<PostIssuingPersonalizationDesignsRequestFooterTitle>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsPersonalizationDesignRequestLookupKey {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsPersonalizationDesignRequestName {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingPersonalizationDesignsRequest {
    pub card_logo: Option<String>,
    pub carrier_text: Option<PostIssuingPersonalizationDesignsRequestCarrierText>,
    pub expand: Option<Vec<String>>,
    pub lookup_key: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: Option<String>,
    pub physical_bundle: String,
    pub preferences: Option<PostIssuingPersonalizationDesignsRequestPreferences>,
    pub transfer_lookup_key: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingPersonalizationDesignsRequestCarrierText {
    pub footer_body: Option<PostIssuingPersonalizationDesignsRequestFooterBody>,
    pub footer_title: Option<PostIssuingPersonalizationDesignsRequestFooterTitle>,
    pub header_body: Option<PostIssuingPersonalizationDesignsRequestFooterBody>,
    pub header_title: Option<PostIssuingPersonalizationDesignsRequestFooterTitle>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsRequestFooterBody {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostIssuingPersonalizationDesignsRequestFooterTitle {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingPersonalizationDesignsRequestPreferences {
    pub is_default: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingSettlementsSettlementRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostIssuingTokensTokenRequest {
    pub expand: Option<Vec<String>>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentApplyCustomerBalanceRequest {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentCancelRequest {
    pub cancellation_reason: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentCaptureRequest {
    pub amount_details: Option<PostPaymentIntentsRequestAmountDetails>,
    pub amount_to_capture: Option<i32>,
    pub application_fee_amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub final_capture: Option<bool>,
    pub hooks: Option<PostPaymentIntentsRequestHooks>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub payment_details: Option<PostPaymentIntentsIntentCaptureRequestPaymentDetails>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostPaymentIntentsIntentCaptureRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentCaptureRequestPaymentDetails {
    PaymentDetailsCaptureParams(PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject {
    pub customer_reference: Option<PostAccountsRequestPaymentsPricing>,
    pub order_reference: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentCaptureRequestTransferData {
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentConfirmRequest {
    pub amount_details: Option<PostPaymentIntentsIntentRequestAmountDetails>,
    pub capture_method: Option<String>,
    pub client_secret: Option<String>,
    pub confirmation_token: Option<String>,
    pub error_on_requires_action: Option<bool>,
    pub excluded_payment_method_types:
        Option<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes>,
    pub expand: Option<Vec<String>>,
    pub hooks: Option<PostPaymentIntentsRequestHooks>,
    pub mandate: Option<String>,
    pub mandate_data: Option<PostPaymentIntentsIntentConfirmRequestMandateData>,
    pub off_session: Option<PostPaymentIntentsIntentConfirmRequestOffSession>,
    pub payment_details: Option<PostPaymentIntentsIntentRequestPaymentDetails>,
    pub payment_method: Option<String>,
    pub payment_method_data: Option<PostPaymentIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostPaymentIntentsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub radar_options: Option<DefaultPostPaymentIntentsRequestRadarOptions>,
    pub receipt_email: Option<PostPaymentIntentsIntentRequestReceiptEmail>,
    pub return_url: Option<String>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<PostPaymentIntentsIntentRequestShipping>,
    pub use_stripe_sdk: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentConfirmRequestMandateData {
    SecretKeyParam(PostPaymentIntentsRequestMandateDataObject),
    Variant2(String),
    ClientKeyParam(PostPaymentIntentsIntentConfirmRequestMandateDataObject),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentConfirmRequestMandateDataObject {
    pub customer_acceptance:
        PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance {
    pub online: PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline {
    pub ip_address: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentConfirmRequestOffSession {
    Variant1(bool),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentIncrementAuthorizationRequest {
    pub amount: i32,
    pub amount_details: Option<PostPaymentIntentsRequestAmountDetails>,
    pub application_fee_amount: Option<i32>,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub hooks: Option<PostPaymentIntentsRequestHooks>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub payment_details:
        Option<PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails>,
    pub statement_descriptor: Option<String>,
    pub transfer_data: Option<PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails {
    pub customer_reference: Option<PostAccountsRequestPaymentsPricing>,
    pub order_reference: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData {
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequest {
    pub amount: Option<i32>,
    pub amount_details: Option<PostPaymentIntentsIntentRequestAmountDetails>,
    pub application_fee_amount: Option<PostPaymentIntentsIntentRequestApplicationFeeAmount>,
    pub capture_method: Option<String>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub excluded_payment_method_types:
        Option<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes>,
    pub expand: Option<Vec<String>>,
    pub hooks: Option<PostPaymentIntentsRequestHooks>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub payment_details: Option<PostPaymentIntentsIntentRequestPaymentDetails>,
    pub payment_method: Option<String>,
    pub payment_method_configuration: Option<String>,
    pub payment_method_data: Option<PostPaymentIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostPaymentIntentsIntentRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub receipt_email: Option<PostPaymentIntentsIntentRequestReceiptEmail>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<PostPaymentIntentsIntentRequestShipping>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostPaymentIntentsIntentRequestTransferData>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestAmountDetails {
    AmountDetailsParam(PostPaymentIntentsIntentRequestAmountDetailsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequestAmountDetailsObject {
    pub discount_amount: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub line_items: Option<PostPaymentIntentsRequestLineItems>,
    pub shipping: Option<PostPaymentIntentsRequestShipping>,
    pub tax: Option<PostPaymentIntentsRequestTax>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestApplicationFeeAmount {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestPaymentDetails {
    PaymentDetails(PostPaymentIntentsIntentRequestPaymentDetailsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequestPaymentDetailsObject {
    pub customer_reference: Option<PostAccountsRequestPaymentsPricing>,
    pub order_reference: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequestPaymentMethodOptions {
    pub acss_debit: Option<DefaultPostPaymentIntentsRequestAcssDebit>,
    pub affirm: Option<PostPaymentIntentsRequestAffirm>,
    pub afterpay_clearpay: Option<PostPaymentIntentsRequestAfterpayClearpay>,
    pub alipay: Option<PostPaymentIntentsRequestAlipay>,
    pub alma: Option<PostPaymentIntentsRequestAlma>,
    pub amazon_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub au_becs_debit: Option<DefaultPostPaymentIntentsRequestAuBecsDebit>,
    pub bacs_debit: Option<DefaultPostPaymentIntentsRequestBacsDebit>,
    pub bancontact: Option<PostPaymentIntentsRequestBancontact>,
    pub billie: Option<PostPaymentIntentsRequestAlma>,
    pub blik: Option<PostPaymentIntentsRequestBlik>,
    pub boleto: Option<DefaultPostPaymentIntentsRequestBoleto>,
    pub card: Option<PostPaymentIntentsRequestCard>,
    pub card_present: Option<PostPaymentIntentsRequestCardPresent>,
    pub cashapp: Option<PostPaymentIntentsRequestCashapp>,
    pub crypto: Option<PostPaymentIntentsRequestCrypto>,
    pub customer_balance: Option<PostPaymentIntentsRequestCustomerBalance>,
    pub eps: Option<DefaultPostPaymentIntentsRequestEps>,
    pub fpx: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub giropay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub grabpay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub ideal: Option<PostPaymentIntentsRequestAlipay>,
    pub interac_present: Option<PostPaymentIntentsRequestInteracPresent>,
    pub kakao_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub klarna: Option<DefaultPostPaymentIntentsRequestKlarna>,
    pub konbini: Option<PostPaymentIntentsRequestKonbini>,
    pub kr_card: Option<PostPaymentIntentsRequestAmazonPay>,
    pub link: Option<PostPaymentIntentsRequestLink>,
    pub mb_way: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub mobilepay: Option<PostPaymentIntentsRequestMobilepay>,
    pub multibanco: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub naver_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub nz_bank_account: Option<DefaultPostPaymentIntentsRequestAuBecsDebit>,
    pub oxxo: Option<PostPaymentIntentsRequestOxxo>,
    pub p24: Option<DefaultPostPaymentIntentsRequestP24>,
    pub pay_by_bank: Option<PostPaymentIntentsRequestPayByBank>,
    pub payco: Option<PostPaymentIntentsRequestAlma>,
    pub paynow: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub paypal: Option<PostPaymentIntentsRequestPaypal>,
    pub pix: Option<PostPaymentIntentsRequestPix>,
    pub promptpay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub revolut_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub samsung_pay: Option<PostPaymentIntentsRequestAlma>,
    pub satispay: Option<PostPaymentIntentsRequestAlma>,
    pub sepa_debit: Option<DefaultPostPaymentIntentsRequestBacsDebit>,
    pub sofort: Option<DefaultPostPaymentIntentsRequestSofort>,
    pub swish: Option<PostPaymentIntentsRequestSwish>,
    pub twint: Option<PostPaymentIntentsRequestCrypto>,
    pub us_bank_account: Option<DefaultPostPaymentIntentsRequestUsBankAccount>,
    pub wechat_pay: Option<PostPaymentIntentsRequestWechatPay>,
    pub zip: Option<DefaultPostPaymentIntentsRequestFpx>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestReceiptEmail {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsIntentRequestShipping {
    OptionalFieldsShipping(PostPaymentIntentsIntentRequestShippingObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequestShippingObject {
    pub address: PostChargesRequestAddress,
    pub carrier: Option<String>,
    pub name: String,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentRequestTransferData {
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsIntentVerifyMicrodepositsRequest {
    pub amounts: Option<Vec<i32>>,
    pub client_secret: Option<String>,
    pub descriptor_code: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequest {
    pub amount: i32,
    pub amount_details: Option<PostPaymentIntentsRequestAmountDetails>,
    pub application_fee_amount: Option<i32>,
    pub automatic_payment_methods: Option<PostPaymentIntentsRequestAutomaticPaymentMethods>,
    pub capture_method: Option<String>,
    pub confirm: Option<bool>,
    pub confirmation_method: Option<String>,
    pub confirmation_token: Option<String>,
    pub currency: String,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub error_on_requires_action: Option<bool>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub expand: Option<Vec<String>>,
    pub hooks: Option<PostPaymentIntentsRequestHooks>,
    pub mandate: Option<String>,
    pub mandate_data: Option<PostPaymentIntentsRequestMandateData>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub off_session: Option<PostPaymentIntentsRequestOffSession>,
    pub on_behalf_of: Option<String>,
    pub payment_details: Option<PostPaymentIntentsRequestPaymentDetails>,
    pub payment_method: Option<String>,
    pub payment_method_configuration: Option<String>,
    pub payment_method_data: Option<PostPaymentIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostPaymentIntentsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub radar_options: Option<DefaultPostPaymentIntentsRequestRadarOptions>,
    pub receipt_email: Option<String>,
    pub return_url: Option<String>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<DefaultPostPaymentIntentsRequestShipping>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_data: Option<PostPaymentIntentsRequestTransferData>,
    pub transfer_group: Option<String>,
    pub use_stripe_sdk: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAcssDebit {
    pub account_number: String,
    pub institution_number: String,
    pub transit_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAddress {
    BillingDetailsAddress(PostPaymentIntentsRequestAddressObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAddressObject {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAffirm {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestAffirmObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAffirmObject {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAfterpayClearpay {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestAfterpayClearpayObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAfterpayClearpayObject {
    pub capture_method: Option<String>,
    pub reference: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAlipay {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestAlipayObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAlipayObject {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAlma {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestAlmaObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAlmaObject {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestAmazonPay {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestAmazonPayObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAmazonPayObject {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAmountDetails {
    pub discount_amount: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub line_items: Option<PostPaymentIntentsRequestLineItems>,
    pub shipping: Option<PostPaymentIntentsRequestShipping>,
    pub tax: Option<PostPaymentIntentsRequestTax>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAuBecsDebit {
    pub account_number: String,
    pub bsb_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestAutomaticPaymentMethods {
    pub allow_redirects: Option<String>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestBacsDebit {
    pub account_number: Option<String>,
    pub sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestBancontact {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestBancontactObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestBancontactObject {
    pub preferred_language: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestBillingDetails {
    pub address: Option<PostPaymentIntentsRequestAddress>,
    pub email: Option<PostAccountsRequestSupportUrl>,
    pub name: Option<PostAccountsRequestPaymentsPricing>,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
    pub tax_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestBlik {
    PaymentIntentPaymentMethodOptionsParam(PostPaymentIntentsRequestBlikObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestBlikObject {
    pub code: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestBoleto {
    pub tax_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCard {
    PaymentIntentParam(PostPaymentIntentsRequestCardObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardObject {
    pub capture_method: Option<String>,
    pub cvc_token: Option<String>,
    pub installments: Option<PostInvoicesRequestCardObjectInstallments>,
    pub mandate_options: Option<PostPaymentIntentsRequestCardObjectMandateOptions>,
    pub network: Option<String>,
    pub request_extended_authorization: Option<String>,
    pub request_incremental_authorization: Option<String>,
    pub request_multicapture: Option<String>,
    pub request_overcapture: Option<String>,
    pub request_three_d_secure: Option<String>,
    pub require_cvc_recollection: Option<bool>,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor_suffix_kana:
        Option<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>,
    pub statement_descriptor_suffix_kanji:
        Option<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji>,
    pub three_d_secure: Option<PostPaymentIntentsRequestCardObjectThreeDSecure>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardObjectCartesBancaires {
    pub cb_avalgo: String,
    pub cb_exemption: Option<String>,
    pub cb_score: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardObjectMandateOptions {
    pub amount: i32,
    pub amount_type: String,
    pub description: Option<String>,
    pub end_date: Option<i32>,
    pub interval: String,
    pub interval_count: Option<i32>,
    pub reference: String,
    pub start_date: i32,
    pub supported_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardObjectNetworkOptions {
    pub cartes_bancaires: Option<PostPaymentIntentsRequestCardObjectCartesBancaires>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardObjectThreeDSecure {
    pub ares_trans_status: Option<String>,
    pub cryptogram: String,
    pub electronic_commerce_indicator: Option<String>,
    pub exemption_indicator: Option<String>,
    pub network_options: Option<PostPaymentIntentsRequestCardObjectNetworkOptions>,
    pub requestor_challenge_indicator: Option<String>,
    pub transaction_id: String,
    pub version: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCardPresent {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestCardPresentObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardPresentObject {
    pub capture_method: Option<String>,
    pub request_extended_authorization: Option<bool>,
    pub request_incremental_authorization_support: Option<bool>,
    pub routing: Option<PostPaymentIntentsRequestCardPresentObjectRouting>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCardPresentObjectRouting {
    pub requested_priority: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCashapp {
    PaymentIntentPaymentMethodOptionsParam(PostPaymentIntentsRequestCashappObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCashappObject {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCrypto {
    PaymentMethodOptionsParam(PostCheckoutSessionsRequestAlipay),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestCustomerBalance {
    PaymentIntentPaymentMethodOptionsParam(PostPaymentIntentsRequestCustomerBalanceObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestCustomerBalanceObject {
    pub bank_transfer: Option<PostCheckoutSessionsRequestBankTransfer>,
    pub funding_type: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestDob {
    pub day: i32,
    pub month: i32,
    pub year: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestEps {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestFpx {
    pub bank: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestHooks {
    pub inputs: Option<PostPaymentIntentsRequestInputs>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestIdeal {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestInputs {
    pub tax: Option<DefaultPostPaymentIntentsRequestTax>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestInteracPresent {
    PaymentMethodOptionsParam(serde_json::Value),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestKlarna {
    pub dob: Option<PostPaymentIntentsRequestDob>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestKonbini {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestKonbiniObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestKonbiniObject {
    pub confirmation_number: Option<PostPaymentIntentsRequestKonbiniObjectConfirmationNumber>,
    pub expires_after_days: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub expires_at: Option<PostIssuingDisputesRequestCanceledObjectCanceledAt>,
    pub product_description:
        Option<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestKonbiniObjectConfirmationNumber {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestLineItems {
    Variant1(Vec<PostPaymentIntentsRequestLineItemsObject>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObject {
    pub discount_amount: Option<i32>,
    pub payment_method_options:
        Option<PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions>,
    pub product_code: Option<String>,
    pub product_name: String,
    pub quantity: i32,
    pub tax: Option<PostPaymentIntentsRequestLineItemsObjectTax>,
    pub unit_cost: i32,
    pub unit_of_measure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectCard {
    pub commodity_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectCardPresent {
    pub commodity_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectKlarna {
    pub image_url: Option<String>,
    pub product_url: Option<String>,
    pub reference: Option<String>,
    pub subscription_reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions {
    pub card: Option<PostPaymentIntentsRequestLineItemsObjectCard>,
    pub card_present: Option<PostPaymentIntentsRequestLineItemsObjectCardPresent>,
    pub klarna: Option<PostPaymentIntentsRequestLineItemsObjectKlarna>,
    pub paypal: Option<PostPaymentIntentsRequestLineItemsObjectPaypal>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectPaypal {
    pub category: Option<String>,
    pub description: Option<String>,
    pub sold_by: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLineItemsObjectTax {
    pub total_tax_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestLink {
    PaymentIntentPaymentMethodOptionsParam(PostPaymentIntentsRequestLinkObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestLinkObject {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestMandateData {
    SecretKeyParam(PostPaymentIntentsRequestMandateDataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestMandateDataObject {
    pub customer_acceptance: PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance {
    pub accepted_at: Option<i32>,
    pub offline: Option<serde_json::Value>,
    pub online: Option<PostPaymentIntentsRequestMandateDataObjectOnline>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestMandateDataObjectOnline {
    pub ip_address: String,
    pub user_agent: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestMobilepay {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestMobilepayObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestMobilepayObject {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestNaverPay {
    pub funding: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestNzBankAccount {
    pub account_holder_name: Option<String>,
    pub account_number: String,
    pub bank_code: String,
    pub branch_code: String,
    pub reference: Option<String>,
    pub suffix: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestOffSession {
    Variant1(bool),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestOxxo {
    PaymentMethodOptionsParam(PostCheckoutSessionsRequestKonbini),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestP24 {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestPayByBank {
    PaymentIntentPaymentMethodOptionsParam(serde_json::Value),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestPaymentDetails {
    pub customer_reference: Option<PostAccountsRequestPaymentsPricing>,
    pub order_reference: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestPaymentMethodData {
    pub acss_debit: Option<PostPaymentIntentsRequestAcssDebit>,
    pub affirm: Option<serde_json::Value>,
    pub afterpay_clearpay: Option<serde_json::Value>,
    pub alipay: Option<serde_json::Value>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<serde_json::Value>,
    pub amazon_pay: Option<serde_json::Value>,
    pub au_becs_debit: Option<PostPaymentIntentsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentIntentsRequestBacsDebit>,
    pub bancontact: Option<serde_json::Value>,
    pub billie: Option<serde_json::Value>,
    pub billing_details: Option<PostPaymentIntentsRequestBillingDetails>,
    pub blik: Option<serde_json::Value>,
    pub boleto: Option<PostPaymentIntentsRequestBoleto>,
    pub cashapp: Option<serde_json::Value>,
    pub crypto: Option<serde_json::Value>,
    pub customer_balance: Option<serde_json::Value>,
    pub eps: Option<PostPaymentIntentsRequestEps>,
    pub fpx: Option<PostPaymentIntentsRequestFpx>,
    pub giropay: Option<serde_json::Value>,
    pub grabpay: Option<serde_json::Value>,
    pub ideal: Option<PostPaymentIntentsRequestIdeal>,
    pub interac_present: Option<serde_json::Value>,
    pub kakao_pay: Option<serde_json::Value>,
    pub klarna: Option<PostPaymentIntentsRequestKlarna>,
    pub konbini: Option<serde_json::Value>,
    pub kr_card: Option<serde_json::Value>,
    pub link: Option<serde_json::Value>,
    pub mb_way: Option<serde_json::Value>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub mobilepay: Option<serde_json::Value>,
    pub multibanco: Option<serde_json::Value>,
    pub naver_pay: Option<PostPaymentIntentsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentIntentsRequestNzBankAccount>,
    pub oxxo: Option<serde_json::Value>,
    pub p24: Option<PostPaymentIntentsRequestP24>,
    pub pay_by_bank: Option<serde_json::Value>,
    pub payco: Option<serde_json::Value>,
    pub paynow: Option<serde_json::Value>,
    pub paypal: Option<serde_json::Value>,
    pub pix: Option<serde_json::Value>,
    pub promptpay: Option<serde_json::Value>,
    pub radar_options: Option<PostPaymentIntentsRequestRadarOptions>,
    pub revolut_pay: Option<serde_json::Value>,
    pub samsung_pay: Option<serde_json::Value>,
    pub satispay: Option<serde_json::Value>,
    pub sepa_debit: Option<PostPaymentIntentsRequestSepaDebit>,
    pub sofort: Option<PostPaymentIntentsRequestSofort>,
    pub swish: Option<serde_json::Value>,
    pub twint: Option<serde_json::Value>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PostPaymentIntentsRequestUsBankAccount>,
    pub wechat_pay: Option<serde_json::Value>,
    pub zip: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestPaymentMethodOptions {
    pub acss_debit: Option<DefaultPostPaymentIntentsRequestAcssDebit>,
    pub affirm: Option<PostPaymentIntentsRequestAffirm>,
    pub afterpay_clearpay: Option<PostPaymentIntentsRequestAfterpayClearpay>,
    pub alipay: Option<PostPaymentIntentsRequestAlipay>,
    pub alma: Option<PostPaymentIntentsRequestAlma>,
    pub amazon_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub au_becs_debit: Option<DefaultPostPaymentIntentsRequestAuBecsDebit>,
    pub bacs_debit: Option<DefaultPostPaymentIntentsRequestBacsDebit>,
    pub bancontact: Option<PostPaymentIntentsRequestBancontact>,
    pub billie: Option<PostPaymentIntentsRequestAlma>,
    pub blik: Option<PostPaymentIntentsRequestBlik>,
    pub boleto: Option<DefaultPostPaymentIntentsRequestBoleto>,
    pub card: Option<PostPaymentIntentsRequestCard>,
    pub card_present: Option<PostPaymentIntentsRequestCardPresent>,
    pub cashapp: Option<PostPaymentIntentsRequestCashapp>,
    pub crypto: Option<PostPaymentIntentsRequestCrypto>,
    pub customer_balance: Option<PostPaymentIntentsRequestCustomerBalance>,
    pub eps: Option<DefaultPostPaymentIntentsRequestEps>,
    pub fpx: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub giropay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub grabpay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub ideal: Option<PostPaymentIntentsRequestAlipay>,
    pub interac_present: Option<PostPaymentIntentsRequestInteracPresent>,
    pub kakao_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub klarna: Option<DefaultPostPaymentIntentsRequestKlarna>,
    pub konbini: Option<PostPaymentIntentsRequestKonbini>,
    pub kr_card: Option<PostPaymentIntentsRequestAmazonPay>,
    pub link: Option<PostPaymentIntentsRequestLink>,
    pub mb_way: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub mobilepay: Option<PostPaymentIntentsRequestMobilepay>,
    pub multibanco: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub naver_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub nz_bank_account: Option<DefaultPostPaymentIntentsRequestAuBecsDebit>,
    pub oxxo: Option<PostPaymentIntentsRequestOxxo>,
    pub p24: Option<DefaultPostPaymentIntentsRequestP24>,
    pub pay_by_bank: Option<PostPaymentIntentsRequestPayByBank>,
    pub payco: Option<PostPaymentIntentsRequestAlma>,
    pub paynow: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub paypal: Option<PostPaymentIntentsRequestPaypal>,
    pub pix: Option<PostPaymentIntentsRequestPix>,
    pub promptpay: Option<DefaultPostPaymentIntentsRequestFpx>,
    pub revolut_pay: Option<PostPaymentIntentsRequestAmazonPay>,
    pub samsung_pay: Option<PostPaymentIntentsRequestAlma>,
    pub satispay: Option<PostPaymentIntentsRequestAlma>,
    pub sepa_debit: Option<DefaultPostPaymentIntentsRequestBacsDebit>,
    pub sofort: Option<DefaultPostPaymentIntentsRequestSofort>,
    pub swish: Option<PostPaymentIntentsRequestSwish>,
    pub twint: Option<PostPaymentIntentsRequestCrypto>,
    pub us_bank_account: Option<DefaultPostPaymentIntentsRequestUsBankAccount>,
    pub wechat_pay: Option<PostPaymentIntentsRequestWechatPay>,
    pub zip: Option<DefaultPostPaymentIntentsRequestFpx>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestPaypal {
    PaymentMethodOptionsParam(PostCheckoutSessionsRequestPaypal),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestPix {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestPixObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestPixObject {
    pub amount_includes_iof: Option<String>,
    pub expires_after_seconds: Option<i32>,
    pub expires_at: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestRadarOptions {
    pub session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestSepaDebit {
    pub iban: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestShipping {
    AmountDetailsShippingParam(PostPaymentIntentsRequestShippingObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestShippingObject {
    pub amount: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub from_postal_code: Option<PostAccountsRequestStatementDescriptorPrefixKana>,
    pub to_postal_code: Option<PostAccountsRequestStatementDescriptorPrefixKana>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestSofort {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestSwish {
    PaymentIntentPaymentMethodOptionsParam(PostPaymentIntentsRequestSwishObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestSwishObject {
    pub reference: Option<PostAccountsRequestPaymentsPricing>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestTax {
    AmountDetailsTaxParam(PostPaymentIntentsRequestTaxObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestTaxObject {
    pub total_tax_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestTransferData {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_number: Option<String>,
    pub account_type: Option<String>,
    pub financial_connections_account: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentIntentsRequestWechatPay {
    PaymentMethodOptionsParam(PostPaymentIntentsRequestWechatPayObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentIntentsRequestWechatPayObject {
    pub app_id: Option<String>,
    pub client: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequest {
    pub active: Option<bool>,
    pub after_completion: Option<PostPaymentLinksRequestAfterCompletion>,
    pub allow_promotion_codes: Option<bool>,
    pub automatic_tax: Option<PostPaymentLinksRequestAutomaticTax>,
    pub billing_address_collection: Option<String>,
    pub custom_fields: Option<PostPaymentLinksPaymentLinkRequestCustomFields>,
    pub custom_text: Option<PostCheckoutSessionsRequestCustomText>,
    pub customer_creation: Option<String>,
    pub expand: Option<Vec<String>>,
    pub inactive_message: Option<PostPaymentLinksPaymentLinkRequestInactiveMessage>,
    pub invoice_creation: Option<PostPaymentLinksPaymentLinkRequestInvoiceCreation>,
    pub line_items: Option<Vec<PostPaymentLinksPaymentLinkRequestLineItemsItem>>,
    pub metadata: Option<PostPaymentLinksRequestMetadata>,
    pub name_collection: Option<PostPaymentLinksPaymentLinkRequestNameCollection>,
    pub payment_intent_data: Option<PostPaymentLinksPaymentLinkRequestPaymentIntentData>,
    pub payment_method_collection: Option<String>,
    pub payment_method_types: Option<PostPaymentLinksPaymentLinkRequestPaymentMethodTypes>,
    pub phone_number_collection: Option<PostPaymentLinksRequestPhoneNumberCollection>,
    pub restrictions: Option<PostPaymentLinksPaymentLinkRequestRestrictions>,
    pub shipping_address_collection:
        Option<PostPaymentLinksPaymentLinkRequestShippingAddressCollection>,
    pub submit_type: Option<String>,
    pub subscription_data: Option<PostPaymentLinksPaymentLinkRequestSubscriptionData>,
    pub tax_id_collection: Option<PostCheckoutSessionsRequestTaxIdCollection>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestCustomFields {
    Variant1(Vec<PostCheckoutSessionsRequestCustomFieldsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestInactiveMessage {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestInvoiceCreation {
    pub enabled: bool,
    pub invoice_data: Option<PostPaymentLinksRequestInvoiceData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestLineItemsItem {
    pub adjustable_quantity: Option<PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity>,
    pub id: String,
    pub quantity: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestNameCollection {
    NameCollectionParams(PostPaymentLinksPaymentLinkRequestNameCollectionObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestNameCollectionObject {
    pub business: Option<PostCheckoutSessionsRequestBusiness>,
    pub individual: Option<PostCheckoutSessionsRequestIndividual>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestPaymentIntentData {
    pub description: Option<PostPaymentLinksPaymentLinkRequestDescription>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub statement_descriptor:
        Option<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>,
    pub statement_descriptor_suffix:
        Option<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>,
    pub transfer_group: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestPaymentMethodTypes {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestRestrictions {
    RestrictionsParams(PostPaymentLinksPaymentLinkRequestRestrictionsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestRestrictionsObject {
    pub completed_sessions: PostPaymentLinksRequestCompletedSessions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestShippingAddressCollection {
    ShippingAddressCollectionParams(
        PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject {
    pub allowed_countries: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksPaymentLinkRequestSubscriptionData {
    pub invoice_settings: Option<PostPaymentLinksRequestInvoiceSettings>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub trial_period_days: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub trial_settings: Option<PostPaymentLinksPaymentLinkRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentLinksPaymentLinkRequestTrialSettings {
    TrialSettingsConfig(PostCheckoutSessionsRequestTrialSettings),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequest {
    pub after_completion: Option<PostPaymentLinksRequestAfterCompletion>,
    pub allow_promotion_codes: Option<bool>,
    pub application_fee_amount: Option<i32>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<PostPaymentLinksRequestAutomaticTax>,
    pub billing_address_collection: Option<String>,
    pub consent_collection: Option<PostPaymentLinksRequestConsentCollection>,
    pub currency: Option<String>,
    pub custom_fields: Option<Vec<PostCheckoutSessionsRequestCustomFieldsItem>>,
    pub custom_text: Option<PostCheckoutSessionsRequestCustomText>,
    pub customer_creation: Option<String>,
    pub expand: Option<Vec<String>>,
    pub inactive_message: Option<String>,
    pub invoice_creation: Option<PostPaymentLinksRequestInvoiceCreation>,
    pub line_items: Vec<PostPaymentLinksRequestLineItemsItem>,
    pub metadata: Option<PostPaymentLinksRequestMetadata>,
    pub name_collection: Option<PostPaymentLinksRequestNameCollection>,
    pub on_behalf_of: Option<String>,
    pub optional_items: Option<Vec<PostCheckoutSessionsRequestOptionalItemsItem>>,
    pub payment_intent_data: Option<PostPaymentLinksRequestPaymentIntentData>,
    pub payment_method_collection: Option<String>,
    pub payment_method_types: Option<Vec<String>>,
    pub phone_number_collection: Option<PostPaymentLinksRequestPhoneNumberCollection>,
    pub restrictions: Option<PostPaymentLinksRequestRestrictions>,
    pub shipping_address_collection: Option<PostPaymentLinksRequestShippingAddressCollection>,
    pub shipping_options: Option<Vec<PostPaymentLinksRequestShippingOptionsItem>>,
    pub submit_type: Option<String>,
    pub subscription_data: Option<PostPaymentLinksRequestSubscriptionData>,
    pub tax_id_collection: Option<PostCheckoutSessionsRequestTaxIdCollection>,
    pub transfer_data: Option<PostPaymentLinksRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestAfterCompletion {
    pub hosted_confirmation: Option<PostPaymentLinksRequestHostedConfirmation>,
    pub redirect: Option<PostPaymentLinksRequestRedirect>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestCompletedSessions {
    pub limit: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestConsentCollection {
    pub payment_method_reuse_agreement:
        Option<PostCheckoutSessionsRequestPaymentMethodReuseAgreement>,
    pub promotions: Option<String>,
    pub terms_of_service: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestHostedConfirmation {
    pub custom_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestInvoiceCreation {
    pub enabled: bool,
    pub invoice_data: Option<PostPaymentLinksRequestInvoiceData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestInvoiceData {
    pub account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub custom_fields: Option<PostCheckoutSessionsRequestCustomFields>,
    pub description: Option<String>,
    pub footer: Option<String>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub rendering_options: Option<PostCheckoutSessionsRequestRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestInvoiceSettings {
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestLineItemsItem {
    pub adjustable_quantity: Option<PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity>,
    pub price: Option<String>,
    pub price_data: Option<PostPaymentLinksRequestLineItemsItemPriceData>,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestLineItemsItemPriceData {
    pub currency: String,
    pub product: Option<String>,
    pub product_data: Option<PostCheckoutSessionsRequestLineItemsItemProductData>,
    pub recurring: Option<PostCheckoutSessionsRequestLineItemsItemRecurring>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestMetadata {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestNameCollection {
    pub business: Option<PostCheckoutSessionsRequestBusiness>,
    pub individual: Option<PostCheckoutSessionsRequestIndividual>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestPaymentIntentData {
    pub capture_method: Option<String>,
    pub description: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestPhoneNumberCollection {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestRedirect {
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestRestrictions {
    pub completed_sessions: PostPaymentLinksRequestCompletedSessions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestShippingAddressCollection {
    pub allowed_countries: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestShippingOptionsItem {
    pub shipping_rate: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestSubscriptionData {
    pub description: Option<String>,
    pub invoice_settings: Option<PostPaymentLinksRequestInvoiceSettings>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub trial_period_days: Option<i32>,
    pub trial_settings: Option<PostCheckoutSessionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentLinksRequestTransferData {
    pub amount: Option<i32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsConfigurationRequest {
    pub acss_debit: Option<PostPaymentMethodConfigurationsRequestAcssDebit>,
    pub active: Option<bool>,
    pub affirm: Option<PostPaymentMethodConfigurationsRequestAffirm>,
    pub afterpay_clearpay: Option<PostPaymentMethodConfigurationsRequestAfterpayClearpay>,
    pub alipay: Option<PostPaymentMethodConfigurationsRequestAlipay>,
    pub alma: Option<PostPaymentMethodConfigurationsRequestAlma>,
    pub amazon_pay: Option<PostPaymentMethodConfigurationsRequestAmazonPay>,
    pub apple_pay: Option<PostPaymentMethodConfigurationsRequestApplePay>,
    pub apple_pay_later: Option<PostPaymentMethodConfigurationsRequestApplePayLater>,
    pub au_becs_debit: Option<PostPaymentMethodConfigurationsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentMethodConfigurationsRequestBacsDebit>,
    pub bancontact: Option<PostPaymentMethodConfigurationsRequestBancontact>,
    pub billie: Option<PostPaymentMethodConfigurationsRequestBillie>,
    pub blik: Option<PostPaymentMethodConfigurationsRequestBlik>,
    pub boleto: Option<PostPaymentMethodConfigurationsRequestBoleto>,
    pub card: Option<PostPaymentMethodConfigurationsRequestCard>,
    pub cartes_bancaires: Option<PostPaymentMethodConfigurationsRequestCartesBancaires>,
    pub cashapp: Option<PostPaymentMethodConfigurationsRequestCashapp>,
    pub crypto: Option<PostPaymentMethodConfigurationsRequestCrypto>,
    pub customer_balance: Option<PostPaymentMethodConfigurationsRequestCustomerBalance>,
    pub eps: Option<PostPaymentMethodConfigurationsRequestEps>,
    pub expand: Option<Vec<String>>,
    pub fpx: Option<PostPaymentMethodConfigurationsRequestFpx>,
    pub fr_meal_voucher_conecs: Option<PostPaymentMethodConfigurationsRequestFrMealVoucherConecs>,
    pub giropay: Option<PostPaymentMethodConfigurationsRequestGiropay>,
    pub google_pay: Option<PostPaymentMethodConfigurationsRequestGooglePay>,
    pub grabpay: Option<PostPaymentMethodConfigurationsRequestGrabpay>,
    pub ideal: Option<PostPaymentMethodConfigurationsRequestIdeal>,
    pub jcb: Option<PostPaymentMethodConfigurationsRequestJcb>,
    pub kakao_pay: Option<PostPaymentMethodConfigurationsRequestKakaoPay>,
    pub klarna: Option<PostPaymentMethodConfigurationsRequestKlarna>,
    pub konbini: Option<PostPaymentMethodConfigurationsRequestKonbini>,
    pub kr_card: Option<PostPaymentMethodConfigurationsRequestKrCard>,
    pub link: Option<PostPaymentMethodConfigurationsRequestLink>,
    pub mb_way: Option<PostPaymentMethodConfigurationsRequestMbWay>,
    pub mobilepay: Option<PostPaymentMethodConfigurationsRequestMobilepay>,
    pub multibanco: Option<PostPaymentMethodConfigurationsRequestMultibanco>,
    pub name: Option<String>,
    pub naver_pay: Option<PostPaymentMethodConfigurationsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentMethodConfigurationsRequestNzBankAccount>,
    pub oxxo: Option<PostPaymentMethodConfigurationsRequestOxxo>,
    pub p24: Option<PostPaymentMethodConfigurationsRequestP24>,
    pub pay_by_bank: Option<PostPaymentMethodConfigurationsRequestPayByBank>,
    pub payco: Option<PostPaymentMethodConfigurationsRequestPayco>,
    pub paynow: Option<PostPaymentMethodConfigurationsRequestPaynow>,
    pub paypal: Option<PostPaymentMethodConfigurationsRequestPaypal>,
    pub pix: Option<PostPaymentMethodConfigurationsRequestPix>,
    pub promptpay: Option<PostPaymentMethodConfigurationsRequestPromptpay>,
    pub revolut_pay: Option<PostPaymentMethodConfigurationsRequestRevolutPay>,
    pub samsung_pay: Option<PostPaymentMethodConfigurationsRequestSamsungPay>,
    pub satispay: Option<PostPaymentMethodConfigurationsRequestSatispay>,
    pub sepa_debit: Option<PostPaymentMethodConfigurationsRequestSepaDebit>,
    pub sofort: Option<PostPaymentMethodConfigurationsRequestSofort>,
    pub swish: Option<PostPaymentMethodConfigurationsRequestSwish>,
    pub twint: Option<PostPaymentMethodConfigurationsRequestTwint>,
    pub us_bank_account: Option<PostPaymentMethodConfigurationsRequestUsBankAccount>,
    pub wechat_pay: Option<PostPaymentMethodConfigurationsRequestWechatPay>,
    pub zip: Option<PostPaymentMethodConfigurationsRequestZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequest {
    pub acss_debit: Option<PostPaymentMethodConfigurationsRequestAcssDebit>,
    pub affirm: Option<PostPaymentMethodConfigurationsRequestAffirm>,
    pub afterpay_clearpay: Option<PostPaymentMethodConfigurationsRequestAfterpayClearpay>,
    pub alipay: Option<PostPaymentMethodConfigurationsRequestAlipay>,
    pub alma: Option<PostPaymentMethodConfigurationsRequestAlma>,
    pub amazon_pay: Option<PostPaymentMethodConfigurationsRequestAmazonPay>,
    pub apple_pay: Option<PostPaymentMethodConfigurationsRequestApplePay>,
    pub apple_pay_later: Option<PostPaymentMethodConfigurationsRequestApplePayLater>,
    pub au_becs_debit: Option<PostPaymentMethodConfigurationsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentMethodConfigurationsRequestBacsDebit>,
    pub bancontact: Option<PostPaymentMethodConfigurationsRequestBancontact>,
    pub billie: Option<PostPaymentMethodConfigurationsRequestBillie>,
    pub blik: Option<PostPaymentMethodConfigurationsRequestBlik>,
    pub boleto: Option<PostPaymentMethodConfigurationsRequestBoleto>,
    pub card: Option<PostPaymentMethodConfigurationsRequestCard>,
    pub cartes_bancaires: Option<PostPaymentMethodConfigurationsRequestCartesBancaires>,
    pub cashapp: Option<PostPaymentMethodConfigurationsRequestCashapp>,
    pub crypto: Option<PostPaymentMethodConfigurationsRequestCrypto>,
    pub customer_balance: Option<PostPaymentMethodConfigurationsRequestCustomerBalance>,
    pub eps: Option<PostPaymentMethodConfigurationsRequestEps>,
    pub expand: Option<Vec<String>>,
    pub fpx: Option<PostPaymentMethodConfigurationsRequestFpx>,
    pub fr_meal_voucher_conecs: Option<PostPaymentMethodConfigurationsRequestFrMealVoucherConecs>,
    pub giropay: Option<PostPaymentMethodConfigurationsRequestGiropay>,
    pub google_pay: Option<PostPaymentMethodConfigurationsRequestGooglePay>,
    pub grabpay: Option<PostPaymentMethodConfigurationsRequestGrabpay>,
    pub ideal: Option<PostPaymentMethodConfigurationsRequestIdeal>,
    pub jcb: Option<PostPaymentMethodConfigurationsRequestJcb>,
    pub kakao_pay: Option<PostPaymentMethodConfigurationsRequestKakaoPay>,
    pub klarna: Option<PostPaymentMethodConfigurationsRequestKlarna>,
    pub konbini: Option<PostPaymentMethodConfigurationsRequestKonbini>,
    pub kr_card: Option<PostPaymentMethodConfigurationsRequestKrCard>,
    pub link: Option<PostPaymentMethodConfigurationsRequestLink>,
    pub mb_way: Option<PostPaymentMethodConfigurationsRequestMbWay>,
    pub mobilepay: Option<PostPaymentMethodConfigurationsRequestMobilepay>,
    pub multibanco: Option<PostPaymentMethodConfigurationsRequestMultibanco>,
    pub name: Option<String>,
    pub naver_pay: Option<PostPaymentMethodConfigurationsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentMethodConfigurationsRequestNzBankAccount>,
    pub oxxo: Option<PostPaymentMethodConfigurationsRequestOxxo>,
    pub p24: Option<PostPaymentMethodConfigurationsRequestP24>,
    pub parent: Option<String>,
    pub pay_by_bank: Option<PostPaymentMethodConfigurationsRequestPayByBank>,
    pub payco: Option<PostPaymentMethodConfigurationsRequestPayco>,
    pub paynow: Option<PostPaymentMethodConfigurationsRequestPaynow>,
    pub paypal: Option<PostPaymentMethodConfigurationsRequestPaypal>,
    pub pix: Option<PostPaymentMethodConfigurationsRequestPix>,
    pub promptpay: Option<PostPaymentMethodConfigurationsRequestPromptpay>,
    pub revolut_pay: Option<PostPaymentMethodConfigurationsRequestRevolutPay>,
    pub samsung_pay: Option<PostPaymentMethodConfigurationsRequestSamsungPay>,
    pub satispay: Option<PostPaymentMethodConfigurationsRequestSatispay>,
    pub sepa_debit: Option<PostPaymentMethodConfigurationsRequestSepaDebit>,
    pub sofort: Option<PostPaymentMethodConfigurationsRequestSofort>,
    pub swish: Option<PostPaymentMethodConfigurationsRequestSwish>,
    pub twint: Option<PostPaymentMethodConfigurationsRequestTwint>,
    pub us_bank_account: Option<PostPaymentMethodConfigurationsRequestUsBankAccount>,
    pub wechat_pay: Option<PostPaymentMethodConfigurationsRequestWechatPay>,
    pub zip: Option<PostPaymentMethodConfigurationsRequestZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAcssDebit {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAffirm {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAfterpayClearpay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAlipay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAlma {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAmazonPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestApplePay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestApplePayLater {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestAuBecsDebit {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestBacsDebit {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestBancontact {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestBillie {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestBlik {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestBoleto {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestCard {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestCartesBancaires {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestCashapp {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestCrypto {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestCustomerBalance {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestDisplayPreference {
    pub preference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestEps {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestFpx {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestFrMealVoucherConecs {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestGiropay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestGooglePay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestGrabpay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestIdeal {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestJcb {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestKakaoPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestKlarna {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestKonbini {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestKrCard {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestLink {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestMbWay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestMobilepay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestMultibanco {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestNaverPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestNzBankAccount {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestOxxo {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestP24 {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPayByBank {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPayco {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPaynow {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPaypal {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPix {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestPromptpay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestRevolutPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestSamsungPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestSatispay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestSepaDebit {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestSofort {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestSwish {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestTwint {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestUsBankAccount {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestWechatPay {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodConfigurationsRequestZip {
    pub display_preference: Option<PostPaymentMethodConfigurationsRequestDisplayPreference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodDomainsPaymentMethodDomainRequest {
    pub enabled: Option<bool>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodDomainsRequest {
    pub domain_name: String,
    pub enabled: Option<bool>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsPaymentMethodAttachRequest {
    pub customer: String,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsPaymentMethodRequest {
    pub allow_redisplay: Option<String>,
    pub billing_details: Option<PostPaymentMethodsRequestBillingDetails>,
    pub card: Option<PostPaymentMethodsPaymentMethodRequestCard>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub us_bank_account: Option<PostPaymentMethodsPaymentMethodRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsPaymentMethodRequestCard {
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub networks: Option<PostPaymentMethodsPaymentMethodRequestNetworks>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsPaymentMethodRequestNetworks {
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsPaymentMethodRequestUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequest {
    pub acss_debit: Option<PostPaymentMethodsRequestAcssDebit>,
    pub affirm: Option<serde_json::Value>,
    pub afterpay_clearpay: Option<serde_json::Value>,
    pub alipay: Option<serde_json::Value>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<serde_json::Value>,
    pub amazon_pay: Option<serde_json::Value>,
    pub au_becs_debit: Option<PostPaymentMethodsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentMethodsRequestBacsDebit>,
    pub bancontact: Option<serde_json::Value>,
    pub billie: Option<serde_json::Value>,
    pub billing_details: Option<PostPaymentMethodsRequestBillingDetails>,
    pub blik: Option<serde_json::Value>,
    pub boleto: Option<PostPaymentMethodsRequestBoleto>,
    pub card: Option<PostPaymentMethodsRequestCard>,
    pub cashapp: Option<serde_json::Value>,
    pub crypto: Option<serde_json::Value>,
    pub custom: Option<PostPaymentMethodsRequestCustom>,
    pub customer: Option<String>,
    pub customer_balance: Option<serde_json::Value>,
    pub eps: Option<PostPaymentMethodsRequestEps>,
    pub expand: Option<Vec<String>>,
    pub fpx: Option<PostPaymentMethodsRequestFpx>,
    pub giropay: Option<serde_json::Value>,
    pub grabpay: Option<serde_json::Value>,
    pub ideal: Option<PostPaymentMethodsRequestIdeal>,
    pub interac_present: Option<serde_json::Value>,
    pub kakao_pay: Option<serde_json::Value>,
    pub klarna: Option<PostPaymentMethodsRequestKlarna>,
    pub konbini: Option<serde_json::Value>,
    pub kr_card: Option<serde_json::Value>,
    pub link: Option<serde_json::Value>,
    pub mb_way: Option<serde_json::Value>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub mobilepay: Option<serde_json::Value>,
    pub multibanco: Option<serde_json::Value>,
    pub naver_pay: Option<PostPaymentMethodsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentMethodsRequestNzBankAccount>,
    pub oxxo: Option<serde_json::Value>,
    pub p24: Option<PostPaymentMethodsRequestP24>,
    pub pay_by_bank: Option<serde_json::Value>,
    pub payco: Option<serde_json::Value>,
    pub payment_method: Option<String>,
    pub paynow: Option<serde_json::Value>,
    pub paypal: Option<serde_json::Value>,
    pub pix: Option<serde_json::Value>,
    pub promptpay: Option<serde_json::Value>,
    pub radar_options: Option<PostChargesRequestRadarOptions>,
    pub revolut_pay: Option<serde_json::Value>,
    pub samsung_pay: Option<serde_json::Value>,
    pub satispay: Option<serde_json::Value>,
    pub sepa_debit: Option<PostPaymentMethodsRequestSepaDebit>,
    pub sofort: Option<PostPaymentMethodsRequestSofort>,
    pub swish: Option<serde_json::Value>,
    pub twint: Option<serde_json::Value>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub us_bank_account: Option<PostPaymentMethodsRequestUsBankAccount>,
    pub wechat_pay: Option<serde_json::Value>,
    pub zip: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestAcssDebit {
    pub account_number: String,
    pub institution_number: String,
    pub transit_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestAuBecsDebit {
    pub account_number: String,
    pub bsb_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestBacsDebit {
    pub account_number: Option<String>,
    pub sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestBillingDetails {
    pub address: Option<PostPaymentIntentsRequestAddress>,
    pub email: Option<PostAccountsRequestSupportUrl>,
    pub name: Option<PostAccountsRequestPaymentsPricing>,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
    pub tax_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestBoleto {
    pub tax_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentMethodsRequestCard {
    CardDetailsParams(PostPaymentMethodsRequestCardObject),
    TokenParams(DefaultPostPaymentMethodsRequestCardObject),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestCardObject {
    pub cvc: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub networks: Option<PostPaymentMethodsRequestCardObjectNetworks>,
    pub number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestCardObjectNetworks {
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestCustom {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestEps {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestFpx {
    pub bank: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestIdeal {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestKlarna {
    pub dob: Option<PostPaymentIntentsRequestDob>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestNaverPay {
    pub funding: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestNzBankAccount {
    pub account_holder_name: Option<String>,
    pub account_number: String,
    pub bank_code: String,
    pub branch_code: String,
    pub reference: Option<String>,
    pub suffix: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestP24 {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestSepaDebit {
    pub iban: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestSofort {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentMethodsRequestUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_number: Option<String>,
    pub account_type: Option<String>,
    pub financial_connections_account: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptCanceledRequest {
    pub canceled_at: i32,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptFailedRequest {
    pub expand: Option<Vec<String>>,
    pub failed_at: i32,
    pub metadata: Option<PostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest {
    pub expand: Option<Vec<String>>,
    pub guaranteed_at: i32,
    pub metadata: Option<PostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptInformationalRequest {
    pub customer_details: Option<PostPaymentRecordsReportPaymentRequestCustomerDetails>,
    pub description:
        Option<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub shipping_details:
        Option<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetails {
    ShippingDetails(
        PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptInformationalRequestShippingDetailsObject {
    pub address: Option<PostPaymentRecordsReportPaymentRequestAddress>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportPaymentAttemptRequest {
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub failed: Option<PostPaymentRecordsReportPaymentRequestFailed>,
    pub guaranteed: Option<PostPaymentRecordsReportPaymentRequestGuaranteed>,
    pub initiated_at: i32,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub outcome: Option<String>,
    pub payment_method_details: Option<PostPaymentRecordsReportPaymentRequestPaymentMethodDetails>,
    pub shipping_details: Option<PostPaymentRecordsReportPaymentRequestShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportRefundRequest {
    pub amount: Option<PostPaymentRecordsIdReportRefundRequestAmount>,
    pub expand: Option<Vec<String>>,
    pub initiated_at: Option<i32>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub outcome: String,
    pub processor_details: PostPaymentRecordsIdReportRefundRequestProcessorDetails,
    pub refunded: PostPaymentRecordsIdReportRefundRequestRefunded,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportRefundRequestAmount {
    pub currency: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportRefundRequestCustom {
    pub refund_reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportRefundRequestProcessorDetails {
    pub custom: Option<PostPaymentRecordsIdReportRefundRequestCustom>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsIdReportRefundRequestRefunded {
    pub refunded_at: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequest {
    pub amount_requested: PostPaymentRecordsReportPaymentRequestAmountRequested,
    pub customer_details: Option<PostPaymentRecordsReportPaymentRequestCustomerDetails>,
    pub customer_presence: Option<String>,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub failed: Option<PostPaymentRecordsReportPaymentRequestFailed>,
    pub guaranteed: Option<PostPaymentRecordsReportPaymentRequestGuaranteed>,
    pub initiated_at: i32,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub outcome: Option<String>,
    pub payment_method_details: PostPaymentRecordsReportPaymentRequestPaymentMethodDetails,
    pub processor_details: Option<PostPaymentRecordsReportPaymentRequestProcessorDetails>,
    pub shipping_details: Option<PostPaymentRecordsReportPaymentRequestShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestAmountRequested {
    pub currency: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestBillingDetails {
    pub address: Option<PostPaymentRecordsReportPaymentRequestAddress>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestCustom {
    pub display_name: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestCustomerDetails {
    pub customer: Option<String>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestFailed {
    pub failed_at: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestGuaranteed {
    pub guaranteed_at: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestPaymentMethodDetails {
    pub billing_details: Option<PostPaymentRecordsReportPaymentRequestBillingDetails>,
    pub custom: Option<PostPaymentRecordsReportPaymentRequestCustom>,
    pub payment_method: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestProcessorDetails {
    pub custom: Option<DefaultPostPaymentRecordsReportPaymentRequestCustom>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPaymentRecordsReportPaymentRequestShippingDetails {
    pub address: Option<PostPaymentRecordsReportPaymentRequestAddress>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPayoutsRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub method: Option<String>,
    pub payout_method: Option<String>,
    pub source_type: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPlansPlanRequest {
    pub active: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub nickname: Option<String>,
    pub product: Option<String>,
    pub trial_period_days: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPlansRequest {
    pub active: Option<bool>,
    pub amount: Option<i32>,
    pub amount_decimal: Option<String>,
    pub billing_scheme: Option<String>,
    pub currency: String,
    pub expand: Option<Vec<String>>,
    pub id: Option<String>,
    pub interval: String,
    pub interval_count: Option<i32>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub meter: Option<String>,
    pub nickname: Option<String>,
    pub product: Option<PostPlansRequestProduct>,
    pub tiers: Option<Vec<PostPlansRequestTiersItem>>,
    pub tiers_mode: Option<String>,
    pub transform_usage: Option<PostPlansRequestTransformUsage>,
    pub trial_period_days: Option<i32>,
    pub usage_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPlansRequestProduct {
    InlineProductParams(PostPlansRequestProductObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPlansRequestProductObject {
    pub active: Option<bool>,
    pub id: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub name: String,
    pub statement_descriptor: Option<String>,
    pub tax_code: Option<String>,
    pub unit_label: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPlansRequestTiersItem {
    pub flat_amount: Option<i32>,
    pub flat_amount_decimal: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
    pub up_to: PostPlansRequestTiersItemUpTo,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPlansRequestTiersItemUpTo {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPlansRequestTransformUsage {
    pub divide_by: i32,
    pub round: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesPriceRequest {
    pub active: Option<bool>,
    pub currency_options: Option<PostPricesPriceRequestCurrencyOptions>,
    pub expand: Option<Vec<String>>,
    pub lookup_key: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub nickname: Option<String>,
    pub tax_behavior: Option<String>,
    pub transfer_lookup_key: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostPricesPriceRequestCurrencyOptions {
    Variant1(PostPricesPriceRequestCurrencyOptionsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesPriceRequestCurrencyOptionsObject {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesRequest {
    pub active: Option<bool>,
    pub billing_scheme: Option<String>,
    pub currency: String,
    pub currency_options: Option<PostPricesRequestCurrencyOptions>,
    pub custom_unit_amount: Option<PostPricesRequestCustomUnitAmount>,
    pub expand: Option<Vec<String>>,
    pub lookup_key: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub nickname: Option<String>,
    pub product: Option<String>,
    pub product_data: Option<PostPricesRequestProductData>,
    pub recurring: Option<PostPricesRequestRecurring>,
    pub tax_behavior: Option<String>,
    pub tiers: Option<Vec<PostPlansRequestTiersItem>>,
    pub tiers_mode: Option<String>,
    pub transfer_lookup_key: Option<bool>,
    pub transform_quantity: Option<PostPlansRequestTransformUsage>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesRequestCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesRequestCustomUnitAmount {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
    pub preset: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesRequestProductData {
    pub active: Option<bool>,
    pub id: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub name: String,
    pub statement_descriptor: Option<String>,
    pub tax_code: Option<String>,
    pub unit_label: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPricesRequestRecurring {
    pub interval: String,
    pub interval_count: Option<i32>,
    pub meter: Option<String>,
    pub usage_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsIdRequest {
    pub active: Option<bool>,
    pub default_price: Option<String>,
    pub description: Option<PostProductsIdRequestDescription>,
    pub expand: Option<Vec<String>>,
    pub images: Option<PostProductsIdRequestImages>,
    pub marketing_features: Option<PostProductsIdRequestMarketingFeatures>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub name: Option<String>,
    pub package_dimensions: Option<PostProductsIdRequestPackageDimensions>,
    pub shippable: Option<bool>,
    pub statement_descriptor: Option<String>,
    pub tax_code: Option<PostInvoiceitemsRequestTaxCode>,
    pub unit_label: Option<PostProductsIdRequestUnitLabel>,
    pub url: Option<PostProductsIdRequestUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestImages {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestMarketingFeatures {
    Variant1(Vec<PostProductsRequestMarketingFeaturesItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestPackageDimensions {
    PackageDimensionsSpecs(PostProductsIdRequestPackageDimensionsObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsIdRequestPackageDimensionsObject {
    pub height: f32,
    pub length: f32,
    pub weight: f32,
    pub width: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestUnitLabel {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostProductsIdRequestUrl {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsProductFeaturesRequest {
    pub entitlement_feature: String,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsRequest {
    pub active: Option<bool>,
    pub default_price_data: Option<PostProductsRequestDefaultPriceData>,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub id: Option<String>,
    pub images: Option<Vec<String>>,
    pub marketing_features: Option<Vec<PostProductsRequestMarketingFeaturesItem>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: String,
    pub package_dimensions: Option<PostProductsRequestPackageDimensions>,
    pub shippable: Option<bool>,
    pub statement_descriptor: Option<String>,
    pub tax_code: Option<String>,
    pub unit_label: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsRequestCustomUnitAmount {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
    pub preset: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsRequestDefaultPriceData {
    pub currency: String,
    pub currency_options: Option<PostPricesPriceRequestCurrencyOptionsObject>,
    pub custom_unit_amount: Option<PostProductsRequestCustomUnitAmount>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub recurring: Option<PostCheckoutSessionsRequestLineItemsItemRecurring>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsRequestMarketingFeaturesItem {
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostProductsRequestPackageDimensions {
    pub height: f32,
    pub length: f32,
    pub weight: f32,
    pub width: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesPromotionCodeRequest {
    pub active: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub restrictions: Option<PostPromotionCodesPromotionCodeRequestRestrictions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesPromotionCodeRequestRestrictions {
    pub currency_options: Option<PostPromotionCodesRequestCurrencyOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesRequest {
    pub active: Option<bool>,
    pub code: Option<String>,
    pub customer: Option<String>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub max_redemptions: Option<i32>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub promotion: PostPromotionCodesRequestPromotion,
    pub restrictions: Option<PostPromotionCodesRequestRestrictions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesRequestCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesRequestPromotion {
    pub coupon: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostPromotionCodesRequestRestrictions {
    pub currency_options: Option<PostPromotionCodesRequestCurrencyOptions>,
    pub first_time_transaction: Option<bool>,
    pub minimum_amount: Option<i32>,
    pub minimum_amount_currency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesQuoteFinalizeRequest {
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesQuoteRequest {
    pub application_fee_amount: Option<PostQuotesRequestApplicationFeeAmount>,
    pub application_fee_percent: Option<PostQuotesRequestApplicationFeePercent>,
    pub automatic_tax: Option<PostQuotesRequestAutomaticTax>,
    pub collection_method: Option<String>,
    pub customer: Option<String>,
    pub default_tax_rates: Option<PostQuotesRequestDefaultTaxRates>,
    pub description: Option<PostQuotesQuoteRequestDescription>,
    pub discounts: Option<PostQuotesRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub footer: Option<PostQuotesQuoteRequestFooter>,
    pub header: Option<PostQuotesQuoteRequestHeader>,
    pub invoice_settings: Option<PostQuotesRequestInvoiceSettings>,
    pub line_items: Option<Vec<PostQuotesQuoteRequestLineItemsItem>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub on_behalf_of: Option<PostQuotesRequestOnBehalfOf>,
    pub subscription_data: Option<PostQuotesQuoteRequestSubscriptionData>,
    pub transfer_data: Option<PostQuotesRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesQuoteRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesQuoteRequestFooter {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesQuoteRequestHeader {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesQuoteRequestLineItemsItem {
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub id: Option<String>,
    pub price: Option<String>,
    pub price_data: Option<PostQuotesRequestLineItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesQuoteRequestSubscriptionData {
    pub description: Option<PostAccountsAccountPeopleRequestFilesItem>,
    pub effective_date: Option<PostQuotesRequestEffectiveDate>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub trial_period_days: Option<PostBalanceSettingsRequestDelayDaysOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequest {
    pub application_fee_amount: Option<PostQuotesRequestApplicationFeeAmount>,
    pub application_fee_percent: Option<PostQuotesRequestApplicationFeePercent>,
    pub automatic_tax: Option<PostQuotesRequestAutomaticTax>,
    pub collection_method: Option<String>,
    pub customer: Option<String>,
    pub default_tax_rates: Option<PostQuotesRequestDefaultTaxRates>,
    pub description: Option<PostQuotesRequestDescription>,
    pub discounts: Option<PostQuotesRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
    pub footer: Option<PostQuotesRequestFooter>,
    pub from_quote: Option<PostQuotesRequestFromQuote>,
    pub header: Option<PostQuotesRequestHeader>,
    pub invoice_settings: Option<PostQuotesRequestInvoiceSettings>,
    pub line_items: Option<Vec<PostQuotesRequestLineItemsItem>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub on_behalf_of: Option<PostQuotesRequestOnBehalfOf>,
    pub subscription_data: Option<PostQuotesRequestSubscriptionData>,
    pub test_clock: Option<String>,
    pub transfer_data: Option<PostQuotesRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestApplicationFeeAmount {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestApplicationFeePercent {
    Variant1(f32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestAutomaticTax {
    pub enabled: bool,
    pub liability: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestDefaultTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestEffectiveDate {
    Variant1(String),
    Variant2(i32),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestFooter {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestFromQuote {
    pub is_revision: Option<bool>,
    pub quote: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestHeader {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestInvoiceSettings {
    pub days_until_due: Option<i32>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestLineItemsItem {
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub price: Option<String>,
    pub price_data: Option<PostQuotesRequestLineItemsItemPriceData>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestLineItemsItemPriceData {
    pub currency: String,
    pub product: String,
    pub recurring: Option<PostCheckoutSessionsRequestLineItemsItemRecurring>,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestOnBehalfOf {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestSubscriptionData {
    pub billing_mode: Option<PostCheckoutSessionsRequestBillingMode>,
    pub description: Option<String>,
    pub effective_date: Option<PostQuotesRequestEffectiveDate>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub trial_period_days: Option<PostBalanceSettingsRequestDelayDaysOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostQuotesRequestTransferData {
    TransferDataSpecs(PostQuotesRequestTransferDataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostQuotesRequestTransferDataObject {
    pub amount: Option<i32>,
    pub amount_percent: Option<f32>,
    pub destination: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostRadarValueListItemsRequest {
    pub expand: Option<Vec<String>>,
    pub value: String,
    pub value_list: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostRadarValueListsRequest {
    pub alias: String,
    pub expand: Option<Vec<String>>,
    pub item_type: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostRadarValueListsValueListRequest {
    pub alias: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostRefundsRequest {
    pub amount: Option<i32>,
    pub charge: Option<String>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub expand: Option<Vec<String>>,
    pub instructions_email: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub origin: Option<String>,
    pub payment_intent: Option<String>,
    pub reason: Option<String>,
    pub refund_application_fee: Option<bool>,
    pub reverse_transfer: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostReportingReportRunsRequest {
    pub expand: Option<Vec<String>>,
    pub parameters: Option<PostReportingReportRunsRequestParameters>,
    pub report_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostReportingReportRunsRequestParameters {
    pub columns: Option<Vec<String>>,
    pub connected_account: Option<String>,
    pub currency: Option<String>,
    pub interval_end: Option<i32>,
    pub interval_start: Option<i32>,
    pub payout: Option<String>,
    pub reporting_category: Option<String>,
    pub timezone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsIntentCancelRequest {
    pub cancellation_reason: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsIntentConfirmRequest {
    pub client_secret: Option<String>,
    pub confirmation_token: Option<String>,
    pub expand: Option<Vec<String>>,
    pub mandate_data: Option<PostPaymentIntentsIntentConfirmRequestMandateData>,
    pub payment_method: Option<String>,
    pub payment_method_data: Option<PostSetupIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostSetupIntentsRequestPaymentMethodOptions>,
    pub return_url: Option<String>,
    pub use_stripe_sdk: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsIntentRequest {
    pub attach_to_self: Option<bool>,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub excluded_payment_method_types:
        Option<PostSetupIntentsIntentRequestExcludedPaymentMethodTypes>,
    pub expand: Option<Vec<String>>,
    pub flow_directions: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub payment_method: Option<String>,
    pub payment_method_configuration: Option<String>,
    pub payment_method_data: Option<PostSetupIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostSetupIntentsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSetupIntentsIntentRequestExcludedPaymentMethodTypes {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsIntentVerifyMicrodepositsRequest {
    pub amounts: Option<Vec<i32>>,
    pub client_secret: Option<String>,
    pub descriptor_code: Option<String>,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequest {
    pub attach_to_self: Option<bool>,
    pub automatic_payment_methods: Option<PostSetupIntentsRequestAutomaticPaymentMethods>,
    pub confirm: Option<bool>,
    pub confirmation_token: Option<String>,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub expand: Option<Vec<String>>,
    pub flow_directions: Option<Vec<String>>,
    pub mandate_data: Option<PostSetupIntentsRequestMandateData>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub on_behalf_of: Option<String>,
    pub payment_method: Option<String>,
    pub payment_method_configuration: Option<String>,
    pub payment_method_data: Option<PostSetupIntentsRequestPaymentMethodData>,
    pub payment_method_options: Option<PostSetupIntentsRequestPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub return_url: Option<String>,
    pub single_use: Option<PostSetupIntentsRequestSingleUse>,
    pub usage: Option<String>,
    pub use_stripe_sdk: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestAcssDebit {
    pub currency: Option<String>,
    pub mandate_options: Option<PostSetupIntentsRequestMandateOptions>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestAutomaticPaymentMethods {
    pub allow_redirects: Option<String>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestBacsDebit {
    pub mandate_options: Option<DefaultPostCheckoutSessionsRequestMandateOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestCard {
    pub mandate_options: Option<DefaultPostSetupIntentsRequestMandateOptions>,
    pub network: Option<String>,
    pub request_three_d_secure: Option<String>,
    pub three_d_secure: Option<PostSetupIntentsRequestThreeDSecure>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestKlarna {
    pub currency: Option<String>,
    pub on_demand: Option<DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand>,
    pub preferred_locale: Option<String>,
    pub subscriptions: Option<PostCheckoutSessionsRequestSubscriptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSetupIntentsRequestMandateData {
    SecretKeyParam(PostPaymentIntentsRequestMandateDataObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestMandateOptions {
    pub custom_mandate_url: Option<PostAccountsRequestSupportUrl>,
    pub default_for: Option<Vec<String>>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestPaymentMethodData {
    pub acss_debit: Option<PostPaymentIntentsRequestAcssDebit>,
    pub affirm: Option<serde_json::Value>,
    pub afterpay_clearpay: Option<serde_json::Value>,
    pub alipay: Option<serde_json::Value>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<serde_json::Value>,
    pub amazon_pay: Option<serde_json::Value>,
    pub au_becs_debit: Option<PostPaymentIntentsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentIntentsRequestBacsDebit>,
    pub bancontact: Option<serde_json::Value>,
    pub billie: Option<serde_json::Value>,
    pub billing_details: Option<PostPaymentIntentsRequestBillingDetails>,
    pub blik: Option<serde_json::Value>,
    pub boleto: Option<PostPaymentIntentsRequestBoleto>,
    pub cashapp: Option<serde_json::Value>,
    pub crypto: Option<serde_json::Value>,
    pub customer_balance: Option<serde_json::Value>,
    pub eps: Option<PostPaymentIntentsRequestEps>,
    pub fpx: Option<PostPaymentIntentsRequestFpx>,
    pub giropay: Option<serde_json::Value>,
    pub grabpay: Option<serde_json::Value>,
    pub ideal: Option<PostPaymentIntentsRequestIdeal>,
    pub interac_present: Option<serde_json::Value>,
    pub kakao_pay: Option<serde_json::Value>,
    pub klarna: Option<PostPaymentIntentsRequestKlarna>,
    pub konbini: Option<serde_json::Value>,
    pub kr_card: Option<serde_json::Value>,
    pub link: Option<serde_json::Value>,
    pub mb_way: Option<serde_json::Value>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub mobilepay: Option<serde_json::Value>,
    pub multibanco: Option<serde_json::Value>,
    pub naver_pay: Option<PostPaymentIntentsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentIntentsRequestNzBankAccount>,
    pub oxxo: Option<serde_json::Value>,
    pub p24: Option<PostPaymentIntentsRequestP24>,
    pub pay_by_bank: Option<serde_json::Value>,
    pub payco: Option<serde_json::Value>,
    pub paynow: Option<serde_json::Value>,
    pub paypal: Option<serde_json::Value>,
    pub pix: Option<serde_json::Value>,
    pub promptpay: Option<serde_json::Value>,
    pub radar_options: Option<PostPaymentIntentsRequestRadarOptions>,
    pub revolut_pay: Option<serde_json::Value>,
    pub samsung_pay: Option<serde_json::Value>,
    pub satispay: Option<serde_json::Value>,
    pub sepa_debit: Option<PostPaymentIntentsRequestSepaDebit>,
    pub sofort: Option<PostPaymentIntentsRequestSofort>,
    pub swish: Option<serde_json::Value>,
    pub twint: Option<serde_json::Value>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PostPaymentIntentsRequestUsBankAccount>,
    pub wechat_pay: Option<serde_json::Value>,
    pub zip: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestPaymentMethodOptions {
    pub acss_debit: Option<PostSetupIntentsRequestAcssDebit>,
    pub amazon_pay: Option<serde_json::Value>,
    pub bacs_debit: Option<PostSetupIntentsRequestBacsDebit>,
    pub card: Option<PostSetupIntentsRequestCard>,
    pub card_present: Option<serde_json::Value>,
    pub klarna: Option<PostSetupIntentsRequestKlarna>,
    pub link: Option<serde_json::Value>,
    pub paypal: Option<PostSetupIntentsRequestPaypal>,
    pub sepa_debit: Option<PostSetupIntentsRequestBacsDebit>,
    pub us_bank_account: Option<PostSetupIntentsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestPaypal {
    pub billing_agreement_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestSingleUse {
    pub amount: i32,
    pub currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestThreeDSecure {
    pub ares_trans_status: Option<String>,
    pub cryptogram: Option<String>,
    pub electronic_commerce_indicator: Option<String>,
    pub network_options: Option<PostPaymentIntentsRequestCardObjectNetworkOptions>,
    pub requestor_challenge_indicator: Option<String>,
    pub transaction_id: Option<String>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSetupIntentsRequestUsBankAccount {
    pub financial_connections:
        Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections>,
    pub mandate_options: Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectMandateOptions>,
    pub networks: Option<DefaultPostPaymentIntentsRequestUsBankAccountObjectNetworks>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesRequest {
    pub delivery_estimate: Option<PostShippingRatesRequestDeliveryEstimate>,
    pub display_name: String,
    pub expand: Option<Vec<String>>,
    pub fixed_amount: Option<PostShippingRatesRequestFixedAmount>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesRequestDeliveryEstimate {
    pub maximum: Option<PostCheckoutSessionsRequestShippingOptionsItemMaximum>,
    pub minimum: Option<PostCheckoutSessionsRequestShippingOptionsItemMaximum>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesRequestFixedAmount {
    pub amount: i32,
    pub currency: String,
    pub currency_options: Option<PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesShippingRateTokenRequest {
    pub active: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub fixed_amount: Option<PostShippingRatesShippingRateTokenRequestFixedAmount>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub tax_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesShippingRateTokenRequestCurrencyOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostShippingRatesShippingRateTokenRequestFixedAmount {
    pub currency_options: Option<PostShippingRatesShippingRateTokenRequestCurrencyOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSigmaSavedQueriesIdRequest {
    pub expand: Option<Vec<String>>,
    pub name: Option<String>,
    pub sql: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequest {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub expand: Option<Vec<String>>,
    pub flow: Option<String>,
    pub mandate: Option<PostSourcesRequestMandate>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub original_source: Option<String>,
    pub owner: Option<PostSourcesRequestOwner>,
    pub receiver: Option<PostSourcesRequestReceiver>,
    pub redirect: Option<PostSourcesRequestRedirect>,
    pub source_order: Option<PostSourcesRequestSourceOrder>,
    pub statement_descriptor: Option<String>,
    pub token: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub offline: Option<PostSourcesRequestOffline>,
    pub online: Option<PostSourcesRequestOnline>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestItemsItem {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub description: Option<String>,
    pub parent: Option<String>,
    pub quantity: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestMandate {
    pub acceptance: Option<PostSourcesRequestAcceptance>,
    pub amount: Option<PostBalanceSettingsRequestDelayDaysOverride>,
    pub currency: Option<String>,
    pub interval: Option<String>,
    pub notification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestOffline {
    pub contact_email: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestOnline {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestOwner {
    pub address: Option<PostCustomersCustomerBankAccountsIdRequestAddress>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestReceiver {
    pub refund_attributes_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestRedirect {
    pub return_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestShipping {
    pub address: PostCheckoutSessionsRequestAddress,
    pub carrier: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesRequestSourceOrder {
    pub items: Option<Vec<PostSourcesRequestItemsItem>>,
    pub shipping: Option<PostSourcesRequestShipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesSourceRequest {
    pub amount: Option<i32>,
    pub expand: Option<Vec<String>>,
    pub mandate: Option<PostSourcesRequestMandate>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub owner: Option<PostSourcesRequestOwner>,
    pub source_order: Option<PostSourcesSourceRequestSourceOrder>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesSourceRequestSourceOrder {
    pub items: Option<Vec<PostSourcesRequestItemsItem>>,
    pub shipping: Option<PostSourcesRequestShipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSourcesSourceVerifyRequest {
    pub expand: Option<Vec<String>>,
    pub values: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionItemsItemRequest {
    pub billing_thresholds: Option<PostSubscriptionItemsRequestBillingThresholds>,
    pub discounts: Option<PostSubscriptionItemsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub off_session: Option<bool>,
    pub payment_behavior: Option<String>,
    pub price: Option<String>,
    pub price_data: Option<PostSubscriptionItemsItemRequestPriceData>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
    pub quantity: Option<i32>,
    pub tax_rates: Option<PostSubscriptionItemsRequestTaxRates>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionItemsItemRequestPriceData {
    pub currency: String,
    pub product: String,
    pub recurring: PostCheckoutSessionsRequestLineItemsItemRecurring,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionItemsRequest {
    pub billing_thresholds: Option<PostSubscriptionItemsRequestBillingThresholds>,
    pub discounts: Option<PostSubscriptionItemsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub payment_behavior: Option<String>,
    pub price: Option<String>,
    pub price_data: Option<PostSubscriptionItemsRequestPriceData>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
    pub quantity: Option<i32>,
    pub subscription: String,
    pub tax_rates: Option<PostSubscriptionItemsRequestTaxRates>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionItemsRequestBillingThresholds {
    ItemBillingThresholdsParam(
        PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsObject,
    ),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionItemsRequestDiscounts {
    Variant1(Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionItemsRequestPriceData {
    pub currency: String,
    pub product: String,
    pub recurring: PostCheckoutSessionsRequestLineItemsItemRecurring,
    pub tax_behavior: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionItemsRequestTaxRates {
    Variant1(Vec<String>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesRequest {
    pub billing_mode: Option<PostSubscriptionSchedulesRequestBillingMode>,
    pub customer: Option<String>,
    pub default_settings: Option<PostSubscriptionSchedulesRequestDefaultSettings>,
    pub end_behavior: Option<String>,
    pub expand: Option<Vec<String>>,
    pub from_subscription: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub phases: Option<Vec<PostSubscriptionSchedulesRequestPhasesItem>>,
    pub start_date: Option<PostSubscriptionSchedulesRequestStartDate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesRequestBillingMode {
    pub flexible: Option<PostCheckoutSessionsRequestFlexible>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesRequestDefaultSettings {
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds>,
    pub collection_method: Option<String>,
    pub default_payment_method: Option<String>,
    pub description: Option<PostAccountsAccountPeopleRequestFilesItem>,
    pub invoice_settings: Option<PostSubscriptionSchedulesRequestInvoiceSettings>,
    pub on_behalf_of: Option<PostAccountsRequestSupportUrl>,
    pub transfer_data: Option<PostSubscriptionSchedulesRequestTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesRequestInvoiceSettings {
    pub account_tax_ids: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub days_until_due: Option<i32>,
    pub issuer: Option<PostCheckoutSessionsRequestLiability>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesRequestPhasesItem {
    pub add_invoice_items:
        Option<Vec<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem>>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds>,
    pub collection_method: Option<String>,
    pub currency: Option<String>,
    pub default_payment_method: Option<String>,
    pub default_tax_rates: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub description: Option<PostAccountsAccountPeopleRequestFilesItem>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts>,
    pub duration: Option<PostInvoicesCreatePreviewRequestPhasesItemDuration>,
    pub end_date: Option<i32>,
    pub invoice_settings: Option<PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings>,
    pub items: Vec<PostInvoicesCreatePreviewRequestPhasesItemItemsItem>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub on_behalf_of: Option<String>,
    pub proration_behavior: Option<String>,
    pub transfer_data: Option<DefaultPostCheckoutSessionsRequestTransferData>,
    pub trial: Option<bool>,
    pub trial_end: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionSchedulesRequestStartDate {
    Variant1(i32),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionSchedulesRequestTransferData {
    TransferDataSpecs(DefaultPostCheckoutSessionsRequestTransferData),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesScheduleCancelRequest {
    pub expand: Option<Vec<String>>,
    pub invoice_now: Option<bool>,
    pub prorate: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesScheduleReleaseRequest {
    pub expand: Option<Vec<String>>,
    pub preserve_cancel_date: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionSchedulesScheduleRequest {
    pub default_settings: Option<PostSubscriptionSchedulesRequestDefaultSettings>,
    pub end_behavior: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub phases: Option<Vec<PostInvoicesCreatePreviewRequestPhasesItem>>,
    pub proration_behavior: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsRequest {
    pub add_invoice_items:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>>,
    pub application_fee_percent:
        Option<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>,
    pub automatic_tax: Option<PostCustomersCustomerSubscriptionsRequestAutomaticTax>,
    pub backdate_start_date: Option<i32>,
    pub billing_cycle_anchor: Option<i32>,
    pub billing_cycle_anchor_config: Option<PostSubscriptionsRequestBillingCycleAnchorConfig>,
    pub billing_mode: Option<PostSubscriptionSchedulesRequestBillingMode>,
    pub billing_thresholds: Option<PostCustomersCustomerSubscriptionsRequestBillingThresholds>,
    pub cancel_at: Option<PostCustomersCustomerSubscriptionsRequestCancelAt>,
    pub cancel_at_period_end: Option<bool>,
    pub collection_method: Option<String>,
    pub currency: Option<String>,
    pub customer: String,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source: Option<String>,
    pub default_tax_rates: Option<PostCustomersCustomerSubscriptionsRequestDefaultTaxRates>,
    pub description: Option<String>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice_settings: Option<PostCustomersCustomerSubscriptionsRequestInvoiceSettings>,
    pub items: Option<Vec<PostCustomersCustomerSubscriptionsRequestItemsItem>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub off_session: Option<bool>,
    pub on_behalf_of: Option<PostSubscriptionsRequestOnBehalfOf>,
    pub payment_behavior: Option<String>,
    pub payment_settings: Option<PostCustomersCustomerSubscriptionsRequestPaymentSettings>,
    pub pending_invoice_item_interval:
        Option<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval>,
    pub proration_behavior: Option<String>,
    pub transfer_data: Option<PostCustomersCustomerSubscriptionsRequestTransferData>,
    pub trial_end: Option<PostCustomersCustomerSubscriptionsRequestTrialEnd>,
    pub trial_from_plan: Option<bool>,
    pub trial_period_days: Option<i32>,
    pub trial_settings: Option<PostCustomersCustomerSubscriptionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsRequestBillingCycleAnchorConfig {
    pub day_of_month: i32,
    pub hour: Option<i32>,
    pub minute: Option<i32>,
    pub month: Option<i32>,
    pub second: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionsRequestOnBehalfOf {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsSubscriptionExposedIdRequest {
    pub add_invoice_items:
        Option<Vec<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>>,
    pub application_fee_percent:
        Option<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>,
    pub automatic_tax:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<PostCustomersCustomerSubscriptionsRequestBillingThresholds>,
    pub cancel_at: Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt>,
    pub cancel_at_period_end: Option<bool>,
    pub cancellation_details:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails>,
    pub collection_method: Option<String>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<String>,
    pub default_source:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource>,
    pub default_tax_rates:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates>,
    pub description: Option<PostSubscriptionsSubscriptionExposedIdRequestDescription>,
    pub discounts: Option<PostCustomersCustomerSubscriptionsRequestDiscounts>,
    pub expand: Option<Vec<String>>,
    pub invoice_settings: Option<PostCustomersCustomerSubscriptionsRequestInvoiceSettings>,
    pub items: Option<Vec<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub off_session: Option<bool>,
    pub on_behalf_of: Option<PostSubscriptionsRequestOnBehalfOf>,
    pub pause_collection:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection>,
    pub payment_behavior: Option<String>,
    pub payment_settings: Option<PostCustomersCustomerSubscriptionsRequestPaymentSettings>,
    pub pending_invoice_item_interval:
        Option<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
    pub transfer_data:
        Option<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData>,
    pub trial_end: Option<PostSubscriptionsSubscriptionExposedIdRequestTrialEnd>,
    pub trial_from_plan: Option<bool>,
    pub trial_settings: Option<PostCustomersCustomerSubscriptionsRequestTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionsSubscriptionExposedIdRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostSubscriptionsSubscriptionExposedIdRequestTrialEnd {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsSubscriptionMigrateRequest {
    pub billing_mode: PostSubscriptionsSubscriptionMigrateRequestBillingMode,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsSubscriptionMigrateRequestBillingMode {
    pub flexible: Option<PostCheckoutSessionsRequestFlexible>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostSubscriptionsSubscriptionResumeRequest {
    pub billing_cycle_anchor: Option<String>,
    pub expand: Option<Vec<String>>,
    pub proration_behavior: Option<String>,
    pub proration_date: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequest {
    pub currency: String,
    pub customer: Option<String>,
    pub customer_details: Option<PostTaxCalculationsRequestCustomerDetails>,
    pub expand: Option<Vec<String>>,
    pub line_items: Vec<PostTaxCalculationsRequestLineItemsItem>,
    pub ship_from_details: Option<PostTaxCalculationsRequestShipFromDetails>,
    pub shipping_cost: Option<PostTaxCalculationsRequestShippingCost>,
    pub tax_date: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequestAddress {
    pub city: Option<PostAccountsRequestPaymentsPricing>,
    pub country: String,
    pub line1: Option<PostAccountsRequestPaymentsPricing>,
    pub line2: Option<PostAccountsRequestPaymentsPricing>,
    pub postal_code: Option<PostAccountsRequestPaymentsPricing>,
    pub state: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequestCustomerDetails {
    pub address: Option<PostTaxCalculationsRequestAddress>,
    pub address_source: Option<String>,
    pub ip_address: Option<String>,
    pub tax_ids: Option<Vec<PostCustomersRequestTaxIdDataItem>>,
    pub taxability_override: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequestLineItemsItem {
    pub amount: i32,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub product: Option<String>,
    pub quantity: Option<i32>,
    pub reference: Option<String>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequestShipFromDetails {
    pub address: DefaultPostTaxCalculationsRequestAddress,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxCalculationsRequestShippingCost {
    pub amount: Option<i32>,
    pub shipping_rate: Option<String>,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxIdsRequest {
    pub expand: Option<Vec<String>>,
    pub owner: Option<PostTaxIdsRequestOwner>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxIdsRequestOwner {
    pub account: Option<String>,
    pub customer: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRatesRequest {
    pub active: Option<bool>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub display_name: String,
    pub expand: Option<Vec<String>>,
    pub inclusive: bool,
    pub jurisdiction: Option<String>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub percentage: f32,
    pub state: Option<String>,
    pub tax_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRatesTaxRateRequest {
    pub active: Option<bool>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub display_name: Option<String>,
    pub expand: Option<Vec<String>>,
    pub jurisdiction: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub state: Option<String>,
    pub tax_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsIdRequest {
    pub active_from: Option<PostTaxRegistrationsIdRequestActiveFrom>,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<PostTaxRegistrationsIdRequestExpiresAt>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTaxRegistrationsIdRequestActiveFrom {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTaxRegistrationsIdRequestExpiresAt {
    Variant1(String),
    Variant2(i32),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequest {
    pub active_from: PostTaxRegistrationsRequestActiveFrom,
    pub country: String,
    pub country_options: PostTaxRegistrationsRequestCountryOptions,
    pub expand: Option<Vec<String>>,
    pub expires_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTaxRegistrationsRequestActiveFrom {
    Variant1(String),
    Variant2(i32),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestAe {
    pub standard: Option<PostTaxRegistrationsRequestStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestAm {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestAt {
    pub standard: Option<DefaultPostTaxRegistrationsRequestStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestCa {
    pub province_standard: Option<PostTaxRegistrationsRequestProvinceStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestCountryOptions {
    pub ae: Option<PostTaxRegistrationsRequestAe>,
    pub al: Option<PostTaxRegistrationsRequestAe>,
    pub am: Option<PostTaxRegistrationsRequestAm>,
    pub ao: Option<PostTaxRegistrationsRequestAe>,
    pub at: Option<PostTaxRegistrationsRequestAt>,
    pub au: Option<PostTaxRegistrationsRequestAe>,
    pub aw: Option<PostTaxRegistrationsRequestAe>,
    pub az: Option<PostTaxRegistrationsRequestAm>,
    pub ba: Option<PostTaxRegistrationsRequestAe>,
    pub bb: Option<PostTaxRegistrationsRequestAe>,
    pub bd: Option<PostTaxRegistrationsRequestAe>,
    pub be: Option<PostTaxRegistrationsRequestAt>,
    pub bf: Option<PostTaxRegistrationsRequestAe>,
    pub bg: Option<PostTaxRegistrationsRequestAt>,
    pub bh: Option<PostTaxRegistrationsRequestAe>,
    pub bj: Option<PostTaxRegistrationsRequestAm>,
    pub bs: Option<PostTaxRegistrationsRequestAe>,
    pub by: Option<PostTaxRegistrationsRequestAm>,
    pub ca: Option<PostTaxRegistrationsRequestCa>,
    pub cd: Option<PostTaxRegistrationsRequestAe>,
    pub ch: Option<PostTaxRegistrationsRequestAe>,
    pub cl: Option<PostTaxRegistrationsRequestAm>,
    pub cm: Option<PostTaxRegistrationsRequestAm>,
    pub co: Option<PostTaxRegistrationsRequestAm>,
    pub cr: Option<PostTaxRegistrationsRequestAm>,
    pub cv: Option<PostTaxRegistrationsRequestAm>,
    pub cy: Option<PostTaxRegistrationsRequestAt>,
    pub cz: Option<PostTaxRegistrationsRequestAt>,
    pub de: Option<PostTaxRegistrationsRequestAt>,
    pub dk: Option<PostTaxRegistrationsRequestAt>,
    pub ec: Option<PostTaxRegistrationsRequestAm>,
    pub ee: Option<PostTaxRegistrationsRequestAt>,
    pub eg: Option<PostTaxRegistrationsRequestAm>,
    pub es: Option<PostTaxRegistrationsRequestAt>,
    pub et: Option<PostTaxRegistrationsRequestAe>,
    pub fi: Option<PostTaxRegistrationsRequestAt>,
    pub fr: Option<PostTaxRegistrationsRequestAt>,
    pub gb: Option<PostTaxRegistrationsRequestAe>,
    pub ge: Option<PostTaxRegistrationsRequestAm>,
    pub gn: Option<PostTaxRegistrationsRequestAe>,
    pub gr: Option<PostTaxRegistrationsRequestAt>,
    pub hr: Option<PostTaxRegistrationsRequestAt>,
    pub hu: Option<PostTaxRegistrationsRequestAt>,
    pub id: Option<PostTaxRegistrationsRequestAm>,
    pub ie: Option<PostTaxRegistrationsRequestAt>,
    #[serde(rename = "in")]
    pub r#in: Option<PostTaxRegistrationsRequestAm>,
    pub is: Option<PostTaxRegistrationsRequestAe>,
    pub it: Option<PostTaxRegistrationsRequestAt>,
    pub jp: Option<PostTaxRegistrationsRequestAe>,
    pub ke: Option<PostTaxRegistrationsRequestAm>,
    pub kg: Option<PostTaxRegistrationsRequestAm>,
    pub kh: Option<PostTaxRegistrationsRequestAm>,
    pub kr: Option<PostTaxRegistrationsRequestAm>,
    pub kz: Option<PostTaxRegistrationsRequestAm>,
    pub la: Option<PostTaxRegistrationsRequestAm>,
    pub lt: Option<PostTaxRegistrationsRequestAt>,
    pub lu: Option<PostTaxRegistrationsRequestAt>,
    pub lv: Option<PostTaxRegistrationsRequestAt>,
    pub ma: Option<PostTaxRegistrationsRequestAm>,
    pub md: Option<PostTaxRegistrationsRequestAm>,
    pub me: Option<PostTaxRegistrationsRequestAe>,
    pub mk: Option<PostTaxRegistrationsRequestAe>,
    pub mr: Option<PostTaxRegistrationsRequestAe>,
    pub mt: Option<PostTaxRegistrationsRequestAt>,
    pub mx: Option<PostTaxRegistrationsRequestAm>,
    pub my: Option<PostTaxRegistrationsRequestAm>,
    pub ng: Option<PostTaxRegistrationsRequestAm>,
    pub nl: Option<PostTaxRegistrationsRequestAt>,
    pub no: Option<PostTaxRegistrationsRequestAe>,
    pub np: Option<PostTaxRegistrationsRequestAm>,
    pub nz: Option<PostTaxRegistrationsRequestAe>,
    pub om: Option<PostTaxRegistrationsRequestAe>,
    pub pe: Option<PostTaxRegistrationsRequestAm>,
    pub ph: Option<PostTaxRegistrationsRequestAm>,
    pub pl: Option<PostTaxRegistrationsRequestAt>,
    pub pt: Option<PostTaxRegistrationsRequestAt>,
    pub ro: Option<PostTaxRegistrationsRequestAt>,
    pub rs: Option<PostTaxRegistrationsRequestAe>,
    pub ru: Option<PostTaxRegistrationsRequestAm>,
    pub sa: Option<PostTaxRegistrationsRequestAm>,
    pub se: Option<PostTaxRegistrationsRequestAt>,
    pub sg: Option<PostTaxRegistrationsRequestAe>,
    pub si: Option<PostTaxRegistrationsRequestAt>,
    pub sk: Option<PostTaxRegistrationsRequestAt>,
    pub sn: Option<PostTaxRegistrationsRequestAm>,
    pub sr: Option<PostTaxRegistrationsRequestAe>,
    pub th: Option<PostTaxRegistrationsRequestTh>,
    pub tj: Option<PostTaxRegistrationsRequestAm>,
    pub tr: Option<PostTaxRegistrationsRequestAm>,
    pub tw: Option<PostTaxRegistrationsRequestAm>,
    pub tz: Option<PostTaxRegistrationsRequestAm>,
    pub ua: Option<PostTaxRegistrationsRequestAm>,
    pub ug: Option<PostTaxRegistrationsRequestAm>,
    pub us: Option<PostTaxRegistrationsRequestUs>,
    pub uy: Option<PostTaxRegistrationsRequestAe>,
    pub uz: Option<PostTaxRegistrationsRequestAm>,
    pub vn: Option<PostTaxRegistrationsRequestAm>,
    pub za: Option<PostTaxRegistrationsRequestAe>,
    pub zm: Option<PostTaxRegistrationsRequestAm>,
    pub zw: Option<PostTaxRegistrationsRequestAe>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestElectionsItem {
    pub jurisdiction: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestLocalAmusementTax {
    pub jurisdiction: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestLocalLeaseTax {
    pub jurisdiction: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestProvinceStandard {
    pub province: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestStandard {
    pub place_of_supply_scheme: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestStateSalesTax {
    pub elections: Vec<PostTaxRegistrationsRequestElectionsItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestTh {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxRegistrationsRequestUs {
    pub local_amusement_tax: Option<PostTaxRegistrationsRequestLocalAmusementTax>,
    pub local_lease_tax: Option<PostTaxRegistrationsRequestLocalLeaseTax>,
    pub state: String,
    pub state_sales_tax: Option<PostTaxRegistrationsRequestStateSalesTax>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxSettingsRequest {
    pub defaults: Option<PostTaxSettingsRequestDefaults>,
    pub expand: Option<Vec<String>>,
    pub head_office: Option<PostTaxSettingsRequestHeadOffice>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxSettingsRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxSettingsRequestDefaults {
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxSettingsRequestHeadOffice {
    pub address: PostTaxSettingsRequestAddress,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxTransactionsCreateFromCalculationRequest {
    pub calculation: String,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub posted_at: Option<i32>,
    pub reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxTransactionsCreateReversalRequest {
    pub expand: Option<Vec<String>>,
    pub flat_amount: Option<i32>,
    pub line_items: Option<Vec<PostTaxTransactionsCreateReversalRequestLineItemsItem>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub mode: String,
    pub original_transaction: String,
    pub reference: String,
    pub shipping_cost: Option<PostTaxTransactionsCreateReversalRequestShippingCost>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxTransactionsCreateReversalRequestLineItemsItem {
    pub amount: i32,
    pub amount_tax: i32,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub original_line_item: String,
    pub quantity: Option<i32>,
    pub reference: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTaxTransactionsCreateReversalRequestShippingCost {
    pub amount: i32,
    pub amount_tax: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequest {
    pub bbpos_wisepad3: Option<PostTerminalConfigurationsConfigurationRequestBbposWisepad3>,
    pub bbpos_wisepos_e: Option<PostTerminalConfigurationsConfigurationRequestBbposWiseposE>,
    pub expand: Option<Vec<String>>,
    pub name: Option<String>,
    pub offline: Option<PostTerminalConfigurationsRequestOffline>,
    pub reboot_window: Option<PostTerminalConfigurationsConfigurationRequestRebootWindow>,
    pub stripe_s700: Option<PostTerminalConfigurationsConfigurationRequestStripeS700>,
    pub tipping: Option<PostTerminalConfigurationsRequestTipping>,
    pub verifone_p400: Option<PostTerminalConfigurationsConfigurationRequestVerifoneP400>,
    pub wifi: Option<PostTerminalConfigurationsRequestWifi>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsConfigurationRequestBbposWisepad3 {
    BbposWisePad3(PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsConfigurationRequestBbposWiseposE {
    BbposWisePose(PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsConfigurationRequestRebootWindow {
    RebootWindow(PostTerminalConfigurationsConfigurationRequestRebootWindowObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequestRebootWindowObject {
    pub end_hour: i32,
    pub start_hour: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsConfigurationRequestStripeS700 {
    StripeS700(PostTerminalConfigurationsConfigurationRequestStripeS700Object),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequestStripeS700Object {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsConfigurationRequestVerifoneP400 {
    VerifoneP400(PostTerminalConfigurationsConfigurationRequestVerifoneP400Object),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsConfigurationRequestVerifoneP400Object {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequest {
    pub bbpos_wisepad3: Option<PostTerminalConfigurationsRequestBbposWisepad3>,
    pub bbpos_wisepos_e: Option<PostTerminalConfigurationsRequestBbposWiseposE>,
    pub expand: Option<Vec<String>>,
    pub name: Option<String>,
    pub offline: Option<PostTerminalConfigurationsRequestOffline>,
    pub reboot_window: Option<PostTerminalConfigurationsRequestRebootWindow>,
    pub stripe_s700: Option<PostTerminalConfigurationsRequestStripeS700>,
    pub tipping: Option<PostTerminalConfigurationsRequestTipping>,
    pub verifone_p400: Option<PostTerminalConfigurationsRequestVerifoneP400>,
    pub wifi: Option<PostTerminalConfigurationsRequestWifi>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestBbposWisepad3 {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestBbposWiseposE {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsRequestOffline {
    Offline(PostTerminalConfigurationsRequestOfflineObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestOfflineObject {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestRebootWindow {
    pub end_hour: i32,
    pub start_hour: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestStripeS700 {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsRequestTipping {
    Tipping(PostTerminalConfigurationsRequestTippingObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestTippingObject {
    pub aed: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub aud: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub bgn: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub cad: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub chf: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub czk: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub dkk: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub eur: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub gbp: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub gip: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub hkd: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub huf: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub jpy: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub mxn: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub myr: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub nok: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub nzd: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub pln: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub ron: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub sek: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub sgd: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
    pub usd: Option<PostTerminalConfigurationsRequestTippingObjectAed>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestTippingObjectAed {
    pub fixed_amounts: Option<Vec<i32>>,
    pub percentages: Option<Vec<i32>>,
    pub smart_tip_threshold: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestVerifoneP400 {
    pub splashscreen: Option<PostAccountsRequestSupportUrl>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalConfigurationsRequestWifi {
    Wifi(PostTerminalConfigurationsRequestWifiObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestWifiObject {
    pub enterprise_eap_peap: Option<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap>,
    pub enterprise_eap_tls: Option<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls>,
    pub personal_psk: Option<PostTerminalConfigurationsRequestWifiObjectPersonalPsk>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap {
    pub ca_certificate_file: Option<String>,
    pub password: String,
    pub ssid: String,
    pub username: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls {
    pub ca_certificate_file: Option<String>,
    pub client_certificate_file: String,
    pub private_key_file: String,
    pub private_key_file_password: Option<String>,
    pub ssid: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConfigurationsRequestWifiObjectPersonalPsk {
    pub password: String,
    pub ssid: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalConnectionTokensRequest {
    pub expand: Option<Vec<String>>,
    pub location: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsLocationRequest {
    pub address: Option<PostTerminalLocationsLocationRequestAddress>,
    pub address_kana: Option<PostTerminalLocationsRequestAddressKana>,
    pub address_kanji: Option<PostTerminalLocationsRequestAddressKanji>,
    pub configuration_overrides: Option<PostTerminalLocationsLocationRequestConfigurationOverrides>,
    pub display_name: Option<PostTerminalLocationsLocationRequestDisplayName>,
    pub display_name_kana: Option<PostTerminalLocationsLocationRequestDisplayNameKana>,
    pub display_name_kanji: Option<PostTerminalLocationsLocationRequestDisplayNameKanji>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub phone: Option<PostTerminalLocationsLocationRequestPhone>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsLocationRequestAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalLocationsLocationRequestConfigurationOverrides {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalLocationsLocationRequestDisplayName {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalLocationsLocationRequestDisplayNameKana {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalLocationsLocationRequestDisplayNameKanji {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalLocationsLocationRequestPhone {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsRequest {
    pub address: Option<PostTerminalLocationsRequestAddress>,
    pub address_kana: Option<PostTerminalLocationsRequestAddressKana>,
    pub address_kanji: Option<PostTerminalLocationsRequestAddressKanji>,
    pub configuration_overrides: Option<String>,
    pub display_name: Option<String>,
    pub display_name_kana: Option<String>,
    pub display_name_kanji: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsRequestAddress {
    pub city: Option<String>,
    pub country: String,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsRequestAddressKana {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalLocationsRequestAddressKanji {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalOnboardingLinksRequest {
    pub expand: Option<Vec<String>>,
    pub link_options: PostTerminalOnboardingLinksRequestLinkOptions,
    pub link_type: String,
    pub on_behalf_of: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalOnboardingLinksRequestAppleTermsAndConditions {
    pub allow_relinking: Option<bool>,
    pub merchant_display_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalOnboardingLinksRequestLinkOptions {
    pub apple_terms_and_conditions:
        Option<PostTerminalOnboardingLinksRequestAppleTermsAndConditions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequest {
    pub expand: Option<Vec<String>>,
    pub inputs: Vec<PostTerminalReadersReaderCollectInputsRequestInputsItem>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequestInputsItem {
    pub custom_text: PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText,
    pub required: Option<bool>,
    pub selection: Option<PostTerminalReadersReaderCollectInputsRequestInputsItemSelection>,
    pub toggles: Option<Vec<PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem {
    pub id: String,
    pub style: Option<String>,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText {
    pub description: Option<String>,
    pub skip_button: Option<String>,
    pub submit_button: Option<String>,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequestInputsItemSelection {
    pub choices: Vec<PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem {
    pub default_value: Option<String>,
    pub description: Option<String>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectPaymentMethodRequest {
    pub collect_config: Option<PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig>,
    pub expand: Option<Vec<String>>,
    pub payment_intent: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig {
    pub allow_redisplay: Option<String>,
    pub enable_customer_cancellation: Option<bool>,
    pub skip_tipping: Option<bool>,
    pub tipping: Option<PostTerminalReadersReaderCollectPaymentMethodRequestTipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderCollectPaymentMethodRequestTipping {
    pub amount_eligible: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderConfirmPaymentIntentRequest {
    pub confirm_config: Option<PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig>,
    pub expand: Option<Vec<String>>,
    pub payment_intent: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig {
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderProcessPaymentIntentRequest {
    pub expand: Option<Vec<String>>,
    pub payment_intent: String,
    pub process_config: Option<PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig {
    pub allow_redisplay: Option<String>,
    pub enable_customer_cancellation: Option<bool>,
    pub return_url: Option<String>,
    pub skip_tipping: Option<bool>,
    pub tipping: Option<PostTerminalReadersReaderCollectPaymentMethodRequestTipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderProcessSetupIntentRequest {
    pub allow_redisplay: String,
    pub expand: Option<Vec<String>>,
    pub process_config: Option<PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig>,
    pub setup_intent: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig {
    pub enable_customer_cancellation: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderRefundPaymentRequest {
    pub amount: Option<i32>,
    pub charge: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub payment_intent: Option<String>,
    pub refund_application_fee: Option<bool>,
    pub refund_payment_config:
        Option<PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig>,
    pub reverse_transfer: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig {
    pub enable_customer_cancellation: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderRequest {
    pub expand: Option<Vec<String>>,
    pub label: Option<PostTerminalReadersReaderRequestLabel>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTerminalReadersReaderRequestLabel {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderSetReaderDisplayRequest {
    pub cart: Option<PostTerminalReadersReaderSetReaderDisplayRequestCart>,
    pub expand: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderSetReaderDisplayRequestCart {
    pub currency: String,
    pub line_items: Vec<PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem>,
    pub tax: Option<i32>,
    pub total: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersReaderSetReaderDisplayRequestLineItemsItem {
    pub amount: i32,
    pub description: String,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTerminalReadersRequest {
    pub expand: Option<Vec<String>>,
    pub label: Option<String>,
    pub location: Option<String>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub registration_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequest {
    pub expand: Option<Vec<String>>,
    pub payment_method: Option<String>,
    pub payment_method_data: Option<PostTestHelpersConfirmationTokensRequestPaymentMethodData>,
    pub payment_method_options:
        Option<PostTestHelpersConfirmationTokensRequestPaymentMethodOptions>,
    pub return_url: Option<String>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<PostTestHelpersConfirmationTokensRequestShipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequestCard {
    pub installments: Option<PostTestHelpersConfirmationTokensRequestInstallments>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequestInstallments {
    pub plan: PostInvoicesRequestCardObjectPlanObject,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequestPaymentMethodData {
    pub acss_debit: Option<PostPaymentIntentsRequestAcssDebit>,
    pub affirm: Option<serde_json::Value>,
    pub afterpay_clearpay: Option<serde_json::Value>,
    pub alipay: Option<serde_json::Value>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<serde_json::Value>,
    pub amazon_pay: Option<serde_json::Value>,
    pub au_becs_debit: Option<PostPaymentIntentsRequestAuBecsDebit>,
    pub bacs_debit: Option<PostPaymentIntentsRequestBacsDebit>,
    pub bancontact: Option<serde_json::Value>,
    pub billie: Option<serde_json::Value>,
    pub billing_details: Option<PostPaymentIntentsRequestBillingDetails>,
    pub blik: Option<serde_json::Value>,
    pub boleto: Option<PostPaymentIntentsRequestBoleto>,
    pub cashapp: Option<serde_json::Value>,
    pub crypto: Option<serde_json::Value>,
    pub customer_balance: Option<serde_json::Value>,
    pub eps: Option<PostPaymentIntentsRequestEps>,
    pub fpx: Option<PostPaymentIntentsRequestFpx>,
    pub giropay: Option<serde_json::Value>,
    pub grabpay: Option<serde_json::Value>,
    pub ideal: Option<PostPaymentIntentsRequestIdeal>,
    pub interac_present: Option<serde_json::Value>,
    pub kakao_pay: Option<serde_json::Value>,
    pub klarna: Option<PostPaymentIntentsRequestKlarna>,
    pub konbini: Option<serde_json::Value>,
    pub kr_card: Option<serde_json::Value>,
    pub link: Option<serde_json::Value>,
    pub mb_way: Option<serde_json::Value>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    pub mobilepay: Option<serde_json::Value>,
    pub multibanco: Option<serde_json::Value>,
    pub naver_pay: Option<PostPaymentIntentsRequestNaverPay>,
    pub nz_bank_account: Option<PostPaymentIntentsRequestNzBankAccount>,
    pub oxxo: Option<serde_json::Value>,
    pub p24: Option<PostPaymentIntentsRequestP24>,
    pub pay_by_bank: Option<serde_json::Value>,
    pub payco: Option<serde_json::Value>,
    pub paynow: Option<serde_json::Value>,
    pub paypal: Option<serde_json::Value>,
    pub pix: Option<serde_json::Value>,
    pub promptpay: Option<serde_json::Value>,
    pub radar_options: Option<PostPaymentIntentsRequestRadarOptions>,
    pub revolut_pay: Option<serde_json::Value>,
    pub samsung_pay: Option<serde_json::Value>,
    pub satispay: Option<serde_json::Value>,
    pub sepa_debit: Option<PostPaymentIntentsRequestSepaDebit>,
    pub sofort: Option<PostPaymentIntentsRequestSofort>,
    pub swish: Option<serde_json::Value>,
    pub twint: Option<serde_json::Value>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PostPaymentIntentsRequestUsBankAccount>,
    pub wechat_pay: Option<serde_json::Value>,
    pub zip: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequestPaymentMethodOptions {
    pub card: Option<PostTestHelpersConfirmationTokensRequestCard>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersConfirmationTokensRequestShipping {
    pub address: PostChargesRequestAddress,
    pub name: String,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersCustomersCustomerFundCashBalanceRequest {
    pub amount: i32,
    pub currency: String,
    pub expand: Option<Vec<String>>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest {
    pub capture_amount: Option<i32>,
    pub close_authorization: Option<bool>,
    pub expand: Option<Vec<String>>,
    pub purchase_details:
        Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet {
    pub cardholder_prompt_data:
        Option<PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData>,
    pub purchase_type: Option<String>,
    pub reported_breakdown: Option<PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown>,
    pub service_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight {
    pub departure_at: Option<i32>,
    pub passenger_name: Option<String>,
    pub refundable: Option<bool>,
    pub segments:
        Option<Vec<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem>>,
    pub travel_agency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel {
    pub industry_product_code: Option<String>,
    pub quantity_decimal: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub unit: Option<String>,
    pub unit_cost_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging {
    pub check_in_at: Option<i32>,
    pub nights: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails {
    pub fleet: Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet>,
    pub flight: Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFlight>,
    pub fuel: Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel>,
    pub lodging: Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestLodging>,
    pub receipt:
        Option<Vec<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem>>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem {
    pub description: Option<String>,
    pub quantity: Option<String>,
    pub total: Option<i32>,
    pub unit_cost: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestSegmentsItem {
    pub arrival_airport_code: Option<String>,
    pub carrier: Option<String>,
    pub departure_airport_code: Option<String>,
    pub flight_number: Option<String>,
    pub service_class: Option<String>,
    pub stopover_allowed: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest {
    pub expand: Option<Vec<String>>,
    pub final_amount: i32,
    pub fleet: Option<PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet>,
    pub fuel: Option<DefaultPostTestHelpersIssuingAuthorizationsRequestFuel>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequestFleet {
    pub cardholder_prompt_data:
        Option<PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData>,
    pub purchase_type: Option<String>,
    pub reported_breakdown: Option<PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown>,
    pub service_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest {
    pub confirmed: bool,
    pub expand: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest {
    pub expand: Option<Vec<String>>,
    pub increment_amount: i32,
    pub is_amount_controllable: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest {
    pub expand: Option<Vec<String>>,
    pub reverse_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequest {
    pub amount: Option<i32>,
    pub amount_details: Option<PostTestHelpersIssuingAuthorizationsRequestAmountDetails>,
    pub authorization_method: Option<String>,
    pub card: String,
    pub currency: Option<String>,
    pub expand: Option<Vec<String>>,
    pub fleet: Option<PostTestHelpersIssuingAuthorizationsRequestFleet>,
    pub fraud_disputability_likelihood: Option<String>,
    pub fuel: Option<DefaultPostTestHelpersIssuingAuthorizationsRequestFuel>,
    pub is_amount_controllable: Option<bool>,
    pub merchant_amount: Option<i32>,
    pub merchant_currency: Option<String>,
    pub merchant_data: Option<PostTestHelpersIssuingAuthorizationsRequestMerchantData>,
    pub network_data: Option<PostTestHelpersIssuingAuthorizationsRequestNetworkData>,
    pub risk_assessment: Option<PostTestHelpersIssuingAuthorizationsRequestRiskAssessment>,
    pub verification_data: Option<PostTestHelpersIssuingAuthorizationsRequestVerificationData>,
    pub wallet: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestAmountDetails {
    pub atm_fee: Option<i32>,
    pub cashback_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption {
    pub claimed_by: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk {
    pub invalid_account_number_decline_rate_past_hour: Option<i32>,
    pub invalid_credentials_decline_rate_past_hour: Option<i32>,
    pub risk_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData {
    pub driver_id: Option<String>,
    pub odometer: Option<i32>,
    pub unspecified_id: Option<String>,
    pub user_id: Option<String>,
    pub vehicle_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestFleet {
    pub cardholder_prompt_data:
        Option<PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData>,
    pub purchase_type: Option<String>,
    pub reported_breakdown: Option<PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown>,
    pub service_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestFraudRisk {
    pub level: String,
    pub score: Option<f32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestFuel {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestMerchantData {
    pub category: Option<String>,
    pub city: Option<String>,
    pub country: Option<String>,
    pub name: Option<String>,
    pub network_id: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub terminal_id: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk {
    pub dispute_rate: Option<i32>,
    pub risk_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestNetworkData {
    pub acquiring_institution_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestNonFuel {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown {
    pub fuel: Option<PostTestHelpersIssuingAuthorizationsRequestFuel>,
    pub non_fuel: Option<PostTestHelpersIssuingAuthorizationsRequestNonFuel>,
    pub tax: Option<PostTestHelpersIssuingAuthorizationsRequestTax>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestRiskAssessment {
    pub card_testing_risk: Option<PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk>,
    pub fraud_risk: Option<PostTestHelpersIssuingAuthorizationsRequestFraudRisk>,
    pub merchant_dispute_risk:
        Option<PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestTax {
    pub local_amount_decimal: Option<String>,
    pub national_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestThreeDSecure {
    pub result: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingAuthorizationsRequestVerificationData {
    pub address_line1_check: Option<String>,
    pub address_postal_code_check: Option<String>,
    pub authentication_exemption:
        Option<PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption>,
    pub cvc_check: Option<String>,
    pub expiry_check: Option<String>,
    pub three_d_secure: Option<PostTestHelpersIssuingAuthorizationsRequestThreeDSecure>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest {
    pub expand: Option<Vec<String>>,
    pub rejection_reasons: PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequestRejectionReasons
{
    pub card_logo: Option<Vec<String>>,
    pub carrier_text: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingSettlementsRequest {
    pub bin: String,
    pub clearing_date: i32,
    pub currency: String,
    pub expand: Option<Vec<String>>,
    pub interchange_fees_amount: Option<i32>,
    pub net_total_amount: i32,
    pub network: Option<String>,
    pub network_settlement_identifier: Option<String>,
    pub transaction_amount: Option<i32>,
    pub transaction_count: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingTransactionsCreateForceCaptureRequest {
    pub amount: i32,
    pub card: String,
    pub currency: Option<String>,
    pub expand: Option<Vec<String>>,
    pub merchant_data: Option<PostTestHelpersIssuingAuthorizationsRequestMerchantData>,
    pub purchase_details:
        Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest {
    pub amount: i32,
    pub card: String,
    pub currency: Option<String>,
    pub expand: Option<Vec<String>>,
    pub merchant_data: Option<PostTestHelpersIssuingAuthorizationsRequestMerchantData>,
    pub purchase_details:
        Option<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersIssuingTransactionsTransactionRefundRequest {
    pub expand: Option<Vec<String>>,
    pub refund_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest {
    pub amount_tip: Option<i32>,
    pub card: Option<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard>,
    pub card_present:
        Option<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent>,
    pub expand: Option<Vec<String>>,
    pub interac_present:
        Option<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard {
    pub cvc: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent {
    pub number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent {
    pub number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest {
    pub expand: Option<Vec<String>>,
    pub skip_non_required_inputs: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTestClocksRequest {
    pub expand: Option<Vec<String>>,
    pub frozen_time: i32,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTestClocksTestClockAdvanceRequest {
    pub expand: Option<Vec<String>>,
    pub frozen_time: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryInboundTransfersIdFailRequest {
    pub expand: Option<Vec<String>>,
    pub failure_details: Option<PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryInboundTransfersIdFailRequestFailureDetails {
    pub code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdRequest {
    pub expand: Option<Vec<String>>,
    pub tracking_details: PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdRequestAch {
    pub trace_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails {
    pub ach: Option<PostTestHelpersTreasuryOutboundPaymentsIdRequestAch>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_domestic_wire: Option<PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire {
    pub chips: Option<String>,
    pub imad: Option<String>,
    pub omad: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest {
    pub expand: Option<Vec<String>>,
    pub returned_details:
        Option<PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundPaymentsIdReturnRequestReturnedDetails {
    pub code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest {
    pub expand: Option<Vec<String>>,
    pub returned_details: Option<
        PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails,
    >,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequestReturnedDetails {
    pub code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryReceivedCreditsRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub financial_account: String,
    pub initiating_payment_method_details:
        Option<PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails>,
    pub network: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails {
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount {
    pub account_holder_name: Option<String>,
    pub account_number: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTestHelpersTreasuryReceivedDebitsRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub financial_account: String,
    pub initiating_payment_method_details:
        Option<PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails>,
    pub network: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequest {
    pub account: Option<PostTokensRequestAccount>,
    pub bank_account: Option<PostTokensRequestBankAccount>,
    pub card: Option<PostTokensRequestCard>,
    pub customer: Option<String>,
    pub cvc_update: Option<PostTokensRequestCvcUpdate>,
    pub expand: Option<Vec<String>>,
    pub person: Option<PostTokensRequestPerson>,
    pub pii: Option<PostTokensRequestPii>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestAccount {
    pub business_type: Option<String>,
    pub company: Option<PostTokensRequestCompany>,
    pub individual: Option<PostTokensRequestIndividual>,
    pub tos_shown_and_accepted: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestAdditionalTosAcceptances {
    pub account: Option<PostAccountsRequestTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestBankAccount {
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub account_number: String,
    pub account_type: Option<String>,
    pub country: String,
    pub currency: Option<String>,
    pub payment_method: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTokensRequestCard {
    CreditCardSpecs(PostTokensRequestCardObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestCardObject {
    pub address_city: Option<String>,
    pub address_country: Option<String>,
    pub address_line1: Option<String>,
    pub address_line2: Option<String>,
    pub address_state: Option<String>,
    pub address_zip: Option<String>,
    pub currency: Option<String>,
    pub cvc: Option<String>,
    pub exp_month: String,
    pub exp_year: String,
    pub name: Option<String>,
    pub networks: Option<PostTokensRequestCardObjectNetworks>,
    pub number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestCardObjectNetworks {
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestCompany {
    pub address: Option<PostAccountsRequestAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub directors_provided: Option<bool>,
    pub directorship_declaration: Option<PostAccountsRequestDirectorshipDeclaration>,
    pub executives_provided: Option<bool>,
    pub export_license_id: Option<String>,
    pub export_purpose_code: Option<String>,
    pub name: Option<String>,
    pub name_kana: Option<String>,
    pub name_kanji: Option<String>,
    pub owners_provided: Option<bool>,
    pub ownership_declaration: Option<PostAccountsRequestOwnershipDeclaration>,
    pub ownership_declaration_shown_and_signed: Option<bool>,
    pub ownership_exemption_reason: Option<String>,
    pub phone: Option<String>,
    pub registration_date: Option<PostAccountsRequestRegistrationDate>,
    pub registration_number: Option<String>,
    pub representative_declaration: Option<PostAccountsRequestRepresentativeDeclaration>,
    pub structure: Option<String>,
    pub tax_id: Option<String>,
    pub tax_id_registrar: Option<String>,
    pub vat_id: Option<String>,
    pub verification: Option<PostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestCvcUpdate {
    pub cvc: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestDocuments {
    pub company_authorization: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
    pub passport: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
    pub visa: Option<PostAccountsAccountPeopleRequestCompanyAuthorization>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestIndividual {
    pub address: Option<PostAccountsRequestSupportAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub dob: Option<PostAccountsRequestDob>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<PostAccountsRequestFullNameAliases>,
    pub gender: Option<String>,
    pub id_number: Option<String>,
    pub id_number_secondary: Option<String>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<PostAccountsRequestSupportAddress>,
    pub relationship: Option<PostAccountsRequestRelationship>,
    pub ssn_last_4: Option<String>,
    pub verification: Option<DefaultPostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestPerson {
    pub additional_tos_acceptances: Option<PostTokensRequestAdditionalTosAcceptances>,
    pub address: Option<PostAccountsRequestAddress>,
    pub address_kana: Option<PostAccountsRequestAddressKana>,
    pub address_kanji: Option<PostAccountsRequestAddressKanji>,
    pub dob: Option<PostAccountsRequestDob>,
    pub documents: Option<PostTokensRequestDocuments>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<PostAccountsAccountRequestDefaultAccountTaxIds>,
    pub gender: Option<String>,
    pub id_number: Option<String>,
    pub id_number_secondary: Option<String>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadata>,
    pub nationality: Option<String>,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<PostAccountsRequestSupportAddress>,
    pub relationship: Option<PostTokensRequestRelationship>,
    pub ssn_last_4: Option<String>,
    pub us_cfpb_data: Option<PostTokensRequestUsCfpbData>,
    pub verification: Option<DefaultPostAccountsRequestVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestPii {
    pub id_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestRelationship {
    pub authorizer: Option<bool>,
    pub director: Option<bool>,
    pub executive: Option<bool>,
    pub legal_guardian: Option<bool>,
    pub owner: Option<bool>,
    pub percent_ownership: Option<PostAccountsRequestPercentOwnership>,
    pub representative: Option<bool>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTokensRequestUsCfpbData {
    pub ethnicity_details: Option<PostAccountsAccountPeopleRequestEthnicityDetails>,
    pub race_details: Option<PostAccountsAccountPeopleRequestRaceDetails>,
    pub self_identified_gender: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTopupsRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub source: Option<String>,
    pub statement_descriptor: Option<String>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTopupsTopupRequest {
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTransfersIdReversalsRequest {
    pub amount: Option<i32>,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub refund_application_fee: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTransfersRequest {
    pub amount: Option<i32>,
    pub currency: String,
    pub description: Option<String>,
    pub destination: String,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub source_transaction: Option<String>,
    pub source_type: Option<String>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryCreditReversalsRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub received_credit: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryDebitReversalsRequest {
    pub expand: Option<Vec<String>>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub received_debit: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountCloseRequest {
    pub expand: Option<Vec<String>>,
    pub forwarding_settings:
        Option<PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest {
    pub card_issuing:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing>,
    pub deposit_insurance:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance>,
    pub expand: Option<Vec<String>>,
    pub financial_addresses:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses>,
    pub inbound_transfers:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers>,
    pub intra_stripe_flows:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows>,
    pub outbound_payments:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments>,
    pub outbound_transfers:
        Option<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestDepositInsurance {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestFinancialAddresses {
    pub aba: Option<PostTreasuryFinancialAccountsRequestAba>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestInboundTransfers {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundPayments {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
    pub us_domestic_wire: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestOutboundTransfers {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
    pub us_domestic_wire: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountRequest {
    pub expand: Option<Vec<String>>,
    pub features: Option<PostTreasuryFinancialAccountsFinancialAccountRequestFeatures>,
    pub forwarding_settings:
        Option<PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub nickname: Option<PostTreasuryFinancialAccountsRequestNickname>,
    pub platform_restrictions: Option<PostTreasuryFinancialAccountsRequestPlatformRestrictions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountRequestFeatures {
    pub card_issuing: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub deposit_insurance: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub financial_addresses: Option<PostTreasuryFinancialAccountsRequestFinancialAddresses>,
    pub inbound_transfers: Option<PostTreasuryFinancialAccountsRequestInboundTransfers>,
    pub intra_stripe_flows: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub outbound_payments: Option<PostTreasuryFinancialAccountsRequestOutboundPayments>,
    pub outbound_transfers: Option<PostTreasuryFinancialAccountsRequestOutboundTransfers>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings {
    pub financial_account: Option<String>,
    pub payment_method: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequest {
    pub expand: Option<Vec<String>>,
    pub features: Option<PostTreasuryFinancialAccountsRequestFeatures>,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub nickname: Option<PostTreasuryFinancialAccountsRequestNickname>,
    pub platform_restrictions: Option<PostTreasuryFinancialAccountsRequestPlatformRestrictions>,
    pub supported_currencies: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestAba {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestAch {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestCardIssuing {
    pub requested: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestFeatures {
    pub card_issuing: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub deposit_insurance: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub financial_addresses: Option<PostTreasuryFinancialAccountsRequestFinancialAddresses>,
    pub inbound_transfers: Option<PostTreasuryFinancialAccountsRequestInboundTransfers>,
    pub intra_stripe_flows: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
    pub outbound_payments: Option<PostTreasuryFinancialAccountsRequestOutboundPayments>,
    pub outbound_transfers: Option<PostTreasuryFinancialAccountsRequestOutboundTransfers>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestFinancialAddresses {
    pub aba: Option<PostTreasuryFinancialAccountsRequestAba>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestInboundTransfers {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTreasuryFinancialAccountsRequestNickname {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestOutboundPayments {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
    pub us_domestic_wire: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestOutboundTransfers {
    pub ach: Option<PostTreasuryFinancialAccountsRequestAch>,
    pub us_domestic_wire: Option<PostTreasuryFinancialAccountsRequestCardIssuing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryFinancialAccountsRequestPlatformRestrictions {
    pub inbound_flows: Option<String>,
    pub outbound_flows: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryInboundTransfersRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expand: Option<Vec<String>>,
    pub financial_account: String,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub origin_payment_method: String,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequest {
    pub amount: i32,
    pub currency: String,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub destination_payment_method: Option<String>,
    pub destination_payment_method_data:
        Option<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData>,
    pub destination_payment_method_options:
        Option<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions>,
    pub end_user_details: Option<PostTreasuryOutboundPaymentsRequestEndUserDetails>,
    pub expand: Option<Vec<String>>,
    pub financial_account: String,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequestBillingDetails {
    pub address: Option<PostPaymentIntentsRequestAddress>,
    pub email: Option<PostAccountsRequestSupportUrl>,
    pub name: Option<PostAccountsRequestPaymentsPricing>,
    pub phone: Option<PostAccountsRequestPaymentsPricing>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData {
    pub billing_details: Option<PostTreasuryOutboundPaymentsRequestBillingDetails>,
    pub financial_account: Option<String>,
    pub metadata: Option<PostAccountsRequestMetadataObject>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PostPaymentIntentsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions {
    pub us_bank_account: Option<PostTreasuryOutboundPaymentsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequestEndUserDetails {
    pub ip_address: Option<String>,
    pub present: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostTreasuryOutboundPaymentsRequestUsBankAccount {
    PaymentMethodOptionsParam(PostTreasuryOutboundPaymentsRequestUsBankAccountObject),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundPaymentsRequestUsBankAccountObject {
    pub network: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundTransfersRequest {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination_payment_method: Option<String>,
    pub destination_payment_method_data:
        Option<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData>,
    pub destination_payment_method_options:
        Option<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions>,
    pub expand: Option<Vec<String>>,
    pub financial_account: String,
    pub metadata: Option<PostAccountsAccountBankAccountsRequestMetadata>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData {
    pub financial_account: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions {
    pub us_bank_account: Option<PostTreasuryOutboundPaymentsRequestUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostWebhookEndpointsRequest {
    pub api_version: Option<String>,
    pub connect: Option<bool>,
    pub description: Option<PostWebhookEndpointsRequestDescription>,
    pub enabled_events: Vec<String>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PostWebhookEndpointsRequestDescription {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PostWebhookEndpointsWebhookEndpointRequest {
    pub description: Option<PostWebhookEndpointsRequestDescription>,
    pub disabled: Option<bool>,
    pub enabled_events: Option<Vec<String>>,
    pub expand: Option<Vec<String>>,
    pub metadata: Option<DefaultPostAccountsRequestMetadata>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PriceUnion {
    Variant1(String),
    Price(Price),
    DeletedPrice(DeletedPrice),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ProductOrRef {
    Variant1(String),
    ClimateProduct(ClimateProduct),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ProductUnion {
    Variant1(String),
    Product(Box<Product>),
    DeletedProduct(DeletedProduct),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromotionCodeOrRef {
    Variant1(String),
    PromotionCode(Box<PromotionCode>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromptpayUnion {
    PaymentMethodOptionsPromptpay(PaymentMethodOptionsPromptpay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum QuoteOrRef {
    Variant1(String),
    Quote(Box<Quote>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RatesProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReceiptOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RefundOrRef {
    Variant1(String),
    Refund(Box<Refund>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RefundPolicyOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundsProperty {
    pub data: Vec<Box<FeeRefund>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundsProperty2 {
    pub data: Vec<Box<Refund>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReplacedByOrRef {
    Variant1(String),
    IssuingCard(Box<IssuingCard>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReplacementForOrRef {
    Variant1(String),
    IssuingCard(Box<IssuingCard>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReversalsProperty {
    pub data: Vec<Box<TransferReversal>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReversedByOrRef {
    Variant1(String),
    Payout(Box<Payout>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReviewOrRef {
    Variant1(String),
    Review(Box<Review>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RevolutPayUnion {
    PaymentMethodOptionsRevolutPay(PaymentMethodOptionsRevolutPay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RuleOrRef {
    Variant1(String),
    Rule(Rule),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SamsungPayUnion {
    PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions(
        PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions,
    ),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SatispayUnion {
    PaymentMethodOptionsSatispay(PaymentMethodOptionsSatispay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ScheduleOrRef {
    Variant1(String),
    SubscriptionSchedule(Box<SubscriptionSchedule>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SepaDebitUnion {
    PaymentIntentPaymentMethodOptionsSepaDebit(PaymentIntentPaymentMethodOptionsSepaDebit),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SepaDebitUnion2 {
    SetupIntentPaymentMethodOptionsSepaDebit(SetupIntentPaymentMethodOptionsSepaDebit),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServiceDocumentationOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SetupAttemptOrRef {
    Variant1(String),
    SetupAttempt(Box<SetupAttempt>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SetupIntentOrRef {
    Variant1(String),
    SetupIntent(Box<SetupIntent>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ShippingDocumentationOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ShippingRateOrRef {
    Variant1(String),
    ShippingRate(ShippingRate),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SingleUseMandateOrRef {
    Variant1(String),
    Mandate(Box<Mandate>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SofortUnion {
    PaymentMethodOptionsSofort(PaymentMethodOptionsSofort),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceRefundOrRef {
    Variant1(String),
    Refund(Box<Refund>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceTransactionOrRef {
    Variant1(String),
    Charge(Box<Charge>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceTransferOrRef {
    Variant1(String),
    Transfer(Box<Transfer>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceTransferReversalOrRef {
    Variant1(String),
    TransferReversal(Box<TransferReversal>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceUnion {
    BankAccount(Box<BankAccount>),
    Card(Box<Card>),
    Source(Source),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceUnion2 {
    Variant1(String),
    ApplicationFee(Box<ApplicationFee>),
    Charge(Box<Charge>),
    ConnectCollectionTransfer(Box<ConnectCollectionTransfer>),
    CustomerCashBalanceTransaction(Box<CustomerCashBalanceTransaction>),
    Dispute(Box<Dispute>),
    FeeRefund(Box<FeeRefund>),
    IssuingAuthorization(Box<IssuingAuthorization>),
    IssuingDispute(Box<IssuingDispute>),
    IssuingTransaction(Box<IssuingTransaction>),
    Payout(Box<Payout>),
    Refund(Box<Refund>),
    ReserveTransaction(ReserveTransaction),
    TaxDeductedAtSource(TaxDeductedAtSource),
    Topup(Box<Topup>),
    Transfer(Box<Transfer>),
    TransferReversal(Box<TransferReversal>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourcesProperty {
    pub data: Vec<Box<DataItemUnion2>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SplashscreenOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SubscriptionOrRef {
    Variant1(String),
    Subscription(Box<Subscription>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SubscriptionScheduleOrRef {
    Variant1(String),
    SubscriptionSchedule(SubscriptionSchedule),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsProperty {
    pub data: Vec<Box<Subscription>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SupportedBankAccountCurrenciesProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SwishUnion {
    PaymentIntentPaymentMethodOptionsSwish(PaymentIntentPaymentMethodOptionsSwish),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TaxCodeOrRef {
    Variant1(String),
    TaxCode(TaxCode),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxIdsProperty {
    pub data: Vec<Box<TaxId>>,
    pub has_more: bool,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TestClockOrRef {
    Variant1(String),
    TestHelpersTestClock(TestHelpersTestClock),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TokenOrRef {
    Variant1(String),
    IssuingToken(IssuingToken),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TransactionOrRef {
    Variant1(String),
    IssuingTransaction(Box<IssuingTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TransactionOrRef2 {
    Variant1(String),
    TreasuryTransaction(Box<TreasuryTransaction>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TransferOrRef {
    Variant1(String),
    Transfer(Box<Transfer>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TransferReversalOrRef {
    Variant1(String),
    TransferReversal(Box<TransferReversal>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TwintUnion {
    PaymentMethodOptionsTwint(PaymentMethodOptionsTwint),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum UncategorizedFileOrRef {
    Variant1(String),
    File(File),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum UsBankAccountUnion {
    PaymentIntentPaymentMethodOptionsUsBankAccount(PaymentIntentPaymentMethodOptionsUsBankAccount),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum UsBankAccountUnion2 {
    SetupIntentPaymentMethodOptionsUsBankAccount(SetupIntentPaymentMethodOptionsUsBankAccount),
    SetupIntentTypeSpecificPaymentMethodOptionsClient(
        SetupIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UsedProperty {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum WechatPayUnion {
    PaymentMethodOptionsWechatPay(PaymentMethodOptionsWechatPay),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ZipUnion {
    PaymentMethodOptionsZip(PaymentMethodOptionsZip),
    PaymentIntentTypeSpecificPaymentMethodOptionsClient(
        PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    ),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Account {
    pub business_profile: Option<AccountBusinessProfile>,
    pub business_type: Option<String>,
    pub capabilities: Option<AccountCapabilities>,
    pub charges_enabled: Option<bool>,
    pub company: Option<LegalEntityCompany>,
    pub controller: Option<AccountUnificationAccountController>,
    pub country: Option<String>,
    pub created: Option<i32>,
    pub default_currency: Option<String>,
    pub details_submitted: Option<bool>,
    pub email: Option<String>,
    pub external_accounts: Option<Box<ExternalAccountsProperty>>,
    pub future_requirements: Option<AccountFutureRequirements>,
    pub groups: Option<AccountGroupMembership>,
    pub id: String,
    pub individual: Option<Person>,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub payouts_enabled: Option<bool>,
    pub requirements: Option<AccountRequirements>,
    pub settings: Option<Box<AccountSettings>>,
    pub tos_acceptance: Option<AccountTosAcceptance>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountAnnualRevenue {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub fiscal_year_end: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountBacsDebitPaymentsSettings {
    pub display_name: Option<String>,
    pub service_user_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountBrandingSettings {
    pub icon: Option<IconOrRef>,
    pub logo: Option<LogoOrRef>,
    pub primary_color: Option<String>,
    pub secondary_color: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountBusinessProfile {
    pub annual_revenue: Option<AccountAnnualRevenue>,
    pub estimated_worker_count: Option<i32>,
    pub mcc: Option<String>,
    pub minority_owned_business_designation: Option<Vec<String>>,
    pub monthly_estimated_revenue: Option<AccountMonthlyEstimatedRevenue>,
    pub name: Option<String>,
    pub product_description: Option<String>,
    pub support_address: Option<Address>,
    pub support_email: Option<String>,
    pub support_phone: Option<String>,
    pub support_url: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountCapabilities {
    pub acss_debit_payments: Option<String>,
    pub affirm_payments: Option<String>,
    pub afterpay_clearpay_payments: Option<String>,
    pub alma_payments: Option<String>,
    pub amazon_pay_payments: Option<String>,
    pub au_becs_debit_payments: Option<String>,
    pub bacs_debit_payments: Option<String>,
    pub bancontact_payments: Option<String>,
    pub bank_transfer_payments: Option<String>,
    pub billie_payments: Option<String>,
    pub blik_payments: Option<String>,
    pub boleto_payments: Option<String>,
    pub card_issuing: Option<String>,
    pub card_payments: Option<String>,
    pub cartes_bancaires_payments: Option<String>,
    pub cashapp_payments: Option<String>,
    pub crypto_payments: Option<String>,
    pub eps_payments: Option<String>,
    pub fpx_payments: Option<String>,
    pub gb_bank_transfer_payments: Option<String>,
    pub giropay_payments: Option<String>,
    pub grabpay_payments: Option<String>,
    pub ideal_payments: Option<String>,
    pub india_international_payments: Option<String>,
    pub jcb_payments: Option<String>,
    pub jp_bank_transfer_payments: Option<String>,
    pub kakao_pay_payments: Option<String>,
    pub klarna_payments: Option<String>,
    pub konbini_payments: Option<String>,
    pub kr_card_payments: Option<String>,
    pub legacy_payments: Option<String>,
    pub link_payments: Option<String>,
    pub mb_way_payments: Option<String>,
    pub mobilepay_payments: Option<String>,
    pub multibanco_payments: Option<String>,
    pub mx_bank_transfer_payments: Option<String>,
    pub naver_pay_payments: Option<String>,
    pub nz_bank_account_becs_debit_payments: Option<String>,
    pub oxxo_payments: Option<String>,
    pub p24_payments: Option<String>,
    pub pay_by_bank_payments: Option<String>,
    pub payco_payments: Option<String>,
    pub paynow_payments: Option<String>,
    pub pix_payments: Option<String>,
    pub promptpay_payments: Option<String>,
    pub revolut_pay_payments: Option<String>,
    pub samsung_pay_payments: Option<String>,
    pub satispay_payments: Option<String>,
    pub sepa_bank_transfer_payments: Option<String>,
    pub sepa_debit_payments: Option<String>,
    pub sofort_payments: Option<String>,
    pub swish_payments: Option<String>,
    pub tax_reporting_us_1099_k: Option<String>,
    pub tax_reporting_us_1099_misc: Option<String>,
    pub transfers: Option<String>,
    pub treasury: Option<String>,
    pub twint_payments: Option<String>,
    pub us_bank_account_ach_payments: Option<String>,
    pub us_bank_transfer_payments: Option<String>,
    pub zip_payments: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountCapabilityFutureRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub current_deadline: Option<i32>,
    pub currently_due: Vec<String>,
    pub disabled_reason: Option<String>,
    pub errors: Vec<AccountRequirementsError>,
    pub eventually_due: Vec<String>,
    pub past_due: Vec<String>,
    pub pending_verification: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountCapabilityRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub current_deadline: Option<i32>,
    pub currently_due: Vec<String>,
    pub disabled_reason: Option<String>,
    pub errors: Vec<AccountRequirementsError>,
    pub eventually_due: Vec<String>,
    pub past_due: Vec<String>,
    pub pending_verification: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountCardIssuingSettings {
    pub tos_acceptance: Option<CardIssuingAccountTermsOfService>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountCardPaymentsSettings {
    pub decline_on: Option<AccountDeclineChargeOn>,
    pub statement_descriptor_prefix: Option<String>,
    pub statement_descriptor_prefix_kana: Option<String>,
    pub statement_descriptor_prefix_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountDashboardSettings {
    pub display_name: Option<String>,
    pub timezone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountDeclineChargeOn {
    pub avs_failure: bool,
    pub cvc_failure: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountFutureRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub current_deadline: Option<i32>,
    pub currently_due: Option<Vec<String>>,
    pub disabled_reason: Option<String>,
    pub errors: Option<Vec<AccountRequirementsError>>,
    pub eventually_due: Option<Vec<String>>,
    pub past_due: Option<Vec<String>>,
    pub pending_verification: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountGroupMembership {
    pub payments_pricing: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountInvoicesSettings {
    pub default_account_tax_ids: Option<Vec<Box<DefaultAccountTaxIdsItemOrRef>>>,
    pub hosted_payment_method_save: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountLink {
    pub created: i32,
    pub expires_at: i32,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountMonthlyEstimatedRevenue {
    pub amount: i32,
    pub currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountPaymentsSettings {
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_kana: Option<String>,
    pub statement_descriptor_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountPayoutSettings {
    pub debit_negative_balances: bool,
    pub schedule: TransferSchedule,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub current_deadline: Option<i32>,
    pub currently_due: Option<Vec<String>>,
    pub disabled_reason: Option<String>,
    pub errors: Option<Vec<AccountRequirementsError>>,
    pub eventually_due: Option<Vec<String>>,
    pub past_due: Option<Vec<String>>,
    pub pending_verification: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountRequirementsAlternative {
    pub alternative_fields_due: Vec<String>,
    pub original_fields_due: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountRequirementsError {
    pub code: String,
    pub reason: String,
    pub requirement: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountSepaDebitPaymentsSettings {
    pub creditor_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountSession {
    pub account: String,
    pub client_secret: String,
    pub components: ConnectEmbeddedAccountSessionCreateComponents,
    pub expires_at: i32,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountSettings {
    pub bacs_debit_payments: Option<AccountBacsDebitPaymentsSettings>,
    pub branding: AccountBrandingSettings,
    pub card_issuing: Option<AccountCardIssuingSettings>,
    pub card_payments: AccountCardPaymentsSettings,
    pub dashboard: AccountDashboardSettings,
    pub invoices: Option<Box<AccountInvoicesSettings>>,
    pub payments: AccountPaymentsSettings,
    pub payouts: Option<AccountPayoutSettings>,
    pub sepa_debit_payments: Option<AccountSepaDebitPaymentsSettings>,
    pub treasury: Option<AccountTreasurySettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountTermsOfService {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountTosAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub service_agreement: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountTreasurySettings {
    pub tos_acceptance: Option<AccountTermsOfService>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountUnificationAccountController {
    pub fees: Option<AccountUnificationAccountControllerFees>,
    pub is_controller: Option<bool>,
    pub losses: Option<AccountUnificationAccountControllerLosses>,
    pub requirement_collection: Option<String>,
    pub stripe_dashboard: Option<AccountUnificationAccountControllerStripeDashboard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountUnificationAccountControllerFees {
    pub payer: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountUnificationAccountControllerLosses {
    pub payments: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccountUnificationAccountControllerStripeDashboard {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Address {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AlmaInstallments {
    pub count: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AmazonPayUnderlyingPaymentMethodFundingDetails {
    pub card: Option<PaymentMethodDetailsPassthroughCard>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApiErrors {
    pub advice_code: Option<String>,
    pub charge: Option<String>,
    pub code: Option<String>,
    pub decline_code: Option<String>,
    pub doc_url: Option<String>,
    pub message: Option<String>,
    pub network_advice_code: Option<String>,
    pub network_decline_code: Option<String>,
    pub param: Option<String>,
    pub payment_intent: Option<Box<PaymentIntent>>,
    pub payment_method: Option<Box<PaymentMethod>>,
    pub payment_method_type: Option<String>,
    pub request_log_url: Option<String>,
    pub setup_intent: Option<Box<SetupIntent>>,
    pub source: Option<Box<SourceUnion>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApplePayDomain {
    pub created: i32,
    pub domain_name: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Application {
    pub id: String,
    pub name: Option<String>,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApplicationFee {
    pub account: Box<AccountOrRef>,
    pub amount: i32,
    pub amount_refunded: i32,
    pub application: ApplicationOrRef,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub charge: Box<ChargeOrRef>,
    pub created: i32,
    pub currency: String,
    pub fee_source: Option<PlatformEarningFeeSource>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub originating_transaction: Option<Box<OriginatingTransactionOrRef>>,
    pub refunded: bool,
    pub refunds: Box<RefundsProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppsSecret {
    pub created: i32,
    pub deleted: Option<bool>,
    pub expires_at: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub name: String,
    pub object: String,
    pub payload: Option<String>,
    pub scope: SecretServiceResourceScope,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AutomaticTax {
    pub disabled_reason: Option<String>,
    pub enabled: bool,
    pub liability: Option<Box<ConnectAccountReference>>,
    pub provider: Option<String>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Balance {
    pub available: Vec<BalanceAmount>,
    pub connect_reserved: Option<Vec<BalanceAmount>>,
    pub instant_available: Option<Vec<BalanceAmountNet>>,
    pub issuing: Option<BalanceDetail>,
    pub livemode: bool,
    pub object: String,
    pub pending: Vec<BalanceAmount>,
    pub refund_and_dispute_prefunding: Option<BalanceDetailUngated>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceAmount {
    pub amount: i32,
    pub currency: String,
    pub source_types: Option<BalanceAmountBySourceType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceAmountBySourceType {
    pub bank_account: Option<i32>,
    pub card: Option<i32>,
    pub fpx: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceAmountNet {
    pub amount: i32,
    pub currency: String,
    pub net_available: Option<Vec<BalanceNetAvailable>>,
    pub source_types: Option<BalanceAmountBySourceType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceDetail {
    pub available: Vec<BalanceAmount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceDetailUngated {
    pub available: Vec<BalanceAmount>,
    pub pending: Vec<BalanceAmount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceNetAvailable {
    pub amount: i32,
    pub destination: String,
    pub source_types: Option<BalanceAmountBySourceType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceSettings {
    pub object: String,
    pub payments: BalanceSettingsResourcePayments,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceSettingsResourcePayments {
    pub debit_negative_balances: Option<bool>,
    pub payouts: Option<BalanceSettingsResourcePayouts>,
    pub settlement_timing: BalanceSettingsResourceSettlementTiming,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceSettingsResourcePayoutSchedule {
    pub interval: Option<String>,
    pub monthly_payout_days: Option<Vec<i32>>,
    pub weekly_payout_days: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceSettingsResourcePayouts {
    pub minimum_balance_by_currency: Option<MinimumBalanceByCurrencyProperty>,
    pub schedule: Option<BalanceSettingsResourcePayoutSchedule>,
    pub statement_descriptor: Option<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceSettingsResourceSettlementTiming {
    pub delay_days: i32,
    pub delay_days_override: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BalanceTransaction {
    pub amount: i32,
    pub available_on: i32,
    pub balance_type: Option<String>,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub exchange_rate: Option<f32>,
    pub fee: i32,
    pub fee_details: Vec<Fee>,
    pub id: String,
    pub net: i32,
    pub object: String,
    pub reporting_category: String,
    pub source: Option<Box<SourceUnion2>>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankAccount {
    pub account: Option<Box<AccountOrRef>>,
    pub account_holder_name: Option<String>,
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub available_payout_methods: Option<Vec<String>>,
    pub bank_name: Option<String>,
    pub country: String,
    pub currency: String,
    pub customer: Option<Box<CustomerUnion>>,
    pub default_for_currency: Option<bool>,
    pub fingerprint: Option<String>,
    pub future_requirements: Option<ExternalAccountRequirements>,
    pub id: String,
    pub last4: String,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub requirements: Option<ExternalAccountRequirements>,
    pub routing_number: Option<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceAccountNumberDetails {
    pub expected_expiry_date: Option<i32>,
    pub identifier_type: String,
    pub status: String,
    pub supported_networks: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceAccountholder {
    pub account: Option<AccountOrRef>,
    pub customer: Option<CustomerOrRef>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceBalance {
    pub as_of: i32,
    pub cash: Option<BankConnectionsResourceBalanceApiResourceCashBalance>,
    pub credit: Option<BankConnectionsResourceBalanceApiResourceCreditBalance>,
    pub current: CurrentProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceBalanceApiResourceCashBalance {
    pub available: Option<AvailableProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceBalanceApiResourceCreditBalance {
    pub used: Option<UsedProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceBalanceRefresh {
    pub last_attempted_at: i32,
    pub next_refresh_available_at: Option<i32>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceLinkAccountSessionFilters {
    pub account_subcategories: Option<Vec<String>>,
    pub countries: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceOwnershipRefresh {
    pub last_attempted_at: i32,
    pub next_refresh_available_at: Option<i32>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceTransactionRefresh {
    pub id: String,
    pub last_attempted_at: i32,
    pub next_refresh_available_at: Option<i32>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BankConnectionsResourceTransactionResourceStatusTransitions {
    pub posted_at: Option<i32>,
    pub void_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingAlert {
    pub alert_type: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub status: Option<String>,
    pub title: String,
    pub usage_threshold: Option<ThresholdsResourceUsageThresholdConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditBalanceSummary {
    pub balances: Vec<CreditBalance>,
    pub customer: CustomerUnion,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditBalanceTransaction {
    pub created: i32,
    pub credit: Option<Box<BillingCreditGrantsResourceBalanceCredit>>,
    pub credit_grant: Box<CreditGrantOrRef>,
    pub debit: Option<Box<BillingCreditGrantsResourceBalanceDebit>>,
    pub effective_at: i32,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub test_clock: Option<TestClockOrRef>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrant {
    pub amount: BillingCreditGrantsResourceAmount,
    pub applicability_config: BillingCreditGrantsResourceApplicabilityConfig,
    pub category: String,
    pub created: i32,
    pub customer: Box<CustomerUnion>,
    pub effective_at: Option<i32>,
    pub expires_at: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub name: Option<String>,
    pub object: String,
    pub priority: Option<i32>,
    pub test_clock: Option<TestClockOrRef>,
    pub updated: i32,
    pub voided_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeter {
    pub created: i32,
    pub customer_mapping: BillingMeterResourceCustomerMappingSettings,
    pub default_aggregation: BillingMeterResourceAggregationSettings,
    pub display_name: String,
    pub event_name: String,
    pub event_time_window: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub status: String,
    pub status_transitions: BillingMeterResourceBillingMeterStatusTransitions,
    pub updated: i32,
    pub value_settings: BillingMeterResourceBillingMeterValue,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterEvent {
    pub created: i32,
    pub event_name: String,
    pub identifier: String,
    pub livemode: bool,
    pub object: String,
    pub payload: PayloadProperty,
    pub timestamp: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterEventAdjustment {
    pub cancel: Option<BillingMeterResourceBillingMeterEventAdjustmentCancel>,
    pub event_name: String,
    pub livemode: bool,
    pub object: String,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterEventSummary {
    pub aggregated_value: f32,
    pub end_time: i32,
    pub id: String,
    pub livemode: bool,
    pub meter: String,
    pub object: String,
    pub start_time: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoiceItemParentsInvoiceItemParent {
    pub subscription_details:
        Option<BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent {
    pub subscription: String,
    pub subscription_item: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingLinesCommonCreditedItems {
    pub invoice: String,
    pub invoice_line_items: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingLinesCommonProrationDetails {
    pub credited_items: Option<BillingBillResourceInvoicingLinesCommonCreditedItems>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent {
    pub invoice_item: String,
    pub proration: bool,
    pub proration_details: Option<BillingBillResourceInvoicingLinesCommonProrationDetails>,
    pub subscription: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent {
    pub invoice_item_details:
        Option<BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent>,
    pub subscription_item_details:
        Option<BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent {
    pub invoice_item: Option<String>,
    pub proration: bool,
    pub proration_details: Option<BillingBillResourceInvoicingLinesCommonProrationDetails>,
    pub subscription: Option<String>,
    pub subscription_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingParentsInvoiceParent {
    pub quote_details: Option<BillingBillResourceInvoicingParentsInvoiceQuoteParent>,
    pub subscription_details:
        Option<Box<BillingBillResourceInvoicingParentsInvoiceSubscriptionParent>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingParentsInvoiceQuoteParent {
    pub quote: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingParentsInvoiceSubscriptionParent {
    pub metadata: Option<MetadataProperty>,
    pub subscription: Box<SubscriptionOrRef>,
    pub subscription_proration_date: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingPricingPricing {
    pub price_details: Option<BillingBillResourceInvoicingPricingPricingPriceDetails>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingPricingPricingPriceDetails {
    pub price: String,
    pub product: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingTaxesTax {
    pub amount: i32,
    pub tax_behavior: String,
    pub tax_rate_details: Option<BillingBillResourceInvoicingTaxesTaxRateDetails>,
    pub taxability_reason: String,
    pub taxable_amount: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingBillResourceInvoicingTaxesTaxRateDetails {
    pub tax_rate: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingClocksResourceStatusDetailsAdvancingStatusDetails {
    pub target_frozen_time: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingClocksResourceStatusDetailsStatusDetails {
    pub advancing: Option<BillingClocksResourceStatusDetailsAdvancingStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceAmount {
    pub monetary: Option<BillingCreditGrantsResourceMonetaryAmount>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceApplicabilityConfig {
    pub scope: BillingCreditGrantsResourceScope,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceApplicablePrice {
    pub id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceBalanceCredit {
    pub amount: BillingCreditGrantsResourceAmount,
    pub credits_application_invoice_voided:
        Option<Box<BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided {
    pub invoice: Box<InvoiceOrRef>,
    pub invoice_line_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceBalanceCreditsApplied {
    pub invoice: Box<InvoiceOrRef>,
    pub invoice_line_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceBalanceDebit {
    pub amount: BillingCreditGrantsResourceAmount,
    pub credits_applied: Option<Box<BillingCreditGrantsResourceBalanceCreditsApplied>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceMonetaryAmount {
    pub currency: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingCreditGrantsResourceScope {
    pub price_type: Option<String>,
    pub prices: Option<Vec<BillingCreditGrantsResourceApplicablePrice>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingDetails {
    pub address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
    pub tax_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterResourceAggregationSettings {
    pub formula: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterResourceBillingMeterEventAdjustmentCancel {
    pub identifier: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterResourceBillingMeterStatusTransitions {
    pub deactivated_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterResourceBillingMeterValue {
    pub event_payload_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingMeterResourceCustomerMappingSettings {
    pub event_payload_key: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingPortalConfiguration {
    pub active: bool,
    pub application: Option<ApplicationUnion>,
    pub business_profile: PortalBusinessProfile,
    pub created: i32,
    pub default_return_url: Option<String>,
    pub features: PortalFeatures,
    pub id: String,
    pub is_default: bool,
    pub livemode: bool,
    pub login_page: PortalLoginPage,
    pub metadata: Option<MetadataProperty>,
    pub name: Option<String>,
    pub object: String,
    pub updated: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BillingPortalSession {
    pub configuration: ConfigurationOrRef,
    pub created: i32,
    pub customer: String,
    pub flow: Option<PortalFlowsFlow>,
    pub id: String,
    pub livemode: bool,
    pub locale: Option<String>,
    pub object: String,
    pub on_behalf_of: Option<String>,
    pub return_url: Option<String>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CancellationDetails {
    pub comment: Option<String>,
    pub feedback: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Capability {
    pub account: AccountOrRef,
    pub future_requirements: Option<AccountCapabilityFutureRequirements>,
    pub id: String,
    pub object: String,
    pub requested: bool,
    pub requested_at: Option<i32>,
    pub requirements: Option<AccountCapabilityRequirements>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Card {
    pub account: Option<Box<AccountOrRef>>,
    pub address_city: Option<String>,
    pub address_country: Option<String>,
    pub address_line1: Option<String>,
    pub address_line1_check: Option<String>,
    pub address_line2: Option<String>,
    pub address_state: Option<String>,
    pub address_zip: Option<String>,
    pub address_zip_check: Option<String>,
    pub allow_redisplay: Option<String>,
    pub available_payout_methods: Option<Vec<String>>,
    pub brand: String,
    pub country: Option<String>,
    pub currency: Option<String>,
    pub customer: Option<Box<CustomerUnion>>,
    pub cvc_check: Option<String>,
    pub default_for_currency: Option<bool>,
    pub dynamic_last4: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: String,
    pub id: String,
    pub iin: Option<String>,
    pub last4: String,
    pub metadata: Option<MetadataProperty>,
    pub name: Option<String>,
    pub networks: Option<TokenCardNetworks>,
    pub object: String,
    pub regulated_status: Option<String>,
    pub status: Option<String>,
    pub tokenization_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CardGeneratedFromPaymentMethodDetails {
    pub card_present: Option<PaymentMethodDetailsCardPresent>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CardIssuingAccountTermsOfService {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CardMandatePaymentMethodDetails {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CashBalance {
    pub available: Option<AvailableProperty>,
    pub customer: String,
    pub livemode: bool,
    pub object: String,
    pub settings: CustomerBalanceCustomerBalanceSettings,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Charge {
    pub amount: i32,
    pub amount_captured: i32,
    pub amount_refunded: i32,
    pub application: Option<ApplicationOrRef>,
    pub application_fee: Option<Box<ApplicationFeeOrRef>>,
    pub application_fee_amount: Option<i32>,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub billing_details: BillingDetails,
    pub calculated_statement_descriptor: Option<String>,
    pub captured: bool,
    pub created: i32,
    pub currency: String,
    pub customer: Option<Box<CustomerUnion>>,
    pub description: Option<String>,
    pub disputed: bool,
    pub failure_balance_transaction: Option<Box<FailureBalanceTransactionOrRef>>,
    pub failure_code: Option<String>,
    pub failure_message: Option<String>,
    pub fraud_details: Option<ChargeFraudDetails>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub outcome: Option<ChargeOutcome>,
    pub paid: bool,
    pub payment_intent: Option<Box<PaymentIntentOrRef>>,
    pub payment_method: Option<String>,
    pub payment_method_details: Option<Box<PaymentMethodDetails>>,
    pub presentment_details: Option<PaymentFlowsPaymentIntentPresentmentDetails>,
    pub radar_options: Option<RadarRadarOptions>,
    pub receipt_email: Option<String>,
    pub receipt_number: Option<String>,
    pub receipt_url: Option<String>,
    pub refunded: bool,
    pub refunds: Option<Box<RefundsProperty2>>,
    pub review: Option<Box<ReviewOrRef>>,
    pub shipping: Option<Shipping>,
    pub source_transfer: Option<Box<SourceTransferOrRef>>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub status: String,
    pub transfer: Option<Box<TransferOrRef>>,
    pub transfer_data: Option<Box<ChargeTransferData>>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChargeFraudDetails {
    pub stripe_report: Option<String>,
    pub user_report: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChargeOutcome {
    pub advice_code: Option<String>,
    pub network_advice_code: Option<String>,
    pub network_decline_code: Option<String>,
    pub network_status: Option<String>,
    pub reason: Option<String>,
    pub risk_level: Option<String>,
    pub risk_score: Option<i32>,
    pub rule: Option<RuleOrRef>,
    pub seller_message: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChargeTransferData {
    pub amount: Option<i32>,
    pub destination: Box<DestinationOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSession {
    pub adaptive_pricing: Option<PaymentPagesCheckoutSessionAdaptivePricing>,
    pub after_expiration: Option<PaymentPagesCheckoutSessionAfterExpiration>,
    pub allow_promotion_codes: Option<bool>,
    pub amount_subtotal: Option<i32>,
    pub amount_total: Option<i32>,
    pub automatic_tax: PaymentPagesCheckoutSessionAutomaticTax,
    pub billing_address_collection: Option<String>,
    pub branding_settings: Option<PaymentPagesCheckoutSessionBrandingSettings>,
    pub cancel_url: Option<String>,
    pub client_reference_id: Option<String>,
    pub client_secret: Option<String>,
    pub collected_information: Option<PaymentPagesCheckoutSessionCollectedInformation>,
    pub consent: Option<PaymentPagesCheckoutSessionConsent>,
    pub consent_collection: Option<PaymentPagesCheckoutSessionConsentCollection>,
    pub created: i32,
    pub currency: Option<String>,
    pub currency_conversion: Option<PaymentPagesCheckoutSessionCurrencyConversion>,
    pub custom_fields: Vec<PaymentPagesCheckoutSessionCustomFields>,
    pub custom_text: PaymentPagesCheckoutSessionCustomText,
    pub customer: Option<CustomerUnion>,
    pub customer_creation: Option<String>,
    pub customer_details: Option<PaymentPagesCheckoutSessionCustomerDetails>,
    pub customer_email: Option<String>,
    pub discounts: Option<Vec<PaymentPagesCheckoutSessionDiscount>>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub expires_at: i32,
    pub id: String,
    pub invoice: Option<InvoiceOrRef>,
    pub invoice_creation: Option<PaymentPagesCheckoutSessionInvoiceCreation>,
    pub line_items: Option<LineItemsProperty>,
    pub livemode: bool,
    pub locale: Option<String>,
    pub metadata: Option<MetadataProperty>,
    pub mode: String,
    pub name_collection: Option<PaymentPagesCheckoutSessionNameCollection>,
    pub object: String,
    pub optional_items: Option<Vec<PaymentPagesCheckoutSessionOptionalItem>>,
    pub origin_context: Option<String>,
    pub payment_intent: Option<PaymentIntentOrRef>,
    pub payment_link: Option<PaymentLinkOrRef>,
    pub payment_method_collection: Option<String>,
    pub payment_method_configuration_details:
        Option<PaymentMethodConfigBizPaymentMethodConfigurationDetails>,
    pub payment_method_options: Option<CheckoutSessionPaymentMethodOptions>,
    pub payment_method_types: Vec<String>,
    pub payment_status: String,
    pub permissions: Option<PaymentPagesCheckoutSessionPermissions>,
    pub phone_number_collection: Option<PaymentPagesCheckoutSessionPhoneNumberCollection>,
    pub presentment_details: Option<PaymentFlowsPaymentIntentPresentmentDetails>,
    pub recovered_from: Option<String>,
    pub redirect_on_completion: Option<String>,
    pub return_url: Option<String>,
    pub saved_payment_method_options: Option<PaymentPagesCheckoutSessionSavedPaymentMethodOptions>,
    pub setup_intent: Option<SetupIntentOrRef>,
    pub shipping_address_collection: Option<PaymentPagesCheckoutSessionShippingAddressCollection>,
    pub shipping_cost: Option<PaymentPagesCheckoutSessionShippingCost>,
    pub shipping_options: Vec<PaymentPagesCheckoutSessionShippingOption>,
    pub status: Option<String>,
    pub submit_type: Option<String>,
    pub subscription: Option<SubscriptionOrRef>,
    pub success_url: Option<String>,
    pub tax_id_collection: Option<PaymentPagesCheckoutSessionTaxIdCollection>,
    pub total_details: Option<PaymentPagesCheckoutSessionTotalDetails>,
    pub ui_mode: Option<String>,
    pub url: Option<String>,
    pub wallet_options: Option<CheckoutSessionWalletOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAcssDebitMandateOptions {
    pub custom_mandate_url: Option<String>,
    pub default_for: Option<Vec<String>>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAcssDebitPaymentMethodOptions {
    pub currency: Option<String>,
    pub mandate_options: Option<CheckoutAcssDebitMandateOptions>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAffirmPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAfterpayClearpayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAlipayPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAlmaPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAmazonPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutAuBecsDebitPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutBacsDebitPaymentMethodOptions {
    pub mandate_options: Option<CheckoutPaymentMethodOptionsMandateOptionsBacsDebit>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutBancontactPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutBilliePaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutBoletoPaymentMethodOptions {
    pub expires_after_days: i32,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutCardInstallmentsOptions {
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutCardPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub installments: Option<CheckoutCardInstallmentsOptions>,
    pub request_extended_authorization: Option<String>,
    pub request_incremental_authorization: Option<String>,
    pub request_multicapture: Option<String>,
    pub request_overcapture: Option<String>,
    pub request_three_d_secure: String,
    pub restrictions: Option<PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions>,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor_suffix_kana: Option<String>,
    pub statement_descriptor_suffix_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutCashappPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutCustomerBalanceBankTransferPaymentMethodOptions {
    pub eu_bank_transfer: Option<PaymentMethodOptionsCustomerBalanceEuBankAccount>,
    pub requested_address_types: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutCustomerBalancePaymentMethodOptions {
    pub bank_transfer: Option<CheckoutCustomerBalanceBankTransferPaymentMethodOptions>,
    pub funding_type: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutEpsPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutFpxPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutGiropayPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutGrabPayPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutIdealPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutKakaoPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutKlarnaPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutKonbiniPaymentMethodOptions {
    pub expires_after_days: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutKrCardPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutLinkPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutLinkWalletOptions {
    pub display: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutMobilepayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutMultibancoPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutNaverPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutOxxoPaymentMethodOptions {
    pub expires_after_days: i32,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutP24PaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPaycoPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPaymentMethodOptionsMandateOptionsBacsDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPaymentMethodOptionsMandateOptionsSepaDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPaynowPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPaypalPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub reference: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutPixPaymentMethodOptions {
    pub amount_includes_iof: Option<String>,
    pub expires_after_seconds: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutRevolutPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSamsungPayPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSatispayPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSepaDebitPaymentMethodOptions {
    pub mandate_options: Option<CheckoutPaymentMethodOptionsMandateOptionsSepaDebit>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSessionPaymentMethodOptions {
    pub acss_debit: Option<CheckoutAcssDebitPaymentMethodOptions>,
    pub affirm: Option<CheckoutAffirmPaymentMethodOptions>,
    pub afterpay_clearpay: Option<CheckoutAfterpayClearpayPaymentMethodOptions>,
    pub alipay: Option<CheckoutAlipayPaymentMethodOptions>,
    pub alma: Option<CheckoutAlmaPaymentMethodOptions>,
    pub amazon_pay: Option<CheckoutAmazonPayPaymentMethodOptions>,
    pub au_becs_debit: Option<CheckoutAuBecsDebitPaymentMethodOptions>,
    pub bacs_debit: Option<CheckoutBacsDebitPaymentMethodOptions>,
    pub bancontact: Option<CheckoutBancontactPaymentMethodOptions>,
    pub billie: Option<CheckoutBilliePaymentMethodOptions>,
    pub boleto: Option<CheckoutBoletoPaymentMethodOptions>,
    pub card: Option<CheckoutCardPaymentMethodOptions>,
    pub cashapp: Option<CheckoutCashappPaymentMethodOptions>,
    pub customer_balance: Option<CheckoutCustomerBalancePaymentMethodOptions>,
    pub eps: Option<CheckoutEpsPaymentMethodOptions>,
    pub fpx: Option<CheckoutFpxPaymentMethodOptions>,
    pub giropay: Option<CheckoutGiropayPaymentMethodOptions>,
    pub grabpay: Option<CheckoutGrabPayPaymentMethodOptions>,
    pub ideal: Option<CheckoutIdealPaymentMethodOptions>,
    pub kakao_pay: Option<CheckoutKakaoPayPaymentMethodOptions>,
    pub klarna: Option<CheckoutKlarnaPaymentMethodOptions>,
    pub konbini: Option<CheckoutKonbiniPaymentMethodOptions>,
    pub kr_card: Option<CheckoutKrCardPaymentMethodOptions>,
    pub link: Option<CheckoutLinkPaymentMethodOptions>,
    pub mobilepay: Option<CheckoutMobilepayPaymentMethodOptions>,
    pub multibanco: Option<CheckoutMultibancoPaymentMethodOptions>,
    pub naver_pay: Option<CheckoutNaverPayPaymentMethodOptions>,
    pub oxxo: Option<CheckoutOxxoPaymentMethodOptions>,
    pub p24: Option<CheckoutP24PaymentMethodOptions>,
    pub payco: Option<CheckoutPaycoPaymentMethodOptions>,
    pub paynow: Option<CheckoutPaynowPaymentMethodOptions>,
    pub paypal: Option<CheckoutPaypalPaymentMethodOptions>,
    pub pix: Option<CheckoutPixPaymentMethodOptions>,
    pub revolut_pay: Option<CheckoutRevolutPayPaymentMethodOptions>,
    pub samsung_pay: Option<CheckoutSamsungPayPaymentMethodOptions>,
    pub satispay: Option<CheckoutSatispayPaymentMethodOptions>,
    pub sepa_debit: Option<CheckoutSepaDebitPaymentMethodOptions>,
    pub sofort: Option<CheckoutSofortPaymentMethodOptions>,
    pub swish: Option<CheckoutSwishPaymentMethodOptions>,
    pub twint: Option<CheckoutTwintPaymentMethodOptions>,
    pub us_bank_account: Option<CheckoutUsBankAccountPaymentMethodOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSessionWalletOptions {
    pub link: Option<CheckoutLinkWalletOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSofortPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutSwishPaymentMethodOptions {
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutTwintPaymentMethodOptions {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CheckoutUsBankAccountPaymentMethodOptions {
    pub financial_connections: Option<LinkedAccountOptionsCommon>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateOrder {
    pub amount_fees: i32,
    pub amount_subtotal: i32,
    pub amount_total: i32,
    pub beneficiary: Option<ClimateRemovalsBeneficiary>,
    pub canceled_at: Option<i32>,
    pub cancellation_reason: Option<String>,
    pub certificate: Option<String>,
    pub confirmed_at: Option<i32>,
    pub created: i32,
    pub currency: String,
    pub delayed_at: Option<i32>,
    pub delivered_at: Option<i32>,
    pub delivery_details: Vec<ClimateRemovalsOrderDeliveries>,
    pub expected_delivery_year: i32,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub metric_tons: String,
    pub object: String,
    pub product: ProductOrRef,
    pub product_substituted_at: Option<i32>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateProduct {
    pub created: i32,
    pub current_prices_per_metric_ton: CurrentPricesPerMetricTonProperty,
    pub delivery_year: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub metric_tons_available: String,
    pub name: String,
    pub object: String,
    pub suppliers: Vec<ClimateSupplier>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateSupplier {
    pub id: String,
    pub info_url: String,
    pub livemode: bool,
    pub locations: Vec<ClimateRemovalsLocation>,
    pub name: String,
    pub object: String,
    pub removal_pathway: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateRemovalsBeneficiary {
    pub public_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateRemovalsLocation {
    pub city: Option<String>,
    pub country: String,
    pub latitude: Option<f32>,
    pub longitude: Option<f32>,
    pub region: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClimateRemovalsOrderDeliveries {
    pub delivered_at: i32,
    pub location: Option<ClimateRemovalsLocation>,
    pub metric_tons: String,
    pub registry_url: Option<String>,
    pub supplier: ClimateSupplier,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationToken {
    pub created: i32,
    pub expires_at: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub mandate_data: Option<ConfirmationTokensResourceMandateData>,
    pub object: String,
    pub payment_intent: Option<String>,
    pub payment_method_options: Option<ConfirmationTokensResourcePaymentMethodOptions>,
    pub payment_method_preview: Option<ConfirmationTokensResourcePaymentMethodPreview>,
    pub return_url: Option<String>,
    pub setup_future_usage: Option<String>,
    pub setup_intent: Option<String>,
    pub shipping: Option<ConfirmationTokensResourceShipping>,
    pub use_stripe_sdk: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourceMandateData {
    pub customer_acceptance: ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourceMandateDataResourceCustomerAcceptance {
    pub online:
        Option<ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline {
    pub ip_address: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourcePaymentMethodOptions {
    pub card: Option<ConfirmationTokensResourcePaymentMethodOptionsResourceCard>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourcePaymentMethodOptionsResourceCard {
    pub cvc_token: Option<String>,
    pub installments:
        Option<ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment {
    pub plan: Option<PaymentMethodDetailsCardInstallmentsPlan>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourcePaymentMethodPreview {
    pub acss_debit: Option<PaymentMethodAcssDebit>,
    pub affirm: Option<PaymentMethodAffirm>,
    pub afterpay_clearpay: Option<PaymentMethodAfterpayClearpay>,
    pub alipay: Option<PaymentFlowsPrivatePaymentMethodsAlipay>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<PaymentMethodAlma>,
    pub amazon_pay: Option<PaymentMethodAmazonPay>,
    pub au_becs_debit: Option<PaymentMethodAuBecsDebit>,
    pub bacs_debit: Option<PaymentMethodBacsDebit>,
    pub bancontact: Option<PaymentMethodBancontact>,
    pub billie: Option<PaymentMethodBillie>,
    pub billing_details: BillingDetails,
    pub blik: Option<PaymentMethodBlik>,
    pub boleto: Option<PaymentMethodBoleto>,
    pub card: Option<PaymentMethodCard>,
    pub card_present: Option<PaymentMethodCardPresent>,
    pub cashapp: Option<PaymentMethodCashapp>,
    pub crypto: Option<PaymentMethodCrypto>,
    pub customer: Option<CustomerOrRef>,
    pub customer_balance: Option<PaymentMethodCustomerBalance>,
    pub eps: Option<PaymentMethodEps>,
    pub fpx: Option<PaymentMethodFpx>,
    pub giropay: Option<PaymentMethodGiropay>,
    pub grabpay: Option<PaymentMethodGrabpay>,
    pub ideal: Option<PaymentMethodIdeal>,
    pub interac_present: Option<PaymentMethodInteracPresent>,
    pub kakao_pay: Option<PaymentMethodKakaoPay>,
    pub klarna: Option<PaymentMethodKlarna>,
    pub konbini: Option<PaymentMethodKonbini>,
    pub kr_card: Option<PaymentMethodKrCard>,
    pub link: Option<PaymentMethodLink>,
    pub mb_way: Option<PaymentMethodMbWay>,
    pub mobilepay: Option<PaymentMethodMobilepay>,
    pub multibanco: Option<PaymentMethodMultibanco>,
    pub naver_pay: Option<PaymentMethodNaverPay>,
    pub nz_bank_account: Option<PaymentMethodNzBankAccount>,
    pub oxxo: Option<PaymentMethodOxxo>,
    pub p24: Option<PaymentMethodP24>,
    pub pay_by_bank: Option<PaymentMethodPayByBank>,
    pub payco: Option<PaymentMethodPayco>,
    pub paynow: Option<PaymentMethodPaynow>,
    pub paypal: Option<PaymentMethodPaypal>,
    pub pix: Option<PaymentMethodPix>,
    pub promptpay: Option<PaymentMethodPromptpay>,
    pub revolut_pay: Option<PaymentMethodRevolutPay>,
    pub samsung_pay: Option<PaymentMethodSamsungPay>,
    pub satispay: Option<PaymentMethodSatispay>,
    pub sepa_debit: Option<PaymentMethodSepaDebit>,
    pub sofort: Option<PaymentMethodSofort>,
    pub swish: Option<PaymentMethodSwish>,
    pub twint: Option<PaymentMethodTwint>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PaymentMethodUsBankAccount>,
    pub wechat_pay: Option<PaymentMethodWechatPay>,
    pub zip: Option<PaymentMethodZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfirmationTokensResourceShipping {
    pub address: Address,
    pub name: String,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectAccountReference {
    pub account: Option<Box<AccountOrRef>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectCollectionTransfer {
    pub amount: i32,
    pub currency: String,
    pub destination: Box<DestinationOrRef>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedAccountConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedAccountFeaturesClaim,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedAccountFeaturesClaim {
    pub disable_stripe_user_authentication: bool,
    pub external_account_collection: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedAccountSessionCreateComponents {
    pub account_management: ConnectEmbeddedAccountConfigClaim,
    pub account_onboarding: ConnectEmbeddedAccountConfigClaim,
    pub balances: ConnectEmbeddedPayoutsConfig,
    pub disputes_list: ConnectEmbeddedDisputesListConfig,
    pub documents: ConnectEmbeddedBaseConfigClaim,
    pub financial_account: ConnectEmbeddedFinancialAccountConfigClaim,
    pub financial_account_transactions: ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
    pub instant_payouts_promotion: ConnectEmbeddedInstantPayoutsPromotionConfig,
    pub issuing_card: ConnectEmbeddedIssuingCardConfigClaim,
    pub issuing_cards_list: ConnectEmbeddedIssuingCardsListConfigClaim,
    pub notification_banner: ConnectEmbeddedAccountConfigClaim,
    pub payment_details: ConnectEmbeddedPaymentsConfigClaim,
    pub payment_disputes: ConnectEmbeddedPaymentDisputesConfig,
    pub payments: ConnectEmbeddedPaymentsConfigClaim,
    pub payout_details: ConnectEmbeddedBaseConfigClaim,
    pub payouts: ConnectEmbeddedPayoutsConfig,
    pub payouts_list: ConnectEmbeddedBaseConfigClaim,
    pub tax_registrations: ConnectEmbeddedBaseConfigClaim,
    pub tax_settings: ConnectEmbeddedBaseConfigClaim,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedBaseConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedBaseFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedBaseFeatures {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedDisputesListConfig {
    pub enabled: bool,
    pub features: ConnectEmbeddedDisputesListFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedDisputesListFeatures {
    pub capture_payments: bool,
    pub destination_on_behalf_of_charge_management: bool,
    pub dispute_management: bool,
    pub refund_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedFinancialAccountConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedFinancialAccountFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedFinancialAccountFeatures {
    pub disable_stripe_user_authentication: bool,
    pub external_account_collection: bool,
    pub send_money: bool,
    pub transfer_balance: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedFinancialAccountTransactionsConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedFinancialAccountTransactionsFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedFinancialAccountTransactionsFeatures {
    pub card_spend_dispute_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedInstantPayoutsPromotionConfig {
    pub enabled: bool,
    pub features: ConnectEmbeddedInstantPayoutsPromotionFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedInstantPayoutsPromotionFeatures {
    pub disable_stripe_user_authentication: bool,
    pub external_account_collection: bool,
    pub instant_payouts: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedIssuingCardConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedIssuingCardFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedIssuingCardFeatures {
    pub card_management: bool,
    pub card_spend_dispute_management: bool,
    pub cardholder_management: bool,
    pub spend_control_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedIssuingCardsListConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedIssuingCardsListFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedIssuingCardsListFeatures {
    pub card_management: bool,
    pub card_spend_dispute_management: bool,
    pub cardholder_management: bool,
    pub disable_stripe_user_authentication: bool,
    pub spend_control_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPaymentDisputesConfig {
    pub enabled: bool,
    pub features: ConnectEmbeddedPaymentDisputesFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPaymentDisputesFeatures {
    pub destination_on_behalf_of_charge_management: bool,
    pub dispute_management: bool,
    pub refund_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPaymentsConfigClaim {
    pub enabled: bool,
    pub features: ConnectEmbeddedPaymentsFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPaymentsFeatures {
    pub capture_payments: bool,
    pub destination_on_behalf_of_charge_management: bool,
    pub dispute_management: bool,
    pub refund_management: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPayoutsConfig {
    pub enabled: bool,
    pub features: ConnectEmbeddedPayoutsFeatures,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectEmbeddedPayoutsFeatures {
    pub disable_stripe_user_authentication: bool,
    pub edit_payout_schedule: bool,
    pub external_account_collection: bool,
    pub instant_payouts: bool,
    pub standard_payouts: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CountrySpec {
    pub default_currency: String,
    pub id: String,
    pub object: String,
    pub supported_bank_account_currencies: SupportedBankAccountCurrenciesProperty,
    pub supported_payment_currencies: Vec<String>,
    pub supported_payment_methods: Vec<String>,
    pub supported_transfer_countries: Vec<String>,
    pub verification_fields: CountrySpecVerificationFields,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CountrySpecVerificationFieldDetails {
    pub additional: Vec<String>,
    pub minimum: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CountrySpecVerificationFields {
    pub company: CountrySpecVerificationFieldDetails,
    pub individual: CountrySpecVerificationFieldDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Coupon {
    pub amount_off: Option<i32>,
    pub applies_to: Option<CouponAppliesTo>,
    pub created: i32,
    pub currency: Option<String>,
    pub currency_options: Option<CurrencyOptionsProperty>,
    pub duration: String,
    pub duration_in_months: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub max_redemptions: Option<i32>,
    pub metadata: Option<MetadataProperty>,
    pub name: Option<String>,
    pub object: String,
    pub percent_off: Option<f32>,
    pub redeem_by: Option<i32>,
    pub times_redeemed: i32,
    pub valid: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CouponAppliesTo {
    pub products: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditBalance {
    pub available_balance: BillingCreditGrantsResourceAmount,
    pub ledger_balance: BillingCreditGrantsResourceAmount,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditNote {
    pub amount: i32,
    pub amount_shipping: i32,
    pub created: i32,
    pub currency: String,
    pub customer: CustomerUnion,
    pub customer_balance_transaction: Option<Box<CustomerBalanceTransactionOrRef>>,
    pub discount_amount: i32,
    pub discount_amounts: Vec<DiscountsResourceDiscountAmount>,
    pub effective_at: Option<i32>,
    pub id: String,
    pub invoice: InvoiceOrRef,
    pub lines: LinesProperty,
    pub livemode: bool,
    pub memo: Option<String>,
    pub metadata: Option<MetadataProperty>,
    pub number: String,
    pub object: String,
    pub out_of_band_amount: Option<i32>,
    pub pdf: String,
    pub post_payment_amount: i32,
    pub pre_payment_amount: i32,
    pub pretax_credit_amounts: Vec<CreditNotesPretaxCreditAmount>,
    pub reason: Option<String>,
    pub refunds: Vec<CreditNoteRefund>,
    pub shipping_cost: Option<InvoicesResourceShippingCost>,
    pub status: String,
    pub subtotal: i32,
    pub subtotal_excluding_tax: Option<i32>,
    pub total: i32,
    pub total_excluding_tax: Option<i32>,
    pub total_taxes: Option<Vec<BillingBillResourceInvoicingTaxesTax>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub voided_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditNoteLineItem {
    pub amount: i32,
    pub description: Option<String>,
    pub discount_amount: i32,
    pub discount_amounts: Vec<DiscountsResourceDiscountAmount>,
    pub id: String,
    pub invoice_line_item: Option<String>,
    pub livemode: bool,
    pub object: String,
    pub pretax_credit_amounts: Vec<CreditNotesPretaxCreditAmount>,
    pub quantity: Option<i32>,
    pub tax_rates: Vec<TaxRate>,
    pub taxes: Option<Vec<BillingBillResourceInvoicingTaxesTax>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditNoteRefund {
    pub amount_refunded: i32,
    pub payment_record_refund: Option<CreditNotesPaymentRecordRefund>,
    pub refund: RefundOrRef,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditNotesPaymentRecordRefund {
    pub payment_record: String,
    pub refund_group: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreditNotesPretaxCreditAmount {
    pub amount: i32,
    pub credit_balance_transaction: Option<CreditBalanceTransactionOrRef>,
    pub discount: Option<DiscountUnion>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomLogo {
    pub content_type: Option<String>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomUnitAmount {
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
    pub preset: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Customer {
    pub address: Option<Address>,
    pub balance: Option<i32>,
    pub business_name: Option<String>,
    pub cash_balance: Option<CashBalance>,
    pub created: i32,
    pub currency: Option<String>,
    pub default_source: Option<Box<DefaultSourceUnion>>,
    pub delinquent: Option<bool>,
    pub description: Option<String>,
    pub discount: Option<Box<Discount>>,
    pub email: Option<String>,
    pub id: String,
    pub individual_name: Option<String>,
    pub invoice_credit_balance: Option<InvoiceCreditBalanceProperty>,
    pub invoice_prefix: Option<String>,
    pub invoice_settings: Option<Box<InvoiceSettingCustomerSetting>>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub name: Option<String>,
    pub next_invoice_sequence: Option<i32>,
    pub object: String,
    pub phone: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub shipping: Option<Shipping>,
    pub sources: Option<Box<SourcesProperty>>,
    pub subscriptions: Option<Box<SubscriptionsProperty>>,
    pub tax: Option<CustomerTax>,
    pub tax_exempt: Option<String>,
    pub tax_ids: Option<Box<TaxIdsProperty>>,
    pub test_clock: Option<TestClockOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerAcceptance {
    pub accepted_at: Option<i32>,
    pub offline: Option<OfflineAcceptance>,
    pub online: Option<OnlineAcceptance>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceCustomerBalanceSettings {
    pub reconciliation_mode: String,
    pub using_merchant_default: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft {
    pub balance_transaction: Box<BalanceTransactionOrRef>,
    pub linked_transaction: Box<LinkedTransactionOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction {
    pub payment_intent: Box<PaymentIntentOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction {
    pub bank_transfer:
        CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer {
    pub eu_bank_transfer: Option<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer>,
    pub gb_bank_transfer: Option<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer>,
    pub jp_bank_transfer: Option<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer>,
    pub reference: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_transfer: Option<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
{
    pub bic: Option<String>,
    pub iban_last4: Option<String>,
    pub sender_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
{
    pub account_number_last4: Option<String>,
    pub sender_name: Option<String>,
    pub sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
{
    pub sender_bank: Option<String>,
    pub sender_branch: Option<String>,
    pub sender_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
{
    pub network: Option<String>,
    pub sender_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction {
    pub refund: Box<RefundOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance {
    pub balance_transaction: Box<BalanceTransactionOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction {
    pub payment_intent: Box<PaymentIntentOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerBalanceTransaction {
    pub amount: i32,
    pub checkout_session: Option<CheckoutSessionOrRef>,
    pub created: i32,
    pub credit_note: Option<Box<CreditNoteOrRef>>,
    pub currency: String,
    pub customer: CustomerOrRef,
    pub description: Option<String>,
    pub ending_balance: i32,
    pub id: String,
    pub invoice: Option<InvoiceOrRef>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerCashBalanceTransaction {
    pub adjusted_for_overdraft:
        Option<Box<CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft>>,
    pub applied_to_payment: Option<
        Box<CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction>,
    >,
    pub created: i32,
    pub currency: String,
    pub customer: Box<CustomerOrRef>,
    pub ending_balance: i32,
    pub funded: Option<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction>,
    pub id: String,
    pub livemode: bool,
    pub net_amount: i32,
    pub object: String,
    pub refunded_from_payment: Option<
        Box<CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction>,
    >,
    pub transferred_to_balance:
        Option<Box<CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unapplied_from_payment: Option<
        Box<CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction>,
    >,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSession {
    pub client_secret: String,
    pub components: Option<CustomerSessionResourceComponents>,
    pub created: i32,
    pub customer: CustomerOrRef,
    pub expires_at: i32,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponents {
    pub buy_button: CustomerSessionResourceComponentsResourceBuyButton,
    pub customer_sheet: CustomerSessionResourceComponentsResourceCustomerSheet,
    pub mobile_payment_element: CustomerSessionResourceComponentsResourceMobilePaymentElement,
    pub payment_element: CustomerSessionResourceComponentsResourcePaymentElement,
    pub pricing_table: CustomerSessionResourceComponentsResourcePricingTable,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourceBuyButton {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourceCustomerSheet {
    pub enabled: bool,
    pub features: Option<CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures {
    pub payment_method_allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_remove: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourceMobilePaymentElement {
    pub enabled: bool,
    pub features:
        Option<CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures {
    pub payment_method_allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_redisplay: Option<String>,
    pub payment_method_remove: Option<String>,
    pub payment_method_save: Option<String>,
    pub payment_method_save_allow_redisplay_override: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourcePaymentElement {
    pub enabled: bool,
    pub features: Option<CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures {
    pub payment_method_allow_redisplay_filters: Vec<String>,
    pub payment_method_redisplay: String,
    pub payment_method_redisplay_limit: Option<i32>,
    pub payment_method_remove: String,
    pub payment_method_save: String,
    pub payment_method_save_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerSessionResourceComponentsResourcePricingTable {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerTax {
    pub automatic_tax: String,
    pub ip_address: Option<String>,
    pub location: Option<CustomerTaxLocation>,
    pub provider: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomerTaxLocation {
    pub country: String,
    pub source: String,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedAccount {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedApplePayDomain {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedApplication {
    pub deleted: bool,
    pub id: String,
    pub name: Option<String>,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedBankAccount {
    pub currency: Option<String>,
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedCard {
    pub currency: Option<String>,
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedCoupon {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedCustomer {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedDiscount {
    pub checkout_session: Option<String>,
    pub customer: Option<Box<CustomerUnion>>,
    pub deleted: bool,
    pub id: String,
    pub invoice: Option<String>,
    pub invoice_item: Option<String>,
    pub object: String,
    pub promotion_code: Option<Box<PromotionCodeOrRef>>,
    pub source: DiscountSource,
    pub start: i32,
    pub subscription: Option<String>,
    pub subscription_item: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DeletedExternalAccount {
    DeletedBankAccount(DeletedBankAccount),
    DeletedCard(DeletedCard),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedInvoice {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedInvoiceitem {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum DeletedPaymentSource {
    DeletedBankAccount(DeletedBankAccount),
    DeletedCard(DeletedCard),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedPerson {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedPlan {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedPrice {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedProduct {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedProductFeature {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedRadarValueList {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedRadarValueListItem {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedSubscriptionItem {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedTaxId {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedTerminalConfiguration {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedTerminalLocation {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedTerminalReader {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedTestHelpersTestClock {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeletedWebhookEndpoint {
    pub deleted: bool,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DestinationDetailsUnimplemented {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Discount {
    pub checkout_session: Option<String>,
    pub customer: Option<Box<CustomerUnion>>,
    pub end: Option<i32>,
    pub id: String,
    pub invoice: Option<String>,
    pub invoice_item: Option<String>,
    pub object: String,
    pub promotion_code: Option<Box<PromotionCodeOrRef>>,
    pub source: DiscountSource,
    pub start: i32,
    pub subscription: Option<String>,
    pub subscription_item: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscountSource {
    pub coupon: Option<CouponOrRef>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscountsResourceDiscountAmount {
    pub amount: i32,
    pub discount: Box<DiscountUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscountsResourceStackableDiscount {
    pub coupon: Option<CouponOrRef>,
    pub discount: Option<Box<DiscountOrRef>>,
    pub promotion_code: Option<Box<PromotionCodeOrRef>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Dispute {
    pub amount: i32,
    pub balance_transactions: Vec<Box<BalanceTransaction>>,
    pub charge: Box<ChargeOrRef>,
    pub created: i32,
    pub currency: String,
    pub enhanced_eligibility_types: Vec<String>,
    pub evidence: DisputeEvidence,
    pub evidence_details: DisputeEvidenceDetails,
    pub id: String,
    pub is_charge_refundable: bool,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub payment_intent: Option<Box<PaymentIntentOrRef>>,
    pub payment_method_details: Option<DisputePaymentMethodDetails>,
    pub reason: String,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEligibility {
    pub visa_compelling_evidence_3: Option<DisputeEnhancedEligibilityVisaCompellingEvidence3>,
    pub visa_compliance: Option<DisputeEnhancedEligibilityVisaCompliance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEligibilityVisaCompellingEvidence3 {
    pub required_actions: Vec<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEligibilityVisaCompliance {
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEvidence {
    pub visa_compelling_evidence_3: Option<DisputeEnhancedEvidenceVisaCompellingEvidence3>,
    pub visa_compliance: Option<DisputeEnhancedEvidenceVisaCompliance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEvidenceVisaCompellingEvidence3 {
    pub disputed_transaction: Option<DisputeVisaCompellingEvidence3DisputedTransaction>,
    pub prior_undisputed_transactions:
        Vec<DisputeVisaCompellingEvidence3PriorUndisputedTransaction>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEnhancedEvidenceVisaCompliance {
    pub fee_acknowledged: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEvidence {
    pub access_activity_log: Option<String>,
    pub billing_address: Option<String>,
    pub cancellation_policy: Option<CancellationPolicyOrRef>,
    pub cancellation_policy_disclosure: Option<String>,
    pub cancellation_rebuttal: Option<String>,
    pub customer_communication: Option<CustomerCommunicationOrRef>,
    pub customer_email_address: Option<String>,
    pub customer_name: Option<String>,
    pub customer_purchase_ip: Option<String>,
    pub customer_signature: Option<CustomerSignatureOrRef>,
    pub duplicate_charge_documentation: Option<DuplicateChargeDocumentationOrRef>,
    pub duplicate_charge_explanation: Option<String>,
    pub duplicate_charge_id: Option<String>,
    pub enhanced_evidence: DisputeEnhancedEvidence,
    pub product_description: Option<String>,
    pub receipt: Option<ReceiptOrRef>,
    pub refund_policy: Option<RefundPolicyOrRef>,
    pub refund_policy_disclosure: Option<String>,
    pub refund_refusal_explanation: Option<String>,
    pub service_date: Option<String>,
    pub service_documentation: Option<ServiceDocumentationOrRef>,
    pub shipping_address: Option<String>,
    pub shipping_carrier: Option<String>,
    pub shipping_date: Option<String>,
    pub shipping_documentation: Option<ShippingDocumentationOrRef>,
    pub shipping_tracking_number: Option<String>,
    pub uncategorized_file: Option<UncategorizedFileOrRef>,
    pub uncategorized_text: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeEvidenceDetails {
    pub due_by: Option<i32>,
    pub enhanced_eligibility: DisputeEnhancedEligibility,
    pub has_evidence: bool,
    pub past_due: bool,
    pub submission_count: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputePaymentMethodDetails {
    pub amazon_pay: Option<DisputePaymentMethodDetailsAmazonPay>,
    pub card: Option<DisputePaymentMethodDetailsCard>,
    pub klarna: Option<DisputePaymentMethodDetailsKlarna>,
    pub paypal: Option<DisputePaymentMethodDetailsPaypal>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputePaymentMethodDetailsAmazonPay {
    pub dispute_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputePaymentMethodDetailsCard {
    pub brand: String,
    pub case_type: String,
    pub network_reason_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputePaymentMethodDetailsKlarna {
    pub chargeback_loss_reason_code: Option<String>,
    pub reason_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputePaymentMethodDetailsPaypal {
    pub case_id: Option<String>,
    pub reason_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeTransactionShippingAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeVisaCompellingEvidence3DisputedTransaction {
    pub customer_account_id: Option<String>,
    pub customer_device_fingerprint: Option<String>,
    pub customer_device_id: Option<String>,
    pub customer_email_address: Option<String>,
    pub customer_purchase_ip: Option<String>,
    pub merchandise_or_services: Option<String>,
    pub product_description: Option<String>,
    pub shipping_address: Option<DisputeTransactionShippingAddress>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DisputeVisaCompellingEvidence3PriorUndisputedTransaction {
    pub charge: String,
    pub customer_account_id: Option<String>,
    pub customer_device_fingerprint: Option<String>,
    pub customer_device_id: Option<String>,
    pub customer_email_address: Option<String>,
    pub customer_purchase_ip: Option<String>,
    pub product_description: Option<String>,
    pub shipping_address: Option<DisputeTransactionShippingAddress>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmailSent {
    pub email_sent_at: i32,
    pub email_sent_to: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EntitlementsActiveEntitlement {
    pub feature: FeatureOrRef,
    pub id: String,
    pub livemode: bool,
    pub lookup_key: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EntitlementsFeature {
    pub active: bool,
    pub id: String,
    pub livemode: bool,
    pub lookup_key: String,
    pub metadata: MetadataProperty,
    pub name: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EphemeralKey {
    pub created: i32,
    pub expires: i32,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub secret: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Event {
    pub account: Option<String>,
    pub api_version: Option<String>,
    pub context: Option<String>,
    pub created: i32,
    pub data: NotificationEventData,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub pending_webhooks: i32,
    pub request: Option<NotificationEventRequest>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExchangeRate {
    pub id: String,
    pub object: String,
    pub rates: RatesProperty,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ExternalAccount {
    BankAccount(BankAccount),
    Card(Card),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExternalAccountRequirements {
    pub currently_due: Option<Vec<String>>,
    pub errors: Option<Vec<AccountRequirementsError>>,
    pub past_due: Option<Vec<String>>,
    pub pending_verification: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Fee {
    pub amount: i32,
    pub application: Option<String>,
    pub currency: String,
    pub description: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FeeRefund {
    pub amount: i32,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub created: i32,
    pub currency: String,
    pub fee: Box<FeeOrRef>,
    pub id: String,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct File {
    pub created: i32,
    pub expires_at: Option<i32>,
    pub filename: Option<String>,
    pub id: String,
    pub links: Option<Box<LinksProperty>>,
    pub object: String,
    pub purpose: String,
    pub size: i32,
    pub title: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FileLink {
    pub created: i32,
    pub expired: bool,
    pub expires_at: Option<i32>,
    pub file: Box<FileOrRef>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialConnectionsAccount {
    pub account_holder: Option<BankConnectionsResourceAccountholder>,
    pub account_numbers: Option<Vec<BankConnectionsResourceAccountNumberDetails>>,
    pub balance: Option<BankConnectionsResourceBalance>,
    pub balance_refresh: Option<BankConnectionsResourceBalanceRefresh>,
    pub category: String,
    pub created: i32,
    pub display_name: Option<String>,
    pub id: String,
    pub institution_name: String,
    pub last4: Option<String>,
    pub livemode: bool,
    pub object: String,
    pub ownership: Option<OwnershipOrRef>,
    pub ownership_refresh: Option<BankConnectionsResourceOwnershipRefresh>,
    pub permissions: Option<Vec<String>>,
    pub status: String,
    pub subcategory: String,
    pub subscriptions: Option<Vec<String>>,
    pub supported_payment_method_types: Vec<String>,
    pub transaction_refresh: Option<BankConnectionsResourceTransactionRefresh>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialConnectionsAccountOwner {
    pub email: Option<String>,
    pub id: String,
    pub name: String,
    pub object: String,
    pub ownership: String,
    pub phone: Option<String>,
    pub raw_address: Option<String>,
    pub refreshed_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialConnectionsAccountOwnership {
    pub created: i32,
    pub id: String,
    pub object: String,
    pub owners: OwnersProperty,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialConnectionsSession {
    pub account_holder: Option<BankConnectionsResourceAccountholder>,
    pub accounts: AccountsProperty,
    pub client_secret: Option<String>,
    pub filters: Option<BankConnectionsResourceLinkAccountSessionFilters>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub permissions: Vec<String>,
    pub prefetch: Option<Vec<String>>,
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialConnectionsTransaction {
    pub account: String,
    pub amount: i32,
    pub currency: String,
    pub description: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub status: String,
    pub status_transitions: BankConnectionsResourceTransactionResourceStatusTransitions,
    pub transacted_at: i32,
    pub transaction_refresh: String,
    pub updated: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FinancialReportingFinanceReportRunRunParameters {
    pub columns: Option<Vec<String>>,
    pub connected_account: Option<String>,
    pub currency: Option<String>,
    pub interval_end: Option<i32>,
    pub interval_start: Option<i32>,
    pub payout: Option<String>,
    pub reporting_category: Option<String>,
    pub timezone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForwardedRequestContext {
    pub destination_duration: i32,
    pub destination_ip_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForwardedRequestDetails {
    pub body: String,
    pub headers: Vec<ForwardedRequestHeader>,
    pub http_method: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForwardedRequestHeader {
    pub name: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForwardedResponseDetails {
    pub body: String,
    pub headers: Vec<ForwardedRequestHeader>,
    pub status: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForwardingRequest {
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub payment_method: String,
    pub replacements: Vec<String>,
    pub request_context: Option<ForwardedRequestContext>,
    pub request_details: Option<ForwardedRequestDetails>,
    pub response_details: Option<ForwardedResponseDetails>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructions {
    pub bank_transfer: FundingInstructionsBankTransfer,
    pub currency: String,
    pub funding_type: String,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransfer {
    pub country: String,
    pub financial_addresses: Vec<FundingInstructionsBankTransferFinancialAddress>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferAbaRecord {
    pub account_holder_address: Address,
    pub account_holder_name: String,
    pub account_number: String,
    pub account_type: String,
    pub bank_address: Address,
    pub bank_name: String,
    pub routing_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferFinancialAddress {
    pub aba: Option<FundingInstructionsBankTransferAbaRecord>,
    pub iban: Option<FundingInstructionsBankTransferIbanRecord>,
    pub sort_code: Option<FundingInstructionsBankTransferSortCodeRecord>,
    pub spei: Option<FundingInstructionsBankTransferSpeiRecord>,
    pub supported_networks: Option<Vec<String>>,
    pub swift: Option<FundingInstructionsBankTransferSwiftRecord>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub zengin: Option<FundingInstructionsBankTransferZenginRecord>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferIbanRecord {
    pub account_holder_address: Address,
    pub account_holder_name: String,
    pub bank_address: Address,
    pub bic: String,
    pub country: String,
    pub iban: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferSortCodeRecord {
    pub account_holder_address: Address,
    pub account_holder_name: String,
    pub account_number: String,
    pub bank_address: Address,
    pub sort_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferSpeiRecord {
    pub account_holder_address: Address,
    pub account_holder_name: String,
    pub bank_address: Address,
    pub bank_code: String,
    pub bank_name: String,
    pub clabe: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferSwiftRecord {
    pub account_holder_address: Address,
    pub account_holder_name: String,
    pub account_number: String,
    pub account_type: String,
    pub bank_address: Address,
    pub bank_name: String,
    pub swift_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FundingInstructionsBankTransferZenginRecord {
    pub account_holder_address: Address,
    pub account_holder_name: Option<String>,
    pub account_number: Option<String>,
    pub account_type: Option<String>,
    pub bank_address: Address,
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub branch_code: Option<String>,
    pub branch_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDataDocumentReportDateOfBirth {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDataDocumentReportExpirationDate {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDataDocumentReportIssuedDate {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDataIdNumberReportDate {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDataVerifiedOutputsDate {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDocumentReport {
    pub address: Option<Address>,
    pub dob: Option<GelatoDataDocumentReportDateOfBirth>,
    pub error: Option<GelatoDocumentReportError>,
    pub expiration_date: Option<GelatoDataDocumentReportExpirationDate>,
    pub files: Option<Vec<String>>,
    pub first_name: Option<String>,
    pub issued_date: Option<GelatoDataDocumentReportIssuedDate>,
    pub issuing_country: Option<String>,
    pub last_name: Option<String>,
    pub number: Option<String>,
    pub sex: Option<String>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub unparsed_place_of_birth: Option<String>,
    pub unparsed_sex: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoDocumentReportError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoEmailReport {
    pub email: Option<String>,
    pub error: Option<GelatoEmailReportError>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoEmailReportError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoIdNumberReport {
    pub dob: Option<GelatoDataIdNumberReportDate>,
    pub error: Option<GelatoIdNumberReportError>,
    pub first_name: Option<String>,
    pub id_number: Option<String>,
    pub id_number_type: Option<String>,
    pub last_name: Option<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoIdNumberReportError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoPhoneReport {
    pub error: Option<GelatoPhoneReportError>,
    pub phone: Option<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoPhoneReportError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoProvidedDetails {
    pub email: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoRelatedPerson {
    pub account: String,
    pub person: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoReportDocumentOptions {
    pub allowed_types: Option<Vec<String>>,
    pub require_id_number: Option<bool>,
    pub require_live_capture: Option<bool>,
    pub require_matching_selfie: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoReportIdNumberOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSelfieReport {
    pub document: Option<String>,
    pub error: Option<GelatoSelfieReportError>,
    pub selfie: Option<String>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSelfieReportError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionDocumentOptions {
    pub allowed_types: Option<Vec<String>>,
    pub require_id_number: Option<bool>,
    pub require_live_capture: Option<bool>,
    pub require_matching_selfie: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionEmailOptions {
    pub require_verification: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionIdNumberOptions {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionLastError {
    pub code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionMatchingOptions {
    pub dob: Option<String>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoSessionPhoneOptions {
    pub require_verification: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoVerificationReportOptions {
    pub document: Option<GelatoReportDocumentOptions>,
    pub id_number: Option<GelatoReportIdNumberOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoVerificationSessionOptions {
    pub document: Option<GelatoSessionDocumentOptions>,
    pub email: Option<GelatoSessionEmailOptions>,
    pub id_number: Option<GelatoSessionIdNumberOptions>,
    pub matching: Option<GelatoSessionMatchingOptions>,
    pub phone: Option<GelatoSessionPhoneOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GelatoVerifiedOutputs {
    pub address: Option<Address>,
    pub dob: Option<GelatoDataVerifiedOutputsDate>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub id_number: Option<String>,
    pub id_number_type: Option<String>,
    pub last_name: Option<String>,
    pub phone: Option<String>,
    pub sex: Option<String>,
    pub unparsed_place_of_birth: Option<String>,
    pub unparsed_sex: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IdentityVerificationReport {
    pub client_reference_id: Option<String>,
    pub created: i32,
    pub document: Option<GelatoDocumentReport>,
    pub email: Option<GelatoEmailReport>,
    pub id: String,
    pub id_number: Option<GelatoIdNumberReport>,
    pub livemode: bool,
    pub object: String,
    pub options: Option<GelatoVerificationReportOptions>,
    pub phone: Option<GelatoPhoneReport>,
    pub selfie: Option<GelatoSelfieReport>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub verification_flow: Option<String>,
    pub verification_session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IdentityVerificationSession {
    pub client_reference_id: Option<String>,
    pub client_secret: Option<String>,
    pub created: i32,
    pub id: String,
    pub last_error: Option<GelatoSessionLastError>,
    pub last_verification_report: Option<LastVerificationReportOrRef>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub options: Option<GelatoVerificationSessionOptions>,
    pub provided_details: Option<GelatoProvidedDetails>,
    pub redaction: Option<VerificationSessionRedaction>,
    pub related_customer: Option<String>,
    pub related_person: Option<GelatoRelatedPerson>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: Option<String>,
    pub verification_flow: Option<String>,
    pub verified_outputs: Option<GelatoVerifiedOutputs>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InboundTransfers {
    pub billing_details: TreasurySharedResourceBillingDetails,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<InboundTransfersPaymentMethodDetailsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InboundTransfersPaymentMethodDetailsUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<MandateOrRef>,
    pub network: String,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InternalCard {
    pub brand: Option<String>,
    pub country: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Invoice {
    pub account_country: Option<String>,
    pub account_name: Option<String>,
    pub account_tax_ids: Option<Vec<Box<AccountTaxIdsItemUnion>>>,
    pub amount_due: i32,
    pub amount_overpaid: i32,
    pub amount_paid: i32,
    pub amount_remaining: i32,
    pub amount_shipping: i32,
    pub application: Option<ApplicationUnion>,
    pub attempt_count: i32,
    pub attempted: bool,
    pub auto_advance: bool,
    pub automatic_tax: Box<AutomaticTax>,
    pub automatically_finalizes_at: Option<i32>,
    pub billing_reason: Option<String>,
    pub collection_method: String,
    pub confirmation_secret: Option<InvoicesResourceConfirmationSecret>,
    pub created: i32,
    pub currency: String,
    pub custom_fields: Option<Vec<InvoiceSettingCustomField>>,
    pub customer: Box<CustomerUnion>,
    pub customer_address: Option<Address>,
    pub customer_email: Option<String>,
    pub customer_name: Option<String>,
    pub customer_phone: Option<String>,
    pub customer_shipping: Option<Shipping>,
    pub customer_tax_exempt: Option<String>,
    pub customer_tax_ids: Option<Vec<InvoicesResourceInvoiceTaxId>>,
    pub default_payment_method: Option<Box<DefaultPaymentMethodOrRef>>,
    pub default_source: Option<Box<DefaultSourceUnion>>,
    pub default_tax_rates: Vec<TaxRate>,
    pub description: Option<String>,
    pub discounts: Vec<Box<DiscountsItemUnion>>,
    pub due_date: Option<i32>,
    pub effective_at: Option<i32>,
    pub ending_balance: Option<i32>,
    pub footer: Option<String>,
    pub from_invoice: Option<Box<InvoicesResourceFromInvoice>>,
    pub hosted_invoice_url: Option<String>,
    pub id: String,
    pub invoice_pdf: Option<String>,
    pub issuer: Box<ConnectAccountReference>,
    pub last_finalization_error: Option<Box<ApiErrors>>,
    pub latest_revision: Option<Box<LatestRevisionOrRef>>,
    pub lines: Box<LinesProperty2>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub next_payment_attempt: Option<i32>,
    pub number: Option<String>,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub parent: Option<Box<BillingBillResourceInvoicingParentsInvoiceParent>>,
    pub payment_settings: InvoicesPaymentSettings,
    pub payments: Option<Box<PaymentsProperty>>,
    pub period_end: i32,
    pub period_start: i32,
    pub post_payment_credit_notes_amount: i32,
    pub pre_payment_credit_notes_amount: i32,
    pub receipt_number: Option<String>,
    pub rendering: Option<InvoicesResourceInvoiceRendering>,
    pub shipping_cost: Option<InvoicesResourceShippingCost>,
    pub shipping_details: Option<Shipping>,
    pub starting_balance: i32,
    pub statement_descriptor: Option<String>,
    pub status: Option<String>,
    pub status_transitions: InvoicesResourceStatusTransitions,
    pub subtotal: i32,
    pub subtotal_excluding_tax: Option<i32>,
    pub test_clock: Option<TestClockOrRef>,
    pub threshold_reason: Option<InvoiceThresholdReason>,
    pub total: i32,
    pub total_discount_amounts: Option<Vec<Box<DiscountsResourceDiscountAmount>>>,
    pub total_excluding_tax: Option<i32>,
    pub total_pretax_credit_amounts: Option<Vec<Box<InvoicesResourcePretaxCreditAmount>>>,
    pub total_taxes: Option<Vec<BillingBillResourceInvoicingTaxesTax>>,
    pub webhooks_delivered_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceInstallmentsCard {
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceItemThresholdReason {
    pub line_item_ids: Vec<String>,
    pub usage_gte: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceLineItemPeriod {
    pub end: i32,
    pub start: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceMandateOptionsCard {
    pub amount: Option<i32>,
    pub amount_type: Option<String>,
    pub description: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePayment {
    pub amount_paid: Option<i32>,
    pub amount_requested: i32,
    pub created: i32,
    pub currency: String,
    pub id: String,
    pub invoice: Box<InvoiceUnion>,
    pub is_default: bool,
    pub livemode: bool,
    pub object: String,
    pub payment: Box<InvoicesPaymentsInvoicePaymentAssociatedPayment>,
    pub status: String,
    pub status_transitions: InvoicesPaymentsInvoicePaymentStatusTransitions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsAcssDebit {
    pub mandate_options: Option<InvoicePaymentMethodOptionsAcssDebitMandateOptions>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsAcssDebitMandateOptions {
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsBancontact {
    pub preferred_language: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsCard {
    pub installments: Option<InvoiceInstallmentsCard>,
    pub request_three_d_secure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsCustomerBalance {
    pub bank_transfer: Option<InvoicePaymentMethodOptionsCustomerBalanceBankTransfer>,
    pub funding_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsCustomerBalanceBankTransfer {
    pub eu_bank_transfer:
        Option<InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsKonbini {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsSepaDebit {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsUsBankAccount {
    pub financial_connections: Option<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions {
    pub filters: Option<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters>,
    pub permissions: Option<Vec<String>>,
    pub prefetch: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters {
    pub account_subcategories: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceRenderingPdf {
    pub page_size: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceRenderingTemplate {
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub nickname: Option<String>,
    pub object: String,
    pub status: String,
    pub version: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingCheckoutRenderingOptions {
    pub amount_tax_display: Option<String>,
    pub template: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingCustomField {
    pub name: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingCustomerRenderingOptions {
    pub amount_tax_display: Option<String>,
    pub template: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingCustomerSetting {
    pub custom_fields: Option<Vec<InvoiceSettingCustomField>>,
    pub default_payment_method: Option<Box<DefaultPaymentMethodOrRef>>,
    pub footer: Option<String>,
    pub rendering_options: Option<InvoiceSettingCustomerRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingQuoteSetting {
    pub days_until_due: Option<i32>,
    pub issuer: ConnectAccountReference,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingSubscriptionSchedulePhaseSetting {
    pub account_tax_ids: Option<Vec<Box<AccountTaxIdsItemUnion>>>,
    pub days_until_due: Option<i32>,
    pub issuer: Option<Box<ConnectAccountReference>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceSettingSubscriptionScheduleSetting {
    pub account_tax_ids: Option<Vec<Box<AccountTaxIdsItemUnion>>>,
    pub days_until_due: Option<i32>,
    pub issuer: Box<ConnectAccountReference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceThresholdReason {
    pub amount_gte: Option<i32>,
    pub item_reasons: Vec<InvoiceItemThresholdReason>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Invoiceitem {
    pub amount: i32,
    pub currency: String,
    pub customer: CustomerUnion,
    pub date: i32,
    pub description: Option<String>,
    pub discountable: bool,
    pub discounts: Option<Vec<DiscountsItemOrRef>>,
    pub id: String,
    pub invoice: Option<InvoiceOrRef>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub net_amount: Option<i32>,
    pub object: String,
    pub parent: Option<BillingBillResourceInvoiceItemParentsInvoiceItemParent>,
    pub period: InvoiceLineItemPeriod,
    pub pricing: Option<BillingBillResourceInvoicingPricingPricing>,
    pub proration: bool,
    pub proration_details: Option<ProrationDetails>,
    pub quantity: i32,
    pub tax_rates: Option<Vec<TaxRate>>,
    pub test_clock: Option<TestClockOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesPaymentMethodOptions {
    pub acss_debit: Option<InvoicePaymentMethodOptionsAcssDebit>,
    pub bancontact: Option<InvoicePaymentMethodOptionsBancontact>,
    pub card: Option<InvoicePaymentMethodOptionsCard>,
    pub customer_balance: Option<InvoicePaymentMethodOptionsCustomerBalance>,
    pub konbini: Option<InvoicePaymentMethodOptionsKonbini>,
    pub sepa_debit: Option<InvoicePaymentMethodOptionsSepaDebit>,
    pub us_bank_account: Option<InvoicePaymentMethodOptionsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesPaymentSettings {
    pub default_mandate: Option<String>,
    pub payment_method_options: Option<InvoicesPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesPaymentsInvoicePaymentAssociatedPayment {
    pub charge: Option<Box<ChargeOrRef>>,
    pub payment_intent: Option<Box<PaymentIntentOrRef>>,
    pub payment_record: Option<Box<PaymentRecordOrRef>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesPaymentsInvoicePaymentStatusTransitions {
    pub canceled_at: Option<i32>,
    pub paid_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceConfirmationSecret {
    pub client_secret: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceFromInvoice {
    pub action: String,
    pub invoice: Box<InvoiceOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceInvoiceRendering {
    pub amount_tax_display: Option<String>,
    pub pdf: Option<InvoiceRenderingPdf>,
    pub template: Option<String>,
    pub template_version: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceInvoiceTaxId {
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourcePretaxCreditAmount {
    pub amount: i32,
    pub credit_balance_transaction: Option<Box<CreditBalanceTransactionOrRef>>,
    pub discount: Option<Box<DiscountUnion>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceShippingCost {
    pub amount_subtotal: i32,
    pub amount_tax: i32,
    pub amount_total: i32,
    pub shipping_rate: Option<ShippingRateOrRef>,
    pub taxes: Option<Vec<LineItemsTaxAmount>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoicesResourceStatusTransitions {
    pub finalized_at: Option<i32>,
    pub marked_uncollectible_at: Option<i32>,
    pub paid_at: Option<i32>,
    pub voided_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorization {
    pub amount: i32,
    pub amount_details: Option<IssuingAuthorizationAmountDetails>,
    pub approved: bool,
    pub authorization_method: String,
    pub balance_transactions: Vec<Box<BalanceTransaction>>,
    pub card: IssuingCard,
    pub cardholder: Option<CardholderOrRef>,
    pub created: i32,
    pub currency: String,
    pub fleet: Option<IssuingAuthorizationFleetData>,
    pub fraud_challenges: Option<Vec<IssuingAuthorizationFraudChallenge>>,
    pub fuel: Option<IssuingAuthorizationFuelData>,
    pub id: String,
    pub livemode: bool,
    pub merchant_amount: i32,
    pub merchant_currency: String,
    pub merchant_data: IssuingAuthorizationMerchantData,
    pub metadata: MetadataProperty,
    pub network_data: Option<IssuingAuthorizationNetworkData>,
    pub object: String,
    pub pending_request: Option<IssuingAuthorizationPendingRequest>,
    pub request_history: Vec<IssuingAuthorizationRequest>,
    pub status: String,
    pub token: Option<TokenOrRef>,
    pub transactions: Vec<Box<IssuingTransaction>>,
    pub treasury: Option<IssuingAuthorizationTreasury>,
    pub verification_data: IssuingAuthorizationVerificationData,
    pub verified_by_fraud_challenge: Option<bool>,
    pub wallet: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCard {
    pub brand: String,
    pub cancellation_reason: Option<String>,
    pub cardholder: IssuingCardholder,
    pub created: i32,
    pub currency: String,
    pub cvc: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub financial_account: Option<String>,
    pub id: String,
    pub last4: String,
    pub latest_fraud_warning: Option<IssuingCardFraudWarning>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub number: Option<String>,
    pub object: String,
    pub personalization_design: Option<PersonalizationDesignOrRef>,
    pub replaced_by: Option<Box<ReplacedByOrRef>>,
    pub replacement_for: Option<Box<ReplacementForOrRef>>,
    pub replacement_reason: Option<String>,
    pub second_line: Option<String>,
    pub shipping: Option<IssuingCardShipping>,
    pub spending_controls: IssuingCardAuthorizationControls,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
    pub wallets: Option<IssuingCardWallets>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholder {
    pub billing: IssuingCardholderAddress,
    pub company: Option<IssuingCardholderCompany>,
    pub created: i32,
    pub email: Option<String>,
    pub id: String,
    pub individual: Option<IssuingCardholderIndividual>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub name: String,
    pub object: String,
    pub phone_number: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub requirements: IssuingCardholderRequirements,
    pub spending_controls: Option<IssuingCardholderAuthorizationControls>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDispute {
    pub amount: i32,
    pub balance_transactions: Option<Vec<Box<BalanceTransaction>>>,
    pub created: i32,
    pub currency: String,
    pub evidence: IssuingDisputeEvidence,
    pub id: String,
    pub livemode: bool,
    pub loss_reason: Option<String>,
    pub metadata: MetadataProperty,
    pub object: String,
    pub status: String,
    pub transaction: Box<TransactionOrRef>,
    pub treasury: Option<IssuingDisputeTreasury>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPersonalizationDesign {
    pub card_logo: Option<CardLogoOrRef>,
    pub carrier_text: Option<IssuingPersonalizationDesignCarrierText>,
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub lookup_key: Option<String>,
    pub metadata: MetadataProperty,
    pub name: Option<String>,
    pub object: String,
    pub physical_bundle: PhysicalBundleOrRef,
    pub preferences: IssuingPersonalizationDesignPreferences,
    pub rejection_reasons: IssuingPersonalizationDesignRejectionReasons,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPhysicalBundle {
    pub features: IssuingPhysicalBundleFeatures,
    pub id: String,
    pub livemode: bool,
    pub name: String,
    pub object: String,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingSettlement {
    pub bin: String,
    pub clearing_date: i32,
    pub created: i32,
    pub currency: String,
    pub id: String,
    pub interchange_fees_amount: i32,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub net_total_amount: i32,
    pub network: String,
    pub network_fees_amount: i32,
    pub network_settlement_identifier: String,
    pub object: String,
    pub settlement_service: String,
    pub status: String,
    pub transaction_amount: i32,
    pub transaction_count: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingToken {
    pub card: CardOrRef,
    pub created: i32,
    pub device_fingerprint: Option<String>,
    pub id: String,
    pub last4: Option<String>,
    pub livemode: bool,
    pub network: String,
    pub network_data: Option<IssuingNetworkTokenNetworkData>,
    pub network_updated_at: i32,
    pub object: String,
    pub status: String,
    pub wallet_provider: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransaction {
    pub amount: i32,
    pub amount_details: Option<IssuingTransactionAmountDetails>,
    pub authorization: Option<Box<AuthorizationOrRef>>,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub card: CardOrRef,
    pub cardholder: Option<CardholderOrRef>,
    pub created: i32,
    pub currency: String,
    pub dispute: Option<Box<DisputeOrRef>>,
    pub id: String,
    pub livemode: bool,
    pub merchant_amount: i32,
    pub merchant_currency: String,
    pub merchant_data: IssuingAuthorizationMerchantData,
    pub metadata: MetadataProperty,
    pub network_data: Option<IssuingTransactionNetworkData>,
    pub object: String,
    pub purchase_details: Option<IssuingTransactionPurchaseDetails>,
    pub token: Option<TokenOrRef>,
    pub treasury: Option<IssuingTransactionTreasury>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub wallet: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationAmountDetails {
    pub atm_fee: Option<i32>,
    pub cashback_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationAuthenticationExemption {
    pub claimed_by: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetCardholderPromptData {
    pub alphanumeric_id: Option<String>,
    pub driver_id: Option<String>,
    pub odometer: Option<i32>,
    pub unspecified_id: Option<String>,
    pub user_id: Option<String>,
    pub vehicle_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetData {
    pub cardholder_prompt_data: Option<IssuingAuthorizationFleetCardholderPromptData>,
    pub purchase_type: Option<String>,
    pub reported_breakdown: Option<IssuingAuthorizationFleetReportedBreakdown>,
    pub service_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetFuelPriceData {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetNonFuelPriceData {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetReportedBreakdown {
    pub fuel: Option<IssuingAuthorizationFleetFuelPriceData>,
    pub non_fuel: Option<IssuingAuthorizationFleetNonFuelPriceData>,
    pub tax: Option<IssuingAuthorizationFleetTaxData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFleetTaxData {
    pub local_amount_decimal: Option<String>,
    pub national_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFraudChallenge {
    pub channel: String,
    pub status: String,
    pub undeliverable_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationFuelData {
    pub industry_product_code: Option<String>,
    pub quantity_decimal: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub unit: Option<String>,
    pub unit_cost_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationMerchantData {
    pub category: String,
    pub category_code: String,
    pub city: Option<String>,
    pub country: Option<String>,
    pub name: Option<String>,
    pub network_id: String,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub tax_id: Option<String>,
    pub terminal_id: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationNetworkData {
    pub acquiring_institution_id: Option<String>,
    pub system_trace_audit_number: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationPendingRequest {
    pub amount: i32,
    pub amount_details: Option<IssuingAuthorizationAmountDetails>,
    pub currency: String,
    pub is_amount_controllable: bool,
    pub merchant_amount: i32,
    pub merchant_currency: String,
    pub network_risk_score: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationRequest {
    pub amount: i32,
    pub amount_details: Option<IssuingAuthorizationAmountDetails>,
    pub approved: bool,
    pub authorization_code: Option<String>,
    pub created: i32,
    pub currency: String,
    pub merchant_amount: i32,
    pub merchant_currency: String,
    pub network_risk_score: Option<i32>,
    pub reason: String,
    pub reason_message: Option<String>,
    pub requested_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationThreeDSecure {
    pub result: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationTreasury {
    pub received_credits: Vec<String>,
    pub received_debits: Vec<String>,
    pub transaction: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingAuthorizationVerificationData {
    pub address_line1_check: String,
    pub address_postal_code_check: String,
    pub authentication_exemption: Option<IssuingAuthorizationAuthenticationExemption>,
    pub cvc_check: String,
    pub expiry_check: String,
    pub postal_code: Option<String>,
    pub three_d_secure: Option<IssuingAuthorizationThreeDSecure>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardApplePay {
    pub eligible: bool,
    pub ineligible_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardAuthorizationControls {
    pub allowed_categories: Option<Vec<String>>,
    pub allowed_merchant_countries: Option<Vec<String>>,
    pub blocked_categories: Option<Vec<String>>,
    pub blocked_merchant_countries: Option<Vec<String>>,
    pub spending_limits: Option<Vec<IssuingCardSpendingLimit>>,
    pub spending_limits_currency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardFraudWarning {
    pub started_at: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardGooglePay {
    pub eligible: bool,
    pub ineligible_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardShipping {
    pub address: Address,
    pub address_validation: Option<IssuingCardShippingAddressValidation>,
    pub carrier: Option<String>,
    pub customs: Option<IssuingCardShippingCustoms>,
    pub eta: Option<i32>,
    pub name: String,
    pub phone_number: Option<String>,
    pub require_signature: Option<bool>,
    pub service: String,
    pub status: Option<String>,
    pub tracking_number: Option<String>,
    pub tracking_url: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardShippingAddressValidation {
    pub mode: String,
    pub normalized_address: Option<Address>,
    pub result: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardShippingCustoms {
    pub eori_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardSpendingLimit {
    pub amount: i32,
    pub categories: Option<Vec<String>>,
    pub interval: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardWallets {
    pub apple_pay: IssuingCardApplePay,
    pub google_pay: IssuingCardGooglePay,
    pub primary_account_identifier: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderAddress {
    pub address: Address,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderAuthorizationControls {
    pub allowed_categories: Option<Vec<String>>,
    pub allowed_merchant_countries: Option<Vec<String>>,
    pub blocked_categories: Option<Vec<String>>,
    pub blocked_merchant_countries: Option<Vec<String>>,
    pub spending_limits: Option<Vec<IssuingCardholderSpendingLimit>>,
    pub spending_limits_currency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderCardIssuing {
    pub user_terms_acceptance: Option<IssuingCardholderUserTermsAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderCompany {
    pub tax_id_provided: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderIdDocument {
    pub back: Option<BackOrRef>,
    pub front: Option<FrontOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderIndividual {
    pub card_issuing: Option<IssuingCardholderCardIssuing>,
    pub dob: Option<IssuingCardholderIndividualDob>,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub verification: Option<IssuingCardholderVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderIndividualDob {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderRequirements {
    pub disabled_reason: Option<String>,
    pub past_due: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderSpendingLimit {
    pub amount: i32,
    pub categories: Option<Vec<String>>,
    pub interval: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderUserTermsAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingCardholderVerification {
    pub document: Option<IssuingCardholderIdDocument>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeCanceledEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub canceled_at: Option<i32>,
    pub cancellation_policy_provided: Option<bool>,
    pub cancellation_reason: Option<String>,
    pub expected_at: Option<i32>,
    pub explanation: Option<String>,
    pub product_description: Option<String>,
    pub product_type: Option<String>,
    pub return_status: Option<String>,
    pub returned_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeDuplicateEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub card_statement: Option<CardStatementOrRef>,
    pub cash_receipt: Option<CashReceiptOrRef>,
    pub check_image: Option<CheckImageOrRef>,
    pub explanation: Option<String>,
    pub original_transaction: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeEvidence {
    pub canceled: Option<IssuingDisputeCanceledEvidence>,
    pub duplicate: Option<IssuingDisputeDuplicateEvidence>,
    pub fraudulent: Option<IssuingDisputeFraudulentEvidence>,
    pub merchandise_not_as_described: Option<IssuingDisputeMerchandiseNotAsDescribedEvidence>,
    pub no_valid_authorization: Option<IssuingDisputeNoValidAuthorizationEvidence>,
    pub not_received: Option<IssuingDisputeNotReceivedEvidence>,
    pub other: Option<IssuingDisputeOtherEvidence>,
    pub reason: String,
    pub service_not_as_described: Option<IssuingDisputeServiceNotAsDescribedEvidence>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeFraudulentEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub explanation: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeMerchandiseNotAsDescribedEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub explanation: Option<String>,
    pub received_at: Option<i32>,
    pub return_description: Option<String>,
    pub return_status: Option<String>,
    pub returned_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeNoValidAuthorizationEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub explanation: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeNotReceivedEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub expected_at: Option<i32>,
    pub explanation: Option<String>,
    pub product_description: Option<String>,
    pub product_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeOtherEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub explanation: Option<String>,
    pub product_description: Option<String>,
    pub product_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeServiceNotAsDescribedEvidence {
    pub additional_documentation: Option<AdditionalDocumentationOrRef>,
    pub canceled_at: Option<i32>,
    pub cancellation_reason: Option<String>,
    pub explanation: Option<String>,
    pub received_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingDisputeTreasury {
    pub debit_reversal: Option<String>,
    pub received_debit: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenAddress {
    pub line1: String,
    pub postal_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenDevice {
    pub device_fingerprint: Option<String>,
    pub ip_address: Option<String>,
    pub location: Option<String>,
    pub name: Option<String>,
    pub phone_number: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenMastercard {
    pub card_reference_id: Option<String>,
    pub token_reference_id: String,
    pub token_requestor_id: String,
    pub token_requestor_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenNetworkData {
    pub device: Option<IssuingNetworkTokenDevice>,
    pub mastercard: Option<IssuingNetworkTokenMastercard>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub visa: Option<IssuingNetworkTokenVisa>,
    pub wallet_provider: Option<IssuingNetworkTokenWalletProvider>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenVisa {
    pub card_reference_id: String,
    pub token_reference_id: String,
    pub token_requestor_id: String,
    pub token_risk_score: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingNetworkTokenWalletProvider {
    pub account_id: Option<String>,
    pub account_trust_score: Option<i32>,
    pub card_number_source: Option<String>,
    pub cardholder_address: Option<IssuingNetworkTokenAddress>,
    pub cardholder_name: Option<String>,
    pub device_trust_score: Option<i32>,
    pub hashed_account_email_address: Option<String>,
    pub reason_codes: Option<Vec<String>>,
    pub suggested_decision: Option<String>,
    pub suggested_decision_version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPersonalizationDesignCarrierText {
    pub footer_body: Option<String>,
    pub footer_title: Option<String>,
    pub header_body: Option<String>,
    pub header_title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPersonalizationDesignPreferences {
    pub is_default: bool,
    pub is_platform_default: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPersonalizationDesignRejectionReasons {
    pub card_logo: Option<Vec<String>>,
    pub carrier_text: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingPhysicalBundleFeatures {
    pub card_logo: String,
    pub carrier_text: String,
    pub second_line: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionAmountDetails {
    pub atm_fee: Option<i32>,
    pub cashback_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetCardholderPromptData {
    pub driver_id: Option<String>,
    pub odometer: Option<i32>,
    pub unspecified_id: Option<String>,
    pub user_id: Option<String>,
    pub vehicle_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetData {
    pub cardholder_prompt_data: Option<IssuingTransactionFleetCardholderPromptData>,
    pub purchase_type: Option<String>,
    pub reported_breakdown: Option<IssuingTransactionFleetReportedBreakdown>,
    pub service_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetFuelPriceData {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetNonFuelPriceData {
    pub gross_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetReportedBreakdown {
    pub fuel: Option<IssuingTransactionFleetFuelPriceData>,
    pub non_fuel: Option<IssuingTransactionFleetNonFuelPriceData>,
    pub tax: Option<IssuingTransactionFleetTaxData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFleetTaxData {
    pub local_amount_decimal: Option<String>,
    pub national_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFlightData {
    pub departure_at: Option<i32>,
    pub passenger_name: Option<String>,
    pub refundable: Option<bool>,
    pub segments: Option<Vec<IssuingTransactionFlightDataLeg>>,
    pub travel_agency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFlightDataLeg {
    pub arrival_airport_code: Option<String>,
    pub carrier: Option<String>,
    pub departure_airport_code: Option<String>,
    pub flight_number: Option<String>,
    pub service_class: Option<String>,
    pub stopover_allowed: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionFuelData {
    pub industry_product_code: Option<String>,
    pub quantity_decimal: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unit: String,
    pub unit_cost_decimal: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionLodgingData {
    pub check_in_at: Option<i32>,
    pub nights: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionNetworkData {
    pub authorization_code: Option<String>,
    pub processing_date: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionPurchaseDetails {
    pub fleet: Option<IssuingTransactionFleetData>,
    pub flight: Option<IssuingTransactionFlightData>,
    pub fuel: Option<IssuingTransactionFuelData>,
    pub lodging: Option<IssuingTransactionLodgingData>,
    pub receipt: Option<Vec<IssuingTransactionReceiptData>>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionReceiptData {
    pub description: Option<String>,
    pub quantity: Option<f32>,
    pub total: Option<i32>,
    pub unit_cost: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IssuingTransactionTreasury {
    pub received_credit: Option<String>,
    pub received_debit: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Item {
    pub amount_discount: i32,
    pub amount_subtotal: i32,
    pub amount_tax: i32,
    pub amount_total: i32,
    pub currency: String,
    pub description: Option<String>,
    pub discounts: Option<Vec<LineItemsDiscountAmount>>,
    pub id: String,
    pub object: String,
    pub price: Option<Price>,
    pub quantity: Option<i32>,
    pub taxes: Option<Vec<LineItemsTaxAmount>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct KlarnaAddress {
    pub country: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct KlarnaPayerDetails {
    pub address: Option<KlarnaAddress>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityCompany {
    pub address: Option<Address>,
    pub address_kana: Option<LegalEntityJapanAddress>,
    pub address_kanji: Option<LegalEntityJapanAddress>,
    pub directors_provided: Option<bool>,
    pub directorship_declaration: Option<LegalEntityDirectorshipDeclaration>,
    pub executives_provided: Option<bool>,
    pub export_license_id: Option<String>,
    pub export_purpose_code: Option<String>,
    pub name: Option<String>,
    pub name_kana: Option<String>,
    pub name_kanji: Option<String>,
    pub owners_provided: Option<bool>,
    pub ownership_declaration: Option<LegalEntityUboDeclaration>,
    pub ownership_exemption_reason: Option<String>,
    pub phone: Option<String>,
    pub registration_date: Option<LegalEntityRegistrationDate>,
    pub representative_declaration: Option<LegalEntityRepresentativeDeclaration>,
    pub structure: Option<String>,
    pub tax_id_provided: Option<bool>,
    pub tax_id_registrar: Option<String>,
    pub vat_id_provided: Option<bool>,
    pub verification: Option<LegalEntityCompanyVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityCompanyVerification {
    pub document: LegalEntityCompanyVerificationDocument,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityCompanyVerificationDocument {
    pub back: Option<BackOrRef>,
    pub details: Option<String>,
    pub details_code: Option<String>,
    pub front: Option<FrontOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityDirectorshipDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityDob {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityJapanAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub town: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityPersonVerification {
    pub additional_document: Option<LegalEntityPersonVerificationDocument>,
    pub details: Option<String>,
    pub details_code: Option<String>,
    pub document: Option<LegalEntityPersonVerificationDocument>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityPersonVerificationDocument {
    pub back: Option<BackOrRef>,
    pub details: Option<String>,
    pub details_code: Option<String>,
    pub front: Option<FrontOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityRegistrationDate {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityRepresentativeDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LegalEntityUboDeclaration {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItem {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub discount_amounts: Option<Vec<Box<DiscountsResourceDiscountAmount>>>,
    pub discountable: bool,
    pub discounts: Vec<Box<DiscountsItemOrRef>>,
    pub id: String,
    pub invoice: Option<String>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub parent: Option<BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent>,
    pub period: InvoiceLineItemPeriod,
    pub pretax_credit_amounts: Option<Vec<Box<InvoicesResourcePretaxCreditAmount>>>,
    pub pricing: Option<BillingBillResourceInvoicingPricingPricing>,
    pub quantity: Option<i32>,
    pub subscription: Option<Box<SubscriptionOrRef>>,
    pub taxes: Option<Vec<BillingBillResourceInvoicingTaxesTax>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsDiscountAmount {
    pub amount: i32,
    pub discount: Discount,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineItemsTaxAmount {
    pub amount: i32,
    pub rate: TaxRate,
    pub taxability_reason: Option<String>,
    pub taxable_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinkedAccountOptionsCommon {
    pub filters: Option<
        PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters,
    >,
    pub permissions: Option<Vec<String>>,
    pub prefetch: Option<Vec<String>>,
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LoginLink {
    pub created: i32,
    pub object: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Mandate {
    pub customer_acceptance: CustomerAcceptance,
    pub id: String,
    pub livemode: bool,
    pub multi_use: Option<MandateMultiUse>,
    pub object: String,
    pub on_behalf_of: Option<String>,
    pub payment_method: Box<PaymentMethodOrRef>,
    pub payment_method_details: MandatePaymentMethodDetails,
    pub single_use: Option<MandateSingleUse>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateAcssDebit {
    pub default_for: Option<Vec<String>>,
    pub interval_description: Option<String>,
    pub payment_schedule: String,
    pub transaction_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateAmazonPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateAuBecsDebit {
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateBacsDebit {
    pub network_status: String,
    pub reference: String,
    pub revocation_reason: Option<String>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateCashapp {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateKakaoPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateKlarna {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateKrCard {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateLink {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateMultiUse {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateNaverPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateNzBankAccount {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandatePaymentMethodDetails {
    pub acss_debit: Option<MandateAcssDebit>,
    pub amazon_pay: Option<MandateAmazonPay>,
    pub au_becs_debit: Option<MandateAuBecsDebit>,
    pub bacs_debit: Option<MandateBacsDebit>,
    pub card: Option<CardMandatePaymentMethodDetails>,
    pub cashapp: Option<MandateCashapp>,
    pub kakao_pay: Option<MandateKakaoPay>,
    pub klarna: Option<MandateKlarna>,
    pub kr_card: Option<MandateKrCard>,
    pub link: Option<MandateLink>,
    pub naver_pay: Option<MandateNaverPay>,
    pub nz_bank_account: Option<MandateNzBankAccount>,
    pub paypal: Option<MandatePaypal>,
    pub revolut_pay: Option<MandateRevolutPay>,
    pub sepa_debit: Option<MandateSepaDebit>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<MandateUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandatePaypal {
    pub billing_agreement_id: Option<String>,
    pub payer_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateRevolutPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateSepaDebit {
    pub reference: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateSingleUse {
    pub amount: i32,
    pub currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MandateUsBankAccount {
    pub collection_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Networks {
    pub available: Vec<String>,
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotificationEventData {
    pub object: serde_json::Value,
    pub previous_attributes: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotificationEventRequest {
    pub id: Option<String>,
    pub idempotency_key: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OfflineAcceptance {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OnlineAcceptance {
    pub ip_address: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundPaymentsPaymentMethodDetails {
    pub billing_details: TreasurySharedResourceBillingDetails,
    pub financial_account: Option<OutboundPaymentsPaymentMethodDetailsFinancialAccount>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<OutboundPaymentsPaymentMethodDetailsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundPaymentsPaymentMethodDetailsFinancialAccount {
    pub id: String,
    pub network: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundPaymentsPaymentMethodDetailsUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<MandateOrRef>,
    pub network: String,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundTransfersPaymentMethodDetails {
    pub billing_details: TreasurySharedResourceBillingDetails,
    pub financial_account: Option<OutboundTransfersPaymentMethodDetailsFinancialAccount>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<OutboundTransfersPaymentMethodDetailsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundTransfersPaymentMethodDetailsFinancialAccount {
    pub id: String,
    pub network: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutboundTransfersPaymentMethodDetailsUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<MandateOrRef>,
    pub network: String,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PackageDimensions {
    pub height: f32,
    pub length: f32,
    pub weight: f32,
    pub width: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentAttemptRecord {
    pub amount: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_authorized: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_canceled: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_failed: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_guaranteed: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_refunded: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_requested: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub application: Option<String>,
    pub created: i32,
    pub customer_details: Option<PaymentsPrimitivesPaymentRecordsResourceCustomerDetails>,
    pub customer_presence: Option<String>,
    pub description: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub payment_method_details:
        Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails>,
    pub payment_record: Option<String>,
    pub processor_details: PaymentsPrimitivesPaymentRecordsResourceProcessorDetails,
    pub reported_by: String,
    pub shipping_details: Option<PaymentsPrimitivesPaymentRecordsResourceShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetails {
    pub discount_amount: Option<i32>,
    pub line_items: Option<LineItemsProperty2>,
    pub shipping: Option<PaymentFlowsAmountDetailsResourceShipping>,
    pub tax: Option<PaymentFlowsAmountDetailsResourceTax>,
    pub tip: Option<PaymentFlowsAmountDetailsClientResourceTip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsClient {
    pub tip: Option<PaymentFlowsAmountDetailsClientResourceTip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsClientResourceTip {
    pub amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions {
    pub card: Option<PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions>,
    pub card_present: Option<PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions>,
    pub klarna: Option<PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions>,
    pub paypal: Option<PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax {
    pub total_tax_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsResourceShipping {
    pub amount: Option<i32>,
    pub from_postal_code: Option<String>,
    pub to_postal_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAmountDetailsResourceTax {
    pub total_tax_amount: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAutomaticPaymentMethodsPaymentIntent {
    pub allow_redirects: Option<String>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsAutomaticPaymentMethodsSetupIntent {
    pub allow_redirects: Option<String>,
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsInstallmentOptions {
    pub enabled: bool,
    pub plan: Option<PaymentMethodDetailsCardInstallmentsPlan>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPaymentDetails {
    pub customer_reference: Option<String>,
    pub order_reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPaymentIntentAsyncWorkflows {
    pub inputs: Option<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputs {
    pub tax: Option<PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPaymentIntentAsyncWorkflowsResourceInputsResourceTax {
    pub calculation: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPaymentIntentPresentmentDetails {
    pub presentment_amount: i32,
    pub presentment_currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsAlipay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsAlipayDetails {
    pub buyer_id: Option<String>,
    pub fingerprint: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization
{
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization
{
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture
{
    pub maximum_amount_capturable: i32,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture {
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions
{
    pub commodity_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions {
    pub commodity_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsFinancialConnectionsCommonLinkedAccountOptionsFilters {
    pub account_subcategories: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsKlarnaDob {
    pub day: Option<i32>,
    pub month: Option<i32>,
    pub year: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions
{
    pub image_url: Option<String>,
    pub product_url: Option<String>,
    pub reference: Option<String>,
    pub subscription_reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsNaverPayPaymentMethodOptions {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions {
    pub category: Option<String>,
    pub description: Option<String>,
    pub sold_by: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntent {
    pub amount: Option<i32>,
    pub amount_capturable: Option<i32>,
    pub amount_details: Option<AmountDetailsUnion>,
    pub amount_received: Option<i32>,
    pub application: Option<ApplicationOrRef>,
    pub application_fee_amount: Option<i32>,
    pub automatic_payment_methods: Option<PaymentFlowsAutomaticPaymentMethodsPaymentIntent>,
    pub canceled_at: Option<i32>,
    pub cancellation_reason: Option<String>,
    pub capture_method: Option<String>,
    pub client_secret: Option<String>,
    pub confirmation_method: Option<String>,
    pub created: i32,
    pub currency: Option<String>,
    pub customer: Option<Box<CustomerUnion>>,
    pub description: Option<String>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub hooks: Option<PaymentFlowsPaymentIntentAsyncWorkflows>,
    pub id: String,
    pub last_payment_error: Option<Box<ApiErrors>>,
    pub latest_charge: Option<Box<LatestChargeOrRef>>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub next_action: Option<PaymentIntentNextAction>,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub payment_details: Option<PaymentFlowsPaymentDetails>,
    pub payment_method: Option<Box<PaymentMethodOrRef>>,
    pub payment_method_configuration_details:
        Option<PaymentMethodConfigBizPaymentMethodConfigurationDetails>,
    pub payment_method_options: Option<PaymentIntentPaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub presentment_details: Option<PaymentFlowsPaymentIntentPresentmentDetails>,
    pub processing: Option<PaymentIntentProcessing>,
    pub receipt_email: Option<String>,
    pub review: Option<Box<ReviewOrRef>>,
    pub setup_future_usage: Option<String>,
    pub shipping: Option<Shipping>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub status: String,
    pub transfer_data: Option<Box<TransferData>>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentAmountDetailsLineItem {
    pub discount_amount: Option<i32>,
    pub id: String,
    pub object: String,
    pub payment_method_options: Option<
        PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourcePaymentMethodOptions,
    >,
    pub product_code: Option<String>,
    pub product_name: String,
    pub quantity: i32,
    pub tax: Option<PaymentFlowsAmountDetailsResourceLineItemsListResourceLineItemResourceTax>,
    pub unit_cost: i32,
    pub unit_of_measure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentCardProcessing {
    pub customer_notification: Option<PaymentIntentProcessingCustomerNotification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextAction {
    pub alipay_handle_redirect: Option<PaymentIntentNextActionAlipayHandleRedirect>,
    pub boleto_display_details: Option<PaymentIntentNextActionBoleto>,
    pub card_await_notification: Option<PaymentIntentNextActionCardAwaitNotification>,
    pub cashapp_handle_redirect_or_display_qr_code:
        Option<PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode>,
    pub display_bank_transfer_instructions:
        Option<PaymentIntentNextActionDisplayBankTransferInstructions>,
    pub konbini_display_details: Option<PaymentIntentNextActionKonbini>,
    pub multibanco_display_details: Option<PaymentIntentNextActionDisplayMultibancoDetails>,
    pub oxxo_display_details: Option<PaymentIntentNextActionDisplayOxxoDetails>,
    pub paynow_display_qr_code: Option<PaymentIntentNextActionPaynowDisplayQrCode>,
    pub pix_display_qr_code: Option<PaymentIntentNextActionPixDisplayQrCode>,
    pub promptpay_display_qr_code: Option<PaymentIntentNextActionPromptpayDisplayQrCode>,
    pub redirect_to_url: Option<PaymentIntentNextActionRedirectToUrl>,
    pub swish_handle_redirect_or_display_qr_code:
        Option<PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub use_stripe_sdk: Option<serde_json::Value>,
    pub verify_with_microdeposits: Option<PaymentIntentNextActionVerifyWithMicrodeposits>,
    pub wechat_pay_display_qr_code: Option<PaymentIntentNextActionWechatPayDisplayQrCode>,
    pub wechat_pay_redirect_to_android_app:
        Option<PaymentIntentNextActionWechatPayRedirectToAndroidApp>,
    pub wechat_pay_redirect_to_ios_app: Option<PaymentIntentNextActionWechatPayRedirectToIosApp>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionAlipayHandleRedirect {
    pub native_data: Option<String>,
    pub native_url: Option<String>,
    pub return_url: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionBoleto {
    pub expires_at: Option<i32>,
    pub hosted_voucher_url: Option<String>,
    pub number: Option<String>,
    pub pdf: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionCardAwaitNotification {
    pub charge_attempt_at: Option<i32>,
    pub customer_approval_required: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode {
    pub hosted_instructions_url: String,
    pub mobile_auth_url: String,
    pub qr_code: PaymentIntentNextActionCashappQrCode,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionCashappQrCode {
    pub expires_at: i32,
    pub image_url_png: String,
    pub image_url_svg: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionDisplayBankTransferInstructions {
    pub amount_remaining: Option<i32>,
    pub currency: Option<String>,
    pub financial_addresses: Option<Vec<FundingInstructionsBankTransferFinancialAddress>>,
    pub hosted_instructions_url: Option<String>,
    pub reference: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionDisplayMultibancoDetails {
    pub entity: Option<String>,
    pub expires_at: Option<i32>,
    pub hosted_voucher_url: Option<String>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionDisplayOxxoDetails {
    pub expires_after: Option<i32>,
    pub hosted_voucher_url: Option<String>,
    pub number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbini {
    pub expires_at: i32,
    pub hosted_voucher_url: Option<String>,
    pub stores: PaymentIntentNextActionKonbiniStores,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbiniFamilymart {
    pub confirmation_number: Option<String>,
    pub payment_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbiniLawson {
    pub confirmation_number: Option<String>,
    pub payment_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbiniMinistop {
    pub confirmation_number: Option<String>,
    pub payment_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbiniSeicomart {
    pub confirmation_number: Option<String>,
    pub payment_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionKonbiniStores {
    pub familymart: Option<PaymentIntentNextActionKonbiniFamilymart>,
    pub lawson: Option<PaymentIntentNextActionKonbiniLawson>,
    pub ministop: Option<PaymentIntentNextActionKonbiniMinistop>,
    pub seicomart: Option<PaymentIntentNextActionKonbiniSeicomart>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionPaynowDisplayQrCode {
    pub data: String,
    pub hosted_instructions_url: Option<String>,
    pub image_url_png: String,
    pub image_url_svg: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionPixDisplayQrCode {
    pub data: Option<String>,
    pub expires_at: Option<i32>,
    pub hosted_instructions_url: Option<String>,
    pub image_url_png: Option<String>,
    pub image_url_svg: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionPromptpayDisplayQrCode {
    pub data: String,
    pub hosted_instructions_url: String,
    pub image_url_png: String,
    pub image_url_svg: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionRedirectToUrl {
    pub return_url: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode {
    pub hosted_instructions_url: String,
    pub qr_code: PaymentIntentNextActionSwishQrCode,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionSwishQrCode {
    pub data: String,
    pub image_url_png: String,
    pub image_url_svg: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionVerifyWithMicrodeposits {
    pub arrival_date: i32,
    pub hosted_verification_url: String,
    pub microdeposit_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionWechatPayDisplayQrCode {
    pub data: String,
    pub hosted_instructions_url: String,
    pub image_data_url: String,
    pub image_url_png: String,
    pub image_url_svg: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionWechatPayRedirectToAndroidApp {
    pub app_id: String,
    pub nonce_str: String,
    pub package: String,
    pub partner_id: String,
    pub prepay_id: String,
    pub sign: String,
    pub timestamp: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentNextActionWechatPayRedirectToIosApp {
    pub native_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptions {
    pub acss_debit: Option<AcssDebitUnion>,
    pub affirm: Option<AffirmUnion>,
    pub afterpay_clearpay: Option<AfterpayClearpayUnion>,
    pub alipay: Option<AlipayUnion>,
    pub alma: Option<AlmaUnion>,
    pub amazon_pay: Option<AmazonPayUnion>,
    pub au_becs_debit: Option<AuBecsDebitUnion>,
    pub bacs_debit: Option<BacsDebitUnion>,
    pub bancontact: Option<BancontactUnion>,
    pub billie: Option<BillieUnion>,
    pub blik: Option<BlikUnion>,
    pub boleto: Option<BoletoUnion>,
    pub card: Option<CardUnion>,
    pub card_present: Option<CardPresentUnion>,
    pub cashapp: Option<CashappUnion>,
    pub crypto: Option<CryptoUnion>,
    pub customer_balance: Option<CustomerBalanceUnion>,
    pub eps: Option<EpsUnion>,
    pub fpx: Option<FpxUnion>,
    pub giropay: Option<GiropayUnion>,
    pub grabpay: Option<GrabpayUnion>,
    pub ideal: Option<IdealUnion>,
    pub interac_present: Option<InteracPresentUnion>,
    pub kakao_pay: Option<KakaoPayUnion>,
    pub klarna: Option<KlarnaUnion>,
    pub konbini: Option<KonbiniUnion>,
    pub kr_card: Option<KrCardUnion>,
    pub link: Option<LinkUnion>,
    pub mb_way: Option<MbWayUnion>,
    pub mobilepay: Option<MobilepayUnion>,
    pub multibanco: Option<MultibancoUnion>,
    pub naver_pay: Option<NaverPayUnion>,
    pub nz_bank_account: Option<NzBankAccountUnion>,
    pub oxxo: Option<OxxoUnion>,
    pub p24: Option<P24Union>,
    pub pay_by_bank: Option<PayByBankUnion>,
    pub payco: Option<PaycoUnion>,
    pub paynow: Option<PaynowUnion>,
    pub paypal: Option<PaypalUnion>,
    pub pix: Option<PixUnion>,
    pub promptpay: Option<PromptpayUnion>,
    pub revolut_pay: Option<RevolutPayUnion>,
    pub samsung_pay: Option<SamsungPayUnion>,
    pub satispay: Option<SatispayUnion>,
    pub sepa_debit: Option<SepaDebitUnion>,
    pub sofort: Option<SofortUnion>,
    pub swish: Option<SwishUnion>,
    pub twint: Option<TwintUnion>,
    pub us_bank_account: Option<UsBankAccountUnion>,
    pub wechat_pay: Option<WechatPayUnion>,
    pub zip: Option<ZipUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsAcssDebit {
    pub mandate_options: Option<PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsAuBecsDebit {
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsBacsDebit {
    pub mandate_options: Option<PaymentIntentPaymentMethodOptionsMandateOptionsBacsDebit>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsBlik {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsCard {
    pub capture_method: Option<String>,
    pub installments: Option<PaymentMethodOptionsCardInstallments>,
    pub mandate_options: Option<PaymentMethodOptionsCardMandateOptions>,
    pub network: Option<String>,
    pub request_extended_authorization: Option<String>,
    pub request_incremental_authorization: Option<String>,
    pub request_multicapture: Option<String>,
    pub request_overcapture: Option<String>,
    pub request_three_d_secure: Option<String>,
    pub require_cvc_recollection: Option<bool>,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor_suffix_kana: Option<String>,
    pub statement_descriptor_suffix_kanji: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsEps {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsLink {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit {
    pub custom_mandate_url: Option<String>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsMandateOptionsBacsDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsMobilepay {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsNzBankAccount {
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsSepaDebit {
    pub mandate_options: Option<PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsSwish {
    pub reference: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentPaymentMethodOptionsUsBankAccount {
    pub financial_connections: Option<LinkedAccountOptionsCommon>,
    pub mandate_options: Option<PaymentMethodOptionsUsBankAccountMandateOptions>,
    pub preferred_settlement_speed: Option<String>,
    pub setup_future_usage: Option<String>,
    pub target_date: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentProcessing {
    pub card: Option<PaymentIntentCardProcessing>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentProcessingCustomerNotification {
    pub approval_requested: Option<bool>,
    pub completes_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentIntentTypeSpecificPaymentMethodOptionsClient {
    pub capture_method: Option<String>,
    pub installments: Option<PaymentFlowsInstallmentOptions>,
    pub request_incremental_authorization_support: Option<bool>,
    pub require_cvc_recollection: Option<bool>,
    pub routing: Option<PaymentMethodOptionsCardPresentRouting>,
    pub setup_future_usage: Option<String>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLink {
    pub active: bool,
    pub after_completion: PaymentLinksResourceAfterCompletion,
    pub allow_promotion_codes: bool,
    pub application: Option<ApplicationUnion>,
    pub application_fee_amount: Option<i32>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: PaymentLinksResourceAutomaticTax,
    pub billing_address_collection: String,
    pub consent_collection: Option<PaymentLinksResourceConsentCollection>,
    pub currency: String,
    pub custom_fields: Vec<PaymentLinksResourceCustomFields>,
    pub custom_text: PaymentLinksResourceCustomText,
    pub customer_creation: String,
    pub id: String,
    pub inactive_message: Option<String>,
    pub invoice_creation: Option<PaymentLinksResourceInvoiceCreation>,
    pub line_items: Option<LineItemsProperty>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub name_collection: Option<PaymentLinksResourceNameCollection>,
    pub object: String,
    pub on_behalf_of: Option<OnBehalfOfOrRef>,
    pub optional_items: Option<Vec<PaymentLinksResourceOptionalItem>>,
    pub payment_intent_data: Option<PaymentLinksResourcePaymentIntentData>,
    pub payment_method_collection: String,
    pub payment_method_types: Option<Vec<String>>,
    pub phone_number_collection: PaymentLinksResourcePhoneNumberCollection,
    pub restrictions: Option<PaymentLinksResourceRestrictions>,
    pub shipping_address_collection: Option<PaymentLinksResourceShippingAddressCollection>,
    pub shipping_options: Vec<PaymentLinksResourceShippingOption>,
    pub submit_type: String,
    pub subscription_data: Option<PaymentLinksResourceSubscriptionData>,
    pub tax_id_collection: PaymentLinksResourceTaxIdCollection,
    pub transfer_data: Option<PaymentLinksResourceTransferData>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceAfterCompletion {
    pub hosted_confirmation: Option<PaymentLinksResourceCompletionBehaviorConfirmationPage>,
    pub redirect: Option<PaymentLinksResourceCompletionBehaviorRedirect>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceAutomaticTax {
    pub enabled: bool,
    pub liability: Option<ConnectAccountReference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceBusinessName {
    pub enabled: bool,
    pub optional: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCompletedSessions {
    pub count: i32,
    pub limit: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCompletionBehaviorConfirmationPage {
    pub custom_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCompletionBehaviorRedirect {
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceConsentCollection {
    pub payment_method_reuse_agreement: Option<PaymentLinksResourcePaymentMethodReuseAgreement>,
    pub promotions: Option<String>,
    pub terms_of_service: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFields {
    pub dropdown: Option<PaymentLinksResourceCustomFieldsDropdown>,
    pub key: String,
    pub label: PaymentLinksResourceCustomFieldsLabel,
    pub numeric: Option<PaymentLinksResourceCustomFieldsNumeric>,
    pub optional: bool,
    pub text: Option<PaymentLinksResourceCustomFieldsText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFieldsDropdown {
    pub default_value: Option<String>,
    pub options: Vec<PaymentLinksResourceCustomFieldsDropdownOption>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFieldsDropdownOption {
    pub label: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFieldsLabel {
    pub custom: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFieldsNumeric {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomFieldsText {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomText {
    pub after_submit: Option<PaymentLinksResourceCustomTextPosition>,
    pub shipping_address: Option<PaymentLinksResourceCustomTextPosition>,
    pub submit: Option<PaymentLinksResourceCustomTextPosition>,
    pub terms_of_service_acceptance: Option<PaymentLinksResourceCustomTextPosition>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceCustomTextPosition {
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceIndividualName {
    pub enabled: bool,
    pub optional: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceInvoiceCreation {
    pub enabled: bool,
    pub invoice_data: Option<PaymentLinksResourceInvoiceSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceInvoiceSettings {
    pub account_tax_ids: Option<Vec<AccountTaxIdsItemUnion>>,
    pub custom_fields: Option<Vec<InvoiceSettingCustomField>>,
    pub description: Option<String>,
    pub footer: Option<String>,
    pub issuer: Option<ConnectAccountReference>,
    pub metadata: Option<MetadataProperty>,
    pub rendering_options: Option<InvoiceSettingCheckoutRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceNameCollection {
    pub business: Option<PaymentLinksResourceBusinessName>,
    pub individual: Option<PaymentLinksResourceIndividualName>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceOptionalItem {
    pub adjustable_quantity: Option<PaymentLinksResourceOptionalItemAdjustableQuantity>,
    pub price: String,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceOptionalItemAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourcePaymentIntentData {
    pub capture_method: Option<String>,
    pub description: Option<String>,
    pub metadata: MetadataProperty,
    pub setup_future_usage: Option<String>,
    pub statement_descriptor: Option<String>,
    pub statement_descriptor_suffix: Option<String>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourcePaymentMethodReuseAgreement {
    pub position: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourcePhoneNumberCollection {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceRestrictions {
    pub completed_sessions: PaymentLinksResourceCompletedSessions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceShippingAddressCollection {
    pub allowed_countries: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceShippingOption {
    pub shipping_amount: i32,
    pub shipping_rate: ShippingRateOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceSubscriptionData {
    pub description: Option<String>,
    pub invoice_settings: PaymentLinksResourceSubscriptionDataInvoiceSettings,
    pub metadata: MetadataProperty,
    pub trial_period_days: Option<i32>,
    pub trial_settings: Option<SubscriptionsTrialsResourceTrialSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceSubscriptionDataInvoiceSettings {
    pub issuer: ConnectAccountReference,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceTaxIdCollection {
    pub enabled: bool,
    pub required: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentLinksResourceTransferData {
    pub amount: Option<i32>,
    pub destination: DestinationOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethod {
    pub acss_debit: Option<PaymentMethodAcssDebit>,
    pub affirm: Option<PaymentMethodAffirm>,
    pub afterpay_clearpay: Option<PaymentMethodAfterpayClearpay>,
    pub alipay: Option<PaymentFlowsPrivatePaymentMethodsAlipay>,
    pub allow_redisplay: Option<String>,
    pub alma: Option<PaymentMethodAlma>,
    pub amazon_pay: Option<PaymentMethodAmazonPay>,
    pub au_becs_debit: Option<PaymentMethodAuBecsDebit>,
    pub bacs_debit: Option<PaymentMethodBacsDebit>,
    pub bancontact: Option<PaymentMethodBancontact>,
    pub billie: Option<PaymentMethodBillie>,
    pub billing_details: BillingDetails,
    pub blik: Option<PaymentMethodBlik>,
    pub boleto: Option<PaymentMethodBoleto>,
    pub card: Option<Box<PaymentMethodCard>>,
    pub card_present: Option<PaymentMethodCardPresent>,
    pub cashapp: Option<PaymentMethodCashapp>,
    pub created: i32,
    pub crypto: Option<PaymentMethodCrypto>,
    pub custom: Option<PaymentMethodCustom>,
    pub customer: Option<Box<CustomerOrRef>>,
    pub customer_balance: Option<PaymentMethodCustomerBalance>,
    pub eps: Option<PaymentMethodEps>,
    pub fpx: Option<PaymentMethodFpx>,
    pub giropay: Option<PaymentMethodGiropay>,
    pub grabpay: Option<PaymentMethodGrabpay>,
    pub id: String,
    pub ideal: Option<PaymentMethodIdeal>,
    pub interac_present: Option<PaymentMethodInteracPresent>,
    pub kakao_pay: Option<PaymentMethodKakaoPay>,
    pub klarna: Option<PaymentMethodKlarna>,
    pub konbini: Option<PaymentMethodKonbini>,
    pub kr_card: Option<PaymentMethodKrCard>,
    pub link: Option<PaymentMethodLink>,
    pub livemode: bool,
    pub mb_way: Option<PaymentMethodMbWay>,
    pub metadata: Option<MetadataProperty>,
    pub mobilepay: Option<PaymentMethodMobilepay>,
    pub multibanco: Option<PaymentMethodMultibanco>,
    pub naver_pay: Option<PaymentMethodNaverPay>,
    pub nz_bank_account: Option<PaymentMethodNzBankAccount>,
    pub object: String,
    pub oxxo: Option<PaymentMethodOxxo>,
    pub p24: Option<PaymentMethodP24>,
    pub pay_by_bank: Option<PaymentMethodPayByBank>,
    pub payco: Option<PaymentMethodPayco>,
    pub paynow: Option<PaymentMethodPaynow>,
    pub paypal: Option<PaymentMethodPaypal>,
    pub pix: Option<PaymentMethodPix>,
    pub promptpay: Option<PaymentMethodPromptpay>,
    pub radar_options: Option<RadarRadarOptions>,
    pub revolut_pay: Option<PaymentMethodRevolutPay>,
    pub samsung_pay: Option<PaymentMethodSamsungPay>,
    pub satispay: Option<PaymentMethodSatispay>,
    pub sepa_debit: Option<Box<PaymentMethodSepaDebit>>,
    pub sofort: Option<PaymentMethodSofort>,
    pub swish: Option<PaymentMethodSwish>,
    pub twint: Option<PaymentMethodTwint>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<PaymentMethodUsBankAccount>,
    pub wechat_pay: Option<PaymentMethodWechatPay>,
    pub zip: Option<PaymentMethodZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAcssDebit {
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub institution_number: Option<String>,
    pub last4: Option<String>,
    pub transit_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAffirm {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAfterpayClearpay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAlma {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAmazonPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodAuBecsDebit {
    pub bsb_number: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodBacsDebit {
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodBancontact {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodBillie {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodBlik {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodBoleto {
    pub tax_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCard {
    pub brand: String,
    pub checks: Option<PaymentMethodCardChecks>,
    pub country: Option<String>,
    pub display_brand: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: String,
    pub generated_from: Option<Box<PaymentMethodCardGeneratedCard>>,
    pub last4: String,
    pub networks: Option<Networks>,
    pub regulated_status: Option<String>,
    pub three_d_secure_usage: Option<ThreeDSecureUsage>,
    pub wallet: Option<PaymentMethodCardWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardChecks {
    pub address_line1_check: Option<String>,
    pub address_postal_code_check: Option<String>,
    pub cvc_check: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardGeneratedCard {
    pub charge: Option<String>,
    pub payment_method_details: Option<CardGeneratedFromPaymentMethodDetails>,
    pub setup_attempt: Option<Box<SetupAttemptOrRef>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardPresent {
    pub brand: Option<String>,
    pub brand_product: Option<String>,
    pub cardholder_name: Option<String>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub issuer: Option<String>,
    pub last4: Option<String>,
    pub networks: Option<PaymentMethodCardPresentNetworks>,
    pub offline: Option<PaymentMethodDetailsCardPresentOffline>,
    pub preferred_locales: Option<Vec<String>>,
    pub read_method: Option<String>,
    pub wallet: Option<PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardPresentNetworks {
    pub available: Vec<String>,
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWallet {
    pub amex_express_checkout: Option<PaymentMethodCardWalletAmexExpressCheckout>,
    pub apple_pay: Option<PaymentMethodCardWalletApplePay>,
    pub dynamic_last4: Option<String>,
    pub google_pay: Option<PaymentMethodCardWalletGooglePay>,
    pub link: Option<PaymentMethodCardWalletLink>,
    pub masterpass: Option<PaymentMethodCardWalletMasterpass>,
    pub samsung_pay: Option<PaymentMethodCardWalletSamsungPay>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub visa_checkout: Option<PaymentMethodCardWalletVisaCheckout>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletAmexExpressCheckout {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletApplePay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletGooglePay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletLink {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletMasterpass {
    pub billing_address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub shipping_address: Option<Address>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletSamsungPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCardWalletVisaCheckout {
    pub billing_address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub shipping_address: Option<Address>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCashapp {
    pub buyer_id: Option<String>,
    pub cashtag: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodConfigBizPaymentMethodConfigurationDetails {
    pub id: String,
    pub parent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodConfigResourceDisplayPreference {
    pub overridable: Option<bool>,
    pub preference: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodConfigResourcePaymentMethodProperties {
    pub available: bool,
    pub display_preference: PaymentMethodConfigResourceDisplayPreference,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodConfiguration {
    pub acss_debit: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub active: bool,
    pub affirm: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub afterpay_clearpay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub alipay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub alma: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub amazon_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub apple_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub application: Option<String>,
    pub au_becs_debit: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub bacs_debit: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub bancontact: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub billie: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub blik: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub boleto: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub card: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub cartes_bancaires: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub cashapp: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub crypto: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub customer_balance: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub eps: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub fpx: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub giropay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub google_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub grabpay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub id: String,
    pub ideal: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub is_default: bool,
    pub jcb: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub kakao_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub klarna: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub konbini: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub kr_card: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub link: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub livemode: bool,
    pub mb_way: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub mobilepay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub multibanco: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub name: String,
    pub naver_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub nz_bank_account: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub object: String,
    pub oxxo: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub p24: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub parent: Option<String>,
    pub pay_by_bank: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub payco: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub paynow: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub paypal: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub pix: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub promptpay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub revolut_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub samsung_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub satispay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub sepa_debit: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub sofort: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub swish: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub twint: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub us_bank_account: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub wechat_pay: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
    pub zip: Option<PaymentMethodConfigResourcePaymentMethodProperties>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCrypto {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCustom {
    pub display_name: Option<String>,
    pub logo: Option<CustomLogo>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodCustomerBalance {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetails {
    pub ach_credit_transfer: Option<PaymentMethodDetailsAchCreditTransfer>,
    pub ach_debit: Option<PaymentMethodDetailsAchDebit>,
    pub acss_debit: Option<PaymentMethodDetailsAcssDebit>,
    pub affirm: Option<PaymentMethodDetailsAffirm>,
    pub afterpay_clearpay: Option<PaymentMethodDetailsAfterpayClearpay>,
    pub alipay: Option<PaymentFlowsPrivatePaymentMethodsAlipayDetails>,
    pub alma: Option<PaymentMethodDetailsAlma>,
    pub amazon_pay: Option<PaymentMethodDetailsAmazonPay>,
    pub au_becs_debit: Option<PaymentMethodDetailsAuBecsDebit>,
    pub bacs_debit: Option<PaymentMethodDetailsBacsDebit>,
    pub bancontact: Option<Box<PaymentMethodDetailsBancontact>>,
    pub billie: Option<PaymentMethodDetailsBillie>,
    pub blik: Option<PaymentMethodDetailsBlik>,
    pub boleto: Option<PaymentMethodDetailsBoleto>,
    pub card: Option<PaymentMethodDetailsCard>,
    pub card_present: Option<PaymentMethodDetailsCardPresent>,
    pub cashapp: Option<PaymentMethodDetailsCashapp>,
    pub crypto: Option<PaymentMethodDetailsCrypto>,
    pub customer_balance: Option<PaymentMethodDetailsCustomerBalance>,
    pub eps: Option<PaymentMethodDetailsEps>,
    pub fpx: Option<PaymentMethodDetailsFpx>,
    pub giropay: Option<PaymentMethodDetailsGiropay>,
    pub grabpay: Option<PaymentMethodDetailsGrabpay>,
    pub ideal: Option<Box<PaymentMethodDetailsIdeal>>,
    pub interac_present: Option<PaymentMethodDetailsInteracPresent>,
    pub kakao_pay: Option<PaymentMethodDetailsKakaoPay>,
    pub klarna: Option<PaymentMethodDetailsKlarna>,
    pub konbini: Option<PaymentMethodDetailsKonbini>,
    pub kr_card: Option<PaymentMethodDetailsKrCard>,
    pub link: Option<PaymentMethodDetailsLink>,
    pub mb_way: Option<PaymentMethodDetailsMbWay>,
    pub mobilepay: Option<PaymentMethodDetailsMobilepay>,
    pub multibanco: Option<PaymentMethodDetailsMultibanco>,
    pub naver_pay: Option<PaymentMethodDetailsNaverPay>,
    pub nz_bank_account: Option<PaymentMethodDetailsNzBankAccount>,
    pub oxxo: Option<PaymentMethodDetailsOxxo>,
    pub p24: Option<PaymentMethodDetailsP24>,
    pub pay_by_bank: Option<PaymentMethodDetailsPayByBank>,
    pub payco: Option<PaymentMethodDetailsPayco>,
    pub paynow: Option<PaymentMethodDetailsPaynow>,
    pub paypal: Option<PaymentMethodDetailsPaypal>,
    pub pix: Option<PaymentMethodDetailsPix>,
    pub promptpay: Option<PaymentMethodDetailsPromptpay>,
    pub revolut_pay: Option<PaymentMethodDetailsRevolutPay>,
    pub samsung_pay: Option<PaymentMethodDetailsSamsungPay>,
    pub satispay: Option<PaymentMethodDetailsSatispay>,
    pub sepa_debit: Option<PaymentMethodDetailsSepaDebit>,
    pub sofort: Option<Box<PaymentMethodDetailsSofort>>,
    pub stripe_account: Option<PaymentMethodDetailsStripeAccount>,
    pub swish: Option<PaymentMethodDetailsSwish>,
    pub twint: Option<PaymentMethodDetailsTwint>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<Box<PaymentMethodDetailsUsBankAccount>>,
    pub wechat: Option<PaymentMethodDetailsWechat>,
    pub wechat_pay: Option<PaymentMethodDetailsWechatPay>,
    pub zip: Option<PaymentMethodDetailsZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAchCreditTransfer {
    pub account_number: Option<String>,
    pub bank_name: Option<String>,
    pub routing_number: Option<String>,
    pub swift_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAchDebit {
    pub account_holder_type: Option<String>,
    pub bank_name: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAcssDebit {
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub institution_number: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<String>,
    pub transit_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAffirm {
    pub location: Option<String>,
    pub reader: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAfterpayClearpay {
    pub order_id: Option<String>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAlma {
    pub installments: Option<AlmaInstallments>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAmazonPay {
    pub funding: Option<AmazonPayUnderlyingPaymentMethodFundingDetails>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsAuBecsDebit {
    pub bsb_number: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsBacsDebit {
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<String>,
    pub sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsBancontact {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsBillie {
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsBlik {
    pub buyer_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsBoleto {
    pub tax_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCard {
    pub amount_authorized: Option<i32>,
    pub authorization_code: Option<String>,
    pub brand: Option<String>,
    pub capture_before: Option<i32>,
    pub checks: Option<PaymentMethodDetailsCardChecks>,
    pub country: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub extended_authorization: Option<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization>,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub incremental_authorization: Option<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization>,
    pub installments: Option<PaymentMethodDetailsCardInstallments>,
    pub last4: Option<String>,
    pub mandate: Option<String>,
    pub multicapture: Option<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture>,
    pub network: Option<String>,
    pub network_token: Option<PaymentMethodDetailsCardNetworkToken>,
    pub network_transaction_id: Option<String>,
    pub overcapture: Option<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture>,
    pub regulated_status: Option<String>,
    pub three_d_secure: Option<ThreeDSecureDetailsCharge>,
    pub wallet: Option<PaymentMethodDetailsCardWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardChecks {
    pub address_line1_check: Option<String>,
    pub address_postal_code_check: Option<String>,
    pub cvc_check: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardInstallments {
    pub plan: Option<PaymentMethodDetailsCardInstallmentsPlan>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardInstallmentsPlan {
    pub count: Option<i32>,
    pub interval: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardNetworkToken {
    pub used: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardPresent {
    pub amount_authorized: Option<i32>,
    pub brand: Option<String>,
    pub brand_product: Option<String>,
    pub capture_before: Option<i32>,
    pub cardholder_name: Option<String>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub emv_auth_data: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub generated_card: Option<String>,
    pub incremental_authorization_supported: bool,
    pub issuer: Option<String>,
    pub last4: Option<String>,
    pub network: Option<String>,
    pub network_transaction_id: Option<String>,
    pub offline: Option<PaymentMethodDetailsCardPresentOffline>,
    pub overcapture_supported: bool,
    pub preferred_locales: Option<Vec<String>>,
    pub read_method: Option<String>,
    pub receipt: Option<PaymentMethodDetailsCardPresentReceipt>,
    pub wallet: Option<PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardPresentOffline {
    pub stored_at: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardPresentReceipt {
    pub account_type: Option<String>,
    pub application_cryptogram: Option<String>,
    pub application_preferred_name: Option<String>,
    pub authorization_code: Option<String>,
    pub authorization_response_code: Option<String>,
    pub cardholder_verification_method: Option<String>,
    pub dedicated_file_name: Option<String>,
    pub terminal_verification_results: Option<String>,
    pub transaction_status_information: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWallet {
    pub amex_express_checkout: Option<PaymentMethodDetailsCardWalletAmexExpressCheckout>,
    pub apple_pay: Option<PaymentMethodDetailsCardWalletApplePay>,
    pub dynamic_last4: Option<String>,
    pub google_pay: Option<PaymentMethodDetailsCardWalletGooglePay>,
    pub link: Option<PaymentMethodDetailsCardWalletLink>,
    pub masterpass: Option<PaymentMethodDetailsCardWalletMasterpass>,
    pub samsung_pay: Option<PaymentMethodDetailsCardWalletSamsungPay>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub visa_checkout: Option<PaymentMethodDetailsCardWalletVisaCheckout>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletAmexExpressCheckout {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletApplePay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletGooglePay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletLink {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletMasterpass {
    pub billing_address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub shipping_address: Option<Address>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletSamsungPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCardWalletVisaCheckout {
    pub billing_address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub shipping_address: Option<Address>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCashapp {
    pub buyer_id: Option<String>,
    pub cashtag: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCrypto {
    pub buyer_address: Option<String>,
    pub network: Option<String>,
    pub token_currency: Option<String>,
    pub transaction_hash: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsCustomerBalance {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsEps {
    pub bank: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsFpx {
    pub bank: String,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsGiropay {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsGrabpay {
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsIdeal {
    pub bank: Option<String>,
    pub bic: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub transaction_id: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsInteracPresent {
    pub brand: Option<String>,
    pub cardholder_name: Option<String>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub emv_auth_data: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub generated_card: Option<String>,
    pub issuer: Option<String>,
    pub last4: Option<String>,
    pub network: Option<String>,
    pub network_transaction_id: Option<String>,
    pub preferred_locales: Option<Vec<String>>,
    pub read_method: Option<String>,
    pub receipt: Option<PaymentMethodDetailsInteracPresentReceipt>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsInteracPresentReceipt {
    pub account_type: Option<String>,
    pub application_cryptogram: Option<String>,
    pub application_preferred_name: Option<String>,
    pub authorization_code: Option<String>,
    pub authorization_response_code: Option<String>,
    pub cardholder_verification_method: Option<String>,
    pub dedicated_file_name: Option<String>,
    pub terminal_verification_results: Option<String>,
    pub transaction_status_information: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsKakaoPay {
    pub buyer_id: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsKlarna {
    pub payer_details: Option<KlarnaPayerDetails>,
    pub payment_method_category: Option<String>,
    pub preferred_locale: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsKonbini {
    pub store: Option<PaymentMethodDetailsKonbiniStore>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsKonbiniStore {
    pub chain: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsKrCard {
    pub brand: Option<String>,
    pub buyer_id: Option<String>,
    pub last4: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsLink {
    pub country: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsMbWay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsMobilepay {
    pub card: Option<InternalCard>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsMultibanco {
    pub entity: Option<String>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsNaverPay {
    pub buyer_id: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsNzBankAccount {
    pub account_holder_name: Option<String>,
    pub bank_code: String,
    pub bank_name: String,
    pub branch_code: String,
    pub last4: String,
    pub suffix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsOxxo {
    pub number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsP24 {
    pub bank: Option<String>,
    pub reference: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPassthroughCard {
    pub brand: Option<String>,
    pub country: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub funding: Option<String>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPayByBank {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPayco {
    pub buyer_id: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPaynow {
    pub location: Option<String>,
    pub reader: Option<String>,
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPaypal {
    pub country: Option<String>,
    pub payer_email: Option<String>,
    pub payer_id: Option<String>,
    pub payer_name: Option<String>,
    pub seller_protection: Option<PaypalSellerProtection>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPix {
    pub bank_transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsPromptpay {
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsRevolutPay {
    pub funding: Option<RevolutPayUnderlyingPaymentMethodFundingDetails>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsSamsungPay {
    pub buyer_id: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsSatispay {
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsSepaDebit {
    pub bank_code: Option<String>,
    pub branch_code: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsSofort {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub country: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsStripeAccount {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsSwish {
    pub fingerprint: Option<String>,
    pub payment_reference: Option<String>,
    pub verified_phone_last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsTwint {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<Box<MandateOrRef>>,
    pub payment_reference: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsWechat {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsWechatPay {
    pub fingerprint: Option<String>,
    pub location: Option<String>,
    pub reader: Option<String>,
    pub transaction_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDetailsZip {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDomain {
    pub amazon_pay: PaymentMethodDomainResourcePaymentMethodStatus,
    pub apple_pay: PaymentMethodDomainResourcePaymentMethodStatus,
    pub created: i32,
    pub domain_name: String,
    pub enabled: bool,
    pub google_pay: PaymentMethodDomainResourcePaymentMethodStatus,
    pub id: String,
    pub klarna: PaymentMethodDomainResourcePaymentMethodStatus,
    pub link: PaymentMethodDomainResourcePaymentMethodStatus,
    pub livemode: bool,
    pub object: String,
    pub paypal: PaymentMethodDomainResourcePaymentMethodStatus,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDomainResourcePaymentMethodStatus {
    pub status: String,
    pub status_details: Option<PaymentMethodDomainResourcePaymentMethodStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodDomainResourcePaymentMethodStatusDetails {
    pub error_message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodEps {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodFpx {
    pub bank: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodGiropay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodGrabpay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodIdeal {
    pub bank: Option<String>,
    pub bic: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodInteracPresent {
    pub brand: Option<String>,
    pub cardholder_name: Option<String>,
    pub country: Option<String>,
    pub description: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub issuer: Option<String>,
    pub last4: Option<String>,
    pub networks: Option<PaymentMethodCardPresentNetworks>,
    pub preferred_locales: Option<Vec<String>>,
    pub read_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodKakaoPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodKlarna {
    pub dob: Option<PaymentFlowsPrivatePaymentMethodsKlarnaDob>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodKonbini {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodKrCard {
    pub brand: Option<String>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodLink {
    pub email: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodMbWay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodMobilepay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodMultibanco {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodNaverPay {
    pub buyer_id: Option<String>,
    pub funding: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodNzBankAccount {
    pub account_holder_name: Option<String>,
    pub bank_code: String,
    pub bank_name: String,
    pub branch_code: String,
    pub last4: String,
    pub suffix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsAffirm {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsAfterpayClearpay {
    pub capture_method: Option<String>,
    pub reference: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsAlipay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsAlma {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsAmazonPay {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsBancontact {
    pub preferred_language: String,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsBillie {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsBoleto {
    pub expires_after_days: i32,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCardInstallments {
    pub available_plans: Option<Vec<PaymentMethodDetailsCardInstallmentsPlan>>,
    pub enabled: bool,
    pub plan: Option<PaymentMethodDetailsCardInstallmentsPlan>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCardMandateOptions {
    pub amount: i32,
    pub amount_type: String,
    pub description: Option<String>,
    pub end_date: Option<i32>,
    pub interval: String,
    pub interval_count: Option<i32>,
    pub reference: String,
    pub start_date: i32,
    pub supported_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCardPresent {
    pub capture_method: Option<String>,
    pub request_extended_authorization: Option<bool>,
    pub request_incremental_authorization_support: Option<bool>,
    pub routing: Option<PaymentMethodOptionsCardPresentRouting>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCardPresentRouting {
    pub requested_priority: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCashapp {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCrypto {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCustomerBalance {
    pub bank_transfer: Option<PaymentMethodOptionsCustomerBalanceBankTransfer>,
    pub funding_type: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCustomerBalanceBankTransfer {
    pub eu_bank_transfer: Option<PaymentMethodOptionsCustomerBalanceEuBankAccount>,
    pub requested_address_types: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsCustomerBalanceEuBankAccount {
    pub country: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsFpx {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsGiropay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsGrabpay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsIdeal {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsInteracPresent {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsKlarna {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsKonbini {
    pub confirmation_number: Option<String>,
    pub expires_after_days: Option<i32>,
    pub expires_at: Option<i32>,
    pub product_description: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsKrCard {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsMbWay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsMultibanco {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsOxxo {
    pub expires_after_days: i32,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsP24 {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsPayByBank {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsPaynow {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsPaypal {
    pub capture_method: Option<String>,
    pub preferred_locale: Option<String>,
    pub reference: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsPix {
    pub amount_includes_iof: Option<String>,
    pub expires_after_seconds: Option<i32>,
    pub expires_at: Option<i32>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsPromptpay {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsRevolutPay {
    pub capture_method: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsSatispay {
    pub capture_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsSofort {
    pub preferred_language: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsTwint {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsUsBankAccountMandateOptions {
    pub collection_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsWechatPay {
    pub app_id: Option<String>,
    pub client: Option<String>,
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOptionsZip {
    pub setup_future_usage: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodOxxo {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodP24 {
    pub bank: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPayByBank {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPayco {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPaynow {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPaypal {
    pub country: Option<String>,
    pub payer_email: Option<String>,
    pub payer_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPix {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodPromptpay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodRevolutPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodSamsungPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodSatispay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodSepaDebit {
    pub bank_code: Option<String>,
    pub branch_code: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub generated_from: Option<Box<SepaDebitGeneratedFrom>>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodSofort {
    pub country: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodSwish {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodTwint {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodUsBankAccount {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub financial_connections_account: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub networks: Option<UsBankAccountNetworks>,
    pub routing_number: Option<String>,
    pub status_details: Option<PaymentMethodUsBankAccountStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodUsBankAccountBlocked {
    pub network_code: Option<String>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodUsBankAccountStatusDetails {
    pub blocked: Option<PaymentMethodUsBankAccountBlocked>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodWechatPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentMethodZip {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionAdaptivePricing {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionAfterExpiration {
    pub recovery: Option<PaymentPagesCheckoutSessionAfterExpirationRecovery>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionAfterExpirationRecovery {
    pub allow_promotion_codes: bool,
    pub enabled: bool,
    pub expires_at: Option<i32>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionAutomaticTax {
    pub enabled: bool,
    pub liability: Option<ConnectAccountReference>,
    pub provider: Option<String>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionBrandingSettings {
    pub background_color: String,
    pub border_style: String,
    pub button_color: String,
    pub display_name: String,
    pub font_family: String,
    pub icon: Option<PaymentPagesCheckoutSessionBrandingSettingsIcon>,
    pub logo: Option<PaymentPagesCheckoutSessionBrandingSettingsLogo>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionBrandingSettingsIcon {
    pub file: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionBrandingSettingsLogo {
    pub file: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionBusinessName {
    pub enabled: bool,
    pub optional: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCheckoutAddressDetails {
    pub address: Address,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCollectedInformation {
    pub business_name: Option<String>,
    pub individual_name: Option<String>,
    pub shipping_details: Option<PaymentPagesCheckoutSessionCheckoutAddressDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionConsent {
    pub promotions: Option<String>,
    pub terms_of_service: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionConsentCollection {
    pub payment_method_reuse_agreement:
        Option<PaymentPagesCheckoutSessionPaymentMethodReuseAgreement>,
    pub promotions: Option<String>,
    pub terms_of_service: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCurrencyConversion {
    pub amount_subtotal: i32,
    pub amount_total: i32,
    pub fx_rate: String,
    pub source_currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFields {
    pub dropdown: Option<PaymentPagesCheckoutSessionCustomFieldsDropdown>,
    pub key: String,
    pub label: PaymentPagesCheckoutSessionCustomFieldsLabel,
    pub numeric: Option<PaymentPagesCheckoutSessionCustomFieldsNumeric>,
    pub optional: bool,
    pub text: Option<PaymentPagesCheckoutSessionCustomFieldsText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFieldsDropdown {
    pub default_value: Option<String>,
    pub options: Vec<PaymentPagesCheckoutSessionCustomFieldsOption>,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFieldsLabel {
    pub custom: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFieldsNumeric {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFieldsOption {
    pub label: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomFieldsText {
    pub default_value: Option<String>,
    pub maximum_length: Option<i32>,
    pub minimum_length: Option<i32>,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomText {
    pub after_submit: Option<PaymentPagesCheckoutSessionCustomTextPosition>,
    pub shipping_address: Option<PaymentPagesCheckoutSessionCustomTextPosition>,
    pub submit: Option<PaymentPagesCheckoutSessionCustomTextPosition>,
    pub terms_of_service_acceptance: Option<PaymentPagesCheckoutSessionCustomTextPosition>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomTextPosition {
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionCustomerDetails {
    pub address: Option<Address>,
    pub business_name: Option<String>,
    pub email: Option<String>,
    pub individual_name: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
    pub tax_exempt: Option<String>,
    pub tax_ids: Option<Vec<PaymentPagesCheckoutSessionTaxId>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionDiscount {
    pub coupon: Option<CouponOrRef>,
    pub promotion_code: Option<PromotionCodeOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionIndividualName {
    pub enabled: bool,
    pub optional: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionInvoiceCreation {
    pub enabled: bool,
    pub invoice_data: PaymentPagesCheckoutSessionInvoiceSettings,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionInvoiceSettings {
    pub account_tax_ids: Option<Vec<AccountTaxIdsItemUnion>>,
    pub custom_fields: Option<Vec<InvoiceSettingCustomField>>,
    pub description: Option<String>,
    pub footer: Option<String>,
    pub issuer: Option<ConnectAccountReference>,
    pub metadata: Option<MetadataProperty>,
    pub rendering_options: Option<InvoiceSettingCheckoutRenderingOptions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionNameCollection {
    pub business: Option<PaymentPagesCheckoutSessionBusinessName>,
    pub individual: Option<PaymentPagesCheckoutSessionIndividualName>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionOptionalItem {
    pub adjustable_quantity: Option<PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity>,
    pub price: String,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionPaymentMethodReuseAgreement {
    pub position: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionPermissions {
    pub update_shipping_details: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionPhoneNumberCollection {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionSavedPaymentMethodOptions {
    pub allow_redisplay_filters: Option<Vec<String>>,
    pub payment_method_remove: Option<String>,
    pub payment_method_save: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionShippingAddressCollection {
    pub allowed_countries: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionShippingCost {
    pub amount_subtotal: i32,
    pub amount_tax: i32,
    pub amount_total: i32,
    pub shipping_rate: Option<ShippingRateOrRef>,
    pub taxes: Option<Vec<LineItemsTaxAmount>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionShippingOption {
    pub shipping_amount: i32,
    pub shipping_rate: ShippingRateOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionTaxId {
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionTaxIdCollection {
    pub enabled: bool,
    pub required: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionTotalDetails {
    pub amount_discount: i32,
    pub amount_shipping: Option<i32>,
    pub amount_tax: i32,
    pub breakdown: Option<PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown {
    pub discounts: Vec<LineItemsDiscountAmount>,
    pub taxes: Vec<LineItemsTaxAmount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions {
    pub brands_blocked: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentRecord {
    pub amount: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_authorized: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_canceled: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_failed: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_guaranteed: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_refunded: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub amount_requested: PaymentsPrimitivesPaymentRecordsResourceAmount,
    pub application: Option<String>,
    pub created: i32,
    pub customer_details: Option<PaymentsPrimitivesPaymentRecordsResourceCustomerDetails>,
    pub customer_presence: Option<String>,
    pub description: Option<String>,
    pub id: String,
    pub latest_payment_attempt_record: Option<String>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub payment_method_details:
        Option<Box<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails>>,
    pub processor_details: PaymentsPrimitivesPaymentRecordsResourceProcessorDetails,
    pub shipping_details: Option<PaymentsPrimitivesPaymentRecordsResourceShippingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PaymentSource {
    Account(Account),
    BankAccount(BankAccount),
    Card(Card),
    Source(Source),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceAddress {
    pub city: Option<String>,
    pub country: Option<String>,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceAmount {
    pub currency: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceBillingDetails {
    pub address: PaymentsPrimitivesPaymentRecordsResourceAddress,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceCustomerDetails {
    pub customer: Option<String>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails {
    pub brand: String,
    pub capture_before: Option<i32>,
    pub checks:
        Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks>,
    pub country: Option<String>,
    pub exp_month: i32,
    pub exp_year: i32,
    pub fingerprint: Option<String>,
    pub funding: String,
    pub last4: String,
    pub network: Option<String>,
    pub network_token: Option<
        PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken,
    >,
    pub network_transaction_id: Option<String>,
    pub three_d_secure: Option<
        PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure,
    >,
    pub wallet:
        Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks {
    pub address_line1_check: Option<String>,
    pub address_postal_code_check: Option<String>,
    pub cvc_check: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken {
    pub used: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure {
    pub authentication_flow: Option<String>,
    pub result: Option<String>,
    pub result_reason: Option<String>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet {
    pub apple_pay: Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay>,
    pub dynamic_last4: Option<String>,
    pub google_pay: Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay
{
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay
{}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails {
    pub display_name: String,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails {
    pub ach_credit_transfer: Option<PaymentMethodDetailsAchCreditTransfer>,
    pub ach_debit: Option<PaymentMethodDetailsAchDebit>,
    pub acss_debit: Option<PaymentMethodDetailsAcssDebit>,
    pub affirm: Option<PaymentMethodDetailsAffirm>,
    pub afterpay_clearpay: Option<PaymentMethodDetailsAfterpayClearpay>,
    pub alipay: Option<PaymentFlowsPrivatePaymentMethodsAlipayDetails>,
    pub alma: Option<PaymentMethodDetailsAlma>,
    pub amazon_pay: Option<PaymentMethodDetailsAmazonPay>,
    pub au_becs_debit: Option<PaymentMethodDetailsAuBecsDebit>,
    pub bacs_debit: Option<PaymentMethodDetailsBacsDebit>,
    pub bancontact: Option<Box<PaymentMethodDetailsBancontact>>,
    pub billie: Option<PaymentMethodDetailsBillie>,
    pub billing_details: Option<PaymentsPrimitivesPaymentRecordsResourceBillingDetails>,
    pub blik: Option<PaymentMethodDetailsBlik>,
    pub boleto: Option<PaymentMethodDetailsBoleto>,
    pub card: Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails>,
    pub card_present: Option<PaymentMethodDetailsCardPresent>,
    pub cashapp: Option<PaymentMethodDetailsCashapp>,
    pub crypto: Option<PaymentMethodDetailsCrypto>,
    pub custom: Option<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails>,
    pub customer_balance: Option<PaymentMethodDetailsCustomerBalance>,
    pub eps: Option<PaymentMethodDetailsEps>,
    pub fpx: Option<PaymentMethodDetailsFpx>,
    pub giropay: Option<PaymentMethodDetailsGiropay>,
    pub grabpay: Option<PaymentMethodDetailsGrabpay>,
    pub ideal: Option<Box<PaymentMethodDetailsIdeal>>,
    pub interac_present: Option<PaymentMethodDetailsInteracPresent>,
    pub kakao_pay: Option<PaymentMethodDetailsKakaoPay>,
    pub klarna: Option<PaymentMethodDetailsKlarna>,
    pub konbini: Option<PaymentMethodDetailsKonbini>,
    pub kr_card: Option<PaymentMethodDetailsKrCard>,
    pub link: Option<PaymentMethodDetailsLink>,
    pub mb_way: Option<PaymentMethodDetailsMbWay>,
    pub mobilepay: Option<PaymentMethodDetailsMobilepay>,
    pub multibanco: Option<PaymentMethodDetailsMultibanco>,
    pub naver_pay: Option<PaymentMethodDetailsNaverPay>,
    pub nz_bank_account: Option<PaymentMethodDetailsNzBankAccount>,
    pub oxxo: Option<PaymentMethodDetailsOxxo>,
    pub p24: Option<PaymentMethodDetailsP24>,
    pub pay_by_bank: Option<PaymentMethodDetailsPayByBank>,
    pub payco: Option<PaymentMethodDetailsPayco>,
    pub payment_method: Option<String>,
    pub paynow: Option<PaymentMethodDetailsPaynow>,
    pub paypal: Option<PaymentMethodDetailsPaypal>,
    pub pix: Option<PaymentMethodDetailsPix>,
    pub promptpay: Option<PaymentMethodDetailsPromptpay>,
    pub revolut_pay: Option<PaymentMethodDetailsRevolutPay>,
    pub samsung_pay: Option<PaymentMethodDetailsSamsungPay>,
    pub satispay: Option<PaymentMethodDetailsSatispay>,
    pub sepa_debit: Option<PaymentMethodDetailsSepaDebit>,
    pub sofort: Option<Box<PaymentMethodDetailsSofort>>,
    pub stripe_account: Option<PaymentMethodDetailsStripeAccount>,
    pub swish: Option<PaymentMethodDetailsSwish>,
    pub twint: Option<PaymentMethodDetailsTwint>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account:
        Option<Box<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails>>,
    pub wechat: Option<PaymentMethodDetailsWechat>,
    pub wechat_pay: Option<PaymentMethodDetailsWechatPay>,
    pub zip: Option<PaymentMethodDetailsZip>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourcePaymentMethodUsBankAccountDetails {
    pub account_holder_type: Option<String>,
    pub account_type: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate: Option<Box<MandateOrRef>>,
    pub payment_reference: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceProcessorDetails {
    pub custom:
        Option<PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsResourceCustomDetails {
    pub payment_reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentsPrimitivesPaymentRecordsResourceShippingDetails {
    pub address: PaymentsPrimitivesPaymentRecordsResourceAddress,
    pub name: Option<String>,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Payout {
    pub amount: i32,
    pub application_fee: Option<Box<ApplicationFeeOrRef>>,
    pub application_fee_amount: Option<i32>,
    pub arrival_date: i32,
    pub automatic: bool,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination: Option<Box<DestinationUnion>>,
    pub failure_balance_transaction: Option<Box<FailureBalanceTransactionOrRef>>,
    pub failure_code: Option<String>,
    pub failure_message: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub method: String,
    pub object: String,
    pub original_payout: Option<Box<OriginalPayoutOrRef>>,
    pub payout_method: Option<String>,
    pub reconciliation_status: String,
    pub reversed_by: Option<Box<ReversedByOrRef>>,
    pub source_type: String,
    pub statement_descriptor: Option<String>,
    pub status: String,
    pub trace_id: Option<PayoutsTraceId>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayoutsTraceId {
    pub status: String,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaypalSellerProtection {
    pub dispute_categories: Option<Vec<String>>,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Person {
    pub account: String,
    pub additional_tos_acceptances: Option<PersonAdditionalTosAcceptances>,
    pub address: Option<Address>,
    pub address_kana: Option<LegalEntityJapanAddress>,
    pub address_kanji: Option<LegalEntityJapanAddress>,
    pub created: i32,
    pub dob: Option<LegalEntityDob>,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub first_name_kana: Option<String>,
    pub first_name_kanji: Option<String>,
    pub full_name_aliases: Option<Vec<String>>,
    pub future_requirements: Option<PersonFutureRequirements>,
    pub gender: Option<String>,
    pub id: String,
    pub id_number_provided: Option<bool>,
    pub id_number_secondary_provided: Option<bool>,
    pub last_name: Option<String>,
    pub last_name_kana: Option<String>,
    pub last_name_kanji: Option<String>,
    pub maiden_name: Option<String>,
    pub metadata: Option<MetadataProperty>,
    pub nationality: Option<String>,
    pub object: String,
    pub phone: Option<String>,
    pub political_exposure: Option<String>,
    pub registered_address: Option<Address>,
    pub relationship: Option<PersonRelationship>,
    pub requirements: Option<PersonRequirements>,
    pub ssn_last_4_provided: Option<bool>,
    pub us_cfpb_data: Option<PersonUsCfpbData>,
    pub verification: Option<LegalEntityPersonVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonAdditionalTosAcceptance {
    pub date: Option<i32>,
    pub ip: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonAdditionalTosAcceptances {
    pub account: Option<PersonAdditionalTosAcceptance>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonEthnicityDetails {
    pub ethnicity: Option<Vec<String>>,
    pub ethnicity_other: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonFutureRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub currently_due: Vec<String>,
    pub errors: Vec<AccountRequirementsError>,
    pub eventually_due: Vec<String>,
    pub past_due: Vec<String>,
    pub pending_verification: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonRaceDetails {
    pub race: Option<Vec<String>>,
    pub race_other: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonRelationship {
    pub authorizer: Option<bool>,
    pub director: Option<bool>,
    pub executive: Option<bool>,
    pub legal_guardian: Option<bool>,
    pub owner: Option<bool>,
    pub percent_ownership: Option<f32>,
    pub representative: Option<bool>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonRequirements {
    pub alternatives: Option<Vec<AccountRequirementsAlternative>>,
    pub currently_due: Vec<String>,
    pub errors: Vec<AccountRequirementsError>,
    pub eventually_due: Vec<String>,
    pub past_due: Vec<String>,
    pub pending_verification: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PersonUsCfpbData {
    pub ethnicity_details: Option<PersonEthnicityDetails>,
    pub race_details: Option<PersonRaceDetails>,
    pub self_identified_gender: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Plan {
    pub active: bool,
    pub amount: Option<i32>,
    pub amount_decimal: Option<String>,
    pub billing_scheme: String,
    pub created: i32,
    pub currency: String,
    pub id: String,
    pub interval: String,
    pub interval_count: i32,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub meter: Option<String>,
    pub nickname: Option<String>,
    pub object: String,
    pub product: Option<ProductUnion>,
    pub tiers: Option<Vec<PlanTier>>,
    pub tiers_mode: Option<String>,
    pub transform_usage: Option<TransformUsage>,
    pub trial_period_days: Option<i32>,
    pub usage_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PlanTier {
    pub flat_amount: Option<i32>,
    pub flat_amount_decimal: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
    pub up_to: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PlatformEarningFeeSource {
    pub charge: Option<String>,
    pub payout: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalBusinessProfile {
    pub headline: Option<String>,
    pub privacy_policy_url: Option<String>,
    pub terms_of_service_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalCustomerUpdate {
    pub allowed_updates: Vec<String>,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFeatures {
    pub customer_update: PortalCustomerUpdate,
    pub invoice_history: PortalInvoiceList,
    pub payment_method_update: PortalPaymentMethodUpdate,
    pub subscription_cancel: PortalSubscriptionCancel,
    pub subscription_update: PortalSubscriptionUpdate,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsAfterCompletionHostedConfirmation {
    pub custom_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsAfterCompletionRedirect {
    pub return_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsCouponOffer {
    pub coupon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsFlow {
    pub after_completion: PortalFlowsFlowAfterCompletion,
    pub subscription_cancel: Option<PortalFlowsFlowSubscriptionCancel>,
    pub subscription_update: Option<PortalFlowsFlowSubscriptionUpdate>,
    pub subscription_update_confirm: Option<PortalFlowsFlowSubscriptionUpdateConfirm>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsFlowAfterCompletion {
    pub hosted_confirmation: Option<PortalFlowsAfterCompletionHostedConfirmation>,
    pub redirect: Option<PortalFlowsAfterCompletionRedirect>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsFlowSubscriptionCancel {
    pub retention: Option<PortalFlowsRetention>,
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsFlowSubscriptionUpdate {
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsFlowSubscriptionUpdateConfirm {
    pub discounts: Option<Vec<PortalFlowsSubscriptionUpdateConfirmDiscount>>,
    pub items: Vec<PortalFlowsSubscriptionUpdateConfirmItem>,
    pub subscription: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsRetention {
    pub coupon_offer: Option<PortalFlowsCouponOffer>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsSubscriptionUpdateConfirmDiscount {
    pub coupon: Option<String>,
    pub promotion_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalFlowsSubscriptionUpdateConfirmItem {
    pub id: Option<String>,
    pub price: Option<String>,
    pub quantity: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalInvoiceList {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalLoginPage {
    pub enabled: bool,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalPaymentMethodUpdate {
    pub enabled: bool,
    pub payment_method_configuration: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalResourceScheduleUpdateAtPeriodEnd {
    pub conditions: Vec<PortalResourceScheduleUpdateAtPeriodEndCondition>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalResourceScheduleUpdateAtPeriodEndCondition {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalSubscriptionCancel {
    pub cancellation_reason: PortalSubscriptionCancellationReason,
    pub enabled: bool,
    pub mode: String,
    pub proration_behavior: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalSubscriptionCancellationReason {
    pub enabled: bool,
    pub options: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalSubscriptionUpdate {
    pub default_allowed_updates: Vec<String>,
    pub enabled: bool,
    pub products: Option<Vec<PortalSubscriptionUpdateProduct>>,
    pub proration_behavior: String,
    pub schedule_at_period_end: PortalResourceScheduleUpdateAtPeriodEnd,
    pub trial_update_behavior: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalSubscriptionUpdateProduct {
    pub adjustable_quantity: PortalSubscriptionUpdateProductAdjustableQuantity,
    pub prices: Vec<String>,
    pub product: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PortalSubscriptionUpdateProductAdjustableQuantity {
    pub enabled: bool,
    pub maximum: Option<i32>,
    pub minimum: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Price {
    pub active: bool,
    pub billing_scheme: String,
    pub created: i32,
    pub currency: String,
    pub currency_options: Option<CurrencyOptionsProperty>,
    pub custom_unit_amount: Option<CustomUnitAmount>,
    pub id: String,
    pub livemode: bool,
    pub lookup_key: Option<String>,
    pub metadata: MetadataProperty,
    pub nickname: Option<String>,
    pub object: String,
    pub product: Box<ProductUnion>,
    pub recurring: Option<Recurring>,
    pub tax_behavior: Option<String>,
    pub tiers: Option<Vec<PriceTier>>,
    pub tiers_mode: Option<String>,
    pub transform_quantity: Option<TransformQuantity>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PriceTier {
    pub flat_amount: Option<i32>,
    pub flat_amount_decimal: Option<String>,
    pub unit_amount: Option<i32>,
    pub unit_amount_decimal: Option<String>,
    pub up_to: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Product {
    pub active: bool,
    pub created: i32,
    pub default_price: Option<Box<DefaultPriceOrRef>>,
    pub description: Option<String>,
    pub id: String,
    pub images: Vec<String>,
    pub livemode: bool,
    pub marketing_features: Vec<ProductMarketingFeature>,
    pub metadata: MetadataProperty,
    pub name: String,
    pub object: String,
    pub package_dimensions: Option<PackageDimensions>,
    pub shippable: Option<bool>,
    pub statement_descriptor: Option<String>,
    pub tax_code: Option<TaxCodeOrRef>,
    pub unit_label: Option<String>,
    pub updated: i32,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductFeature {
    pub entitlement_feature: EntitlementsFeature,
    pub id: String,
    pub livemode: bool,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductMarketingFeature {
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PromotionCode {
    pub active: bool,
    pub code: String,
    pub created: i32,
    pub customer: Option<Box<CustomerUnion>>,
    pub expires_at: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub max_redemptions: Option<i32>,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub promotion: PromotionCodesResourcePromotion,
    pub restrictions: PromotionCodesResourceRestrictions,
    pub times_redeemed: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PromotionCodesResourcePromotion {
    pub coupon: Option<CouponOrRef>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PromotionCodesResourceRestrictions {
    pub currency_options: Option<CurrencyOptionsProperty>,
    pub first_time_transaction: bool,
    pub minimum_amount: Option<i32>,
    pub minimum_amount_currency: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProrationDetails {
    pub discount_amounts: Vec<DiscountsResourceDiscountAmount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Quote {
    pub amount_subtotal: i32,
    pub amount_total: i32,
    pub application: Option<ApplicationUnion>,
    pub application_fee_amount: Option<i32>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: QuotesResourceAutomaticTax,
    pub collection_method: String,
    pub computed: QuotesResourceComputed,
    pub created: i32,
    pub currency: Option<String>,
    pub customer: Option<CustomerUnion>,
    pub default_tax_rates: Option<Vec<DefaultTaxRatesItemOrRef>>,
    pub description: Option<String>,
    pub discounts: Vec<DiscountsItemOrRef>,
    pub expires_at: i32,
    pub footer: Option<String>,
    pub from_quote: Option<Box<QuotesResourceFromQuote>>,
    pub header: Option<String>,
    pub id: String,
    pub invoice: Option<InvoiceUnion>,
    pub invoice_settings: InvoiceSettingQuoteSetting,
    pub line_items: Option<LineItemsProperty>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub number: Option<String>,
    pub object: String,
    pub on_behalf_of: Option<OnBehalfOfOrRef>,
    pub status: String,
    pub status_transitions: QuotesResourceStatusTransitions,
    pub subscription: Option<SubscriptionOrRef>,
    pub subscription_data: QuotesResourceSubscriptionDataSubscriptionData,
    pub subscription_schedule: Option<SubscriptionScheduleOrRef>,
    pub test_clock: Option<TestClockOrRef>,
    pub total_details: QuotesResourceTotalDetails,
    pub transfer_data: Option<QuotesResourceTransferData>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceAutomaticTax {
    pub enabled: bool,
    pub liability: Option<ConnectAccountReference>,
    pub provider: Option<String>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceComputed {
    pub recurring: Option<QuotesResourceRecurring>,
    pub upfront: QuotesResourceUpfront,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceFromQuote {
    pub is_revision: bool,
    pub quote: Box<QuoteOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceRecurring {
    pub amount_subtotal: i32,
    pub amount_total: i32,
    pub interval: String,
    pub interval_count: i32,
    pub total_details: QuotesResourceTotalDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceStatusTransitions {
    pub accepted_at: Option<i32>,
    pub canceled_at: Option<i32>,
    pub finalized_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceSubscriptionDataBillingMode {
    pub flexible: Option<SubscriptionsResourceBillingModeFlexible>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceSubscriptionDataSubscriptionData {
    pub billing_mode: QuotesResourceSubscriptionDataBillingMode,
    pub description: Option<String>,
    pub effective_date: Option<i32>,
    pub metadata: Option<MetadataProperty>,
    pub trial_period_days: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceTotalDetails {
    pub amount_discount: i32,
    pub amount_shipping: Option<i32>,
    pub amount_tax: i32,
    pub breakdown: Option<QuotesResourceTotalDetailsResourceBreakdown>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceTotalDetailsResourceBreakdown {
    pub discounts: Vec<LineItemsDiscountAmount>,
    pub taxes: Vec<LineItemsTaxAmount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceTransferData {
    pub amount: Option<i32>,
    pub amount_percent: Option<f32>,
    pub destination: DestinationOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuotesResourceUpfront {
    pub amount_subtotal: i32,
    pub amount_total: i32,
    pub line_items: Option<LineItemsProperty>,
    pub total_details: QuotesResourceTotalDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarEarlyFraudWarning {
    pub actionable: bool,
    pub charge: ChargeOrRef,
    pub created: i32,
    pub fraud_type: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub payment_intent: Option<PaymentIntentOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarValueList {
    pub alias: String,
    pub created: i32,
    pub created_by: String,
    pub id: String,
    pub item_type: String,
    pub list_items: ListItemsProperty,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub name: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarValueListItem {
    pub created: i32,
    pub created_by: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub value: String,
    pub value_list: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarRadarOptions {
    pub session: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarReviewResourceLocation {
    pub city: Option<String>,
    pub country: Option<String>,
    pub latitude: Option<f32>,
    pub longitude: Option<f32>,
    pub region: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RadarReviewResourceSession {
    pub browser: Option<String>,
    pub device: Option<String>,
    pub platform: Option<String>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReceivedPaymentMethodDetailsFinancialAccount {
    pub id: String,
    pub network: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Recurring {
    pub interval: String,
    pub interval_count: i32,
    pub meter: Option<String>,
    pub usage_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Refund {
    pub amount: i32,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub charge: Option<Box<ChargeOrRef>>,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination_details: Option<RefundDestinationDetails>,
    pub failure_balance_transaction: Option<Box<FailureBalanceTransactionOrRef>>,
    pub failure_reason: Option<String>,
    pub id: String,
    pub instructions_email: Option<String>,
    pub metadata: Option<MetadataProperty>,
    pub next_action: Option<RefundNextAction>,
    pub object: String,
    pub payment_intent: Option<Box<PaymentIntentOrRef>>,
    pub pending_reason: Option<String>,
    pub presentment_details: Option<PaymentFlowsPaymentIntentPresentmentDetails>,
    pub reason: Option<String>,
    pub receipt_number: Option<String>,
    pub source_transfer_reversal: Option<Box<SourceTransferReversalOrRef>>,
    pub status: Option<String>,
    pub transfer_reversal: Option<Box<TransferReversalOrRef>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetails {
    pub affirm: Option<DestinationDetailsUnimplemented>,
    pub afterpay_clearpay: Option<DestinationDetailsUnimplemented>,
    pub alipay: Option<DestinationDetailsUnimplemented>,
    pub alma: Option<DestinationDetailsUnimplemented>,
    pub amazon_pay: Option<DestinationDetailsUnimplemented>,
    pub au_bank_transfer: Option<DestinationDetailsUnimplemented>,
    pub blik: Option<RefundDestinationDetailsBlik>,
    pub br_bank_transfer: Option<RefundDestinationDetailsBrBankTransfer>,
    pub card: Option<RefundDestinationDetailsCard>,
    pub cashapp: Option<DestinationDetailsUnimplemented>,
    pub crypto: Option<RefundDestinationDetailsCrypto>,
    pub customer_cash_balance: Option<DestinationDetailsUnimplemented>,
    pub eps: Option<DestinationDetailsUnimplemented>,
    pub eu_bank_transfer: Option<RefundDestinationDetailsEuBankTransfer>,
    pub gb_bank_transfer: Option<RefundDestinationDetailsGbBankTransfer>,
    pub giropay: Option<DestinationDetailsUnimplemented>,
    pub grabpay: Option<DestinationDetailsUnimplemented>,
    pub jp_bank_transfer: Option<RefundDestinationDetailsJpBankTransfer>,
    pub klarna: Option<DestinationDetailsUnimplemented>,
    pub mb_way: Option<RefundDestinationDetailsMbWay>,
    pub multibanco: Option<RefundDestinationDetailsMultibanco>,
    pub mx_bank_transfer: Option<RefundDestinationDetailsMxBankTransfer>,
    pub nz_bank_transfer: Option<DestinationDetailsUnimplemented>,
    pub p24: Option<RefundDestinationDetailsP24>,
    pub paynow: Option<DestinationDetailsUnimplemented>,
    pub paypal: Option<RefundDestinationDetailsPaypal>,
    pub pix: Option<DestinationDetailsUnimplemented>,
    pub revolut: Option<DestinationDetailsUnimplemented>,
    pub sofort: Option<DestinationDetailsUnimplemented>,
    pub swish: Option<RefundDestinationDetailsSwish>,
    pub th_bank_transfer: Option<RefundDestinationDetailsThBankTransfer>,
    pub twint: Option<DestinationDetailsUnimplemented>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_transfer: Option<RefundDestinationDetailsUsBankTransfer>,
    pub wechat_pay: Option<DestinationDetailsUnimplemented>,
    pub zip: Option<DestinationDetailsUnimplemented>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsBlik {
    pub network_decline_code: Option<String>,
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsBrBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsCard {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
    pub reference_type: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsCrypto {
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsEuBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsGbBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsJpBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsMbWay {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsMultibanco {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsMxBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsP24 {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsPaypal {
    pub network_decline_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsSwish {
    pub network_decline_code: Option<String>,
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsThBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundDestinationDetailsUsBankTransfer {
    pub reference: Option<String>,
    pub reference_status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundNextAction {
    pub display_details: Option<RefundNextActionDisplayDetails>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RefundNextActionDisplayDetails {
    pub email_sent: EmailSent,
    pub expires_at: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReportingReportRun {
    pub created: i32,
    pub error: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub parameters: FinancialReportingFinanceReportRunRunParameters,
    pub report_type: String,
    pub result: Option<File>,
    pub status: String,
    pub succeeded_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReportingReportType {
    pub data_available_end: i32,
    pub data_available_start: i32,
    pub default_columns: Option<Vec<String>>,
    pub id: String,
    pub livemode: bool,
    pub name: String,
    pub object: String,
    pub updated: i32,
    pub version: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReserveTransaction {
    pub amount: i32,
    pub currency: String,
    pub description: Option<String>,
    pub id: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Review {
    pub billing_zip: Option<String>,
    pub charge: Option<Box<ChargeOrRef>>,
    pub closed_reason: Option<String>,
    pub created: i32,
    pub id: String,
    pub ip_address: Option<String>,
    pub ip_address_location: Option<RadarReviewResourceLocation>,
    pub livemode: bool,
    pub object: String,
    pub open: bool,
    pub opened_reason: String,
    pub payment_intent: Option<Box<PaymentIntentOrRef>>,
    pub reason: String,
    pub session: Option<RadarReviewResourceSession>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RevolutPayUnderlyingPaymentMethodFundingDetails {
    pub card: Option<PaymentMethodDetailsPassthroughCard>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Rule {
    pub action: String,
    pub id: String,
    pub predicate: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ScheduledQueryRun {
    pub created: i32,
    pub data_load_time: i32,
    pub error: Option<SigmaScheduledQueryRunError>,
    pub file: Option<File>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub result_available_until: i32,
    pub sql: String,
    pub status: String,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SchedulesPhaseAutomaticTax {
    pub disabled_reason: Option<String>,
    pub enabled: bool,
    pub liability: Option<Box<ConnectAccountReference>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SecretServiceResourceScope {
    #[serde(rename = "type")]
    pub r#type: String,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SepaDebitGeneratedFrom {
    pub charge: Option<Box<ChargeOrRef>>,
    pub setup_attempt: Option<Box<SetupAttemptOrRef>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttempt {
    pub application: Option<ApplicationOrRef>,
    pub attach_to_self: Option<bool>,
    pub created: i32,
    pub customer: Option<Box<CustomerUnion>>,
    pub flow_directions: Option<Vec<String>>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub payment_method: Box<PaymentMethodOrRef>,
    pub payment_method_details: Box<SetupAttemptPaymentMethodDetails>,
    pub setup_error: Option<Box<ApiErrors>>,
    pub setup_intent: Box<SetupIntentOrRef>,
    pub status: String,
    pub usage: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetails {
    pub acss_debit: Option<SetupAttemptPaymentMethodDetailsAcssDebit>,
    pub amazon_pay: Option<SetupAttemptPaymentMethodDetailsAmazonPay>,
    pub au_becs_debit: Option<SetupAttemptPaymentMethodDetailsAuBecsDebit>,
    pub bacs_debit: Option<SetupAttemptPaymentMethodDetailsBacsDebit>,
    pub bancontact: Option<Box<SetupAttemptPaymentMethodDetailsBancontact>>,
    pub boleto: Option<SetupAttemptPaymentMethodDetailsBoleto>,
    pub card: Option<SetupAttemptPaymentMethodDetailsCard>,
    pub card_present: Option<Box<SetupAttemptPaymentMethodDetailsCardPresent>>,
    pub cashapp: Option<SetupAttemptPaymentMethodDetailsCashapp>,
    pub ideal: Option<Box<SetupAttemptPaymentMethodDetailsIdeal>>,
    pub kakao_pay: Option<SetupAttemptPaymentMethodDetailsKakaoPay>,
    pub klarna: Option<SetupAttemptPaymentMethodDetailsKlarna>,
    pub kr_card: Option<SetupAttemptPaymentMethodDetailsKrCard>,
    pub link: Option<SetupAttemptPaymentMethodDetailsLink>,
    pub naver_pay: Option<SetupAttemptPaymentMethodDetailsNaverPay>,
    pub nz_bank_account: Option<SetupAttemptPaymentMethodDetailsNzBankAccount>,
    pub paypal: Option<SetupAttemptPaymentMethodDetailsPaypal>,
    pub revolut_pay: Option<SetupAttemptPaymentMethodDetailsRevolutPay>,
    pub sepa_debit: Option<SetupAttemptPaymentMethodDetailsSepaDebit>,
    pub sofort: Option<Box<SetupAttemptPaymentMethodDetailsSofort>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<SetupAttemptPaymentMethodDetailsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsAcssDebit {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsAmazonPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsAuBecsDebit {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsBacsDebit {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsBancontact {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsBoleto {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsCard {
    pub brand: Option<String>,
    pub checks: Option<SetupAttemptPaymentMethodDetailsCardChecks>,
    pub country: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub last4: Option<String>,
    pub network: Option<String>,
    pub three_d_secure: Option<ThreeDSecureDetails>,
    pub wallet: Option<SetupAttemptPaymentMethodDetailsCardWallet>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsCardChecks {
    pub address_line1_check: Option<String>,
    pub address_postal_code_check: Option<String>,
    pub cvc_check: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsCardPresent {
    pub generated_card: Option<Box<GeneratedCardOrRef>>,
    pub offline: Option<PaymentMethodDetailsCardPresentOffline>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsCardWallet {
    pub apple_pay: Option<PaymentMethodDetailsCardWalletApplePay>,
    pub google_pay: Option<PaymentMethodDetailsCardWalletGooglePay>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsCashapp {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsIdeal {
    pub bank: Option<String>,
    pub bic: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsKakaoPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsKlarna {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsKrCard {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsLink {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsNaverPay {
    pub buyer_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsNzBankAccount {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsPaypal {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsRevolutPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsSepaDebit {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsSofort {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub generated_sepa_debit: Option<Box<GeneratedSepaDebitOrRef>>,
    pub generated_sepa_debit_mandate: Option<Box<GeneratedSepaDebitMandateOrRef>>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupAttemptPaymentMethodDetailsUsBankAccount {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntent {
    pub application: Option<ApplicationOrRef>,
    pub attach_to_self: Option<bool>,
    pub automatic_payment_methods: Option<PaymentFlowsAutomaticPaymentMethodsSetupIntent>,
    pub cancellation_reason: Option<String>,
    pub client_secret: Option<String>,
    pub created: i32,
    pub customer: Option<Box<CustomerUnion>>,
    pub description: Option<String>,
    pub excluded_payment_method_types: Option<Vec<String>>,
    pub flow_directions: Option<Vec<String>>,
    pub id: String,
    pub last_setup_error: Option<Box<ApiErrors>>,
    pub latest_attempt: Option<Box<LatestAttemptOrRef>>,
    pub livemode: bool,
    pub mandate: Option<Box<MandateOrRef>>,
    pub metadata: Option<MetadataProperty>,
    pub next_action: Option<SetupIntentNextAction>,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub payment_method: Option<Box<PaymentMethodOrRef>>,
    pub payment_method_configuration_details:
        Option<PaymentMethodConfigBizPaymentMethodConfigurationDetails>,
    pub payment_method_options: Option<SetupIntentPaymentMethodOptions>,
    pub payment_method_types: Vec<String>,
    pub single_use_mandate: Option<Box<SingleUseMandateOrRef>>,
    pub status: String,
    pub usage: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentNextAction {
    pub cashapp_handle_redirect_or_display_qr_code:
        Option<PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode>,
    pub redirect_to_url: Option<SetupIntentNextActionRedirectToUrl>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub use_stripe_sdk: Option<serde_json::Value>,
    pub verify_with_microdeposits: Option<SetupIntentNextActionVerifyWithMicrodeposits>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentNextActionRedirectToUrl {
    pub return_url: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentNextActionVerifyWithMicrodeposits {
    pub arrival_date: i32,
    pub hosted_verification_url: String,
    pub microdeposit_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptions {
    pub acss_debit: Option<AcssDebitUnion2>,
    pub amazon_pay: Option<AmazonPayUnion2>,
    pub bacs_debit: Option<BacsDebitUnion2>,
    pub card: Option<CardUnion2>,
    pub card_present: Option<CardPresentUnion2>,
    pub klarna: Option<KlarnaUnion2>,
    pub link: Option<LinkUnion2>,
    pub paypal: Option<PaypalUnion2>,
    pub sepa_debit: Option<SepaDebitUnion2>,
    pub us_bank_account: Option<UsBankAccountUnion2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsAcssDebit {
    pub currency: Option<String>,
    pub mandate_options: Option<SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsAmazonPay {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsBacsDebit {
    pub mandate_options: Option<SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsCard {
    pub mandate_options: Option<SetupIntentPaymentMethodOptionsCardMandateOptions>,
    pub network: Option<String>,
    pub request_three_d_secure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsCardMandateOptions {
    pub amount: i32,
    pub amount_type: String,
    pub currency: String,
    pub description: Option<String>,
    pub end_date: Option<i32>,
    pub interval: String,
    pub interval_count: Option<i32>,
    pub reference: String,
    pub start_date: i32,
    pub supported_types: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsCardPresent {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsKlarna {
    pub currency: Option<String>,
    pub preferred_locale: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsLink {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit {
    pub custom_mandate_url: Option<String>,
    pub default_for: Option<Vec<String>>,
    pub interval_description: Option<String>,
    pub payment_schedule: Option<String>,
    pub transaction_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit {
    pub reference_prefix: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsPaypal {
    pub billing_agreement_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsSepaDebit {
    pub mandate_options: Option<SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentPaymentMethodOptionsUsBankAccount {
    pub financial_connections: Option<LinkedAccountOptionsCommon>,
    pub mandate_options: Option<PaymentMethodOptionsUsBankAccountMandateOptions>,
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupIntentTypeSpecificPaymentMethodOptionsClient {
    pub verification_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Shipping {
    pub address: Option<Address>,
    pub carrier: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
    pub tracking_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShippingRate {
    pub active: bool,
    pub created: i32,
    pub delivery_estimate: Option<ShippingRateDeliveryEstimate>,
    pub display_name: Option<String>,
    pub fixed_amount: Option<ShippingRateFixedAmount>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<TaxCodeOrRef>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShippingRateDeliveryEstimate {
    pub maximum: Option<ShippingRateDeliveryEstimateBound>,
    pub minimum: Option<ShippingRateDeliveryEstimateBound>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShippingRateDeliveryEstimateBound {
    pub unit: String,
    pub value: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShippingRateFixedAmount {
    pub amount: i32,
    pub currency: String,
    pub currency_options: Option<CurrencyOptionsProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SigmaSigmaApiQuery {
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub name: String,
    pub object: String,
    pub sql: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SigmaScheduledQueryRunError {
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Source {
    pub ach_credit_transfer: Option<SourceTypeAchCreditTransfer>,
    pub ach_debit: Option<SourceTypeAchDebit>,
    pub acss_debit: Option<SourceTypeAcssDebit>,
    pub alipay: Option<SourceTypeAlipay>,
    pub allow_redisplay: Option<String>,
    pub amount: Option<i32>,
    pub au_becs_debit: Option<SourceTypeAuBecsDebit>,
    pub bancontact: Option<SourceTypeBancontact>,
    pub card: Option<SourceTypeCard>,
    pub card_present: Option<SourceTypeCardPresent>,
    pub client_secret: String,
    pub code_verification: Option<SourceCodeVerificationFlow>,
    pub created: i32,
    pub currency: Option<String>,
    pub customer: Option<String>,
    pub eps: Option<SourceTypeEps>,
    pub flow: String,
    pub giropay: Option<SourceTypeGiropay>,
    pub id: String,
    pub ideal: Option<SourceTypeIdeal>,
    pub klarna: Option<SourceTypeKlarna>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub multibanco: Option<SourceTypeMultibanco>,
    pub object: String,
    pub owner: Option<SourceOwner>,
    pub p24: Option<SourceTypeP24>,
    pub receiver: Option<SourceReceiverFlow>,
    pub redirect: Option<SourceRedirectFlow>,
    pub sepa_debit: Option<SourceTypeSepaDebit>,
    pub sofort: Option<SourceTypeSofort>,
    pub source_order: Option<SourceOrder>,
    pub statement_descriptor: Option<String>,
    pub status: String,
    pub three_d_secure: Option<SourceTypeThreeDSecure>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub usage: Option<String>,
    pub wechat: Option<SourceTypeWechat>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceCodeVerificationFlow {
    pub attempts_remaining: i32,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceMandateNotification {
    pub acss_debit: Option<SourceMandateNotificationAcssDebitData>,
    pub amount: Option<i32>,
    pub bacs_debit: Option<SourceMandateNotificationBacsDebitData>,
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub reason: String,
    pub sepa_debit: Option<SourceMandateNotificationSepaDebitData>,
    pub source: Source,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceMandateNotificationAcssDebitData {
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceMandateNotificationBacsDebitData {
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceMandateNotificationSepaDebitData {
    pub creditor_identifier: Option<String>,
    pub last4: Option<String>,
    pub mandate_reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceOrder {
    pub amount: i32,
    pub currency: String,
    pub email: Option<String>,
    pub items: Option<Vec<SourceOrderItem>>,
    pub shipping: Option<Shipping>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceOrderItem {
    pub amount: Option<i32>,
    pub currency: Option<String>,
    pub description: Option<String>,
    pub parent: Option<String>,
    pub quantity: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceOwner {
    pub address: Option<Address>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub phone: Option<String>,
    pub verified_address: Option<Address>,
    pub verified_email: Option<String>,
    pub verified_name: Option<String>,
    pub verified_phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceReceiverFlow {
    pub address: Option<String>,
    pub amount_charged: i32,
    pub amount_received: i32,
    pub amount_returned: i32,
    pub refund_attributes_method: String,
    pub refund_attributes_status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceRedirectFlow {
    pub failure_reason: Option<String>,
    pub return_url: String,
    pub status: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransaction {
    pub ach_credit_transfer: Option<SourceTransactionAchCreditTransferData>,
    pub amount: i32,
    pub chf_credit_transfer: Option<SourceTransactionChfCreditTransferData>,
    pub created: i32,
    pub currency: String,
    pub gbp_credit_transfer: Option<SourceTransactionGbpCreditTransferData>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub paper_check: Option<SourceTransactionPaperCheckData>,
    pub sepa_credit_transfer: Option<SourceTransactionSepaCreditTransferData>,
    pub source: String,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransactionAchCreditTransferData {
    pub customer_data: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransactionChfCreditTransferData {
    pub reference: Option<String>,
    pub sender_address_country: Option<String>,
    pub sender_address_line1: Option<String>,
    pub sender_iban: Option<String>,
    pub sender_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransactionGbpCreditTransferData {
    pub fingerprint: Option<String>,
    pub funding_method: Option<String>,
    pub last4: Option<String>,
    pub reference: Option<String>,
    pub sender_account_number: Option<String>,
    pub sender_name: Option<String>,
    pub sender_sort_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransactionPaperCheckData {
    pub available_at: Option<String>,
    pub invoices: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTransactionSepaCreditTransferData {
    pub reference: Option<String>,
    pub sender_iban: Option<String>,
    pub sender_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeAchCreditTransfer {
    pub account_number: Option<String>,
    pub bank_name: Option<String>,
    pub fingerprint: Option<String>,
    pub refund_account_holder_name: Option<String>,
    pub refund_account_holder_type: Option<String>,
    pub refund_routing_number: Option<String>,
    pub routing_number: Option<String>,
    pub swift_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeAchDebit {
    pub bank_name: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub routing_number: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeAcssDebit {
    pub bank_address_city: Option<String>,
    pub bank_address_line_1: Option<String>,
    pub bank_address_line_2: Option<String>,
    pub bank_address_postal_code: Option<String>,
    pub bank_name: Option<String>,
    pub category: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeAlipay {
    pub data_string: Option<String>,
    pub native_url: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeAuBecsDebit {
    pub bsb_number: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeBancontact {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeCard {
    pub address_line1_check: Option<String>,
    pub address_zip_check: Option<String>,
    pub brand: Option<String>,
    pub country: Option<String>,
    pub cvc_check: Option<String>,
    pub dynamic_last4: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub last4: Option<String>,
    pub name: Option<String>,
    pub three_d_secure: Option<String>,
    pub tokenization_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeCardPresent {
    pub application_cryptogram: Option<String>,
    pub application_preferred_name: Option<String>,
    pub authorization_code: Option<String>,
    pub authorization_response_code: Option<String>,
    pub brand: Option<String>,
    pub country: Option<String>,
    pub cvm_type: Option<String>,
    pub data_type: Option<String>,
    pub dedicated_file_name: Option<String>,
    pub emv_auth_data: Option<String>,
    pub evidence_customer_signature: Option<String>,
    pub evidence_transaction_certificate: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub last4: Option<String>,
    pub pos_device_id: Option<String>,
    pub pos_entry_mode: Option<String>,
    pub read_method: Option<String>,
    pub reader: Option<String>,
    pub terminal_verification_results: Option<String>,
    pub transaction_status_information: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeEps {
    pub reference: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeGiropay {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeIdeal {
    pub bank: Option<String>,
    pub bic: Option<String>,
    pub iban_last4: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeKlarna {
    pub background_image_url: Option<String>,
    pub client_token: Option<String>,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub locale: Option<String>,
    pub logo_url: Option<String>,
    pub page_title: Option<String>,
    pub pay_later_asset_urls_descriptive: Option<String>,
    pub pay_later_asset_urls_standard: Option<String>,
    pub pay_later_name: Option<String>,
    pub pay_later_redirect_url: Option<String>,
    pub pay_now_asset_urls_descriptive: Option<String>,
    pub pay_now_asset_urls_standard: Option<String>,
    pub pay_now_name: Option<String>,
    pub pay_now_redirect_url: Option<String>,
    pub pay_over_time_asset_urls_descriptive: Option<String>,
    pub pay_over_time_asset_urls_standard: Option<String>,
    pub pay_over_time_name: Option<String>,
    pub pay_over_time_redirect_url: Option<String>,
    pub payment_method_categories: Option<String>,
    pub purchase_country: Option<String>,
    pub purchase_type: Option<String>,
    pub redirect_url: Option<String>,
    pub shipping_delay: Option<i32>,
    pub shipping_first_name: Option<String>,
    pub shipping_last_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeMultibanco {
    pub entity: Option<String>,
    pub reference: Option<String>,
    pub refund_account_holder_address_city: Option<String>,
    pub refund_account_holder_address_country: Option<String>,
    pub refund_account_holder_address_line1: Option<String>,
    pub refund_account_holder_address_line2: Option<String>,
    pub refund_account_holder_address_postal_code: Option<String>,
    pub refund_account_holder_address_state: Option<String>,
    pub refund_account_holder_name: Option<String>,
    pub refund_iban: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeP24 {
    pub reference: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeSepaDebit {
    pub bank_code: Option<String>,
    pub branch_code: Option<String>,
    pub country: Option<String>,
    pub fingerprint: Option<String>,
    pub last4: Option<String>,
    pub mandate_reference: Option<String>,
    pub mandate_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeSofort {
    pub bank_code: Option<String>,
    pub bank_name: Option<String>,
    pub bic: Option<String>,
    pub country: Option<String>,
    pub iban_last4: Option<String>,
    pub preferred_language: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeThreeDSecure {
    pub address_line1_check: Option<String>,
    pub address_zip_check: Option<String>,
    pub authenticated: Option<bool>,
    pub brand: Option<String>,
    pub card: Option<String>,
    pub country: Option<String>,
    pub customer: Option<String>,
    pub cvc_check: Option<String>,
    pub dynamic_last4: Option<String>,
    pub exp_month: Option<i32>,
    pub exp_year: Option<i32>,
    pub fingerprint: Option<String>,
    pub funding: Option<String>,
    pub last4: Option<String>,
    pub name: Option<String>,
    pub three_d_secure: Option<String>,
    pub tokenization_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceTypeWechat {
    pub prepay_id: Option<String>,
    pub qr_code_url: Option<String>,
    pub statement_descriptor: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Subscription {
    pub application: Option<ApplicationUnion>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Box<SubscriptionAutomaticTax>,
    pub billing_cycle_anchor: i32,
    pub billing_cycle_anchor_config: Option<SubscriptionsResourceBillingCycleAnchorConfig>,
    pub billing_mode: SubscriptionsResourceBillingMode,
    pub billing_thresholds: Option<SubscriptionBillingThresholds>,
    pub cancel_at: Option<i32>,
    pub cancel_at_period_end: bool,
    pub canceled_at: Option<i32>,
    pub cancellation_details: Option<CancellationDetails>,
    pub collection_method: String,
    pub created: i32,
    pub currency: String,
    pub customer: Box<CustomerUnion>,
    pub days_until_due: Option<i32>,
    pub default_payment_method: Option<Box<DefaultPaymentMethodOrRef>>,
    pub default_source: Option<Box<DefaultSourceUnion>>,
    pub default_tax_rates: Option<Vec<TaxRate>>,
    pub description: Option<String>,
    pub discounts: Vec<Box<DiscountsItemOrRef>>,
    pub ended_at: Option<i32>,
    pub id: String,
    pub invoice_settings: Box<SubscriptionsResourceSubscriptionInvoiceSettings>,
    pub items: Box<ItemsProperty>,
    pub latest_invoice: Option<Box<LatestInvoiceOrRef>>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub next_pending_invoice_item_invoice: Option<i32>,
    pub object: String,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub pause_collection: Option<SubscriptionsResourcePauseCollection>,
    pub payment_settings: Option<SubscriptionsResourcePaymentSettings>,
    pub pending_invoice_item_interval: Option<SubscriptionPendingInvoiceItemInterval>,
    pub pending_setup_intent: Option<Box<PendingSetupIntentOrRef>>,
    pub pending_update: Option<Box<SubscriptionsResourcePendingUpdate>>,
    pub schedule: Option<Box<ScheduleOrRef>>,
    pub start_date: i32,
    pub status: String,
    pub test_clock: Option<TestClockOrRef>,
    pub transfer_data: Option<Box<SubscriptionTransferData>>,
    pub trial_end: Option<i32>,
    pub trial_settings: Option<SubscriptionsTrialsResourceTrialSettings>,
    pub trial_start: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionAutomaticTax {
    pub disabled_reason: Option<String>,
    pub enabled: bool,
    pub liability: Option<Box<ConnectAccountReference>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionBillingThresholds {
    pub amount_gte: Option<i32>,
    pub reset_billing_cycle_anchor: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionItem {
    pub billing_thresholds: Option<SubscriptionItemBillingThresholds>,
    pub created: i32,
    pub current_period_end: i32,
    pub current_period_start: i32,
    pub discounts: Vec<Box<DiscountsItemOrRef>>,
    pub id: String,
    pub metadata: MetadataProperty,
    pub object: String,
    pub price: Price,
    pub quantity: Option<i32>,
    pub subscription: String,
    pub tax_rates: Option<Vec<TaxRate>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionItemBillingThresholds {
    pub usage_gte: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionPaymentMethodOptionsCard {
    pub mandate_options: Option<InvoiceMandateOptionsCard>,
    pub network: Option<String>,
    pub request_three_d_secure: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionPendingInvoiceItemInterval {
    pub interval: String,
    pub interval_count: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedule {
    pub application: Option<ApplicationUnion>,
    pub billing_mode: SubscriptionsResourceBillingMode,
    pub canceled_at: Option<i32>,
    pub completed_at: Option<i32>,
    pub created: i32,
    pub current_phase: Option<SubscriptionScheduleCurrentPhase>,
    pub customer: Box<CustomerUnion>,
    pub default_settings: Box<SubscriptionSchedulesResourceDefaultSettings>,
    pub end_behavior: String,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub phases: Vec<Box<SubscriptionSchedulePhaseConfiguration>>,
    pub released_at: Option<i32>,
    pub released_subscription: Option<String>,
    pub status: String,
    pub subscription: Option<Box<SubscriptionOrRef>>,
    pub test_clock: Option<TestClockOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionScheduleAddInvoiceItem {
    pub discounts: Vec<Box<DiscountsResourceStackableDiscount>>,
    pub metadata: Option<MetadataProperty>,
    pub period: SubscriptionScheduleAddInvoiceItemPeriod,
    pub price: PriceUnion,
    pub quantity: Option<i32>,
    pub tax_rates: Option<Vec<TaxRate>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionScheduleAddInvoiceItemPeriod {
    pub end: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd,
    pub start: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionScheduleConfigurationItem {
    pub billing_thresholds: Option<SubscriptionItemBillingThresholds>,
    pub discounts: Vec<Box<DiscountsResourceStackableDiscount>>,
    pub metadata: Option<MetadataProperty>,
    pub price: PriceUnion,
    pub quantity: Option<i32>,
    pub tax_rates: Option<Vec<TaxRate>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionScheduleCurrentPhase {
    pub end_date: i32,
    pub start_date: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedulePhaseConfiguration {
    pub add_invoice_items: Vec<Box<SubscriptionScheduleAddInvoiceItem>>,
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<Box<SchedulesPhaseAutomaticTax>>,
    pub billing_cycle_anchor: Option<String>,
    pub billing_thresholds: Option<SubscriptionBillingThresholds>,
    pub collection_method: Option<String>,
    pub currency: String,
    pub default_payment_method: Option<Box<DefaultPaymentMethodOrRef>>,
    pub default_tax_rates: Option<Vec<TaxRate>>,
    pub description: Option<String>,
    pub discounts: Vec<Box<DiscountsResourceStackableDiscount>>,
    pub end_date: i32,
    pub invoice_settings: Option<Box<InvoiceSettingSubscriptionSchedulePhaseSetting>>,
    pub items: Vec<Box<SubscriptionScheduleConfigurationItem>>,
    pub metadata: Option<MetadataProperty>,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub proration_behavior: String,
    pub start_date: i32,
    pub transfer_data: Option<Box<SubscriptionTransferData>>,
    pub trial_end: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedulesResourceDefaultSettings {
    pub application_fee_percent: Option<f32>,
    pub automatic_tax: Option<Box<SubscriptionSchedulesResourceDefaultSettingsAutomaticTax>>,
    pub billing_cycle_anchor: String,
    pub billing_thresholds: Option<SubscriptionBillingThresholds>,
    pub collection_method: Option<String>,
    pub default_payment_method: Option<Box<DefaultPaymentMethodOrRef>>,
    pub description: Option<String>,
    pub invoice_settings: Box<InvoiceSettingSubscriptionScheduleSetting>,
    pub on_behalf_of: Option<Box<OnBehalfOfOrRef>>,
    pub transfer_data: Option<Box<SubscriptionTransferData>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedulesResourceDefaultSettingsAutomaticTax {
    pub disabled_reason: Option<String>,
    pub enabled: bool,
    pub liability: Option<Box<ConnectAccountReference>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart {
    pub timestamp: Option<i32>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionTransferData {
    pub amount_percent: Option<f32>,
    pub destination: Box<DestinationOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourceBillingCycleAnchorConfig {
    pub day_of_month: i32,
    pub hour: Option<i32>,
    pub minute: Option<i32>,
    pub month: Option<i32>,
    pub second: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourceBillingMode {
    pub flexible: Option<SubscriptionsResourceBillingModeFlexible>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub updated_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourceBillingModeFlexible {
    pub proration_discounts: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourcePauseCollection {
    pub behavior: String,
    pub resumes_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourcePaymentMethodOptions {
    pub acss_debit: Option<InvoicePaymentMethodOptionsAcssDebit>,
    pub bancontact: Option<InvoicePaymentMethodOptionsBancontact>,
    pub card: Option<SubscriptionPaymentMethodOptionsCard>,
    pub customer_balance: Option<InvoicePaymentMethodOptionsCustomerBalance>,
    pub konbini: Option<InvoicePaymentMethodOptionsKonbini>,
    pub sepa_debit: Option<InvoicePaymentMethodOptionsSepaDebit>,
    pub us_bank_account: Option<InvoicePaymentMethodOptionsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourcePaymentSettings {
    pub payment_method_options: Option<SubscriptionsResourcePaymentMethodOptions>,
    pub payment_method_types: Option<Vec<String>>,
    pub save_default_payment_method: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourcePendingUpdate {
    pub billing_cycle_anchor: Option<i32>,
    pub expires_at: i32,
    pub subscription_items: Option<Vec<Box<SubscriptionItem>>>,
    pub trial_end: Option<i32>,
    pub trial_from_plan: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsResourceSubscriptionInvoiceSettings {
    pub account_tax_ids: Option<Vec<Box<AccountTaxIdsItemUnion>>>,
    pub issuer: Box<ConnectAccountReference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsTrialsResourceEndBehavior {
    pub missing_payment_method: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscriptionsTrialsResourceTrialSettings {
    pub end_behavior: SubscriptionsTrialsResourceEndBehavior,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxAssociation {
    pub calculation: String,
    pub id: String,
    pub object: String,
    pub payment_intent: String,
    pub tax_transaction_attempts: Option<Vec<TaxProductResourceTaxAssociationTransactionAttempts>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxCalculation {
    pub amount_total: i32,
    pub currency: String,
    pub customer: Option<String>,
    pub customer_details: TaxProductResourceCustomerDetails,
    pub expires_at: Option<i32>,
    pub id: Option<String>,
    pub line_items: Option<LineItemsProperty3>,
    pub livemode: bool,
    pub object: String,
    pub ship_from_details: Option<TaxProductResourceShipFromDetails>,
    pub shipping_cost: Option<TaxProductResourceTaxCalculationShippingCost>,
    pub tax_amount_exclusive: i32,
    pub tax_amount_inclusive: i32,
    pub tax_breakdown: Vec<TaxProductResourceTaxBreakdown>,
    pub tax_date: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxCalculationLineItem {
    pub amount: i32,
    pub amount_tax: i32,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub product: Option<String>,
    pub quantity: i32,
    pub reference: String,
    pub tax_behavior: String,
    pub tax_breakdown: Option<Vec<TaxProductResourceLineItemTaxBreakdown>>,
    pub tax_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxRegistration {
    pub active_from: i32,
    pub country: String,
    pub country_options: TaxProductRegistrationsResourceCountryOptions,
    pub created: i32,
    pub expires_at: Option<i32>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxSettings {
    pub defaults: TaxProductResourceTaxSettingsDefaults,
    pub head_office: Option<TaxProductResourceTaxSettingsHeadOffice>,
    pub livemode: bool,
    pub object: String,
    pub status: String,
    pub status_details: TaxProductResourceTaxSettingsStatusDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxTransaction {
    pub created: i32,
    pub currency: String,
    pub customer: Option<String>,
    pub customer_details: TaxProductResourceCustomerDetails,
    pub id: String,
    pub line_items: Option<LineItemsProperty4>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub posted_at: i32,
    pub reference: String,
    pub reversal: Option<TaxProductResourceTaxTransactionResourceReversal>,
    pub ship_from_details: Option<TaxProductResourceShipFromDetails>,
    pub shipping_cost: Option<TaxProductResourceTaxTransactionShippingCost>,
    pub tax_date: i32,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxTransactionLineItem {
    pub amount: i32,
    pub amount_tax: i32,
    pub id: String,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub product: Option<String>,
    pub quantity: i32,
    pub reference: String,
    pub reversal: Option<TaxProductResourceTaxTransactionLineItemResourceReversal>,
    pub tax_behavior: String,
    pub tax_code: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxCode {
    pub description: String,
    pub id: String,
    pub name: String,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxDeductedAtSource {
    pub id: String,
    pub object: String,
    pub period_end: i32,
    pub period_start: i32,
    pub tax_deduction_account_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxIDsOwner {
    pub account: Option<Box<AccountOrRef>>,
    pub application: Option<ApplicationOrRef>,
    pub customer: Option<Box<CustomerOrRef>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxId {
    pub country: Option<String>,
    pub created: i32,
    pub customer: Option<Box<CustomerOrRef>>,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub owner: Option<Box<TaxIDsOwner>>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: String,
    pub verification: Option<TaxIdVerification>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxIdVerification {
    pub status: String,
    pub verified_address: Option<String>,
    pub verified_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptions {
    pub ae: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub al: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub am: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ao: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub at: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub au: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub aw: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub az: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ba: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub bb: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub bd: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub be: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub bf: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub bg: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub bh: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub bj: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub bs: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub by: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ca: Option<TaxProductRegistrationsResourceCountryOptionsCanada>,
    pub cd: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub ch: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub cl: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub cm: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub co: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub cr: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub cv: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub cy: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub cz: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub de: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub dk: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub ec: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ee: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub eg: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub es: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub et: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub fi: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub fr: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub gb: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub ge: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub gn: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub gr: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub hr: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub hu: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub id: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ie: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    #[serde(rename = "in")]
    pub r#in: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub is: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub it: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub jp: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub ke: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub kg: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub kh: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub kr: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub kz: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub la: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub lt: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub lu: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub lv: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub ma: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub md: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub me: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub mk: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub mr: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub mt: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub mx: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub my: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ng: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub nl: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub no: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub np: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub nz: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub om: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub pe: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ph: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub pl: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub pt: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub ro: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub rs: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub ru: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub sa: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub se: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub sg: Option<TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods>,
    pub si: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub sk: Option<TaxProductRegistrationsResourceCountryOptionsEurope>,
    pub sn: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub sr: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub th: Option<TaxProductRegistrationsResourceCountryOptionsThailand>,
    pub tj: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub tr: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub tw: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub tz: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ua: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub ug: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub us: Option<TaxProductRegistrationsResourceCountryOptionsUnitedStates>,
    pub uy: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub uz: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub vn: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub za: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
    pub zm: Option<TaxProductRegistrationsResourceCountryOptionsSimplified>,
    pub zw: Option<TaxProductRegistrationsResourceCountryOptionsDefault>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard {
    pub province: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsCanada {
    pub province_standard: Option<TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsDefault {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods {
    pub standard: Option<TaxProductRegistrationsResourceCountryOptionsDefaultStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsDefaultStandard {
    pub place_of_supply_scheme: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsEuStandard {
    pub place_of_supply_scheme: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsEurope {
    pub standard: Option<TaxProductRegistrationsResourceCountryOptionsEuStandard>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsSimplified {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsThailand {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsUnitedStates {
    pub local_amusement_tax:
        Option<TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax>,
    pub local_lease_tax: Option<TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax>,
    pub state: String,
    pub state_sales_tax: Option<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax {
    pub jurisdiction: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax {
    pub jurisdiction: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax {
    pub elections:
        Option<Vec<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection {
    pub jurisdiction: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceCustomerDetails {
    pub address: Option<TaxProductResourcePostalAddress>,
    pub address_source: Option<String>,
    pub ip_address: Option<String>,
    pub tax_ids: Vec<TaxProductResourceCustomerDetailsResourceTaxId>,
    pub taxability_override: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceCustomerDetailsResourceTaxId {
    #[serde(rename = "type")]
    pub r#type: String,
    pub value: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceJurisdiction {
    pub country: String,
    pub display_name: String,
    pub level: String,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceLineItemTaxBreakdown {
    pub amount: i32,
    pub jurisdiction: TaxProductResourceJurisdiction,
    pub sourcing: String,
    pub tax_rate_details: Option<TaxProductResourceLineItemTaxRateDetails>,
    pub taxability_reason: String,
    pub taxable_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceLineItemTaxRateDetails {
    pub display_name: String,
    pub percentage_decimal: String,
    pub tax_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourcePostalAddress {
    pub city: Option<String>,
    pub country: String,
    pub line1: Option<String>,
    pub line2: Option<String>,
    pub postal_code: Option<String>,
    pub state: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceShipFromDetails {
    pub address: TaxProductResourcePostalAddress,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxAssociationTransactionAttempts {
    pub committed: Option<TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted>,
    pub errored: Option<TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored>,
    pub source: String,
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted {
    pub transaction: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored {
    pub reason: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxBreakdown {
    pub amount: i32,
    pub inclusive: bool,
    pub tax_rate_details: TaxProductResourceTaxRateDetails,
    pub taxability_reason: String,
    pub taxable_amount: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxCalculationShippingCost {
    pub amount: i32,
    pub amount_tax: i32,
    pub shipping_rate: Option<String>,
    pub tax_behavior: String,
    pub tax_breakdown: Option<Vec<TaxProductResourceLineItemTaxBreakdown>>,
    pub tax_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxRateDetails {
    pub country: Option<String>,
    pub flat_amount: Option<TaxRateFlatAmount>,
    pub percentage_decimal: String,
    pub rate_type: Option<String>,
    pub state: Option<String>,
    pub tax_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxSettingsDefaults {
    pub provider: String,
    pub tax_behavior: Option<String>,
    pub tax_code: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxSettingsHeadOffice {
    pub address: Address,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxSettingsStatusDetails {
    pub active: Option<TaxProductResourceTaxSettingsStatusDetailsResourceActive>,
    pub pending: Option<TaxProductResourceTaxSettingsStatusDetailsResourcePending>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxSettingsStatusDetailsResourceActive {}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxSettingsStatusDetailsResourcePending {
    pub missing_fields: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxTransactionLineItemResourceReversal {
    pub original_line_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxTransactionResourceReversal {
    pub original_transaction: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxProductResourceTaxTransactionShippingCost {
    pub amount: i32,
    pub amount_tax: i32,
    pub shipping_rate: Option<String>,
    pub tax_behavior: String,
    pub tax_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxRate {
    pub active: bool,
    pub country: Option<String>,
    pub created: i32,
    pub description: Option<String>,
    pub display_name: String,
    pub effective_percentage: Option<f32>,
    pub flat_amount: Option<TaxRateFlatAmount>,
    pub id: String,
    pub inclusive: bool,
    pub jurisdiction: Option<String>,
    pub jurisdiction_level: Option<String>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub percentage: f32,
    pub rate_type: Option<String>,
    pub state: Option<String>,
    pub tax_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TaxRateFlatAmount {
    pub amount: i32,
    pub currency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfiguration {
    pub bbpos_wisepad3: Option<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig>,
    pub bbpos_wisepos_e: Option<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig>,
    pub id: String,
    pub is_account_default: Option<bool>,
    pub livemode: bool,
    pub name: Option<String>,
    pub object: String,
    pub offline: Option<TerminalConfigurationConfigurationResourceOfflineConfig>,
    pub reboot_window: Option<TerminalConfigurationConfigurationResourceRebootWindow>,
    pub stripe_s700: Option<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig>,
    pub tipping: Option<TerminalConfigurationConfigurationResourceTipping>,
    pub verifone_p400: Option<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig>,
    pub wifi: Option<TerminalConfigurationConfigurationResourceWifiConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConnectionToken {
    pub location: Option<String>,
    pub object: String,
    pub secret: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalLocation {
    pub address: Address,
    pub address_kana: Option<LegalEntityJapanAddress>,
    pub address_kanji: Option<LegalEntityJapanAddress>,
    pub configuration_overrides: Option<String>,
    pub display_name: String,
    pub display_name_kana: Option<String>,
    pub display_name_kanji: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub phone: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalOnboardingLink {
    pub link_options: TerminalOnboardingLinkLinkOptions,
    pub link_type: String,
    pub object: String,
    pub on_behalf_of: Option<String>,
    pub redirect_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReader {
    pub action: Option<TerminalReaderReaderResourceReaderAction>,
    pub device_sw_version: Option<String>,
    pub device_type: String,
    pub id: String,
    pub ip_address: Option<String>,
    pub label: String,
    pub last_seen_at: Option<i32>,
    pub livemode: bool,
    pub location: Option<LocationOrRef>,
    pub metadata: MetadataProperty,
    pub object: String,
    pub serial_number: String,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceCurrencySpecificConfig {
    pub fixed_amounts: Option<Vec<i32>>,
    pub percentages: Option<Vec<i32>>,
    pub smart_tip_threshold: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig {
    pub splashscreen: Option<SplashscreenOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceEnterprisePeapWifi {
    pub ca_certificate_file: Option<String>,
    pub password: String,
    pub ssid: String,
    pub username: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceEnterpriseTlsWifi {
    pub ca_certificate_file: Option<String>,
    pub client_certificate_file: String,
    pub private_key_file: String,
    pub private_key_file_password: Option<String>,
    pub ssid: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceOfflineConfig {
    pub enabled: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourcePersonalPskWifi {
    pub password: String,
    pub ssid: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceRebootWindow {
    pub end_hour: i32,
    pub start_hour: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceTipping {
    pub aed: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub aud: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub bgn: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub cad: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub chf: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub czk: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub dkk: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub eur: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub gbp: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub gip: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub hkd: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub huf: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub jpy: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub mxn: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub myr: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub nok: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub nzd: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub pln: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub ron: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub sek: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub sgd: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
    pub usd: Option<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalConfigurationConfigurationResourceWifiConfig {
    pub enterprise_eap_peap: Option<TerminalConfigurationConfigurationResourceEnterprisePeapWifi>,
    pub enterprise_eap_tls: Option<TerminalConfigurationConfigurationResourceEnterpriseTlsWifi>,
    pub personal_psk: Option<TerminalConfigurationConfigurationResourcePersonalPskWifi>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalOnboardingLinkAppleTermsAndConditions {
    pub allow_relinking: Option<bool>,
    pub merchant_display_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalOnboardingLinkLinkOptions {
    pub apple_terms_and_conditions: Option<TerminalOnboardingLinkAppleTermsAndConditions>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceCart {
    pub currency: String,
    pub line_items: Vec<TerminalReaderReaderResourceLineItem>,
    pub tax: Option<i32>,
    pub total: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceChoice {
    pub id: Option<String>,
    pub style: Option<String>,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceCollectConfig {
    pub enable_customer_cancellation: Option<bool>,
    pub skip_tipping: Option<bool>,
    pub tipping: Option<TerminalReaderReaderResourceTippingConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceCollectInputsAction {
    pub inputs: Vec<TerminalReaderReaderResourceInput>,
    pub metadata: Option<MetadataProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceCollectPaymentMethodAction {
    pub collect_config: Option<TerminalReaderReaderResourceCollectConfig>,
    pub payment_intent: PaymentIntentOrRef,
    pub payment_method: Option<PaymentMethod>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceConfirmConfig {
    pub return_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceConfirmPaymentIntentAction {
    pub confirm_config: Option<TerminalReaderReaderResourceConfirmConfig>,
    pub payment_intent: PaymentIntentOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceCustomText {
    pub description: Option<String>,
    pub skip_button: Option<String>,
    pub submit_button: Option<String>,
    pub title: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceEmail {
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceInput {
    pub custom_text: Option<TerminalReaderReaderResourceCustomText>,
    pub email: Option<TerminalReaderReaderResourceEmail>,
    pub numeric: Option<TerminalReaderReaderResourceNumeric>,
    pub phone: Option<TerminalReaderReaderResourcePhone>,
    pub required: Option<bool>,
    pub selection: Option<TerminalReaderReaderResourceSelection>,
    pub signature: Option<TerminalReaderReaderResourceSignature>,
    pub skipped: Option<bool>,
    pub text: Option<TerminalReaderReaderResourceText>,
    pub toggles: Option<Vec<TerminalReaderReaderResourceToggle>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceLineItem {
    pub amount: i32,
    pub description: String,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceNumeric {
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourcePhone {
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceProcessConfig {
    pub enable_customer_cancellation: Option<bool>,
    pub return_url: Option<String>,
    pub skip_tipping: Option<bool>,
    pub tipping: Option<TerminalReaderReaderResourceTippingConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceProcessPaymentIntentAction {
    pub payment_intent: PaymentIntentOrRef,
    pub process_config: Option<TerminalReaderReaderResourceProcessConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceProcessSetupConfig {
    pub enable_customer_cancellation: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceProcessSetupIntentAction {
    pub generated_card: Option<String>,
    pub process_config: Option<TerminalReaderReaderResourceProcessSetupConfig>,
    pub setup_intent: SetupIntentOrRef,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceReaderAction {
    pub collect_inputs: Option<TerminalReaderReaderResourceCollectInputsAction>,
    pub collect_payment_method: Option<TerminalReaderReaderResourceCollectPaymentMethodAction>,
    pub confirm_payment_intent: Option<TerminalReaderReaderResourceConfirmPaymentIntentAction>,
    pub failure_code: Option<String>,
    pub failure_message: Option<String>,
    pub process_payment_intent: Option<TerminalReaderReaderResourceProcessPaymentIntentAction>,
    pub process_setup_intent: Option<TerminalReaderReaderResourceProcessSetupIntentAction>,
    pub refund_payment: Option<TerminalReaderReaderResourceRefundPaymentAction>,
    pub set_reader_display: Option<TerminalReaderReaderResourceSetReaderDisplayAction>,
    pub status: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceRefundPaymentAction {
    pub amount: Option<i32>,
    pub charge: Option<ChargeOrRef>,
    pub metadata: Option<MetadataProperty>,
    pub payment_intent: Option<PaymentIntentOrRef>,
    pub reason: Option<String>,
    pub refund: Option<RefundOrRef>,
    pub refund_application_fee: Option<bool>,
    pub refund_payment_config: Option<TerminalReaderReaderResourceRefundPaymentConfig>,
    pub reverse_transfer: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceRefundPaymentConfig {
    pub enable_customer_cancellation: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceSelection {
    pub choices: Vec<TerminalReaderReaderResourceChoice>,
    pub id: Option<String>,
    pub text: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceSetReaderDisplayAction {
    pub cart: Option<TerminalReaderReaderResourceCart>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceSignature {
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceText {
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceTippingConfig {
    pub amount_eligible: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalReaderReaderResourceToggle {
    pub default_value: Option<String>,
    pub description: Option<String>,
    pub title: Option<String>,
    pub value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TestHelpersTestClock {
    pub created: i32,
    pub deletes_after: i32,
    pub frozen_time: i32,
    pub id: String,
    pub livemode: bool,
    pub name: Option<String>,
    pub object: String,
    pub status: String,
    pub status_details: BillingClocksResourceStatusDetailsStatusDetails,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ThreeDSecureDetails {
    pub authentication_flow: Option<String>,
    pub electronic_commerce_indicator: Option<String>,
    pub result: Option<String>,
    pub result_reason: Option<String>,
    pub transaction_id: Option<String>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ThreeDSecureDetailsCharge {
    pub authentication_flow: Option<String>,
    pub electronic_commerce_indicator: Option<String>,
    pub exemption_indicator: Option<String>,
    pub exemption_indicator_applied: Option<bool>,
    pub result: Option<String>,
    pub result_reason: Option<String>,
    pub transaction_id: Option<String>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ThreeDSecureUsage {
    pub supported: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ThresholdsResourceUsageAlertFilter {
    pub customer: Option<CustomerOrRef>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ThresholdsResourceUsageThresholdConfig {
    pub filters: Option<Vec<ThresholdsResourceUsageAlertFilter>>,
    pub gte: i32,
    pub meter: MeterOrRef,
    pub recurrence: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Token {
    pub bank_account: Option<BankAccount>,
    pub card: Option<Card>,
    pub client_ip: Option<String>,
    pub created: i32,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    #[serde(rename = "type")]
    pub r#type: String,
    pub used: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TokenCardNetworks {
    pub preferred: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Topup {
    pub amount: i32,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub expected_availability_date: Option<i32>,
    pub failure_code: Option<String>,
    pub failure_message: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub source: Option<Source>,
    pub statement_descriptor: Option<String>,
    pub status: String,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Transfer {
    pub amount: i32,
    pub amount_reversed: i32,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination: Option<Box<DestinationOrRef>>,
    pub destination_payment: Option<Box<DestinationPaymentOrRef>>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub reversals: Box<ReversalsProperty>,
    pub reversed: bool,
    pub source_transaction: Option<Box<SourceTransactionOrRef>>,
    pub source_type: Option<String>,
    pub transfer_group: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TransferData {
    pub amount: Option<i32>,
    pub destination: Box<DestinationOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TransferReversal {
    pub amount: i32,
    pub balance_transaction: Option<Box<BalanceTransactionOrRef>>,
    pub created: i32,
    pub currency: String,
    pub destination_payment_refund: Option<Box<DestinationPaymentRefundOrRef>>,
    pub id: String,
    pub metadata: Option<MetadataProperty>,
    pub object: String,
    pub source_refund: Option<Box<SourceRefundOrRef>>,
    pub transfer: Box<TransferOrRef>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TransferSchedule {
    pub delay_days: i32,
    pub interval: String,
    pub monthly_anchor: Option<i32>,
    pub monthly_payout_days: Option<Vec<i32>>,
    pub weekly_anchor: Option<String>,
    pub weekly_payout_days: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TransformQuantity {
    pub divide_by: i32,
    pub round: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TransformUsage {
    pub divide_by: i32,
    pub round: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryCreditReversal {
    pub amount: i32,
    pub created: i32,
    pub currency: String,
    pub financial_account: String,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub network: String,
    pub object: String,
    pub received_credit: String,
    pub status: String,
    pub status_transitions: TreasuryReceivedCreditsResourceStatusTransitions,
    pub transaction: Option<Box<TransactionOrRef2>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryDebitReversal {
    pub amount: i32,
    pub created: i32,
    pub currency: String,
    pub financial_account: Option<String>,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub linked_flows: Option<TreasuryReceivedDebitsResourceDebitReversalLinkedFlows>,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub network: String,
    pub object: String,
    pub received_debit: String,
    pub status: String,
    pub status_transitions: TreasuryReceivedDebitsResourceStatusTransitions,
    pub transaction: Option<Box<TransactionOrRef2>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccount {
    pub active_features: Option<Vec<String>>,
    pub balance: TreasuryFinancialAccountsResourceBalance,
    pub country: String,
    pub created: i32,
    pub features: Option<TreasuryFinancialAccountFeatures>,
    pub financial_addresses: Vec<TreasuryFinancialAccountsResourceFinancialAddress>,
    pub id: String,
    pub is_default: Option<bool>,
    pub livemode: bool,
    pub metadata: Option<MetadataProperty>,
    pub nickname: Option<String>,
    pub object: String,
    pub pending_features: Option<Vec<String>>,
    pub platform_restrictions: Option<TreasuryFinancialAccountsResourcePlatformRestrictions>,
    pub restricted_features: Option<Vec<String>>,
    pub status: String,
    pub status_details: TreasuryFinancialAccountsResourceStatusDetails,
    pub supported_currencies: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountFeatures {
    pub card_issuing: Option<TreasuryFinancialAccountsResourceToggleSettings>,
    pub deposit_insurance: Option<TreasuryFinancialAccountsResourceToggleSettings>,
    pub financial_addresses: Option<TreasuryFinancialAccountsResourceFinancialAddressesFeatures>,
    pub inbound_transfers: Option<TreasuryFinancialAccountsResourceInboundTransfers>,
    pub intra_stripe_flows: Option<TreasuryFinancialAccountsResourceToggleSettings>,
    pub object: String,
    pub outbound_payments: Option<TreasuryFinancialAccountsResourceOutboundPayments>,
    pub outbound_transfers: Option<TreasuryFinancialAccountsResourceOutboundTransfers>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryInboundTransfer {
    pub amount: i32,
    pub cancelable: bool,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub failure_details: Option<TreasuryInboundTransfersResourceFailureDetails>,
    pub financial_account: String,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub linked_flows: TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub origin_payment_method: Option<String>,
    pub origin_payment_method_details: Option<InboundTransfers>,
    pub returned: Option<bool>,
    pub statement_descriptor: String,
    pub status: String,
    pub status_transitions:
        TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
    pub transaction: Option<Box<TransactionOrRef2>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPayment {
    pub amount: i32,
    pub cancelable: bool,
    pub created: i32,
    pub currency: String,
    pub customer: Option<String>,
    pub description: Option<String>,
    pub destination_payment_method: Option<String>,
    pub destination_payment_method_details: Option<OutboundPaymentsPaymentMethodDetails>,
    pub end_user_details:
        Option<TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails>,
    pub expected_arrival_date: i32,
    pub financial_account: String,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub returned_details: Option<Box<TreasuryOutboundPaymentsResourceReturnedStatus>>,
    pub statement_descriptor: String,
    pub status: String,
    pub status_transitions:
        TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
    pub tracking_details:
        Option<TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails>,
    pub transaction: Box<TransactionOrRef2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfer {
    pub amount: i32,
    pub cancelable: bool,
    pub created: i32,
    pub currency: String,
    pub description: Option<String>,
    pub destination_payment_method: Option<String>,
    pub destination_payment_method_details: OutboundTransfersPaymentMethodDetails,
    pub expected_arrival_date: i32,
    pub financial_account: String,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub returned_details: Option<Box<TreasuryOutboundTransfersResourceReturnedDetails>>,
    pub statement_descriptor: String,
    pub status: String,
    pub status_transitions: TreasuryOutboundTransfersResourceStatusTransitions,
    pub tracking_details:
        Option<TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails>,
    pub transaction: Box<TransactionOrRef2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedCredit {
    pub amount: i32,
    pub created: i32,
    pub currency: String,
    pub description: String,
    pub failure_code: Option<String>,
    pub financial_account: Option<String>,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub initiating_payment_method_details:
        TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
    pub linked_flows: Box<TreasuryReceivedCreditsResourceLinkedFlows>,
    pub livemode: bool,
    pub network: String,
    pub object: String,
    pub reversal_details: Option<TreasuryReceivedCreditsResourceReversalDetails>,
    pub status: String,
    pub transaction: Option<Box<TransactionOrRef2>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedDebit {
    pub amount: i32,
    pub created: i32,
    pub currency: String,
    pub description: String,
    pub failure_code: Option<String>,
    pub financial_account: Option<String>,
    pub hosted_regulatory_receipt_url: Option<String>,
    pub id: String,
    pub initiating_payment_method_details:
        Option<TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails>,
    pub linked_flows: TreasuryReceivedDebitsResourceLinkedFlows,
    pub livemode: bool,
    pub network: String,
    pub object: String,
    pub reversal_details: Option<TreasuryReceivedDebitsResourceReversalDetails>,
    pub status: String,
    pub transaction: Option<Box<TransactionOrRef2>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryTransaction {
    pub amount: i32,
    pub balance_impact: TreasuryTransactionsResourceBalanceImpact,
    pub created: i32,
    pub currency: String,
    pub description: String,
    pub entries: Option<Box<EntriesProperty>>,
    pub financial_account: String,
    pub flow: Option<String>,
    pub flow_details: Option<Box<TreasuryTransactionsResourceFlowDetails>>,
    pub flow_type: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub status: String,
    pub status_transitions:
        TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryTransactionEntry {
    pub balance_impact: TreasuryTransactionsResourceBalanceImpact,
    pub created: i32,
    pub currency: String,
    pub effective_at: i32,
    pub financial_account: String,
    pub flow: Option<String>,
    pub flow_details: Option<Box<TreasuryTransactionsResourceFlowDetails>>,
    pub flow_type: String,
    pub id: String,
    pub livemode: bool,
    pub object: String,
    pub transaction: Box<TransactionOrRef2>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceAbaRecord {
    pub account_holder_name: String,
    pub account_number: Option<String>,
    pub account_number_last4: String,
    pub bank_name: String,
    pub routing_number: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceAbaToggleSettings {
    pub requested: bool,
    pub status: String,
    pub status_details: Vec<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceBalance {
    pub cash: CashProperty,
    pub inbound_pending: InboundPendingProperty,
    pub outbound_pending: OutboundPendingProperty,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceClosedStatusDetails {
    pub reasons: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceFinancialAddress {
    pub aba: Option<TreasuryFinancialAccountsResourceAbaRecord>,
    pub supported_networks: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceFinancialAddressesFeatures {
    pub aba: Option<TreasuryFinancialAccountsResourceAbaToggleSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceInboundAchToggleSettings {
    pub requested: bool,
    pub status: String,
    pub status_details: Vec<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceInboundTransfers {
    pub ach: Option<TreasuryFinancialAccountsResourceInboundAchToggleSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceOutboundAchToggleSettings {
    pub requested: bool,
    pub status: String,
    pub status_details: Vec<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceOutboundPayments {
    pub ach: Option<TreasuryFinancialAccountsResourceOutboundAchToggleSettings>,
    pub us_domestic_wire: Option<TreasuryFinancialAccountsResourceToggleSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceOutboundTransfers {
    pub ach: Option<TreasuryFinancialAccountsResourceOutboundAchToggleSettings>,
    pub us_domestic_wire: Option<TreasuryFinancialAccountsResourceToggleSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourcePlatformRestrictions {
    pub inbound_flows: Option<String>,
    pub outbound_flows: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceStatusDetails {
    pub closed: Option<TreasuryFinancialAccountsResourceClosedStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceToggleSettings {
    pub requested: bool,
    pub status: String,
    pub status_details: Vec<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryFinancialAccountsResourceTogglesSettingStatusDetails {
    pub code: String,
    pub resolution: Option<String>,
    pub restriction: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryInboundTransfersResourceFailureDetails {
    pub code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows {
    pub received_debit: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions {
    pub canceled_at: Option<i32>,
    pub failed_at: Option<i32>,
    pub succeeded_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceAchTrackingDetails {
    pub trace_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails {
    pub ip_address: Option<String>,
    pub present: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions {
    pub canceled_at: Option<i32>,
    pub failed_at: Option<i32>,
    pub posted_at: Option<i32>,
    pub returned_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails {
    pub ach: Option<TreasuryOutboundPaymentsResourceAchTrackingDetails>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_domestic_wire: Option<TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceReturnedStatus {
    pub code: String,
    pub transaction: Box<TransactionOrRef2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails {
    pub chips: Option<String>,
    pub imad: Option<String>,
    pub omad: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfersResourceAchTrackingDetails {
    pub trace_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails {
    pub ach: Option<TreasuryOutboundTransfersResourceAchTrackingDetails>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_domestic_wire: Option<TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfersResourceReturnedDetails {
    pub code: String,
    pub transaction: Box<TransactionOrRef2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfersResourceStatusTransitions {
    pub canceled_at: Option<i32>,
    pub failed_at: Option<i32>,
    pub posted_at: Option<i32>,
    pub returned_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails {
    pub chips: Option<String>,
    pub imad: Option<String>,
    pub omad: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedCreditsResourceLinkedFlows {
    pub credit_reversal: Option<String>,
    pub issuing_authorization: Option<String>,
    pub issuing_transaction: Option<String>,
    pub source_flow: Option<String>,
    pub source_flow_details: Option<Box<TreasuryReceivedCreditsResourceSourceFlowsDetails>>,
    pub source_flow_type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedCreditsResourceReversalDetails {
    pub deadline: Option<i32>,
    pub restricted_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedCreditsResourceSourceFlowsDetails {
    pub credit_reversal: Option<Box<TreasuryCreditReversal>>,
    pub outbound_payment: Option<Box<TreasuryOutboundPayment>>,
    pub outbound_transfer: Option<Box<TreasuryOutboundTransfer>>,
    pub payout: Option<Payout>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedCreditsResourceStatusTransitions {
    pub posted_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedDebitsResourceDebitReversalLinkedFlows {
    pub issuing_dispute: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedDebitsResourceLinkedFlows {
    pub debit_reversal: Option<String>,
    pub inbound_transfer: Option<String>,
    pub issuing_authorization: Option<String>,
    pub issuing_transaction: Option<String>,
    pub payout: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedDebitsResourceReversalDetails {
    pub deadline: Option<i32>,
    pub restricted_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryReceivedDebitsResourceStatusTransitions {
    pub completed_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasurySharedResourceBillingDetails {
    pub address: Address,
    pub email: Option<String>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
    pub balance: Option<String>,
    pub billing_details: TreasurySharedResourceBillingDetails,
    pub financial_account: Option<ReceivedPaymentMethodDetailsFinancialAccount>,
    pub issuing_card: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub us_bank_account: Option<TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount {
    pub bank_name: Option<String>,
    pub last4: Option<String>,
    pub routing_number: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions {
    pub posted_at: Option<i32>,
    pub void_at: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryTransactionsResourceBalanceImpact {
    pub cash: i32,
    pub inbound_pending: i32,
    pub outbound_pending: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreasuryTransactionsResourceFlowDetails {
    pub credit_reversal: Option<Box<TreasuryCreditReversal>>,
    pub debit_reversal: Option<Box<TreasuryDebitReversal>>,
    pub inbound_transfer: Option<Box<TreasuryInboundTransfer>>,
    pub issuing_authorization: Option<IssuingAuthorization>,
    pub outbound_payment: Option<Box<TreasuryOutboundPayment>>,
    pub outbound_transfer: Option<Box<TreasuryOutboundTransfer>>,
    pub received_credit: Option<Box<TreasuryReceivedCredit>>,
    pub received_debit: Option<Box<TreasuryReceivedDebit>>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UsBankAccountNetworks {
    pub preferred: Option<String>,
    pub supported: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VerificationSessionRedaction {
    pub status: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebhookEndpoint {
    pub api_version: Option<String>,
    pub application: Option<String>,
    pub created: i32,
    pub description: Option<String>,
    pub enabled_events: Vec<String>,
    pub id: String,
    pub livemode: bool,
    pub metadata: MetadataProperty,
    pub object: String,
    pub secret: Option<String>,
    pub status: String,
    pub url: String,
}
