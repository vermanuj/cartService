"use strict";

const DbService = require("moleculer-db");
const MongoAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
	name: "products",
	mixins: [DbService],
	adapter: new MongoAdapter("mongodb://mongouser:mongouser@cluster0-shard-00-00-ekmyr.mongodb.net:27017,cluster0-shard-00-01-ekmyr.mongodb.net:27017,cluster0-shard-00-02-ekmyr.mongodb.net:27017/cart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"),
    collection: "products",
    actions: {
        allProducts:{
            handler(ctx) {
                let query = {};
                
               
                return this.adapter.find({ query });
        }
    },
    purchase:{
        params:{
            prodId:"string"
        },
        handler(ctx){
            ctx.emit("purchase.initiated", ctx.params.prodId,["payments"]);
            console.log("Event Emit");
            
            return this.adapter.findById(ctx.params.prodId);
        }
    },
      productType:{
        params: {
            productType: "string",
            price:"string"
        },
        handler(ctx) {
            let query = {};
            if(ctx.params.productType)
                query ["productType"]= ctx.params.productType ;
           if( ctx.params.price){
               query["Price"] ={$lt:parseInt(ctx.params.price)};
           }
            return this.adapter.find({ query });
        }
      },
        make: {
            params: {
				make: "string"
			},
            handler(ctx) {
                let query = {};
                
                query = { Make: ctx.params.make };

                return this.adapter.find({ query });
            }
        }
    }
	


};