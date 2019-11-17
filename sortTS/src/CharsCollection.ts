import { Sorter } from "./Sorter";

export class CharsCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    const chars = [...this.data];
    const temp = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = temp;
    this.data = chars.join("");
  }
}
