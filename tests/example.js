import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  iterations: 40,
};

export default function () {
  http.get("https://k6.io");
  sleep(1);
}
