# TwitchTV Bot Banner

The site is deployed at: <a href='https://ttv-bot-banner.netlify.app/' target='_blank'>https://ttv-bot-banner.netlify.app/</a>

This web application can be used to generate a list of Twitch viewer bots. You can use this as a banlist to clean up your Twitch chatroom. Why? Well, besides being flooding your chat viewer list and making it difficult to read, some moderation bots have features that can select a "chatter" at random, and having the option to choose a non-human chat member unintentionally may possibly be an undesirable experience.

Many Twitch bots are widely used, which means they will show up in this list. It is important to whitelist them to avoid accidentally including bots that you don't actually want to ban. A reasonably robust whitelist has been provided, and you may choose to select all from it for convenience. Otherwise, you can manually check approved bots to filter from the banlist.

<img src='https://github.com/jordbort/next-bot-banner/assets/115664302/f9f60c19-30cd-4590-ad00-87607507e1b2' alt='Main checklist interface' />

---

If you have a known bot to exclude from the banlist that isn't included in the provided whitelist, you can enter it into the text field.

<img src='https://github.com/jordbort/next-bot-banner/assets/115664302/4736a115-5f2e-4c45-90ef-e6a8e0adb3f5' alt='Input custom bot name' />

---

Finally, you can choose to filter out bots that have not been active recently. Generally, the list of all Twitch viewer bots is well over 6,000 usernames. However, returning only recently-active bots keeps the list to around 150 usernames. If you routinely use this tool to keep your viewer list clean, then this can be helpful for keeping the banlist short and relevant.

<img src='https://github.com/jordbort/next-bot-banner/assets/115664302/a21e7c4f-e8bf-4f2e-8be2-09eff661ab12' alt='Checkbox to filter for only recently-active bots' />

---

I personally use a macro to feed my banlist into the Twitch chatbox, as in "/ban (username) viewer bot", but I have provided further explanation on possible uses on the [About page](https://ttv-bot-banner.netlify.app/about). I hope you find this tool useful!
