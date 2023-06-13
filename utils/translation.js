// utils/translation.js
import translate from 'google-translate-api'; // Replace with your chosen translation service client library

export const translateText = async (text, targetLanguage) => {
  try {
    const result = await translate(text, { to: targetLanguage });
    return result.text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return the original text in case of translation failure
  }
};
