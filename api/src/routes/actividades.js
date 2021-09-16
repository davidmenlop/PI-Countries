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

/* router.post("/", async (req, res) => {
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
  const { name, level, time, season, /* id */ paises } = req.body;
  //console.log(time)
  //console.log(paises)
  const createdActivity = await Activity.create({
    /* id, */
    name,
    level,
    time,
    season,
  });
  try {
    await createdActivity.addCountries(paises)
    return res.send("agregado");
  } catch (err) {
    return res.sendStatus(404);
  }
});

/* router.get("/:idAct", async (req, res) => {
  const { idAct } = req.params;
  if (!idAct) {
    return res.send("No hay id");
  }

  if (typeof idAct === "string") {
    let countryId = await Activity.findAll();
    let countriesId = await countryId.filter((el) =>
      el.name.toLowerCase().includes(idAct.toLowerCase())
    );
    //console.log(countriesId)
    countriesId.length
      ? res.status(200).send(countriesId)
      : res.status(404).send("Pais no encontrado");
  } else res.send("mal id");
});

router.put("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const { level, time } = req.body;
    const actualizado = await Activity.update({ level, time }, {
      where: {name}
    });
    res.status(200).send(actualizado)
  } catch (error){res.status(400).send('No se pueden actualizar los datos')}
});

router.delete('/:name', async (req, res)=>{
  try{
    const {name} = req.params;
    await Activity.destroy({
      where:{name}
    })
    res.status(200).send("Actividad Eliminada")
  } catch(err){
    res.status(400).send('No se puede eliminar')
  }
}) */

module.exports = router; 
