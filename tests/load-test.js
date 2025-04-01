import { getRequest } from "../utils/http-requests.js";
import { validateResponse } from "../utils/checks.js";
import { config } from "../k6-config.js";
import { sleep } from "k6";

export let options = {
  stages: config.stages.load,
};

export default function () {
  let res = getRequest("/users");
  validateResponse(res);
  sleep(1);
}
