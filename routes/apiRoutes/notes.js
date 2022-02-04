const router = require("express").Router();
const fs = require("fs");
const db = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const deleteNote = require("../../lib/notes");

router.get("/notes", (req, res) => {
	res.json(db);
});

router.post("/notes", (req, res) => {
	const { title, text } = req.body;
	const id = uuidv4();
	db.push({ title, text, id });
	fs.writeFileSync("db/db.json", JSON.stringify(db));
	res.json(db);
});

router.delete("/notes/:id", (req, res) => {
	const result = deleteNote(req.body.id, db);
	db.splice(db.indexOf(result), 1);
    fs.writeFileSync('db/db.json', JSON.stringify(db))
	res.json(db);
});

module.exports = router;
