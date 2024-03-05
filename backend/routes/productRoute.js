const express = require("express")
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productControllers")
const { isAuthenticatedUser,authorizedRoles } = require("../middleware/auth")
const router = express.Router()


router.route("/products").get(isAuthenticatedUser,authorizedRoles("admin"), getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,authorizedRoles("admin"), createProduct)
router.route("/product/:_id").put(isAuthenticatedUser,authorizedRoles("admin"), updateProduct).delete(isAuthenticatedUser,authorizedRoles("admin"), deleteProduct).get(getProductDetails)

module.exports =router