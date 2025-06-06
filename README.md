# 🌀 ScrollSurvivor – The Infinite Death Game

> A hilarious Solana-powered, no-code web game built with [AImpact.dev](https://aimpact.dev) where every dumb decision is immortalized on-chain.

---

## 🎯 Project Summary

**ScrollSurvivor** is a chaotic, text-based adventure game where players face absurd and unpredictable mini-scenarios. Every choice you make can either save you or instantly (and hilariously) kill you. Your full progress — scene number, death history, choices — is stored on-chain using Solana.

Made entirely with **AImpact**, this no-code game uses **Solana’s decentralized storage** to create a fun, mobile-first experience that’s fully on-chain and player-tracked.

---

## 🧩 Gameplay Flow

1. **Enter Name** – this acts as your unique on-chain player ID.
2. **Face Randomized Scenes** – one short, funny scenario at a time.
3. **Choose a Response** – 2–3 options per scene (emojis included).
4. **Outcome** – you either:
   - ✅ Survive → +1 score → next scene
   - ☠️ Die → display cause of death → restart game
5. **Restart or Resume** – after death, restart from 0 or auto-resume if alive.
6. **Leaderboard** – tracks top players by score, viewable anytime.

---

## 🧠 Key Features

| Feature                        | Details                          |
|-------------------------------|----------------------------------|
| 🧠 Built with AImpact          | Fully generated using AI prompts |
| 🧬 On-chain Player Storage     | Solana decentralized storage     |
| 🔁 Infinite Replayability      | Randomized scene rotation        |
| ☠️ Funny Deaths Everywhere     | Every tap might kill you         |
| 📊 Leaderboard Support         | Sorted by max score              |
| 🎨 Tailwind CSS UI             | Mobile-first modern styling      |
| 🔄 Resume on Refresh           | Restores latest game state       |
| 🎉 Emoji-Based Interactions    | Adds humor and clarity           |

---

## 📖 Sample Scenes

Each scene is short and comes with unpredictable results. Just a few:

### 1. **The Glowing Mushroom**
> You find a glowing red mushroom in a forest.
- 🍄 Eat it → ☠️ You're poisoned instantly.  
- 🧊 Freeze it → ✅ It becomes a health crystal.  
- 🔥 Burn it → ✅ Path clears to next level.

### 2. **The Talking Squirrel**
> A squirrel blocks your way and speaks: "Password?"
- 🥜 Say "Peanut" → ✅ It salutes and lets you pass.  
- 🚪 Ignore it → ☠️ The squirrel army attacks.

### 3. **The Suspicious Potion**
> You find a sparkling blue potion.
- 🧪 Drink it → ☠️ You turn into a tree.  
- 💼 Put it in bag → ✅ Might help later.

### 4. **The Mirror Clone**
> You see a perfect clone of yourself.
- 🗡️ Attack it → ☠️ It was the real you.  
- 🫱 Shake hands → ✅ You gain its wisdom.

...and **20+** more randomized, animated scenes!

---

## 🧾 What’s Stored On-Chain

Each player’s data is stored on Solana:

```json
{
  "player_id": "string",
  "scene_number": number,
  "score": number,
  "is_alive": true/false,
  "death_cause": "string" or null,
  "choices_history": [
    {
      "scene_number": 1,
      "choice_text": "🧊 Freeze it",
      "outcome_text": "✅ It becomes a health crystal"
    },
    ...
  ]
}
