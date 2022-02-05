const path = require('path');
const router = require('express').Router();

//grabs notes page upon navigating
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
//grabs landing page to render upon navigating to site
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router