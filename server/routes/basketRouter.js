const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/',checkRole('USER'),basketController.create)
router.delete('/:id',checkRole('USER'),basketController.delete)
router.get('/all',checkRole('USER'),basketController.getAll)
router.get('/:id',checkRole('USER'),basketController.getOne)




module.exports = router;