const API_URL = "http://localhost:3000/issues";

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const prioritySelect = document.getElementById("priority");
const issuesList = document.getElementById("issues");

function loadIssues() {
  fetch(API_URL)
    .then(res => res.json())
    .then(issues => {
      issuesList.innerHTML = "";

      issues.forEach(issue => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${issue.title}</strong>
          <p>${issue.description || ""}</p>
          <div>Priority: ${issue.priority}</div>
          <div>Status: ${issue.status}</div>
          <select onchange="updateStatus(${issue.id}, this.value)">
            <option ${issue.status === "Open" ? "selected" : ""}>Open</option>
            <option ${issue.status === "In Progress" ? "selected" : ""}>In Progress</option>
            <option ${issue.status === "Resolved" ? "selected" : ""}>Resolved</option>
          </select>
        `;
        issuesList.appendChild(li);
      });
    })
    .catch(err => console.error("Load error:", err));
}

function createIssue() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleInput.value,
      description: descriptionInput.value,
      priority: prioritySelect.value
    })
  })
    .then(res => res.json())
    .then(() => {
      titleInput.value = "";
      descriptionInput.value = "";
      prioritySelect.value = "Low";
      loadIssues();
    })
    .catch(err => console.error("Create error:", err));
}

function updateStatus(id, status) {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
    .then(() => loadIssues())
    .catch(err => console.error("Update error:", err));
}

loadIssues();
