export const config = {
  baseURL: __ENV.BASE_URL || "https://quickpizza.grafana.com",
  timeout: __ENV.TIMEOUT || 5000,
  stages: {
    load: [
      { duration: "2m", target: 50 },
      { duration: "3m", target: 100 },
      { duration: "1m", target: 0 },
    ],
    stress: [
      { duration: "5m", target: 500 },
      { duration: "3m", target: 1000 },
      { duration: "2m", target: 0 },
    ],
    soak: [
      { duration: "30m", target: 200 },
      { duration: "30m", target: 200 },
      { duration: "30m", target: 0 },
    ],
    spike: [
      { duration: "5s", target: 500 },
      { duration: "20s", target: 2000 },
      { duration: "10s", target: 0 },
    ],
    smoke: [{ duration: "5s", target: 5 }],
  },
  cloud: {
    projectID: __ENV.PROJECT_ID || "default_project",
    name: __ENV.TEST_NAME || "default_test",
  },
};
