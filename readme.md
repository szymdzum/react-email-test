# React Email Starter

A live preview right in your browser.

## Getting Started

Use latest version of Node.js.

```sh
nvm install node
nvm use node

node -v
v21.6.2
```

Use pnpm to install dependencies.

```sh
pnpm install
```

Then, run the development server:

```sh
pnpm dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## License

MIT License

## Tips, Tricks, and Gotchas

Only content in files that are in root `emails` folder are auto-refreshed on save. <br/>
Changes in nested folders are not. Example `emails/components/footer.tsx`
