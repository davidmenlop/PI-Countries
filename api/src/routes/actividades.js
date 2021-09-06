const { Router } = require("express");
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const activity = await Activity.findAll({
    include: Country,
  });
  res.json(activity);
});

/* router.post("/activity", async (req, res) => {
  try {
    const { name, level, time, season, paises } = req.body;
    let [create, hola] = await Activity.findOrCreate({
      where: { name },
      defaults: {
        name,
        level,
        time,
        season,
      },
    });
    create.setCountries(paises);
    res.send(create);
  } catch (error) {
    res.send(error);
  }
}); */

router.post("/", async (req, res) => {
  const { name, level, time, season, id } = req.body;
  const createdActivity = await Activity.create({
    id,
    name,
    level,
    time,
    season,
  });
  try {
    const countries = await Country.findAll({
      where: {
        id:id
      }
    })
    await createdActivity.addCountries(countries)
    return res.send("agregado");
  } catch (err) {
    return res.sendStatus(404);
  }
});

module.exports = router;
