async function unsubAll() {
  const items = document.querySelectorAll('ytd-channel-renderer');

  if (items.length === 0) {
    console.log('No channels found. Make sure you\'re on youtube.com/feed/channels and scrolled to the bottom.');
    return;
  }

  console.log(`Found ${items.length} channels. Let the purge begin...\n`);

  const farewells = [
    "It's not you, it's me. Actually no, it's you",
    "Your content peaked 3 years ago",
    "I was hate-watching anyway",
    "My therapist said I should let you go",
    "You won't even notice I'm gone",
    "I'm decluttering my life and you didn't make the cut",
    "Sayonara, don't make a 40-minute video about this",
    "We had a good run... did we though?",
    "I've been meaning to do this for months",
    "You've been voted off the island",
    "Your notification bell has been silenced... permanently",
    "Don't worry, I never watched your videos anyway",
    "I need space. Like, all of it. Away from you",
    "Consider this my two weeks notice, effective immediately",
    "Alexa, play 'I Will Survive'",
    "Another one bites the dust",
    "You used to be cool. What happened?",
    "I'm not mad, I'm just disappointed",
    "Thanks for the memories (the mid ones too)",
    "You've been eliminated from the algorithm",
    "Unsubscribing speedrun, any% glitchless",
    "This hurts me more than it hurts you. Just kidding",
    "Tell your sponsors I said goodbye",
    "I'll always remember to skip your ads",
    "Plot twist: the unsub button was the real content",
    "Breaking up is hard to do. Nah, this was easy",
    "May your watch time plummet gracefully",
    "Gone but not forgotten. Okay maybe a little forgotten",
    "Sorry, I'm over my subscription budget",
    "Swiping left on your entire catalog",
    "You were my 3am doom-scroll, and I'm getting help now",
    "I've outgrown you like a pair of Crocs",
    "SMASH that unsubscribe button amirite",
    "Per my last unsubscription",
    "New year, new me. Fewer YouTubers",
    "This is your performance review. You're fired",
    "I'm taking my eyeballs elsewhere",
    "You've been Marie Kondo'd. You sparked no joy",
    "Don't call it a comeback, because I'm not coming back",
    "Roses are red, violets are blue, I'm unsubscribing from you",
    "You're going to my 'previously watched' graveyard",
    "May the algorithm forget we ever met",
    "I'd say 'see you in my recommendations' but let's not",
    "Adding you to my cringe compilation",
    "Ctrl+Z on that subscribe decision",
    "I liked you before you were mid",
    "Your thumbnails lied to me for the last time",
    "Return to sender. Subscription rejected",
    "And just like that... poof",
    "Last one out, turn off the ring light"
  ];

  let count = 0;

  for (const item of items) {
    const nameEl = item.querySelector('#channel-title, #text, yt-formatted-string#text');
    const channelName = nameEl?.textContent?.trim() || 'Unknown Channel';
    const subCountEl = item.querySelector('#subscribers, #video-count');
    const subCount = subCountEl?.textContent?.trim() || '';

    const btn = item.querySelector('ytd-subscribe-button-renderer button');
    if (btn) {
      btn.click();
      await new Promise(r => setTimeout(r, 500));

      const confirm = document.querySelector('yt-confirm-dialog-renderer #confirm-button button');
      if (confirm) confirm.click();
      await new Promise(r => setTimeout(r, 800));

      count++;
      const farewell = farewells[(count - 1) % farewells.length];
      const info = subCount ? ` (${subCount})` : '';
      console.log(`${count}. %c${channelName}${info}%c — ${farewell}`,
        'color: cyan; font-weight: bold', 'color: yellow');
    }
  }

  console.log(`\n🔥 Unsubscribed from ${count} channels.`);
  console.log(`🧹 Your feed is now an empty void, just like your recommendations.`);
  console.log(`💀 Refresh to confirm the carnage.`);
}

unsubAll();