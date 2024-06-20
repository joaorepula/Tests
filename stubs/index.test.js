const Service = require("./src/service")
const assert = require("assert")
var sinon = require("sinon");
sinon.createSandbox()

const mocks = {
  alderaan: require("./mocks/alderaan.json"),
  tatooine: require("./mocks/tatooine.json"),
}

const BASE_URL_1 = "https://swapi.dev/api/planets/1"
const BASE_URL_2 = "https://swapi.dev/api/planets/2"
// IFEE
;(async () => {

    const service = new Service()
    const stub = sinon.stub(
      service,
      service.makeRequest.name
    )

    stub
        .withArgs(BASE_URL_1)
        .resolves(mocks.tatooine)

    stub
        .withArgs(BASE_URL_2)
        .resolves(mocks.alderaan)

    {
      const expected = {
        name: "Tatooine",
        surface_water: "1",
        appeardIn:5
      }
      const results = await service.getPlanets(BASE_URL_1)

      assert.deepStrictEqual(results,expected)
    }

})()