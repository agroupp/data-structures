export class LinkedListNode<T> {
    private readonly _data: T;
    get data() { return this._data; }

    private _next: LinkedListNode<T>;
    get next() { return this._next; }

    constructor(data: T) {
        this._data = data;
    }

    setNext(node: LinkedListNode<T>): void {
        this._next = node;
    }

    removeNext(): void {
        this._next = null;
    }
}

export class LinkedList<T> {
    protected _head: LinkedListNode<T>;
    get head(): LinkedListNode<T> { return this._head; }

    get tail(): LinkedListNode<T> {
        if (!this._head) {
            return null;
        }
        let current = this._head;
        while(current.next) {
            current = current.next;
        }
        return current;
    }

    get length(): number {
        if (!this._head) {
            return 0;
        }
        let counter = 1;
        let current = this._head;
        while(current.next) {
            current = current.next;
            counter++;
        }
        return counter;
    }

    constructor(data?: T) {
        if (data) {
            this._head = new LinkedListNode<T>(data);
        }
    }

    setHead(data: T): void {
        this._head = new LinkedListNode<T>(data);
    }

    append(data: T): void {
        if (!this._head) {
            this.setHead(data);
            return;
        }
        const newNode = new LinkedListNode<T>(data);
        const tail = this.tail;
        tail.setNext(newNode);
    }

    clear() {
        this._head = null;
    }

    toArray(): T[] {
        let current = this._head;
        const result: T[] = [this._head.data];
        while(current.next) {
            current = current.next;
            result.push(current.data);
        }
        return result;
    }
}

export function fromArray<T>(source: T[]): LinkedList<T> {
    if (!source || source.length === 0) {
        return null;
    }
    const list = new LinkedList<T>(source[0]);
    for (let i = 1; i < source.length; i++) {
        list.append(source[i]);
    }
    return list;
}


/* Demo 
const list = new LinkedList<number>(1);
console.log(`Head: ${list.head.data}, Length: ${list.length}, Tail: ${list.tail.data}`);
list.append(15);
list.append(18);
list.append(12);
console.log(`Head: ${list.head.data}, Length: ${list.length}, Tail: ${list.tail.data}`);

const listFromArray = fromArray([18, 14, 27, 15, 2]);
console.log(`List from array: length: ${listFromArray.length}, ${listFromArray.toArray()}`);
*/
