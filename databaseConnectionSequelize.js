const is_Qoddi = process.env.is_Qoddi || false;

const dbConfigQoddi = "mongodb+srv://xiao:Zxx53625140%40@cluster0.h5qplzn.mongodb.net/?retryWrites=true&w=majority";

const dbConfigLocal = "mongodb://localhost:27017/?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=localhost&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true";

if (is_heroku) {
	var databaseConnectionString = dbConfigQoddi;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		