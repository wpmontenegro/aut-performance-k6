import { getRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.load,
  thresholds: config.thresholds,
};

export default function () {
  const res = getRequest("/");
  validateResponse(res);
  sleep(1);
}
