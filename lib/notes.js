module.exports = (id, notesArr) => {
    return notesArr.filter(note => note.id === id)[0];
}
