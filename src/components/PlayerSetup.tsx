import React, { useState } from 'react';

interface PlayerSetupProps {
  onPlayerReady: (playerName: string) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onPlayerReady }) => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      onPlayerReady(playerName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
        <h1 className="text-3xl font-extrabold text-center mb-2">ScrollSurvivor</h1>
        <p className="text-center text-purple-400 mb-6">The Infinite Death Game</p>
        
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">💀⚔️🎮</div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Face randomized deadly scenarios. Make choices. Survive as long as you can. 
            Your progress is saved on the Solana blockchain!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="playerName" className="block text-sm font-medium mb-2">
              Enter your name to begin:
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your survivor name..."
              maxLength={20}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-bold text-lg"
          >
            🚀 Start Surviving
          </button>
        </form>
      </div>
    </div>
  );
};
