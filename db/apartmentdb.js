const { MongoClient, ObjectId } = require("mongodb");

function myDB() {
	const myDB = {};

	//From MongoDB atlas:

	// const MongoClient = require('mongodb').MongoClient;
	//const uri = "mongodb+srv://harman:pass@cluster0.zk2xm.mongodb.net/<dbname>?retryWrites=true&w=majority";
	// const client = new MongoClient(uri, { useNewUrlParser: true });
	// client.connect(err => {
	// const collection = client.db("test").collection("devices");
	// // perform actions on the collection object
	// client.close();
	// });


	 const uri = process.env.MONGO_URL || "mongodb://localhost:27017";/*process.env.MONGO_URL || localhost:27017;*/
	// const uri = "mongodb://harman:pass@cluster0.zk2xm.mongodb.net/test";

	myDB.getAPTdata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobcalendar = db.collection("johnsapartment");
		const query = {};
		console.log(" Inside Job Calendar Query ", jobcalendar.find({}).toArray());
		return jobcalendar.find(query).toArray();
	};


	myDB.getaptandata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobcalendar = db.collection("perslist");
		const query = {};
		console.log(" Inside Job Calendar Query ", jobcalendar.find({}).toArray());
		return jobcalendar.find(query).toArray();
	};


	myDB.createPL = async (post) => {
		console.log("created post:", post);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobposts = db.collection("perslist");
		return await jobposts.insert(post);
	};

		myDB.createAppEvent = async (post) => {
		console.log("Connected 1");
		const client = new MongoClient(uri);
		await client.connect();
		console.log("Connected 2");
		const db = client.db("apartments");
		const jobposts = db.collection("perslist");
		console.log("Connected 3", post);

		return await jobposts.insert(post);
	};

	myDB.delAppEvent = async (post) => {
		console.log("in delete function");
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobposts = db.collection("perslist");
		console.log("connected delete", post.title);
		var myquery = { title: post.title };
		console.log("jobpostquery", jobposts.find(myquery));
		return await jobposts.deleteOne(myquery);
	};


	myDB.updateAppEvent = async (post) => {
		console.log("Post_id", post);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobposts = db.collection("perslist");
		var myquery = { title: post.title };
		var newvalues = {
			$set: { title: post.title, notes: post.notes},
		};
		/*console.log("jobpostquery", jobposts.find(myquery));*/
		return await jobposts.updateOne(myquery, newvalues);
	};


	return myDB;
}

module.exports = myDB();

