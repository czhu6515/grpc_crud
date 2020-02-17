const client = require('../client')

client.remove({id: '1'}, (error, _) => {
    if (!error) {
        console.log('note has been deleted!')
    } else {
        console.error(error)
    }
})