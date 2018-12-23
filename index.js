
const HashTable = require('./src/hashTable')

const ht = new HashTable(10);

ht.insert('Dean','dean@gmail.com')
ht.insert('Dane','dane@gmail.com')
ht.insert('Megan','megan@gmail.com')
ht.insert('John','john@gmail.com')
ht.insert('Jack','jack@gmail.com')
ht.insert('Jim','jim@gmail.com')
ht.insert('Abraham','abraham@gmail.com')

ht.insert('Dane','dane@yahoo.com')


console.log(ht.retrieveAll());