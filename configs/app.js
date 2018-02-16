exports.port = process.env.APP_PORT || "2000";
exports.domain = process.env.APP_DOMAIN || "localhost";

const api_domain = process.env.API_DOMAIN || "localhost";
const api_port = process.env.API_PORT || 5000;
exports.url = `http://${api_domain}:${api_port}`; 