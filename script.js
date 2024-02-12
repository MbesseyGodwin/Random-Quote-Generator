const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// Array of quotes (you can replace it with quotes fetched from an API)
const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  }
];

// Function to get a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display a quote
function displayQuote() {
  const { text, author } = getRandomQuote();
  quoteText.textContent = text;
  quoteAuthor.textContent = `– ${author}`;
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', displayQuote);

// Display initial quote
displayQuote();
