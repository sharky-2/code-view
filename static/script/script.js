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
const quotesLibrary = [
    {
      title: "The Power of Perseverance",
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts. Many of life's failures are people who did not realize how close they were to success when they gave up. It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. Change is the constant force that drives us forward in life. If we embrace it, adapt to it, and keep moving ahead despite the obstacles, we can unlock true success. – Winston Churchill"
    },
    {
      title: "Believe in Yourself",
      text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. Don't waste time living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. Stay hungry, stay foolish, and be relentless in your pursuit of the work that makes you feel most alive. – Steve Jobs"
    },
    {
      title: "The Importance of Time",
      text: "Time is the most valuable thing a man can spend. Once it is gone, you can never get it back. Every moment spent is a moment that shapes your future. The way we use our time dictates how we live our lives and the impact we make on the world. The moments you waste will never be reclaimed, so choose wisely how you spend them, and invest them in things that bring you fulfillment and growth. – Theophrastus"
    },
    {
      title: "Strength in Adversity",
      text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. Survival is not about being the biggest or the best; it is about adaptability. In times of adversity, the key to survival and success lies not in your ability to resist change but in your willingness to embrace it. The world moves and shifts, and those who thrive are the ones who learn how to flow with it, not fight against it. – Charles Darwin"
    },
    {
      title: "The Path to Success",
      text: "Success usually comes to those who are too busy to be looking for it. The key to success lies in dedication, hard work, and focusing on the journey rather than the destination. If you're constantly searching for success, you may miss the opportunities that come along when you're focused on doing what you love and giving your best. Success comes naturally when you're truly immersed in your work and not chasing the idea of it. – Henry David Thoreau"
    },
    {
      title: "Overcoming Fear",
      text: "The only thing we have to fear is fear itself. Fear is a powerful emotion, one that can hold us back from reaching our full potential. But in truth, fear is simply a state of mind that we can overcome. It can paralyze us or push us forward, and it is our response to fear that determines the outcomes we experience. Conquer your fear, and you unlock the freedom to achieve great things. – Franklin D. Roosevelt"
    },
    {
      title: "Dream Big",
      text: "The future belongs to those who believe in the beauty of their dreams. Dreams are the blueprint of our futures, and the courage to pursue them is what separates the dreamers from the achievers. No dream is too big, no goal too far, and when you believe in the beauty and potential of your dreams, they become the driving force behind your actions. The future belongs to those who dare to dream. – Eleanor Roosevelt"
    },
    {
      title: "Growth Through Failure",
      text: "It is hard to fail, but it is worse never to have tried to succeed. Failure is not the opposite of success; it is a part of success. The most successful people are those who have failed the most because they didn’t let failure stop them—they let it teach them. Each failure is a lesson, and each lesson brings you closer to success. Without failure, there can be no growth. – Theodore Roosevelt"
    },
    {
      title: "Chase Your Passion",
      text: "Don’t watch the clock; do what it does. Keep going. The key to achievement lies not in the passage of time but in how we use it. The most successful people are not those who wait for opportunities to come, but those who are relentlessly pursuing their passions. The clock keeps ticking, but the real question is whether you are making the most of your time and staying committed to your journey. – Sam Levenson"
    },
    {
      title: "Power of Hope",
      text: "Hope is being able to see that there is light despite all of the darkness. Hope gives us the strength to carry on, even in the face of adversity. It is the belief that no matter how hard life may seem, there is always something to look forward to, something that keeps us going. In the darkest moments, hope is the flicker that reminds us that change is possible. – Desmond Tutu"
    }
]

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesLibrary.length);
    return quotesLibrary[randomIndex];
}
function newRandomQuote() {
    const quote_title = document.getElementById("quote-title")
    const quote_text = document.getElementById("quote-text")
    
    const randomQuote = getRandomQuote()
    quote_title.innerText += `"${randomQuote.title}"`
    quote_text.innerText += randomQuote.text
}
newRandomQuote()