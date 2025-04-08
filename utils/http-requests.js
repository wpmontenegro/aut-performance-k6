import http from "k6/http";

/**
 * GET request
 */
export function getRequest(fullUrl, params = {}) {
  return http.get(fullUrl, {
    headers: params.headers,
    tags: params.tags || {},
  });
}

/**
 * POST request
 */
export function postRequest(fullUrl, body, params = {}) {
  return http.post(fullUrl, JSON.stringify(body), {
    headers: params.headers || { "Content-Type": "application/json" },
    tags: params.tags || {},
  });
}

/**
 * PUT request
 */
export function putRequest(fullUrl, body, params = {}) {
  return http.put(fullUrl, JSON.stringify(body), {
    headers: params.headers || { "Content-Type": "application/json" },
    tags: params.tags || {},
  });
}

/**
 * DELETE request
 */
export function deleteRequest(fullUrl, params = {}) {
  return http.del(fullUrl, null, {
    headers: params.headers || {},
    tags: params.tags || {},
  });
}
