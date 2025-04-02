import http from "k6/http";
import { config } from "../k6-config.js";

export function getRequest(endpoint, params = {}) {
  return http.get(`${params.baseURL || config.baseURL}${endpoint}`);
}

export function postRequest(endpoint, body, params = {}) {
  return http.post(
    `${params.baseURL || config.baseURL}${endpoint}`,
    JSON.stringify(body),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
