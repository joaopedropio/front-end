exports.port = process.env.APP_PORT || "2000";
exports.domain = process.env.APP_DOMAIN || "localhost";

const api_domain = process.env.API_DOMAIN || "192.168.1.50";
const api_port = process.env.API_PORT || "80";
exports.url = `http://${api_domain}:${api_port}`; 