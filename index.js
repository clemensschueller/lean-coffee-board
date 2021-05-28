const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'lean-coffee-board'

const client = new MongoClient(url)
// Use connect method to connect to the server
client.connect(function (err) {
  assert.strictEqual(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)
  const collection = db.collection('users')

  client.close()
})

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('users')
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
    assert.strictEqual(err, null)
    assert.strictEqual(3, result.result.n)
    assert.strictEqual(3, result.ops.length)
    console.log('Inserted 3 documents into the collection')
    callback(result)
  })
}
