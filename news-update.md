## Manifest V3

Manifest Version 3 (MV3) is upon us. This might be the biggest change to browser extensions since the invention of extensions. You can read more about it here:

- [MV3 info for Google Chrome](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [MV3 info for Mozilla Firefox](https://blog.mozilla.org/addons/2022/10/31/begin-your-mv3-migration-by-implementing-new-features-today/)
- [MV3 info for Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)

#### What does it mean for Autofill?

Since the use of `eval()` will no longer be allowed in MV3, the following things will no longer work in Autofill when it is updated to be MV3 compliant:

1. JavaScript rules
2. Variables that begin with `javascript:`

Autofill will remain on MV2 for as long as the browser companies allow it (see their respective migration schedules in the links above). The Autofill codebase is over 10 years old, so there's a chance that Autofill will be rewritten from scratch using the latest technologies like JavaScript ES6 [modules](https://blog.webdevsimplified.com/2021-11/es6-modules/) and ES8 [async/await](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a), possibly using a modern framework such as [Svelte](https://kit.svelte.dev/). Any updates on this subject will be posted in this space.
