const generateButton = document.getElementById("generate");
const output = document.getElementById("output");
let namesData = [];

// Load names.json
fetch("names.json")
    .then((response) => response.json())
    .then((data) => {
        namesData = data;
        loadLikesFromStorage();
    })
    .catch((error) => console.error("Error loading names:", error));

// Function to Generate Names
function generateNames() {
    const selectedReligion = document.getElementById("religion").value;
    const selectedGender = document.getElementById("gender").value;

    // Filter names based on religion and gender
    const filteredNames = namesData.filter((item) => {
        return (
            (selectedReligion === "all" || item.religion === selectedReligion) &&
            (selectedGender === "all" || item.gender === selectedGender)
        );
    });

    // Display names
    output.innerHTML = "";
    filteredNames.forEach((nameObj) => {
        const nameCard = document.createElement("div");
        nameCard.classList.add("name-card");
        nameCard.innerHTML = `
            <span>${nameObj.name}</span>
            <div>
                <span class="like-count" id="like-${nameObj.name}">${getLikeCount(
            nameObj.name
        )}</span>
                <span class="like-button" onclick="incrementLike('${nameObj.name}')">❤️</span>
            </div>
        `;
        output.appendChild(nameCard);
    });
}

// Local Storage for Likes
function getLikeCount(name) {
    return localStorage.getItem(name) || 0;
}

function incrementLike(name) {
    let currentCount = parseInt(localStorage.getItem(name)) || 0;
    currentCount++;
    localStorage.setItem(name, currentCount);
    document.getElementById(`like-${name}`).innerText = currentCount;
}

// Load likes on page load
function loadLikesFromStorage() {
    const allNames = document.querySelectorAll(".like-count");
    allNames.forEach((el) => {
        const name = el.id.replace("like-", "");
        el.innerText = getLikeCount(name);
    });
}

generateButton.addEventListener("click", generateNames);
