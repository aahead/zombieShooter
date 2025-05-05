# zombieShooter

A simple top-down shooter game where the player must survive waves of zombies.  
The game features dynamic wave progression, map changes, and different zombie appearances based on the environment.

---

## 🎮 How to Play

- Move around the map using **WASD** or **arrow keys**.
- Aim with your **mouse**.
- **Left-click** to shoot.
- Survive incoming waves of zombies.
- After each wave, you get a **10-second rest** before the next one begins.
- Maps and zombie appearances **change** as you survive longer!

---

## 🧟‍♂️ Game Features

- **Wave System**:  
  Each new wave spawns more zombies (starting at 20 zombies, increasing by 10 each wave).
  
- **Rest Periods**:  
  After clearing a wave, you have 10 seconds to reload and prepare.

- **Dynamic Maps**:  
  - **Wave 1–5**: Standard grassy field.
  - **Wave 6–10**: Desert environment.
  - **Wave 11+**: Snowy environment.

- **Basic Ammo System**:
  - 20 bullets per magazine.
  - Manual reload occurs after magazine is emptied.

---

## 🗺️ Map Switching

The map automatically changes during gameplay:
- At **wave 6**, the background switches to a desert.
- At **wave 11**, the background switches to snow.

Each map uses different zombie models for better immersion.

---

## 🛠️ Technical Overview

- Built using **HTML5**, **CSS3**, and **JavaScript**.
- Uses the **Canvas API** for rendering graphics.
- Performance is managed using `requestAnimationFrame` and `deltaTime` calculations.
- The spawn rate of zombies is based on time (`performance.now()`).

---

## 📂 File Structure

| File | Purpose |
|:-----|:--------|
| `index.html` | Sets up the canvas and links the scripts. |
| `style.css` | Styles the game overlay, wave notifications, etc. |
| `game.js` | Contains all the game logic (movement, shooting, spawning, wave management, map switching). |
| `assets/` | Folder containing images like player sprite, zombies, desert map, snow map, medkit zombie, etc. |

---

## 📈 Future Improvements

- Add new zombie types (tanks, fast runners, etc).
- Introduce boss fights at milestone waves.
- Add grenades and other weapons. *(Work in progress.)*
- Improve player UI (ammo counters, health bar).
- Add sound effects and background music.

---

## 📃 License

This project is for educational and personal use.  
Feel free to modify or expand it for your own projects!
