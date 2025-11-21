// Array of language learning facts
const languageFacts = [
    "The best age to learn a language is... any age! While children pick up languages easily, adults have better problem-solving skills and can learn grammar more systematically.",
    "Learning a new language can improve your memory and cognitive abilities, potentially delaying the onset of dementia by up to 5 years.",
    "There are over 7,000 languages spoken in the world today, but nearly half of them are endangered and may disappear within the next century.",
    "The fastest way to learn a language is through immersion - surrounding yourself with native speakers and using the language daily.",
    "Speaking multiple languages can increase your brain's grey matter, which contains most of the brain's neurons and is responsible for processing information.",
    "It typically takes about 600-750 hours of study to reach conversational fluency in languages similar to your native tongue.",
    "Babies can distinguish between all sounds in all languages until about 10 months old, when they start specializing in their native language(s).",
    "Learning a second language can make you better at multitasking and decision-making, as your brain becomes more efficient at switching between tasks.",
    "The most widely spoken language in the world is English with over 1.5 billion speakers, but Mandarin Chinese has the most native speakers.",
    "Music and language learning activate similar parts of the brain, which is why learning songs in a new language can be so effective!",
    "People who speak multiple languages tend to be better at focusing on relevant information and filtering out distractions.",
    "The critical period hypothesis suggests there's an optimal window for language learning in childhood, but recent research shows adults can still achieve high proficiency.",
    "Sign languages are complete, natural languages with their own grammar and syntax, just like spoken languages.",
    "Learning a language through reading can be as effective as conversation practice, especially for building vocabulary and understanding grammar structures.",
    "Your personality might actually change slightly when you switch languages - many bilinguals report feeling different when speaking different languages!"
];

let currentFactIndex = 0;

// Function to display a fact
function displayFact(index) {
    const factText = document.getElementById('factText');
    factText.style.animation = 'none';
    
    // Trigger reflow to restart animation
    setTimeout(() => {
        factText.textContent = languageFacts[index];
        factText.style.animation = 'fadeIn 0.5s ease-in';
    }, 50);
}

// Function to show next fact
function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % languageFacts.length;
    displayFact(currentFactIndex);
}

// Initialize with first fact
document.addEventListener('DOMContentLoaded', () => {
    displayFact(currentFactIndex);
    
    // Add click event to button
    document.getElementById('nextFactBtn').addEventListener('click', nextFact);
    
    // Auto-rotate facts every 10 seconds
    setInterval(nextFact, 10000);
});
