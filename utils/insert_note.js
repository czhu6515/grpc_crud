const client = require('../client')

let newNote = {
    title: "New Note",
    content: "New Note Content"
}

client.insert(newNote, (error, note) => {
    if (!error) {
        console.log('New Note created successfully', note)
    } else {
        console.error(error)
    }
})