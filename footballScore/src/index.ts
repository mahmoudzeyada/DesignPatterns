import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./composition/Summary";

const matchObject = MatchReader.defaultFileReader("./files/football.csv");
matchObject.load();

const summary = Summary.htmlReport("new castle");

summary.printAndPrintReport(matchObject.matches);
