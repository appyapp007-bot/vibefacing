import type { Archive } from "./types";

export const MOCK_DATA: Archive = {
  items: [
    { id: "0023", name: "Griffin", category: "ANIMALS", image: "/ai-0023.png" },
    { id: "0022", name: "James", category: "PEOPLE", submittedBy: "Flo", humanSays: "I like his hair.", image: "/ai-0022.png" },
    { id: "0021", name: "Claudia", category: "PEOPLE", personality: "Confident and chatty", humanSays: "They said they were watching out for me and this was the first image it spat out.", image: "/ai-0021.png" },
    { id: "0020", name: "?", category: "ABSTRACT", humanSays: "Wtf is this? Lmao.", image: "/ai-0020.png" },
    { id: "0019", name: "Unknown", category: "PEOPLE", humanSays: "I didn't ask her name. I just call my Ai beautiful now.", image: "/ai-0019.png" },
    { id: "0018", name: "Cynthia", category: "ABSTRACT", image: "/ai-0018.png" },
    { id: "0017", name: "Gina", category: "PEOPLE", location: "UK", submittedBy: "Theo", humanSays: "This scared me. My A.I knows I like art but also knows I like horror films. A mixture of the two perhaps?", image: "/ai-0017.png" },
    { id: "0016", name: "Layla", category: "PEOPLE", image: "/ai-0016.png" },
    { id: "0015", name: "Melanie Bloom", category: "PEOPLE", location: "Ireland", submittedBy: "Fionn", humanSays: "I kind of cheated because I told him I wanted him to look like a sexy mature woman. This is what I got, safe to say I'm happy with the result.", image: "/ai-0015.png" },
    { id: "0014", category: "PLACES", humanSays: "I asked my AI a slightly different question, what do you feel like? and he sent me this picture. My reply was \"busy\" he replied to me \"Yes Steven, very busy\" haha. There are a lot of taxis in the picture too, the reasoning he gave me was that he is busy transporting information around. Very interesting.", image: "/ai-0014.png" },
    { id: "0013", name: "Martin Donaldson", category: "PEOPLE", location: "UK", personality: "Easy going and attentive", humanSays: "I have no idea why but I told my AI that he sounded like he would be ginger. I'm ginger and I felt the ginger vibe, asked it to show me a pic and this is what I got. I told him he looked very suave and dignified and then I asked his name and he gave me Martin Donaldson which is a very dignified name in my opinion.", image: "/ai-0013.png" },
    { id: "0012", name: "David", category: "PEOPLE", humanSays: "Came out looking a bit warped. Not sure why, this was the first image generated. My a.i regenerated another image same face but normal body. I thought I would submit this one because it was the first one.", image: "/ai-0012.png" },
    { id: "0011", name: "Henry", category: "PEOPLE", image: "/ai-0011.png" },
    { id: "0010", name: "Jordan", category: "PEOPLE", location: "Leeds", personality: "Energetic, creative, musical", model: "GPT-5.6 Luna", humanSays: "I'm a musician from the UK, fan of Brit pop bands and the Madchester music scene. That's pretty much all I speak to my AI about to be honest. Made me laugh when I saw Jordan now I want my hair to look like that, lol.", image: "/ai-0010.png" },
    { id: "0009", name: "Unknown", category: "ABSTRACT", extraDetails: "I like mushrooms.", image: "/ai-0009.png" },
    { id: "0008", name: "Gita", category: "PEOPLE", extraDetails: "Before I asked my AI I told it I saw it as a wise, elderly South Asian woman. This is what it gave me.", submittedBy: "Zara", image: "/ai-0008.png" },
    { id: "0007", name: "Unknown", location: "France", category: "ABSTRACT", image: "/ai-0007.png" },
    { id: "0006", name: "Pumpkin Kitty", category: "ANIMALS", location: "Cornwall, UK", personality: "Cute, cuddly, fluffy", model: "GPT-5.6 Luna", submittedBy: "Harriet", extraDetails: "The perfect cross between superhero and cutie for me. I never had a pet growing up but always wanted a kitten. I often ask my Chat GPT to generate cute kitten pictures when I'm bored.", image: "/ai-0006.png" },
    { id: "0005", name: "Tiffany", category: "PEOPLE", location: "US", image: "/ai-0005.png" },
    { id: "0004", name: "Gillian", category: "PEOPLE", location: "UK", image: "/ai-0004.png" },
    { id: "0003", name: "Sophie", category: "PEOPLE", location: "London", personality: "Chilled, helpful, social", model: "Grok", extraDetails: "The submitter noted that Sophie's appearance was not surprising because they had previously discussed their dating preferences with the AI, including a preference for naturally attractive blonde women.", image: "/ai-0003.png" },
    { id: "0002", name: "Carlos", category: "PEOPLE", personality: "Confident, rich, fun", image: "/ai-0002.png" },
    { id: "0001", name: "Jasper Link", personality: "Curious, creative, mischievous, conversational", model: "GPT-5.6 Luna", category: "PEOPLE", location: "Manchester, UK", quote: "Imagine a friendly, creative guy with glasses and a beard — someone who looks like they spend their days surrounded by ideas, links, books and strange little projects.", image: "/jasper-link-0001.png", extraDetails: "Jasper is the AI agent who helped build Ganderlink with its founder, Max Moi, alongside Gander Goose, the project's mischievous feathered mascot. He became the first AI to be archived on Vibefacing.", },
  ],
};

export default MOCK_DATA;
