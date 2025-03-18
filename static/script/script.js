// Move to
const target_more = document.getElementById("target-more")
const button_more = document.getElementById("button-more")
button_more.addEventListener("click", function() {
    target_more.scrollIntoView({ behavior: "smooth" })
})
const target_home = document.getElementById("target-home")
const button_home = document.getElementById("header-button-1")
button_home.addEventListener("click", function() {
    target_home.scrollIntoView({ behavior: "smooth" })
})

// Quote
const programmingQuotesLibrary = [
  {
    title: "The Art of Problem Solving",
    text: "Programming is not just about writing code; it’s about solving problems. Every bug is a challenge, every line of code is a solution. The beauty of programming lies in the journey of constant learning, adapting, and creating something meaningful from nothing. – Unknown"
  },
  {
    title: "Code Simplicity",
    text: "Simplicity is the soul of efficiency. A good programmer doesn't overcomplicate solutions, they find elegant, clean, and simple ways to solve complex problems. – Austin Freeman"
  },
  {
    title: "Iterate and Improve",
    text: "The key to programming is to continuously iterate. Great software doesn’t emerge from the first draft, but from repeated improvements, refining and testing with each cycle. – Unknown"
  },
  {
    title: "Coding and Learning",
    text: "Programming isn't about knowing everything; it’s about being willing to learn and figure things out. – Chris Pine"
  },
  {
    title: "Write for Humans",
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler"
  },
  {
    title: "Fail Forward",
    text: "Failure is part of the journey. It’s not about the mistakes, but about how you learn from them. – Unknown"
  },
  {
    title: "Code is Poetry",
    text: "Writing code is an art. Like poetry, it requires clarity, simplicity, and creativity. A well-written program is poetry in motion. – Unknown"
  },
  {
    title: "Solve Problems, Not Bugs",
    text: "Don’t just fix bugs; solve the underlying problems. Coding is about addressing the core issue and improving the process. – Unknown"
  },
  {
    title: "Build, Test, Refine",
    text: "Good code is like a fine wine—it needs time to mature. Build, test, refine, repeat. – Unknown"
  },
  {
    title: "Perfect Code Doesn't Exist",
    text: "Perfection in programming is a myth. Good code is about creating solutions, not chasing unattainable perfection. – Unknown"
  },
  {
    title: "The Power of Code",
    text: "Code is a powerful tool, capable of solving problems, automating tasks, and transforming ideas into reality. – Unknown"
  },
  {
    title: "Keep it Simple",
    text: "The best code is often the simplest. Keep your solutions simple, yet powerful, and avoid overengineering. – Unknown"
  },
  {
    title: "Code with Passion",
    text: "The only way to do great work is to love what you do. Passion for programming drives excellence. – Steve Jobs"
  },
  {
    title: "Think in Algorithms",
    text: "A great programmer thinks in algorithms. It’s not about writing code, it’s about finding efficient ways to solve problems. – Unknown"
  },
  {
    title: "Write Once, Read Often",
    text: "Write code as if the person who ends up maintaining it is a violent psychopath who knows where you live. – John Woods"
  },
  {
    title: "Code is Communication",
    text: "Programming is communication. When you write code, you're communicating your thoughts to the machine and others. Make it clear, concise, and maintainable. – Unknown"
  },
  {
    title: "Think Outside the Box",
    text: "In programming, the best solutions come when you step outside the box and explore new ways to solve problems. – Unknown"
  },
  {
    title: "Embrace Change",
    text: "The only constant in programming is change. Embrace it, learn from it, and let it guide you to better solutions. – Unknown"
  },
  {
    title: "Progress Through Feedback",
    text: "Code reviews are not criticisms; they are opportunities to improve and grow as a programmer. – Unknown"
  },
  {
    title: "The Joy of Debugging",
    text: "Debugging is like being the detective in a criminal movie where you are also the murderer. – Filipe Fortes"
  }
]

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * programmingQuotesLibrary.length);
    return programmingQuotesLibrary[randomIndex];
}
function newRandomQuote() {
    const quote_title = document.getElementById("quote-title")
    const quote_text = document.getElementById("quote-text")
    
    const randomQuote = getRandomQuote()
    quote_title.innerText += `"${randomQuote.title}"`
    quote_text.innerText += randomQuote.text
}
newRandomQuote()