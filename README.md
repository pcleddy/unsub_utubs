# 💀 YouTube Unsub Purge

A browser console script that bulk-unsubscribes from all your YouTube channels — with 50 snarky farewell messages to keep you entertained while your feed burns.

## Why?

Because clicking "Unsubscribe" 300 times is not how you want to spend your afternoon. And if you're going to nuke your subscription list, you might as well laugh about it.

## Usage

1. Go to [youtube.com/feed/channels](https://www.youtube.com/feed/channels)
2. **Scroll all the way to the bottom** so every channel loads (important!)
3. Open your browser's DevTools console (`F12` → Console tab)
4. Paste the contents of `unsub.js` and hit Enter
5. Sit back and watch the roasts roll in

## Sample Output

```
Found 47 channels. Let the purge begin...

1. MrBeast (182M subscribers) — It's not you, it's me. Actually no, it's you
2. Veritasium (16M subscribers) — Your content peaked 3 years ago
3. Linus Tech Tips (16M subscribers) — I was hate-watching anyway
4. 3Blue1Brown (6M subscribers) — My therapist said I should let you go
...
47. Some Vlogger (12K subscribers) — Your thumbnails lied to me for the last time

🔥 Unsubscribed from 47 channels.
🧹 Your feed is now an empty void, just like your recommendations.
💀 Refresh to confirm the carnage.
```

## How It Works

The script is an `async` function that iterates through every channel on your subscriptions page. For each one it:

1. Clicks the subscribe/unsubscribe button
2. **Awaits a timeout** to yield back to the browser's event loop (lets the confirmation dialog render)
3. Clicks "Unsubscribe" on the confirmation dialog
4. **Awaits another timeout** for the DOM to settle
5. Logs the channel name + a snarky farewell to the console

The `await new Promise(r => setTimeout(r, ...))` pattern is key — it cooperates with the JS event loop instead of blocking the main thread, giving YouTube's UI time to process each click.

## Troubleshooting

| Problem | Fix |
|---|---|
| "No channels found" | Make sure you're on `/feed/channels` and scrolled to the bottom |
| Skips channels / misses confirm dialog | Increase the timeout delays (500 → 1000, 800 → 1500) |
| Only unsubs some channels | YouTube lazy-loads — scroll down more and run again |
| Selectors don't match | YouTube updates its DOM frequently — inspect the subscribe button and update the selectors in the script |

## ⚠️ Warning

**This is irreversible.** There is no bulk re-subscribe. Once they're gone, they're gone. If you want to keep some channels, unsub from those ones manually first... or just accept your new minimalist lifestyle.

## The 50 Farewells

Because you deserve to know what you're getting into:

<details>
<summary>Click to expand the full roast list</summary>

1. It's not you, it's me. Actually no, it's you
2. Your content peaked 3 years ago
3. I was hate-watching anyway
4. My therapist said I should let you go
5. You won't even notice I'm gone
6. I'm decluttering my life and you didn't make the cut
7. Sayonara, don't make a 40-minute video about this
8. We had a good run... did we though?
9. I've been meaning to do this for months
10. You've been voted off the island
11. Your notification bell has been silenced... permanently
12. Don't worry, I never watched your videos anyway
13. I need space. Like, all of it. Away from you
14. Consider this my two weeks notice, effective immediately
15. Alexa, play 'I Will Survive'
16. Another one bites the dust
17. You used to be cool. What happened?
18. I'm not mad, I'm just disappointed
19. Thanks for the memories (the mid ones too)
20. You've been eliminated from the algorithm
21. Unsubscribing speedrun, any% glitchless
22. This hurts me more than it hurts you. Just kidding
23. Tell your sponsors I said goodbye
24. I'll always remember to skip your ads
25. Plot twist: the unsub button was the real content
26. Breaking up is hard to do. Nah, this was easy
27. May your watch time plummet gracefully
28. Gone but not forgotten. Okay maybe a little forgotten
29. Sorry, I'm over my subscription budget
30. Swiping left on your entire catalog
31. You were my 3am doom-scroll, and I'm getting help now
32. I've outgrown you like a pair of Crocs
33. SMASH that unsubscribe button amirite
34. Per my last unsubscription
35. New year, new me. Fewer YouTubers
36. This is your performance review. You're fired
37. I'm taking my eyeballs elsewhere
38. You've been Marie Kondo'd. You sparked no joy
39. Don't call it a comeback, because I'm not coming back
40. Roses are red, violets are blue, I'm unsubscribing from you
41. You're going to my 'previously watched' graveyard
42. May the algorithm forget we ever met
43. I'd say 'see you in my recommendations' but let's not
44. Adding you to my cringe compilation
45. Ctrl+Z on that subscribe decision
46. I liked you before you were mid
47. Your thumbnails lied to me for the last time
48. Return to sender. Subscription rejected
49. And just like that... poof
50. Last one out, turn off the ring light

</details>

## License

MIT — do whatever you want with it. Unsub responsibly.
