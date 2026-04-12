/// Request context containing state and request metadata
pub struct RequestContext<S> {
    pub state: S,
    pub method: axum::http::Method,
    pub uri: axum::http::Uri,
    pub headers: axum::http::HeaderMap,
    pub extensions: axum::http::Extensions,
}

impl<S> RequestContext<S> {
    pub fn state(&self) -> &S {
        &self.state
    }
}

impl<S> axum::extract::FromRequestParts<S> for RequestContext<S>
where
    S: Clone + Send + Sync + 'static,
{
    type Rejection = std::convert::Infallible;

    async fn from_request_parts(
        parts: &mut axum::http::request::Parts,
        state: &S,
    ) -> Result<Self, Self::Rejection> {
        Ok(RequestContext {
            state: state.clone(),
            method: parts.method.clone(),
            uri: parts.uri.clone(),
            headers: parts.headers.clone(),
            extensions: parts.extensions.clone(),
        })
    }
}

/// Authentication credential extracted from the request.
#[derive(Clone, Debug)]
pub enum Auth {
    /// Bearer token from Authorization header
    Bearer(String),
}

impl<S> axum::extract::FromRequestParts<S> for Auth
where
    S: Clone + Send + Sync + 'static,
{
    type Rejection = axum::http::StatusCode;

    async fn from_request_parts(
        parts: &mut axum::http::request::Parts,
        _state: &S,
    ) -> Result<Self, Self::Rejection> {
        if let Some(v) = parts
            .headers
            .get(axum::http::header::AUTHORIZATION)
            .and_then(|v| v.to_str().ok())
        {
            if let Some(token) = v.strip_prefix("Bearer ") {
                return Ok(Auth::Bearer(token.to_string()));
            }
        }
        Err(axum::http::StatusCode::UNAUTHORIZED)
    }
}
