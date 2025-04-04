import { getRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.smoke,
  thresholds: config.thresholds,
  cloud: config.cloud,
};

export default function () {
  const res = getRequest("/");
  validateResponse(res);
  sleep(1);
}
