export interface Choice {
  emoji: string;
  text: string;
  outcome: 'survive' | 'die';
  deathMessage?: string;
}

export interface Scene {
  id: number;
  title: string;
  description: string;
  choices: Choice[];
}

export interface PlayerChoice {
  scene_number: number;
  choice: string;
  outcome: string;
}

export interface PlayerData {
  player_id: string;
  scene_number: number;
  score: number;
  is_alive: boolean;
  death_cause: string | null;
  death_count: number;
  choices_history: PlayerChoice[];
}

export interface LeaderboardEntry {
  player_id: string;
  max_score: number;
  death_count: number;
}
