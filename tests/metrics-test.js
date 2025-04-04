import { getRequest } from "../utils/http-requests.js";
import { config } from "../k6-config.js";
import { Trend, Rate, Counter, Gauge } from "k6/metrics";
import { sleep } from "k6";

export const TrendRequestTimeDuration = new Trend("RTT");
export const RateContentOK = new Rate("ContentOK");
export const GaugeContentSize = new Gauge("ContentSize");
export const CounterErrors = new Counter("Errors");

export const options = {
  stages: config.stages.smoke,
  thresholds: {
    // Count: Incorrect content cannot be returned more than 99 times.
    Errors: ["count<100"],
    // Gauge: returned content must be smaller than 4000 bytes
    ContentSize: ["value<4000"],
    // Rate: content must be OK more than 95%
    ContentOK: ["rate>0.95"],
    // Trend: Percentiles, averages, medians, and minimums
    // must be within specified milliseconds.
    RTT: ["p(99)<300", "p(90)<250", "avg<200", "med<150", "min<130"],
  },
};

export default function () {
  const name = "Bert";
  const res = getRequest(`/api/json?name=${name}`);
  const contentOK = res.json("name") === name;

  TrendRequestTimeDuration.add(res.timings.duration);
  RateContentOK.add(contentOK);
  GaugeContentSize.add(res.body.length);
  CounterErrors.add(!contentOK);

  sleep(1);
}
