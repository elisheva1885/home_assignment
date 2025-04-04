const express = require("express")
const router = express.Router()
const ordersController = require('../controllers/ordersController')

router.post("/", ordersController.createOrder)
router.get("/all", ordersController.readAllOrdersAdmin)
router.get("/", ordersController.readOrdersStatusAdmin)
router.get("/supplier", ordersController.readOrdersBySupplier)
router.put("/supplier", ordersController.updateOrderStatusSupplier)
router.put("/", ordersController.updateOrderStatusAdmin)

module.exports = router