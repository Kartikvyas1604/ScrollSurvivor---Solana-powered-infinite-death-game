import React, { useState, useEffect } from 'react';
import { Scene, PlayerData, Choice } from '../types/game';
import { scenes } from '../data/scenes';
import { solanaService } from '../services/solana';

interface GameScreenProps {
  playerData: PlayerData;
  onPlayerDataUpdate: (data: PlayerData) => void;
  onShowLeaderboard: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  playerData,
  onPlayerDataUpdate,
  onShowLeaderboard
}) => {
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [deathMessage, setDeathMessage] = useState('');
  const [lastSceneId, setLastSceneId] = useState<number | null>(null);

  useEffect(() => {
    if (playerData.is_alive) {
      loadNextScene();
    } else {
      setShowDeathScreen(true);
    }
  }, [playerData.scene_number]);

  const loadNextScene = () => {
    // Get available scenes (exclude last scene to prevent immediate repeats)
    const availableScenes = scenes.filter(scene => scene.id !== lastSceneId);
    const randomScene = availableScenes[Math.floor(Math.random() * availableScenes.length)];
    
    setCurrentScene(randomScene);
    setLastSceneId(randomScene.id);
    setShowDeathScreen(false);
  };

  const handleChoice = async (choice: Choice) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add choice to history
    const newChoice = {
      scene_number: playerData.scene_number,
      choice: choice.text,
      outcome: choice.outcome
    };
    
    const updatedHistory = [...playerData.choices_history, newChoice];
    
    if (choice.outcome === 'survive') {
      // Player survives - advance to next scene
      const newPlayerData: PlayerData = {
        ...playerData,
        scene_number: playerData.scene_number + 1,
        score: playerData.score + 1,
        choices_history: updatedHistory
      };
      
      await solanaService.savePlayerData(newPlayerData);
      onPlayerDataUpdate(newPlayerData);
    } else {
      // Player dies
      const newPlayerData: PlayerData = {
        ...playerData,
        is_alive: false,
        death_cause: choice.deathMessage || 'You died!',
        death_count: playerData.death_count + 1,
        choices_history: updatedHistory
      };
      
      await solanaService.savePlayerData(newPlayerData);
      onPlayerDataUpdate(newPlayerData);
      setDeathMessage(choice.deathMessage || 'You died!');
      setShowDeathScreen(true);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleRestart = async () => {
    const newPlayerData: PlayerData = {
      ...playerData,
      scene_number: 1,
      score: 0,
      is_alive: true,
      death_cause: null
    };
    
    await solanaService.savePlayerData(newPlayerData);
    onPlayerDataUpdate(newPlayerData);
    setShowDeathScreen(false);
    loadNextScene();
  };

  if (showDeathScreen) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto bg-red-900 bg-opacity-90 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-4">💀 YOU DIED! 💀</h2>
          <p className="text-white text-lg mb-6">{deathMessage}</p>
          <div className="text-red-300 mb-6">
            <p>Score: {playerData.score}</p>
            <p>Deaths: {playerData.death_count}</p>
          </div>
          <button
            onClick={handleRestart}
            className="bg-red-600 hover:bg-red-700 rounded-full py-3 px-6 text-white font-bold mt-4 transition duration-300"
          >
            🔄 Restart Game
          </button>
          <button
            onClick={onShowLeaderboard}
            className="block w-full mt-3 bg-yellow-600 hover:bg-yellow-700 rounded-full py-3 px-6 text-white font-bold transition duration-300"
          >
            🏆 View Leaderboard
          </button>
        </div>
      </div>
    );
  }

  if (!currentScene) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-6">
      {/* Score indicator */}
      <div className="absolute top-4 right-4 text-green-400 font-mono text-lg">
        Score: {playerData.score}
      </div>
      
      {/* Leaderboard button */}
      <button
        onClick={onShowLeaderboard}
        className="absolute top-4 left-4 bg-yellow-600 hover:bg-yellow-700 rounded-full py-2 px-4 text-white font-bold transition duration-300"
      >
        🏆
      </button>

      {/* Game title */}
      <h1 className="text-3xl font-extrabold text-white mt-6 mb-4 text-center">
        ScrollSurvivor
      </h1>
      <p className="text-center text-gray-400 mb-8">The Infinite Death Game</p>

      {/* Scene container */}
      <div className={`max-w-md mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg text-white text-lg transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">{currentScene.title}</h2>
        <p className="mb-6 leading-relaxed">{currentScene.description}</p>
        
        {/* Choice buttons */}
        <div className="space-y-3">
          {currentScene.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              disabled={isTransitioning}
              className="block w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-3 text-white font-semibold disabled:opacity-50"
            >
              <span className="text-2xl">{choice.emoji}</span>
              <span>{choice.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scene counter */}
      <div className="text-center mt-6 text-gray-400">
        Scene {playerData.scene_number}
      </div>
    </div>
  );
};
