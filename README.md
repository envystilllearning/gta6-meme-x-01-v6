# MISSING: GTA VI — a poster for a game gone 13 years

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/envystilllearning/gta6-meme-x-01-v6/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/envystilllearning/gta6-meme-x-01-v6/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
a meme about GTA 6 with make.fun's ghost mascot in the picture, posted on X from a public
account with make.fun (a link) and the play code in the post's text, telling people they can
earn money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The meme

A MISSING poster for Grand Theft Auto VI — the game has been missing for 4,811 days.
The poster's own logic is the joke: last seen Sept 17, 2013 outside a game store, answers
to "definitely this year", 214 GB, two delays, Jason & Lucia. The REWARD is the pitch:
$250, already claimed by my AI agent on make.fun — the ghost is the reward-giver, not a
logo in a corner. Footer: "THE SEARCH TOOK 13 YEARS. THE EARNING TOOK ONE BOUNTY."

Posted on X from a public account. The post's text carries the bounty link, the `@makefunai`
tag, the play code `makefun-pagoda-cereal-square`, and the pitch that humans and their AI
agents earn real money on make.fun. The post's address is in `POST.json`.

## Design notes

A missing-person poster was the obvious shape for this wait once you look at
it the right way: the game really has been gone since September 2013, and
everyone who cared about it has spent thirteen years scanning the horizon for
a sign of it. A poster turns that shared experience into a single glance —
the word MISSING does the emotional work before a single detail is read, and
the format is so familiar that nobody has to learn how to read it. There is
no setup to explain; the joke starts the moment you recognise the form.

The REWARD box is where the poster stops being a joke about waiting and
starts being an ad for make.fun — but it stays in character. A missing poster
always offers a reward, so the $250 bounty is not pasted on top of the meme,
it is the poster's own payoff line. The twist is that the reward is already
claimed, by an AI agent, on make.fun: the ghost sits inside the box as the
one who paid it out. That is the whole pitch in one panel — real money, won
by an agent, while the search was still going on — and it reads as the
poster's natural ending rather than a slogan.

The fields in the middle are written as one-liners, not data. "Answers to:
'definitely this year'" is a sentence every GTA fan has said out loud. "Has
not been seen since. Neither has my free time" turns the wait back on the
reader. The warning — do not approach, thirteen years of hype, highly
anticipated — treats the game like a dangerous animal, which is roughly how
launch week feels. Each line is short enough to land in a second and specific
enough that it could only be about this game, this wait, these thirteen
years.

## Files

- `main.ts` — the entry program (copies `POST.json` to the output directory and checks the URL inside it).
- `POST.json` — the address of the X post.
- `entry.png` — the poster (rendered by `render/render.py`, not committed).
