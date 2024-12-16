fetch('names.json')
  .then(response => response.json())
  .then(data => {
    const namesData = data;

    document.getElementById('generate-btn').addEventListener('click', () => {
        const religion = document.getElementById('religion').value;
        const gender = document.getElementById('gender').value;

        const nameList = namesData[religion] && namesData[religion][gender];
        if (nameList) {
            const randomName = nameList[Math.floor(Math.random() * nameList.length)];
            document.getElementById('baby-name').textContent = `Baby Name: ${randomName}`;
        } else {
            document.getElementById('baby-name').textContent = "No names available for this selection.";
        }
    });
  })
  .catch(error => console.error('Error loading names:', error));
