import { Sorter } from "./Sorter";
import { LNode } from "./LNode";

export class LinkedList extends Sorter {
  public head: LNode | null = null;

  public add(value: number): void {
    const node = new LNode(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  public print(): void {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    return this._at(leftIndex).value > this._at(rightIndex).value;
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    const temp = this._at(leftIndex).value;
    this._at(leftIndex).value = this._at(rightIndex).value;
    this._at(rightIndex).value = temp;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let counter = 0;
    let node: LNode | null = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  private _at(index: number): LNode {
    if (!this.head) {
      throw new Error("there is no head");
    }
    let node: LNode | null = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("error upper bound");
  }
}
