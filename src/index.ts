import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

enum MatchResult {
  HomeWin = "H",
  Away = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.Away) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins}`);
