import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatBox = () => {
  const [prompt, setPrompt] = useState('');
  const [answerText, setAnswerText] = useState('');

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await model.generateContent([prompt]);
    const text = await result.response.text();
    setAnswerText(text);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="prompt" className="block text-gray-700 font-semibold">Ask a Question:</label>
        <input
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Type your question..."
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
        >
          Get Answer
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Answer Here:</h2>
        <p className="text-gray-700 whitespace-pre-line">{answerText}</p>
      </div>
    </div>
  );
};

export default ChatBox;
