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
