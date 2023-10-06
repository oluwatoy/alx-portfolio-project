        // Get references to the input element and the results list
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        // Add an input event listener to respond to user input
        searchInput.addEventListener('input', handleSearch);

        function handleSearch() {
            // Clear previous search results
            searchResults.innerHTML = '';

            // Get the user input from the search input
            const searchTerm = searchInput.value.trim().toLowerCase();

            // Perform your search logic here (you can use an API call or search in your data)

            // Display the dummy results in the searchResults list
            products.forEach((result) => {
                if (result.toLowerCase().includes(searchTerm)) {
                    const li = document.createElement('li');
                    li.textContent = result;
                    searchResults.appendChild(li);
                }
            });
        }