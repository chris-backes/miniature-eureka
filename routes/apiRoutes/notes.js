const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    const { title, body } = req.body
    const id = uuidv4()
    db.push({ title, body, id })
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
})

module.exports = router;