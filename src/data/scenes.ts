import { Scene } from '../types/game';

export const scenes: Scene[] = [
  {
    id: 1,
    title: "The Glowing Mushroom",
    description: "You stumble upon a mysterious glowing mushroom pulsing with otherworldly energy. What do you do?",
    choices: [
      { emoji: "🍄", text: "Eat it", outcome: "die", deathMessage: "The mushroom was highly toxic! You convulse and die instantly." },
      { emoji: "🧊", text: "Freeze it", outcome: "survive" },
      { emoji: "🔥", text: "Burn it", outcome: "survive" }
    ]
  },
  {
    id: 2,
    title: "The Talking Squirrel",
    description: "A squirrel blocks your path and stares at you intensely. It seems to be waiting for something...",
    choices: [
      { emoji: "🥜", text: "Say 'Peanut'", outcome: "survive" },
      { emoji: "🚪", text: "Ignore it", outcome: "die", deathMessage: "The squirrel whistles and an army of angry squirrels attacks you!" }
    ]
  },
  {
    id: 3,
    title: "The Cursed Statue",
    description: "An ancient statue with glowing red eyes blocks your way. Dark energy radiates from it.",
    choices: [
      { emoji: "👁️", text: "Touch it", outcome: "die", deathMessage: "The statue explodes with dark magic, consuming you from within!" },
      { emoji: "🙇", text: "Bow to it", outcome: "survive" }
    ]
  },
  {
    id: 4,
    title: "The Button Room",
    description: "You enter a room with a single, large red button in the center. A sign reads 'DO NOT PRESS'.",
    choices: [
      { emoji: "🔴", text: "Press it", outcome: "die", deathMessage: "A catapult launches you directly into the sun!" },
      { emoji: "😐", text: "Ignore it", outcome: "survive" }
    ]
  },
  {
    id: 5,
    title: "The Suspicious Potion",
    description: "A bubbling green potion sits on a pedestal. It smells like... adventure? Or death?",
    choices: [
      { emoji: "🧪", text: "Drink", outcome: "die", deathMessage: "You slowly transform into a tree. Your last thought is about photosynthesis." },
      { emoji: "💼", text: "Store", outcome: "survive" }
    ]
  },
  {
    id: 6,
    title: "The Mirror Clone",
    description: "You see your exact duplicate in a mirror. But wait... it's moving independently!",
    choices: [
      { emoji: "🗡️", text: "Attack", outcome: "die", deathMessage: "You realize too late that YOU were the reflection. The real you is dead." },
      { emoji: "🫱", text: "Shake hands", outcome: "survive" }
    ]
  },
  {
    id: 7,
    title: "The Time Loop Door",
    description: "A door marked 'TEMPORAL ANOMALY' stands before you. You hear echoes of your own voice from beyond.",
    choices: [
      { emoji: "🔁", text: "Open", outcome: "die", deathMessage: "You're trapped in an infinite loop, opening the same door forever!" },
      { emoji: "🚪", text: "Walk away", outcome: "survive" }
    ]
  },
  {
    id: 8,
    title: "The Whispering Book",
    description: "An ancient tome whispers your name. The pages flutter open by themselves.",
    choices: [
      { emoji: "📖", text: "Read", outcome: "die", deathMessage: "The book erases your memories. You forget who you are and wander aimlessly forever." },
      { emoji: "❌", text: "Close", outcome: "survive" }
    ]
  },
  {
    id: 9,
    title: "The Slime Pool",
    description: "A pool of acidic green slime blocks your path. It's bubbling ominously.",
    choices: [
      { emoji: "🏊", text: "Swim", outcome: "die", deathMessage: "The slime dissolves you instantly. You become one with the goo." },
      { emoji: "🪜", text: "Jump over", outcome: "survive" }
    ]
  },
  {
    id: 10,
    title: "The Laughing Skull",
    description: "A floating skull cackles maniacally at you. Its jaw moves as it speaks in riddles.",
    choices: [
      { emoji: "🤬", text: "Insult", outcome: "die", deathMessage: "The skull bites your face clean off while still laughing!" },
      { emoji: "🎩", text: "Compliment", outcome: "survive" }
    ]
  },
  {
    id: 11,
    title: "The Void Merchant",
    description: "A shadowy figure offers to sell you 'eternal happiness' for your soul.",
    choices: [
      { emoji: "💵", text: "Buy", outcome: "die", deathMessage: "You disappear into the void, achieving eternal happiness... in nothingness." },
      { emoji: "🚫", text: "Decline", outcome: "survive" }
    ]
  },
  {
    id: 12,
    title: "The Ghost Dancefloor",
    description: "Spectral figures dance eternally on a glowing floor. They beckon you to join them.",
    choices: [
      { emoji: "💃", text: "Dance", outcome: "die", deathMessage: "You're possessed by the dancing spirits and moonwalk into eternity!" },
      { emoji: "😅", text: "Say shy", outcome: "survive" }
    ]
  },
  {
    id: 13,
    title: "Banana Peel",
    description: "A perfectly placed banana peel lies in your path. It's almost too obvious...",
    choices: [
      { emoji: "🍌", text: "Step on", outcome: "die", deathMessage: "You slip and break your neck in the most cliché way possible." },
      { emoji: "🧹", text: "Sweep it", outcome: "survive" }
    ]
  },
  {
    id: 14,
    title: "Wiggly Wormhole",
    description: "A unstable wormhole writhes in space-time. It looks hungry for travelers.",
    choices: [
      { emoji: "🚀", text: "Jump in", outcome: "die", deathMessage: "You fall through dimensions forever, screaming into the cosmic void." },
      { emoji: "🪐", text: "Toss rock", outcome: "survive" }
    ]
  },
  {
    id: 15,
    title: "Magic Mirror",
    description: "An ornate mirror shows you as the most beautiful person alive. It's very convincing.",
    choices: [
      { emoji: "😍", text: "Admire", outcome: "die", deathMessage: "You're so entranced by your reflection that you're trapped inside the mirror forever." },
      { emoji: "🙈", text: "Ignore", outcome: "survive" }
    ]
  },
  {
    id: 16,
    title: "Cranky Owl",
    description: "A massive owl with glowing eyes hoots angrily at you. It looks very hungry.",
    choices: [
      { emoji: "🐭", text: "Offer mouse", outcome: "survive" },
      { emoji: "🗣️", text: "Talk loud", outcome: "die", deathMessage: "The owl pecks you to death for being too noisy!" }
    ]
  },
  {
    id: 17,
    title: "Laser Cat",
    description: "A cute cat with glowing red eyes purrs at you. Those eyes look suspiciously like laser pointers.",
    choices: [
      { emoji: "😻", text: "Pet it", outcome: "die", deathMessage: "The cat's laser eyes fry you to a crisp! Should have seen that coming." },
      { emoji: "🧀", text: "Give cheese", outcome: "survive" }
    ]
  },
  {
    id: 18,
    title: "Mysterious Portal",
    description: "A swirling portal of unknown origin beckons. You hear strange noises from the other side.",
    choices: [
      { emoji: "🔮", text: "Enter", outcome: "die", deathMessage: "The portal splits you into two halves that exist in different dimensions!" },
      { emoji: "❌", text: "Block", outcome: "survive" }
    ]
  },
  {
    id: 19,
    title: "Boom Box Trap",
    description: "An old boom box sits playing ominous music. The volume knob is turned to maximum.",
    choices: [
      { emoji: "🎵", text: "Play music", outcome: "die", deathMessage: "The speakers explode with sonic force, bursting your eardrums!" },
      { emoji: "🤫", text: "Mute", outcome: "survive" }
    ]
  },
  {
    id: 20,
    title: "Cursed Pancake",
    description: "A perfectly golden pancake sits on a plate. It smells amazing but something feels wrong.",
    choices: [
      { emoji: "🍽️", text: "Eat", outcome: "die", deathMessage: "The pancake transforms you into a giant spider! You spend eternity spinning webs." },
      { emoji: "👀", text: "Inspect", outcome: "survive" }
    ]
  },
  {
    id: 21,
    title: "Talking Hat",
    description: "A fancy top hat speaks to you in a posh accent, offering to make you look distinguished.",
    choices: [
      { emoji: "🧢", text: "Wear", outcome: "die", deathMessage: "The hat eats your head! You should have known better than to trust talking clothing." },
      { emoji: "🎁", text: "Gift", outcome: "survive" }
    ]
  },
  {
    id: 22,
    title: "Jellyfish Balloon",
    description: "A balloon shaped like a jellyfish floats nearby, crackling with electricity.",
    choices: [
      { emoji: "🎈", text: "Pop", outcome: "die", deathMessage: "The balloon electrocutes you with jellyfish-level voltage!" },
      { emoji: "🪁", text: "Fly", outcome: "survive" }
    ]
  }
];
