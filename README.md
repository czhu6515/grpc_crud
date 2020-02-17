
# Simple gRPC CRUD using Node.js



Simple CRUD server using the gRPC protocol using this [guide](https://medium.com/@alfianlosari/building-grpc-service-server-note-crud-api-with-node-js-bcc5478d5bdb).

More on implementing gRPC using Node.js from their official docs found [here](https://grpc.io/docs/tutorials/basic/node/).


----
## Usage
1. Clone repo `git clone https://github.com/czhu6515/grpc_crud.git`
2. CD into project directory `cd grpc_crud`
3. Instal npm packages `npm i`
4. Spin up gRPC server `node index.js`
5. All crud functionality in `utils` folder
 * to see server log out all Notes, run `node read_notes.js`
 * to add a note, run `node insert_note.js`

6. Unfortunately return of serialized note to client stopped working when upgrading to @grpc/grpc_loader from default grpc client. This is currently being investigated
