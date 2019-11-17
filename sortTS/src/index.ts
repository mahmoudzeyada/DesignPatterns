import { NumbersCollection } from "./NumbersCollection";
import { CharsCollection } from "./CharsCollection";
import { LinkedList } from "./LinkedList";

const nObj = new NumbersCollection([1, 4, 2, 3]);
const cObj = new CharsCollection("kjkdjdk");
const lObj = new LinkedList();
lObj.add(1);
lObj.add(5);
lObj.add(2);
cObj.sort();
nObj.sort();
lObj.sort();
console.log(nObj.data);
console.log(cObj.data);
lObj.print();
