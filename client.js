const grpcLoader = require('@grpc/proto-loader')
const grpc = require('grpc')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PROTO_PATH = './notes.proto'

const NoteService = grpcLoader.load(PROTO_PATH).NoteService
const client = new NoteService('localhost:8008', 
    grpc.credentials.createInsecure())



rl.question('cake or death', () => {
    console.log('cake')
    rl.close()
})

rl.on('close', () => {
    console.log('later alligator')
    process.exit(0)
})

module.exports = client