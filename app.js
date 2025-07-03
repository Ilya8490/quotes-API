const btn = document.querySelector("button");
const author = document.querySelector("#author");
const quote = document.querySelector("#quote");

const url = "https://api.api-ninjas.com/v1/quotes?category=success";
const apiKey = "VUYcJGXeDyKh2DTPx/M9Hg==G6j3ytGYEtT8t6Cg";

btn.addEventListener("click", () => {
    getRandomQuote();
});

async function getRandomQuote() {
    try {
        quote.innerHTML = "Loading...";
        author.innerHTML = "";
        const config = { headers: { 'X-Api-Key': apiKey } };
        const res = await fetch(url, config);
        const data = await res.json();

        if (data.length > 0) {
            quote.innerHTML = data[0].quote;
            author.innerHTML = data[0].author;
            quote.style.display = "block";
            author.style.display = "block";
        } else {
            quote.innerHTML = "No quote found.";
            author.innerHTML = "";
        }
    } catch (err) {
        console.log("Error", err);
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
    }
}