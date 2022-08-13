const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

const subway = new DoublyLinkedList();
/*Adding to the head */
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
/*Adding to the tail */
subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
/*removing from head and tail without iterating */
subway.removeHead();
subway.removeTail();
/*remove from within by iterating */
subway.removeByData('TimesSquare');
subway.printList();