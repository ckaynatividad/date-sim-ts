const tsundere: Quest = {
  id: "tsundere",
  title: "Tsundere-chan",
  map: {
    top: "80%",
    left: "75%",
  },
  description: `You bump into Tsundere-chan. She looks at you in disgust, and snaps "Watch where you're going, dummy." What do you do?`,
  choices: [
    {
      id: "fight",
      description: "Snap back",
      result: `In retaliation, you snap back "You first". You go to leave and bump her shoulder with yours on the way out. Tsundere-chan is stunned you would even talk back to her -- no one talks back to her. She screams obscenities at you as you walk away, but you have left a memorable impression in her mind.`,
      love: 10,
      confidence: 20,
    },
    {
      id: "apologize",
      description: "Apologize immediately",
      result: `You immediately apologize for bumping into her. She hisses, "Ugh, pathetic." and rolls her eyes at your before leaving. You leave no memorable impression on her.`,
      love: 0,
      confidence: -10,
    },
    {
      id: "ignore",
      description: "Ignore her",
      result: `After she finished talking, you stare at her for a moment before walking away. She gets upset you did not acknowledge her and yells, "Hey, I'm talking to you dummy!" as she runs up to kick you from behind. It hurts.`,
      love: -20,
      confidence: 0,
    },
  ],
};

const yandere: Quest = {
  id: "tsundere",
  title: "Tsundere-chan",
  map: {
    top: "80%",
    left: "75%",
  },
  description: `You bump into Tsundere-chan. She looks at you in disgust, and snaps "Watch where you're going, dummy." What do you do?`,
  choices: [
    {
      id: "fight",
      description: "Snap back",
      result: `In retaliation, you snap back "You first". You go to leave and bump her shoulder with yours on the way out. Tsundere-chan is stunned you would even talk back to her -- no one talks back to her. She screams obscenities at you as you walk away, but you have left a memorable impression in her mind.`,
      love: 10,
      confidence: 20,
    },
    {
      id: "apologize",
      description: "Apologize immediately",
      result: `You immediately apologize for bumping into her. She hisses, "Ugh, pathetic." and rolls her eyes at your before leaving. You leave no memorable impression on her.`,
      love: 0,
      confidence: -10,
    },
    {
      id: "ignore",
      description: "Ignore her",
      result: `After she finished talking, you stare at her for a moment before walking away. She gets upset you did not acknowledge her and yells, "Hey, I'm talking to you dummy!" as she runs up to kick you from behind. It hurts.`,
      love: -20,
      confidence: 0,
    },
  ],
};
export type Quest = typeof tsundere;

const quests: Quest[] = [tsundere, yandere];

export default quests;
