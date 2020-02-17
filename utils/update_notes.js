const client = require('./client')

let updatedNote = {
    id: '1',
    title: "updated",
    content: "updated content"
}

client.update(updatedNote, (error, note) => {
    if (!error) {
        console.log('New Note created successfully', note)
    } else {
        console.error(error)
    }
})