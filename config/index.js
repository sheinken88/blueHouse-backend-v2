const WooComerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require("dotenv").config();

const WooCommerce = new WooComerceRestApi({
  url: process.env.URL,
  consumerKey: process.env.CONSUMERKEY,
  consumerSecret: process.env.CONSUMERSECRET,
  version: process.env.VERSION,
});

module.exports = WooCommerce;
