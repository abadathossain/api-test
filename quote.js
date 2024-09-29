
/* const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote =>{
    const blockQuote = document.getElementById('quote')
    blockQuote.innerHTML = quote.quote
}
loadQuote() */
/* 
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array)); */

const dreamGirl = [
    {
     sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
       {
        facebook: {
         link: "https://www.facebook.com/",
         followers: "12545",
         status: "single",
         friendsList: [{ name: "rofik" }, undefined],
        },
       },
       { instagram: "https://www.instagram.com/" },
      ],
     },
    },
   ];
   console.log(dreamGirl[0].sokina.contactInfo[1].instagram)