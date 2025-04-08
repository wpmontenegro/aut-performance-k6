import { postRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { readRandomUserFromData } from "../utils/data-loader.js";
import { config } from "../k6-config.js";
import { group, sleep } from "k6";

export const options = {
  stages: config.stages.smoke,
  thresholds: config.thresholds,
};

const url = "http://test.k6.io";
// Each user belongs to a VU instance
const body = readRandomUserFromData("users");

export default function () {
  group("Login", function () {
    const res = postRequest("/login", body, { baseUrl: url });
    validateResponse(res);
    sleep(1);
  });
}
