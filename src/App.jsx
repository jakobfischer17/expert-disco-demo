import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const greetings = {
    english: 'Hello',
    spanish: 'Hola',
    french: 'Bonjour',
    german: 'Guten Tag',
    italian: 'Ciao',
    japanese: 'こんにちは',
    chinese: '你好',
    arabic: 'مرحبا',
    russian: 'Привет',
    portuguese: 'Olá'
  }

  const languages = [
    { code: 'english', name: 'English' },
    { code: 'spanish', name: 'Spanish' },
    { code: 'french', name: 'French' },
    { code: 'german', name: 'German' },
    { code: 'italian', name: 'Italian' },
    { code: 'japanese', name: 'Japanese' },
    { code: 'chinese', name: 'Chinese' },
    { code: 'arabic', name: 'Arabic' },
    { code: 'russian', name: 'Russian' },
    { code: 'portuguese', name: 'Portuguese' }
  ]

  const getGreeting = () => {
    const greeting = greetings[selectedLanguage]
    return name.trim() ? `${greeting}, ${name}!` : `${greeting}!`
  }

  return (
    <div className="app">
      <h1>Multi-Language Greeting</h1>
      
      <div className="greeting-container">
        <div className="input-section">
          <label htmlFor="name-input">Enter your name:</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="name-input"
          />
        </div>

        <div className="language-section">
          <label htmlFor="language-select">Select a language:</label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="language-select"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="greeting-display">
          <h2>{getGreeting()}</h2>
        </div>
      </div>
    </div>
  )
}

export default App
