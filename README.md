# 🍔 Mood Munch AI — Restaurant App

An interactive, multi-scene restaurant application built with React + Vite. Explore the restaurant from welcome exterior to dine-in, drive-thru, and kitchen views — with real-time ordering and order tracking.

## ✨ Features

* **🏠 Exterior View** — Welcome landing page with two entry paths.
* **🪑 Interior Dine-In** — Interactive tables, click to open menu and place orders.
* **🍳 Kitchen View** — Real-time order queue showing preparation status.
* **🚗 Drive-Thru Flow** — Step-by-step ordering and pickup demo.
* **📋 Live Order Tracking** — Auto-status updates: `Placed → Preparing → Cooking → Ready → Delivered`.
* **📱 Responsive** — Fully responsive navigation.
* **🎨 Design** — Branded color scheme & smooth scene transitions.

## 🛠️ Tech Stack

* **React 18** — Component-based UI
* **Vite** — Fast build & dev server
* **JavaScript (JSX)** — Application logic

## 📂 Project Structure

```text
MoodMunchAI/
├── client/
│   ├── src/
│   │   ├── App.jsx             # Main app & routing + order state
│   │   ├── ExteriorScene.jsx   # Welcome screen
│   │   ├── InteriorScene.jsx   # Dine-in + menu ordering
│   │   ├── KitchenScene.jsx    # Kitchen order queue
│   │   ├── DriveThruScene.jsx  # Drive-thru demo
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
├── README.md                   # ← This file
├── LICENSE
└── .gitignore

🚀 Getting Started
Prerequisites
Node.js 18+ installed

Git installed

Installation
# Clone your repo
git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
cd MoodMunchAI/client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for Production
npm run build
🎮 How to Use
Welcome Screen — Choose "Enter Restaurant" or "Drive-Thru".

Dine-In — Click any table → select from menu → watch order progress.

Kitchen — View active orders as they move through preparation.

Drive-Thru — Follow the full ordering & pickup flow.

Track Orders — Watch the right-side panel for real-time status updates.

📝 Git Setup
# Initialize git (run once)
git init

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Mood Munch AI restaurant app"

# Link to your GitHub repo
git remote add origin [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)

# Push to main branch
git branch -M main
git push -u origin main
📌 Future Improvements
Background ambiance sound effects

Mobile-optimized layout

Payment integration demo

Order history & analytics

Customer feedback system

Built with ❤️ — Mood Munch AI
### 2. `LICENSE`
```text
MIT License

Copyright (c) 2026 Qursam Bibi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
3. .gitignore
Plaintext
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
