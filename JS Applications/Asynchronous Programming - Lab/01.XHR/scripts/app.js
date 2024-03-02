function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let output = document.getElementById("res");

   fetch(url)
        .then(response => {
         if (response.ok == false){
            throw response.text();
         }
         return response.text();
        })
        .then (data => output.textContent = data)
        .catch (error => output.textContent = `Encountered error: ${error}`);
}