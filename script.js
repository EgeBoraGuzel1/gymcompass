const exercises = {
    chest: [
      { name: "Bench Press", sets: 4, reps: 10, tip: "Keep your shoulder blades pulled back and down." },
      { name: "Incline Dumbbell Press", sets: 3, reps: 12, tip: "Set the bench to a 30-45 degree angle." },
      { name: "Push-Up", sets: 3, reps: 15, tip: "Keep your body in a straight line from head to heels." },
      { name: "Chest Fly", sets: 3, reps: 12, tip: "Keep a slight bend in your elbows throughout the move." },
      { name: "Cable Crossover", sets: 3, reps: 12, tip: "Cross your hands slightly at the bottom of the move." }
    ],
    shoulders: [
      { name: "Overhead Press", sets: 3, reps: 10, tip: "Avoid arching your lower back." },
      { name: "Lateral Raise", sets: 3, reps: 15, tip: "Lift to shoulder height, don't swing the weights." },
      { name: "Front Raise", sets: 3, reps: 12, tip: "Keep a slight bend in your elbows, control the descent." },
      { name: "Arnold Press", sets: 3, reps: 10, tip: "Rotate your palms from facing you to facing forward as you press." },
      { name: "Face Pull", sets: 3, reps: 15, tip: "Pull toward your face, keep your elbows high." }
    ],
    biceps: [
        { name: "Bicep Curl", sets: 3, reps: 12, tip: "Keep your elbows close to your body." },
        { name: "Hammer Curl", sets: 3, reps: 12, tip: "Keep your palms facing each other the whole time." },
        { name: "Preacher Curl", sets: 3, reps: 10, tip: "Don't fully lock your elbows at the bottom." },
        { name: "Concentration Curl", sets: 3, reps: 10, tip: "Rest your elbow against your inner thigh, curl slowly." }
      ],
      triceps: [
        { name: "Tricep Pushdown", sets: 3, reps: 12, tip: "Keep your elbows pinned to your sides." },
        { name: "Tricep Dips", sets: 3, reps: 12, tip: "Keep your elbows pointing backward, not out to the sides." },
        { name: "Skull Crusher", sets: 3, reps: 10, tip: "Keep your upper arms still, only move your forearms." },
        { name: "Overhead Tricep Extension", sets: 3, reps: 12, tip: "Keep your elbows close to your head, don't flare them out." }
      ],
    abs: [
      { name: "Plank", sets: 3, reps: 1, tip: "Hold for 30-60 seconds, keep your body straight." },
      { name: "Crunch", sets: 3, reps: 15, tip: "Lift your shoulders, not your whole back." },
      { name: "Leg Raise", sets: 3, reps: 12, tip: "Keep your lower back pressed into the floor." },
      { name: "Russian Twist", sets: 3, reps: 20, tip: "Rotate from your torso, not just your arms." },
      { name: "Cable Crunch", sets: 3, reps: 15, tip: "Round your back and crunch down, don't pull with your arms." }
    ],
    back: [
      { name: "Pull-Up", sets: 3, reps: 8, tip: "Engage your back, not just your arms." },
      { name: "Lat Pulldown", sets: 3, reps: 12, tip: "Pull the bar toward your chest, not your neck." },
      { name: "Bent-Over Row", sets: 3, reps: 10, tip: "Keep your back flat, pull toward your stomach." },
      { name: "Seated Cable Row", sets: 3, reps: 12, tip: "Squeeze your shoulder blades together at the end of the pull." },
      { name: "Deadlift", sets: 4, reps: 8, tip: "Keep the bar close to your legs, back flat throughout." }
    ],
    legs: [
      { name: "Squat", sets: 4, reps: 10, tip: "Keep your knees in line with your toes." },
      { name: "Leg Press", sets: 3, reps: 12, tip: "Don't let your knees lock fully at the top." },
      { name: "Lunge", sets: 3, reps: 12, tip: "Keep your front knee above your ankle, not past your toes." },
      { name: "Leg Extension", sets: 3, reps: 15, tip: "Control the weight on the way down, don't swing it." },
      { name: "Leg Curl", sets: 3, reps: 12, tip: "Squeeze your hamstrings at the top of the move." },
      { name: "Romanian Deadlift", sets: 3, reps: 10, tip: "Keep a slight bend in your knees, hinge at the hips." },
      { name: "Calf Raise", sets: 4, reps: 15, tip: "Pause and squeeze at the top of each rep." }
    ]
  };
  
  const ICON_SVG = '<svg viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>';
  
  const muscleParts = document.querySelectorAll(".muscle-part");
  const exerciseInfo = document.getElementById("exercise-info");
  
  muscleParts.forEach(function (part) {
    part.addEventListener("click", function () {
      const muscle = part.getAttribute("data-muscle");
  
      muscleParts.forEach(function (p) {
        p.classList.remove("selected");
      });
  
      const matchingParts = document.querySelectorAll('[data-muscle="' + muscle + '"]');
      matchingParts.forEach(function (p) {
        p.classList.add("selected");
      });
  
      const muscleExercises = exercises[muscle];
  
      exerciseInfo.innerHTML = "";
  
      muscleExercises.forEach(function (exercise) {
        const card = document.createElement("div");
        card.className = "exercise-card";
  
        const icon = document.createElement("div");
        icon.className = "exercise-icon";
        icon.innerHTML = ICON_SVG;
  
        const body = document.createElement("div");
        body.className = "exercise-body";
  
        const title = document.createElement("div");
        title.className = "exercise-name";
        title.textContent = exercise.name;
  
        const details = document.createElement("div");
        details.className = "exercise-sets";
        details.textContent = exercise.sets + " sets x " + exercise.reps + " reps";
  
        const tip = document.createElement("div");
        tip.className = "exercise-tip";
        tip.textContent = exercise.tip;
  
        body.appendChild(title);
        body.appendChild(details);
        body.appendChild(tip);
  
        card.appendChild(icon);
        card.appendChild(body);
        exerciseInfo.appendChild(card);
      });
    });
  });