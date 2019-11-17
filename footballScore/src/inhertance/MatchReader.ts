import { CsvFileReader } from "./CsvFileReader";
import { Results, parsedMatchData, dateStringToDate } from "./utils";

export class MatchReader extends CsvFileReader<parsedMatchData> {
  public mapFunction(row: string[]): parsedMatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as Results,
      row[6]
    ];
  }
}
