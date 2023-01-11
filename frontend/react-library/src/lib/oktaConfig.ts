export const oktaConfig = {
    clientId: '0oa7qp4itucOqelam5d7',
    issuer: 'https://dev-69529271.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}