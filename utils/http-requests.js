import http from "k6/http";
import { config } from "../k6-config.js";

export function getRequest(endpoint, params = {}) {
  return http.get(`${params.baseURL || config.baseURL}${endpoint}`, {
    tags: params.tags || {},
  });
}

export function postRequest(endpoint, body, params = {}) {
  return http.post(
    `${params.baseURL || config.baseURL}${endpoint}`,
    JSON.stringify(body),
    {
      headers: params.headers || { "Content-Type": "application/json" },
      tags: params.tags || {},
    }
  );
}
