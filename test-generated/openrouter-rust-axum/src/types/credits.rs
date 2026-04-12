//! Types for the credits service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateChargeRequest {
    pub amount: f32,
    pub chain_id: i32,
    pub sender: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponse {
    pub data: CreateCoinbaseChargeResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseCallData {
    pub deadline: String,
    pub fee_amount: String,
    pub id: String,
    pub operator: String,
    pub prefix: String,
    pub recipient: String,
    pub recipient_amount: String,
    pub recipient_currency: String,
    pub refund_destination: String,
    pub signature: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseData {
    pub created_at: String,
    pub expires_at: String,
    pub id: String,
    pub web3_data: CreateCoinbaseChargeResponseWeb3Data,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseMetadata {
    pub chain_id: f32,
    pub contract_address: String,
    pub sender: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseTransferIntent {
    pub call_data: CreateCoinbaseChargeResponseCallData,
    pub metadata: CreateCoinbaseChargeResponseMetadata,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseWeb3Data {
    pub transfer_intent: CreateCoinbaseChargeResponseTransferIntent,
}
