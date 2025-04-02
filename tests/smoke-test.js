import { getRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.smoke,
  cloud: config.cloud,
};

export default function () {
  let response = getRequest("/");
  validateResponse(response);
  sleep(1);
}
