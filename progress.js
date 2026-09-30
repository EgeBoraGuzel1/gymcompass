const calTitle = document.getElementById("cal-title");
const calGrid = document.getElementById("cal-grid");
const dayDetail = document.getElementById("day-detail");
const prevButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDate = new Date();

function loadWorkoutEntries() {
    const saved = localStorage.getItem("workoutLog");
    return saved ? JSON.parse(saved) : [];
  }
  function showDayDetail(dateString) {
    const entries = loadWorkoutEntries();
    const dayEntries = entries.filter(function (entry) {
      return entry.date === dateString;
    });
  
    dayDetail.innerHTML = "";
  
    if (dayEntries.length === 0) {
      dayDetail.textContent = "No workouts logged on this day.";
      return;
    }
  
    dayEntries.forEach(function (entry) {
      const row = document.createElement("div");
  
      const exerciseName = document.createElement("span");
      exerciseName.className = "log-exercise";
      exerciseName.textContent = entry.exercise;
  
      const sub = document.createElement("div");
      sub.className = "log-sub";
      sub.textContent = entry.sets + " sets x " + entry.reps + " reps";
  
      row.appendChild(exerciseName);
      row.appendChild(sub);
  
      dayDetail.appendChild(row);
    });
  }
function renderCalendar() {
    const entries = loadWorkoutEntries();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  calTitle.textContent = monthNames[month] + " " + year;

  calGrid.innerHTML = "";

  weekdayNames.forEach(function (name) {
    const label = document.createElement("div");
    label.className = "weekday";
    label.textContent = name;
    calGrid.appendChild(label);
  });

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startWeekday; i++) {
    const empty = document.createElement("div");
    empty.className = "day empty";
    calGrid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayBox = document.createElement("div");
    dayBox.className = "day";
    dayBox.textContent = day;
  
    const dateString = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
    const hasEntry = entries.some(function (entry) {
      return entry.date === dateString;
    });
  
    if (hasEntry) {
      dayBox.className = "day has-entry";
    }
  
    dayBox.addEventListener("click", function () {
      showDayDetail(dateString);
  
      const allDays = calGrid.querySelectorAll(".day");
      allDays.forEach(function (d) {
        d.classList.remove("selected");
      });
      dayBox.classList.add("selected");
    });
  
    calGrid.appendChild(dayBox);
  }
}

prevButton.addEventListener("click", function () {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendar();
});

nextButton.addEventListener("click", function () {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendar();
});

renderCalendar();