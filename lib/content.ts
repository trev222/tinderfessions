export type Confession = {
  slug: string;
  number: string;
  title: string;
  deck: string;
  category: string;
  mood: string;
  readTime: string;
  date: string;
  accent: "coral" | "lime" | "lavender" | "sky";
  quote: string;
  paragraphs: string[];
  verdict: {
    question: string;
    options: [string, string, string];
  };
  followUp?: {
    title: string;
    paragraphs: string[];
  };
  contentWarning?: string;
};

export const confessions: Confession[] = [
  {
    slug: "he-brought-a-powerpoint",
    number: "001",
    title: "He brought a PowerPoint to the first date",
    deck: "There were twelve slides, three transitions, and one deeply concerning five-year plan.",
    category: "First-Date Chaos",
    mood: "Cringe",
    readTime: "3 min",
    date: "July 2026",
    accent: "coral",
    quote: "Slide nine was called ‘Potential Areas for Synergy.’ We had not ordered drinks yet.",
    paragraphs: [
      "His profile said he worked in strategy. I assumed that meant he owned at least one quarter-zip and used the word ‘bandwidth’ too often. I did not realize it meant he would arrive at the wine bar with a tablet, a collapsible stand, and an agenda.",
      "The presentation began with our compatibility scores. He had apparently converted my prompts into a spreadsheet and awarded points for shared music, overlapping neighborhoods, and what he called ‘weekend alignment.’ Slide six identified risks. My preference for spontaneous travel was yellow. My cat was red.",
      "I stayed through slide twelve because the bartender was trying not to laugh and kept sending over olives. At the end, he asked whether I had any questions. I said yes: did he validate parking? He did. Honestly, that was the most compatible thing about us.",
    ],
    verdict: {
      question: "Was the PowerPoint an instant dealbreaker?",
      options: ["Respect the preparation", "One drink, then escape", "Delete the calendar invite"],
    },
    followUp: {
      title: "The post-date survey arrived",
      paragraphs: [
        "The next morning he emailed a five-question feedback form. I selected ‘other’ for overall satisfaction and wrote: ‘Consider replacing slide nine with a normal conversation.’",
        "He replied with a sincere thank-you and said he was retiring the deck. Somewhere out there, another date may have benefited from my unpaid consulting.",
      ],
    },
  },
  {
    slug: "the-eleven-minute-date",
    number: "002",
    title: "The eleven-minute date",
    deck: "A record-breaking exit involving a fake phone call, a real fire alarm, and absolutely no chemistry.",
    category: "First-Date Chaos",
    mood: "Escape",
    readTime: "2 min",
    date: "July 2026",
    accent: "lime",
    quote: "My rescue call arrived at the exact moment the restaurant alarm started. Even the universe wanted me out.",
    paragraphs: [
      "We had exchanged funny messages for a week, but in person he answered every question with a motivational quote. Favorite movie? ‘Success is a journey.’ Any siblings? ‘You miss every shot you don’t take.’ I began to suspect I was sitting across from a desk calendar.",
      "At minute eight I texted my roommate our emergency emoji. She called and launched into a performance about a burst pipe. Before I could react, the restaurant fire alarm went off and the staff asked everyone to leave.",
      "Outside, he looked at the fire engines, looked at me, and said, ‘Pressure makes diamonds.’ I told him my roommate needed a plumber and walked away. The pipe was fine. My evening improved immediately.",
    ],
    verdict: {
      question: "Would you have stayed after the alarm?",
      options: ["Give it ten more minutes", "Leave with the fire trucks", "Ask the bartender for backup"],
    },
  },
  {
    slug: "the-emergency-contact",
    number: "003",
    title: "I accidentally became his emergency contact",
    deck: "One typo, a confused receptionist, and the least romantic second date imaginable.",
    category: "Plot Twist",
    mood: "Unexpected",
    readTime: "3 min",
    date: "July 2026",
    accent: "lavender",
    quote: "We had met once. Somehow I was now discussing his allergy information with urgent care.",
    paragraphs: [
      "After our first date he sent me his number, and I saved it one digit wrong. A week later an urgent-care receptionist called asking whether I was available to collect him after treatment. He had entered my number because he had nobody local, then apparently repeated my typo.",
      "I almost hung up. Instead I went, found him wearing a paper wristband and looking horrified, and drove him home. He apologized fourteen times and offered to reimburse me for parking, fuel, and emotional damages.",
      "Our second date was soup on his sofa while I made him update his contacts. We have now been together for two years. I remain his emergency contact, although he had to earn it properly the second time.",
    ],
    verdict: {
      question: "Emergency-contact pickup: romantic or alarming?",
      options: ["Rom-com material", "Kind, but boundaries", "Absolutely not"],
    },
    followUp: {
      title: "He finally completed the paperwork",
      paragraphs: [
        "On our anniversary he handed me a laminated emergency card with every field filled in correctly. Under relationship he had written ‘girlfriend, soup provider, excellent in a crisis.’",
        "I checked the phone number twice. Progress is romantic when you know where to look.",
      ],
    },
  },
  {
    slug: "the-catfish-who-wasnt",
    number: "004",
    title: "The catfish who wasn’t",
    deck: "His photos looked suspiciously perfect. The explanation was stranger—and considerably sweeter.",
    category: "Plot Twist",
    mood: "Wholesome",
    readTime: "3 min",
    date: "July 2026",
    accent: "sky",
    quote: "Every photo was professionally lit because his mother was trying to become a portrait photographer.",
    paragraphs: [
      "I nearly cancelled because every picture on his profile looked like a campaign for expensive knitwear. Perfect light, perfect angles, no tagged photos anywhere. My group chat agreed: either catfish or minor European royalty.",
      "He arrived looking exactly like his pictures, only more embarrassed. When I asked, he admitted his mother had recently taken up portrait photography and used him for weekly practice. She selected his profile pictures, wrote half his bio, and was waiting for a full report.",
      "We sent her a selfie from the date. She replied with lighting notes and a heart. There was no second date, but she still follows me and likes every holiday photo. I may have matched with the wrong member of the family.",
    ],
    verdict: {
      question: "Would you give the suspiciously perfect profile a chance?",
      options: ["Yes, verify then meet", "Only after a video call", "Too polished, pass"],
    },
  },
  {
    slug: "ghosted-then-seated-beside-him",
    number: "005",
    title: "Ghosted—then seated beside him",
    deck: "Six silent weeks ended at table seven of a very small wedding.",
    category: "Ghosted",
    mood: "Awkward",
    readTime: "3 min",
    date: "July 2026",
    accent: "coral",
    quote: "The place cards had done what six weeks of unanswered messages could not.",
    paragraphs: [
      "We went out four times. Then he disappeared halfway through a conversation about Sunday plans. I did the dignified thing: sent one follow-up, deleted the chat, and complained to twelve separate friends.",
      "Six weeks later I attended a former coworker’s wedding. My place card was beside his. He looked at the seating chart as though it had personally betrayed him. Dinner lasted two hours and included a couples quiz run by the maid of honor.",
      "Eventually he apologized. He had panicked when things started feeling serious and handled it badly. I accepted the apology and declined his offer to try again. We did, however, dominate the quiz. Closure comes in unusual packaging.",
    ],
    verdict: {
      question: "Does a sincere apology earn another date?",
      options: ["Hear him out", "Accept it, move on", "Seat him at another table"],
    },
    followUp: {
      title: "The bride had no idea",
      paragraphs: [
        "Months later I asked the bride whether the seating plan had been deliberate. She looked horrified, then delighted, then asked for every detail.",
        "He and I are not dating, but we now exchange a polite annual message on the couple’s anniversary. The group chat calls it our custody arrangement for the memory.",
      ],
    },
  },
  {
    slug: "the-dog-chose-first",
    number: "006",
    title: "The dog chose first",
    deck: "My date was fine. His elderly rescue dog was absolutely certain we belonged together.",
    category: "Actually Wholesome",
    mood: "Soft",
    readTime: "2 min",
    date: "July 2026",
    accent: "lime",
    quote: "She ignored every person in the park, climbed into my lap, and went to sleep.",
    paragraphs: [
      "He suggested a walk because his rescue dog, Mabel, was anxious around new people. I expected her to keep her distance. Instead she walked directly over, leaned her entire weight against my legs, and refused to move.",
      "We spent the date sitting on the grass while Mabel slept in my lap. He apologized. I told him it was the strongest endorsement I had received in months.",
      "Mabel passed away last winter at sixteen. Her framed photo sits in our hallway beneath the save-the-date she helped make possible. We still say she was the one who swiped right.",
    ],
    verdict: {
      question: "Who made the real match?",
      options: ["Mabel, obviously", "The humans helped", "Dogs know everything"],
    },
    followUp: {
      title: "Mabel made the guest list",
      paragraphs: [
        "We used her old brass name tag as the ring holder at the wedding. It was the only part of the ceremony guaranteed not to wander off during the vows.",
        "The shelter where he adopted her received the leftover flower budget. Matchmaker fees, paid in full.",
      ],
    },
  },
  {
    slug: "my-date-brought-a-roommate",
    number: "007",
    title: "My date brought a roommate",
    deck: "Not for safety. Not by accident. Apparently this was a group interview.",
    category: "Red Flags",
    mood: "Baffling",
    readTime: "2 min",
    date: "July 2026",
    accent: "lavender",
    quote: "The roommate had a clipboard. I wish that sentence were a metaphor.",
    paragraphs: [
      "He arrived with his roommate and explained that they made all major decisions together. I asked whether ordering noodles counted as a major decision. They conferred before saying no.",
      "The roommate asked about my cleaning habits, preferred thermostat setting, and whether I had strong opinions about shared streaming passwords. I realized they were not vetting a date. They were quietly interviewing a future tenant with romantic benefits.",
      "I left before the credit-check portion. Two days later the roommate messaged to say I had great energy but was ‘not aligned with the household vision.’ I have never been more relieved to fail an interview.",
    ],
    verdict: {
      question: "How fast are you leaving the group interview?",
      options: ["Before ordering", "After one question", "Stay for the plot"],
    },
  },
  {
    slug: "the-playlist-was-a-warning",
    number: "008",
    title: "The playlist was a warning",
    deck: "He made me a romantic mix before we met. The track names spelled out an important message.",
    category: "Red Flags",
    mood: "Unhinged",
    readTime: "2 min",
    date: "July 2026",
    accent: "sky",
    quote: "The first letters spelled I STILL LIVE WITH MY EX. Points for formatting, I suppose.",
    paragraphs: [
      "Before our date he sent a playlist called ‘For Friday.’ I thought it was charming until my friend noticed the song titles were oddly specific. Reading the first letters downward produced a confession: I STILL LIVE WITH MY EX.",
      "I asked him directly. He said he wanted to be honest but found ordinary sentences ‘too confrontational.’ His ex, he explained, would also be at the apartment after dinner but probably asleep.",
      "I cancelled and suggested that future disclosures use punctuation rather than indie pop. He added one final song to the playlist: Sorry Seems to Be the Hardest Word.",
    ],
    verdict: {
      question: "Is playlist disclosure charming or chaos?",
      options: ["Creative honesty", "Please use actual words", "Delete the playlist"],
    },
  },
];

export const categories = [
  "All",
  "First-Date Chaos",
  "Plot Twist",
  "Ghosted",
  "Actually Wholesome",
  "Red Flags",
] as const;

export function getConfession(slug: string) {
  return confessions.find((confession) => confession.slug === slug);
}

export function getRelatedConfessions(confession: Confession) {
  const sameCategory = confessions.filter(
    (item) => item.slug !== confession.slug && item.category === confession.category,
  );
  const others = confessions.filter(
    (item) => item.slug !== confession.slug && item.category !== confession.category,
  );
  return [...sameCategory, ...others].slice(0, 3);
}
