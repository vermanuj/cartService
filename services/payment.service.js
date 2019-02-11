"use strict";

const DbService = require("moleculer-db");
const MongoDbAdapter = require("moleculer-db-adapter-mongo");


module.exports = {
	name: "payments",
	mixins: [DbService],
	adapter: new MongoDbAdapter("mongodb://mongouser:mongouser@cluster0-shard-00-00-ekmyr.mongodb.net:27017,cluster0-shard-00-01-ekmyr.mongodb.net:27017,cluster0-shard-00-02-ekmyr.mongodb.net:27017/cart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"),
    collection: "products",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service metadata
	 */
	metadata: {

	},

	/**
	 * Service dependencies
	 */
	//dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		
	},

	/**
	 * Events
	 */
	events: {
    "purchase.initiated"(products){
	  console.log("EVENT purchase.initiated:", products);
	 
	  this.updateProduct(products);
	  

    },
    "$**"(payload, sender, event) {
      console.log(`Event '${event}' received from ${sender} node:`, payload);
  }
	},

	/**
	 * Methods
	 */
	methods: {
updateProduct(product){

this.adapter.updateById(product,{$inc:{qty : -1}});
}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};