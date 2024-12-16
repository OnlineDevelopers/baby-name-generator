const generateButton = document.getElementById("generate");
const output = document.getElementById("output");
let namesData = [];

// Fetch names from JSON file
fetch("names.json")
    .then((response) => response.json())
    .then((data) => {
        namesData = data;
        console.log("Names loaded:", namesData); // For debugging
    })
    .catch((error) => console.error("Error loading names:", error));

// Generate Names
function generateNames() {
    const selectedReligion = document.getElementById("religion").value;
    const selectedGender = document.getElementById("gender").value;

    const filteredNames = namesData.filter((item) => {
        return (
            (selectedReligion === "all" || item.religion === selectedReligion) &&
            (selectedGender === "all" || item.gender === selectedGender)
        );
    });

    if (filteredNames.length === 0) {
        output.innerHTML = "<p>No names found for the selected filters.</p>";
        return;
    }

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

// Local Storage for Like Counts
function getLikeCount(name) {
    return localStorage.getItem(name) || 0;
}

function incrementLike(name) {
    let count = parseInt(localStorage.getItem(name)) || 0;
    count++;
    localStorage.setItem(name, count);
    document.getElementById(`like-${name}`).innerText = count;
}

generateButton.addEventListener("click", generateNames);
