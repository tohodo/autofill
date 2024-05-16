## 🎊 Lightning Autofill v12.0.0 released 🎉 (May 15, 2024)

After 118 commits over three months, countless improvements, refactoring and bug fixes, Lightning Autofill version 12 has finally been released! It may not look like it on the outside, but underneath this is the biggest release since version 1.0. Let's go over the major changes:

- **Migrated to [Manifest V3 (MV3)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3).** MV2 extensions will be deprecated this June, so this move was unavoidable. Upgrading to MV3 was a royal pain, but it also makes extensions more secure and future-proof. Unfortunately, Mozilla's MV3 implementation is too different from Google's, so Firefox continues to exist as an MV2 add-on until it reaches full MV3 feature parity with Chrome/Edge extensions.
- **Switched to freemium model.** I anticipate this to be an unpopular change after 14 years of being completely free, but it was a necessary change for the continued survival of Lightning Autofill. I've had opportunities to sell this extension in the past, but I read about what can happen to users after an extension is sold ([exhibit A](https://www.bleepingcomputer.com/news/security/the-great-suspender-chrome-extensions-fall-from-grace/), [exhibit B](https://github.com/extesy/hoverzoom/discussions/670), [exhibit C](https://arstechnica.com/information-technology/2014/01/malware-vendors-buy-chrome-extensions-to-send-adware-filled-updates/)), and didn't want to put you guys at risk, so here we are.
- **Implemented cloud sync.** You can now manage your autofill rules in Google Sheets, which opens up a world of possibilities. I've been meaning to add this feature for years since I manage so much data in Sheets already, and I also automate a lot of workflows with [Google Apps Script](https://www.google.com/script/start/). Unfortunately, there's no way for Google Sheets to communicate with extensions right now, so when you make an edit in Sheets you have to click on the Restore button from Lightning Autofill Options to pull in the changes. Changes in Lightning Autofill are automatically synced to Sheets though.
- **Added support for `autocomplete` attribute.** This was a small change with big implications. Since [this attribute](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete) has become so prevalent, you now have the capability to create more reliable global address rules. In fact, Lightning Autofill v12 comes with sample address rules that you can modify for your own needs. For existing users who are updating to v12, you can import the address rules using remote import from this URL: https://pastebin.com/raw/Rk42q0cv (NOTE: remember to choose the "Append" option or these rules will overwrite your existing rules).
- You can see the full list of changes in the [changelog](https://www.tohodo.com/autofill/changelog.txt).

Since so much of the code was rewritten, and the extension migrated from MV2 to MV3, I expect the review process to be longer than usual, possibly over a week, so hang on tight. I'll post another announcement when it's published and starts rolling out to Chrome, Edge, and Firefox.

### How to activate your plan

Once Lightning Autofill has been updated to v12, you will see a new **Subscription** section in **Options → Settings**:

![image](https://github.com/tohodo/autofill/assets/4110567/8762fecb-fd7f-4c10-a72b-b52e9588d2d0)

This is where you enter the invoice number to activate your subscription plan.

### Bye bye, Wallu

After monitoring the `#ask-ai` channel on [Discord](https://discord.gg/NY6xxsQBRD) for awhile, it's clear that the CommunityOne bot gives consistently better quality responses than Wallu AI. Hence, I will give Wallu early retirement and keep only CommunityOne in the channel. Having two bots answer at the same time can be confusing as well, so this is a good change.

### Hello, LightningAutofillPro

Even though we have the `#ask-ai` channel, the best helpdesk chatbot is actually the one I trained on Poe: [LightningAutofillPro](https://poe.com/LightningAutofillPro). I recommend everyone consult with LightningAutofillPro for the following reasons:

- It's private. Everybody can see what you ask in the `#ask-ai` channel, so if you want to ask about something personal or confidential, then ask LightningAutofillPro.
- It's based on a newer, better LLM. CommunityOne is powered by [GPT-3.5](https://openai.com/index/chatgpt/). LightningAutofillPro is powered by [Claude-3](https://www.anthropic.com/news/claude-3-family), which is generally better across the board.
- Your chat sessions are saved. Once you register for a free account, you will have a history of everything that you ever asked LightningAutofillPro.
- You can bookmark it. No need to be logged into Discord.

---

## Introducing LightningAutofillPro Poe bot (May 11, 2024)

I just created my first bot on Poe, and after lots of testing it seems to provide [superior responses](https://poe.com/s/BPEpOlsTWvmfEcn1FjY9) to both CommunityOne and Wallu AI Discord bots. LightningAutofillPro is based on [Claude-3](https://www.anthropic.com/news/claude-3-family) whereas CommunityOne and Wallu are based on the older [ChatGPT](https://openai.com/index/chatgpt/), so I'm not surprised. Please check it out for yourself:

**https://poe.com/LightningAutofillPro**

Also, good news about Lightning Autofill v12: I think I have ironed out all the bugs and should be able to release it by the end of this weekend! 🥳 It's a bit delayed from my own initial timeline, but in the grand scheme of things it's still very ahead of schedule considering the MV3 deadline is June.

---

## Wrapping things up (Apr 27, 2024)

I'm just about ready to publish the new version (v12). As the icing on the cake, I've decided to integrate one big feature for subscribers: the ability to manage their rules from Google Sheets! Since Sheets cannot communicate with browser extensions, you will still have to manually click the **Restore** button to retrieve the latest data from Sheets, but that's still night & day better than the current experience (export CSV, manipulate data in Excel/Sheets, import back into Lightning Autofill).

This is a pretty big feature to add at the last minute, so I may not be able to release by the end of the month, but we'll see. 🤞

---

## Wallu vs. CommunityOne (Apr 15, 2024)

Yesterday, I discovered another promising ChatGPT-powered helpdesk bot. I've spent most of today comparing `@Wallu - AI` and `@CommunityOne` after training them on the exact same Lightning Autofill documentation. Often I found Wallu's responses more technical and detailed (for example, it sometimes provided code samples), but I felt CommunityOne's responses had more personality. CommunityOne can also reply to more general questions, which makes it more engaging. You can judge for yourself by going to `#⁠ask-ai` and ask way -- both bots will respond. Eventually you guys can help me choose between the two of them. 😁

---

## Introducing ⁠#ask-ai channel (Apr 13, 2024)

I've just added an experimental customer support AI chatbot called Wallu to help answer questions related to Lightning Autofill. I'm currently training it on [Online Help](https://www.tohodo.com/autofill/help) as well as a few of the channels on the [Discord server](https://discord.gg/NY6xxsQBRD), so hopefully it will get better over time.

To chat with the bot, head over to the `#⁠ask-ai` channel under Support. Try asking it simple questions like "Can I make changes directly in Google Sheets?".

---

## Firefox blues (Apr 12, 2024)

The most challenging part of the v12 update so far has been trying to get Firefox to NOT break using the same codebase (I do not have the resources to manage two codebases). Starting with MV3 Firefox and Chrome/Edge have diverged in terms of what extension APIs they support, and even what features within the same API that they implement. This has made extensions development very difficult, and I do not rule out ending support for Firefox down the road.

---

## Lightning Autofill v12 update (Apr 11, 2024)

Hi guys, I'm putting the finishing touches on the major version 12 release. The OAuth app (for the cloud sync feature) is currently going through Google's verification process, which can take over a week. After that, Lightning Autofill will have to go through the extensions review process for Chrome, Edge, and Firefox before the update can get published. If everything goes as planned, expect the big v12 to roll out by the end of this month.

**In the meantime, I recommend you back up all your data to a CSV file using the Import/Export tab.**

---

## Google Groups is retired -- moving to Discord (Apr 8, 2024)

Hi all, I got too tired of not being able to paste screenshots into [Google Groups](https://groups.google.com/g/chrome-autofill) (among many other annoyances over the years), so I will no longer be maintaining this forum. It will remain online as a reference only.

**Please join the new Discord server for support issues moving forward:**

[https://discord.gg/NY6xxsQBRD](https://discord.gg/NY6xxsQBRD)

Note that it will be quiet for the next week or so as I am super busy trying to get Lightning Autofill v12 ready for the big release.

---

## HAPPY NEW YEAR! 🥳 (Feb 10, 2024)

Happy belated New Year everyone (well, I guess it's not belated if we're using the lunar calendar). It has been quite a busy start to the new year for me, with lots of important developments. Let's jump right in...

### Official MV3 timeline

Google has published the latest [Manifest V3 timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3), and it seems that **June 2024** will be the final deadline. This means that Autofill will need to be updated to MV3 before June to remain in the Chrome Store.

Since MV3 extensions cannot evaluate JavaScript code strings, users who have built up a large collection of JS rules might be getting a little nervous. However, fear not, my friends -- I have found a solution that will allow you to keep your JavaScript rules! See the next section for more details.

### Automate → Autofill v12

Instead of starting from zero, I have decided to merge Automate into Autofill starting with the next major release, Autofill version 12. This release will have a bunch of exciting changes:

- Update to Manifest V3 (MV3) for future-proofing
- New MV3-compliant JavaScript rules (no need to recreate rules)
- Rebranding from generic Autofill to Lightning Autofill
- New simplified logo
- New cloud sync to Google Sheets
- Rename "Other Stuff" to "Settings" (finally)
- No more banners! (see below)

### New monetization strategy

As many of you know, I left my daytime job to focus on Autofill about one year ago. After considering many different types of monetization options, I settled on the Wikipedia model where Autofill shows a nag screen to encourage users to support the development of Autofill by subscribing. This was completely voluntary. After trying the nag screen for a year, I have come to realize that it isn't working -- the subscriptions barely pay for my rent, and I'm still eating into my savings account every month 😟. Starting with Autofill v12 (Lightning Autofill), I will implement a new three-tier monetization strategy as outlined below:

- Free plan: up to 100 autofills a day (enough for most people)
- Plus plan - $4.99/mo: unlimited autofills a day + cloud sync
- Pro plan - $9.99/mo: unlimited autofills a day + cloud sync + JS rules

As promised, current subscribers will be grandfathered in as follows:

- Monthly subscribers will be converted to the Pro plan at their current $4.99/mo rate (a 50% discount)
- Yearly subscribers will be converted to the Free plan and emailed a 25% discount code off the Plus or Pro plan

After more than 12 years of giving Autofill away for free, I think finally charging for it is only fair. I've considered selling Autofill more than once over the years, but after reading about what happened to [The Great Suspender](https://www.bleepingcomputer.com/news/security/the-great-suspender-chrome-extensions-fall-from-grace/), [Hover Zoom](https://github.com/extesy/hoverzoom/discussions/670), and [many other extensions](https://arstechnica.com/information-technology/2014/01/malware-vendors-buy-chrome-extensions-to-send-adware-filled-updates/), I don't think I would be able to sleep at night knowing there's even a 1% chance that Autofill would one day be associated with malware.

I'm expecting this change will not be popular, and as a result, there will be a flood of negative reviews when v12 is published. If you do find Lightning Autofill useful, then I would greatly appreciate it if you spared a minute to [leave a positive review](https://chrome.google.com/webstore/detail/autofill/nlmmgnhgdeffjkdckmikfpnddkbbfkkk/reviews) to balance out all the negative reviews. THANK YOU 🙏

---

## Autofill v11.8.0 released (Sep 21, 2023)

Here are all of the changes since v11.7.0:

- A new and improved Portuguese translation (credit to Frederico Valério 👏)
- The "commands" permission was removed as it was triggering security warnings and wasn't needed
- Fixed errors related to the experimental [fenced frame](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) feature
- Fixed issue generating rules for some `<select>` fields, which cascaded into other errors

Version 11.8.0 should start rolling out to all three browsers (Chrome, Edge, Firefox) in the coming days.

### 🌟Autofill Stars🌟

Presenting our newest Autofill Star: Dylan from Australia! 🎆 Dylan, take it from here...

> I've made Autofill a part of my online shopping routine, especially on websites like Supreme. When it comes to highly sought-after items like the Supreme box logo, being fast is crucial, and Autofill has become my secret weapon. It pairs seamlessly with my custom Chrome extension, the Supreme Size Selector (you can find it on the Chrome Web Store for just USD$3). This extension simplifies the process, allowing me to quickly get those in-demand pieces, including the iconic Supreme box logo. It doesn't just streamline checkout but also offers a cost-effective alternative to pricy Supreme bots. My reason for creating this extension was simple: to help fellow users get the items they want without having to spend a lot on bots that they might only use occasionally.
>
> Feel free to checkout Supreme Size Selector:
>
> https://chrome.google.com/webstore/detail/supreme-size-selector-%2B-a/mialjgeooaepealoglgacdjicchfipjd
>
> I also have a version for Palace as well:
>
> https://chrome.google.com/webstore/detail/palace-size-selector-%2B-at/agmnobgmdcadclfblcgccgjojdbkhncl

Dylan, you're an Autofill superstar!

---

## Autofill v11.7.0 released (Jul 2, 2023)

This version introduces a global hotkey to execute all profiles. Before you could assign a hotkey to individual profiles, but you'll quickly run out of hotkeys to assign if you have a ton of profiles. Instead of setting profile hotkeys, you can opt to assign one global hotkey that will execute all rules in all profiles that match the site filter (even if "Autofill active profile only" option is checked). This works great when you're in manual mode. This new global hotkey can be set by clicking "Global Hotkeys".

![image](https://github.com/tohodo/autofill/assets/4110567/9084cd9f-9b93-4b31-9e3d-086d2b63c9eb)

### 🌟Autofill Stars🌟

Today I would like to introduce our next Autofill Star: Rich from USA. In Rich's own words:

> I send 250,000 to 1 million or more emails per day promoting 3-5 affiliate programs. Would not be possible without Autofill. Every new Autofill profile (I have a template) contains all the fields necessary for all the safelists and SuperSolos I use. When I set up my profile for a promotion I populate all fields including 5-6 subject lines, banner URLs, HTML and Text Ad Copy. When I start to promote on a safelist, it is simply login, add my solo or credit mail, select the profile, send. Rinse and repeat.
>
> I do primarily email marketing but have over 100 videos on my YouTube channel ([@RichMoyer1953](https://www.youtube.com/channel/UCpXWfPB0wwfKNF9Pci8OZoQ)).

Rich, you're definitely an Autofill power user!

---

## Autofill Signin (Jun 14, 2023)

I'm getting more and more cases of the welcome email bouncing or people complaining that they never received the subscription key, which suggests that people are making typos when entering their email address. This is a security risk -- I don't want invoices and welcome emails containing the subsription key going to the wrong email account by accident.

Since Stripe doesn't validate email addresses during checkout, I will be introducing an Autofill signin form to ensure that subscription keys always go to the right email addresses. This means that the Stripe Checkout buttons will only be available once you validate your email address and sign in. This should offer more peace of mind for subscribers. 😌

---

## Stripe Checkout up again (Jun 6, 2023)

The Stripe Checkout links are working again. Yay! Once again, sorry for the interruption.

---

## Stripe Checkout down (Jun 5, 2023)

Stripe has disabled my subscription checkout page because of some fraudulent activities. I'm in the process of resolving this situation, which will require an extra step to authenticate users before sending them to the checkout page.

Apologies for the inconvenience.

---

## Autofill v11.5.1 released (May 31, 2023)

This update adds a feature that a number of people have been asking for over the years: the ability to remove attributes from problematic forms. Now you can accomplish this by adding a comma-separated list of attributes to the new "Attributes to remove" field in the Other Stuff tab. Prime candidates for this field include `autocomplete` (often used to disable the browser's built-in autofill) and `readonly` (prevents Autofill from filling out the field).

You don't need to create any rules for the attributes to be removed. As long as the web page's URL satisfies any site filter you've defined for the active profile, the attributes will be removed automatically on page load if this option is enabled. Note that attributes will only be removed for form fields.

---

## 🌟Autofill Stars🌟 (May 16, 2023)

Our Autofill Star for this month is Abdelrahman from Egypt. Abdelrahman uses Autofill to help complete his tasks at [work](https://evisaforms.state.gov/acs/default.asp).

Abdelrahman, keep up your improved productivity!

---

## 🌟Autofill Stars🌟 (Apr 23, 2023)

Today I'd like to shine the spotlight on Daniel @ [OnShoreIt](https://onshoreit.net/) from USA. Daniel uses Autofill to fill out Nagios forms and ATT tickets. 

Daniel, you're an Autofill Star!

---

## Autofill v11.4.5 released (Mar 29, 2023)

Autofill v11.4.5 fixes various bugs related to text spinner and sequential list variables (thank you Matthew for reporting), as well as a minor profile deletion bug. More importantly, it introduces an often requested feature:

![screenshot](https://user-images.githubusercontent.com/4110567/228737867-1f556c74-eba0-425d-b3bd-a06cd19930a9.png)

With this option checked, the infobar will only show profiles whose site filter matches the current web page's URL or document title. This will make selecting profiles a lot easier for people with a ton of profiles.

---

## First Autofill tutorial (Mar 23, 2023)

Recently, I helped a user with autofilling a tricky AJAX form that stumped Autofill's generated rules. I felt the solution for this form could be applied to other forms as well, so I created my first Autofill tutorial around this. I can't believe after 12 years this is my first tutorial, but better late than never ^^.

[Automating AJAX Forms »](https://dev.to/tohodo/automating-ajax-forms-2ph9)

---

## Automate first test (Mar 5, 2023)

This is the first ever proof-of-concept demo of Automate:

[https://www.loom.com/share/1e328d19073a40fb944f78076507d575](https://www.loom.com/share/1e328d19073a40fb944f78076507d575)

I'm really happy with the results. In this video the following actions were automated:

1. Navigate to Amazon.
2. Search for "ps5" after the page loads.
3. Wait for results to load, then take a scrolling screenshot.
4. Insert the screenshot image at the bottom of the page.

Even at this early stage, this video shows a level of automation that even Autofill can't do. Now imagine doing all this using simple commands from your own Google Sheets. All that power at your fingertips, and this is just the beginning. Down the road, in addition to taking screenshots, you will be able to scrape the results and send them to Sheets, open multiple tabs and autofill all of them, and so much more. Automate is going to be awesome!

### 🌟Autofill Stars🌟

Today I'd like to shine the spotlight on Don from USA. In Don's own words:

> I have been using Autofill for years to complete my required online form documentation for work in healthcare. I have amassed 18 profiles with over 300 rules, 30 advanced rules, and almost 200 variables that I mostly activate with keyboard shortcuts. Autofill has saved me hundreds of hours. I also use Autofill for pop-up tasks as they come to make filling forms and clicking buttons a breeze. My advice for any newer Autofill users is to learn variables and JavaScript with advanced rules to add delay for clicking -- this will open a whole new world for you!! Also, if you use multiple machines, use Pastebin to save your rules. It is free!

Don, you're an Autofill Star!

---

## Autofill Stars (Feb 18, 2023)

It has been about two weeks since I launched my Autofill fundraising campaign, and it has been a humbling experience. Honestly, I thought only a handful of power users would subscribe since I have been giving Autofill away for free for so long, but the number of new subscribers I'm getting every day continues to touch my heart. 🥰

As a way of paying it forward, I present to you the inaugural 🌟**Autofill Stars**🌟 program. About 1-2 times a month I will showcase one Autofill subscriber or influencer right here in the News tab. It's a great platform for them to share with all of us how they use Autofill, which could be beneficial to everyone. Autofill Stars are allowed to promote their own service or brand to Autofill's 800k users, so if anyone has something they want to announce then please [subscribe](https://www.tohodo.com/autofill/help.html#donate-sub)!

The first Autofill Star I'd like to shine the spotlight on is **Ronald** from USA. Not only was he one of the first subscribers, but he also donated a generous $600 to Autofill. Thank YOU, Ronald! This is how Ronald has been using Autofill:

> Autofill saves me tons of time in my job. I gather data used in performance evaluation used to determine system productivity. I start with what I call a set of "baseline autofills" to enter data on sets of standardized forms. My evaluations are then completed by adding essential bits of customized information to create unique reports.

### How to get rid of the banner

The instructions are in the order confirmation email after you subscribe, but it's worth repeating here since I've been getting a lot of questions about this:

1. After you subscribe, you should be getting an order confirmation email from Stripe. If you don't see it, look in your Spam folder. Make a note of the invoice number inside this email.
2. Go to Autofill Options / Other Stuff tab and enter the invoice number from step 1 into the "Invoice number" field under the Subscription section.
3. Click on the "Verify Subscription" button. After a new seconds, the button should change to "Subscribed" to verify that you have been registered successfully and should no longer see the fundraiser banners.

### Please help spread the word ^_^

One small way that you can help that doesn't cost anything is if you have any friends or colleagues that you noticed are doing repetitive work in the browser (like filling out long tedious forms), then you can introduce them to Autofill. In the latest version I have added Facebook and Twitter icons in the footer to help you share Autofill with others in one click. Please click on these icons as a free way of showing support.

### Automate Community

I have finally set up the Automate Community. It's going to be a premium invite-only support community for Autofill subscribers. I will send out an invite to existing subscribers shortly. All future subscribers will automatically receive in invite to join this new community. It will be quiet in there for awhile as I'm still in the early design process of building the Automate MV3 extension.

~~[https://community.automateextension.com/](https://community.automateextension.com/)~~

UPDATE: PeerBoard, the service that powers the community site above, will shut down in June 2023. I have set up a Discord server to host the new community. You can join using the link below.

[https://discord.gg/ndJHZk6aN2](https://discord.gg/ndJHZk6aN2)

---

## Introducing Autofill v11 (Feb 14, 2023)

Happy Valentine's Day everyone! 💘

I was wrong when I said there will be no more updates to Autofill--a major update to v11 will be rolling out soon. Please don't fret, this won't be a big headache like the v10 release because most of the changes do not affect the extension's core functionality. I actually didn't plan on making amymore changes to Autofill, but my hand was forced by Mozilla. To make a long story short, last week Mozilla notified me that they were going to unlist Autofill within 10 days because the tools I used to build the extension were closed source and they required open source software in order to review the source code for publication. This must've been a new policy because the Firefox version had been around for years without any issues. Since the tools I used to build Autofill were over 10 years old, closed source, and no longer supported, it was a good time to overhaul my entire development environment to prepare for the big MV3 changes to come. Hence, I replaced all my ancient build tools with modern open source equivalents.

Since I had to refactor most of the code to make it work well with the new build tools, I figured I might as well make some improvements to Autofill. Aside from modernizing the tooling, here are some of the bigger changes in store for v11:

- **Merged Chrome/Edge and Firefox branches.** The Firefox version had always existed in a separate development branch, so anytime I made changes to Autofill I would have had to do it in two places. Now that Autofill versions for Chrome, Edge, and Firefox are all built from the same source code in the same branch, the maintenance overhead will be significantly reduced.

- **Improved subscription validation.** Before I was using the email address to validate subscriptions. Some users were not comfortable with this as it would mean their personal information would be stored in Autofill, and also transmitted over the internet every time Autofill communicates with the backend API to validate the subscription. This is obviously not good for privacy & security, so I've replaced the email address with the invoice number. Email addresses for existing subscribers should be migrated to invoice numbers automatically in v11, but if it doesn't then you can grab the invoice number from the order confirmation email. I've never monetized anything before, so this was a learning experience.
 
Here are some other minor tweaks and quality of life improvements to Autofill:

- **Added Facebook and Twitter share icons.** If you find Autofill useful, then I've added these icons in the footer so you can spread the word about Autofill with just one click.

  ![social share icons](https://i.imgur.com/kfBCZEI.png)

- **Added lightbox loading screen.** Sometimes it can take seconds to retrieve the changelog remotely when you click on the version number link (top right in Options), which can make it seem like Autofill is hanging. The loading screen will let you know that it's still retrieving data.

- **Removed squigglies in Form Fields.** These distracting wavy red lines below the text are not applicable to Autofill rules, so they've been banished in v11.

  ![squigglies](https://i.imgur.com/zj3KOg9.png)

- **Updated developer notice.** The fundraiser banner was too red, so I toned it down a notch. The buttons look prettier also.

- **Fixed "what's new" sometimes showing old version.** There was a bug where clicking on the version number link would show the changelog for a different version.

- **Fixed changelog parsing issue.** HTML code in the changelog was not escaped (i.e., `<...>` replaced with `&lt;...&gt;`), which could break the changelog lightbox overlay.

---

## The future of Autofill (Feb 2, 2023)

As Manifest V3 (MV3) is looming ever closer, I am left with three options:

1. Easy path - let Autofill languish and die a slow death until MV2 extensions are prohibited ([sometime in 2024](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/)).
2. Lazy path - retrofit Autofill to be MV3 compliant, but that would mean it will lose JavaScript rules and variables. This is not acceptable to many users.
3. Hard path - Rewrite Autofill from scratch as an MV3 extension that somehow can still do the automation work of JavaScript rules.

### Automate - the MV3 way forward

For my 2023 New Year's resolution I have chosen to take the hard path. To have a chance of pulling this off before 2024, I quit my day job so that I can focus full-time on building the MV3 successor to Autofill: [Automate](https://automateextension.com/). Ever since I added JavaScript rules to Autofill, I always felt the name "Autofill" was misleading because it could do so much more than simply autofill forms. The new name better reflects this extension's true capabilities. Automate will be a brand new extension built on top of the latest web technologies.

### Please help me so I can help YOU 🙏

In order to support myself, I will borrow Wikipedia's playbook and start displaying fundraiser banners in the next release of Autofill. Sorry guys, this is the only way I can think of to raise money without putting up a paywall. It'll be a little naggy, but at least you'll still be able to use Autofill indefinitely without paying a cent. Only moderate to heavy users of Autofill will see the fundraiser banners. They will present you with two subscription plans:

1. **$4.99 / month** - this is catered to corporate users who can expense it, but anyone is free to select this plan to show their support.
2. ~~$16.99~~ **$8.99 / year** - this is for casual users who rely on Autofill for personal stuff. $8.99 per year is a promotional price until Automate is released, at which point it will go back to $16.99 per year. All subscribers on the $8.99 per year plan will get to keep this rate forever, so it's a great deal if you act early.

After 12 years of pouring my heart & soul into Autofill and giving it away for free, I humbly ask for a little financial help to keep this dream to build the ultimate automation tool alive. However, if you are unable to contribute, I understand and you can still continue to use Autofill by clicking "I will use Autofill one more time." Your support means everything to me.

### Subscription benefits

To make it more worthwhile for subscribers, in addition to getting rid of the banners, they will get access to a [premium support community](https://discord.gg/ndJHZk6aN2) where they will get to help me shape Automate every step of the way. This is where I will post preview versions for private "early access" testing. The biggest reason to subscribe now is that you will get discount promo codes for Automate's premium tiers when it is released (25% off for yearly subscribers and 50% for monthly subscribers). Remember that Autofill will no longer have JavaScript rules when it is migrated to MV3, something that Automate will be able to do using an automation API. Please [let me know](https://forms.gle/uWnuAbPaj3Wsrtfi8) if you want something else added to Automate. Autofill will remain "as is"--I will no longer work on it or support it as all my time will be dedicated to creating Automate. The Automate MV3 extension is the future.

### I hope it doesn't end like this, but...

If this little monetization experiment doesn't work out after a couple months (i.e., I don't have enough subscribers to support myself), then I will most likely sell Autofill. Once Autofill is sold, it will be out of my control, so I cannot guarantee that it will continue to work the way it does today under the new owner, or whether they will migrate it to MV3 down the road.

That's it for now. Stay tuned for more on Automate in future posts.

---

## Manifest V3 (Dec 2, 2022)

Manifest Version 3 (MV3) is upon us. This might be the biggest change to browser extensions since the invention of extensions. You can read more about it here:

- [MV3 info for Google Chrome](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [MV3 info for Mozilla Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/)
- [MV3 info for Microsoft Edge](https://learn.microsoft.com/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)

### What does it mean for Autofill?

Since the use of `eval()` will no longer be allowed in MV3 for security reasons, the following things will no longer work in Autofill when it is updated to be MV3 compliant:

1. JavaScript rules
2. Variables that begin with `javascript:`

Autofill will remain on MV2 for as long as the browser companies allow it (no official sunsetting schedules have been published yet, but I'm guessing sometime in 2024). The Autofill codebase is over 10 years old, so there's a chance that Autofill will be rewritten from scratch for easier automation without relying on `eval()` using the latest technologies like JavaScript ES6 [modules](https://blog.webdevsimplified.com/2021-11/es6-modules/) and ES8 [async/await](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a). Any updates on this matter will be posted in this space.
