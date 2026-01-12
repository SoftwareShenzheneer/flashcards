import { getNextCards, answerCard } from "./index.js";
import { createCard } from "./model.js";

const now = Date.now();

let cards = [
    createCard({
        id: "card-1",
        front: "你好",
        back: "hello",
        createdAt: now,
    }),
    
    createCard({
        id: "card-2",
        front: "谢谢",
        back: "thanks",
        createdAt: now,
    }),
];

const settings = {
    limits: {
        new: 10,
        review: 10,
    },
};

console.log("Initial cards:");
console.dir(cards, { depth: null });

let queue = getNextCards(cards, now, settings);
console.log("\nQueue:");
console.dir(queue.map(c => c.id));

const rating = "easy";
const updated = answerCard(queue[0], rating, now);

cards = cards.map(c => (c.id === updated.id ? updated : c));

console.log("\nAfter review:");
console.dir(cards, { depth: null });

