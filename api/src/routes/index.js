const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const rutasPaises = require('./paises');
const rutasActividades = require('./actividades')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', rutasPaises)
router.use('/actividades', rutasActividades)

module.exports = router;
