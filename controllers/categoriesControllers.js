const WooCommerce = require("../config/index");
//const express = require("express");

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await WooCommerce.get("products/categories");
    res.status(200).send(allCategories.data);
  } catch (err) {
    console.log("Error");
  }
};

const getOneCategories = async (req, res) => {
  const id = req.params.id;
  try {
    const oneCategories = await WooCommerce.get(`products/categories/${id}`);
    res.status(200).send(oneCategories.data);
  } catch (err) {
    console.log("Error");
  }
};

module.exports = { getAllCategories, getOneCategories };
