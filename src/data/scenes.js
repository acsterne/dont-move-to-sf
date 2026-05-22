export const CHARACTERS = {
  mia: {
    id: 'mia',
    name: 'MIA',
    pronoun: 'she',
    possessive: 'her',
    bio: 'West Village.\nMedia job.\nAmazing life.',
  },
  jake: {
    id: 'jake',
    name: 'JAKE',
    pronoun: 'he',
    possessive: 'his',
    bio: 'West Village.\nFinance by day.\nAnywhere by night.',
  },
}

export const NYC_SCENES = [
  {
    id: 'nyc_open',
    location: 'WEST VILLAGE · TUESDAY, 9PM',
    text: "Your street. Three bars, all full, on a Tuesday. You run into two people you know before you reach the corner. Someone waves from a stoop. Everything is alive and nobody is talking about their sleep score.",
    choices: null,
  },
]

// NYC stat nudges angle you toward SF archetypes:
// fun:1 → you feel SF's dullness acutely → Marina Lifer
// sanity:1 → you notice SF's weirdness fast → Tech Adjacent
// fitness:1 → you drift into outdoor culture without noticing → Hiker

export const NYC_SCENES_MIA = [
  {
    id: 'nyc_alex_1',
    location: 'WEST VILLAGE · FRIDAY',
    text: "Four texts about tonight. A good problem. Where are you going?",
    choices: [
      {
        text: 'Cocktails on Jane St. Then wherever the night goes.',
        outcome: 'The night is long and exactly right.',
        stats: { fun: 2 },
      },
      {
        text: 'Big dinner with the girls. You close it down.',
        outcome: 'You are the last table. The waiter loves you.',
        stats: { fun: 2 },
      },
      {
        text: 'Out dancing. It ends whenever it wants.',
        outcome: 'You get home at 3am and feel completely fine about it.',
        stats: { fitness: 2 },
      },
    ],
  },
  {
    id: 'nyc_alex_2',
    location: 'LOWER EAST SIDE · SATURDAY',
    text: "You met someone last night. A chef, maybe a writer, the details were pleasantly blurry. You are already texting. He is from here and not leaving.",
    choices: null,
  },
  {
    id: 'nyc_alex_3',
    location: 'WEST VILLAGE · SUNDAY ROOFTOP',
    text: "Rooftop. One friend just got back from somewhere. One is in a beautiful disaster of a relationship and tells it brilliantly. Nobody is in bed by 10. What do you do?",
    choices: [
      {
        text: 'Stay for another bottle.',
        outcome: 'The conversation gets better. It always does.',
        stats: { sanity: 2 },
      },
      {
        text: 'Take it to a bar around the corner.',
        outcome: 'You run into three more people you know. This city.',
        stats: { fun: 2 },
      },
    ],
  },
]

export const NYC_SCENES_JAKE = [
  {
    id: 'nyc_jake_1',
    location: 'WEST VILLAGE · FRIDAY',
    text: "Three texts. Three different nights. You have to pick one. Where are you going?",
    choices: [
      {
        text: "Dive bar on Bedford. Run into six people you know.",
        outcome: 'This happens every time. You never understand why it surprises you.',
        stats: { fun: 2 },
      },
      {
        text: "Warehouse rave in Bushwick. You don't know the host.",
        outcome: 'You know four people there by midnight. Of course you do.',
        stats: { fitness: 2 },
      },
      {
        text: "That place on Rivington. You always end up there.",
        outcome: 'You are there until 2am talking to a stranger about something that matters.',
        stats: { sanity: 2 },
      },
    ],
  },
  {
    id: 'nyc_jake_2',
    location: 'LOWER EAST SIDE · SATURDAY',
    text: "You talked to a girl until 2am. She's a painter. Strong opinions about everything, right about most of it. Eight years in New York. Not leaving. You are already thinking about texting her.",
    choices: null,
  },
  {
    id: 'nyc_jake_3',
    location: 'WEST VILLAGE · SUNDAY',
    text: "Beers with the guys. Everyone left work at the door. The conversation gets loud and goes late. Where do you take it?",
    choices: [
      {
        text: 'One more round here.',
        outcome: 'The bar closes around you. Closing time felt like an interruption.',
        stats: { sanity: 2 },
      },
      {
        text: 'Move somewhere else. The night is young.',
        outcome: 'You end up somewhere completely unexpected. This city.',
        stats: { fun: 2 },
      },
    ],
  },
]

export const NYC_CLOSING_SCENE = {
  id: 'nyc_close',
  location: 'WEST VILLAGE · 1AM',
  text: "You get home at 1am. You are not even that tired. This is a Tuesday. A completely normal Tuesday.",
  choices: null,
}

export const VISIT_SCENES = [
  {
    id: 'visit_park',
    location: 'FORT MASON · SATURDAY',
    text: "Sunny. 72 degrees. Everyone is out. You think: the weather is incredible here. You do not know this is the one nice week of the year.",
    choices: null,
  },
  {
    id: 'visit_hayes',
    location: 'HAYES VALLEY · SATURDAY AFTERNOON',
    text: "Your friend walks you through Hayes Valley — good coffee, interesting people. She mentions the Mission is great too, and Noe Valley. You nod. You do not yet understand that getting between them requires a car, an Uber, or a 40-minute walk up a hill.",
    choices: null,
  },
  {
    id: 'visit_hike',
    location: 'MARIN HEADLANDS · SUNDAY',
    text: "Your West Coast friend takes you hiking. The views are genuinely stunning. Then the recruiter DM arrives.",
    choices: null,
  },
  {
    id: 'visit_offer',
    location: 'MARIN HEADLANDS · STILL SUNDAY',
    text: '"Senior role. 40% raise. Equity. Flexible culture." You read it twice standing on a cliff above the Pacific.',
    choices: null,
  },
  {
    id: 'visit_friends',
    location: 'YOUR PHONE · SUNDAY EVENING',
    text: 'Two messages arrive at the same time.',
    isFriendSplit: true,
    eastCoast: '"Do not do it. Whatever they are offering. I am serious. Do not do it."',
    westCoast: '"OH MY GOD you should move here!! I just sent you a Zillow link. It is SO much cheaper than NYC!!"',
    choices: null,
  },
]

export const DECISION_SCENE = {
  id: 'decision',
  location: 'YOUR APARTMENT · WEST VILLAGE',
  text: 'The offer letter sits on your screen. You are going to say yes. The question is why.',
  choices: [
    { text: 'The money makes sense.', outcome: 'It does. On paper.' },
    { text: 'I need a change.', outcome: 'Change is coming. That part is true.' },
    { text: 'Just for two years.', outcome: "That's what everyone says." },
  ],
  friendsAfter: {
    eastCoast: '"I love you. I will be here when you get back."',
    westCoast: '"I am sending you moving company recs right now!!"',
  },
}

// stats: fitness (up), sanityLost (up), funLost (up)
// archetype determined by highest stat at end

export const SF_SCENES = [
  {
    id: 'sf_apartment',
    location: 'SFO ARRIVALS → THE MARINA',
    text: "You move into the Marina. The broker said it was 'vibrant.' The bar is called Balboa. You will learn this name very well.",
    choices: null,
  },
  {
    id: 'sf_neighborhoods',
    location: 'SF · MONTH 2',
    text: "You want to go to Hayes Valley tonight. It's 3.2 miles. Two hills between you and it. Walk: 52 minutes. Uber: $24 each way. You look out at your neighborhood and realize something.",
    choices: [
      {
        text: 'Take the Uber. You are a city person.',
        outcome: "$48 round trip. If you go out three times a week, that is $600 a month just in Ubers to get anywhere worth going. You stop doing the math.",
        stats: { sanity: -1 },
      },
      {
        text: 'Stay in. Your neighborhood bar will do.',
        outcome: "You order the same drink. You see the same people. You tell yourself the neighborhood is growing on you. The neighborhood is growing on you.",
        stats: { fun: -1 },
      },
    ],
  },
  {
    id: 'sf_bedtime',
    location: 'SF · WEDNESDAY, 9:30PM',
    text: "You text the two people you vaguely know from college who live here. Nothing. Chestnut Street was packed at noon — brunch, errands, everyone out. Now: empty. Lights off. SF has gone to bed.",
    choices: [
      {
        text: 'Walk down to the bar anyway.',
        outcome: "Two couples. The bartender. A man reading a book about stoicism. You nurse a drink and check your phone. The New York group chat is alive. It is midnight there. They are still out.",
        stats: { sanity: -1 },
      },
      {
        text: 'Stay in.',
        outcome: "You are in bed by 10:30. At 7am you check Instagram. Your friends are just getting home. There is a story from Janes: someone ran into Timothée Chalamet and Kylie Jenner. The biggest celebrity you have encountered in SF is that Scott Wu from Cognition spoke at a demo day someone went to.",
        stats: { fun: -1 },
      },
    ],
  },
  {
    id: 'sf_bar',
    location: 'BALBOA CAFE · FRIDAY NIGHT',
    text: "Balboa. Always Balboa. A man in a Patagonia vest asks if you've done the PCT. You have had this conversation before.",
    choices: [
      {
        text: "Nod and say 'totally.' You have started to believe it.",
        outcome: "You have started pricing trekking poles online. You have a saved Strava route. You follow three hiking accounts. You do not know when this happened.",
        stats: { fun: -1 },
      },
      {
        text: 'Mention something happening in the city. Watch him blank.',
        outcome: "He recovers quickly. Asks if you are into trail running. You realize you have not been to a concert in four months. You realize you have not noticed.",
        stats: { fitness: -1 },
      },
      {
        text: 'Ask about his startup. You regret it immediately.',
        outcome: "Eighteen minutes later you know his cap table, his co-founder situation, and his Series A timeline. You do not know his last name. You nod and make sounds of understanding. You have learned to make these sounds.",
        stats: { sanity: -1 },
      },
    ],
  },
  {
    id: 'sf_friend_visit',
    location: "SF · SARAH'S VISIT",
    text: "Your best friend flies out for the weekend. Day one she looks around. She does not say anything.",
    choices: [
      {
        text: 'Show her the views. Take her on a hike.',
        outcome: "The views are stunning and she says so. On the trail you realize you are explaining the route with confidence. You know what a switchback is. You own trekking poles. When did you buy trekking poles.",
        stats: { fitness: 2 },
      },
      {
        text: 'Take her to Balboa. The usual.',
        outcome: "She nurses one drink and quietly checks flights. You pretend not to see. You hear yourself say 'oh it gets better in the summer' and watch her face do something complicated.",
        stats: { fun: -1 },
      },
      {
        text: "Tell her the truth.",
        outcome: "You say it out loud for the first time. The city is not what you thought. She nods slowly. 'I know,' she says. She already knew.",
        stats: { sanity: -1 },
      },
    ],
    afterText: '"Come home ASAP." — your best friend, on the Uber to SFO',
  },
  {
    id: 'sf_moment',
    location: 'FIDI · TUESDAY, 2:47PM',
    text: "Fourteen unread Slacks. Someone is presenting the Q3 roadmap. Someone else just said 'let's double-click on that.' You stop listening. You open your phone.",
    choices: [
      {
        text: 'Open StreetEasy. Search: West Village.',
        outcome: "$3,800/mo. Available March 1. Exposed brick. Pre-war. Your chest does something it has not done in months.",
        stats: {},
        isEnding: true,
      },
      {
        text: 'Text the group chat.',
        outcome: "Three replies in 30 seconds. It is midnight there. They are still out. Someone sends a photo. You recognize the corner. You close the app.",
        stats: {},
        isEnding: true,
      },
    ],
  },
]
