import type { Account, AccountLink, AccountSession, ApplePayDomain, ApplicationFee, AppsSecret, Balance, BalanceSettings, BalanceTransaction, BankAccount, BillingAlert, BillingCreditBalanceSummary, BillingCreditBalanceTransaction, BillingCreditGrant, BillingMeter, BillingMeterEvent, BillingMeterEventAdjustment, BillingPortalConfiguration, BillingPortalSession, Capability, Card, CashBalance, Charge, CheckoutSession, ClimateOrder, ClimateProduct, ClimateSupplier, ConfirmationToken, CountrySpec, Coupon, CreditNote, Customer, CustomerBalanceTransaction, CustomerCashBalanceTransaction, CustomerSession, DeleteCustomersCustomerBankAccountsIdUnion, DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest, DeleteSubscriptionItemsItemRequest, DeleteSubscriptionsSubscriptionExposedIdRequest, DeletedAccount, DeletedApplePayDomain, DeletedCoupon, DeletedCustomer, DeletedDiscount, DeletedExternalAccount, DeletedInvoice, DeletedInvoiceitem, DeletedPerson, DeletedPlan, DeletedProduct, DeletedProductFeature, DeletedRadarValueList, DeletedRadarValueListItem, DeletedSubscriptionItem, DeletedTaxId, DeletedTerminalConfiguration, DeletedTerminalLocation, DeletedTerminalReader, DeletedTestHelpersTestClock, DeletedWebhookEndpoint, Discount, Dispute, EntitlementsActiveEntitlement, EntitlementsFeature, EphemeralKey, Event, ExchangeRate, ExternalAccount, FeeRefund, File, FileLink, FinancialConnectionsAccount, FinancialConnectionsSession, FinancialConnectionsTransaction, ForwardingRequest, FundingInstructions, GetAccountRequest, GetAccountsAccountCapabilitiesResponse, GetAccountsAccountExternalAccountsResponse, GetAccountsAccountPeopleObject, GetAccountsAccountPeopleResponse, GetAccountsResponse, GetAccountsUnion, GetApplePayDomainsResponse, GetApplicationFeesIdRefundsResponse, GetApplicationFeesResponse, GetAppsSecretsObject, GetAppsSecretsResponse, GetBalanceHistoryResponse, GetBillingAlertsResponse, GetBillingCreditBalanceSummaryObject, GetBillingCreditBalanceTransactionsResponse, GetBillingCreditGrantsResponse, GetBillingMetersIdEventSummariesResponse, GetBillingMetersResponse, GetBillingPortalConfigurationsResponse, GetChargesChargeRefundsResponse, GetChargesResponse, GetChargesSearchResponse, GetCheckoutSessionsObject, GetCheckoutSessionsResponse, GetCheckoutSessionsSessionLineItemsResponse, GetClimateOrdersResponse, GetClimateProductsResponse, GetClimateSuppliersResponse, GetCountrySpecsResponse, GetCouponsResponse, GetCreditNotesPreviewLinesResponse, GetCreditNotesPreviewObject, GetCreditNotesResponse, GetCustomersCustomerBalanceTransactionsResponse, GetCustomersCustomerBankAccountsResponse, GetCustomersCustomerCardsResponse, GetCustomersCustomerCashBalanceTransactionsResponse, GetCustomersCustomerPaymentMethodsResponse, GetCustomersCustomerSourcesResponse, GetCustomersCustomerSubscriptionsResponse, GetCustomersCustomerTaxIdsResponse, GetCustomersCustomerUnion, GetCustomersResponse, GetCustomersSearchResponse, GetDisputesResponse, GetEntitlementsActiveEntitlementsResponse, GetEntitlementsFeaturesResponse, GetEventsResponse, GetExchangeRatesResponse, GetFileLinksResponse, GetFilesResponse, GetFinancialConnectionsAccountsAccountOwnersResponse, GetFinancialConnectionsAccountsObject, GetFinancialConnectionsAccountsResponse, GetFinancialConnectionsTransactionsObject, GetFinancialConnectionsTransactionsResponse, GetForwardingRequestsObject, GetForwardingRequestsResponse, GetIdentityVerificationReportsResponse, GetIdentityVerificationSessionsResponse, GetInvoicePaymentsObject, GetInvoicePaymentsResponse, GetInvoiceRenderingTemplatesResponse, GetInvoiceitemsResponse, GetInvoicesInvoiceLinesResponse, GetInvoicesResponse, GetInvoicesSearchResponse, GetIssuingAuthorizationsResponse, GetIssuingCardholdersResponse, GetIssuingCardsResponse, GetIssuingDisputesResponse, GetIssuingPersonalizationDesignsObject, GetIssuingPersonalizationDesignsResponse, GetIssuingPhysicalBundlesResponse, GetIssuingTokensResponse, GetIssuingTransactionsResponse, GetPaymentAttemptRecordsResponse, GetPaymentIntentsIntentAmountDetailsLineItemsResponse, GetPaymentIntentsResponse, GetPaymentIntentsSearchResponse, GetPaymentLinksPaymentLinkLineItemsResponse, GetPaymentLinksResponse, GetPaymentMethodConfigurationsResponse, GetPaymentMethodConfigurationsUnion, GetPaymentMethodDomainsResponse, GetPaymentMethodsResponse, GetPayoutsResponse, GetPlansResponse, GetPricesObject, GetPricesResponse, GetPricesSearchResponse, GetProductsProductFeaturesResponse, GetProductsResponse, GetProductsSearchResponse, GetPromotionCodesResponse, GetQuotesQuoteComputedUpfrontLineItemsResponse, GetQuotesResponse, GetRadarEarlyFraudWarningsResponse, GetRadarValueListItemsResponse, GetRadarValueListsResponse, GetRefundsResponse, GetReportingReportRunsResponse, GetReportingReportTypesResponse, GetReviewsResponse, GetSetupAttemptsResponse, GetSetupIntentsResponse, GetShippingRatesResponse, GetSigmaScheduledQueryRunsResponse, GetSourcesSourceSourceTransactionsResponse, GetSubscriptionItemsResponse, GetSubscriptionSchedulesResponse, GetSubscriptionsObject, GetSubscriptionsResponse, GetSubscriptionsSearchResponse, GetTaxCalculationsCalculationLineItemsResponse, GetTaxCodesResponse, GetTaxIdsObject, GetTaxRatesResponse, GetTaxRegistrationsResponse, GetTaxTransactionsTransactionLineItemsResponse, GetTerminalConfigurationsConfigurationUnion, GetTerminalConfigurationsResponse, GetTerminalLocationsLocationUnion, GetTerminalLocationsResponse, GetTerminalReadersReaderUnion, GetTerminalReadersResponse, GetTestHelpersTestClocksResponse, GetTopupsResponse, GetTransfersIdReversalsResponse, GetTransfersResponse, GetTreasuryCreditReversalsResponse, GetTreasuryDebitReversalsResponse, GetTreasuryFinancialAccountsResponse, GetTreasuryInboundTransfersResponse, GetTreasuryOutboundPaymentsResponse, GetTreasuryOutboundTransfersResponse, GetTreasuryReceivedCreditsObject, GetTreasuryReceivedCreditsResponse, GetTreasuryReceivedDebitsResponse, GetTreasuryTransactionEntriesResponse, GetTreasuryTransactionsObject, GetTreasuryTransactionsResponse, GetWebhookEndpointsResponse, IdentityVerificationReport, IdentityVerificationSession, Invoice, InvoicePayment, InvoiceRenderingTemplate, Invoiceitem, IssuingAuthorization, IssuingCard, IssuingCardholder, IssuingDispute, IssuingPersonalizationDesign, IssuingPhysicalBundle, IssuingSettlement, IssuingToken, IssuingTransaction, LineItem, LoginLink, Mandate, PaymentAttemptRecord, PaymentIntent, PaymentLink, PaymentMethod, PaymentMethodConfiguration, PaymentMethodDomain, PaymentRecord, PaymentSource, Payout, Person, Plan, PostAccountLinksRequest, PostAccountSessionsRequest, PostAccountsAccountBankAccountsIdRequest, PostAccountsAccountBankAccountsRequest, PostAccountsAccountCapabilitiesCapabilityRequest, PostAccountsAccountLoginLinksRequest, PostAccountsAccountPeopleRequest, PostAccountsAccountRejectRequest, PostAccountsAccountRequest, PostAccountsRequest, PostAccountsRequestMetadataObject, PostApplePayDomainsRequest, PostApplicationFeesFeeRefundsIdRequest, PostApplicationFeesIdRefundRequest, PostApplicationFeesIdRefundsRequest, PostAppsSecretsDeleteRequest, PostAppsSecretsRequest, PostBalanceSettingsRequest, PostBillingAlertsRequest, PostBillingCreditGrantsIdRequest, PostBillingCreditGrantsRequest, PostBillingMeterEventAdjustmentsRequest, PostBillingMeterEventsRequest, PostBillingMetersIdRequest, PostBillingMetersRequest, PostBillingPortalConfigurationsConfigurationRequest, PostBillingPortalConfigurationsRequest, PostBillingPortalSessionsRequest, PostChargesChargeCaptureRequest, PostChargesChargeDisputeRequest, PostChargesChargeRefundRequest, PostChargesChargeRefundsRefundRequest, PostChargesChargeRefundsRequest, PostChargesChargeRequest, PostChargesRequest, PostCheckoutSessionsRequest, PostCheckoutSessionsSessionRequest, PostClimateOrdersOrderRequest, PostClimateOrdersRequest, PostCouponsCouponRequest, PostCouponsRequest, PostCreditNotesIdRequest, PostCreditNotesRequest, PostCreditNotesRequestLinesItem, PostCreditNotesRequestRefundsItem, PostCustomerSessionsRequest, PostCustomersCustomerBalanceTransactionsRequest, PostCustomersCustomerBalanceTransactionsTransactionRequest, PostCustomersCustomerBankAccountsIdRequest, PostCustomersCustomerBankAccountsIdUnion, PostCustomersCustomerBankAccountsIdVerifyRequest, PostCustomersCustomerBankAccountsRequest, PostCustomersCustomerCashBalanceRequest, PostCustomersCustomerFundingInstructionsRequest, PostCustomersCustomerRequest, PostCustomersCustomerSubscriptionsRequest, PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest, PostCustomersCustomerTaxIdsRequest, PostCustomersRequest, PostEntitlementsFeaturesIdRequest, PostEntitlementsFeaturesRequest, PostEphemeralKeysRequest, PostFileLinksLinkRequest, PostFileLinksRequest, PostFilesRequest, PostFinancialConnectionsAccountsAccountRefreshRequest, PostFinancialConnectionsAccountsAccountSubscribeRequest, PostFinancialConnectionsAccountsAccountUnsubscribeRequest, PostFinancialConnectionsSessionsRequest, PostForwardingRequestsRequest, PostIdentityVerificationSessionsRequest, PostIdentityVerificationSessionsSessionRequest, PostInvoiceitemsInvoiceitemRequest, PostInvoiceitemsRequest, PostInvoicesCreatePreviewRequest, PostInvoicesInvoiceAddLinesRequest, PostInvoicesInvoiceAttachPaymentRequest, PostInvoicesInvoiceFinalizeRequest, PostInvoicesInvoiceLinesLineItemIdRequest, PostInvoicesInvoicePayRequest, PostInvoicesInvoiceRemoveLinesRequest, PostInvoicesInvoiceRequest, PostInvoicesInvoiceUpdateLinesRequest, PostInvoicesRequest, PostIssuingAuthorizationsAuthorizationApproveRequest, PostIssuingCardholdersCardholderRequest, PostIssuingCardholdersRequest, PostIssuingCardsCardRequest, PostIssuingCardsRequest, PostIssuingDisputesDisputeRequest, PostIssuingDisputesRequest, PostIssuingPersonalizationDesignsPersonalizationDesignRequest, PostIssuingPersonalizationDesignsRequest, PostIssuingSettlementsSettlementRequest, PostIssuingTokensTokenRequest, PostPaymentIntentsIntentApplyCustomerBalanceRequest, PostPaymentIntentsIntentCancelRequest, PostPaymentIntentsIntentCaptureRequest, PostPaymentIntentsIntentConfirmRequest, PostPaymentIntentsIntentIncrementAuthorizationRequest, PostPaymentIntentsIntentRequest, PostPaymentIntentsIntentVerifyMicrodepositsRequest, PostPaymentIntentsRequest, PostPaymentLinksPaymentLinkRequest, PostPaymentLinksRequest, PostPaymentMethodConfigurationsConfigurationRequest, PostPaymentMethodConfigurationsRequest, PostPaymentMethodDomainsPaymentMethodDomainRequest, PostPaymentMethodDomainsRequest, PostPaymentMethodsPaymentMethodAttachRequest, PostPaymentMethodsPaymentMethodRequest, PostPaymentMethodsRequest, PostPaymentRecordsIdReportPaymentAttemptCanceledRequest, PostPaymentRecordsIdReportPaymentAttemptFailedRequest, PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest, PostPaymentRecordsIdReportPaymentAttemptInformationalRequest, PostPaymentRecordsIdReportPaymentAttemptRequest, PostPaymentRecordsIdReportRefundRequest, PostPaymentRecordsReportPaymentRequest, PostPayoutsRequest, PostPlansPlanRequest, PostPlansRequest, PostPricesPriceRequest, PostPricesRequest, PostProductsIdRequest, PostProductsProductFeaturesRequest, PostProductsRequest, PostPromotionCodesPromotionCodeRequest, PostPromotionCodesRequest, PostQuotesQuoteFinalizeRequest, PostQuotesQuoteRequest, PostQuotesRequest, PostRadarValueListItemsRequest, PostRadarValueListsRequest, PostRadarValueListsValueListRequest, PostRefundsRequest, PostReportingReportRunsRequest, PostSetupIntentsIntentCancelRequest, PostSetupIntentsIntentConfirmRequest, PostSetupIntentsIntentRequest, PostSetupIntentsIntentVerifyMicrodepositsRequest, PostSetupIntentsRequest, PostShippingRatesRequest, PostShippingRatesShippingRateTokenRequest, PostSigmaSavedQueriesIdRequest, PostSourcesRequest, PostSourcesSourceRequest, PostSourcesSourceVerifyRequest, PostSubscriptionItemsItemRequest, PostSubscriptionItemsRequest, PostSubscriptionSchedulesRequest, PostSubscriptionSchedulesScheduleCancelRequest, PostSubscriptionSchedulesScheduleReleaseRequest, PostSubscriptionSchedulesScheduleRequest, PostSubscriptionsRequest, PostSubscriptionsSubscriptionExposedIdRequest, PostSubscriptionsSubscriptionMigrateRequest, PostSubscriptionsSubscriptionResumeRequest, PostTaxCalculationsRequest, PostTaxIdsRequest, PostTaxRatesRequest, PostTaxRatesTaxRateRequest, PostTaxRegistrationsIdRequest, PostTaxRegistrationsRequest, PostTaxSettingsRequest, PostTaxTransactionsCreateFromCalculationRequest, PostTaxTransactionsCreateReversalRequest, PostTerminalConfigurationsConfigurationRequest, PostTerminalConfigurationsRequest, PostTerminalConnectionTokensRequest, PostTerminalLocationsLocationRequest, PostTerminalLocationsRequest, PostTerminalOnboardingLinksRequest, PostTerminalReadersReaderCollectInputsRequest, PostTerminalReadersReaderCollectPaymentMethodRequest, PostTerminalReadersReaderConfirmPaymentIntentRequest, PostTerminalReadersReaderProcessPaymentIntentRequest, PostTerminalReadersReaderProcessSetupIntentRequest, PostTerminalReadersReaderRefundPaymentRequest, PostTerminalReadersReaderRequest, PostTerminalReadersReaderSetReaderDisplayRequest, PostTerminalReadersRequest, PostTestHelpersConfirmationTokensRequest, PostTestHelpersCustomersCustomerFundCashBalanceRequest, PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest, PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest, PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest, PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest, PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest, PostTestHelpersIssuingAuthorizationsRequest, PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest, PostTestHelpersIssuingSettlementsRequest, PostTestHelpersIssuingTransactionsCreateForceCaptureRequest, PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest, PostTestHelpersIssuingTransactionsTransactionRefundRequest, PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest, PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest, PostTestHelpersTestClocksRequest, PostTestHelpersTestClocksTestClockAdvanceRequest, PostTestHelpersTreasuryInboundTransfersIdFailRequest, PostTestHelpersTreasuryOutboundPaymentsIdRequest, PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest, PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest, PostTestHelpersTreasuryReceivedCreditsRequest, PostTestHelpersTreasuryReceivedDebitsRequest, PostTokensRequest, PostTopupsRequest, PostTopupsTopupRequest, PostTransfersIdReversalsRequest, PostTransfersRequest, PostTreasuryCreditReversalsRequest, PostTreasuryDebitReversalsRequest, PostTreasuryFinancialAccountsFinancialAccountCloseRequest, PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest, PostTreasuryFinancialAccountsFinancialAccountRequest, PostTreasuryFinancialAccountsRequest, PostTreasuryInboundTransfersRequest, PostTreasuryOutboundPaymentsRequest, PostTreasuryOutboundTransfersRequest, PostWebhookEndpointsRequest, PostWebhookEndpointsWebhookEndpointRequest, Price, Product, ProductFeature, PromotionCode, Quote, RadarEarlyFraudWarning, RadarValueList, RadarValueListItem, Refund, ReportingReportRun, ReportingReportType, Review, ScheduledQueryRun, SetupIntent, ShippingRate, SigmaSigmaApiQuery, Source, SourceMandateNotification, SourceTransaction, Subscription, SubscriptionItem, SubscriptionSchedule, TaxAssociation, TaxCalculation, TaxCode, TaxId, TaxRate, TaxRegistration, TaxSettings, TaxTransaction, TerminalConfiguration, TerminalConnectionToken, TerminalLocation, TerminalOnboardingLink, TerminalReader, TestHelpersTestClock, Token, Topup, Transfer, TransferReversal, TreasuryCreditReversal, TreasuryDebitReversal, TreasuryFinancialAccount, TreasuryFinancialAccountFeatures, TreasuryInboundTransfer, TreasuryOutboundPayment, TreasuryOutboundTransfer, TreasuryReceivedCredit, TreasuryReceivedDebit, TreasuryTransaction, TreasuryTransactionEntry, WebhookEndpoint } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

export class DefaultService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Retrieve account
   *
   * <p>Retrieves the details of an account.</p>
   *
   * @param expand 
   * @param body 
   */
  async getAccount(params: {
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Account> {
    const path = '/v1/account';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an account link
   *
   * <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
   *
   * @param body 
   */
  async postAccountLinks(params: {
    body: PostAccountLinksRequest;
  }): Promise<AccountLink> {
    const path = '/v1/account_links';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an Account Session
   *
   * <p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>
   *
   * @param body 
   */
  async postAccountSessions(params: {
    body: PostAccountSessionsRequest;
  }): Promise<AccountSession> {
    const path = '/v1/account_sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all connected accounts
   *
   * <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getAccounts(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetAccountsResponse> {
    const path = '/v1/accounts';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postAccounts(params: {
    body: PostAccountsRequest;
  }): Promise<Account> {
    const path = '/v1/accounts';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve account
   *
   * <p>Retrieves the details of an account.</p>
   *
   * @param account 
   * @param expand 
   * @param body 
   */
  async getAccountsAccount(params: {
    account: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Account> {
    const path = `/v1/accounts/{account}`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an account
   *
   * <p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
left unchanged.</p>

<p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>

<p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
after which some properties can no longer be updated.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
<a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccount(params: {
    account: string;
    body: PostAccountsAccountRequest;
  }): Promise<Account> {
    const path = `/v1/accounts/{account}`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete an account
   *
   * <p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>

<p>Test-mode accounts can be deleted at any time.</p>

<p>Live-mode accounts that have access to the standard dashboard and Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. All other Live-mode accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
   *
   * @param account 
   * @param body 
   */
  async deleteAccountsAccount(params: {
    account: string;
    body: GetAccountRequest;
  }): Promise<DeletedAccount> {
    const path = `/v1/accounts/{account}`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an external account
   *
   * <p>Create an external account for a given account.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountBankAccounts(params: {
    account: string;
    body: PostAccountsAccountBankAccountsRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/bank_accounts`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an external account
   *
   * <p>Retrieve a specified external account for a given account.</p>
   *
   * @param account 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountBankAccountsId(params: {
    account: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/bank_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postAccountsAccountBankAccountsId(params: {
    account: string;
    id: string;
    body: PostAccountsAccountBankAccountsIdRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/bank_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete an external account
   *
   * <p>Delete a specified external account for a given account.</p>
   *
   * @param account 
   * @param id 
   * @param body 
   */
  async deleteAccountsAccountBankAccountsId(params: {
    account: string;
    id: string;
    body: GetAccountRequest;
  }): Promise<DeletedExternalAccount> {
    const path = `/v1/accounts/{account}/bank_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all account capabilities
   *
   * <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
   *
   * @param account 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountCapabilities(params: {
    account: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetAccountsAccountCapabilitiesResponse> {
    const path = `/v1/accounts/{account}/capabilities`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an Account Capability
   *
   * <p>Retrieves information about the specified Account Capability.</p>
   *
   * @param account 
   * @param capability 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountCapabilitiesCapability(params: {
    account: string;
    capability: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Capability> {
    const path = `/v1/accounts/{account}/capabilities/{capability}`.replace('{account}', String(params.account)).replace('{capability}', String(params.capability));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an Account Capability
   *
   * <p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>
   *
   * @param account 
   * @param capability 
   * @param body 
   */
  async postAccountsAccountCapabilitiesCapability(params: {
    account: string;
    capability: string;
    body: PostAccountsAccountCapabilitiesCapabilityRequest;
  }): Promise<Capability> {
    const path = `/v1/accounts/{account}/capabilities/{capability}`.replace('{account}', String(params.account)).replace('{capability}', String(params.capability));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all external accounts
   *
   * <p>List external accounts for an account.</p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param object 
   * @param startingAfter 
   * @param body 
   */
  async getAccountsAccountExternalAccounts(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    object?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetAccountsAccountExternalAccountsResponse> {
    const path = `/v1/accounts/{account}/external_accounts`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.object !== undefined) {
      queryParams.append('object', String(params.object));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an external account
   *
   * <p>Create an external account for a given account.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountExternalAccounts(params: {
    account: string;
    body: PostAccountsAccountBankAccountsRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/external_accounts`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an external account
   *
   * <p>Retrieve a specified external account for a given account.</p>
   *
   * @param account 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountExternalAccountsId(params: {
    account: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/external_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postAccountsAccountExternalAccountsId(params: {
    account: string;
    id: string;
    body: PostAccountsAccountBankAccountsIdRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/accounts/{account}/external_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete an external account
   *
   * <p>Delete a specified external account for a given account.</p>
   *
   * @param account 
   * @param id 
   * @param body 
   */
  async deleteAccountsAccountExternalAccountsId(params: {
    account: string;
    id: string;
    body: GetAccountRequest;
  }): Promise<DeletedExternalAccount> {
    const path = `/v1/accounts/{account}/external_accounts/{id}`.replace('{account}', String(params.account)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a login link
   *
   * <p>Creates a login link for a connected account to access the Express Dashboard.</p>

<p><strong>You can only create login links for accounts that use the <a href="/connect/express-dashboard">Express Dashboard</a> and are connected to your platform</strong>.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountLoginLinks(params: {
    account: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<LoginLink> {
    const path = `/v1/accounts/{account}/login_links`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all persons
   *
   * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param relationship 
   * @param startingAfter 
   * @param body 
   */
  async getAccountsAccountPeople(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    relationship?: GetAccountsAccountPeopleObject;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetAccountsAccountPeopleResponse> {
    const path = `/v1/accounts/{account}/people`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.relationship !== undefined) {
      queryParams.append('relationship', String(params.relationship));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a person
   *
   * <p>Creates a new person.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountPeople(params: {
    account: string;
    body: PostAccountsAccountPeopleRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/people`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a person
   *
   * <p>Retrieves an existing person.</p>
   *
   * @param account 
   * @param person 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountPeoplePerson(params: {
    account: string;
    person: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/people/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a person
   *
   * <p>Updates an existing person.</p>
   *
   * @param account 
   * @param person 
   * @param body 
   */
  async postAccountsAccountPeoplePerson(params: {
    account: string;
    person: string;
    body: PostAccountsAccountPeopleRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/people/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a person
   *
   * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
   *
   * @param account 
   * @param person 
   * @param body 
   */
  async deleteAccountsAccountPeoplePerson(params: {
    account: string;
    person: string;
    body: GetAccountRequest;
  }): Promise<DeletedPerson> {
    const path = `/v1/accounts/{account}/people/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all persons
   *
   * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param relationship 
   * @param startingAfter 
   * @param body 
   */
  async getAccountsAccountPersons(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    relationship?: GetAccountsAccountPeopleObject;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetAccountsAccountPeopleResponse> {
    const path = `/v1/accounts/{account}/persons`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.relationship !== undefined) {
      queryParams.append('relationship', String(params.relationship));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a person
   *
   * <p>Creates a new person.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountPersons(params: {
    account: string;
    body: PostAccountsAccountPeopleRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/persons`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a person
   *
   * <p>Retrieves an existing person.</p>
   *
   * @param account 
   * @param person 
   * @param expand 
   * @param body 
   */
  async getAccountsAccountPersonsPerson(params: {
    account: string;
    person: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/persons/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a person
   *
   * <p>Updates an existing person.</p>
   *
   * @param account 
   * @param person 
   * @param body 
   */
  async postAccountsAccountPersonsPerson(params: {
    account: string;
    person: string;
    body: PostAccountsAccountPeopleRequest;
  }): Promise<Person> {
    const path = `/v1/accounts/{account}/persons/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a person
   *
   * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
   *
   * @param account 
   * @param person 
   * @param body 
   */
  async deleteAccountsAccountPersonsPerson(params: {
    account: string;
    person: string;
    body: GetAccountRequest;
  }): Promise<DeletedPerson> {
    const path = `/v1/accounts/{account}/persons/{person}`.replace('{account}', String(params.account)).replace('{person}', String(params.person));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reject an account
   *
   * <p>With <a href="/connect">Connect</a>, you can reject accounts that you have flagged as suspicious.</p>

<p>Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.</p>
   *
   * @param account 
   * @param body 
   */
  async postAccountsAccountReject(params: {
    account: string;
    body: PostAccountsAccountRejectRequest;
  }): Promise<Account> {
    const path = `/v1/accounts/{account}/reject`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getApplePayDomains(params: {
    domainName?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetApplePayDomainsResponse> {
    const path = '/v1/apple_pay/domains';
    const queryParams = new URLSearchParams();
    if (params.domainName !== undefined) {
      queryParams.append('domain_name', String(params.domainName));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postApplePayDomains(params: {
    body: PostApplePayDomainsRequest;
  }): Promise<ApplePayDomain> {
    const path = '/v1/apple_pay/domains';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getApplePayDomainsDomain(params: {
    domain: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ApplePayDomain> {
    const path = `/v1/apple_pay/domains/{domain}`.replace('{domain}', String(params.domain));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async deleteApplePayDomainsDomain(params: {
    domain: string;
    body: GetAccountRequest;
  }): Promise<DeletedApplePayDomain> {
    const path = `/v1/apple_pay/domains/{domain}`.replace('{domain}', String(params.domain));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all application fees
   *
   * <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
   *
   * @param charge 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getApplicationFees(params: {
    charge?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetApplicationFeesResponse> {
    const path = '/v1/application_fees';
    const queryParams = new URLSearchParams();
    if (params.charge !== undefined) {
      queryParams.append('charge', String(params.charge));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an application fee refund
   *
   * <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>
   *
   * @param fee 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getApplicationFeesFeeRefundsId(params: {
    fee: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FeeRefund> {
    const path = `/v1/application_fees/{fee}/refunds/{id}`.replace('{fee}', String(params.fee)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an application fee refund
   *
   * <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata as an argument.</p>
   *
   * @param fee 
   * @param id 
   * @param body 
   */
  async postApplicationFeesFeeRefundsId(params: {
    fee: string;
    id: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<FeeRefund> {
    const path = `/v1/application_fees/{fee}/refunds/{id}`.replace('{fee}', String(params.fee)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an application fee
   *
   * <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getApplicationFeesId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ApplicationFee> {
    const path = `/v1/application_fees/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postApplicationFeesIdRefund(params: {
    id: string;
    body: PostApplicationFeesIdRefundRequest;
  }): Promise<ApplicationFee> {
    const path = `/v1/application_fees/{id}/refund`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all application fee refunds
   *
   * <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
   *
   * @param id 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getApplicationFeesIdRefunds(params: {
    id: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetApplicationFeesIdRefundsResponse> {
    const path = `/v1/application_fees/{id}/refunds`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an application fee refund
   *
   * <p>Refunds an application fee that has previously been collected but not yet refunded.
Funds will be refunded to the Stripe account from which the fee was originally collected.</p>

<p>You can optionally refund only part of an application fee.
You can do so multiple times, until the entire fee has been refunded.</p>

<p>Once entirely refunded, an application fee can’t be refunded again.
This method will raise an error when called on an already-refunded application fee,
or when trying to refund more money than is left on an application fee.</p>
   *
   * @param id 
   * @param body 
   */
  async postApplicationFeesIdRefunds(params: {
    id: string;
    body: PostApplicationFeesIdRefundsRequest;
  }): Promise<FeeRefund> {
    const path = `/v1/application_fees/{id}/refunds`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List secrets
   *
   * <p>List all secrets stored on the given scope.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param scope 
   * @param startingAfter 
   * @param body 
   */
  async getAppsSecrets(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    scope: GetAppsSecretsObject;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetAppsSecretsResponse> {
    const path = '/v1/apps/secrets';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.scope !== undefined) {
      queryParams.append('scope', String(params.scope));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Set a Secret
   *
   * <p>Create or replace a secret in the secret store.</p>
   *
   * @param body 
   */
  async postAppsSecrets(params: {
    body: PostAppsSecretsRequest;
  }): Promise<AppsSecret> {
    const path = '/v1/apps/secrets';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a Secret
   *
   * <p>Deletes a secret from the secret store by name and scope.</p>
   *
   * @param body 
   */
  async postAppsSecretsDelete(params: {
    body: PostAppsSecretsDeleteRequest;
  }): Promise<AppsSecret> {
    const path = '/v1/apps/secrets/delete';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Find a Secret
   *
   * <p>Finds a secret in the secret store by name and scope.</p>
   *
   * @param expand 
   * @param name 
   * @param scope 
   * @param body 
   */
  async getAppsSecretsFind(params: {
    expand?: Array<string>;
    name: string;
    scope: GetAppsSecretsObject;
    body: GetAccountRequest;
  }): Promise<AppsSecret> {
    const path = '/v1/apps/secrets/find';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.name !== undefined) {
      queryParams.append('name', String(params.name));
    }
    if (params.scope !== undefined) {
      queryParams.append('scope', String(params.scope));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve balance
   *
   * <p>Retrieves the current account balance, based on the authentication that was used to make the request.
 For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
   *
   * @param expand 
   * @param body 
   */
  async getBalance(params: {
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Balance> {
    const path = '/v1/balance';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all balance transactions
   *
   * <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

<p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
   *
   * @param created 
   * @param currency 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param payout 
   * @param source 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getBalanceHistory(params: {
    created?: GetAccountsUnion;
    currency?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    payout?: string;
    source?: string;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetBalanceHistoryResponse> {
    const path = '/v1/balance/history';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.currency !== undefined) {
      queryParams.append('currency', String(params.currency));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.payout !== undefined) {
      queryParams.append('payout', String(params.payout));
    }
    if (params.source !== undefined) {
      queryParams.append('source', String(params.source));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a balance transaction
   *
   * <p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBalanceHistoryId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BalanceTransaction> {
    const path = `/v1/balance/history/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve balance settings
   *
   * <p>Retrieves balance settings for a given connected account.
 Related guide: <a href="/connect/authentication">Making API calls for connected accounts</a></p>
   *
   * @param expand 
   * @param body 
   */
  async getBalanceSettings(params: {
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BalanceSettings> {
    const path = '/v1/balance_settings';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update balance settings
   *
   * <p>Updates balance settings for a given connected account.
 Related guide: <a href="/connect/authentication">Making API calls for connected accounts</a></p>
   *
   * @param body 
   */
  async postBalanceSettings(params: {
    body: PostBalanceSettingsRequest;
  }): Promise<BalanceSettings> {
    const path = '/v1/balance_settings';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all balance transactions
   *
   * <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

<p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
   *
   * @param created 
   * @param currency 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param payout 
   * @param source 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getBalanceTransactions(params: {
    created?: GetAccountsUnion;
    currency?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    payout?: string;
    source?: string;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetBalanceHistoryResponse> {
    const path = '/v1/balance_transactions';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.currency !== undefined) {
      queryParams.append('currency', String(params.currency));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.payout !== undefined) {
      queryParams.append('payout', String(params.payout));
    }
    if (params.source !== undefined) {
      queryParams.append('source', String(params.source));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a balance transaction
   *
   * <p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBalanceTransactionsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BalanceTransaction> {
    const path = `/v1/balance_transactions/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List billing alerts
   *
   * <p>Lists billing active and inactive alerts</p>
   *
   * @param alertType 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param meter 
   * @param startingAfter 
   * @param body 
   */
  async getBillingAlerts(params: {
    alertType?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    meter?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingAlertsResponse> {
    const path = '/v1/billing/alerts';
    const queryParams = new URLSearchParams();
    if (params.alertType !== undefined) {
      queryParams.append('alert_type', String(params.alertType));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.meter !== undefined) {
      queryParams.append('meter', String(params.meter));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a billing alert
   *
   * <p>Creates a billing alert</p>
   *
   * @param body 
   */
  async postBillingAlerts(params: {
    body: PostBillingAlertsRequest;
  }): Promise<BillingAlert> {
    const path = '/v1/billing/alerts';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a billing alert
   *
   * <p>Retrieves a billing alert given an ID</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBillingAlertsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BillingAlert> {
    const path = `/v1/billing/alerts/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Activate a billing alert
   *
   * <p>Reactivates this alert, allowing it to trigger again.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingAlertsIdActivate(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingAlert> {
    const path = `/v1/billing/alerts/{id}/activate`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Archive a billing alert
   *
   * <p>Archives this alert, removing it from the list view and APIs. This is non-reversible.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingAlertsIdArchive(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingAlert> {
    const path = `/v1/billing/alerts/{id}/archive`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Deactivate a billing alert
   *
   * <p>Deactivates this alert, preventing it from triggering.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingAlertsIdDeactivate(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingAlert> {
    const path = `/v1/billing/alerts/{id}/deactivate`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve the credit balance summary for a customer
   *
   * <p>Retrieves the credit balance summary for a customer.</p>
   *
   * @param customer 
   * @param expand 
   * @param filter 
   * @param body 
   */
  async getBillingCreditBalanceSummary(params: {
    customer: string;
    expand?: Array<string>;
    filter: GetBillingCreditBalanceSummaryObject;
    body: GetAccountRequest;
  }): Promise<BillingCreditBalanceSummary> {
    const path = '/v1/billing/credit_balance_summary';
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.filter !== undefined) {
      queryParams.append('filter', String(params.filter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List credit balance transactions
   *
   * <p>Retrieve a list of credit balance transactions.</p>
   *
   * @param creditGrant 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getBillingCreditBalanceTransactions(params: {
    creditGrant?: string;
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingCreditBalanceTransactionsResponse> {
    const path = '/v1/billing/credit_balance_transactions';
    const queryParams = new URLSearchParams();
    if (params.creditGrant !== undefined) {
      queryParams.append('credit_grant', String(params.creditGrant));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a credit balance transaction
   *
   * <p>Retrieves a credit balance transaction.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBillingCreditBalanceTransactionsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BillingCreditBalanceTransaction> {
    const path = `/v1/billing/credit_balance_transactions/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List credit grants
   *
   * <p>Retrieve a list of credit grants.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getBillingCreditGrants(params: {
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingCreditGrantsResponse> {
    const path = '/v1/billing/credit_grants';
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a credit grant
   *
   * <p>Creates a credit grant.</p>
   *
   * @param body 
   */
  async postBillingCreditGrants(params: {
    body: PostBillingCreditGrantsRequest;
  }): Promise<BillingCreditGrant> {
    const path = '/v1/billing/credit_grants';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a credit grant
   *
   * <p>Retrieves a credit grant.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBillingCreditGrantsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BillingCreditGrant> {
    const path = `/v1/billing/credit_grants/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a credit grant
   *
   * <p>Updates a credit grant.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingCreditGrantsId(params: {
    id: string;
    body: PostBillingCreditGrantsIdRequest;
  }): Promise<BillingCreditGrant> {
    const path = `/v1/billing/credit_grants/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Expire a credit grant
   *
   * <p>Expires a credit grant.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingCreditGrantsIdExpire(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingCreditGrant> {
    const path = `/v1/billing/credit_grants/{id}/expire`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Void a credit grant
   *
   * <p>Voids a credit grant.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingCreditGrantsIdVoid(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingCreditGrant> {
    const path = `/v1/billing/credit_grants/{id}/void`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a billing meter event adjustment
   *
   * <p>Creates a billing meter event adjustment.</p>
   *
   * @param body 
   */
  async postBillingMeterEventAdjustments(params: {
    body: PostBillingMeterEventAdjustmentsRequest;
  }): Promise<BillingMeterEventAdjustment> {
    const path = '/v1/billing/meter_event_adjustments';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a billing meter event
   *
   * <p>Creates a billing meter event.</p>
   *
   * @param body 
   */
  async postBillingMeterEvents(params: {
    body: PostBillingMeterEventsRequest;
  }): Promise<BillingMeterEvent> {
    const path = '/v1/billing/meter_events';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List billing meters
   *
   * <p>Retrieve a list of billing meters.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getBillingMeters(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingMetersResponse> {
    const path = '/v1/billing/meters';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a billing meter
   *
   * <p>Creates a billing meter.</p>
   *
   * @param body 
   */
  async postBillingMeters(params: {
    body: PostBillingMetersRequest;
  }): Promise<BillingMeter> {
    const path = '/v1/billing/meters';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a billing meter
   *
   * <p>Retrieves a billing meter given an ID.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getBillingMetersId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BillingMeter> {
    const path = `/v1/billing/meters/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a billing meter
   *
   * <p>Updates a billing meter.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingMetersId(params: {
    id: string;
    body: PostBillingMetersIdRequest;
  }): Promise<BillingMeter> {
    const path = `/v1/billing/meters/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Deactivate a billing meter
   *
   * <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingMetersIdDeactivate(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingMeter> {
    const path = `/v1/billing/meters/{id}/deactivate`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List billing meter event summaries
   *
   * <p>Retrieve a list of billing meter event summaries.</p>
   *
   * @param id 
   * @param customer 
   * @param endTime 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startTime 
   * @param startingAfter 
   * @param valueGroupingWindow 
   * @param body 
   */
  async getBillingMetersIdEventSummaries(params: {
    id: string;
    customer: string;
    endTime: number;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startTime: number;
    startingAfter?: string;
    valueGroupingWindow?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingMetersIdEventSummariesResponse> {
    const path = `/v1/billing/meters/{id}/event_summaries`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endTime !== undefined) {
      queryParams.append('end_time', String(params.endTime));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startTime !== undefined) {
      queryParams.append('start_time', String(params.startTime));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.valueGroupingWindow !== undefined) {
      queryParams.append('value_grouping_window', String(params.valueGroupingWindow));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reactivate a billing meter
   *
   * <p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
   *
   * @param id 
   * @param body 
   */
  async postBillingMetersIdReactivate(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<BillingMeter> {
    const path = `/v1/billing/meters/{id}/reactivate`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List portal configurations
   *
   * <p>Returns a list of configurations that describe the functionality of the customer portal.</p>
   *
   * @param active 
   * @param endingBefore 
   * @param expand 
   * @param isDefault 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getBillingPortalConfigurations(params: {
    active?: boolean;
    endingBefore?: string;
    expand?: Array<string>;
    isDefault?: boolean;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetBillingPortalConfigurationsResponse> {
    const path = '/v1/billing_portal/configurations';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.isDefault !== undefined) {
      queryParams.append('is_default', String(params.isDefault));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a portal configuration
   *
   * <p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>
   *
   * @param body 
   */
  async postBillingPortalConfigurations(params: {
    body: PostBillingPortalConfigurationsRequest;
  }): Promise<BillingPortalConfiguration> {
    const path = '/v1/billing_portal/configurations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a portal configuration
   *
   * <p>Retrieves a configuration that describes the functionality of the customer portal.</p>
   *
   * @param configuration 
   * @param expand 
   * @param body 
   */
  async getBillingPortalConfigurationsConfiguration(params: {
    configuration: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BillingPortalConfiguration> {
    const path = `/v1/billing_portal/configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a portal configuration
   *
   * <p>Updates a configuration that describes the functionality of the customer portal.</p>
   *
   * @param configuration 
   * @param body 
   */
  async postBillingPortalConfigurationsConfiguration(params: {
    configuration: string;
    body: PostBillingPortalConfigurationsConfigurationRequest;
  }): Promise<BillingPortalConfiguration> {
    const path = `/v1/billing_portal/configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a portal session
   *
   * <p>Creates a session of the customer portal.</p>
   *
   * @param body 
   */
  async postBillingPortalSessions(params: {
    body: PostBillingPortalSessionsRequest;
  }): Promise<BillingPortalSession> {
    const path = '/v1/billing_portal/sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all charges
   *
   * <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
   *
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentIntent 
   * @param startingAfter 
   * @param transferGroup 
   * @param body 
   */
  async getCharges(params: {
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    transferGroup?: string;
    body: GetAccountRequest;
  }): Promise<GetChargesResponse> {
    const path = '/v1/charges';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.transferGroup !== undefined) {
      queryParams.append('transfer_group', String(params.transferGroup));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postCharges(params: {
    body: PostChargesRequest;
  }): Promise<Charge> {
    const path = '/v1/charges';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search charges
   *
   * <p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getChargesSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetChargesSearchResponse> {
    const path = '/v1/charges/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a charge
   *
   * <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
   *
   * @param charge 
   * @param expand 
   * @param body 
   */
  async getChargesCharge(params: {
    charge: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Charge> {
    const path = `/v1/charges/{charge}`.replace('{charge}', String(params.charge));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a charge
   *
   * <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param charge 
   * @param body 
   */
  async postChargesCharge(params: {
    charge: string;
    body: PostChargesChargeRequest;
  }): Promise<Charge> {
    const path = `/v1/charges/{charge}`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Capture a payment
   *
   * <p>Capture the payment of an existing, uncaptured charge that was created with the <code>capture</code> option set to false.</p>

<p>Uncaptured payments expire a set number of days after they are created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after which they are marked as refunded and capture attempts will fail.</p>

<p>Don’t use this method to capture a PaymentIntent-initiated charge. Use <a href="/docs/api/payment_intents/capture">Capture a PaymentIntent</a>.</p>
   *
   * @param charge 
   * @param body 
   */
  async postChargesChargeCapture(params: {
    charge: string;
    body: PostChargesChargeCaptureRequest;
  }): Promise<Charge> {
    const path = `/v1/charges/{charge}/capture`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getChargesChargeDispute(params: {
    charge: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Dispute> {
    const path = `/v1/charges/{charge}/dispute`.replace('{charge}', String(params.charge));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postChargesChargeDispute(params: {
    charge: string;
    body: PostChargesChargeDisputeRequest;
  }): Promise<Dispute> {
    const path = `/v1/charges/{charge}/dispute`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postChargesChargeDisputeClose(params: {
    charge: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Dispute> {
    const path = `/v1/charges/{charge}/dispute/close`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a refund
   *
   * <p>When you create a new refund, you must specify either a Charge or a PaymentIntent object.</p>

<p>This action refunds a previously created charge that’s not refunded yet.
Funds are refunded to the credit or debit card that’s originally charged.</p>

<p>You can optionally refund only part of a charge.
You can repeat this until the entire charge is refunded.</p>

<p>After you entirely refund a charge, you can’t refund it again.
This method raises an error when it’s called on an already-refunded charge,
or when you attempt to refund more money than is left on a charge.</p>
   *
   * @param charge 
   * @param body 
   */
  async postChargesChargeRefund(params: {
    charge: string;
    body: PostChargesChargeRefundRequest;
  }): Promise<Charge> {
    const path = `/v1/charges/{charge}/refund`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all refunds
   *
   * <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
   *
   * @param charge 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getChargesChargeRefunds(params: {
    charge: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetChargesChargeRefundsResponse> {
    const path = `/v1/charges/{charge}/refunds`.replace('{charge}', String(params.charge));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create customer balance refund
   *
   * <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can’t be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p>
   *
   * @param charge 
   * @param body 
   */
  async postChargesChargeRefunds(params: {
    charge: string;
    body: PostChargesChargeRefundsRequest;
  }): Promise<Refund> {
    const path = `/v1/charges/{charge}/refunds`.replace('{charge}', String(params.charge));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getChargesChargeRefundsRefund(params: {
    charge: string;
    refund: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Refund> {
    const path = `/v1/charges/{charge}/refunds/{refund}`.replace('{charge}', String(params.charge)).replace('{refund}', String(params.refund));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postChargesChargeRefundsRefund(params: {
    charge: string;
    refund: string;
    body: PostChargesChargeRefundsRefundRequest;
  }): Promise<Refund> {
    const path = `/v1/charges/{charge}/refunds/{refund}`.replace('{charge}', String(params.charge)).replace('{refund}', String(params.refund));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Checkout Sessions
   *
   * <p>Returns a list of Checkout Sessions.</p>
   *
   * @param created 
   * @param customer 
   * @param customerDetails 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentIntent 
   * @param paymentLink 
   * @param startingAfter 
   * @param status 
   * @param subscription 
   * @param body 
   */
  async getCheckoutSessions(params: {
    created?: GetAccountsUnion;
    customer?: string;
    customerDetails?: GetCheckoutSessionsObject;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentIntent?: string;
    paymentLink?: string;
    startingAfter?: string;
    status?: string;
    subscription?: string;
    body: GetAccountRequest;
  }): Promise<GetCheckoutSessionsResponse> {
    const path = '/v1/checkout/sessions';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.customerDetails !== undefined) {
      queryParams.append('customer_details', String(params.customerDetails));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    if (params.paymentLink !== undefined) {
      queryParams.append('payment_link', String(params.paymentLink));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.subscription !== undefined) {
      queryParams.append('subscription', String(params.subscription));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Checkout Session
   *
   * <p>Creates a Checkout Session object.</p>
   *
   * @param body 
   */
  async postCheckoutSessions(params: {
    body: PostCheckoutSessionsRequest;
  }): Promise<CheckoutSession> {
    const path = '/v1/checkout/sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Checkout Session
   *
   * <p>Retrieves a Checkout Session object.</p>
   *
   * @param session 
   * @param expand 
   * @param body 
   */
  async getCheckoutSessionsSession(params: {
    session: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CheckoutSession> {
    const path = `/v1/checkout/sessions/{session}`.replace('{session}', String(params.session));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a Checkout Session
   *
   * <p>Updates a Checkout Session object.</p>

<p>Related guide: <a href="/payments/checkout/dynamic-updates">Dynamically update Checkout</a></p>
   *
   * @param session 
   * @param body 
   */
  async postCheckoutSessionsSession(params: {
    session: string;
    body: PostCheckoutSessionsSessionRequest;
  }): Promise<CheckoutSession> {
    const path = `/v1/checkout/sessions/{session}`.replace('{session}', String(params.session));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Expire a Checkout Session
   *
   * <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>

<p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
   *
   * @param session 
   * @param body 
   */
  async postCheckoutSessionsSessionExpire(params: {
    session: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<CheckoutSession> {
    const path = `/v1/checkout/sessions/{session}/expire`.replace('{session}', String(params.session));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Checkout Session's line items
   *
   * <p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * @param session 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCheckoutSessionsSessionLineItems(params: {
    session: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCheckoutSessionsSessionLineItemsResponse> {
    const path = `/v1/checkout/sessions/{session}/line_items`.replace('{session}', String(params.session));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List orders
   *
   * <p>Lists all Climate order objects. The orders are returned sorted by creation date, with the
most recently created orders appearing first.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getClimateOrders(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetClimateOrdersResponse> {
    const path = '/v1/climate/orders';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an order
   *
   * <p>Creates a Climate order object for a given Climate product. The order will be processed immediately
after creation and payment will be deducted your Stripe balance.</p>
   *
   * @param body 
   */
  async postClimateOrders(params: {
    body: PostClimateOrdersRequest;
  }): Promise<ClimateOrder> {
    const path = '/v1/climate/orders';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an order
   *
   * <p>Retrieves the details of a Climate order object with the given ID.</p>
   *
   * @param order 
   * @param expand 
   * @param body 
   */
  async getClimateOrdersOrder(params: {
    order: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ClimateOrder> {
    const path = `/v1/climate/orders/{order}`.replace('{order}', String(params.order));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an order
   *
   * <p>Updates the specified order by setting the values of the parameters passed.</p>
   *
   * @param order 
   * @param body 
   */
  async postClimateOrdersOrder(params: {
    order: string;
    body: PostClimateOrdersOrderRequest;
  }): Promise<ClimateOrder> {
    const path = `/v1/climate/orders/{order}`.replace('{order}', String(params.order));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel an order
   *
   * <p>Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
reservation <code>amount_subtotal</code>, but not the <code>amount_fees</code> for user-triggered cancellations. Frontier
might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
provides 90 days advance notice and refunds the <code>amount_total</code>.</p>
   *
   * @param order 
   * @param body 
   */
  async postClimateOrdersOrderCancel(params: {
    order: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<ClimateOrder> {
    const path = `/v1/climate/orders/{order}/cancel`.replace('{order}', String(params.order));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List products
   *
   * <p>Lists all available Climate product objects.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getClimateProducts(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetClimateProductsResponse> {
    const path = '/v1/climate/products';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a product
   *
   * <p>Retrieves the details of a Climate product with the given ID.</p>
   *
   * @param product 
   * @param expand 
   * @param body 
   */
  async getClimateProductsProduct(params: {
    product: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ClimateProduct> {
    const path = `/v1/climate/products/{product}`.replace('{product}', String(params.product));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List suppliers
   *
   * <p>Lists all available Climate supplier objects.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getClimateSuppliers(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetClimateSuppliersResponse> {
    const path = '/v1/climate/suppliers';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a supplier
   *
   * <p>Retrieves a Climate supplier object.</p>
   *
   * @param supplier 
   * @param expand 
   * @param body 
   */
  async getClimateSuppliersSupplier(params: {
    supplier: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ClimateSupplier> {
    const path = `/v1/climate/suppliers/{supplier}`.replace('{supplier}', String(params.supplier));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a ConfirmationToken
   *
   * <p>Retrieves an existing ConfirmationToken object</p>
   *
   * @param confirmationToken 
   * @param expand 
   * @param body 
   */
  async getConfirmationTokensConfirmationToken(params: {
    confirmationToken: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ConfirmationToken> {
    const path = `/v1/confirmation_tokens/{confirmation_token}`.replace('{confirmation_token}', String(params.confirmationToken));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Country Specs
   *
   * <p>Lists all Country Spec objects available in the API.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCountrySpecs(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCountrySpecsResponse> {
    const path = '/v1/country_specs';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Country Spec
   *
   * <p>Returns a Country Spec for a given Country code.</p>
   *
   * @param country 
   * @param expand 
   * @param body 
   */
  async getCountrySpecsCountry(params: {
    country: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CountrySpec> {
    const path = `/v1/country_specs/{country}`.replace('{country}', String(params.country));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all coupons
   *
   * <p>Returns a list of your coupons.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCoupons(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCouponsResponse> {
    const path = '/v1/coupons';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a coupon
   *
   * <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>

<p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
   *
   * @param body 
   */
  async postCoupons(params: {
    body: PostCouponsRequest;
  }): Promise<Coupon> {
    const path = '/v1/coupons';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a coupon
   *
   * <p>Retrieves the coupon with the given ID.</p>
   *
   * @param coupon 
   * @param expand 
   * @param body 
   */
  async getCouponsCoupon(params: {
    coupon: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Coupon> {
    const path = `/v1/coupons/{coupon}`.replace('{coupon}', String(params.coupon));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a coupon
   *
   * <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
   *
   * @param coupon 
   * @param body 
   */
  async postCouponsCoupon(params: {
    coupon: string;
    body: PostCouponsCouponRequest;
  }): Promise<Coupon> {
    const path = `/v1/coupons/{coupon}`.replace('{coupon}', String(params.coupon));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a coupon
   *
   * <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
   *
   * @param coupon 
   * @param body 
   */
  async deleteCouponsCoupon(params: {
    coupon: string;
    body: GetAccountRequest;
  }): Promise<DeletedCoupon> {
    const path = `/v1/coupons/{coupon}`.replace('{coupon}', String(params.coupon));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all credit notes
   *
   * <p>Returns a list of credit notes.</p>
   *
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param invoice 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCreditNotes(params: {
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    invoice?: string;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCreditNotesResponse> {
    const path = '/v1/credit_notes';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.invoice !== undefined) {
      queryParams.append('invoice', String(params.invoice));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a credit note
   *
   * <p>Issue a credit note to adjust the amount of a finalized invoice. A credit note will first reduce the invoice’s <code>amount_remaining</code> (and <code>amount_due</code>), but not below zero.
This amount is indicated by the credit note’s <code>pre_payment_amount</code>. The excess amount is indicated by <code>post_payment_amount</code>, and it can result in any combination of the following:</p>

<ul>
<li>Refunds: create a new refund (using <code>refund_amount</code>) or link existing refunds (using <code>refunds</code>).</li>
<li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
<li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
</ul>

<p>The sum of refunds, customer balance credits, and outside of Stripe credits must equal the <code>post_payment_amount</code>.</p>

<p>You may issue multiple credit notes for an invoice. Each credit note may increment the invoice’s <code>pre_payment_credit_notes_amount</code>,
<code>post_payment_credit_notes_amount</code>, or both, depending on the invoice’s <code>amount_remaining</code> at the time of credit note creation.</p>
   *
   * @param body 
   */
  async postCreditNotes(params: {
    body: PostCreditNotesRequest;
  }): Promise<CreditNote> {
    const path = '/v1/credit_notes';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Preview a credit note
   *
   * <p>Get a preview of a credit note without creating it.</p>
   *
   * @param amount 
   * @param creditAmount 
   * @param effectiveAt 
   * @param emailType 
   * @param expand 
   * @param invoice 
   * @param lines 
   * @param memo 
   * @param metadata 
   * @param outOfBandAmount 
   * @param reason 
   * @param refundAmount 
   * @param refunds 
   * @param shippingCost 
   * @param body 
   */
  async getCreditNotesPreview(params: {
    amount?: number;
    creditAmount?: number;
    effectiveAt?: number;
    emailType?: string;
    expand?: Array<string>;
    invoice: string;
    lines?: Array<PostCreditNotesRequestLinesItem>;
    memo?: string;
    metadata?: PostAccountsRequestMetadataObject;
    outOfBandAmount?: number;
    reason?: string;
    refundAmount?: number;
    refunds?: Array<PostCreditNotesRequestRefundsItem>;
    shippingCost?: GetCreditNotesPreviewObject;
    body: GetAccountRequest;
  }): Promise<CreditNote> {
    const path = '/v1/credit_notes/preview';
    const queryParams = new URLSearchParams();
    if (params.amount !== undefined) {
      queryParams.append('amount', String(params.amount));
    }
    if (params.creditAmount !== undefined) {
      queryParams.append('credit_amount', String(params.creditAmount));
    }
    if (params.effectiveAt !== undefined) {
      queryParams.append('effective_at', String(params.effectiveAt));
    }
    if (params.emailType !== undefined) {
      queryParams.append('email_type', String(params.emailType));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.invoice !== undefined) {
      queryParams.append('invoice', String(params.invoice));
    }
    if (params.lines !== undefined) {
      queryParams.append('lines', String(params.lines));
    }
    if (params.memo !== undefined) {
      queryParams.append('memo', String(params.memo));
    }
    if (params.metadata !== undefined) {
      queryParams.append('metadata', String(params.metadata));
    }
    if (params.outOfBandAmount !== undefined) {
      queryParams.append('out_of_band_amount', String(params.outOfBandAmount));
    }
    if (params.reason !== undefined) {
      queryParams.append('reason', String(params.reason));
    }
    if (params.refundAmount !== undefined) {
      queryParams.append('refund_amount', String(params.refundAmount));
    }
    if (params.refunds !== undefined) {
      queryParams.append('refunds', String(params.refunds));
    }
    if (params.shippingCost !== undefined) {
      queryParams.append('shipping_cost', String(params.shippingCost));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a credit note preview's line items
   *
   * <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
   *
   * @param amount 
   * @param creditAmount 
   * @param effectiveAt 
   * @param emailType 
   * @param endingBefore 
   * @param expand 
   * @param invoice 
   * @param limit 
   * @param lines 
   * @param memo 
   * @param metadata 
   * @param outOfBandAmount 
   * @param reason 
   * @param refundAmount 
   * @param refunds 
   * @param shippingCost 
   * @param startingAfter 
   * @param body 
   */
  async getCreditNotesPreviewLines(params: {
    amount?: number;
    creditAmount?: number;
    effectiveAt?: number;
    emailType?: string;
    endingBefore?: string;
    expand?: Array<string>;
    invoice: string;
    limit?: number;
    lines?: Array<PostCreditNotesRequestLinesItem>;
    memo?: string;
    metadata?: PostAccountsRequestMetadataObject;
    outOfBandAmount?: number;
    reason?: string;
    refundAmount?: number;
    refunds?: Array<PostCreditNotesRequestRefundsItem>;
    shippingCost?: GetCreditNotesPreviewObject;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCreditNotesPreviewLinesResponse> {
    const path = '/v1/credit_notes/preview/lines';
    const queryParams = new URLSearchParams();
    if (params.amount !== undefined) {
      queryParams.append('amount', String(params.amount));
    }
    if (params.creditAmount !== undefined) {
      queryParams.append('credit_amount', String(params.creditAmount));
    }
    if (params.effectiveAt !== undefined) {
      queryParams.append('effective_at', String(params.effectiveAt));
    }
    if (params.emailType !== undefined) {
      queryParams.append('email_type', String(params.emailType));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.invoice !== undefined) {
      queryParams.append('invoice', String(params.invoice));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.lines !== undefined) {
      queryParams.append('lines', String(params.lines));
    }
    if (params.memo !== undefined) {
      queryParams.append('memo', String(params.memo));
    }
    if (params.metadata !== undefined) {
      queryParams.append('metadata', String(params.metadata));
    }
    if (params.outOfBandAmount !== undefined) {
      queryParams.append('out_of_band_amount', String(params.outOfBandAmount));
    }
    if (params.reason !== undefined) {
      queryParams.append('reason', String(params.reason));
    }
    if (params.refundAmount !== undefined) {
      queryParams.append('refund_amount', String(params.refundAmount));
    }
    if (params.refunds !== undefined) {
      queryParams.append('refunds', String(params.refunds));
    }
    if (params.shippingCost !== undefined) {
      queryParams.append('shipping_cost', String(params.shippingCost));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a credit note's line items
   *
   * <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * @param creditNote 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCreditNotesCreditNoteLines(params: {
    creditNote: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCreditNotesPreviewLinesResponse> {
    const path = `/v1/credit_notes/{credit_note}/lines`.replace('{credit_note}', String(params.creditNote));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a credit note
   *
   * <p>Retrieves the credit note object with the given identifier.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getCreditNotesId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CreditNote> {
    const path = `/v1/credit_notes/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a credit note
   *
   * <p>Updates an existing credit note.</p>
   *
   * @param id 
   * @param body 
   */
  async postCreditNotesId(params: {
    id: string;
    body: PostCreditNotesIdRequest;
  }): Promise<CreditNote> {
    const path = `/v1/credit_notes/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Void a credit note
   *
   * <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
   *
   * @param id 
   * @param body 
   */
  async postCreditNotesIdVoid(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<CreditNote> {
    const path = `/v1/credit_notes/{id}/void`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Customer Session
   *
   * <p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>
   *
   * @param body 
   */
  async postCustomerSessions(params: {
    body: PostCustomerSessionsRequest;
  }): Promise<CustomerSession> {
    const path = '/v1/customer_sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all customers
   *
   * <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
   *
   * @param created 
   * @param email 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param testClock 
   * @param body 
   */
  async getCustomers(params: {
    created?: GetAccountsUnion;
    email?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    testClock?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersResponse> {
    const path = '/v1/customers';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.email !== undefined) {
      queryParams.append('email', String(params.email));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.testClock !== undefined) {
      queryParams.append('test_clock', String(params.testClock));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a customer
   *
   * <p>Creates a new customer object.</p>
   *
   * @param body 
   */
  async postCustomers(params: {
    body: PostCustomersRequest;
  }): Promise<Customer> {
    const path = '/v1/customers';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search customers
   *
   * <p>Search for customers you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getCustomersSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersSearchResponse> {
    const path = '/v1/customers/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a customer
   *
   * <p>Retrieves a Customer object.</p>
   *
   * @param customer 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomer(params: {
    customer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerUnion> {
    const path = `/v1/customers/{customer}`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a customer
   *
   * <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>

<p>This request accepts mostly the same arguments as the customer creation call.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomer(params: {
    customer: string;
    body: PostCustomersCustomerRequest;
  }): Promise<Customer> {
    const path = `/v1/customers/{customer}`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer
   *
   * <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
   *
   * @param customer 
   * @param body 
   */
  async deleteCustomersCustomer(params: {
    customer: string;
    body: GetAccountRequest;
  }): Promise<DeletedCustomer> {
    const path = `/v1/customers/{customer}`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List customer balance transactions
   *
   * <p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
   *
   * @param customer 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerBalanceTransactions(params: {
    customer: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerBalanceTransactionsResponse> {
    const path = `/v1/customers/{customer}/balance_transactions`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a customer balance transaction
   *
   * <p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerBalanceTransactions(params: {
    customer: string;
    body: PostCustomersCustomerBalanceTransactionsRequest;
  }): Promise<CustomerBalanceTransaction> {
    const path = `/v1/customers/{customer}/balance_transactions`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a customer balance transaction
   *
   * <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
   *
   * @param customer 
   * @param transaction 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerBalanceTransactionsTransaction(params: {
    customer: string;
    transaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CustomerBalanceTransaction> {
    const path = `/v1/customers/{customer}/balance_transactions/{transaction}`.replace('{customer}', String(params.customer)).replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a customer credit balance transaction
   *
   * <p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>
   *
   * @param customer 
   * @param transaction 
   * @param body 
   */
  async postCustomersCustomerBalanceTransactionsTransaction(params: {
    customer: string;
    transaction: string;
    body: PostCustomersCustomerBalanceTransactionsTransactionRequest;
  }): Promise<CustomerBalanceTransaction> {
    const path = `/v1/customers/{customer}/balance_transactions/{transaction}`.replace('{customer}', String(params.customer)).replace('{transaction}', String(params.transaction));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all bank accounts
   *
   * <p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerBankAccounts(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerBankAccountsResponse> {
    const path = `/v1/customers/{customer}/bank_accounts`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a card
   *
   * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerBankAccounts(params: {
    customer: string;
    body: PostCustomersCustomerBankAccountsRequest;
  }): Promise<PaymentSource> {
    const path = `/v1/customers/{customer}/bank_accounts`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a bank account
   *
   * <p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>
   *
   * @param customer 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerBankAccountsId(params: {
    customer: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<BankAccount> {
    const path = `/v1/customers/{customer}/bank_accounts/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postCustomersCustomerBankAccountsId(params: {
    customer: string;
    id: string;
    body: PostCustomersCustomerBankAccountsIdRequest;
  }): Promise<PostCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/bank_accounts/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async deleteCustomersCustomerBankAccountsId(params: {
    customer: string;
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<DeleteCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/bank_accounts/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Verify a bank account
   *
   * <p>Verify a specified bank account for a given customer.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async postCustomersCustomerBankAccountsIdVerify(params: {
    customer: string;
    id: string;
    body: PostCustomersCustomerBankAccountsIdVerifyRequest;
  }): Promise<BankAccount> {
    const path = `/v1/customers/{customer}/bank_accounts/{id}/verify`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all cards
   *
   * <p>You can see a list of the cards belonging to a customer.
Note that the 10 most recent sources are always available on the <code>Customer</code> object.
If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerCards(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerCardsResponse> {
    const path = `/v1/customers/{customer}/cards`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a card
   *
   * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerCards(params: {
    customer: string;
    body: PostCustomersCustomerBankAccountsRequest;
  }): Promise<PaymentSource> {
    const path = `/v1/customers/{customer}/cards`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a card
   *
   * <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>
   *
   * @param customer 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerCardsId(params: {
    customer: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Card> {
    const path = `/v1/customers/{customer}/cards/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postCustomersCustomerCardsId(params: {
    customer: string;
    id: string;
    body: PostCustomersCustomerBankAccountsIdRequest;
  }): Promise<PostCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/cards/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async deleteCustomersCustomerCardsId(params: {
    customer: string;
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<DeleteCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/cards/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a cash balance
   *
   * <p>Retrieves a customer’s cash balance.</p>
   *
   * @param customer 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerCashBalance(params: {
    customer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CashBalance> {
    const path = `/v1/customers/{customer}/cash_balance`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a cash balance's settings
   *
   * <p>Changes the settings on a customer’s cash balance.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerCashBalance(params: {
    customer: string;
    body: PostCustomersCustomerCashBalanceRequest;
  }): Promise<CashBalance> {
    const path = `/v1/customers/{customer}/cash_balance`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List cash balance transactions
   *
   * <p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerCashBalanceTransactions(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerCashBalanceTransactionsResponse> {
    const path = `/v1/customers/{customer}/cash_balance_transactions`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a cash balance transaction
   *
   * <p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
   *
   * @param customer 
   * @param transaction 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerCashBalanceTransactionsTransaction(params: {
    customer: string;
    transaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<CustomerCashBalanceTransaction> {
    const path = `/v1/customers/{customer}/cash_balance_transactions/{transaction}`.replace('{customer}', String(params.customer)).replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getCustomersCustomerDiscount(params: {
    customer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Discount> {
    const path = `/v1/customers/{customer}/discount`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer discount
   *
   * <p>Removes the currently applied discount on a customer.</p>
   *
   * @param customer 
   * @param body 
   */
  async deleteCustomersCustomerDiscount(params: {
    customer: string;
    body: GetAccountRequest;
  }): Promise<DeletedDiscount> {
    const path = `/v1/customers/{customer}/discount`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create or retrieve funding instructions for a customer cash balance
   *
   * <p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
funding instructions will be created. If funding instructions have already been created for a given customer, the same
funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerFundingInstructions(params: {
    customer: string;
    body: PostCustomersCustomerFundingInstructionsRequest;
  }): Promise<FundingInstructions> {
    const path = `/v1/customers/{customer}/funding_instructions`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List a Customer's PaymentMethods
   *
   * <p>Returns a list of PaymentMethods for a given Customer</p>
   *
   * @param customer 
   * @param allowRedisplay 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getCustomersCustomerPaymentMethods(params: {
    customer: string;
    allowRedisplay?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerPaymentMethodsResponse> {
    const path = `/v1/customers/{customer}/payment_methods`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.allowRedisplay !== undefined) {
      queryParams.append('allow_redisplay', String(params.allowRedisplay));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Customer's PaymentMethod
   *
   * <p>Retrieves a PaymentMethod object for a given Customer.</p>
   *
   * @param customer 
   * @param paymentMethod 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerPaymentMethodsPaymentMethod(params: {
    customer: string;
    paymentMethod: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentMethod> {
    const path = `/v1/customers/{customer}/payment_methods/{payment_method}`.replace('{customer}', String(params.customer)).replace('{payment_method}', String(params.paymentMethod));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getCustomersCustomerSources(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    object?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerSourcesResponse> {
    const path = `/v1/customers/{customer}/sources`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.object !== undefined) {
      queryParams.append('object', String(params.object));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a card
   *
   * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerSources(params: {
    customer: string;
    body: PostCustomersCustomerBankAccountsRequest;
  }): Promise<PaymentSource> {
    const path = `/v1/customers/{customer}/sources`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getCustomersCustomerSourcesId(params: {
    customer: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentSource> {
    const path = `/v1/customers/{customer}/sources/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postCustomersCustomerSourcesId(params: {
    customer: string;
    id: string;
    body: PostCustomersCustomerBankAccountsIdRequest;
  }): Promise<PostCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/sources/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async deleteCustomersCustomerSourcesId(params: {
    customer: string;
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<DeleteCustomersCustomerBankAccountsIdUnion> {
    const path = `/v1/customers/{customer}/sources/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Verify a bank account
   *
   * <p>Verify a specified bank account for a given customer.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async postCustomersCustomerSourcesIdVerify(params: {
    customer: string;
    id: string;
    body: PostCustomersCustomerBankAccountsIdVerifyRequest;
  }): Promise<BankAccount> {
    const path = `/v1/customers/{customer}/sources/{id}/verify`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List active subscriptions
   *
   * <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerSubscriptions(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerSubscriptionsResponse> {
    const path = `/v1/customers/{customer}/subscriptions`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a subscription
   *
   * <p>Creates a new subscription on an existing customer.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerSubscriptions(params: {
    customer: string;
    body: PostCustomersCustomerSubscriptionsRequest;
  }): Promise<Subscription> {
    const path = `/v1/customers/{customer}/subscriptions`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a subscription
   *
   * <p>Retrieves the subscription with the given ID.</p>
   *
   * @param customer 
   * @param subscriptionExposedId 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerSubscriptionsSubscriptionExposedId(params: {
    customer: string;
    subscriptionExposedId: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Subscription> {
    const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`.replace('{customer}', String(params.customer)).replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a subscription on a customer
   *
   * <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
   *
   * @param customer 
   * @param subscriptionExposedId 
   * @param body 
   */
  async postCustomersCustomerSubscriptionsSubscriptionExposedId(params: {
    customer: string;
    subscriptionExposedId: string;
    body: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest;
  }): Promise<Subscription> {
    const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`.replace('{customer}', String(params.customer)).replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a subscription
   *
   * <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
   *
   * @param customer 
   * @param subscriptionExposedId 
   * @param body 
   */
  async deleteCustomersCustomerSubscriptionsSubscriptionExposedId(params: {
    customer: string;
    subscriptionExposedId: string;
    body: DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdRequest;
  }): Promise<Subscription> {
    const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`.replace('{customer}', String(params.customer)).replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(params: {
    customer: string;
    subscriptionExposedId: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Discount> {
    const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`.replace('{customer}', String(params.customer)).replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a customer discount
   *
   * <p>Removes the currently applied discount on a customer.</p>
   *
   * @param customer 
   * @param subscriptionExposedId 
   * @param body 
   */
  async deleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(params: {
    customer: string;
    subscriptionExposedId: string;
    body: GetAccountRequest;
  }): Promise<DeletedDiscount> {
    const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`.replace('{customer}', String(params.customer)).replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Customer tax IDs
   *
   * <p>Returns a list of tax IDs for a customer.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getCustomersCustomerTaxIds(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerTaxIdsResponse> {
    const path = `/v1/customers/{customer}/tax_ids`.replace('{customer}', String(params.customer));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Customer tax ID
   *
   * <p>Creates a new <code>tax_id</code> object for a customer.</p>
   *
   * @param customer 
   * @param body 
   */
  async postCustomersCustomerTaxIds(params: {
    customer: string;
    body: PostCustomersCustomerTaxIdsRequest;
  }): Promise<TaxId> {
    const path = `/v1/customers/{customer}/tax_ids`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Customer tax ID
   *
   * <p>Retrieves the <code>tax_id</code> object with the given identifier.</p>
   *
   * @param customer 
   * @param id 
   * @param expand 
   * @param body 
   */
  async getCustomersCustomerTaxIdsId(params: {
    customer: string;
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxId> {
    const path = `/v1/customers/{customer}/tax_ids/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a Customer tax ID
   *
   * <p>Deletes an existing <code>tax_id</code> object.</p>
   *
   * @param customer 
   * @param id 
   * @param body 
   */
  async deleteCustomersCustomerTaxIdsId(params: {
    customer: string;
    id: string;
    body: GetAccountRequest;
  }): Promise<DeletedTaxId> {
    const path = `/v1/customers/{customer}/tax_ids/{id}`.replace('{customer}', String(params.customer)).replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all disputes
   *
   * <p>Returns a list of your disputes.</p>
   *
   * @param charge 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentIntent 
   * @param startingAfter 
   * @param body 
   */
  async getDisputes(params: {
    charge?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetDisputesResponse> {
    const path = '/v1/disputes';
    const queryParams = new URLSearchParams();
    if (params.charge !== undefined) {
      queryParams.append('charge', String(params.charge));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a dispute
   *
   * <p>Retrieves the dispute with the given ID.</p>
   *
   * @param dispute 
   * @param expand 
   * @param body 
   */
  async getDisputesDispute(params: {
    dispute: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Dispute> {
    const path = `/v1/disputes/{dispute}`.replace('{dispute}', String(params.dispute));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a dispute
   *
   * <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
   *
   * @param dispute 
   * @param body 
   */
  async postDisputesDispute(params: {
    dispute: string;
    body: PostChargesChargeDisputeRequest;
  }): Promise<Dispute> {
    const path = `/v1/disputes/{dispute}`.replace('{dispute}', String(params.dispute));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Close a dispute
   *
   * <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
   *
   * @param dispute 
   * @param body 
   */
  async postDisputesDisputeClose(params: {
    dispute: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Dispute> {
    const path = `/v1/disputes/{dispute}/close`.replace('{dispute}', String(params.dispute));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all active entitlements
   *
   * <p>Retrieve a list of active entitlements for a customer</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getEntitlementsActiveEntitlements(params: {
    customer: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetEntitlementsActiveEntitlementsResponse> {
    const path = '/v1/entitlements/active_entitlements';
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an active entitlement
   *
   * <p>Retrieve an active entitlement</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getEntitlementsActiveEntitlementsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<EntitlementsActiveEntitlement> {
    const path = `/v1/entitlements/active_entitlements/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all features
   *
   * <p>Retrieve a list of features</p>
   *
   * @param archived 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param lookupKey 
   * @param startingAfter 
   * @param body 
   */
  async getEntitlementsFeatures(params: {
    archived?: boolean;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    lookupKey?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetEntitlementsFeaturesResponse> {
    const path = '/v1/entitlements/features';
    const queryParams = new URLSearchParams();
    if (params.archived !== undefined) {
      queryParams.append('archived', String(params.archived));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.lookupKey !== undefined) {
      queryParams.append('lookup_key', String(params.lookupKey));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a feature
   *
   * <p>Creates a feature</p>
   *
   * @param body 
   */
  async postEntitlementsFeatures(params: {
    body: PostEntitlementsFeaturesRequest;
  }): Promise<EntitlementsFeature> {
    const path = '/v1/entitlements/features';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a feature
   *
   * <p>Retrieves a feature</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getEntitlementsFeaturesId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<EntitlementsFeature> {
    const path = `/v1/entitlements/features/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Updates a feature
   *
   * <p>Update a feature’s metadata or permanently deactivate it.</p>
   *
   * @param id 
   * @param body 
   */
  async postEntitlementsFeaturesId(params: {
    id: string;
    body: PostEntitlementsFeaturesIdRequest;
  }): Promise<EntitlementsFeature> {
    const path = `/v1/entitlements/features/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an ephemeral key
   *
   * <p>Creates a short-lived API key for a given resource.</p>
   *
   * @param body 
   */
  async postEphemeralKeys(params: {
    body: PostEphemeralKeysRequest;
  }): Promise<EphemeralKey> {
    const path = '/v1/ephemeral_keys';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Immediately invalidate an ephemeral key
   *
   * <p>Invalidates a short-lived API key for a given resource.</p>
   *
   * @param key 
   * @param body 
   */
  async deleteEphemeralKeysKey(params: {
    key: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<EphemeralKey> {
    const path = `/v1/ephemeral_keys/{key}`.replace('{key}', String(params.key));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all events
   *
   * <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="https://docs.stripe.com/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
   *
   * @param created 
   * @param deliverySuccess 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param type 
   * @param types 
   * @param body 
   */
  async getEvents(params: {
    created?: GetAccountsUnion;
    deliverySuccess?: boolean;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    type?: string;
    types?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetEventsResponse> {
    const path = '/v1/events';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.deliverySuccess !== undefined) {
      queryParams.append('delivery_success', String(params.deliverySuccess));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    if (params.types !== undefined) {
      queryParams.append('types', String(params.types));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an event
   *
   * <p>Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getEventsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Event> {
    const path = `/v1/events/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all exchange rates
   *
   * <p>[Deprecated] The <code>ExchangeRate</code> APIs are deprecated. Please use the <a href="https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api">FX Quotes API</a> instead.</p>

<p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getExchangeRates(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetExchangeRatesResponse> {
    const path = '/v1/exchange_rates';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an exchange rate
   *
   * <p>[Deprecated] The <code>ExchangeRate</code> APIs are deprecated. Please use the <a href="https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api">FX Quotes API</a> instead.</p>

<p>Retrieves the exchange rates from the given currency to every supported currency.</p>
   *
   * @param rateId 
   * @param expand 
   * @param body 
   */
  async getExchangeRatesRateId(params: {
    rateId: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ExchangeRate> {
    const path = `/v1/exchange_rates/{rate_id}`.replace('{rate_id}', String(params.rateId));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postExternalAccountsId(params: {
    id: string;
    body: PostAccountsAccountBankAccountsIdRequest;
  }): Promise<ExternalAccount> {
    const path = `/v1/external_accounts/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all file links
   *
   * <p>Returns a list of file links.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param expired 
   * @param file 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getFileLinks(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    expired?: boolean;
    file?: string;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFileLinksResponse> {
    const path = '/v1/file_links';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.expired !== undefined) {
      queryParams.append('expired', String(params.expired));
    }
    if (params.file !== undefined) {
      queryParams.append('file', String(params.file));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a file link
   *
   * <p>Creates a new file link object.</p>
   *
   * @param body 
   */
  async postFileLinks(params: {
    body: PostFileLinksRequest;
  }): Promise<FileLink> {
    const path = '/v1/file_links';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a file link
   *
   * <p>Retrieves the file link with the given ID.</p>
   *
   * @param link 
   * @param expand 
   * @param body 
   */
  async getFileLinksLink(params: {
    link: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FileLink> {
    const path = `/v1/file_links/{link}`.replace('{link}', String(params.link));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a file link
   *
   * <p>Updates an existing file link object. Expired links can no longer be updated.</p>
   *
   * @param link 
   * @param body 
   */
  async postFileLinksLink(params: {
    link: string;
    body: PostFileLinksLinkRequest;
  }): Promise<FileLink> {
    const path = `/v1/file_links/{link}`.replace('{link}', String(params.link));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all files
   *
   * <p>Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param purpose 
   * @param startingAfter 
   * @param body 
   */
  async getFiles(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    purpose?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFilesResponse> {
    const path = '/v1/files';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.purpose !== undefined) {
      queryParams.append('purpose', String(params.purpose));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a file
   *
   * <p>To upload a file to Stripe, you need to send a request of type <code>multipart/form-data</code>. Include the file you want to upload in the request, and the parameters for creating a file.</p>

<p>All of Stripe’s officially supported Client libraries support sending <code>multipart/form-data</code>.</p>
   *
   * @param body 
   */
  async postFiles(params: {
    body: PostFilesRequest;
  }): Promise<File> {
    const path = '/v1/files';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a file
   *
   * <p>Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to <a href="/docs/file-upload#download-file-contents">access file contents</a>.</p>
   *
   * @param file 
   * @param expand 
   * @param body 
   */
  async getFilesFile(params: {
    file: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<File> {
    const path = `/v1/files/{file}`.replace('{file}', String(params.file));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Accounts
   *
   * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
   *
   * @param accountHolder 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param session 
   * @param startingAfter 
   * @param body 
   */
  async getFinancialConnectionsAccounts(params: {
    accountHolder?: GetFinancialConnectionsAccountsObject;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    session?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFinancialConnectionsAccountsResponse> {
    const path = '/v1/financial_connections/accounts';
    const queryParams = new URLSearchParams();
    if (params.accountHolder !== undefined) {
      queryParams.append('account_holder', String(params.accountHolder));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.session !== undefined) {
      queryParams.append('session', String(params.session));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an Account
   *
   * <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
   *
   * @param account 
   * @param expand 
   * @param body 
   */
  async getFinancialConnectionsAccountsAccount(params: {
    account: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/financial_connections/accounts/{account}`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Disconnect an Account
   *
   * <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
   *
   * @param account 
   * @param body 
   */
  async postFinancialConnectionsAccountsAccountDisconnect(params: {
    account: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/financial_connections/accounts/{account}/disconnect`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Account Owners
   *
   * <p>Lists all owners for a given <code>Account</code></p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param ownership 
   * @param startingAfter 
   * @param body 
   */
  async getFinancialConnectionsAccountsAccountOwners(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    ownership: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFinancialConnectionsAccountsAccountOwnersResponse> {
    const path = `/v1/financial_connections/accounts/{account}/owners`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.ownership !== undefined) {
      queryParams.append('ownership', String(params.ownership));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Refresh Account data
   *
   * <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
   *
   * @param account 
   * @param body 
   */
  async postFinancialConnectionsAccountsAccountRefresh(params: {
    account: string;
    body: PostFinancialConnectionsAccountsAccountRefreshRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/financial_connections/accounts/{account}/refresh`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Subscribe to data refreshes for an Account
   *
   * <p>Subscribes to periodic refreshes of data associated with a Financial Connections <code>Account</code>. When the account status is active, data is typically refreshed once a day.</p>
   *
   * @param account 
   * @param body 
   */
  async postFinancialConnectionsAccountsAccountSubscribe(params: {
    account: string;
    body: PostFinancialConnectionsAccountsAccountSubscribeRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/financial_connections/accounts/{account}/subscribe`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Unsubscribe from data refreshes for an Account
   *
   * <p>Unsubscribes from periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
   *
   * @param account 
   * @param body 
   */
  async postFinancialConnectionsAccountsAccountUnsubscribe(params: {
    account: string;
    body: PostFinancialConnectionsAccountsAccountUnsubscribeRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/financial_connections/accounts/{account}/unsubscribe`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Session
   *
   * <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
   *
   * @param body 
   */
  async postFinancialConnectionsSessions(params: {
    body: PostFinancialConnectionsSessionsRequest;
  }): Promise<FinancialConnectionsSession> {
    const path = '/v1/financial_connections/sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Session
   *
   * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
   *
   * @param session 
   * @param expand 
   * @param body 
   */
  async getFinancialConnectionsSessionsSession(params: {
    session: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FinancialConnectionsSession> {
    const path = `/v1/financial_connections/sessions/{session}`.replace('{session}', String(params.session));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Transactions
   *
   * <p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param transactedAt 
   * @param transactionRefresh 
   * @param body 
   */
  async getFinancialConnectionsTransactions(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    transactedAt?: GetAccountsUnion;
    transactionRefresh?: GetFinancialConnectionsTransactionsObject;
    body: GetAccountRequest;
  }): Promise<GetFinancialConnectionsTransactionsResponse> {
    const path = '/v1/financial_connections/transactions';
    const queryParams = new URLSearchParams();
    if (params.account !== undefined) {
      queryParams.append('account', String(params.account));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.transactedAt !== undefined) {
      queryParams.append('transacted_at', String(params.transactedAt));
    }
    if (params.transactionRefresh !== undefined) {
      queryParams.append('transaction_refresh', String(params.transactionRefresh));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Transaction
   *
   * <p>Retrieves the details of a Financial Connections <code>Transaction</code></p>
   *
   * @param transaction 
   * @param expand 
   * @param body 
   */
  async getFinancialConnectionsTransactionsTransaction(params: {
    transaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FinancialConnectionsTransaction> {
    const path = `/v1/financial_connections/transactions/{transaction}`.replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all ForwardingRequests
   *
   * <p>Lists all ForwardingRequest objects.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getForwardingRequests(params: {
    created?: GetForwardingRequestsObject;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetForwardingRequestsResponse> {
    const path = '/v1/forwarding/requests';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a ForwardingRequest
   *
   * <p>Creates a ForwardingRequest object.</p>
   *
   * @param body 
   */
  async postForwardingRequests(params: {
    body: PostForwardingRequestsRequest;
  }): Promise<ForwardingRequest> {
    const path = '/v1/forwarding/requests';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a ForwardingRequest
   *
   * <p>Retrieves a ForwardingRequest object.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getForwardingRequestsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ForwardingRequest> {
    const path = `/v1/forwarding/requests/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List VerificationReports
   *
   * <p>List all verification reports.</p>
   *
   * @param clientReferenceId 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param type 
   * @param verificationSession 
   * @param body 
   */
  async getIdentityVerificationReports(params: {
    clientReferenceId?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    type?: string;
    verificationSession?: string;
    body: GetAccountRequest;
  }): Promise<GetIdentityVerificationReportsResponse> {
    const path = '/v1/identity/verification_reports';
    const queryParams = new URLSearchParams();
    if (params.clientReferenceId !== undefined) {
      queryParams.append('client_reference_id', String(params.clientReferenceId));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    if (params.verificationSession !== undefined) {
      queryParams.append('verification_session', String(params.verificationSession));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a VerificationReport
   *
   * <p>Retrieves an existing VerificationReport</p>
   *
   * @param report 
   * @param expand 
   * @param body 
   */
  async getIdentityVerificationReportsReport(params: {
    report: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IdentityVerificationReport> {
    const path = `/v1/identity/verification_reports/{report}`.replace('{report}', String(params.report));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List VerificationSessions
   *
   * <p>Returns a list of VerificationSessions</p>
   *
   * @param clientReferenceId 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param relatedCustomer 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getIdentityVerificationSessions(params: {
    clientReferenceId?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    relatedCustomer?: string;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetIdentityVerificationSessionsResponse> {
    const path = '/v1/identity/verification_sessions';
    const queryParams = new URLSearchParams();
    if (params.clientReferenceId !== undefined) {
      queryParams.append('client_reference_id', String(params.clientReferenceId));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.relatedCustomer !== undefined) {
      queryParams.append('related_customer', String(params.relatedCustomer));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a VerificationSession
   *
   * <p>Creates a VerificationSession object.</p>

<p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session’s <code>url</code>.</p>

<p>If your API key is in test mode, verification checks won’t actually process, though everything else will occur as if in live mode.</p>

<p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users’ identity documents</a></p>
   *
   * @param body 
   */
  async postIdentityVerificationSessions(params: {
    body: PostIdentityVerificationSessionsRequest;
  }): Promise<IdentityVerificationSession> {
    const path = '/v1/identity/verification_sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a VerificationSession
   *
   * <p>Retrieves the details of a VerificationSession that was previously created.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
<code>client_secret</code> or <code>url</code> to allow re-submission.</p>
   *
   * @param session 
   * @param expand 
   * @param body 
   */
  async getIdentityVerificationSessionsSession(params: {
    session: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IdentityVerificationSession> {
    const path = `/v1/identity/verification_sessions/{session}`.replace('{session}', String(params.session));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a VerificationSession
   *
   * <p>Updates a VerificationSession object.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to update the
verification check and options.</p>
   *
   * @param session 
   * @param body 
   */
  async postIdentityVerificationSessionsSession(params: {
    session: string;
    body: PostIdentityVerificationSessionsSessionRequest;
  }): Promise<IdentityVerificationSession> {
    const path = `/v1/identity/verification_sessions/{session}`.replace('{session}', String(params.session));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a VerificationSession
   *
   * <p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>

<p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p>
   *
   * @param session 
   * @param body 
   */
  async postIdentityVerificationSessionsSessionCancel(params: {
    session: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IdentityVerificationSession> {
    const path = `/v1/identity/verification_sessions/{session}/cancel`.replace('{session}', String(params.session));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Redact a VerificationSession
   *
   * <p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
the VerificationSession and all objects related to it, including VerificationReports, Events,
request logs, etc.</p>

<p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
<a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
state will automatically cancel it.</p>

<p>The redaction process may take up to four days. When the redaction process is in progress, the
VerificationSession’s <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
will be emitted.</p>

<p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
used for any purpose.</p>

<p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p>
   *
   * @param session 
   * @param body 
   */
  async postIdentityVerificationSessionsSessionRedact(params: {
    session: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IdentityVerificationSession> {
    const path = `/v1/identity/verification_sessions/{session}/redact`.replace('{session}', String(params.session));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all payments for an invoice
   *
   * <p>When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param invoice 
   * @param limit 
   * @param payment 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getInvoicePayments(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    invoice?: string;
    limit?: number;
    payment?: GetInvoicePaymentsObject;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetInvoicePaymentsResponse> {
    const path = '/v1/invoice_payments';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.invoice !== undefined) {
      queryParams.append('invoice', String(params.invoice));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.payment !== undefined) {
      queryParams.append('payment', String(params.payment));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an InvoicePayment
   *
   * <p>Retrieves the invoice payment with the given ID.</p>
   *
   * @param invoicePayment 
   * @param expand 
   * @param body 
   */
  async getInvoicePaymentsInvoicePayment(params: {
    invoicePayment: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<InvoicePayment> {
    const path = `/v1/invoice_payments/{invoice_payment}`.replace('{invoice_payment}', String(params.invoicePayment));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all invoice rendering templates
   *
   * <p>List all templates, ordered by creation date, with the most recently created template appearing first.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getInvoiceRenderingTemplates(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetInvoiceRenderingTemplatesResponse> {
    const path = '/v1/invoice_rendering_templates';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an invoice rendering template
   *
   * <p>Retrieves an invoice rendering template with the given ID. It by default returns the latest version of the template. Optionally, specify a version to see previous versions.</p>
   *
   * @param template 
   * @param expand 
   * @param version 
   * @param body 
   */
  async getInvoiceRenderingTemplatesTemplate(params: {
    template: string;
    expand?: Array<string>;
    version?: number;
    body: GetAccountRequest;
  }): Promise<InvoiceRenderingTemplate> {
    const path = `/v1/invoice_rendering_templates/{template}`.replace('{template}', String(params.template));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.version !== undefined) {
      queryParams.append('version', String(params.version));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Archive an invoice rendering template
   *
   * <p>Updates the status of an invoice rendering template to ‘archived’ so no new Stripe objects (customers, invoices, etc.) can reference it. The template can also no longer be updated. However, if the template is already set on a Stripe object, it will continue to be applied on invoices generated by it.</p>
   *
   * @param template 
   * @param body 
   */
  async postInvoiceRenderingTemplatesTemplateArchive(params: {
    template: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<InvoiceRenderingTemplate> {
    const path = `/v1/invoice_rendering_templates/{template}/archive`.replace('{template}', String(params.template));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Unarchive an invoice rendering template
   *
   * <p>Unarchive an invoice rendering template so it can be used on new Stripe objects again.</p>
   *
   * @param template 
   * @param body 
   */
  async postInvoiceRenderingTemplatesTemplateUnarchive(params: {
    template: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<InvoiceRenderingTemplate> {
    const path = `/v1/invoice_rendering_templates/{template}/unarchive`.replace('{template}', String(params.template));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all invoice items
   *
   * <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>
   *
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param invoice 
   * @param limit 
   * @param pending 
   * @param startingAfter 
   * @param body 
   */
  async getInvoiceitems(params: {
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    invoice?: string;
    limit?: number;
    pending?: boolean;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetInvoiceitemsResponse> {
    const path = '/v1/invoiceitems';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.invoice !== undefined) {
      queryParams.append('invoice', String(params.invoice));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.pending !== undefined) {
      queryParams.append('pending', String(params.pending));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an invoice item
   *
   * <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
   *
   * @param body 
   */
  async postInvoiceitems(params: {
    body: PostInvoiceitemsRequest;
  }): Promise<Invoiceitem> {
    const path = '/v1/invoiceitems';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an invoice item
   *
   * <p>Retrieves the invoice item with the given ID.</p>
   *
   * @param invoiceitem 
   * @param expand 
   * @param body 
   */
  async getInvoiceitemsInvoiceitem(params: {
    invoiceitem: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Invoiceitem> {
    const path = `/v1/invoiceitems/{invoiceitem}`.replace('{invoiceitem}', String(params.invoiceitem));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an invoice item
   *
   * <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
   *
   * @param invoiceitem 
   * @param body 
   */
  async postInvoiceitemsInvoiceitem(params: {
    invoiceitem: string;
    body: PostInvoiceitemsInvoiceitemRequest;
  }): Promise<Invoiceitem> {
    const path = `/v1/invoiceitems/{invoiceitem}`.replace('{invoiceitem}', String(params.invoiceitem));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete an invoice item
   *
   * <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>
   *
   * @param invoiceitem 
   * @param body 
   */
  async deleteInvoiceitemsInvoiceitem(params: {
    invoiceitem: string;
    body: GetAccountRequest;
  }): Promise<DeletedInvoiceitem> {
    const path = `/v1/invoiceitems/{invoiceitem}`.replace('{invoiceitem}', String(params.invoiceitem));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all invoices
   *
   * <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
   *
   * @param collectionMethod 
   * @param created 
   * @param customer 
   * @param dueDate 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param subscription 
   * @param body 
   */
  async getInvoices(params: {
    collectionMethod?: string;
    created?: GetAccountsUnion;
    customer?: string;
    dueDate?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    subscription?: string;
    body: GetAccountRequest;
  }): Promise<GetInvoicesResponse> {
    const path = '/v1/invoices';
    const queryParams = new URLSearchParams();
    if (params.collectionMethod !== undefined) {
      queryParams.append('collection_method', String(params.collectionMethod));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.dueDate !== undefined) {
      queryParams.append('due_date', String(params.dueDate));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.subscription !== undefined) {
      queryParams.append('subscription', String(params.subscription));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an invoice
   *
   * <p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>
   *
   * @param body 
   */
  async postInvoices(params: {
    body: PostInvoicesRequest;
  }): Promise<Invoice> {
    const path = '/v1/invoices';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a preview invoice
   *
   * <p>At any time, you can preview the upcoming invoice for a subscription or subscription schedule. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>

<p>You can also preview the effects of creating or updating a subscription or subscription schedule, including a preview of any prorations that will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update.</p>

<p>The recommended way to get only the prorations being previewed on the invoice is to consider line items where <code>parent.subscription_item_details.proration</code> is <code>true</code>.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>

<p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
   *
   * @param body 
   */
  async postInvoicesCreatePreview(params: {
    body: PostInvoicesCreatePreviewRequest;
  }): Promise<Invoice> {
    const path = '/v1/invoices/create_preview';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search invoices
   *
   * <p>Search for invoices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getInvoicesSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetInvoicesSearchResponse> {
    const path = '/v1/invoices/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an invoice
   *
   * <p>Retrieves the invoice with the given ID.</p>
   *
   * @param invoice 
   * @param expand 
   * @param body 
   */
  async getInvoicesInvoice(params: {
    invoice: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}`.replace('{invoice}', String(params.invoice));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an invoice
   *
   * <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>collection_method</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoice(params: {
    invoice: string;
    body: PostInvoicesInvoiceRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a draft invoice
   *
   * <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>
   *
   * @param invoice 
   * @param body 
   */
  async deleteInvoicesInvoice(params: {
    invoice: string;
    body: GetAccountRequest;
  }): Promise<DeletedInvoice> {
    const path = `/v1/invoices/{invoice}`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Bulk add invoice line items
   *
   * <p>Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceAddLines(params: {
    invoice: string;
    body: PostInvoicesInvoiceAddLinesRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/add_lines`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Attach a payment to an Invoice
   *
   * <p>Attaches a PaymentIntent or an Out of Band Payment to the invoice, adding it to the list of <code>payments</code>.</p>

<p>For the PaymentIntent, when the PaymentIntent’s status changes to <code>succeeded</code>, the payment is credited
to the invoice, increasing its <code>amount_paid</code>. When the invoice is fully paid, the
invoice’s status becomes <code>paid</code>.</p>

<p>If the PaymentIntent’s status is already <code>succeeded</code> when it’s attached, it’s
credited to the invoice immediately.</p>

<p>See: <a href="/docs/invoicing/partial-payments">Partial payments</a> to learn more.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceAttachPayment(params: {
    invoice: string;
    body: PostInvoicesInvoiceAttachPaymentRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/attach_payment`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Finalize an invoice
   *
   * <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceFinalize(params: {
    invoice: string;
    body: PostInvoicesInvoiceFinalizeRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/finalize`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an invoice's line items
   *
   * <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * @param invoice 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getInvoicesInvoiceLines(params: {
    invoice: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetInvoicesInvoiceLinesResponse> {
    const path = `/v1/invoices/{invoice}/lines`.replace('{invoice}', String(params.invoice));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an invoice's line item
   *
   * <p>Updates an invoice’s line item. Some fields, such as <code>tax_amounts</code>, only live on the invoice line item,
so they can only be updated through this endpoint. Other fields, such as <code>amount</code>, live on both the invoice
item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
Updating an invoice’s line item is only possible before the invoice is finalized.</p>
   *
   * @param invoice 
   * @param lineItemId 
   * @param body 
   */
  async postInvoicesInvoiceLinesLineItemId(params: {
    invoice: string;
    lineItemId: string;
    body: PostInvoicesInvoiceLinesLineItemIdRequest;
  }): Promise<LineItem> {
    const path = `/v1/invoices/{invoice}/lines/{line_item_id}`.replace('{invoice}', String(params.invoice)).replace('{line_item_id}', String(params.lineItemId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Mark an invoice as uncollectible
   *
   * <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceMarkUncollectible(params: {
    invoice: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/mark_uncollectible`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Pay an invoice
   *
   * <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoicePay(params: {
    invoice: string;
    body: PostInvoicesInvoicePayRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/pay`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Bulk remove invoice line items
   *
   * <p>Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceRemoveLines(params: {
    invoice: string;
    body: PostInvoicesInvoiceRemoveLinesRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/remove_lines`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Send an invoice for manual payment
   *
   * <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceSend(params: {
    invoice: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/send`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Bulk update invoice line items
   *
   * <p>Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceUpdateLines(params: {
    invoice: string;
    body: PostInvoicesInvoiceUpdateLinesRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/update_lines`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Void an invoice
   *
   * <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>

<p>Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you’re doing business in. You might need to <a href="#create_invoice">issue another invoice</a> or <a href="#create_credit_note">credit note</a> instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.</p>
   *
   * @param invoice 
   * @param body 
   */
  async postInvoicesInvoiceVoid(params: {
    invoice: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Invoice> {
    const path = `/v1/invoices/{invoice}/void`.replace('{invoice}', String(params.invoice));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all authorizations
   *
   * <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param card 
   * @param cardholder 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getIssuingAuthorizations(params: {
    card?: string;
    cardholder?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingAuthorizationsResponse> {
    const path = '/v1/issuing/authorizations';
    const queryParams = new URLSearchParams();
    if (params.card !== undefined) {
      queryParams.append('card', String(params.card));
    }
    if (params.cardholder !== undefined) {
      queryParams.append('cardholder', String(params.cardholder));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an authorization
   *
   * <p>Retrieves an Issuing <code>Authorization</code> object.</p>
   *
   * @param authorization 
   * @param expand 
   * @param body 
   */
  async getIssuingAuthorizationsAuthorization(params: {
    authorization: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/issuing/authorizations/{authorization}`.replace('{authorization}', String(params.authorization));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an authorization
   *
   * <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postIssuingAuthorizationsAuthorization(params: {
    authorization: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/issuing/authorizations/{authorization}`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Approve an authorization
   *
   * <p>[Deprecated] Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow. 
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to approve an authorization</a>.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postIssuingAuthorizationsAuthorizationApprove(params: {
    authorization: string;
    body: PostIssuingAuthorizationsAuthorizationApproveRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/issuing/authorizations/{authorization}/approve`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Decline an authorization
   *
   * <p>[Deprecated] Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to decline an authorization</a>.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postIssuingAuthorizationsAuthorizationDecline(params: {
    authorization: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/issuing/authorizations/{authorization}/decline`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all cardholders
   *
   * <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param created 
   * @param email 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param phoneNumber 
   * @param startingAfter 
   * @param status 
   * @param type 
   * @param body 
   */
  async getIssuingCardholders(params: {
    created?: GetAccountsUnion;
    email?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    phoneNumber?: string;
    startingAfter?: string;
    status?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingCardholdersResponse> {
    const path = '/v1/issuing/cardholders';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.email !== undefined) {
      queryParams.append('email', String(params.email));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.phoneNumber !== undefined) {
      queryParams.append('phone_number', String(params.phoneNumber));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a cardholder
   *
   * <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>
   *
   * @param body 
   */
  async postIssuingCardholders(params: {
    body: PostIssuingCardholdersRequest;
  }): Promise<IssuingCardholder> {
    const path = '/v1/issuing/cardholders';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a cardholder
   *
   * <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
   *
   * @param cardholder 
   * @param expand 
   * @param body 
   */
  async getIssuingCardholdersCardholder(params: {
    cardholder: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingCardholder> {
    const path = `/v1/issuing/cardholders/{cardholder}`.replace('{cardholder}', String(params.cardholder));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a cardholder
   *
   * <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param cardholder 
   * @param body 
   */
  async postIssuingCardholdersCardholder(params: {
    cardholder: string;
    body: PostIssuingCardholdersCardholderRequest;
  }): Promise<IssuingCardholder> {
    const path = `/v1/issuing/cardholders/{cardholder}`.replace('{cardholder}', String(params.cardholder));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all cards
   *
   * <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param cardholder 
   * @param created 
   * @param endingBefore 
   * @param expMonth 
   * @param expYear 
   * @param expand 
   * @param last4 
   * @param limit 
   * @param personalizationDesign 
   * @param startingAfter 
   * @param status 
   * @param type 
   * @param body 
   */
  async getIssuingCards(params: {
    cardholder?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expMonth?: number;
    expYear?: number;
    expand?: Array<string>;
    last4?: string;
    limit?: number;
    personalizationDesign?: string;
    startingAfter?: string;
    status?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingCardsResponse> {
    const path = '/v1/issuing/cards';
    const queryParams = new URLSearchParams();
    if (params.cardholder !== undefined) {
      queryParams.append('cardholder', String(params.cardholder));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expMonth !== undefined) {
      queryParams.append('exp_month', String(params.expMonth));
    }
    if (params.expYear !== undefined) {
      queryParams.append('exp_year', String(params.expYear));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.last4 !== undefined) {
      queryParams.append('last4', String(params.last4));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.personalizationDesign !== undefined) {
      queryParams.append('personalization_design', String(params.personalizationDesign));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a card
   *
   * <p>Creates an Issuing <code>Card</code> object.</p>
   *
   * @param body 
   */
  async postIssuingCards(params: {
    body: PostIssuingCardsRequest;
  }): Promise<IssuingCard> {
    const path = '/v1/issuing/cards';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a card
   *
   * <p>Retrieves an Issuing <code>Card</code> object.</p>
   *
   * @param card 
   * @param expand 
   * @param body 
   */
  async getIssuingCardsCard(params: {
    card: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/issuing/cards/{card}`.replace('{card}', String(params.card));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a card
   *
   * <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param card 
   * @param body 
   */
  async postIssuingCardsCard(params: {
    card: string;
    body: PostIssuingCardsCardRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/issuing/cards/{card}`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all disputes
   *
   * <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param transaction 
   * @param body 
   */
  async getIssuingDisputes(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    transaction?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingDisputesResponse> {
    const path = '/v1/issuing/disputes';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.transaction !== undefined) {
      queryParams.append('transaction', String(params.transaction));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a dispute
   *
   * <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>
   *
   * @param body 
   */
  async postIssuingDisputes(params: {
    body: PostIssuingDisputesRequest;
  }): Promise<IssuingDispute> {
    const path = '/v1/issuing/disputes';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a dispute
   *
   * <p>Retrieves an Issuing <code>Dispute</code> object.</p>
   *
   * @param dispute 
   * @param expand 
   * @param body 
   */
  async getIssuingDisputesDispute(params: {
    dispute: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingDispute> {
    const path = `/v1/issuing/disputes/{dispute}`.replace('{dispute}', String(params.dispute));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a dispute
   *
   * <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
   *
   * @param dispute 
   * @param body 
   */
  async postIssuingDisputesDispute(params: {
    dispute: string;
    body: PostIssuingDisputesDisputeRequest;
  }): Promise<IssuingDispute> {
    const path = `/v1/issuing/disputes/{dispute}`.replace('{dispute}', String(params.dispute));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Submit a dispute
   *
   * <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
   *
   * @param dispute 
   * @param body 
   */
  async postIssuingDisputesDisputeSubmit(params: {
    dispute: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<IssuingDispute> {
    const path = `/v1/issuing/disputes/{dispute}/submit`.replace('{dispute}', String(params.dispute));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all personalization designs
   *
   * <p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param lookupKeys 
   * @param preferences 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getIssuingPersonalizationDesigns(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    lookupKeys?: Array<string>;
    preferences?: GetIssuingPersonalizationDesignsObject;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingPersonalizationDesignsResponse> {
    const path = '/v1/issuing/personalization_designs';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.lookupKeys !== undefined) {
      queryParams.append('lookup_keys', String(params.lookupKeys));
    }
    if (params.preferences !== undefined) {
      queryParams.append('preferences', String(params.preferences));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a personalization design
   *
   * <p>Creates a personalization design object.</p>
   *
   * @param body 
   */
  async postIssuingPersonalizationDesigns(params: {
    body: PostIssuingPersonalizationDesignsRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = '/v1/issuing/personalization_designs';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a personalization design
   *
   * <p>Retrieves a personalization design object.</p>
   *
   * @param personalizationDesign 
   * @param expand 
   * @param body 
   */
  async getIssuingPersonalizationDesignsPersonalizationDesign(params: {
    personalizationDesign: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = `/v1/issuing/personalization_designs/{personalization_design}`.replace('{personalization_design}', String(params.personalizationDesign));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a personalization design
   *
   * <p>Updates a card personalization object.</p>
   *
   * @param personalizationDesign 
   * @param body 
   */
  async postIssuingPersonalizationDesignsPersonalizationDesign(params: {
    personalizationDesign: string;
    body: PostIssuingPersonalizationDesignsPersonalizationDesignRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = `/v1/issuing/personalization_designs/{personalization_design}`.replace('{personalization_design}', String(params.personalizationDesign));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all physical bundles
   *
   * <p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param type 
   * @param body 
   */
  async getIssuingPhysicalBundles(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingPhysicalBundlesResponse> {
    const path = '/v1/issuing/physical_bundles';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a physical bundle
   *
   * <p>Retrieves a physical bundle object.</p>
   *
   * @param physicalBundle 
   * @param expand 
   * @param body 
   */
  async getIssuingPhysicalBundlesPhysicalBundle(params: {
    physicalBundle: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingPhysicalBundle> {
    const path = `/v1/issuing/physical_bundles/{physical_bundle}`.replace('{physical_bundle}', String(params.physicalBundle));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a settlement
   *
   * <p>Retrieves an Issuing <code>Settlement</code> object.</p>
   *
   * @param settlement 
   * @param expand 
   * @param body 
   */
  async getIssuingSettlementsSettlement(params: {
    settlement: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingSettlement> {
    const path = `/v1/issuing/settlements/{settlement}`.replace('{settlement}', String(params.settlement));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a settlement
   *
   * <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param settlement 
   * @param body 
   */
  async postIssuingSettlementsSettlement(params: {
    settlement: string;
    body: PostIssuingSettlementsSettlementRequest;
  }): Promise<IssuingSettlement> {
    const path = `/v1/issuing/settlements/{settlement}`.replace('{settlement}', String(params.settlement));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all issuing tokens for card
   *
   * <p>Lists all Issuing <code>Token</code> objects for a given card.</p>
   *
   * @param card 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getIssuingTokens(params: {
    card: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingTokensResponse> {
    const path = '/v1/issuing/tokens';
    const queryParams = new URLSearchParams();
    if (params.card !== undefined) {
      queryParams.append('card', String(params.card));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an issuing token
   *
   * <p>Retrieves an Issuing <code>Token</code> object.</p>
   *
   * @param token 
   * @param expand 
   * @param body 
   */
  async getIssuingTokensToken(params: {
    token: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingToken> {
    const path = `/v1/issuing/tokens/{token}`.replace('{token}', String(params.token));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a token status
   *
   * <p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>
   *
   * @param token 
   * @param body 
   */
  async postIssuingTokensToken(params: {
    token: string;
    body: PostIssuingTokensTokenRequest;
  }): Promise<IssuingToken> {
    const path = `/v1/issuing/tokens/{token}`.replace('{token}', String(params.token));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all transactions
   *
   * <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param card 
   * @param cardholder 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getIssuingTransactions(params: {
    card?: string;
    cardholder?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetIssuingTransactionsResponse> {
    const path = '/v1/issuing/transactions';
    const queryParams = new URLSearchParams();
    if (params.card !== undefined) {
      queryParams.append('card', String(params.card));
    }
    if (params.cardholder !== undefined) {
      queryParams.append('cardholder', String(params.cardholder));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a transaction
   *
   * <p>Retrieves an Issuing <code>Transaction</code> object.</p>
   *
   * @param transaction 
   * @param expand 
   * @param body 
   */
  async getIssuingTransactionsTransaction(params: {
    transaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<IssuingTransaction> {
    const path = `/v1/issuing/transactions/{transaction}`.replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a transaction
   *
   * <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param transaction 
   * @param body 
   */
  async postIssuingTransactionsTransaction(params: {
    transaction: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<IssuingTransaction> {
    const path = `/v1/issuing/transactions/{transaction}`.replace('{transaction}', String(params.transaction));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Session
   *
   * <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
   *
   * @param body 
   */
  async postLinkAccountSessions(params: {
    body: PostFinancialConnectionsSessionsRequest;
  }): Promise<FinancialConnectionsSession> {
    const path = '/v1/link_account_sessions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Session
   *
   * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
   *
   * @param session 
   * @param expand 
   * @param body 
   */
  async getLinkAccountSessionsSession(params: {
    session: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FinancialConnectionsSession> {
    const path = `/v1/link_account_sessions/{session}`.replace('{session}', String(params.session));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Accounts
   *
   * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
   *
   * @param accountHolder 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param session 
   * @param startingAfter 
   * @param body 
   */
  async getLinkedAccounts(params: {
    accountHolder?: GetFinancialConnectionsAccountsObject;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    session?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFinancialConnectionsAccountsResponse> {
    const path = '/v1/linked_accounts';
    const queryParams = new URLSearchParams();
    if (params.accountHolder !== undefined) {
      queryParams.append('account_holder', String(params.accountHolder));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.session !== undefined) {
      queryParams.append('session', String(params.session));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an Account
   *
   * <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
   *
   * @param account 
   * @param expand 
   * @param body 
   */
  async getLinkedAccountsAccount(params: {
    account: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/linked_accounts/{account}`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Disconnect an Account
   *
   * <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
   *
   * @param account 
   * @param body 
   */
  async postLinkedAccountsAccountDisconnect(params: {
    account: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/linked_accounts/{account}/disconnect`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Account Owners
   *
   * <p>Lists all owners for a given <code>Account</code></p>
   *
   * @param account 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param ownership 
   * @param startingAfter 
   * @param body 
   */
  async getLinkedAccountsAccountOwners(params: {
    account: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    ownership: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetFinancialConnectionsAccountsAccountOwnersResponse> {
    const path = `/v1/linked_accounts/{account}/owners`.replace('{account}', String(params.account));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.ownership !== undefined) {
      queryParams.append('ownership', String(params.ownership));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Refresh Account data
   *
   * <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
   *
   * @param account 
   * @param body 
   */
  async postLinkedAccountsAccountRefresh(params: {
    account: string;
    body: PostFinancialConnectionsAccountsAccountRefreshRequest;
  }): Promise<FinancialConnectionsAccount> {
    const path = `/v1/linked_accounts/{account}/refresh`.replace('{account}', String(params.account));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Mandate
   *
   * <p>Retrieves a Mandate object.</p>
   *
   * @param mandate 
   * @param expand 
   * @param body 
   */
  async getMandatesMandate(params: {
    mandate: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Mandate> {
    const path = `/v1/mandates/{mandate}`.replace('{mandate}', String(params.mandate));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List Payment Attempt Records
   *
   * <p>List all the Payment Attempt Records attached to the specified Payment Record.</p>
   *
   * @param expand 
   * @param limit 
   * @param paymentRecord 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentAttemptRecords(params: {
    expand?: Array<string>;
    limit?: number;
    paymentRecord: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentAttemptRecordsResponse> {
    const path = '/v1/payment_attempt_records';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentRecord !== undefined) {
      queryParams.append('payment_record', String(params.paymentRecord));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Payment Attempt Record
   *
   * <p>Retrieves a Payment Attempt Record with the given ID</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getPaymentAttemptRecordsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentAttemptRecord> {
    const path = `/v1/payment_attempt_records/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all PaymentIntents
   *
   * <p>Returns a list of PaymentIntents.</p>
   *
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentIntents(params: {
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentIntentsResponse> {
    const path = '/v1/payment_intents';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a PaymentIntent
   *
   * <p>Creates a PaymentIntent object.</p>

<p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
with the Payment Intents API</a>.</p>

<p>When you use <code>confirm=true</code> during creation, it’s equivalent to creating
and confirming the PaymentIntent in the same call. You can use any parameters
available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when you supply
<code>confirm=true</code>.</p>
   *
   * @param body 
   */
  async postPaymentIntents(params: {
    body: PostPaymentIntentsRequest;
  }): Promise<PaymentIntent> {
    const path = '/v1/payment_intents';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search PaymentIntents
   *
   * <p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getPaymentIntentsSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentIntentsSearchResponse> {
    const path = '/v1/payment_intents/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a PaymentIntent
   *
   * <p>Retrieves the details of a PaymentIntent that has previously been created. </p>

<p>You can retrieve a PaymentIntent client-side using a publishable key when the <code>client_secret</code> is in the query string. </p>

<p>If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>
   *
   * @param intent 
   * @param clientSecret 
   * @param expand 
   * @param body 
   */
  async getPaymentIntentsIntent(params: {
    intent: string;
    clientSecret?: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}`.replace('{intent}', String(params.intent));
    const queryParams = new URLSearchParams();
    if (params.clientSecret !== undefined) {
      queryParams.append('client_secret', String(params.clientSecret));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a PaymentIntent
   *
   * <p>Updates properties on a PaymentIntent object without confirming.</p>

<p>Depending on which properties you update, you might need to confirm the
PaymentIntent again. For example, updating the <code>payment_method</code>
always requires you to confirm the PaymentIntent again. If you prefer to
update and confirm at the same time, we recommend updating properties through
the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntent(params: {
    intent: string;
    body: PostPaymentIntentsIntentRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all PaymentIntent LineItems
   *
   * <p>Lists all LineItems of a given PaymentIntent.</p>
   *
   * @param intent 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentIntentsIntentAmountDetailsLineItems(params: {
    intent: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentIntentsIntentAmountDetailsLineItemsResponse> {
    const path = `/v1/payment_intents/{intent}/amount_details_line_items`.replace('{intent}', String(params.intent));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reconcile a customer_balance PaymentIntent
   *
   * <p>Manually reconcile the remaining amount for a <code>customer_balance</code> PaymentIntent.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentApplyCustomerBalance(params: {
    intent: string;
    body: PostPaymentIntentsIntentApplyCustomerBalanceRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/apply_customer_balance`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a PaymentIntent
   *
   * <p>You can cancel a PaymentIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, <code>requires_action</code> or, <a href="/docs/payments/intents">in rare cases</a>, <code>processing</code>. </p>

<p>After it’s canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a <code>status</code> of <code>requires_capture</code>, the remaining <code>amount_capturable</code> is automatically refunded. </p>

<p>You can’t cancel the PaymentIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentCancel(params: {
    intent: string;
    body: PostPaymentIntentsIntentCancelRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/cancel`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Capture a PaymentIntent
   *
   * <p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>

<p>Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.</p>

<p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentCapture(params: {
    intent: string;
    body: PostPaymentIntentsIntentCaptureRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/capture`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Confirm a PaymentIntent
   *
   * <p>Confirm that your customer intends to pay with current or provided
payment method. Upon confirmation, the PaymentIntent will attempt to initiate
a payment.</p>

<p>If the selected payment method requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If payment fails,
the PaymentIntent transitions to the <code>requires_payment_method</code> status or the
<code>canceled</code> status if the confirmation limit is reached. If
payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>

<p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
After <code>next_action</code>s are handled by the client, no additional
confirmation is required to complete the payment.</p>

<p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
initiated using a secret key.</p>

<p>If any actions are required for the payment, the PaymentIntent will
return to the <code>requires_confirmation</code> state
after those actions are completed. Your server needs to then
explicitly re-confirm the PaymentIntent to initiate the next payment
attempt.</p>

<p>There is a variable upper limit on how many times a PaymentIntent can be confirmed.
After this limit is reached, any further calls to this endpoint will
transition the PaymentIntent to the <code>canceled</code> state.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentConfirm(params: {
    intent: string;
    body: PostPaymentIntentsIntentConfirmRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/confirm`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Increment an authorization
   *
   * <p>Perform an incremental authorization on an eligible
<a href="/docs/api/payment_intents/object">PaymentIntent</a>. To be eligible, the
PaymentIntent’s status must be <code>requires_capture</code> and
<a href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>
must be <code>true</code>.</p>

<p>Incremental authorizations attempt to increase the authorized amount on
your customer’s card to the new, higher <code>amount</code> provided. Similar to the
initial authorization, incremental authorizations can be declined. A
single PaymentIntent can call this endpoint multiple times to further
increase the authorized amount.</p>

<p>If the incremental authorization succeeds, the PaymentIntent object
returns with the updated
<a href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.
If the incremental authorization fails, a
<a href="/docs/error-codes#card-declined">card_declined</a> error returns, and no other
fields on the PaymentIntent or Charge update. The PaymentIntent
object remains capturable for the previously authorized amount.</p>

<p>Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
After it’s captured, a PaymentIntent can no longer be incremented.</p>

<p>Learn more about <a href="/docs/terminal/features/incremental-authorizations">incremental authorizations</a>.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentIncrementAuthorization(params: {
    intent: string;
    body: PostPaymentIntentsIntentIncrementAuthorizationRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/increment_authorization`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Verify microdeposits on a PaymentIntent
   *
   * <p>Verifies microdeposits on a PaymentIntent object.</p>
   *
   * @param intent 
   * @param body 
   */
  async postPaymentIntentsIntentVerifyMicrodeposits(params: {
    intent: string;
    body: PostPaymentIntentsIntentVerifyMicrodepositsRequest;
  }): Promise<PaymentIntent> {
    const path = `/v1/payment_intents/{intent}/verify_microdeposits`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all payment links
   *
   * <p>Returns a list of your payment links.</p>
   *
   * @param active 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentLinks(params: {
    active?: boolean;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentLinksResponse> {
    const path = '/v1/payment_links';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a payment link
   *
   * <p>Creates a payment link.</p>
   *
   * @param body 
   */
  async postPaymentLinks(params: {
    body: PostPaymentLinksRequest;
  }): Promise<PaymentLink> {
    const path = '/v1/payment_links';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve payment link
   *
   * <p>Retrieve a payment link.</p>
   *
   * @param paymentLink 
   * @param expand 
   * @param body 
   */
  async getPaymentLinksPaymentLink(params: {
    paymentLink: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentLink> {
    const path = `/v1/payment_links/{payment_link}`.replace('{payment_link}', String(params.paymentLink));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a payment link
   *
   * <p>Updates a payment link.</p>
   *
   * @param paymentLink 
   * @param body 
   */
  async postPaymentLinksPaymentLink(params: {
    paymentLink: string;
    body: PostPaymentLinksPaymentLinkRequest;
  }): Promise<PaymentLink> {
    const path = `/v1/payment_links/{payment_link}`.replace('{payment_link}', String(params.paymentLink));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a payment link's line items
   *
   * <p>When retrieving a payment link, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * @param paymentLink 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentLinksPaymentLinkLineItems(params: {
    paymentLink: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentLinksPaymentLinkLineItemsResponse> {
    const path = `/v1/payment_links/{payment_link}/line_items`.replace('{payment_link}', String(params.paymentLink));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List payment method configurations
   *
   * <p>List payment method configurations</p>
   *
   * @param application 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentMethodConfigurations(params: {
    application?: GetPaymentMethodConfigurationsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentMethodConfigurationsResponse> {
    const path = '/v1/payment_method_configurations';
    const queryParams = new URLSearchParams();
    if (params.application !== undefined) {
      queryParams.append('application', String(params.application));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a payment method configuration
   *
   * <p>Creates a payment method configuration</p>
   *
   * @param body 
   */
  async postPaymentMethodConfigurations(params: {
    body: PostPaymentMethodConfigurationsRequest;
  }): Promise<PaymentMethodConfiguration> {
    const path = '/v1/payment_method_configurations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve payment method configuration
   *
   * <p>Retrieve payment method configuration</p>
   *
   * @param configuration 
   * @param expand 
   * @param body 
   */
  async getPaymentMethodConfigurationsConfiguration(params: {
    configuration: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentMethodConfiguration> {
    const path = `/v1/payment_method_configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update payment method configuration
   *
   * <p>Update payment method configuration</p>
   *
   * @param configuration 
   * @param body 
   */
  async postPaymentMethodConfigurationsConfiguration(params: {
    configuration: string;
    body: PostPaymentMethodConfigurationsConfigurationRequest;
  }): Promise<PaymentMethodConfiguration> {
    const path = `/v1/payment_method_configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List payment method domains
   *
   * <p>Lists the details of existing payment method domains.</p>
   *
   * @param domainName 
   * @param enabled 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPaymentMethodDomains(params: {
    domainName?: string;
    enabled?: boolean;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentMethodDomainsResponse> {
    const path = '/v1/payment_method_domains';
    const queryParams = new URLSearchParams();
    if (params.domainName !== undefined) {
      queryParams.append('domain_name', String(params.domainName));
    }
    if (params.enabled !== undefined) {
      queryParams.append('enabled', String(params.enabled));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a payment method domain
   *
   * <p>Creates a payment method domain.</p>
   *
   * @param body 
   */
  async postPaymentMethodDomains(params: {
    body: PostPaymentMethodDomainsRequest;
  }): Promise<PaymentMethodDomain> {
    const path = '/v1/payment_method_domains';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a payment method domain
   *
   * <p>Retrieves the details of an existing payment method domain.</p>
   *
   * @param paymentMethodDomain 
   * @param expand 
   * @param body 
   */
  async getPaymentMethodDomainsPaymentMethodDomain(params: {
    paymentMethodDomain: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentMethodDomain> {
    const path = `/v1/payment_method_domains/{payment_method_domain}`.replace('{payment_method_domain}', String(params.paymentMethodDomain));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a payment method domain
   *
   * <p>Updates an existing payment method domain.</p>
   *
   * @param paymentMethodDomain 
   * @param body 
   */
  async postPaymentMethodDomainsPaymentMethodDomain(params: {
    paymentMethodDomain: string;
    body: PostPaymentMethodDomainsPaymentMethodDomainRequest;
  }): Promise<PaymentMethodDomain> {
    const path = `/v1/payment_method_domains/{payment_method_domain}`.replace('{payment_method_domain}', String(params.paymentMethodDomain));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Validate an existing payment method domain
   *
   * <p>Some payment methods might require additional steps to register a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain.
The payment method doesn’t appear in Elements or Embedded Checkout for this domain until it is active.</p>

<p>To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.</p>

<p>Related guides: <a href="/docs/payments/payment-methods/pmd-registration">Payment method domains</a>.</p>
   *
   * @param paymentMethodDomain 
   * @param body 
   */
  async postPaymentMethodDomainsPaymentMethodDomainValidate(params: {
    paymentMethodDomain: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<PaymentMethodDomain> {
    const path = `/v1/payment_method_domains/{payment_method_domain}/validate`.replace('{payment_method_domain}', String(params.paymentMethodDomain));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List PaymentMethods
   *
   * <p>Returns a list of PaymentMethods for Treasury flows. If you want to list the PaymentMethods attached to a Customer for payments, you should use the <a href="/docs/api/payment_methods/customer_list">List a Customer’s PaymentMethods</a> API instead.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getPaymentMethods(params: {
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetPaymentMethodsResponse> {
    const path = '/v1/payment_methods';
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Shares a PaymentMethod
   *
   * <p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>

<p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p>
   *
   * @param body 
   */
  async postPaymentMethods(params: {
    body: PostPaymentMethodsRequest;
  }): Promise<PaymentMethod> {
    const path = '/v1/payment_methods';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a PaymentMethod
   *
   * <p>Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use <a href="/docs/api/payment_methods/customer">Retrieve a Customer’s PaymentMethods</a></p>
   *
   * @param paymentMethod 
   * @param expand 
   * @param body 
   */
  async getPaymentMethodsPaymentMethod(params: {
    paymentMethod: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentMethod> {
    const path = `/v1/payment_methods/{payment_method}`.replace('{payment_method}', String(params.paymentMethod));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a PaymentMethod
   *
   * <p>Updates a PaymentMethod object. A PaymentMethod must be attached to a customer to be updated.</p>
   *
   * @param paymentMethod 
   * @param body 
   */
  async postPaymentMethodsPaymentMethod(params: {
    paymentMethod: string;
    body: PostPaymentMethodsPaymentMethodRequest;
  }): Promise<PaymentMethod> {
    const path = `/v1/payment_methods/{payment_method}`.replace('{payment_method}', String(params.paymentMethod));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Attach a PaymentMethod to a Customer
   *
   * <p>Attaches a PaymentMethod object to a Customer.</p>

<p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the <code>/v1/payment_methods/:id/attach</code>
endpoint without first using a SetupIntent or PaymentIntent with <code>setup_future_usage</code> does not optimize the PaymentMethod for
future use, which makes later declines and payment friction more likely.
See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up
future payments.</p>

<p>To use this PaymentMethod as the default for invoice or subscription payments,
set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
on the Customer to the PaymentMethod’s ID.</p>
   *
   * @param paymentMethod 
   * @param body 
   */
  async postPaymentMethodsPaymentMethodAttach(params: {
    paymentMethod: string;
    body: PostPaymentMethodsPaymentMethodAttachRequest;
  }): Promise<PaymentMethod> {
    const path = `/v1/payment_methods/{payment_method}/attach`.replace('{payment_method}', String(params.paymentMethod));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Detach a PaymentMethod from a Customer
   *
   * <p>Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.</p>
   *
   * @param paymentMethod 
   * @param body 
   */
  async postPaymentMethodsPaymentMethodDetach(params: {
    paymentMethod: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<PaymentMethod> {
    const path = `/v1/payment_methods/{payment_method}/detach`.replace('{payment_method}', String(params.paymentMethod));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report a payment
   *
   * <p>Report a new Payment Record. You may report a Payment Record as it is
 initialized and later report updates through the other report_* methods, or report Payment
 Records in a terminal state directly, through this method.</p>
   *
   * @param body 
   */
  async postPaymentRecordsReportPayment(params: {
    body: PostPaymentRecordsReportPaymentRequest;
  }): Promise<PaymentRecord> {
    const path = '/v1/payment_records/report_payment';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Payment Record
   *
   * <p>Retrieves a Payment Record with the given ID</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getPaymentRecordsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report a payment attempt
   *
   * <p>Report a new payment attempt on the specified Payment Record. A new payment
 attempt can only be specified if all other payment attempts are canceled or failed.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportPaymentAttempt(params: {
    id: string;
    body: PostPaymentRecordsIdReportPaymentAttemptRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_payment_attempt`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report payment attempt canceled
   *
   * <p>Report that the most recent payment attempt on the specified Payment Record
 was canceled.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportPaymentAttemptCanceled(params: {
    id: string;
    body: PostPaymentRecordsIdReportPaymentAttemptCanceledRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_payment_attempt_canceled`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report payment attempt failed
   *
   * <p>Report that the most recent payment attempt on the specified Payment Record
 failed or errored.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportPaymentAttemptFailed(params: {
    id: string;
    body: PostPaymentRecordsIdReportPaymentAttemptFailedRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_payment_attempt_failed`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report payment attempt guaranteed
   *
   * <p>Report that the most recent payment attempt on the specified Payment Record
 was guaranteed.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportPaymentAttemptGuaranteed(params: {
    id: string;
    body: PostPaymentRecordsIdReportPaymentAttemptGuaranteedRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_payment_attempt_guaranteed`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report payment attempt informational
   *
   * <p>Report informational updates on the specified Payment Record.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportPaymentAttemptInformational(params: {
    id: string;
    body: PostPaymentRecordsIdReportPaymentAttemptInformationalRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_payment_attempt_informational`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Report a refund
   *
   * <p>Report that the most recent payment attempt on the specified Payment Record
 was refunded.</p>
   *
   * @param id 
   * @param body 
   */
  async postPaymentRecordsIdReportRefund(params: {
    id: string;
    body: PostPaymentRecordsIdReportRefundRequest;
  }): Promise<PaymentRecord> {
    const path = `/v1/payment_records/{id}/report_refund`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all payouts
   *
   * <p>Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.</p>
   *
   * @param arrivalDate 
   * @param created 
   * @param destination 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getPayouts(params: {
    arrivalDate?: GetAccountsUnion;
    created?: GetAccountsUnion;
    destination?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetPayoutsResponse> {
    const path = '/v1/payouts';
    const queryParams = new URLSearchParams();
    if (params.arrivalDate !== undefined) {
      queryParams.append('arrival_date', String(params.arrivalDate));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.destination !== undefined) {
      queryParams.append('destination', String(params.destination));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a payout
   *
   * <p>To send funds to your own bank account, create a new payout object. Your <a href="#balance">Stripe balance</a> must cover the payout amount. If it doesn’t, you receive an “Insufficient Funds” error.</p>

<p>If your API key is in test mode, money won’t actually be sent, though every other action occurs as if you’re in live mode.</p>

<p>If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>
   *
   * @param body 
   */
  async postPayouts(params: {
    body: PostPayoutsRequest;
  }): Promise<Payout> {
    const path = '/v1/payouts';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a payout
   *
   * <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.</p>
   *
   * @param payout 
   * @param expand 
   * @param body 
   */
  async getPayoutsPayout(params: {
    payout: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Payout> {
    const path = `/v1/payouts/{payout}`.replace('{payout}', String(params.payout));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a payout
   *
   * <p>Updates the specified payout by setting the values of the parameters you pass. We don’t change parameters that you don’t provide. This request only accepts the metadata as arguments.</p>
   *
   * @param payout 
   * @param body 
   */
  async postPayoutsPayout(params: {
    payout: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<Payout> {
    const path = `/v1/payouts/{payout}`.replace('{payout}', String(params.payout));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a payout
   *
   * <p>You can cancel a previously created payout if its status is <code>pending</code>. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.</p>
   *
   * @param payout 
   * @param body 
   */
  async postPayoutsPayoutCancel(params: {
    payout: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Payout> {
    const path = `/v1/payouts/{payout}/cancel`.replace('{payout}', String(params.payout));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reverse a payout
   *
   * <p>Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US and Canadian bank accounts. If the payout is manual and in the <code>pending</code> status, use <code>/v1/payouts/:id/cancel</code> instead.</p>

<p>By requesting a reversal through <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.</p>
   *
   * @param payout 
   * @param body 
   */
  async postPayoutsPayoutReverse(params: {
    payout: string;
    body: PostIssuingSettlementsSettlementRequest;
  }): Promise<Payout> {
    const path = `/v1/payouts/{payout}/reverse`.replace('{payout}', String(params.payout));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all plans
   *
   * <p>Returns a list of your plans.</p>
   *
   * @param active 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param product 
   * @param startingAfter 
   * @param body 
   */
  async getPlans(params: {
    active?: boolean;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    product?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPlansResponse> {
    const path = '/v1/plans';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.product !== undefined) {
      queryParams.append('product', String(params.product));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a plan
   *
   * <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
   *
   * @param body 
   */
  async postPlans(params: {
    body: PostPlansRequest;
  }): Promise<Plan> {
    const path = '/v1/plans';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a plan
   *
   * <p>Retrieves the plan with the given ID.</p>
   *
   * @param plan 
   * @param expand 
   * @param body 
   */
  async getPlansPlan(params: {
    plan: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Plan> {
    const path = `/v1/plans/{plan}`.replace('{plan}', String(params.plan));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a plan
   *
   * <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>
   *
   * @param plan 
   * @param body 
   */
  async postPlansPlan(params: {
    plan: string;
    body: PostPlansPlanRequest;
  }): Promise<Plan> {
    const path = `/v1/plans/{plan}`.replace('{plan}', String(params.plan));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a plan
   *
   * <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
   *
   * @param plan 
   * @param body 
   */
  async deletePlansPlan(params: {
    plan: string;
    body: GetAccountRequest;
  }): Promise<DeletedPlan> {
    const path = `/v1/plans/{plan}`.replace('{plan}', String(params.plan));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all prices
   *
   * <p>Returns a list of your active prices, excluding <a href="/docs/products-prices/pricing-models#inline-pricing">inline prices</a>. For the list of inactive prices, set <code>active</code> to false.</p>
   *
   * @param active 
   * @param created 
   * @param currency 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param lookupKeys 
   * @param product 
   * @param recurring 
   * @param startingAfter 
   * @param type 
   * @param body 
   */
  async getPrices(params: {
    active?: boolean;
    created?: GetAccountsUnion;
    currency?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    lookupKeys?: Array<string>;
    product?: string;
    recurring?: GetPricesObject;
    startingAfter?: string;
    type?: string;
    body: GetAccountRequest;
  }): Promise<GetPricesResponse> {
    const path = '/v1/prices';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.currency !== undefined) {
      queryParams.append('currency', String(params.currency));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.lookupKeys !== undefined) {
      queryParams.append('lookup_keys', String(params.lookupKeys));
    }
    if (params.product !== undefined) {
      queryParams.append('product', String(params.product));
    }
    if (params.recurring !== undefined) {
      queryParams.append('recurring', String(params.recurring));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.type !== undefined) {
      queryParams.append('type', String(params.type));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a price
   *
   * <p>Creates a new <a href="https://docs.stripe.com/api/prices">Price</a> for an existing <a href="https://docs.stripe.com/api/products">Product</a>. The Price can be recurring or one-time.</p>
   *
   * @param body 
   */
  async postPrices(params: {
    body: PostPricesRequest;
  }): Promise<Price> {
    const path = '/v1/prices';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search prices
   *
   * <p>Search for prices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getPricesSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetPricesSearchResponse> {
    const path = '/v1/prices/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a price
   *
   * <p>Retrieves the price with the given ID.</p>
   *
   * @param price 
   * @param expand 
   * @param body 
   */
  async getPricesPrice(params: {
    price: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Price> {
    const path = `/v1/prices/{price}`.replace('{price}', String(params.price));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a price
   *
   * <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
   *
   * @param price 
   * @param body 
   */
  async postPricesPrice(params: {
    price: string;
    body: PostPricesPriceRequest;
  }): Promise<Price> {
    const path = `/v1/prices/{price}`.replace('{price}', String(params.price));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all products
   *
   * <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
   *
   * @param active 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param ids 
   * @param limit 
   * @param shippable 
   * @param startingAfter 
   * @param url 
   * @param body 
   */
  async getProducts(params: {
    active?: boolean;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    ids?: Array<string>;
    limit?: number;
    shippable?: boolean;
    startingAfter?: string;
    url?: string;
    body: GetAccountRequest;
  }): Promise<GetProductsResponse> {
    const path = '/v1/products';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.ids !== undefined) {
      queryParams.append('ids', String(params.ids));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.shippable !== undefined) {
      queryParams.append('shippable', String(params.shippable));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.url !== undefined) {
      queryParams.append('url', String(params.url));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a product
   *
   * <p>Creates a new product object.</p>
   *
   * @param body 
   */
  async postProducts(params: {
    body: PostProductsRequest;
  }): Promise<Product> {
    const path = '/v1/products';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search products
   *
   * <p>Search for products you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getProductsSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetProductsSearchResponse> {
    const path = '/v1/products/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a product
   *
   * <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getProductsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Product> {
    const path = `/v1/products/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a product
   *
   * <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param id 
   * @param body 
   */
  async postProductsId(params: {
    id: string;
    body: PostProductsIdRequest;
  }): Promise<Product> {
    const path = `/v1/products/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a product
   *
   * <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
   *
   * @param id 
   * @param body 
   */
  async deleteProductsId(params: {
    id: string;
    body: GetAccountRequest;
  }): Promise<DeletedProduct> {
    const path = `/v1/products/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all features attached to a product
   *
   * <p>Retrieve a list of features for a product</p>
   *
   * @param product 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getProductsProductFeatures(params: {
    product: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetProductsProductFeaturesResponse> {
    const path = `/v1/products/{product}/features`.replace('{product}', String(params.product));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Attach a feature to a product
   *
   * <p>Creates a product_feature, which represents a feature attachment to a product</p>
   *
   * @param product 
   * @param body 
   */
  async postProductsProductFeatures(params: {
    product: string;
    body: PostProductsProductFeaturesRequest;
  }): Promise<ProductFeature> {
    const path = `/v1/products/{product}/features`.replace('{product}', String(params.product));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a product_feature
   *
   * <p>Retrieves a product_feature, which represents a feature attachment to a product</p>
   *
   * @param id 
   * @param product 
   * @param expand 
   * @param body 
   */
  async getProductsProductFeaturesId(params: {
    id: string;
    product: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ProductFeature> {
    const path = `/v1/products/{product}/features/{id}`.replace('{id}', String(params.id)).replace('{product}', String(params.product));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Remove a feature from a product
   *
   * <p>Deletes the feature attachment to a product</p>
   *
   * @param id 
   * @param product 
   * @param body 
   */
  async deleteProductsProductFeaturesId(params: {
    id: string;
    product: string;
    body: GetAccountRequest;
  }): Promise<DeletedProductFeature> {
    const path = `/v1/products/{product}/features/{id}`.replace('{id}', String(params.id)).replace('{product}', String(params.product));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all promotion codes
   *
   * <p>Returns a list of your promotion codes.</p>
   *
   * @param active 
   * @param code 
   * @param coupon 
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getPromotionCodes(params: {
    active?: boolean;
    code?: string;
    coupon?: string;
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetPromotionCodesResponse> {
    const path = '/v1/promotion_codes';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.code !== undefined) {
      queryParams.append('code', String(params.code));
    }
    if (params.coupon !== undefined) {
      queryParams.append('coupon', String(params.coupon));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a promotion code
   *
   * <p>A promotion code points to an underlying promotion. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
   *
   * @param body 
   */
  async postPromotionCodes(params: {
    body: PostPromotionCodesRequest;
  }): Promise<PromotionCode> {
    const path = '/v1/promotion_codes';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a promotion code
   *
   * <p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>
   *
   * @param promotionCode 
   * @param expand 
   * @param body 
   */
  async getPromotionCodesPromotionCode(params: {
    promotionCode: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<PromotionCode> {
    const path = `/v1/promotion_codes/{promotion_code}`.replace('{promotion_code}', String(params.promotionCode));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a promotion code
   *
   * <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
   *
   * @param promotionCode 
   * @param body 
   */
  async postPromotionCodesPromotionCode(params: {
    promotionCode: string;
    body: PostPromotionCodesPromotionCodeRequest;
  }): Promise<PromotionCode> {
    const path = `/v1/promotion_codes/{promotion_code}`.replace('{promotion_code}', String(params.promotionCode));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all quotes
   *
   * <p>Returns a list of your quotes.</p>
   *
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param testClock 
   * @param body 
   */
  async getQuotes(params: {
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    testClock?: string;
    body: GetAccountRequest;
  }): Promise<GetQuotesResponse> {
    const path = '/v1/quotes';
    const queryParams = new URLSearchParams();
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.testClock !== undefined) {
      queryParams.append('test_clock', String(params.testClock));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a quote
   *
   * <p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>
   *
   * @param body 
   */
  async postQuotes(params: {
    body: PostQuotesRequest;
  }): Promise<Quote> {
    const path = '/v1/quotes';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a quote
   *
   * <p>Retrieves the quote with the given ID.</p>
   *
   * @param quote 
   * @param expand 
   * @param body 
   */
  async getQuotesQuote(params: {
    quote: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Quote> {
    const path = `/v1/quotes/{quote}`.replace('{quote}', String(params.quote));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a quote
   *
   * <p>A quote models prices and services for a customer.</p>
   *
   * @param quote 
   * @param body 
   */
  async postQuotesQuote(params: {
    quote: string;
    body: PostQuotesQuoteRequest;
  }): Promise<Quote> {
    const path = `/v1/quotes/{quote}`.replace('{quote}', String(params.quote));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Accept a quote
   *
   * <p>Accepts the specified quote.</p>
   *
   * @param quote 
   * @param body 
   */
  async postQuotesQuoteAccept(params: {
    quote: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Quote> {
    const path = `/v1/quotes/{quote}/accept`.replace('{quote}', String(params.quote));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a quote
   *
   * <p>Cancels the quote.</p>
   *
   * @param quote 
   * @param body 
   */
  async postQuotesQuoteCancel(params: {
    quote: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Quote> {
    const path = `/v1/quotes/{quote}/cancel`.replace('{quote}', String(params.quote));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a quote's upfront line items
   *
   * <p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>
   *
   * @param quote 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getQuotesQuoteComputedUpfrontLineItems(params: {
    quote: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetQuotesQuoteComputedUpfrontLineItemsResponse> {
    const path = `/v1/quotes/{quote}/computed_upfront_line_items`.replace('{quote}', String(params.quote));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Finalize a quote
   *
   * <p>Finalizes the quote.</p>
   *
   * @param quote 
   * @param body 
   */
  async postQuotesQuoteFinalize(params: {
    quote: string;
    body: PostQuotesQuoteFinalizeRequest;
  }): Promise<Quote> {
    const path = `/v1/quotes/{quote}/finalize`.replace('{quote}', String(params.quote));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a quote's line items
   *
   * <p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * @param quote 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getQuotesQuoteLineItems(params: {
    quote: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetQuotesQuoteComputedUpfrontLineItemsResponse> {
    const path = `/v1/quotes/{quote}/line_items`.replace('{quote}', String(params.quote));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Download quote PDF
   *
   * <p>Download the PDF for a finalized quote. Explanation for special handling can be found <a href="https://docs.stripe.com/quotes/overview#quote_pdf">here</a></p>
   *
   * @param quote 
   * @param expand 
   * @param body 
   */
  async getQuotesQuotePdf(params: {
    quote: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<string> {
    const path = `/v1/quotes/{quote}/pdf`.replace('{quote}', String(params.quote));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all early fraud warnings
   *
   * <p>Returns a list of early fraud warnings.</p>
   *
   * @param charge 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentIntent 
   * @param startingAfter 
   * @param body 
   */
  async getRadarEarlyFraudWarnings(params: {
    charge?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetRadarEarlyFraudWarningsResponse> {
    const path = '/v1/radar/early_fraud_warnings';
    const queryParams = new URLSearchParams();
    if (params.charge !== undefined) {
      queryParams.append('charge', String(params.charge));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an early fraud warning
   *
   * <p>Retrieves the details of an early fraud warning that has previously been created. </p>

<p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
   *
   * @param earlyFraudWarning 
   * @param expand 
   * @param body 
   */
  async getRadarEarlyFraudWarningsEarlyFraudWarning(params: {
    earlyFraudWarning: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<RadarEarlyFraudWarning> {
    const path = `/v1/radar/early_fraud_warnings/{early_fraud_warning}`.replace('{early_fraud_warning}', String(params.earlyFraudWarning));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all value list items
   *
   * <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param value 
   * @param valueList 
   * @param body 
   */
  async getRadarValueListItems(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    value?: string;
    valueList: string;
    body: GetAccountRequest;
  }): Promise<GetRadarValueListItemsResponse> {
    const path = '/v1/radar/value_list_items';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.value !== undefined) {
      queryParams.append('value', String(params.value));
    }
    if (params.valueList !== undefined) {
      queryParams.append('value_list', String(params.valueList));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a value list item
   *
   * <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
   *
   * @param body 
   */
  async postRadarValueListItems(params: {
    body: PostRadarValueListItemsRequest;
  }): Promise<RadarValueListItem> {
    const path = '/v1/radar/value_list_items';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a value list item
   *
   * <p>Retrieves a <code>ValueListItem</code> object.</p>
   *
   * @param item 
   * @param expand 
   * @param body 
   */
  async getRadarValueListItemsItem(params: {
    item: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<RadarValueListItem> {
    const path = `/v1/radar/value_list_items/{item}`.replace('{item}', String(params.item));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a value list item
   *
   * <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
   *
   * @param item 
   * @param body 
   */
  async deleteRadarValueListItemsItem(params: {
    item: string;
    body: GetAccountRequest;
  }): Promise<DeletedRadarValueListItem> {
    const path = `/v1/radar/value_list_items/{item}`.replace('{item}', String(params.item));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all value lists
   *
   * <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param alias 
   * @param contains 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getRadarValueLists(params: {
    alias?: string;
    contains?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetRadarValueListsResponse> {
    const path = '/v1/radar/value_lists';
    const queryParams = new URLSearchParams();
    if (params.alias !== undefined) {
      queryParams.append('alias', String(params.alias));
    }
    if (params.contains !== undefined) {
      queryParams.append('contains', String(params.contains));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a value list
   *
   * <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
   *
   * @param body 
   */
  async postRadarValueLists(params: {
    body: PostRadarValueListsRequest;
  }): Promise<RadarValueList> {
    const path = '/v1/radar/value_lists';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a value list
   *
   * <p>Retrieves a <code>ValueList</code> object.</p>
   *
   * @param valueList 
   * @param expand 
   * @param body 
   */
  async getRadarValueListsValueList(params: {
    valueList: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<RadarValueList> {
    const path = `/v1/radar/value_lists/{value_list}`.replace('{value_list}', String(params.valueList));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a value list
   *
   * <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>
   *
   * @param valueList 
   * @param body 
   */
  async postRadarValueListsValueList(params: {
    valueList: string;
    body: PostRadarValueListsValueListRequest;
  }): Promise<RadarValueList> {
    const path = `/v1/radar/value_lists/{value_list}`.replace('{value_list}', String(params.valueList));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a value list
   *
   * <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
   *
   * @param valueList 
   * @param body 
   */
  async deleteRadarValueListsValueList(params: {
    valueList: string;
    body: GetAccountRequest;
  }): Promise<DeletedRadarValueList> {
    const path = `/v1/radar/value_lists/{value_list}`.replace('{value_list}', String(params.valueList));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all refunds
   *
   * <p>Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.</p>
   *
   * @param charge 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentIntent 
   * @param startingAfter 
   * @param body 
   */
  async getRefunds(params: {
    charge?: string;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetRefundsResponse> {
    const path = '/v1/refunds';
    const queryParams = new URLSearchParams();
    if (params.charge !== undefined) {
      queryParams.append('charge', String(params.charge));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create customer balance refund
   *
   * <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can’t be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p>
   *
   * @param body 
   */
  async postRefunds(params: {
    body: PostRefundsRequest;
  }): Promise<Refund> {
    const path = '/v1/refunds';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a refund
   *
   * <p>Retrieves the details of an existing refund.</p>
   *
   * @param refund 
   * @param expand 
   * @param body 
   */
  async getRefundsRefund(params: {
    refund: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Refund> {
    const path = `/v1/refunds/{refund}`.replace('{refund}', String(params.refund));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a refund
   *
   * <p>Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don’t provide remain unchanged.</p>

<p>This request only accepts <code>metadata</code> as an argument.</p>
   *
   * @param refund 
   * @param body 
   */
  async postRefundsRefund(params: {
    refund: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<Refund> {
    const path = `/v1/refunds/{refund}`.replace('{refund}', String(params.refund));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a refund
   *
   * <p>Cancels a refund with a status of <code>requires_action</code>.</p>

<p>You can’t cancel refunds in other states. Only refunds for payment methods that require customer action can enter the <code>requires_action</code> state.</p>
   *
   * @param refund 
   * @param body 
   */
  async postRefundsRefundCancel(params: {
    refund: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Refund> {
    const path = `/v1/refunds/{refund}/cancel`.replace('{refund}', String(params.refund));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Report Runs
   *
   * <p>Returns a list of Report Runs, with the most recent appearing first.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getReportingReportRuns(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetReportingReportRunsResponse> {
    const path = '/v1/reporting/report_runs';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Report Run
   *
   * <p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
   *
   * @param body 
   */
  async postReportingReportRuns(params: {
    body: PostReportingReportRunsRequest;
  }): Promise<ReportingReportRun> {
    const path = '/v1/reporting/report_runs';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Report Run
   *
   * <p>Retrieves the details of an existing Report Run.</p>
   *
   * @param reportRun 
   * @param expand 
   * @param body 
   */
  async getReportingReportRunsReportRun(params: {
    reportRun: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ReportingReportRun> {
    const path = `/v1/reporting/report_runs/{report_run}`.replace('{report_run}', String(params.reportRun));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Report Types
   *
   * <p>Returns a full list of Report Types.</p>
   *
   * @param expand 
   * @param body 
   */
  async getReportingReportTypes(params: {
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetReportingReportTypesResponse> {
    const path = '/v1/reporting/report_types';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Report Type
   *
   * <p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
   *
   * @param reportType 
   * @param expand 
   * @param body 
   */
  async getReportingReportTypesReportType(params: {
    reportType: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ReportingReportType> {
    const path = `/v1/reporting/report_types/{report_type}`.replace('{report_type}', String(params.reportType));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all open reviews
   *
   * <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getReviews(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetReviewsResponse> {
    const path = '/v1/reviews';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a review
   *
   * <p>Retrieves a <code>Review</code> object.</p>
   *
   * @param review 
   * @param expand 
   * @param body 
   */
  async getReviewsReview(params: {
    review: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Review> {
    const path = `/v1/reviews/{review}`.replace('{review}', String(params.review));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Approve a review
   *
   * <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>
   *
   * @param review 
   * @param body 
   */
  async postReviewsReviewApprove(params: {
    review: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Review> {
    const path = `/v1/reviews/{review}/approve`.replace('{review}', String(params.review));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all SetupAttempts
   *
   * <p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param setupIntent 
   * @param startingAfter 
   * @param body 
   */
  async getSetupAttempts(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    setupIntent: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetSetupAttemptsResponse> {
    const path = '/v1/setup_attempts';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.setupIntent !== undefined) {
      queryParams.append('setup_intent', String(params.setupIntent));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all SetupIntents
   *
   * <p>Returns a list of SetupIntents.</p>
   *
   * @param attachToSelf 
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param paymentMethod 
   * @param startingAfter 
   * @param body 
   */
  async getSetupIntents(params: {
    attachToSelf?: boolean;
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    paymentMethod?: string;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetSetupIntentsResponse> {
    const path = '/v1/setup_intents';
    const queryParams = new URLSearchParams();
    if (params.attachToSelf !== undefined) {
      queryParams.append('attach_to_self', String(params.attachToSelf));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.paymentMethod !== undefined) {
      queryParams.append('payment_method', String(params.paymentMethod));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a SetupIntent
   *
   * <p>Creates a SetupIntent object.</p>

<p>After you create the SetupIntent, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
it to collect any required permissions to charge the payment method later.</p>
   *
   * @param body 
   */
  async postSetupIntents(params: {
    body: PostSetupIntentsRequest;
  }): Promise<SetupIntent> {
    const path = '/v1/setup_intents';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a SetupIntent
   *
   * <p>Retrieves the details of a SetupIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>
   *
   * @param intent 
   * @param clientSecret 
   * @param expand 
   * @param body 
   */
  async getSetupIntentsIntent(params: {
    intent: string;
    clientSecret?: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<SetupIntent> {
    const path = `/v1/setup_intents/{intent}`.replace('{intent}', String(params.intent));
    const queryParams = new URLSearchParams();
    if (params.clientSecret !== undefined) {
      queryParams.append('client_secret', String(params.clientSecret));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a SetupIntent
   *
   * <p>Updates a SetupIntent object.</p>
   *
   * @param intent 
   * @param body 
   */
  async postSetupIntentsIntent(params: {
    intent: string;
    body: PostSetupIntentsIntentRequest;
  }): Promise<SetupIntent> {
    const path = `/v1/setup_intents/{intent}`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a SetupIntent
   *
   * <p>You can cancel a SetupIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can’t cancel the SetupIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
   *
   * @param intent 
   * @param body 
   */
  async postSetupIntentsIntentCancel(params: {
    intent: string;
    body: PostSetupIntentsIntentCancelRequest;
  }): Promise<SetupIntent> {
    const path = `/v1/setup_intents/{intent}/cancel`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Confirm a SetupIntent
   *
   * <p>Confirm that your customer intends to set up the current or
provided payment method. For example, you would confirm a SetupIntent
when a customer hits the “Save” button on a payment method management
page on your website.</p>

<p>If the selected payment method does not require any additional
steps from the customer, the SetupIntent will transition to the
<code>succeeded</code> status.</p>

<p>Otherwise, it will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If setup fails,
the SetupIntent will transition to the
<code>requires_payment_method</code> status or the <code>canceled</code> status if the
confirmation limit is reached.</p>
   *
   * @param intent 
   * @param body 
   */
  async postSetupIntentsIntentConfirm(params: {
    intent: string;
    body: PostSetupIntentsIntentConfirmRequest;
  }): Promise<SetupIntent> {
    const path = `/v1/setup_intents/{intent}/confirm`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Verify microdeposits on a SetupIntent
   *
   * <p>Verifies microdeposits on a SetupIntent object.</p>
   *
   * @param intent 
   * @param body 
   */
  async postSetupIntentsIntentVerifyMicrodeposits(params: {
    intent: string;
    body: PostSetupIntentsIntentVerifyMicrodepositsRequest;
  }): Promise<SetupIntent> {
    const path = `/v1/setup_intents/{intent}/verify_microdeposits`.replace('{intent}', String(params.intent));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all shipping rates
   *
   * <p>Returns a list of your shipping rates.</p>
   *
   * @param active 
   * @param created 
   * @param currency 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getShippingRates(params: {
    active?: boolean;
    created?: GetAccountsUnion;
    currency?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetShippingRatesResponse> {
    const path = '/v1/shipping_rates';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.currency !== undefined) {
      queryParams.append('currency', String(params.currency));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a shipping rate
   *
   * <p>Creates a new shipping rate object.</p>
   *
   * @param body 
   */
  async postShippingRates(params: {
    body: PostShippingRatesRequest;
  }): Promise<ShippingRate> {
    const path = '/v1/shipping_rates';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a shipping rate
   *
   * <p>Returns the shipping rate object with the given ID.</p>
   *
   * @param shippingRateToken 
   * @param expand 
   * @param body 
   */
  async getShippingRatesShippingRateToken(params: {
    shippingRateToken: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ShippingRate> {
    const path = `/v1/shipping_rates/{shipping_rate_token}`.replace('{shipping_rate_token}', String(params.shippingRateToken));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a shipping rate
   *
   * <p>Updates an existing shipping rate object.</p>
   *
   * @param shippingRateToken 
   * @param body 
   */
  async postShippingRatesShippingRateToken(params: {
    shippingRateToken: string;
    body: PostShippingRatesShippingRateTokenRequest;
  }): Promise<ShippingRate> {
    const path = `/v1/shipping_rates/{shipping_rate_token}`.replace('{shipping_rate_token}', String(params.shippingRateToken));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update an existing Sigma Query
   *
   * <p>Update an existing Sigma query that previously exists</p>
   *
   * @param id 
   * @param body 
   */
  async postSigmaSavedQueriesId(params: {
    id: string;
    body: PostSigmaSavedQueriesIdRequest;
  }): Promise<SigmaSigmaApiQuery> {
    const path = `/v1/sigma/saved_queries/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all scheduled query runs
   *
   * <p>Returns a list of scheduled query runs.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getSigmaScheduledQueryRuns(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetSigmaScheduledQueryRunsResponse> {
    const path = '/v1/sigma/scheduled_query_runs';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a scheduled query run
   *
   * <p>Retrieves the details of an scheduled query run.</p>
   *
   * @param scheduledQueryRun 
   * @param expand 
   * @param body 
   */
  async getSigmaScheduledQueryRunsScheduledQueryRun(params: {
    scheduledQueryRun: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<ScheduledQueryRun> {
    const path = `/v1/sigma/scheduled_query_runs/{scheduled_query_run}`.replace('{scheduled_query_run}', String(params.scheduledQueryRun));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Shares a source
   *
   * <p>Creates a new source object.</p>
   *
   * @param body 
   */
  async postSources(params: {
    body: PostSourcesRequest;
  }): Promise<Source> {
    const path = '/v1/sources';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a source
   *
   * <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
   *
   * @param source 
   * @param clientSecret 
   * @param expand 
   * @param body 
   */
  async getSourcesSource(params: {
    source: string;
    clientSecret?: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Source> {
    const path = `/v1/sources/{source}`.replace('{source}', String(params.source));
    const queryParams = new URLSearchParams();
    if (params.clientSecret !== undefined) {
      queryParams.append('client_secret', String(params.clientSecret));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a source
   *
   * <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
   *
   * @param source 
   * @param body 
   */
  async postSourcesSource(params: {
    source: string;
    body: PostSourcesSourceRequest;
  }): Promise<Source> {
    const path = `/v1/sources/{source}`.replace('{source}', String(params.source));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Source MandateNotification
   *
   * <p>Retrieves a new Source MandateNotification.</p>
   *
   * @param mandateNotification 
   * @param source 
   * @param expand 
   * @param body 
   */
  async getSourcesSourceMandateNotificationsMandateNotification(params: {
    mandateNotification: string;
    source: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<SourceMandateNotification> {
    const path = `/v1/sources/{source}/mandate_notifications/{mandate_notification}`.replace('{mandate_notification}', String(params.mandateNotification)).replace('{source}', String(params.source));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async getSourcesSourceSourceTransactions(params: {
    source: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetSourcesSourceSourceTransactionsResponse> {
    const path = `/v1/sources/{source}/source_transactions`.replace('{source}', String(params.source));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a source transaction
   *
   * <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>
   *
   * @param source 
   * @param sourceTransaction 
   * @param expand 
   * @param body 
   */
  async getSourcesSourceSourceTransactionsSourceTransaction(params: {
    source: string;
    sourceTransaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<SourceTransaction> {
    const path = `/v1/sources/{source}/source_transactions/{source_transaction}`.replace('{source}', String(params.source)).replace('{source_transaction}', String(params.sourceTransaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  async postSourcesSourceVerify(params: {
    source: string;
    body: PostSourcesSourceVerifyRequest;
  }): Promise<Source> {
    const path = `/v1/sources/{source}/verify`.replace('{source}', String(params.source));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all subscription items
   *
   * <p>Returns a list of your subscription items for a given subscription.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param subscription 
   * @param body 
   */
  async getSubscriptionItems(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    subscription: string;
    body: GetAccountRequest;
  }): Promise<GetSubscriptionItemsResponse> {
    const path = '/v1/subscription_items';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.subscription !== undefined) {
      queryParams.append('subscription', String(params.subscription));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a subscription item
   *
   * <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
   *
   * @param body 
   */
  async postSubscriptionItems(params: {
    body: PostSubscriptionItemsRequest;
  }): Promise<SubscriptionItem> {
    const path = '/v1/subscription_items';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a subscription item
   *
   * <p>Retrieves the subscription item with the given ID.</p>
   *
   * @param item 
   * @param expand 
   * @param body 
   */
  async getSubscriptionItemsItem(params: {
    item: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<SubscriptionItem> {
    const path = `/v1/subscription_items/{item}`.replace('{item}', String(params.item));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a subscription item
   *
   * <p>Updates the plan or quantity of an item on a current subscription.</p>
   *
   * @param item 
   * @param body 
   */
  async postSubscriptionItemsItem(params: {
    item: string;
    body: PostSubscriptionItemsItemRequest;
  }): Promise<SubscriptionItem> {
    const path = `/v1/subscription_items/{item}`.replace('{item}', String(params.item));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a subscription item
   *
   * <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
   *
   * @param item 
   * @param body 
   */
  async deleteSubscriptionItemsItem(params: {
    item: string;
    body: DeleteSubscriptionItemsItemRequest;
  }): Promise<DeletedSubscriptionItem> {
    const path = `/v1/subscription_items/{item}`.replace('{item}', String(params.item));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all schedules
   *
   * <p>Retrieves the list of your subscription schedules.</p>
   *
   * @param canceledAt 
   * @param completedAt 
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param releasedAt 
   * @param scheduled 
   * @param startingAfter 
   * @param body 
   */
  async getSubscriptionSchedules(params: {
    canceledAt?: GetAccountsUnion;
    completedAt?: GetAccountsUnion;
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    releasedAt?: GetAccountsUnion;
    scheduled?: boolean;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetSubscriptionSchedulesResponse> {
    const path = '/v1/subscription_schedules';
    const queryParams = new URLSearchParams();
    if (params.canceledAt !== undefined) {
      queryParams.append('canceled_at', String(params.canceledAt));
    }
    if (params.completedAt !== undefined) {
      queryParams.append('completed_at', String(params.completedAt));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.releasedAt !== undefined) {
      queryParams.append('released_at', String(params.releasedAt));
    }
    if (params.scheduled !== undefined) {
      queryParams.append('scheduled', String(params.scheduled));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a schedule
   *
   * <p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>
   *
   * @param body 
   */
  async postSubscriptionSchedules(params: {
    body: PostSubscriptionSchedulesRequest;
  }): Promise<SubscriptionSchedule> {
    const path = '/v1/subscription_schedules';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a schedule
   *
   * <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
   *
   * @param schedule 
   * @param expand 
   * @param body 
   */
  async getSubscriptionSchedulesSchedule(params: {
    schedule: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<SubscriptionSchedule> {
    const path = `/v1/subscription_schedules/{schedule}`.replace('{schedule}', String(params.schedule));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a schedule
   *
   * <p>Updates an existing subscription schedule.</p>
   *
   * @param schedule 
   * @param body 
   */
  async postSubscriptionSchedulesSchedule(params: {
    schedule: string;
    body: PostSubscriptionSchedulesScheduleRequest;
  }): Promise<SubscriptionSchedule> {
    const path = `/v1/subscription_schedules/{schedule}`.replace('{schedule}', String(params.schedule));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a schedule
   *
   * <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
   *
   * @param schedule 
   * @param body 
   */
  async postSubscriptionSchedulesScheduleCancel(params: {
    schedule: string;
    body: PostSubscriptionSchedulesScheduleCancelRequest;
  }): Promise<SubscriptionSchedule> {
    const path = `/v1/subscription_schedules/{schedule}/cancel`.replace('{schedule}', String(params.schedule));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Release a schedule
   *
   * <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
   *
   * @param schedule 
   * @param body 
   */
  async postSubscriptionSchedulesScheduleRelease(params: {
    schedule: string;
    body: PostSubscriptionSchedulesScheduleReleaseRequest;
  }): Promise<SubscriptionSchedule> {
    const path = `/v1/subscription_schedules/{schedule}/release`.replace('{schedule}', String(params.schedule));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List subscriptions
   *
   * <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
   *
   * @param automaticTax 
   * @param collectionMethod 
   * @param created 
   * @param currentPeriodEnd 
   * @param currentPeriodStart 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param price 
   * @param startingAfter 
   * @param status 
   * @param testClock 
   * @param body 
   */
  async getSubscriptions(params: {
    automaticTax?: GetSubscriptionsObject;
    collectionMethod?: string;
    created?: GetAccountsUnion;
    currentPeriodEnd?: GetAccountsUnion;
    currentPeriodStart?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    price?: string;
    startingAfter?: string;
    status?: string;
    testClock?: string;
    body: GetAccountRequest;
  }): Promise<GetSubscriptionsResponse> {
    const path = '/v1/subscriptions';
    const queryParams = new URLSearchParams();
    if (params.automaticTax !== undefined) {
      queryParams.append('automatic_tax', String(params.automaticTax));
    }
    if (params.collectionMethod !== undefined) {
      queryParams.append('collection_method', String(params.collectionMethod));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.currentPeriodEnd !== undefined) {
      queryParams.append('current_period_end', String(params.currentPeriodEnd));
    }
    if (params.currentPeriodStart !== undefined) {
      queryParams.append('current_period_start', String(params.currentPeriodStart));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.price !== undefined) {
      queryParams.append('price', String(params.price));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.testClock !== undefined) {
      queryParams.append('test_clock', String(params.testClock));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a subscription
   *
   * <p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>

<p>When you create a subscription with <code>collection_method=charge_automatically</code>, the first invoice is finalized as part of the request.
The <code>payment_behavior</code> parameter determines the exact behavior of the initial payment.</p>

<p>To start subscriptions where the first invoice always begins in a <code>draft</code> status, use <a href="/docs/billing/subscriptions/subscription-schedules#managing">subscription schedules</a> instead.
Schedules provide the flexibility to model more complex billing configurations that change over time.</p>
   *
   * @param body 
   */
  async postSubscriptions(params: {
    body: PostSubscriptionsRequest;
  }): Promise<Subscription> {
    const path = '/v1/subscriptions';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Search subscriptions
   *
   * <p>Search for subscriptions you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * @param expand 
   * @param limit 
   * @param page 
   * @param query 
   * @param body 
   */
  async getSubscriptionsSearch(params: {
    expand?: Array<string>;
    limit?: number;
    page?: string;
    query: string;
    body: GetAccountRequest;
  }): Promise<GetSubscriptionsSearchResponse> {
    const path = '/v1/subscriptions/search';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.query !== undefined) {
      queryParams.append('query', String(params.query));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a subscription
   *
   * <p>Retrieves the subscription with the given ID.</p>
   *
   * @param subscriptionExposedId 
   * @param expand 
   * @param body 
   */
  async getSubscriptionsSubscriptionExposedId(params: {
    subscriptionExposedId: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Subscription> {
    const path = `/v1/subscriptions/{subscription_exposed_id}`.replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a subscription
   *
   * <p>Updates an existing subscription to match the specified parameters.
When changing prices or quantities, we optionally prorate the price we charge next month to make up for any price changes.
To preview how the proration is calculated, use the <a href="/docs/api/invoices/create_preview">create preview</a> endpoint.</p>

<p>By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a <currency>100</currency> price, they’ll be billed <currency>100</currency> immediately. If on May 15 they switch to a <currency>200</currency> price, then on June 1 they’ll be billed <currency>250</currency> (<currency>200</currency> for a renewal of her subscription, plus a <currency>50</currency> prorating adjustment for half of the previous month’s <currency>100</currency> difference). Similarly, a downgrade generates a credit that is applied to the next invoice. We also prorate when you make quantity changes.</p>

<p>Switching prices does not normally change the billing date or generate an immediate charge unless:</p>

<ul>
<li>The billing interval is changed (for example, from monthly to yearly).</li>
<li>The subscription moves from free to paid.</li>
<li>A trial starts or ends.</li>
</ul>

<p>In these cases, we apply a credit for the unused time on the previous price, immediately charge the customer using the new price, and reset the billing date. Learn about how <a href="/docs/billing/subscriptions/upgrade-downgrade#immediate-payment">Stripe immediately attempts payment for subscription changes</a>.</p>

<p>If you want to charge for an upgrade immediately, pass <code>proration_behavior</code> as <code>always_invoice</code> to create prorations, automatically invoice the customer for those proration adjustments, and attempt to collect payment. If you pass <code>create_prorations</code>, the prorations are created but not automatically invoiced. If you want to bill the customer for the prorations before the subscription’s renewal date, you need to manually <a href="/docs/api/invoices/create">invoice the customer</a>.</p>

<p>If you don’t want to prorate, set the <code>proration_behavior</code> option to <code>none</code>. With this option, the customer is billed <currency>100</currency> on May 1 and <currency>200</currency> on June 1. Similarly, if you set <code>proration_behavior</code> to <code>none</code> when switching between different billing intervals (for example, from monthly to yearly), we don’t generate any credits for the old subscription’s unused time. We still reset the billing date and bill immediately for the new subscription.</p>

<p>Updating the quantity on a subscription many times in an hour may result in <a href="/docs/rate-limits">rate limiting</a>. If you need to bill for a frequently changing quantity, consider integrating <a href="/docs/billing/subscriptions/usage-based">usage-based billing</a> instead.</p>
   *
   * @param subscriptionExposedId 
   * @param body 
   */
  async postSubscriptionsSubscriptionExposedId(params: {
    subscriptionExposedId: string;
    body: PostSubscriptionsSubscriptionExposedIdRequest;
  }): Promise<Subscription> {
    const path = `/v1/subscriptions/{subscription_exposed_id}`.replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a subscription
   *
   * <p>Cancels a customer’s subscription immediately. The customer won’t be charged again for the subscription. After it’s canceled, you can no longer update the subscription or its <a href="/metadata">metadata</a>.</p>

<p>Any pending invoice items that you’ve created are still charged at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations are also left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations are removed if <code>invoice_now</code> and <code>prorate</code> are both set to true.</p>

<p>By default, upon subscription cancellation, Stripe stops automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
   *
   * @param subscriptionExposedId 
   * @param body 
   */
  async deleteSubscriptionsSubscriptionExposedId(params: {
    subscriptionExposedId: string;
    body: DeleteSubscriptionsSubscriptionExposedIdRequest;
  }): Promise<Subscription> {
    const path = `/v1/subscriptions/{subscription_exposed_id}`.replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a subscription discount
   *
   * <p>Removes the currently applied discount on a subscription.</p>
   *
   * @param subscriptionExposedId 
   * @param body 
   */
  async deleteSubscriptionsSubscriptionExposedIdDiscount(params: {
    subscriptionExposedId: string;
    body: GetAccountRequest;
  }): Promise<DeletedDiscount> {
    const path = `/v1/subscriptions/{subscription_exposed_id}/discount`.replace('{subscription_exposed_id}', String(params.subscriptionExposedId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Migrate a subscription
   *
   * <p>Upgrade the billing_mode of an existing subscription.</p>
   *
   * @param subscription 
   * @param body 
   */
  async postSubscriptionsSubscriptionMigrate(params: {
    subscription: string;
    body: PostSubscriptionsSubscriptionMigrateRequest;
  }): Promise<Subscription> {
    const path = `/v1/subscriptions/{subscription}/migrate`.replace('{subscription}', String(params.subscription));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Resume a subscription
   *
   * <p>Initiates resumption of a paused subscription, optionally resetting the billing cycle anchor and creating prorations. If a resumption invoice is generated, it must be paid or marked uncollectible before the subscription will be unpaused. If payment succeeds the subscription will become <code>active</code>, and if payment fails the subscription will be <code>past_due</code>. The resumption invoice will void automatically if not paid by the expiration date.</p>
   *
   * @param subscription 
   * @param body 
   */
  async postSubscriptionsSubscriptionResume(params: {
    subscription: string;
    body: PostSubscriptionsSubscriptionResumeRequest;
  }): Promise<Subscription> {
    const path = `/v1/subscriptions/{subscription}/resume`.replace('{subscription}', String(params.subscription));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Find a Tax Association
   *
   * <p>Finds a tax association object by PaymentIntent id.</p>
   *
   * @param expand 
   * @param paymentIntent 
   * @param body 
   */
  async getTaxAssociationsFind(params: {
    expand?: Array<string>;
    paymentIntent: string;
    body: GetAccountRequest;
  }): Promise<TaxAssociation> {
    const path = '/v1/tax/associations/find';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.paymentIntent !== undefined) {
      queryParams.append('payment_intent', String(params.paymentIntent));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Tax Calculation
   *
   * <p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
   *
   * @param body 
   */
  async postTaxCalculations(params: {
    body: PostTaxCalculationsRequest;
  }): Promise<TaxCalculation> {
    const path = '/v1/tax/calculations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Tax Calculation
   *
   * <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
   *
   * @param calculation 
   * @param expand 
   * @param body 
   */
  async getTaxCalculationsCalculation(params: {
    calculation: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxCalculation> {
    const path = `/v1/tax/calculations/{calculation}`.replace('{calculation}', String(params.calculation));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a calculation's line items
   *
   * <p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>
   *
   * @param calculation 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTaxCalculationsCalculationLineItems(params: {
    calculation: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTaxCalculationsCalculationLineItemsResponse> {
    const path = `/v1/tax/calculations/{calculation}/line_items`.replace('{calculation}', String(params.calculation));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List registrations
   *
   * <p>Returns a list of Tax <code>Registration</code> objects.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTaxRegistrations(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTaxRegistrationsResponse> {
    const path = '/v1/tax/registrations';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a registration
   *
   * <p>Creates a new Tax <code>Registration</code> object.</p>
   *
   * @param body 
   */
  async postTaxRegistrations(params: {
    body: PostTaxRegistrationsRequest;
  }): Promise<TaxRegistration> {
    const path = '/v1/tax/registrations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a registration
   *
   * <p>Returns a Tax <code>Registration</code> object.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTaxRegistrationsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxRegistration> {
    const path = `/v1/tax/registrations/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a registration
   *
   * <p>Updates an existing Tax <code>Registration</code> object.</p>

<p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>
   *
   * @param id 
   * @param body 
   */
  async postTaxRegistrationsId(params: {
    id: string;
    body: PostTaxRegistrationsIdRequest;
  }): Promise<TaxRegistration> {
    const path = `/v1/tax/registrations/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve settings
   *
   * <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
   *
   * @param expand 
   * @param body 
   */
  async getTaxSettings(params: {
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxSettings> {
    const path = '/v1/tax/settings';
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update settings
   *
   * <p>Updates Tax <code>Settings</code> parameters used in tax calculations. All parameters are editable but none can be removed once set.</p>
   *
   * @param body 
   */
  async postTaxSettings(params: {
    body: PostTaxSettingsRequest;
  }): Promise<TaxSettings> {
    const path = '/v1/tax/settings';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a transaction from a calculation
   *
   * <p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
   *
   * @param body 
   */
  async postTaxTransactionsCreateFromCalculation(params: {
    body: PostTaxTransactionsCreateFromCalculationRequest;
  }): Promise<TaxTransaction> {
    const path = '/v1/tax/transactions/create_from_calculation';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a reversal transaction
   *
   * <p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
   *
   * @param body 
   */
  async postTaxTransactionsCreateReversal(params: {
    body: PostTaxTransactionsCreateReversalRequest;
  }): Promise<TaxTransaction> {
    const path = '/v1/tax/transactions/create_reversal';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a transaction
   *
   * <p>Retrieves a Tax <code>Transaction</code> object.</p>
   *
   * @param transaction 
   * @param expand 
   * @param body 
   */
  async getTaxTransactionsTransaction(params: {
    transaction: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxTransaction> {
    const path = `/v1/tax/transactions/{transaction}`.replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a transaction's line items
   *
   * <p>Retrieves the line items of a committed standalone transaction as a collection.</p>
   *
   * @param transaction 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTaxTransactionsTransactionLineItems(params: {
    transaction: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTaxTransactionsTransactionLineItemsResponse> {
    const path = `/v1/tax/transactions/{transaction}/line_items`.replace('{transaction}', String(params.transaction));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all tax codes
   *
   * <p>A list of <a href="https://stripe.com/docs/tax/tax-categories">all tax codes available</a> to add to Products in order to allow specific tax calculations.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTaxCodes(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTaxCodesResponse> {
    const path = '/v1/tax_codes';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a tax code
   *
   * <p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTaxCodesId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxCode> {
    const path = `/v1/tax_codes/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all tax IDs
   *
   * <p>Returns a list of tax IDs.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param owner 
   * @param startingAfter 
   * @param body 
   */
  async getTaxIds(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    owner?: GetTaxIdsObject;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetCustomersCustomerTaxIdsResponse> {
    const path = '/v1/tax_ids';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.owner !== undefined) {
      queryParams.append('owner', String(params.owner));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a tax ID
   *
   * <p>Creates a new account or customer <code>tax_id</code> object.</p>
   *
   * @param body 
   */
  async postTaxIds(params: {
    body: PostTaxIdsRequest;
  }): Promise<TaxId> {
    const path = '/v1/tax_ids';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a tax ID
   *
   * <p>Retrieves an account or customer <code>tax_id</code> object.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTaxIdsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxId> {
    const path = `/v1/tax_ids/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a tax ID
   *
   * <p>Deletes an existing account or customer <code>tax_id</code> object.</p>
   *
   * @param id 
   * @param body 
   */
  async deleteTaxIdsId(params: {
    id: string;
    body: GetAccountRequest;
  }): Promise<DeletedTaxId> {
    const path = `/v1/tax_ids/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all tax rates
   *
   * <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
   *
   * @param active 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param inclusive 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTaxRates(params: {
    active?: boolean;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    inclusive?: boolean;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTaxRatesResponse> {
    const path = '/v1/tax_rates';
    const queryParams = new URLSearchParams();
    if (params.active !== undefined) {
      queryParams.append('active', String(params.active));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.inclusive !== undefined) {
      queryParams.append('inclusive', String(params.inclusive));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a tax rate
   *
   * <p>Creates a new tax rate.</p>
   *
   * @param body 
   */
  async postTaxRates(params: {
    body: PostTaxRatesRequest;
  }): Promise<TaxRate> {
    const path = '/v1/tax_rates';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a tax rate
   *
   * <p>Retrieves a tax rate with the given ID</p>
   *
   * @param taxRate 
   * @param expand 
   * @param body 
   */
  async getTaxRatesTaxRate(params: {
    taxRate: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TaxRate> {
    const path = `/v1/tax_rates/{tax_rate}`.replace('{tax_rate}', String(params.taxRate));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a tax rate
   *
   * <p>Updates an existing tax rate.</p>
   *
   * @param taxRate 
   * @param body 
   */
  async postTaxRatesTaxRate(params: {
    taxRate: string;
    body: PostTaxRatesTaxRateRequest;
  }): Promise<TaxRate> {
    const path = `/v1/tax_rates/{tax_rate}`.replace('{tax_rate}', String(params.taxRate));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Configurations
   *
   * <p>Returns a list of <code>Configuration</code> objects.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param isAccountDefault 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTerminalConfigurations(params: {
    endingBefore?: string;
    expand?: Array<string>;
    isAccountDefault?: boolean;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTerminalConfigurationsResponse> {
    const path = '/v1/terminal/configurations';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.isAccountDefault !== undefined) {
      queryParams.append('is_account_default', String(params.isAccountDefault));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Configuration
   *
   * <p>Creates a new <code>Configuration</code> object.</p>
   *
   * @param body 
   */
  async postTerminalConfigurations(params: {
    body: PostTerminalConfigurationsRequest;
  }): Promise<TerminalConfiguration> {
    const path = '/v1/terminal/configurations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Configuration
   *
   * <p>Retrieves a <code>Configuration</code> object.</p>
   *
   * @param configuration 
   * @param expand 
   * @param body 
   */
  async getTerminalConfigurationsConfiguration(params: {
    configuration: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetTerminalConfigurationsConfigurationUnion> {
    const path = `/v1/terminal/configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a Configuration
   *
   * <p>Updates a new <code>Configuration</code> object.</p>
   *
   * @param configuration 
   * @param body 
   */
  async postTerminalConfigurationsConfiguration(params: {
    configuration: string;
    body: PostTerminalConfigurationsConfigurationRequest;
  }): Promise<GetTerminalConfigurationsConfigurationUnion> {
    const path = `/v1/terminal/configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a Configuration
   *
   * <p>Deletes a <code>Configuration</code> object.</p>
   *
   * @param configuration 
   * @param body 
   */
  async deleteTerminalConfigurationsConfiguration(params: {
    configuration: string;
    body: GetAccountRequest;
  }): Promise<DeletedTerminalConfiguration> {
    const path = `/v1/terminal/configurations/{configuration}`.replace('{configuration}', String(params.configuration));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Connection Token
   *
   * <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
   *
   * @param body 
   */
  async postTerminalConnectionTokens(params: {
    body: PostTerminalConnectionTokensRequest;
  }): Promise<TerminalConnectionToken> {
    const path = '/v1/terminal/connection_tokens';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Locations
   *
   * <p>Returns a list of <code>Location</code> objects.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTerminalLocations(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTerminalLocationsResponse> {
    const path = '/v1/terminal/locations';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Location
   *
   * <p>Creates a new <code>Location</code> object.
For further details, including which address fields are required in each country, see the <a href="/docs/terminal/fleet/locations">Manage locations</a> guide.</p>
   *
   * @param body 
   */
  async postTerminalLocations(params: {
    body: PostTerminalLocationsRequest;
  }): Promise<TerminalLocation> {
    const path = '/v1/terminal/locations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Location
   *
   * <p>Retrieves a <code>Location</code> object.</p>
   *
   * @param location 
   * @param expand 
   * @param body 
   */
  async getTerminalLocationsLocation(params: {
    location: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetTerminalLocationsLocationUnion> {
    const path = `/v1/terminal/locations/{location}`.replace('{location}', String(params.location));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a Location
   *
   * <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param location 
   * @param body 
   */
  async postTerminalLocationsLocation(params: {
    location: string;
    body: PostTerminalLocationsLocationRequest;
  }): Promise<GetTerminalLocationsLocationUnion> {
    const path = `/v1/terminal/locations/{location}`.replace('{location}', String(params.location));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a Location
   *
   * <p>Deletes a <code>Location</code> object.</p>
   *
   * @param location 
   * @param body 
   */
  async deleteTerminalLocationsLocation(params: {
    location: string;
    body: GetAccountRequest;
  }): Promise<DeletedTerminalLocation> {
    const path = `/v1/terminal/locations/{location}`.replace('{location}', String(params.location));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an Onboarding Link
   *
   * <p>Creates a new <code>OnboardingLink</code> object that contains a redirect_url used for onboarding onto Tap to Pay on iPhone.</p>
   *
   * @param body 
   */
  async postTerminalOnboardingLinks(params: {
    body: PostTerminalOnboardingLinksRequest;
  }): Promise<TerminalOnboardingLink> {
    const path = '/v1/terminal/onboarding_links';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Readers
   *
   * <p>Returns a list of <code>Reader</code> objects.</p>
   *
   * @param deviceType 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param location 
   * @param serialNumber 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTerminalReaders(params: {
    deviceType?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    location?: string;
    serialNumber?: string;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTerminalReadersResponse> {
    const path = '/v1/terminal/readers';
    const queryParams = new URLSearchParams();
    if (params.deviceType !== undefined) {
      queryParams.append('device_type', String(params.deviceType));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.location !== undefined) {
      queryParams.append('location', String(params.location));
    }
    if (params.serialNumber !== undefined) {
      queryParams.append('serial_number', String(params.serialNumber));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a Reader
   *
   * <p>Creates a new <code>Reader</code> object.</p>
   *
   * @param body 
   */
  async postTerminalReaders(params: {
    body: PostTerminalReadersRequest;
  }): Promise<TerminalReader> {
    const path = '/v1/terminal/readers';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Reader
   *
   * <p>Retrieves a <code>Reader</code> object.</p>
   *
   * @param reader 
   * @param expand 
   * @param body 
   */
  async getTerminalReadersReader(params: {
    reader: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<GetTerminalReadersReaderUnion> {
    const path = `/v1/terminal/readers/{reader}`.replace('{reader}', String(params.reader));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a Reader
   *
   * <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReader(params: {
    reader: string;
    body: PostTerminalReadersReaderRequest;
  }): Promise<GetTerminalReadersReaderUnion> {
    const path = `/v1/terminal/readers/{reader}`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a Reader
   *
   * <p>Deletes a <code>Reader</code> object.</p>
   *
   * @param reader 
   * @param body 
   */
  async deleteTerminalReadersReader(params: {
    reader: string;
    body: GetAccountRequest;
  }): Promise<DeletedTerminalReader> {
    const path = `/v1/terminal/readers/{reader}`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel the current reader action
   *
   * <p>Cancels the current reader action. See <a href="/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven#programmatic-cancellation">Programmatic Cancellation</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderCancelAction(params: {
    reader: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/cancel_action`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Collect inputs using a Reader
   *
   * <p>Initiates an <a href="/docs/terminal/features/collect-inputs">input collection flow</a> on a Reader to display input forms and collect information from your customers.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderCollectInputs(params: {
    reader: string;
    body: PostTerminalReadersReaderCollectInputsRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/collect_inputs`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Hand off a PaymentIntent to a Reader and collect card details
   *
   * <p>Initiates a payment flow on a Reader and updates the PaymentIntent with card details before manual confirmation. See <a href="/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#collect-a-paymentmethod">Collecting a Payment method</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderCollectPaymentMethod(params: {
    reader: string;
    body: PostTerminalReadersReaderCollectPaymentMethodRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/collect_payment_method`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Confirm a PaymentIntent on the Reader
   *
   * <p>Finalizes a payment on a Reader. See <a href="/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#confirm-the-paymentintent">Confirming a Payment</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderConfirmPaymentIntent(params: {
    reader: string;
    body: PostTerminalReadersReaderConfirmPaymentIntentRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/confirm_payment_intent`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Hand-off a PaymentIntent to a Reader
   *
   * <p>Initiates a payment flow on a Reader. See <a href="/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=immediately#process-payment">process the payment</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderProcessPaymentIntent(params: {
    reader: string;
    body: PostTerminalReadersReaderProcessPaymentIntentRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/process_payment_intent`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Hand-off a SetupIntent to a Reader
   *
   * <p>Initiates a SetupIntent flow on a Reader. See <a href="/docs/terminal/features/saving-payment-details/save-directly">Save directly without charging</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderProcessSetupIntent(params: {
    reader: string;
    body: PostTerminalReadersReaderProcessSetupIntentRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/process_setup_intent`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Refund a Charge or a PaymentIntent in-person
   *
   * <p>Initiates an in-person refund on a Reader. See <a href="/docs/terminal/payments/regional?integration-country=CA#refund-an-interac-payment">Refund an Interac Payment</a> for more details.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderRefundPayment(params: {
    reader: string;
    body: PostTerminalReadersReaderRefundPaymentRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/refund_payment`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Set reader display
   *
   * <p>Sets the reader display to show <a href="/docs/terminal/features/display">cart details</a>.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTerminalReadersReaderSetReaderDisplay(params: {
    reader: string;
    body: PostTerminalReadersReaderSetReaderDisplayRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/terminal/readers/{reader}/set_reader_display`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test Confirmation Token
   *
   * <p>Creates a test mode Confirmation Token server side for your integration tests.</p>
   *
   * @param body 
   */
  async postTestHelpersConfirmationTokens(params: {
    body: PostTestHelpersConfirmationTokensRequest;
  }): Promise<ConfirmationToken> {
    const path = '/v1/test_helpers/confirmation_tokens';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Fund a test mode cash balance
   *
   * <p>Create an incoming testmode bank transfer</p>
   *
   * @param customer 
   * @param body 
   */
  async postTestHelpersCustomersCustomerFundCashBalance(params: {
    customer: string;
    body: PostTestHelpersCustomersCustomerFundCashBalanceRequest;
  }): Promise<CustomerCashBalanceTransaction> {
    const path = `/v1/test_helpers/customers/{customer}/fund_cash_balance`.replace('{customer}', String(params.customer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test-mode authorization
   *
   * <p>Create a test-mode authorization.</p>
   *
   * @param body 
   */
  async postTestHelpersIssuingAuthorizations(params: {
    body: PostTestHelpersIssuingAuthorizationsRequest;
  }): Promise<IssuingAuthorization> {
    const path = '/v1/test_helpers/issuing/authorizations';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Capture a test-mode authorization
   *
   * <p>Capture a test-mode authorization.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationCapture(params: {
    authorization: string;
    body: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/capture`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Expire a test-mode authorization
   *
   * <p>Expire a test-mode Authorization.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationExpire(params: {
    authorization: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/expire`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Finalize a test-mode authorization's amount
   *
   * <p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount(params: {
    authorization: string;
    body: PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmountRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Respond to fraud challenge
   *
   * <p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond(params: {
    authorization: string;
    body: PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Increment a test-mode authorization
   *
   * <p>Increment a test-mode Authorization.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationIncrement(params: {
    authorization: string;
    body: PostTestHelpersIssuingAuthorizationsAuthorizationIncrementRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/increment`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reverse a test-mode authorization
   *
   * <p>Reverse a test-mode Authorization.</p>
   *
   * @param authorization 
   * @param body 
   */
  async postTestHelpersIssuingAuthorizationsAuthorizationReverse(params: {
    authorization: string;
    body: PostTestHelpersIssuingAuthorizationsAuthorizationReverseRequest;
  }): Promise<IssuingAuthorization> {
    const path = `/v1/test_helpers/issuing/authorizations/{authorization}/reverse`.replace('{authorization}', String(params.authorization));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Deliver a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>delivered</code>.</p>
   *
   * @param card 
   * @param body 
   */
  async postTestHelpersIssuingCardsCardShippingDeliver(params: {
    card: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/test_helpers/issuing/cards/{card}/shipping/deliver`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Fail a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>failure</code>.</p>
   *
   * @param card 
   * @param body 
   */
  async postTestHelpersIssuingCardsCardShippingFail(params: {
    card: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/test_helpers/issuing/cards/{card}/shipping/fail`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Return a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>returned</code>.</p>
   *
   * @param card 
   * @param body 
   */
  async postTestHelpersIssuingCardsCardShippingReturn(params: {
    card: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/test_helpers/issuing/cards/{card}/shipping/return`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Ship a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>
   *
   * @param card 
   * @param body 
   */
  async postTestHelpersIssuingCardsCardShippingShip(params: {
    card: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/test_helpers/issuing/cards/{card}/shipping/ship`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Submit a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>submitted</code>. This method requires Stripe Version ‘2024-09-30.acacia’ or later.</p>
   *
   * @param card 
   * @param body 
   */
  async postTestHelpersIssuingCardsCardShippingSubmit(params: {
    card: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingCard> {
    const path = `/v1/test_helpers/issuing/cards/{card}/shipping/submit`.replace('{card}', String(params.card));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Activate a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>active</code>.</p>
   *
   * @param personalizationDesign 
   * @param body 
   */
  async postTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate(params: {
    personalizationDesign: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate`.replace('{personalization_design}', String(params.personalizationDesign));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Deactivate a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>
   *
   * @param personalizationDesign 
   * @param body 
   */
  async postTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate(params: {
    personalizationDesign: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate`.replace('{personalization_design}', String(params.personalizationDesign));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Reject a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>rejected</code>.</p>
   *
   * @param personalizationDesign 
   * @param body 
   */
  async postTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject(params: {
    personalizationDesign: string;
    body: PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignRejectRequest;
  }): Promise<IssuingPersonalizationDesign> {
    const path = `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject`.replace('{personalization_design}', String(params.personalizationDesign));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test-mode settlement
   *
   * <p>Allows the user to create an Issuing settlement.</p>
   *
   * @param body 
   */
  async postTestHelpersIssuingSettlements(params: {
    body: PostTestHelpersIssuingSettlementsRequest;
  }): Promise<IssuingSettlement> {
    const path = '/v1/test_helpers/issuing/settlements';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Complete a test-mode settlement
   *
   * <p>Allows the user to mark an Issuing settlement as complete.</p>
   *
   * @param settlement 
   * @param body 
   */
  async postTestHelpersIssuingSettlementsSettlementComplete(params: {
    settlement: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<IssuingSettlement> {
    const path = `/v1/test_helpers/issuing/settlements/{settlement}/complete`.replace('{settlement}', String(params.settlement));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test-mode force capture
   *
   * <p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>
   *
   * @param body 
   */
  async postTestHelpersIssuingTransactionsCreateForceCapture(params: {
    body: PostTestHelpersIssuingTransactionsCreateForceCaptureRequest;
  }): Promise<IssuingTransaction> {
    const path = '/v1/test_helpers/issuing/transactions/create_force_capture';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test-mode unlinked refund
   *
   * <p>Allows the user to refund an arbitrary amount, also known as a unlinked refund.</p>
   *
   * @param body 
   */
  async postTestHelpersIssuingTransactionsCreateUnlinkedRefund(params: {
    body: PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest;
  }): Promise<IssuingTransaction> {
    const path = '/v1/test_helpers/issuing/transactions/create_unlinked_refund';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Refund a test-mode transaction
   *
   * <p>Refund a test-mode Transaction.</p>
   *
   * @param transaction 
   * @param body 
   */
  async postTestHelpersIssuingTransactionsTransactionRefund(params: {
    transaction: string;
    body: PostTestHelpersIssuingTransactionsTransactionRefundRequest;
  }): Promise<IssuingTransaction> {
    const path = `/v1/test_helpers/issuing/transactions/{transaction}/refund`.replace('{transaction}', String(params.transaction));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Expire a pending refund.
   *
   * <p>Expire a refund with a status of <code>requires_action</code>.</p>
   *
   * @param refund 
   * @param body 
   */
  async postTestHelpersRefundsRefundExpire(params: {
    refund: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Refund> {
    const path = `/v1/test_helpers/refunds/{refund}/expire`.replace('{refund}', String(params.refund));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Simulate presenting a payment method
   *
   * <p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTestHelpersTerminalReadersReaderPresentPaymentMethod(params: {
    reader: string;
    body: PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/test_helpers/terminal/readers/{reader}/present_payment_method`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Simulate a successful input collection
   *
   * <p>Use this endpoint to trigger a successful input collection on a simulated reader.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTestHelpersTerminalReadersReaderSucceedInputCollection(params: {
    reader: string;
    body: PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Simulate an input collection timeout
   *
   * <p>Use this endpoint to complete an input collection with a timeout error on a simulated reader.</p>
   *
   * @param reader 
   * @param body 
   */
  async postTestHelpersTerminalReadersReaderTimeoutInputCollection(params: {
    reader: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TerminalReader> {
    const path = `/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection`.replace('{reader}', String(params.reader));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all test clocks
   *
   * <p>Returns a list of your test clocks.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTestHelpersTestClocks(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTestHelpersTestClocksResponse> {
    const path = '/v1/test_helpers/test_clocks';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a test clock
   *
   * <p>Creates a new test clock that can be attached to new customers and quotes.</p>
   *
   * @param body 
   */
  async postTestHelpersTestClocks(params: {
    body: PostTestHelpersTestClocksRequest;
  }): Promise<TestHelpersTestClock> {
    const path = '/v1/test_helpers/test_clocks';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a test clock
   *
   * <p>Retrieves a test clock.</p>
   *
   * @param testClock 
   * @param expand 
   * @param body 
   */
  async getTestHelpersTestClocksTestClock(params: {
    testClock: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TestHelpersTestClock> {
    const path = `/v1/test_helpers/test_clocks/{test_clock}`.replace('{test_clock}', String(params.testClock));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a test clock
   *
   * <p>Deletes a test clock.</p>
   *
   * @param testClock 
   * @param body 
   */
  async deleteTestHelpersTestClocksTestClock(params: {
    testClock: string;
    body: GetAccountRequest;
  }): Promise<DeletedTestHelpersTestClock> {
    const path = `/v1/test_helpers/test_clocks/{test_clock}`.replace('{test_clock}', String(params.testClock));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Advance a test clock
   *
   * <p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>
   *
   * @param testClock 
   * @param body 
   */
  async postTestHelpersTestClocksTestClockAdvance(params: {
    testClock: string;
    body: PostTestHelpersTestClocksTestClockAdvanceRequest;
  }): Promise<TestHelpersTestClock> {
    const path = `/v1/test_helpers/test_clocks/{test_clock}/advance`.replace('{test_clock}', String(params.testClock));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Fail an InboundTransfer
   *
   * <p>Transitions a test mode created InboundTransfer to the <code>failed</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryInboundTransfersIdFail(params: {
    id: string;
    body: PostTestHelpersTreasuryInboundTransfersIdFailRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = `/v1/test_helpers/treasury/inbound_transfers/{id}/fail`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Return an InboundTransfer
   *
   * <p>Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the <code>succeeded</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryInboundTransfersIdReturn(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = `/v1/test_helpers/treasury/inbound_transfers/{id}/return`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Succeed an InboundTransfer
   *
   * <p>Transitions a test mode created InboundTransfer to the <code>succeeded</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryInboundTransfersIdSucceed(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = `/v1/test_helpers/treasury/inbound_transfers/{id}/succeed`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Update an OutboundPayment
   *
   * <p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundPaymentsId(params: {
    id: string;
    body: PostTestHelpersTreasuryOutboundPaymentsIdRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/test_helpers/treasury/outbound_payments/{id}`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Fail an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundPaymentsIdFail(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/test_helpers/treasury/outbound_payments/{id}/fail`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Post an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundPaymentsIdPost(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/test_helpers/treasury/outbound_payments/{id}/post`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Return an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * @param id 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundPaymentsIdReturn(params: {
    id: string;
    body: PostTestHelpersTreasuryOutboundPaymentsIdReturnRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/test_helpers/treasury/outbound_payments/{id}/return`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Update an OutboundTransfer
   *
   * <p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
   *
   * @param outboundTransfer 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundTransfersOutboundTransfer(params: {
    outboundTransfer: string;
    body: PostTestHelpersTreasuryOutboundPaymentsIdRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Fail an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>failed</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * @param outboundTransfer 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundTransfersOutboundTransferFail(params: {
    outboundTransfer: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Post an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>posted</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * @param outboundTransfer 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundTransfersOutboundTransferPost(params: {
    outboundTransfer: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Return an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * @param outboundTransfer 
   * @param body 
   */
  async postTestHelpersTreasuryOutboundTransfersOutboundTransferReturn(params: {
    outboundTransfer: string;
    body: PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturnRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Create a ReceivedCredit
   *
   * <p>Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can’t directly create ReceivedCredits initiated by third parties.</p>
   *
   * @param body 
   */
  async postTestHelpersTreasuryReceivedCredits(params: {
    body: PostTestHelpersTreasuryReceivedCreditsRequest;
  }): Promise<TreasuryReceivedCredit> {
    const path = '/v1/test_helpers/treasury/received_credits';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Test mode: Create a ReceivedDebit
   *
   * <p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>
   *
   * @param body 
   */
  async postTestHelpersTreasuryReceivedDebits(params: {
    body: PostTestHelpersTreasuryReceivedDebitsRequest;
  }): Promise<TreasuryReceivedDebit> {
    const path = '/v1/test_helpers/treasury/received_debits';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a CVC update token
   *
   * <p>Creates a single-use token that represents a bank account’s details.
You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
   *
   * @param body 
   */
  async postTokens(params: {
    body: PostTokensRequest;
  }): Promise<Token> {
    const path = '/v1/tokens';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a token
   *
   * <p>Retrieves the token with the given ID.</p>
   *
   * @param token 
   * @param expand 
   * @param body 
   */
  async getTokensToken(params: {
    token: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Token> {
    const path = `/v1/tokens/{token}`.replace('{token}', String(params.token));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all top-ups
   *
   * <p>Returns a list of top-ups.</p>
   *
   * @param amount 
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTopups(params: {
    amount?: GetAccountsUnion;
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTopupsResponse> {
    const path = '/v1/topups';
    const queryParams = new URLSearchParams();
    if (params.amount !== undefined) {
      queryParams.append('amount', String(params.amount));
    }
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a top-up
   *
   * <p>Top up the balance of an account</p>
   *
   * @param body 
   */
  async postTopups(params: {
    body: PostTopupsRequest;
  }): Promise<Topup> {
    const path = '/v1/topups';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a top-up
   *
   * <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>
   *
   * @param topup 
   * @param expand 
   * @param body 
   */
  async getTopupsTopup(params: {
    topup: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Topup> {
    const path = `/v1/topups/{topup}`.replace('{topup}', String(params.topup));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a top-up
   *
   * <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>
   *
   * @param topup 
   * @param body 
   */
  async postTopupsTopup(params: {
    topup: string;
    body: PostTopupsTopupRequest;
  }): Promise<Topup> {
    const path = `/v1/topups/{topup}`.replace('{topup}', String(params.topup));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel a top-up
   *
   * <p>Cancels a top-up. Only pending top-ups can be canceled.</p>
   *
   * @param topup 
   * @param body 
   */
  async postTopupsTopupCancel(params: {
    topup: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<Topup> {
    const path = `/v1/topups/{topup}/cancel`.replace('{topup}', String(params.topup));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all transfers
   *
   * <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>
   *
   * @param created 
   * @param destination 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param transferGroup 
   * @param body 
   */
  async getTransfers(params: {
    created?: GetAccountsUnion;
    destination?: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    transferGroup?: string;
    body: GetAccountRequest;
  }): Promise<GetTransfersResponse> {
    const path = '/v1/transfers';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.destination !== undefined) {
      queryParams.append('destination', String(params.destination));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.transferGroup !== undefined) {
      queryParams.append('transfer_group', String(params.transferGroup));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a transfer
   *
   * <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>
   *
   * @param body 
   */
  async postTransfers(params: {
    body: PostTransfersRequest;
  }): Promise<Transfer> {
    const path = '/v1/transfers';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all reversals
   *
   * <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
   *
   * @param id 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getTransfersIdReversals(params: {
    id: string;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetTransfersIdReversalsResponse> {
    const path = `/v1/transfers/{id}/reversals`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a transfer reversal
   *
   * <p>When you create a new reversal, you must specify a transfer to create it on.</p>

<p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>

<p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
   *
   * @param id 
   * @param body 
   */
  async postTransfersIdReversals(params: {
    id: string;
    body: PostTransfersIdReversalsRequest;
  }): Promise<TransferReversal> {
    const path = `/v1/transfers/{id}/reversals`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a transfer
   *
   * <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
   *
   * @param transfer 
   * @param expand 
   * @param body 
   */
  async getTransfersTransfer(params: {
    transfer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<Transfer> {
    const path = `/v1/transfers/{transfer}`.replace('{transfer}', String(params.transfer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a transfer
   *
   * <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts only metadata as an argument.</p>
   *
   * @param transfer 
   * @param body 
   */
  async postTransfersTransfer(params: {
    transfer: string;
    body: PostTopupsTopupRequest;
  }): Promise<Transfer> {
    const path = `/v1/transfers/{transfer}`.replace('{transfer}', String(params.transfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a reversal
   *
   * <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
   *
   * @param id 
   * @param transfer 
   * @param expand 
   * @param body 
   */
  async getTransfersTransferReversalsId(params: {
    id: string;
    transfer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TransferReversal> {
    const path = `/v1/transfers/{transfer}/reversals/{id}`.replace('{id}', String(params.id)).replace('{transfer}', String(params.transfer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a reversal
   *
   * <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata and description as arguments.</p>
   *
   * @param id 
   * @param transfer 
   * @param body 
   */
  async postTransfersTransferReversalsId(params: {
    id: string;
    transfer: string;
    body: PostApplicationFeesFeeRefundsIdRequest;
  }): Promise<TransferReversal> {
    const path = `/v1/transfers/{transfer}/reversals/{id}`.replace('{id}', String(params.id)).replace('{transfer}', String(params.transfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all CreditReversals
   *
   * <p>Returns a list of CreditReversals.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param receivedCredit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryCreditReversals(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    receivedCredit?: string;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryCreditReversalsResponse> {
    const path = '/v1/treasury/credit_reversals';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.receivedCredit !== undefined) {
      queryParams.append('received_credit', String(params.receivedCredit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a CreditReversal
   *
   * <p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>
   *
   * @param body 
   */
  async postTreasuryCreditReversals(params: {
    body: PostTreasuryCreditReversalsRequest;
  }): Promise<TreasuryCreditReversal> {
    const path = '/v1/treasury/credit_reversals';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a CreditReversal
   *
   * <p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>
   *
   * @param creditReversal 
   * @param expand 
   * @param body 
   */
  async getTreasuryCreditReversalsCreditReversal(params: {
    creditReversal: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryCreditReversal> {
    const path = `/v1/treasury/credit_reversals/{credit_reversal}`.replace('{credit_reversal}', String(params.creditReversal));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all DebitReversals
   *
   * <p>Returns a list of DebitReversals.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param receivedDebit 
   * @param resolution 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryDebitReversals(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    receivedDebit?: string;
    resolution?: string;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryDebitReversalsResponse> {
    const path = '/v1/treasury/debit_reversals';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.receivedDebit !== undefined) {
      queryParams.append('received_debit', String(params.receivedDebit));
    }
    if (params.resolution !== undefined) {
      queryParams.append('resolution', String(params.resolution));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a DebitReversal
   *
   * <p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
   *
   * @param body 
   */
  async postTreasuryDebitReversals(params: {
    body: PostTreasuryDebitReversalsRequest;
  }): Promise<TreasuryDebitReversal> {
    const path = '/v1/treasury/debit_reversals';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a DebitReversal
   *
   * <p>Retrieves a DebitReversal object.</p>
   *
   * @param debitReversal 
   * @param expand 
   * @param body 
   */
  async getTreasuryDebitReversalsDebitReversal(params: {
    debitReversal: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryDebitReversal> {
    const path = `/v1/treasury/debit_reversals/{debit_reversal}`.replace('{debit_reversal}', String(params.debitReversal));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all FinancialAccounts
   *
   * <p>Returns a list of FinancialAccounts.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryFinancialAccounts(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryFinancialAccountsResponse> {
    const path = '/v1/treasury/financial_accounts';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a FinancialAccount
   *
   * <p>Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.</p>
   *
   * @param body 
   */
  async postTreasuryFinancialAccounts(params: {
    body: PostTreasuryFinancialAccountsRequest;
  }): Promise<TreasuryFinancialAccount> {
    const path = '/v1/treasury/financial_accounts';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a FinancialAccount
   *
   * <p>Retrieves the details of a FinancialAccount.</p>
   *
   * @param financialAccount 
   * @param expand 
   * @param body 
   */
  async getTreasuryFinancialAccountsFinancialAccount(params: {
    financialAccount: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryFinancialAccount> {
    const path = `/v1/treasury/financial_accounts/{financial_account}`.replace('{financial_account}', String(params.financialAccount));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a FinancialAccount
   *
   * <p>Updates the details of a FinancialAccount.</p>
   *
   * @param financialAccount 
   * @param body 
   */
  async postTreasuryFinancialAccountsFinancialAccount(params: {
    financialAccount: string;
    body: PostTreasuryFinancialAccountsFinancialAccountRequest;
  }): Promise<TreasuryFinancialAccount> {
    const path = `/v1/treasury/financial_accounts/{financial_account}`.replace('{financial_account}', String(params.financialAccount));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Close a FinancialAccount
   *
   * <p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
   *
   * @param financialAccount 
   * @param body 
   */
  async postTreasuryFinancialAccountsFinancialAccountClose(params: {
    financialAccount: string;
    body: PostTreasuryFinancialAccountsFinancialAccountCloseRequest;
  }): Promise<TreasuryFinancialAccount> {
    const path = `/v1/treasury/financial_accounts/{financial_account}/close`.replace('{financial_account}', String(params.financialAccount));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve FinancialAccount Features
   *
   * <p>Retrieves Features information associated with the FinancialAccount.</p>
   *
   * @param financialAccount 
   * @param expand 
   * @param body 
   */
  async getTreasuryFinancialAccountsFinancialAccountFeatures(params: {
    financialAccount: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryFinancialAccountFeatures> {
    const path = `/v1/treasury/financial_accounts/{financial_account}/features`.replace('{financial_account}', String(params.financialAccount));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update FinancialAccount Features
   *
   * <p>Updates the Features associated with a FinancialAccount.</p>
   *
   * @param financialAccount 
   * @param body 
   */
  async postTreasuryFinancialAccountsFinancialAccountFeatures(params: {
    financialAccount: string;
    body: PostTreasuryFinancialAccountsFinancialAccountFeaturesRequest;
  }): Promise<TreasuryFinancialAccountFeatures> {
    const path = `/v1/treasury/financial_accounts/{financial_account}/features`.replace('{financial_account}', String(params.financialAccount));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all InboundTransfers
   *
   * <p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryInboundTransfers(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryInboundTransfersResponse> {
    const path = '/v1/treasury/inbound_transfers';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an InboundTransfer
   *
   * <p>Creates an InboundTransfer.</p>
   *
   * @param body 
   */
  async postTreasuryInboundTransfers(params: {
    body: PostTreasuryInboundTransfersRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = '/v1/treasury/inbound_transfers';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an InboundTransfer
   *
   * <p>Retrieves the details of an existing InboundTransfer.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryInboundTransfersId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = `/v1/treasury/inbound_transfers/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel an InboundTransfer
   *
   * <p>Cancels an InboundTransfer.</p>
   *
   * @param inboundTransfer 
   * @param body 
   */
  async postTreasuryInboundTransfersInboundTransferCancel(params: {
    inboundTransfer: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryInboundTransfer> {
    const path = `/v1/treasury/inbound_transfers/{inbound_transfer}/cancel`.replace('{inbound_transfer}', String(params.inboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all OutboundPayments
   *
   * <p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>
   *
   * @param created 
   * @param customer 
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryOutboundPayments(params: {
    created?: GetAccountsUnion;
    customer?: string;
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryOutboundPaymentsResponse> {
    const path = '/v1/treasury/outbound_payments';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.customer !== undefined) {
      queryParams.append('customer', String(params.customer));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an OutboundPayment
   *
   * <p>Creates an OutboundPayment.</p>
   *
   * @param body 
   */
  async postTreasuryOutboundPayments(params: {
    body: PostTreasuryOutboundPaymentsRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = '/v1/treasury/outbound_payments';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an OutboundPayment
   *
   * <p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryOutboundPaymentsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/treasury/outbound_payments/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel an OutboundPayment
   *
   * <p>Cancel an OutboundPayment.</p>
   *
   * @param id 
   * @param body 
   */
  async postTreasuryOutboundPaymentsIdCancel(params: {
    id: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundPayment> {
    const path = `/v1/treasury/outbound_payments/{id}/cancel`.replace('{id}', String(params.id));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all OutboundTransfers
   *
   * <p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryOutboundTransfers(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryOutboundTransfersResponse> {
    const path = '/v1/treasury/outbound_transfers';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create an OutboundTransfer
   *
   * <p>Creates an OutboundTransfer.</p>
   *
   * @param body 
   */
  async postTreasuryOutboundTransfers(params: {
    body: PostTreasuryOutboundTransfersRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = '/v1/treasury/outbound_transfers';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve an OutboundTransfer
   *
   * <p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>
   *
   * @param outboundTransfer 
   * @param expand 
   * @param body 
   */
  async getTreasuryOutboundTransfersOutboundTransfer(params: {
    outboundTransfer: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/treasury/outbound_transfers/{outbound_transfer}`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Cancel an OutboundTransfer
   *
   * <p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
   *
   * @param outboundTransfer 
   * @param body 
   */
  async postTreasuryOutboundTransfersOutboundTransferCancel(params: {
    outboundTransfer: string;
    body: PostAccountsAccountLoginLinksRequest;
  }): Promise<TreasuryOutboundTransfer> {
    const path = `/v1/treasury/outbound_transfers/{outbound_transfer}/cancel`.replace('{outbound_transfer}', String(params.outboundTransfer));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all ReceivedCredits
   *
   * <p>Returns a list of ReceivedCredits.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param linkedFlows 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryReceivedCredits(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    linkedFlows?: GetTreasuryReceivedCreditsObject;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryReceivedCreditsResponse> {
    const path = '/v1/treasury/received_credits';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.linkedFlows !== undefined) {
      queryParams.append('linked_flows', String(params.linkedFlows));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a ReceivedCredit
   *
   * <p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryReceivedCreditsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryReceivedCredit> {
    const path = `/v1/treasury/received_credits/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all ReceivedDebits
   *
   * <p>Returns a list of ReceivedDebits.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param startingAfter 
   * @param status 
   * @param body 
   */
  async getTreasuryReceivedDebits(params: {
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    startingAfter?: string;
    status?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryReceivedDebitsResponse> {
    const path = '/v1/treasury/received_debits';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a ReceivedDebit
   *
   * <p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryReceivedDebitsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryReceivedDebit> {
    const path = `/v1/treasury/received_debits/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all TransactionEntries
   *
   * <p>Retrieves a list of TransactionEntry objects.</p>
   *
   * @param created 
   * @param effectiveAt 
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param orderBy 
   * @param startingAfter 
   * @param transaction 
   * @param body 
   */
  async getTreasuryTransactionEntries(params: {
    created?: GetAccountsUnion;
    effectiveAt?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    orderBy?: string;
    startingAfter?: string;
    transaction?: string;
    body: GetAccountRequest;
  }): Promise<GetTreasuryTransactionEntriesResponse> {
    const path = '/v1/treasury/transaction_entries';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.effectiveAt !== undefined) {
      queryParams.append('effective_at', String(params.effectiveAt));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.orderBy !== undefined) {
      queryParams.append('order_by', String(params.orderBy));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.transaction !== undefined) {
      queryParams.append('transaction', String(params.transaction));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a TransactionEntry
   *
   * <p>Retrieves a TransactionEntry object.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryTransactionEntriesId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryTransactionEntry> {
    const path = `/v1/treasury/transaction_entries/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all Transactions
   *
   * <p>Retrieves a list of Transaction objects.</p>
   *
   * @param created 
   * @param endingBefore 
   * @param expand 
   * @param financialAccount 
   * @param limit 
   * @param orderBy 
   * @param startingAfter 
   * @param status 
   * @param statusTransitions 
   * @param body 
   */
  async getTreasuryTransactions(params: {
    created?: GetAccountsUnion;
    endingBefore?: string;
    expand?: Array<string>;
    financialAccount: string;
    limit?: number;
    orderBy?: string;
    startingAfter?: string;
    status?: string;
    statusTransitions?: GetTreasuryTransactionsObject;
    body: GetAccountRequest;
  }): Promise<GetTreasuryTransactionsResponse> {
    const path = '/v1/treasury/transactions';
    const queryParams = new URLSearchParams();
    if (params.created !== undefined) {
      queryParams.append('created', String(params.created));
    }
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.financialAccount !== undefined) {
      queryParams.append('financial_account', String(params.financialAccount));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.orderBy !== undefined) {
      queryParams.append('order_by', String(params.orderBy));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.statusTransitions !== undefined) {
      queryParams.append('status_transitions', String(params.statusTransitions));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a Transaction
   *
   * <p>Retrieves the details of an existing Transaction.</p>
   *
   * @param id 
   * @param expand 
   * @param body 
   */
  async getTreasuryTransactionsId(params: {
    id: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<TreasuryTransaction> {
    const path = `/v1/treasury/transactions/{id}`.replace('{id}', String(params.id));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * List all webhook endpoints
   *
   * <p>Returns a list of your webhook endpoints.</p>
   *
   * @param endingBefore 
   * @param expand 
   * @param limit 
   * @param startingAfter 
   * @param body 
   */
  async getWebhookEndpoints(params: {
    endingBefore?: string;
    expand?: Array<string>;
    limit?: number;
    startingAfter?: string;
    body: GetAccountRequest;
  }): Promise<GetWebhookEndpointsResponse> {
    const path = '/v1/webhook_endpoints';
    const queryParams = new URLSearchParams();
    if (params.endingBefore !== undefined) {
      queryParams.append('ending_before', String(params.endingBefore));
    }
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.startingAfter !== undefined) {
      queryParams.append('starting_after', String(params.startingAfter));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Create a webhook endpoint
   *
   * <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>
   *
   * @param body 
   */
  async postWebhookEndpoints(params: {
    body: PostWebhookEndpointsRequest;
  }): Promise<WebhookEndpoint> {
    const path = '/v1/webhook_endpoints';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Retrieve a webhook endpoint
   *
   * <p>Retrieves the webhook endpoint with the given ID.</p>
   *
   * @param webhookEndpoint 
   * @param expand 
   * @param body 
   */
  async getWebhookEndpointsWebhookEndpoint(params: {
    webhookEndpoint: string;
    expand?: Array<string>;
    body: GetAccountRequest;
  }): Promise<WebhookEndpoint> {
    const path = `/v1/webhook_endpoints/{webhook_endpoint}`.replace('{webhook_endpoint}', String(params.webhookEndpoint));
    const queryParams = new URLSearchParams();
    if (params.expand !== undefined) {
      queryParams.append('expand', String(params.expand));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Update a webhook endpoint
   *
   * <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>
   *
   * @param webhookEndpoint 
   * @param body 
   */
  async postWebhookEndpointsWebhookEndpoint(params: {
    webhookEndpoint: string;
    body: PostWebhookEndpointsWebhookEndpointRequest;
  }): Promise<WebhookEndpoint> {
    const path = `/v1/webhook_endpoints/{webhook_endpoint}`.replace('{webhook_endpoint}', String(params.webhookEndpoint));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

  /**
   * Delete a webhook endpoint
   *
   * <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
   *
   * @param webhookEndpoint 
   * @param body 
   */
  async deleteWebhookEndpointsWebhookEndpoint(params: {
    webhookEndpoint: string;
    body: GetAccountRequest;
  }): Promise<DeletedWebhookEndpoint> {
    const path = `/v1/webhook_endpoints/{webhook_endpoint}`.replace('{webhook_endpoint}', String(params.webhookEndpoint));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

}