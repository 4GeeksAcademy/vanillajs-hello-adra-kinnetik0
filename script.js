let pronoun = ["the", "our", "your", "his"];
let adj = ["great", "big", "little", "terrific", "georgeous"];
let noun = ["jogger", "racoon", "runner", "eco", "system"];

let domainName = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      domainName.push(`${pronoun[i]}${adj[a]}${noun[n]}.com`);
      domainName.push(`${pronoun[i]}${adj[a]}${noun[n]}.net`);
    }
  }
}

console.log(domainName);
