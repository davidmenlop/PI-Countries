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

router.post("/", async (req, res) => {
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
});

module.exports = router;
