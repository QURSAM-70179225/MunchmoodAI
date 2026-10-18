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

```

## 🚀 Getting Started

### Prerequisites

* Node.js 18+ installed
* Git installed

### Installation

```bash
# Clone your repo
git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
cd MoodMunchAI/client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for Production
npm run build

```

## 🎮 How to Use

* **Welcome Screen** — Choose "Enter Restaurant" or "Drive-Thru".
* **Dine-In** — Click any table → select from menu → watch order progress.
* **Kitchen** — View active orders as they move through preparation.
* **Drive-Thru** — Follow the full ordering & pickup flow.
* **Track Orders** — Watch the right-side panel for real-time status updates.

## 📝 Git Setup

```bash
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

```

## 📌 Future Improvements

* Background ambiance sound effects
* Mobile-optimized layout
* Payment integration demo
* Order history & analytics
* Customer feedback system

---

*Built with ❤️ — Mood Munch AI*

```

<ElicitationsGroup message="Here are some additional React components you might need:">
  <Elicitation label="Draft the App.jsx file" query="Write the React code for the App.jsx main routing file."/>
  <Elicitation label="Draft the KitchenScene.jsx file" query="Write the React code for the KitchenScene.jsx order queue component."/>
</ElicitationsGroup>

<FollowUp label="Would you like the code for the InteriorScene.jsx component to see how table interactions work?" query="Write the React code for the InteriorScene.jsx component."/>

```
