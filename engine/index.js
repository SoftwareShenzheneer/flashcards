import { buildQueue } from "./queue.js";
import { review } from "./srs.js";

export function getNextCards(cards, now, settings) {
    return buildQueue(cards, now, settings.limits);
}

export function answerCard(card, rating, now) {
    return review(card, rating, now);
}

