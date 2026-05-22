# PassGen

A lightweight React + Vite password generator built with Tailwind CSS.

## Overview

<img width="1910" height="957" alt="image" src="https://github.com/user-attachments/assets/f17c0743-429a-4f40-8a1b-5abb6cadf9ad" />


PassGen allows users to generate secure passwords with customizable options:

- Select password length with a slider (4–15 characters)
- Toggle inclusion of lowercase, uppercase, numbers, and symbols
- Generate a random password instantly
- Copy the generated password to the clipboard with a single click

The app uses React hooks for state management and updates the password automatically when options change.

## Features

- `generate` button for creating a new password
- `copy` button with visual feedback (`copied` state)
- Password length slider
- Character type toggles with built-in minimum selection validation
- Minimal Tailwind CSS styling

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open the local development URL shown in the terminal.

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

## Project Structure

- `src/App.jsx` — main application logic and state
- `src/components/Input.jsx` — password display, generate, and copy buttons
- `src/components/Slider.jsx` — password length slider control
- `src/components/Actions.jsx` — toggle options for character types
- `src/index.css` — Tailwind CSS import and global styles
- `vite.config.js` — Vite configuration

## Notes

- The password generator currently prevents deselecting the last remaining character type.
- The app uses `navigator.clipboard.writeText` to copy the password.

## License

This repository is open and available for personal or educational use.
