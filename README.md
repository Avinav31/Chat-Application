## <strong>Chat Application</strong>

<strong>THIS IS A WORK IN PROGRESS, FEATURES WOULD BE ADDING SOON.</strong>

## What is this project?

A chatroom website written in Node.js using Socket.IO for communication between clients. Express.js and the Node.js implementation of SQLite are used for a login system allowing users to register, login, edit, and delete an account at any time. Passwords are hashed using bcrypt so they are stored securely in the database. 

## Features To be added

* Two-step verification 🟠
* Administrator accounts with ban and delete powers 🟠
* Different chatrooms 🟠

## Screenshots

<img src="screenshots/sign-in.png" alt="Sign In form" style="width: 100%">

<img src="screenshots/sign-up.png" alt="Sign Up form" style="width: 100%">

<img src="screenshots/edit.png" alt="Edit account page" style="width: 100%">

<img src="screenshots/delete.png" alt="Delete account page" style="width: 100%">

```
nodejs-login-chat-app
├─ .VSCodeCounter
│  └─ 2023-10-07_00-38-16
│     ├─ details.md
│     ├─ diff-details.md
│     ├─ diff.csv
│     ├─ diff.md
│     ├─ diff.txt
│     ├─ results.csv
│     ├─ results.json
│     ├─ results.md
│     └─ results.txt
├─ .git
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-f636c72699cf5c369cf2e0b7a2162999ba5cf8a0.idx
│  │     └─ pack-f636c72699cf5c369cf2e0b7a2162999ba5cf8a0.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ README.md
├─ app.js
├─ controller
│  ├─ auth.js
│  └─ view.js
├─ handler
│  └─ chat.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ delete.html
│  ├─ scripts
│  │  └─ home.js
│  ├─ sign-in.html
│  ├─ sign-up.html
│  └─ styles.css
├─ router
│  ├─ get.js
│  └─ post.js
├─ screenshots
│  ├─ 404.png
│  ├─ delete.png
│  ├─ edit.png
│  ├─ home.png
│  ├─ sign-in.png
│  └─ sign-up.png
└─ server.js

```
