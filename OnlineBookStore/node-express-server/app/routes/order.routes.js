module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create Order
    router.post("/", orders.create);

    // Retrieve all Orders
    router.get("/:id", orders.findAll);

    // Delete a Order with id
    router.delete("/:id", orders.delete);
  
    app.use("/api/orders", router);
  };