export const config = {
  baseURL: "https://quickpizza.grafana.com",
  timeout: 5000,
  stages: {
    load: [
      { duration: "1m", target: 50 },
      { duration: "2m", target: 100 },
      { duration: "1m", target: 0 },
    ],
    stress: [
      { duration: "5m", target: 500 },
      { duration: "2m", target: 1000 },
      { duration: "2m", target: 0 },
    ],
    soak: [
      { duration: "1h", target: 200 },
      { duration: "2h", target: 200 },
      { duration: "1h", target: 0 },
    ],
    spike: [
      { duration: "10s", target: 100 },
      { duration: "1m", target: 1000 },
      { duration: "10s", target: 0 },
    ],
    endurance: [
      { duration: "30m", target: 300 },
      { duration: "1h", target: 300 },
      { duration: "30m", target: 0 },
    ],
    ramp: [
      { duration: "5m", target: 50 },
      { duration: "10m", target: 200 },
      { duration: "5m", target: 50 },
      { duration: "5m", target: 0 },
    ],
    smoke: [
      { duration: '10s', target: 5 }
    ]
  },
  cloud: {
    projectID: process.env.PROJECT_ID,
    name: process.env.TEST_NAME,
  }
};
