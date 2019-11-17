import { IAnalyzer, IOutputTarget } from "./interfaces";
import { parsedMatchData } from "./utils";
import { WinAnalyzer } from "./analyzers/WinAnalyzer";
import { HtmlReport } from "./reports/HtmlReport";

export class Summary {
  public static htmlReport(teamName: string): Summary {
    return new Summary(new WinAnalyzer(teamName), new HtmlReport());
  }
  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}

  public printAndPrintReport(matches: parsedMatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
