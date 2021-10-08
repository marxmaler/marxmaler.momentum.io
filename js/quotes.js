const quotes = [
    {quote:"Anyone who lives within their means suffers from a lack of imagination.", 
    author:"Oscar Wilde"},
    {quote:"Be yourself; everyone else is already taken.", 
    author:"Oscar Wilde"},
    {quote:"And those who were seen dancing were thought to be insane by those who could not hear the music.", 
    author:"Friedrich Nietzsche"},
    {quote:"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.", 
    author:"Friedrich Nietzsche"},
    {quote:"We should consider every day lost on which we have not danced at least once.", 
    author:"Friedrich Nietzsche"},
    {quote:"We can never know what to want, because, living only one life, we can neither compare it with our previous lives nor perfect it in our lives to come.", 
    author:"Milan Kundera"},
    {quote:"Man errs as long as he strives.", 
    author:"Johann Wolfgang von Goethe"},
    {quote:"Those who are too lazy and comfortable to think for themselves and be their own judges obey the laws. Others sense their own laws within them.", 
    author:"Hermann Hesse"},
    {quote:"You've never lived what you are thinking, and that isn't good. Only the ideas we actually live are of any value.", 
    author:"Hermann Hesse"},
    {quote:"I live in my dreams — that's what you sense. Other people live in dreams, but not in their own. That's the difference.", 
    author:"Hermann Hesse"},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote["quote"];
author.innerText = `-${todaysQuote["author"]}-`;