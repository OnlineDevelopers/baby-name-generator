const names = {
    boy: [
        "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ishaan", "Ayaan", "Krishna",
        "Shaurya", "Rohan", "Aryan", "Kiaan", "Mohit", "Aman", "Ansh", "Raghav", "Lakshya", "Kunal", "Yash"
    ],
    girl: [
        "Aadhya", "Ananya", "Ishita", "Saanvi", "Shruti", "Kavya", "Diya", "Aarya", "Meera", "Pooja",
        "Riya", "Simran", "Tanya", "Aishwarya", "Shreya", "Nitya", "Radhika", "Avni", "Tanvi", "Madhavi", "Kriti"
    ],
    all: [
        "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ishaan", "Ayaan", "Krishna",
        "Aadhya", "Ananya", "Ishita", "Saanvi", "Shruti", "Kavya", "Diya", "Aarya", "Meera", "Pooja"
    ]
};

function generateNames() {
    const gender = document.getElementById("gender").value;
    const religion = document.getElementById("religion").value;
    let nameList = [];

    if (religion === 'all') {
        nameList = names[gender];
    } else {
        // Add more filtering logic based on religion if needed.
        nameList = names[religion];
    }

    const nameContainer = document.getElementById("name-container");
    nameContainer.innerHTML = ""; // Clear previous results

    for (let i = 0; i < 20; i++) {
        const name = nameList[i] || "Name Not Available"; // Fallback if less than 20 names are available
        const nameBox = document.createElement("div");
        nameBox.className = "name-box";
        nameBox.textContent = name;
        nameContainer.appendChild(nameBox);
    }
}
