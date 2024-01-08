const cart = require("../models/cart.model");


async function createCart(user) {

  try {

    const cart2 = new cart({ user });

    const createCart = await cart2.save();
    return createCart;

  } catch (error) {

    throw new Error(error.message);
  }
}

module.exports = { createCart };
