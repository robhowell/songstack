import queryString from 'query-string';

// Parses the url and gets the access token if it is in the urls hash
function getAccessTokenFromUrl() {
  return queryString.parse(window.location.hash).access_token;
}

export default getAccessTokenFromUrl;
