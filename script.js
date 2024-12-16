document.getElementById("generate-btn").addEventListener("click", async () => {
    const religion = document.getElementById("religion").value;
    const gender = document.getElementById("gender").value;
    const output = document.getElementById("output");

    try {
        const response = await fetch("names.json");
        const names = await response.json();

        const filteredNames = names.filter((name) => {
            const religionMatch = religion === "all" || name.religion === religion;
            const genderMatch = gender === "all" || name.gender === gender;
            return religionMatch && genderMatch;
        });

        output.innerHTML = filteredNames
            .map((name) => `<div class="name-box">${name.name}</div>`)
            .join("");

        if (filteredNames.length === 0) {
            output.innerHTML = "<p>No names found for the selected criteria.</p>";
        }
    } catch (error) {
        output.innerHTML = "<p>Error loading names. Please try again later.</p>";
    }
});
