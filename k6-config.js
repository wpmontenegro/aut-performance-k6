export const config = {
  baseURL: "https://test-api.com",
  timeout: 5000,
  stages: {
    load: [
      { duration: "10s", target: 50 },
      { duration: "20s", target: 100 },
      { duration: "10s", target: 0 },
    ],
    stress: [
      { duration: "5m", target: 500 },
      { duration: "2m", target: 1000 },
      { duration: "2m", target: 0 },
    ],
  },
  cloud: {
    projectID: 3657634,
    name: 'Test Framework K6'
  }
};
