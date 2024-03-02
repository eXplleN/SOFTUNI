let list = document.getElementById("repos");

function loadRepos() {
	let username = document.getElementById("username").value;
	let url = `https://api.github.com/users/${username}/repos`;

	fetch (url)
	   .then(onHeaders)
	   .then(onSuccess)
	   .catch(onError);
}

function onHeaders(response) {
	if (!response.ok){
		throw "Error";
	}
	return response.json()
}

function onSuccess(data) {
    list.replaceChildren(...data.map(createListItem));
}

function onError(error) {
   list.textContent = error;
}

function createListItem({html_url, full_name}) {
	let item = document.createElement('li');
	let anchor = document.createElement('a');
	anchor.href = html_url;
	anchor.textContent = full_name;
	item.appendChild(anchor);

	return item;
}