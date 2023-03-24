// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('div') // Make the `div`


		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.written_content // Put the JSON title inside 
		listItem.appendChild(itemwritten_content) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.image // Set the `src` attribute from the JSON
		listItem.appendChild(itemimage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Vehicle from>${item.location}</in India</p>
				<p><em>${item.color}</em></p>
				<p>Translates to: ${item.translation} </p>
				<p>Language ${item.language} </p>
				</a>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
