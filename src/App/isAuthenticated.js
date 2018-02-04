import getAccessTokenFromUrl from './getAccessTokenFromUrl';

// If the user was just redirected from authenticating, the urls hash will
// contain the access token.
function isAuthenticated() {
  return !!getAccessTokenFromUrl();
}

export default isAuthenticated;
