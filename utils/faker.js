import { faker } from "@faker-js/faker";

export const getRandomName = function () {
  return faker.person.firstName();
};
