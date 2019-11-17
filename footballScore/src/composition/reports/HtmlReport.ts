import { IOutputTarget } from "../interfaces";
import fs from "fs";

export class HtmlReport implements IOutputTarget {
  public print(data: string): void {
    const report = `
        <h1>Report Analyzes</h1>
        <p>${data}</p>
      `;
    fs.writeFileSync("./htmlReport.html", report);
  }
}
