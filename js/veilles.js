const entries = [
  { subject: "OpenSource", date: "03/06/2020", category: "WEB" },
  { subject: "HTML 5", date: "04/06/2020", category: "DEV WEB" },
  { subject: "Ubuntu", date: "05/06/2020", category: "DEV" },
  {
    subject: "Chrome VS Mozilla",
    date: "08/06/2020",
    category: "NAVIGATEUR WEB"
  },
  { subject: "CSS", date: "09/06/2020", category: "DEV WEB" },
  { subject: "SASS", date: "10/06/2020", category: "DEV WEB" },
  { subject: "Le Cloud", date: "11/06/2020", category: "Technologie" },
  { subject: "Cloud Computing", date: "12/06/2020", category: "Technologie" },
  { subject: "AI", date: "15/06/2020", category: "Technologie" },
  { subject: "Le Versioning (Test A/B)", date: "16/06/2020", category: "DEV" },
  { subject: "Javascript", date: "17/06/2020", category: "DEV WEB" },
  { subject: "GAFAM", date: "18/06/2020", category: "CULTURE TECH" },
  { subject: "WEB 3.0", date: "19/06/2020", category: "Web" },
  { subject: "SCRUM", date: "22/06/2020", category: "Méthodologie" },
  {
    subject: "Les Méthodes Agile",
    date: "23/06/2020",
    category: "Méthodologie"
  },
  {
    subject: "Cycle en V / Crystal Clear",
    date: "24/06/2020",
    category: "Méthodologie"
  },
  { subject: "Peer programming", date: "25/06/2020", category: "Méthodologie" },
  { subject: "WEB 3.0", date: "26/06/2020", category: "CULTURE WEB" },
  {
    subject: "Extreme programming",
    date: "29/06/2020",
    category: "Méthodologie"
  },
  {
    subject: "Egoless programming",
    date: "30/06/2020",
    category: "Méthodologie"
  },
  { subject: "WAI", date: "01/07/2020", category: "WEB" },
  {
    subject: "Crypto & BC, les sites et newsletters",
    date: "02/07/2020",
    category: "CULTURE WEB"
  },
  { subject: "Tailwind css", date: "03/07/2020", category: "DEV WEB" },
  { subject: "VR", date: "06/07/2020", category: "Technologie" },
  { subject: "Design Patterns", date: "07/07/2020", category: "Conception" },
  { subject: "Décentralisation", date: "08/07/2020", category: "Blockchain" },
  { subject: "S.O.L.I.D.", date: "09/07/2020", category: "Conception" },
  {
    subject: "Benchmark Bootstrap vs les concurrents",
    date: "13/07/2020",
    category: "DEV"
  },
  { subject: "Cypherpunk", date: "15/07/2020", category: "CULTURE WEB" },
  { subject: "Deep Web", date: "16/07/2020", category: "Web" },
  { subject: "Futurisme", date: "20/07/2020", category: "Culture" },
  { subject: "Bitcoin", date: "21/07/2020", category: "Blockchain" },
  { subject: "Ethereum", date: "22/07/2020", category: "Blockchain" },
  { subject: "Proof-of-Work", date: "23/07/2020", category: "Blockchain" },
  { subject: "Proof-of-Stake", date: "24/07/2020", category: "Blockchain" },
  { subject: "Proof-of-Authority", date: "27/07/2020", category: "Blockchain" },
  { subject: "WEB3.Js", date: "28/07/2020", category: "Dev BC" },
  { subject: "Ethers.Js", date: "29/07/2020", category: "Dev BC" },
  { subject: "Smart Contract", date: "30/07/2020", category: "Blockchain" },
  { subject: "Licence MIT", date: "31/07/2020", category: "DEV" },
  { subject: "Snippets", date: "03/08/2020", category: "DEV" },
  { subject: "ReactJs", date: "04/08/2020", category: "DEV" },
  { subject: "Node.Js", date: "06/08/2020", category: "DEV" },
  { subject: "TDD", date: "12/08/2020", category: "DEV" },
  { subject: "CrowdFunding", date: "31/08/2020", category: "Entreprenariat" },
  { subject: "Python", date: "01/09/2020", category: "DEV" },
  { subject: "Le Hacking", date: "02/09/2020", category: "Culture Web" },
  { subject: "Golang", date: "03/09/2020", category: "DEV" },
  { subject: "Les Malwares", date: "10/09/2020", category: "Sécurité web" },
  { subject: "Rust", date: "11/09/2020", category: "DEV" },
  { subject: "Solidity", date: "16/09/2020", category: "DEV BC" },
  { subject: "Growth Hacking", date: "17/09/2020", category: "Entreprenariat" },
  { subject: "Digital Marketing", date: "21/09/2020", category: "Culture Web" },
  { subject: "React Native", date: "25/09/2020", category: "DEV" },
  { subject: "Simplicity", date: "28/09/2020", category: "DEV BC" },
  { subject: "Social Blockchain", date: "30/09/2020", category: "Blockchain" }
];


function allCategories(list) {
  /*retourne la list des tags uniques*/
  let listTotal = []
  for (let el of list) {
    if ('category' in el) {
      listTotal = listTotal.concat(el.category)
    }
  }
  const listCategoryUnique = []
  listTotal.forEach((el) => {
    if (!listCategoryUnique.includes(el)) {
      listCategoryUnique.push(el)
    }
  })
  return listCategoryUnique
}
const uniqueCategory = allCategories(entries)



