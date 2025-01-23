quote = document.getElementById('quote');
quoteAuthor = document.getElementById('author');
APIUrl = "https://api.quotable.io/random";
 

async function generateNewQuote(url) {
    response = await fetch(url);
    quoteData = await (response.json());
    console.log(quoteData);
    quote.innerHTML = quoteData.content;
    quoteAuthor.innerHTML = quoteData.author;
}

function tweetIt(){
    newWindow = window.open(href="https://twitter.com/intent/tweet?text="+ quote.innerHTML + " -by "+ author.innerHTML, "Tweet Window","height=300, width=600")
}

generateNewQuote(APIUrl);