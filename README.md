# 🖼️✨ **Image Background Remover**

<p align="center">
  <img src="https://img.shields.io/badge/Powered%20by-Remove.bg-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Free%20to%20Use-Yes-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/UI-AI%20Designed-purple?style=for-the-badge" />
</p>

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/7680528/273420011-2e7e7b7e-2e7e-4e7e-8e7e-7e7e7e7e7e7e.png" width="320" alt="Background Remover Banner"/>
</p>

---

> **Transform your images with a single click!**

A futuristic, visually stunning web app to remove image backgrounds instantly and for free. Powered by the Remove.bg API, enhanced with Matrix-style animated backgrounds, GSAP/Anime.js effects, and a beautiful, responsive UI.

---

## 🚀 Features

- **One-click background removal** (using Remove.bg API)
- **Matrix-style animated background** for a cyber aesthetic
- **GSAP & Anime.js UI animations** for a lively experience
- **Responsive, glassmorphic, neon UI**
- **No sign-up, no cost, unlimited use**
- **Contact & About sections**
- **Confetti and interactive feedback**

---

## 🛠️ Tech Stack

- **HTML5** + **Tailwind CSS** (CDN)
- **JavaScript (ES6+)**
- **GSAP** & **Anime.js** (for animations)
- **Remove.bg API**
- **Lottie** (for animated header character)

---

## 📁 Folder Structure

```text
Background Remover/
│
├── index.html
├── README.md
│
├── js/
│   ├── script.js
│   ├── background-anim.js
│   └── effects.js
│
├── api/
│   └── remove-bg.js        

```

---

## 🖥️ Usage

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Upload an image and click **Remove Background**.
4. Download your new image with a transparent background!

> **No installation or build required. 100% client-side.**

---

## 🛡️ Environment Variables & API Key Security

This app uses the Remove.bg API key securely via a Vercel serverless function. **Do NOT expose your API key in frontend code.**

### Local Development
1. Create a `.env` file in your project root:
   ```env
   API_KEY=your_removebg_api_key_here
   ```
2. The serverless function in `/api/remove-bg.js` will read this key.

### Vercel Deployment
1. Go to your project on the Vercel dashboard.
2. Navigate to **Settings → Environment Variables**.
3. Add a new variable:
   - **Name:** `API_KEY`
   - **Value:** your Remove.bg API key
   - **Environment:** Production/Preview/Development (as needed)

---

## 🔒 How It Works
- The frontend sends image requests to `/api/remove-bg` (a Vercel serverless function).
- The function reads your API key from the environment and proxies the request to Remove.bg.
- **Your API key is never exposed to the browser.**

---

## ✨ Screenshots

<p align="center">
  <img src="https://i.imgur.com/0y0y0y0.png" width="600" alt="App Screenshot"/>
</p>

---

## 🙌 Credits

- **Remove.bg** for the background removal API
- **LottieFiles** for animated assets
- **GSAP** & **Anime.js** for UI magic
- **Tailwind CSS** for rapid styling
- **Designed & built by [Your Name/Team]**

---

## 📬 Contact

- Email: [chiragmishra2511@gmail.com](mailto:chiragmishra2511@gmail.com)
- [About & Contact sections are in the app!](#about)

---

<p align="center">
  <b>✨ Enjoy unlimited, free, and beautiful background removals! ✨</b>
</p> 