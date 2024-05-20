const PRONOUN = ["the", "our", "your", "his"];
const ADJ = ["great", "big", "little", "terrific", "georgeous"];
const NOUN = ["jogger", "racoon", "runner", "eco", "system"];

let domainName = [];

for (let i = 0; i < PRONOUN.length; i++) {
  for (let a = 0; a < ADJ.length; a++) {
    for (let n = 0; n < NOUN.length; n++) {
      domainName.push(`${PRONOUN[i]}${ADJ[a]}${NOUN[n]}.com`);
      domainName.push(`${PRONOUN[i]}${ADJ[a]}${NOUN[n]}.net`);
    }
  }
}

console.log(domainName.join('\n'));
