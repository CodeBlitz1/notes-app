// Signup
async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  alert(data.message);
}

// Login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(data.message);
}

// Add Note
async function addNote() {
  const content = document.getElementById("note").value;

  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content })
  });

  const data = await res.json();
  alert("Note added");
  getNotes();
}

// Get Notes
async function getNotes() {
  const res = await fetch("/api/notes");
  const notes = await res.json();

  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach(note => {
    const li = document.createElement("li");
    li.innerText = note.content;
    list.appendChild(li);
  });
}