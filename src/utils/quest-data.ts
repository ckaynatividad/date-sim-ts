const tsundere = {
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

const yandere = {
  id: "yandere",
  title: "Yandere-chan",
  map: {
    top: "80%",
    left: "75%",
  },
  description: `You bump into Yandere-chan. She giggles, and says "Oh no! My books!" in an oddly cheerful way. She looks at you with a sweet smile, but her eyes seem almost empty. What do you do?`,
  choices: [
    {
      id: "fight",
      description: "Snap at her",
      result: `In response, you snap at her to watch where she is going. She chuckles again as if you've handed her a compliment, and pauses before responding to you. "Okay!" She says, but you do not feel any sense of satisfaction. You walk away, confused and a little disturbed.`,
      love: 1,
      confidence: -10,
    },
    {
      id: "apologize",
      description: "Apologize immediately",
      result: `You immediately apologize as you bend down to pick up her books. She seems grateful, and thank you before quietly giggling and leaving. You feel a little confused, but strangely mesmerized by her.`,
      love: 20,
      confidence: 10,
    },
    {
      id: "ignore",
      description: "Say nothing",
      result: `You say nothing and stare at her. She stares at you back with an empty stare and hollow smile, expression unchanged. You get self-conscious and leave.`,
      love: 0,
      confidence: -30,
    },
  ],
};

const kuudere = {
  id: "kuudere",
  title: "Kuudere-chan",
  map: {
    top: "80%",
    left: "75%",
  },
  description: `While not paying attention, you accidentally light bump shoulders with Kuudere-chan while she is walking the opposite direction. One of her books drop to the ground as she stops quietly and stares at her book. What do you do?`,
  choices: [
    {
      id: "fight",
      description: "Snap at her for bumping into you",
      result: `You snap at her for bumping into you, even though it was technically your fault. She says "Sorry" quietly after a pause, picks up her book, and continues walking without looking at you.`,
      love: -10,
      confidence: 0,
    },
    {
      id: "apologize",
      description: "Apologize",
      result: `You apologize and immediately bend down to pick up her book. She stops you, and says, "It's fine." She picks it up herself and walks away without looking at you. You feel embarrassed. But there's just something about her...`,
      love: 10,
      confidence: -10,
    },
    {
      id: "ignore",
      description: "Do nothing",
      result: `You watch her book fall. You both stare at it for a moment before she quietly picks it up and walks away as if nothing happened.`,
      love: 0,
      confidence: 0,
    },
  ],
};

const dandere = {
  id: "dandere",
  title: "Dandere-chan",
  map: {
    top: "80%",
    left: "75%",
  },
  description: `You're walking when Dandere-chan accidentally bumps you. She does not look at you, but apologizes profusely while bowing. What do you do?`,
  choices: [
    {
      id: "fight",
      description: "Snap at her",
      result: `You snap, "Watch where you're going." She is taken aback by your words, as tears are starting to well up in her eyes. She says sorry again before quickly leaving as a tear falls down her cheek. You can feel her anxiety and embarrassment as she leaves, and you feel bad.`,
      love: -20,
      confidence: -10,
    },
    {
      id: "apologize",
      description: "Apologize",
      result: `You apologize and assure her that it was your fault for bumping into her. She looks embarrassed, but slightly soothed by your words, as she steals a glance of you. Upon realizing this, she tenses up again and apologizes before running away. That was weird.`,
      love: 20,
      confidence: 10,
    },
    {
      id: "ignore",
      description: "Say nothing",
      result: `You say nothing as she apologizes, unsure what to say. The longer the silence, the more red her face becomes. She apologizes again and leaves quickly without looking your direction. You feel confused.`,
      love: 0,
      confidence: 10,
    },
  ],
};
export type Quest = typeof tsundere;

const quests: Quest[] = [tsundere, yandere, kuudere, dandere];

export default quests;
