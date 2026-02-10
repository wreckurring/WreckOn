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

### Managing the Music Library

The player features a dynamic rendering system that automatically builds the interface based on the data provided in the code. You do not need to rename your files to a specific numbering scheme.

To add new music to your local version:

1. **Add Assets:** Place your new .mp3 files into the assets/songs/ directory and your album art into assets/covers/.

2. **Update the Data Array:** Open js/app.js and add a new object to the songs array following this format:
    ```
    { 
        songName: "Your Song Title", 
        filePath: "assets/songs/your-file.mp3", 
        coverPath: "assets/covers/your-image.jpg" 
    }
    ```

3. **Automatic Sync:** Once saved, the player will automatically create the new list item, map the play controls, and update the display names without any changes needed to your HTML file.

***
