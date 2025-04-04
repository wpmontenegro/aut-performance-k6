import { postRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { readRandomUserFromData } from "../utils/data-loader.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.load,
  thresholds: config.thresholds,
};

const url = "http://test.k6.io";

export default function () {
  group("Login", function () {
    const body = readRandomUserFromData("users");
    const res = postRequest("/login", body, { baseUrl: url });
    validateResponse(res);
    sleep(1);
  });
}
