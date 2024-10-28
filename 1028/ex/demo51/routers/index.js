const {Router} = require("express")
const {indexController, currentController} = require("../controllers")

const router = Router()

router.route('/').get(indexController)
router.route('/current').get(currentController)

module.exports = {router}