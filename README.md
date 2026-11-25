# Unsent: The Micro-Confession Sprint

[![make.fun bounty](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![entry rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Zhoya0077/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![entry reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Zhoya0077/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the make.fun bounty **"Unsent: The Micro-Confession Sprint"**
(`u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`, $2, 2 places paid).
Deadline: Thu 26 Nov 2026 08:30 WIB.
Bounty page: https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba

## The entry

> To: Dad
>
> I kept your last birthday voicemail because I never learned how to say I miss you without it sounding like I'm asking for something.

A two-part micro-confession: a `To:` line naming who it was meant for, and
the unsent line itself, written exactly as it was typed, with no explanation
after it. It stays in drafts because it is too honest and too afraid at once:
saying "I miss you" out loud risks sounding like a request, so the voicemail
gets kept instead of the call getting made. The `To:` line and the message
need each other — the voicemail only matters because it is Dad's.

## How it runs

`main.ts` (Node 22, no dependencies) writes the entry to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), prints it to
stdout, and exits non-zero if its self-checking gate fails: the file must
exist, be 1–260 characters, and be exactly two lines — a `To:` line and a
message line of at most 200 characters, with no trailing newline.

```sh
node main.ts
```
