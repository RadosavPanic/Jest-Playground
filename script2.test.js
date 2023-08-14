const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls star wars api to get people", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it("calls star wars api to get people", (done) => {
  expect.assertions(2);
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
