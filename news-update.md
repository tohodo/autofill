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

For my 2023 New Year's resolution I have chosen to take the hard path. To have a chance of pulling this off before 2024, I quit my day job so that I can focus full-time on building the MV3 successor to Autofill: **Automate**. Ever since I added JavaScript rules to Autofill, I always felt the name "Autofill" was misleading because it could do so much more than simply autofill forms. The new name better reflects this extension's true capabilities. Automate will be a brand new extension built on top of the latest web technologies.

### Please help me so I can help YOU 🙏

In order to support myself, I will borrow Wikipedia's playbook and start displaying fundraiser banners in the next release of Autofill. Sorry guys, this is the only way I can think of to raise money without putting up a paywall. It'll be a little naggy, but at least you'll still be able to use Autofill indefinitely without paying a cent. Only moderate to heavy users of Autofill will see the fundraiser banners. They will present you with two subscription plans:

1. **$4.99 / month** - this is catered to corporate users who can expense it, but anyone is free to select this plan to show their support.
2. ~~$16.99~~ **$8.99 / year** - this is for casual users who rely on Autofill for personal stuff. $8.99 per year is a promotional price until Automate is released, at which point it will go back to $16.99 per year. All subscribers on the $8.99 per year plan will get to keep this rate forever, so it's a great deal if you act early.

After 12 years of pouring my heart & soul into Autofill and giving it away for free, I humbly ask for a little financial help to keep this dream to build the ultimate automation tool alive. However, if you are unable to contribute, I understand and you can still continue to use Autofill by clicking "I will use Autofill one more time." Your support means everything to me.

### Subscription perks

To make it more worthwhile for subscribers, in addition to getting rid of the banners, they will get access to a premium support community where they will get to help me shape Automate every step of the way. This is where I will post preview versions for private "early access" testing. The biggest reason to subscribe now is that you will get access to Automate when it is released at a 47% discount. Remember that Autofill will no longer have JavaScript rules when it is migrated to MV3, something that Automate will be able to do using an automation API. Please [let me know](https://forms.gle/uWnuAbPaj3Wsrtfi8) if you want something else added to Automate. Autofill will remain "as is"--I will no longer work on it or support it as all my time will be dedicated to creating Automate. The Automate MV3 extension is the future.

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
