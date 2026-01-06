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