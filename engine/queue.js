import { isDue } from "./model.js";

export function buildQueue(cards, now, limits) {
    const due = [];
    const newCards = [];

    for (const card of cards) {
        if (0 === card.reps) newCards.push(card);
        else if (isDue(card, now)) due.push(card);
    }

    due.sort((a, b) => a.dueAt - b.dueAt);

    const result = [
        ...due.slice(0, limits.review),
        ...newCards.slice(0, limits.new),
    ];

    return result;
}

