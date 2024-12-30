async function generate() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Failed to fetch the cat fact");
        }
        const data = await response.json();
        document.getElementById("para").innerHTML = `Fact: ${data.fact}`;
    } catch (error) {
        console.error("Error fetching the cat fact:", error);
        document.getElementById("para").innerHTML = "Oops! Unable to fetch a cat fact.";
    }
}
