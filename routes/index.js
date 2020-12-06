var express = require("express");
var router = express.Router();

const myDB = require("../db/apartmentdb.js");

/* GET home page. */
router.get("/calendar", async (req, res, next) => {
	const caldata = await myDB.getCaldata();
	console.log(next);
	res.json(caldata);
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

router.post("/createappevent", async (req, res) => {
	const post = req.body;
	await myDB.createAppEvent(post);
	res.redirect("/");
	res.send({message: "Event Created"});
});


router.post("/delappevent", async (req, res) => {
	const post = req.body;
	await myDB.delAppEvent(post);
	res.redirect("/");
	res.send({message: "Event Deleted"});
});

router.post("/delAppPost", async (req, res) => {
	const post = req.body;
	const dbResponse = await myDB.delApplication(post);
	res.send(dbResponse);
});


router.post("/updateappevent", async (req, res) => {
	const post = req.body;
	await myDB.updateAppEvent(post);
	res.redirect("/");
	res.send({message: "Event Updated"});
});


module.exports = router;
