/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "COL",
  name: 'Colombia',
  flag: 'https://restcountries.eu/data/col.svg',
  capital: 'Bogotá',
  continent: 'Americas'
};

const activity = {
  name:'sky',
  level:'3',
  time: '30',
  season: 'Invierno'
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });

  describe('GET /countries/:id',()=>{
    it('should get 200',()=>
    agent.get('/countries/COL').expect(200))
  })
});
