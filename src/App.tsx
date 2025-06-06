import React, { useState, useEffect } from 'react';
import { PlayerSetup } from './components/PlayerSetup';
import { GameScreen } from './components/GameScreen';
import { Leaderboard } from './components/Leaderboard';
import { PlayerData } from './types/game';
import { solanaService } from './services/solana';

type GameState = 'setup' | 'playing' | 'leaderboard';

function App() {
  const [gameState, setGameState] = useState<GameState>('setup');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  const handlePlayerReady = async (playerName: string) => {
    // Try to load existing player data
    const existingData = await solanaService.loadPlayerData(playerName);
    
    if (existingData) {
      setPlayerData(existingData);
    } else {
      // Create new player data
      const newPlayerData: PlayerData = {
        player_id: playerName,
        scene_number: 1,
        score: 0,
        is_alive: true,
        death_cause: null,
        death_count: 0,
        choices_history: []
      };
      
      await solanaService.savePlayerData(newPlayerData);
      setPlayerData(newPlayerData);
    }
    
    setGameState('playing');
  };

  const handlePlayerDataUpdate = (newData: PlayerData) => {
    setPlayerData(newData);
  };

  const handleShowLeaderboard = () => {
    setGameState('leaderboard');
  };

  const handleBackToGame = () => {
    setGameState('playing');
  };

  const handleBackToSetup = () => {
    setGameState('setup');
    setPlayerData(null);
  };

  if (gameState === 'setup') {
    return <PlayerSetup onPlayerReady={handlePlayerReady} />;
  }

  if (gameState === 'leaderboard') {
    return <Leaderboard onBack={handleBackToGame} />;
  }

  if (gameState === 'playing' && playerData) {
    return (
      <GameScreen
        playerData={playerData}
        onPlayerDataUpdate={handlePlayerDataUpdate}
        onShowLeaderboard={handleShowLeaderboard}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

export default App;
