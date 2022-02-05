const router = require("express").Router();
const fs = require("fs");
let db = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");

//get function which pulls the notes upon loading and whenver information is changed
router.get("/notes", (req, res) => {
	//reads the fil before parsing the JSON and returning it
	const readDB = fs.readFileSync("db/db.json", {
		encoding: "utf8",
		flag: "r",
	});
	res.json(JSON.parse(readDB));
});
//post function whcih adds information to the database
router.post("/notes", (req, res) => {
	const { title, text } = req.body;
	//unique id
	const id = uuidv4();
	//takes in the title and text from user with a unique id and stores
	db.push({ title, text, id });
	fs.writeFileSync("db/db.json", JSON.stringify(db));
	res.json(db);
});
//delete function which deltes a specific entry
router.delete("/notes/:id", (req, res) => {
	//database is set to filter out the id matching the id from the object passed in
	db = db.filter((note) => note.id !== req.params.id);
	fs.writeFileSync("db/db.json", JSON.stringify(db));
	res.json(db);
});

module.exports = router;
