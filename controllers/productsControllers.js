const WooCommerce = require("../config/index");
const express = require("express");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await WooCommerce.get("products", {
      per_page: 50,
    });
    res.status(200).send(allProducts.data);
  } catch (err) {
    console.log("Error");
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const allProducts = await WooCommerce.get(
      `products?category=${req.params.id}`
    );
    res.status(200).send(allProducts.data);
  } catch (err) {
    console.log("Error");
  }
};

const getProductsByTag = async (req, res) => {
  try {
    const allProducts = await WooCommerce.get(`products?tag=${req.params.id}`);
    res.status(200).send(allProducts.data);
  } catch (err) {
    console.log("Error");
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const oneProduct = await WooCommerce.get(`products/${id}`);
    res.status(200).send(oneProduct.data);
  } catch (err) {
    console.log(" esto es un error .. Error");
  }
};
const getMultipleProductsByIds = async (req, res) => {
  const ids = req.query.include;
  try {
    const productsData = await WooCommerce.get(`products?include=${ids}`);
    res.status(200).send(productsData.data);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

const getTagProduct = async (req, res) => {
  try {
    const tagProduct = await WooCommerce.get("products/tags");
    res.status(200).send(tagProduct.data);
  } catch (err) {
    console.log(" esto es un error .. Error");
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await WooCommerce.get("products/reviews");
    res.status(200).send(reviews.data);
  } catch (err) {
    console.log(err);
  }
};

const getTypeOfProduct = async (req, res) => {
  const type = req.params.type;
  try {
    const typeOfProduct = await WooCommerce.get(`products?${type}=true`);
    res.status(200).send(typeOfProduct.data);
  } catch (err) {
    console.log(" esto es un error .. Error");
  }
};

const getFilteredProducts = async (req, res) => {
  console.log("SOY LO QUE RECIBE EL BACK DESDE PD", req.body);
  try {
    const filteredProduct = await WooCommerce.get(`products`, req.body);
    res.status(200).send(filteredProduct.data);
  } catch (err) {
    console.log(" esto es un error .. Error");
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductsByTag,
  getOneProduct,
  getTagProduct,
  getAllReviews,
  getTypeOfProduct,

  getFilteredProducts,

  getMultipleProductsByIds,

};
