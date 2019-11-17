export abstract class Sorter {
  public abstract length: number;
  public sort(): void {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
  protected abstract compare(indexLeft: number, indexRight: number): boolean;
  protected abstract swap(indexLeft: number, indexRight: number): void;
}
