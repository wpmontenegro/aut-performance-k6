const envConfig = {
  dev: {
    BASE_URL: "http://localhost:3333",
    MY_FLAG: true,
    TIMEOUT: 5000,
  },
  qa: {
    BASE_URL: "https://quickpizza.grafana.com",
    MY_FLAG: true,
    TIMEOUT: 6000,
  },
  pre: {
    BASE_URL: "https://quickpizza.st.grafana.com",
    MY_FLAG: false,
    TIMEOUT: 7000,
  },
};
const config = envConfig[__ENV.ENVIRONMENT] || envConfig["qa"];

export const BASE_URL = config.BASE_URL;

export const CLOUD = {
  projectID: __ENV.PROJECT_ID || "default_project",
  name: __ENV.TEST_NAME || "default_test",
};

export default config;
