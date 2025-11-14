document.getElementById("searchBtn").addEventListener("click", fetchRegulation);

async function fetchRegulation() {
    const part = document.getElementById("partDropdown").value;

    if (!part) {
        document.getElementById("results").innerText = "Please select a part.";
        return;
    }

    try {
        const response = await fetch(`http://localhost:4000/regulation/${part}`);

        if (!response.ok) {
            document.getElementById("results").innerText = "No data found.";
            return;
        }

        const data = await response.json();

        displayClauses(data.clauses);
    } catch (err) {
        console.error(err);
        document.getElementById("results").innerText = "Error fetching data.";
    }
}

function displayClauses(clauses) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    clauses.forEach(c => {
        const clauseElement = document.createElement("p");
        clauseElement.textContent = c;
        container.appendChild(clauseElement);
    });
}
