import { getRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { config } from "../k6-config.js";
import { group, sleep } from "k6";

export const options = {
  stages: config.stages.smoke,
  thresholds: {
    "http_req_duration{type:API}": ["p(95)<200"],
    checks: ["rate>0.9"],
  },
  cloud: config.cloud,
};

export default function () {
  group("GetPage", function () {
    const res = getRequest("/", { tags: { type: "API" } });
    validateResponse(res);
    sleep(1);
  });
}
