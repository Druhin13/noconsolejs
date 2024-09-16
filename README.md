
# noconsolejs


## Tired of people judging you for leaving *console.logs* in production?

Yeah, me too.


## Here's why you absolutely need this

Because your code is embarrassing. There, I said it. I mean, using console.log to debug is fine when it’s just you and your code in the privacy of your local environment. But once it’s out there in the wild, it’s like leaving the house without your pants on. People *will* notice, and they *will* judge you. So save yourself the awkwardness and let **noconsolejs** sweep those logs under the rug, where they belong.

Most of us (*aka everyone*) use `console.log` like it’s the answer to all of life’s problems. But guess what? It’s not. It's more like a 'Post-It' note you slapped on your code because you couldn't figure out what went wrong.

Now, do you really want your users — or worse, your team — seeing that? Yeah, didn’t think so.


## Features (ahem, ahem)

- **Zero dependencies**: Because we’re all trying to live simpler lives and avoid another `node_modules` folder the size of a small planet. Plus, I didn’t `need` to add any, so I didn’t. You're welcome.
- **Auto-magically erases your console blunders like a "guilty" browser tab you close when someone walks by**: `console.log`, `console.warn`, `console.error`, `console.info`, `console.debug` — and whatever else you thought was helping — gone; just like your dignity after debugging for 6 hours straight.
- **Works anywhere**: Browser, Node.js, that one ancient server you forgot about, or even in the depths of outer space (because if JavaScript is running there, it’s probably doing something weird — but at least *noconsolejs* can hide the console statements.


## Installation

### For the Fancy Node.js Devs

You’re already running 20+ npm commands a day, what’s with one more anyway? Just run:
```js
  npm install noconsolejs
```

```js
const disableConsole = require('noconsolejs');
disableConsole();
```

Boom. No more consoles. It’s like they never happened. No one will ever know you needed 39 logs to figure out how promises work.


### For my fellow ~Noobies~ Browser Folks
Want this in the browser? You got it. Sure thing! Just drop this `<script>` tag into your HTML, ideally in the `<head>`. (You know, like putting your brain in the driver’s seat before making bad life choices. Same idea — keep things in the right place.)
```js
<script src="https://cdn.jsdelivr.net/gh/Druhin13/noconsolejs@main/index.min.js"></script>
```




## Usage

### Node.js Example
```js
const disableConsole = require('noconsolejs');

// disabling all the bad decisions
disableConsole();

console.log("This? Never again.");
console.warn("No one will ever see your shame.");
```

### Browser Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>noconsolejs Example</title>
    <!-- no more console shaming -->
    <script src="https://cdn.jsdelivr.net/gh/Druhin13/noconsolejs@main/index.min.js"></script>
</head>
<body>
    <script>
        console.log("You'll never see this.");
        console.error("Or this.");
    </script>
</body>
</html>
```


## Will this Fix your Code?

Haha, **No**. Absolutely not. Your code is still a hot mess. But at least people won’t be able to tell from the console. It’s like sweeping everything under the rug, except no one trips over it. You’ll still need to actually fix your code at some point, but with *noconsolejs*, you can take your time. No one’s looking — for now, at least.


## License (Blah Blah.. the Legal Stuff)
Yeah, yeah, it’s MIT. Do whatever you want with it. Just don't blame me when your app breaks because you relied on console.log to do all your debugging.