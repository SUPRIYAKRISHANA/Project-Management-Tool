document.getElementById('add-project-btn').addEventListener('click', function() {
    const projectName = document.getElementById('project-name').value;
    if (projectName) {
        addProject(projectName);
        document.getElementById('project-name').value = '';
    }
});

function addProject(name) {
    const projectList = document.getElementById('projects-list');
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
        <span>${name}</span>
        <button onclick="deleteProject(this)">Delete</button>
    `;
    projectList.appendChild(projectItem);
}

function deleteProject(button) {
    const projectItem = button.parentElement;
    projectItem.remove();
}
