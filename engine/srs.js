const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function review(card, rating, now) {
    let { interval, ease, reps, lapses } = card;

    if ("again" == rating) {
        lapses += 1;
        reps = 0;
        interval = 1;
        ease = Math.max(1.3, ease - 0.2);
    } else {
        reps += 1;

        if (1 === reps) interval = 1;
        else if (2 === reps) interval = 6;
        else interval = Math.round(interval * ease);

        if ("easy" === rating) ease += 0.15;
        if ("hard" === rating) ease -= 0.15;
    }

    return {
        ...card,
        reps,
        lapses,
        ease,
        interval,
        dueAt: now + interval * MS_PER_DAY
    };
}

