/*
This is the HashTable class from the Udemy Data Structures & Algorithms course.
*/

class HashTable {
  constructor(size=55) {
    this.keyMap = new Array(size);
  }
  
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  
  set(key, value) {
    let hashed = this._hash(key);
    if(!this.keyMap[hashed]) {
      this.keyMap[hashed] = [];
    }
    this.keyMap[hashed].push([key, value]);
  }

  get(key) {
    let hashed = this._hash(key);
    if(this.keyMap[hashed].length === 1) {
      return this.keyMap[hashed][0];
    } else {
      for(let i = 0; i < this.keyMap[hashed].length; i++) {
        if(this.keyMap[hashed][i][0] === key) {
          return this.keyMap[hashed][i];
        }
      }
    }
  }
}
