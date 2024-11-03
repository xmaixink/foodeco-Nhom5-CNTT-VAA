import express from "express";
import productController from "../controllers/productController.js";
import restaurantController from "../controllers/restaurantController.js";
import userController from "../controllers/userController.js";
<<<<<<< HEAD
import vendorController from "../controllers/vendorController.js";
=======
import vendorController from "../controllers/vendorController.js"
import restaurantController from "../controllers/restaurantController.js"
import productController from "../controllers/productController.js";
>>>>>>> 60a8c63 (get all delete update)

let router = express.Router();

let initWebRoutes = (app) => {

	router.get("/api/get-all-users", userController.getAllUser)
	router.post("/api/create-new-user", userController.createNewUser)
	router.delete("/api/delete-user", userController.deleteUser)
	router.put("/api/update-user", userController.updateUser)

	router.get("/api/get-all-vendors", vendorController.getAllVendors)
	router.post("/api/create-new-vendor", vendorController.createNewVendor)

	router.post("/api/create-new-restaurant", restaurantController.createNewRestaurant)
	router.get("/api/get-all-restaurant", restaurantController.getAllRestaurants)

	router.post("/api/create-new-product", productController.createNewProduct)
	router.get("/api/get-all-product", productController.getAllProduct)
	router.delete("/api/delete-product", productController.deleteProduct)
	router.put("/api/update-product", productController.updateProduct)

	return app.use("/", router);

}

module.exports = initWebRoutes;

