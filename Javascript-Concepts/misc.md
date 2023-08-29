## Miscellaneous Javascript Facts:

**Most of JS functions/APIs we use aren't even Javascript**
Yes many of the functions/APIs we use in our JS code like, setTimeout, console logs, document.getElementById, aren't the part of js, they are simply provided by our browser in our global window and document object.
The reasom why we can use them like ```setTimeout(() => /*something*/, 3000)``` instead of ```window.setTimeout(() => /*something*/, 3000)``` is, window is a global object and its keys are for every block of code we write.

Here are some of the functions that we use, that are provided by window or browser:
### Document Object Model (DOM) Manipulation:

- `document.getElementById()`
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.createElement()`
- `document.createTextNode()`
- `document.appendChild()`
- `document.removeChild()`
- `document.setAttribute()`
- `document.addEventListener()`

### Window and Frame Control:

- `window.open()`
- `window.close()`
- `window.focus()`
- `window.blur()`
- `window.resizeTo()`
- `window.moveTo()`

### Timers:

- `window.setTimeout()`
- `window.setInterval()`
- `window.clearTimeout()`
- `window.clearInterval()`

### Navigation and History:

- `window.location.href`
- `window.history.back()`
- `window.history.forward()`
- `window.history.go()`

### User Interaction:

- `window.alert()`
- `window.confirm()`
- `window.prompt()`

### Console Output:

- `console.log()`
- `console.error()`
- `console.warn()`
- `console.info()`
- `console.group()`
- `console.groupEnd()`

### Storage:

- `localStorage.setItem()`
- `localStorage.getItem()`
- `localStorage.removeItem()`
- `localStorage.clear()`

### Cookies:

- `document.cookie`

### Screen Properties:

- `window.innerWidth`
- `window.innerHeight`
- `window.screen.width`
- `window.screen.height`

### Events:

- `window.addEventListener()`
- `window.removeEventListener()`
- `window.dispatchEvent()`

### Geolocation:

- `navigator.geolocation.getCurrentPosition()`
- `navigator.geolocation.watchPosition()`

### Web APIs:

- `fetch()` for making network requests
- `XMLHttpRequest` for making asynchronous requests
- `WebRTC` for real-time communication
- `Web Workers` for multi-threading in the browser
- `Canvas API` for drawing graphics
