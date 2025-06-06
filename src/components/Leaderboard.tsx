import React, { useState, useEffect } from 'react';
import { LeaderboardEntry } from '../types/game';
import { solanaService } from '../services/solana';

interface LeaderboardProps {
  onBack: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ onBack }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      const data = await solanaService.getLeaderboard();
      setLeaderboard(data);
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading leaderboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-6">
      <div className="max-w-md mx-auto">
        <button
          onClick={onBack}
          className="mb-6 bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-4 text-white font-bold transition duration-300"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
          🏆 Leaderboard
        </h1>

        <div className="bg-gray-800 rounded-xl p-4 text-white">
          {leaderboard.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No survivors yet! Be the first to play.
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2 text-yellow-400 font-bold text-sm border-b border-gray-700 pb-2">
                <div>Rank</div>
                <div>Name</div>
                <div>Score</div>
                <div>Deaths</div>
              </div>
              
              {leaderboard.map((entry, index) => (
                <div
                  key={entry.player_id}
                  className="grid grid-cols-4 gap-2 text-sm border-b border-gray-700 py-2"
                >
                  <div className="font-bold">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                    {index > 2 && `#${index + 1}`}
                  </div>
                  <div className="truncate">{entry.player_id}</div>
                  <div className="text-green-400 font-mono">{entry.max_score}</div>
                  <div className="text-red-400 font-mono">{entry.death_count}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>Powered by Solana blockchain</p>
          <p>All progress is permanently stored on-chain</p>
        </div>
      </div>
    </div>
  );
};
