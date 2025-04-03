import { SharedArray } from "k6/data";

export function readJsonFromData(relativePath = "users") {
  const absolutePath = import.meta.resolve(`../data/${relativePath}.json`);
  return JSON.parse(open(absolutePath));
}

export function readRandomJsonFromData(relativePath = "users") {
  const data = new SharedArray(relativePath, function () {
    const array = readJsonFromData(relativePath);
    return array;
  });
  return data[Math.floor(Math.random() * data.length)];
}