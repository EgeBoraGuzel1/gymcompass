const form = document.getElementById("log-form");
const list = document.getElementById("log-list");

function loadEntries() {
  const saved = localStorage.getItem("workoutLog");
  return saved ? JSON.parse(saved) : [];
}

function saveEntries(entries) {
  localStorage.setItem("workoutLog", JSON.stringify(entries));
}
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDate(dateString) {
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const monthName = monthNames[parseInt(month, 10) - 1];
  return day + " " + monthName + " " + year;
}
function renderEntries() {
    const entries = loadEntries();
    list.innerHTML = "";
    entries.forEach(function (entry, index) {
      const li = document.createElement("li");
  
      const info = document.createElement("div");
  
      const exerciseName = document.createElement("span");
      exerciseName.className = "log-exercise";
      exerciseName.textContent = entry.exercise;
  
      const sub = document.createElement("div");
      sub.className = "log-sub";
  
      const dateSpan = document.createElement("span");
      dateSpan.className = "log-date";
      dateSpan.textContent = formatDate(entry.date);
  
      sub.appendChild(dateSpan);
      sub.append(" · " + entry.sets + " sets x " + entry.reps + " reps");
  
      info.appendChild(exerciseName);
      info.appendChild(sub);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        entries.splice(index, 1);
        saveEntries(entries);
        renderEntries();
      });
  
      li.appendChild(info);
      li.appendChild(deleteButton);
      list.appendChild(li);
    });
  }
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const exercise = document.getElementById("exercise-input").value;
  const sets = document.getElementById("sets-input").value;
  const reps = document.getElementById("reps-input").value;

  const entries = loadEntries();
  const today = new Date().toISOString().slice(0, 10);
  entries.push({ exercise: exercise, sets: sets, reps: reps, date: today });
  saveEntries(entries);

  form.reset();
  renderEntries();
});

renderEntries();