import { postRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import {readJsonData} from "../utils/files.js"
import { config } from "../k6-config.js";
import { sleep } from "k6";

export const options = {
  stages: config.stages.spike,
};

export default function () {
  const url = "http://test.k6.io";
  const body = readJsonData('users');

  let response = postRequest("/login", body, { baseUrl: url });
  validateResponse(response);
  sleep(1);
}
