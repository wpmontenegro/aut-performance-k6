import { config } from "../k6-config.js";
import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: config.stages.load,
  cloud: config.cloud,
};

export default function () {
  http.get("https://k6.io");
  sleep(1);
}
