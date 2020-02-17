const grpcLoader = require('@grpc/proto-loader')
const grpc = require('grpc')

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}

const NotesDefinition = grpcLoader.loadSync('notes.proto', options);
const NoteService = grpc.loadPackageDefinition(NotesDefinition).NoteService;

const client = new NoteService('localhost:8008', 
    grpc.credentials.createInsecure())



module.exports = client