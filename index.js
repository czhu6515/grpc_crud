const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc')
const uuidv1 = require('uuidv1')

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    arrays: true
}

const NotesDefinition = protoLoader.loadSync('notes.proto', options);
const notesProto = grpc.loadPackageDefinition(NotesDefinition);

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]
console.log(notes)
const server = new grpc.Server()

server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, "notes")
    },
    insert: (call, callback) => {
        let note = call.request
        note.id = uuidv1()
        notes.push(note)
        callback(null, note)
    },
    update: (call, callback) => {
        let note = call.request
        const ind = notes.findIndex(ele => ele.id === note.id)
        if (ind !== -1 ){
            const newNote = Object.assign(notes[ind], note)  
            notes.splice(ind, 1)
            notes.push(newNote)
            callback(null, newNote)
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'no note with that id found!'
            })
        }
    },
    delete: (call, callback) => {
        let note = call.request
        const ind = notes.findIndex(ele => ele.id === note.id)
        if (ind !== -1) {
            notes.splice(ind, 1)
            callback(null, {})
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'no note with that id found!'
            })
        }
        
    }
})


const PORT = '127.0.0.1:8008'
server.bind(PORT, grpc.ServerCredentials.createInsecure())

console.log(`Server running on PORT: ${PORT}`)

server.start()