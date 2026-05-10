# JSON

A tiny browser app for formatting JSON.

## What it does

- Paste JSON into the textarea
- See the formatted output instantly
- Invalid JSON clears the preview

## How it works

- `index.html` renders the page
- `index.js` listens for input, parses JSON, and pretty-prints it
- `index.css` adds the basic layout and monospace styling

## Run locally

```bash
npm start
```

This starts a static server with `http-server`, then open the local URL in your browser.
