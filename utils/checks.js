import { check } from "k6";

export function validateResponse(res) {
  return check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
