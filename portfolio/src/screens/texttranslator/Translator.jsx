import React, { useState } from 'react';
import axios from 'axios';
import './Translator.css'; // Import CSS file

function Translator() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en'); // Default language is English
  const [targetLang, setTargetLang] = useState('fr'); // Default language is French
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  const translateText = async () => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', sourceText);

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      console.log(response.data);
      // Now you have the detected language. You can set it in state and then proceed with translation.
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div className="translator-container">
      <div className="input-container">
        <textarea
          className="input-textarea"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button className="translate-button" onClick={translateText}>Translate</button>
      </div>
      <div className="language-select-container">
        <select className="language-select" value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          {/* Dropdown options for source languages */}
        </select>
        <select className="language-select" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          {/* Dropdown options for target languages */}
        </select>
      </div>
      <div className="translated-text-container">
        <h2>Translated Text:</h2>
        <p className="translated-text">{translatedText}</p>
      </div>
    </div>
  );
}

export default Translator;
