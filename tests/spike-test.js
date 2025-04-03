import { postRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { readRandomJsonFromData } from "../utils/files.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.spike,
};

const url = "http://test.k6.io";
const body = readRandomJsonFromData("users");

export default function () {
  let response = postRequest("/login", body, { baseUrl: url });
  validateResponse(response);
  sleep(1);
}
