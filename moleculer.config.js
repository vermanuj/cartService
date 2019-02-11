"use strict";

module.exports = {
	namespace: "dev",
	nodeID: "node-1",

	logger: true,
	logLevel: "info",
	logFormatter: "default",

	serializer: null,

	requestTimeout: 0 * 1000,
	requestRetry: 0,
	maxCallLevel: 0,
	heartbeatInterval: 5,
	heartbeatTimeout: 15,

	disableBalancer: false,

	registry: {
		strategy: "RoundRobin",
		preferLocal: true
	},

	
    

	circuitBreaker: {
		enabled: true,
		maxFailures: 3,
		halfOpenTime: 10 * 1000,
		failureOnTimeout: true,
		failureOnReject: true
	},

	validation: false,
	validator: null,
	metrics: false,
	metricsRate: 1,
	statistics: false,
	internalActions: true,

	hotReload: true
};