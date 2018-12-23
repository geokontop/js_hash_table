

function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
  
  function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
  
  HashTable.prototype.hash = function(key){
    var total = 0;
    for (let i = 0; i<key.length; i++){
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  }
  
  HashTable.prototype.insert = function(key, value){
    let index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else if(this.buckets[index].key === key){
      this.buckets[index].value = value;
    }
    else {
      let currentNode = this.buckets[index];
      while (currentNode.next){
        if(currentNode.next.key===key){
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  };
  
  
  HashTable.prototype.get = function(key){
    const index = this.hash(key);
    if(!this.buckets[index]) return null;
    else {
      let currentNode = this.buckets[index];
      while(currentNode){
        if(currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
    }
  }
  
  HashTable.prototype.retrieveAll = function(){
    const all = [];
    for(let i = 0;i<this.numBuckets; i++){    
      currentNode=this.buckets[i];
      while(currentNode){
        all.push({'key':currentNode.key, 'value':currentNode.value});
        currentNode=currentNode.next;
      }
    }  
    return all;
  }
  
  module.exports = HashTable;