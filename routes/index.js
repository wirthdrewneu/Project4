var express = require("express");
var router = express.Router();

const myDB = require("../db/apartmentdb.js");

/* GET home page. */
router.get("/calendar", async (req, res, next) => {
	const caldata = await myDB.getAPTdata();
	console.log(next);
	res.json(caldata);
});


router.get("/plist", async (req, res, next) => {
	const caldata = await myDB.getaptandata();
	console.log(next);
	res.json(caldata);
});


router.get("/perslist", async (req, res, next) => {
	const caldata = await myDB.getCaldata();
	console.log(next);
	res.json(caldata);
});

router.post("/createPL", async (req, res) => {
	const post = req.body;
	await myDB.createPL(post);

	res.send({message: "Event Created"});
});

router.post("/followpost", async (req, res) => {
	const post = req.body;
	await myDB.followpost(post);
	res.redirect("/");
	res.send({message: "Event Created"});
});

router.get("/applications", async (req, res, next) => {
	const appData = await myDB.getAppDetails();
	console.log(next);
	res.json(appData);
});

router.post("/appform", async (req, res) => {
	const post = req.body;
	await myDB.createAppPost(post);
	res.redirect("/appliedHistory");
	res.send({message: "Application Added"});
});

router.post("/updateApplication", async (req, res) => {
	const post = req.body;
	await myDB.editAppPost(post);
	res.redirect("/appliedHistory");
	res.send({message: "Application Edited"});
});




router.post("/delfollow", async (req, res) => {
	console.log("Inside Router");
	const post = req.body;
	await myDB.delfollow(post);
	res.redirect("/perslist");
	res.send({message: "Event Deleted"});
});



router.post("/delAppPost", async (req, res) => {
	const post = req.body;
	const dbResponse = await myDB.delApplication(post);
	res.send(dbResponse);
});


router.post("/updateNotes", async (req, res) => {
	const post = req.body;
	await myDB.updateNotes(post);
	res.redirect("/perslist");
	res.send({message: "Event Updated"});
});


module.exports = router;
