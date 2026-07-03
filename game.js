// --- 1. THE STORY DATA ---
const story = {};

Object.assign(story, act_1, act_2, act_3, act_4);

// --- 2. THE ENGINE LOGIC ---

const bgLayer = document.getElementById("background-layer");
const dialogueBox = document.getElementById("dialogue-box");
const dialogueText = document.getElementById("dialogue-text");
const optionsLayer = document.getElementById("options-layer");

function loadPanel(panelId) {
    const panelData = story[panelId];

    if (!panelData) {
        console.error("Panel not found: " + panelId);
        return;
    }

    // 1. Update Background
    bgLayer.src = panelData.background;

    // 2. Update Dialogue Box
    if (panelData.dialogue) {
        dialogueText.innerText = panelData.dialogue;
        dialogueBox.style.display = "block"; // Show the box
    } else {
        dialogueBox.style.display = "none";  // Hide the box
    }

    // 3. Clear old buttons
    optionsLayer.innerHTML = "";

    // 4. Create new buttons
    panelData.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.classList.add("option-btn");
        
        btn.onclick = () => {
            loadPanel(choice.target);
        };

        optionsLayer.appendChild(btn);
    });
}

// Start the game
loadPanel("start");