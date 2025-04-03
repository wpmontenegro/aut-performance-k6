import { postRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { readRandomUserFromData } from "../utils/data-loader.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.smoke,
};

const url = "http://test.k6.io";

export default function () {
  const body = readRandomUserFromData("users");
  let response = postRequest("/login", body, { baseUrl: url });
  validateResponse(response);
  sleep(1);
}
