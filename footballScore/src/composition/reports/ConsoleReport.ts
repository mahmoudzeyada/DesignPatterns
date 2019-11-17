import { IOutputTarget } from "../interfaces";

export class ConsoleReport implements IOutputTarget {
  public print(data: string): void {
    console.log(data);
  }
}
