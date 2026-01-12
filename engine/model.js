export function createCard({
    id,
    front,
    back,
    createdAt,
}) {
    return {
        id,
        front,
        back,

        // SRS state
        interval: 0,
        ease: 2.5,
        dueAt: createdAt,
        reps: 0,
        lapses: 0,
    };
}

export function isDue(card, now) {
    return card.dueAt <= now;
}

