import { LinkedList } from './linked-list';

export class Queue<T> extends LinkedList<T> {

    constructor() {
        super();
    }

    push(data: T): void {
        this.append(data);
    }

    pop(): T {
        if (!this._head) {
            return null;
        }
        const current = this._head;
        this._head = current.next;
        return current.data;
    }
}

/* Demo */
const q = new Queue<number>();
q.push(3);
q.push(7);
q.push(1);
q.push(9);
console.log(q.toArray())
while (q.length) {
    console.log(q.pop());
}
