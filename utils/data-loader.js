import { SharedArray } from "k6/data";

export function readJsonFromData(relativePath = "users") {
  const absolutePath = import.meta.resolve(`../data/${relativePath}.json`);
  return JSON.parse(open(absolutePath));
}

const userData = new SharedArray("users", function () {
  return readJsonFromData("users");
});

export function readRandomUserFromData() {
  return userData[Math.floor(Math.random() * userData.length)];
}
