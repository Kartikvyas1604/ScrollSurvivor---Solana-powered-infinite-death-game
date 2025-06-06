import { Connection, PublicKey, Transaction, SystemProgram, Keypair } from '@solana/web3.js';
import { PlayerData, LeaderboardEntry } from '../types/game';

// Mock Solana service for WebContainer environment
// In production, this would connect to actual Solana network
class SolanaService {
  private connection: Connection;
  private localStorage = window.localStorage;

  constructor() {
    // Using devnet for demo purposes
    this.connection = new Connection('https://api.devnet.solana.com');
  }

  private getStorageKey(playerId: string): string {
    return `scrollsurvivor_${playerId}`;
  }

  private getLeaderboardKey(): string {
    return 'scrollsurvivor_leaderboard';
  }

  async savePlayerData(playerData: PlayerData): Promise<boolean> {
    try {
      // In a real implementation, this would create a transaction to store data on-chain
      // For demo purposes, we'll use localStorage to simulate blockchain persistence
      this.localStorage.setItem(this.getStorageKey(playerData.player_id), JSON.stringify(playerData));
      
      // Update leaderboard
      await this.updateLeaderboard(playerData);
      
      return true;
    } catch (error) {
      console.error('Failed to save player data:', error);
      return false;
    }
  }

  async loadPlayerData(playerId: string): Promise<PlayerData | null> {
    try {
      const data = this.localStorage.getItem(this.getStorageKey(playerId));
      if (data) {
        return JSON.parse(data) as PlayerData;
      }
      return null;
    } catch (error) {
      console.error('Failed to load player data:', error);
      return null;
    }
  }

  private async updateLeaderboard(playerData: PlayerData): Promise<void> {
    try {
      const leaderboardData = this.localStorage.getItem(this.getLeaderboardKey());
      let leaderboard: LeaderboardEntry[] = leaderboardData ? JSON.parse(leaderboardData) : [];
      
      const existingEntry = leaderboard.find(entry => entry.player_id === playerData.player_id);
      
      if (existingEntry) {
        existingEntry.max_score = Math.max(existingEntry.max_score, playerData.score);
        existingEntry.death_count = playerData.death_count;
      } else {
        leaderboard.push({
          player_id: playerData.player_id,
          max_score: playerData.score,
          death_count: playerData.death_count
        });
      }
      
      // Sort by max_score descending, then by death_count ascending
      leaderboard.sort((a, b) => {
        if (a.max_score !== b.max_score) {
          return b.max_score - a.max_score;
        }
        return a.death_count - b.death_count;
      });
      
      this.localStorage.setItem(this.getLeaderboardKey(), JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Failed to update leaderboard:', error);
    }
  }

  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const data = this.localStorage.getItem(this.getLeaderboardKey());
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
      return [];
    }
  }
}

export const solanaService = new SolanaService();
