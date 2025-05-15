// Fonction pour charger le contenu du fichier README à partir de GitHub
function loadReadme(githubUser, projectName) {
  const readmeUrl = `https://raw.githubusercontent.com/${githubUser}/${projectName}/main/README.md`;

  fetch(readmeUrl)
    .then(response => response.text())
    .then(text => {
      document.getElementById('md-content').innerHTML = marked.parse(text); // Utiliser marked.parse()
    })
    .catch(error => {
      document.getElementById('md-content').innerHTML = `<p class="text-danger">Erreur: ${error.message}</p>`;
    });
}

// Fetch GitHub repositories and list them
function fetchGitHubProjects() {
  const githubUser = "AlpagaSan"; // Remplace par ton nom d'utilisateur GitHub
  const githubApiUrl = `https://api.github.com/users/${githubUser}/repos`;

  fetch(githubApiUrl)
    .then(response => response.json())
    .then(data => {
      const projectList = document.getElementById('project-list');
      projectList.innerHTML = ''; // Clear current list

      data.forEach(project => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `<a href="#" onclick="loadReadme('${githubUser}', '${project.name}')">${project.name}</a>`;
        projectList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));
}

// Call functions on page load
window.onload = function() {
  fetchGitHubProjects(); // Fetch and display GitHub projects
};
