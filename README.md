![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Drum Machine](https://img.shields.io/badge/Drum_Machine-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white)

# Drum Machine

An old project built in the first half of 2025 as the start of my journey and posted here to attach to the course's page and to preserve my path.

This project is a part of FreeCodeCamp's Front End Development Libraries Certification. The goal is to build a Drum Machine that allows users to:

- Play two sets of Kits by nine notes each.
- Turn the machine on and off.
- Change the volume.

## 📋 Project Requirements

This project fulfills all **7 user stories** from FreeCodeCamp's "Build a Drum Machine" challenge:

<details>
<summary><b>Click to expand the full requirements</b></summary>

<br>

**User Stories:**
- [x] Outer container with `id="drum-machine"` containing all other elements
- [x] Element with `id="display"` inside `#drum-machine`
- [x] 9 clickable drum pad elements, each with:
  - Class name `drum-pad`
  - Unique `id` describing the audio clip
  - Inner text matching keyboard keys: `Q, W, E, A, S, D, Z, X, C` (in that order)
- [x] HTML5 `audio` element inside each `.drum-pad` with:
  - `src` attribute pointing to audio clip
  - Class name `clip`
  - `id` matching parent's inner text (e.g. `id="Q"`, `id="W"`, etc.)
- [x] Clicking `.drum-pad` triggers its child audio clip
- [x] Pressing associated keyboard key triggers the corresponding drum pad
- [x] When triggered, a unique string describing the audio clip appears in `#display`

</details>

**All tests passed** ✅

>I also added extra features beyond the requirements: power on/off toggle, volume control, and two switchable sound banks.

## 🎨 About the Project

### Technologies Used
- **Frontend:** React, Vite, CSS
- **Build Tool:** Vite
- **Deployment:** GitHub Pages

| Drum Machine Preview |
|---|
| ![Drum Machine Demo](./public/demo.gif) |

<div align="right"><i>submitted to FreeCodeCamp on Mar 4, 2025</i></div>

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/demo-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://rue-eru.github.io/drum-machine/)

---

| Third project of my [FreeCodeCamp Front End Libraries Certificate](https://www.freecodecamp.org/certification/fcc058fd235-9bca-44b6-b085-10ee4a9bdda6/front-end-development-libraries) journey |
|---|
| ![Certificate](./public/FrontEnd-Development-LIbraries.png) |


