import { LinkedList } from './linked-list';

export class Stack<T> extends LinkedList<T> {
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
        if (!this._head.next) {
            const current = this._head;
            this.clear();
            return current.data;
        }
        let current = this._head;
        let prev;
        for (let i = 1; i < this.length; i++) {
            if (i === this.length - 1) {
                prev = current;
            }
            current = current.next;
        }
        prev.removeNext();
        return current.data;
    }
}

/* Demo */
const q = new Stack<number>();
q.push(3);
q.push(7);
q.push(1);
q.push(9);
console.log(q.toArray())
while (q.length) {
  console.log(q.pop());
}