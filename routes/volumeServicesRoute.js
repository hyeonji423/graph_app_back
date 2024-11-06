const router = require('express').Router();
const volumeServicesRoute = require('../controllers/volumeServicesCtril');

router.get('/volumeServices', volumeServicesRoute.getVolumeServices);

module.exports = router;