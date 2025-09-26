# WreckOn Music Player

A basic, fully responsive music player interface built using **HTML**, **CSS**, and **vanilla JavaScript**. This project serves as a foundation for a modern web-based media player, currently styled similarly to popular music streaming platforms.

## Features

-   **Core Player Controls:** Functional Play/Pause, Next Track, and Previous Track navigation.
-   **Visual Feedback:** Interactive playback progress bar and animated equalizer GIF during play.
-   **Dynamic List Population:** Album covers and song names are dynamically loaded from a JavaScript array.
-   **Design:** Utilizes Flexbox for layout and custom styling to resemble a modern dark-themed music application.

## Technologies Used

-   **HTML5**
-   **CSS3** (Includes Flexbox for layout)
-   **Vanilla JavaScript** (ES6+)
-   **Font Awesome** (for player icons)

## Setup and Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/wreckurring/WreckOn.git](https://github.com/wreckurring/WreckOn.git)
    ```
2.  **Navigate to the project's web root folder:**
    ```bash
    cd WreckOn
    ```
3.  **Open the file:**
    Open `index.html` in your web browser.

***

### ⚠️ Important Note on Audio Files

The actual **MP3 audio files are excluded** from this public repository (`.mp3` is in `.gitignore`) for size and licensing reasons.

The player is functional, but to hear audio, you must manually add your own files:
* Place ten `.mp3` files, named sequentially from `1.mp3` up to `10.mp3`, into the **`songs/`** subdirectory.

***

## Future Enhancements & Current Fixes Needed

The project is ready for its next phase of development. Focus areas include:

-   [ ] **Dynamic Time:** Implement display for current playback time and total track duration.
-   [ ] **Branding:** Update all remaining "Spotify" branding/text in `index.html` and `app.js` to "WreckOn."
-   [ ] **Data:** Update placeholder song names (e.g., "XYZ") in `app.js` with actual track titles.
-   [ ] **Error Handling:** Add a check to reset the playback controls if a song file is missing or fails to load.