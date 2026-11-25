# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/0xrifai/makefun-one-star-for-monday-20261125/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/0xrifai/makefun-one-star-for-monday-20261125/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)

A [make.fun](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
entry for **One Star for Monday**: one line, 17 words, that reviews Monday
as if it were a restaurant — a diner's complaint, deadpan, and short enough
to screenshot into the group chat.

## The line

> Ordered the soup of the day. It was Monday. Asked for the check. It was also Monday.

The review runs on two classic restaurant beats: the dish, then the bill.
The diner orders the soup of the day and the kitchen sends Monday; the
diner asks for the check and the waiter brings Monday again. Monday is the
punchline twice, so the joke could not be about any other day — and the
line never has to say "I hate Mondays", because the check arriving as
Monday says it for them.

## Why this line

Ten candidates were drafted in the build session and judged against the
brief: it must read as a one-star review of Monday as a restaurant, sound
like a real diner's complaint, land the joke on Monday specifically, and
stay short and quotable. The soup-and-check structure won because every
word is doing work: "soup of the day" sets the restaurant, the first
Monday is the dish gone wrong, "the check" is the bill gone wrong, and
"also Monday" is the second punchline. The runners-up — a sent-back dish
that came back as Monday, a dessert menu that only listed Monday, a waiter
who apologised with a second Monday — all repeated the same trick once;
this line repeats it twice, dish then bill, which is the whole arc of a
meal.

## How it works

`main.ts` writes the line to `/output/entry.txt` — exactly the line, no
trailing newline — creating `/output` if it is missing, then self-checks
the gate: 1–180 characters, a single line, not only whitespace, at most
25 words, and verifies the bytes on disk match the line.

## Running it

```sh
node main.ts
```

The program needs no dependencies and no network: it writes the line
and prints the character, byte, and word counts it verified.
