const MongoClient = require("mongodb").MongoClient;
const is_qoddi = process.env.IS_QODDI || false;
const qoddiURI ="mongodb+srv://xiao:Zxx53625140%40@cluster0.h5qplzn.mongodb.net/?retryWrites=true&w=majority"
const localURI = "mongodb://127.0.0.1:27017/?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=localhost&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true";
if (is_qoddi) {
	var database = new MongoClient(qoddiURI,
		{ useNewUrlParser: true, useUnifiedTopology: true });
}
else {
	var database = new MongoClient(localURI,
		{ useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = database;
		
