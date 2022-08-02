class indexedMap {
    constructor(array){
        this.value = array?array:[];
    }
    set(key, value){
        if((typeof key === 'string' || typeof key === 'number')
        && (typeof value === 'string' || typeof value === 'number')){
        this.value.push({'key': key, 'value': value});
        } else return 'Wrong argument type';
    }
    has(key){
        if(typeof key === 'string' || typeof key === 'number'){
            for(let i = 0; i < this.value.length; i++){
                if(this.value[i].key === key) return true;
            }
            return false;
        } else return 'Wrong argument type';
    }
    hasIndex(index){
        if(typeof index === 'number'){
            return this.value[index]?true:false
        } else return 'Wrong argument type';
    }
    get(key){
        if(typeof key === 'string' || typeof key === 'number'){
            for(let i = 0; i < this.value.length; i++){
                if(this.value[i].key === key) return this.value[i].key;
            }
            return null;
        } else return 'Wrong argument type';
    }
    getByIndex(index){
        if(typeof index === 'number' && index >= 0){
            return this.value[index]?this.value[index]:null;
        } else return 'Wrong argument type';
    }
    remove(key){
        if(typeof key === 'string' || typeof key === 'number'){
            for(let i = 0; i < this.value.length; i++){
                if(this.value[i].key === key) {
                    this.value.splice(i, 1);
                    break;
                }
            }
            return [...this.value];

        } else return 'Wrong argument type';
    }
    size(){
        return this.value.length;
    }
    forEach(func){
        for(let i = 0; i < this.value.length; i++){
            func(this.value[i].value, this.value[i].key, i);
        }
    }
    union(...maps){
        this.value = [...this.value, ...maps]
        return [...this.value];
    }
    uniq(){
        const uniqResult = [];
        const strArray = [];
        for (let i = 0; i < this.value.length; i++) {
            if (!strArray.includes(JSON.stringify(this.value[i]))) {
                strArray.push(JSON.stringify(this.value[i]));
                uniqResult.push(this.value[i]);
            }
        }
        return uniqResult;
    }
    uniqKeys(){
        const uniqResult = [];
        const uniqKeyArray = [];
        for (let i = 0; i < this.value.length; i++) {
            if (!uniqKeyArray.includes(this.value[i].key)) {
                uniqKeyArray.push(this.value[i].key);
                uniqResult.push(this.value[i]);
            }
        }
        return uniqResult;
    }

    sortKeyBubble() {
        for (let j = this.value.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
              if (this.value[i].key > this.value[i + 1].key) {
                let saveItem = this.value[i];
                this.value[i] = this.value[i + 1];
                this.value[i + 1] = saveItem;
              }
            }
          }
          return [...this.value];
    }
    quickValueSort(){
        if (this.value.length < 2) {
            return this.value;
          }
          const pivot = this.value[0].value;
          let leftArr = [];
          let rightArr = [];
          let centerArr = [];
          for (let item of this.value) {
            if (item.value < pivot) {
                leftArr.push(item);
            } else if (item.value > pivot) {
                rightArr.push(item);
            } else {
                centerArr.push(item);
            }
          }
          return [
            ...leftArr,
            ...centerArr,
            ...rightArr
          ];
    }
    reverse() {
        let reversResult = this.value.reverse();
        return [...reversResult];
    }

    setTo(index, value) {
        if((typeof index ==='number' && index >= 0) && (value.key && value.value)){
            this.value.splice(index, 0, value);
            return [...this.value];
        } else return 'Wrong argument type';
    }
    removeAt(index, count = 1) {
        if((typeof index ==='number' && index >= 0) && (typeof count ==='number' && count >= 0)){
            this.value.splice(index, count);
            return [...this.value];
        } else return 'Wrong argument type';
    }

}


const myMap = new indexedMap();
const myFuncforEach = (value, key, index) => console.log(`value: ${value}, key: ${key}, index: ${index}`);

myMap.set('a', '1');
myMap.set('h', '8');
myMap.set('b', '2');
myMap.set('i', '9');
myMap.set('c', '3');
myMap.set('j', '10');
myMap.set('d', '4');
myMap.set('g', '7');
myMap.set('f', '6');
myMap.set('e', '5');


console.log(myMap.value)
console.log(myMap.sortKeyBubble())
console.log(myMap.quickValueSort())