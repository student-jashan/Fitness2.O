// ===== Section Switching =====
const navItems = document.querySelectorAll('.nav-links li');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = item.getAttribute('data-section');

    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    sections.forEach(sec => sec.classList.remove('visible'));
    document.getElementById(target).classList.add('visible');
  });
});



// ===== BMI Calculator =====
document.getElementById('calcBMI').addEventListener('click', () => {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) {
    alert("⚠️ Enter valid height and weight!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let category = '';
  let color = '';

  if (bmi < 18.5) { category = 'Underweight'; color = '#00bcd4'; }
  else if (bmi < 25) { category = 'Normal'; color = '#4caf50'; }
  else if (bmi < 30) { category = 'Overweight'; color = '#ff9800'; }
  else { category = 'Obese'; color = '#f44336'; }

  // Update textual info
  document.getElementById('bmiValue').textContent = bmi;
  document.getElementById('bmiCategory').textContent = category;
  document.getElementById('bmiHeight').textContent = (height * 100).toFixed(0);
  document.getElementById('bmiWeight').textContent = weight.toFixed(1);
  document.getElementById('bmiCircleValue').textContent = bmi;

  // Animate circle
  const circle = document.querySelector('.bmi-bar');
  const maxBMI = 40; // Cap for visualization
  const percentage = Math.min(bmi / maxBMI, 1);
  const circumference = 2 * Math.PI * 100;
  const offset = circumference - percentage * circumference;

  circle.style.strokeDashoffset = offset;
  circle.style.stroke = color;
});


// ===== Nutrition Filter =====
const typeFilter = document.getElementById('typeFilter');
const calorieFilter = document.getElementById('calorieFilter');
const cards = document.querySelectorAll('.nutrition-card');

function filterNutrition() {
  const type = typeFilter.value;
  const cal = calorieFilter.value;
  cards.forEach(card => {
    const matchType = type === 'all' || card.dataset.type === type;
    const matchCal = cal === 'all' || card.dataset.calories === cal;
    card.parentElement.style.display = matchType && matchCal ? 'block' : 'none';
  });
}
typeFilter.addEventListener('change', filterNutrition);
calorieFilter.addEventListener('change', filterNutrition);

// ===== View Full Plan =====
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("🍽 Full Plan:\n\n" + btn.getAttribute('data-fullplan'));
  });
});

// ===== AI Coach =====
document.getElementById('askBtn').addEventListener('click', () => {
  const question = document.getElementById('aiQuestion').value.trim();
  const responseBox = document.getElementById('aiResponse');
  if (question === '') return alert("Please ask a question!");
  
  responseBox.style.display = 'block';
  responseBox.innerHTML = `<strong>You:</strong> ${question}<br><em>AI Coach:</em> Thinking... 🤔`;

  setTimeout(() => {
    responseBox.innerHTML = `<strong>You:</strong> ${question}<br><em>AI Coach:</em> Consistency is key! Stay hydrated and follow your plan 💪`;
  }, 1000);
});

// ===== BMI Calculator with Visual Elements =====
const calcBtn = document.getElementById("calcBMI");
const bmiVal = document.getElementById("bmiValue");
const bmiCat = document.getElementById("bmiCategory");
const bmiH = document.getElementById("bmiHeight");
const bmiW = document.getElementById("bmiWeight");
const bmiCircleValue = document.getElementById("bmiCircleValue");
const bmiBar = document.querySelector(".bmi-bar");

// Use the same BMI calculation function to avoid conflicts
// Removed duplicate BMI calculation code to prevent conflicts

// ================================
// 🎓 Course Section Interactions
// ================================

const viewCourseBtn = document.getElementById("viewCourseBtn");
const backBtn = document.getElementById("backBtn");
const courseCardView = document.getElementById("courseCardView");
const courseDetailView = document.getElementById("courseDetailView");
const lessonList = document.getElementById("lessonList");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const lessonDescription = document.getElementById("lessonDescription");

const ratingModal = document.getElementById("ratingModal");
const rateBtn = document.getElementById("rateBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const stars = document.querySelectorAll(".star");
const reviewMsg = document.getElementById("reviewMsg");

// --- Switch between Card and Detail Views ---
viewCourseBtn.addEventListener("click", () => {
  courseCardView.style.display = "none";
  courseDetailView.style.display = "block";
});

backBtn.addEventListener("click", () => {
  courseDetailView.style.display = "none";
  courseCardView.style.display = "block";
  videoPlayer.pause();
});

// --- Lesson Click Logic ---
lessonList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const videoFile = e.target.getAttribute("data-video");
    const desc = e.target.getAttribute("data-desc");
    videoSource.src = videoFile;
    videoPlayer.load();
    videoPlayer.play();
    lessonDescription.textContent = desc;
  }
});

// --- Rating Modal Logic ---
rateBtn.addEventListener("click", () => ratingModal.style.display = "block");
cancelBtn.addEventListener("click", () => ratingModal.style.display = "none");

let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = star.dataset.value;
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("active");
    }
  });
});

// --- Toast (Thank You Message) ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100); // fade in

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500); // fade out cleanup
  }, 2500);
}

// --- Submit Rating ---
submitBtn.addEventListener("click", () => {
  if (selectedRating === 0) {
    showToast("⚠ Please select a star rating!");
    return;
  }

  ratingModal.style.display = "none";
  showToast("⭐ Thanks for rating this course!");
  stars.forEach(s => s.classList.remove("active"));
  reviewMsg.value = "";
  selectedRating = 0;
});


function initializeWorkouts() {
  const container = document.getElementById('workoutContainer');
  container.innerHTML = workouts.map(workout => `
    <div class="col-md-6 col-lg-4 workout-item" 
         data-type="${workout.type}" 
         data-difficulty="${workout.difficulty}" 
         data-duration="${workout.duration >= 40 ? 'long' : workout.duration >= 20 ? 'medium' : 'short'}">
      <div class="card workout-card shadow-sm h-100">
        <img src="${workout.image}" class="card-img-top" alt="${workout.title}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <div class="workout-badges mb-2">
            <span class="badge bg-primary">${workout.type}</span>
            <span class="badge ${getDifficultyClass(workout.difficulty)}">${workout.difficulty}</span>
            <span class="badge bg-secondary">${workout.duration}min</span>
          </div>
          <h5 class="card-title">${workout.title}</h5>
          <p class="card-text flex-grow-1">${workout.description}</p>
          <div class="workout-meta text-muted small mb-2">
            🕒 ${workout.duration} min | 🔥 ${workout.calories} cal
            ${workout.completed ? '<span class="badge bg-success ms-2">Completed</span>' : ''}
          </div>
          <button class="btn btn-primary start-workout" data-workout-id="${workout.id}">
            ${workout.completed ? 'Repeat Workout' : 'Start Workout'}
          </button>
          <button class="btn btn-outline-secondary mt-2 view-details" data-workout-id="${workout.id}">
            View Details
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Add event listeners
  document.querySelectorAll('.start-workout').forEach(btn => {
    btn.addEventListener('click', startWorkout);
  });
  
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', viewWorkoutDetails);
  });
}

function getDifficultyClass(difficulty) {
  const classes = {
    beginner: 'bg-success',
    intermediate: 'bg-warning',
    advanced: 'bg-danger'
  };
  return classes[difficulty] || 'bg-secondary';
}

// Workout filtering
function filterWorkouts() {
  const typeFilter = document.getElementById('workoutTypeFilter').value;
  const difficultyFilter = document.getElementById('difficultyFilter').value;
  const durationFilter = document.getElementById('durationFilter').value;
  const searchTerm = document.getElementById('workoutSearch').value.toLowerCase();

  document.querySelectorAll('.workout-item').forEach(item => {
    const type = item.dataset.type;
    const difficulty = item.dataset.difficulty;
    const duration = item.dataset.duration;
    const title = item.querySelector('.card-title').textContent.toLowerCase();

    const typeMatch = typeFilter === 'all' || type === typeFilter;
    const difficultyMatch = difficultyFilter === 'all' || difficulty === difficultyFilter;
    const durationMatch = durationFilter === 'all' || duration === durationFilter;
    const searchMatch = title.includes(searchTerm);

    item.style.display = typeMatch && difficultyMatch && durationMatch && searchMatch ? 'block' : 'none';
  });
}

// Start workout functionality
function startWorkout(e) {
  const workoutId = parseInt(e.target.dataset.workoutId);
  const workout = workouts.find(w => w.id === workoutId);
  
  if (workout) {
    document.getElementById('workoutModalTitle').textContent = workout.title;
    document.getElementById('currentExercise').textContent = 'Ready to start!';
    document.getElementById('exerciseDescription').textContent = 'Click "Next Exercise" to begin';
    
    // Populate exercise list
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = workout.exercises.map(ex => 
      `<div>${ex.name} - ${ex.duration}min</div>`
    ).join('');
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('workoutTimerModal'));
    modal.show();
    
    // Initialize workout session
    currentWorkout = {
      ...workout,
      currentExercise: 0,
      startTime: new Date(),
      timer: null,
      elapsed: 0
    };
  }
}

function viewWorkoutDetails(e) {
  const workoutId = parseInt(e.target.dataset.workoutId);
  const workout = workouts.find(w => w.id === workoutId);
  
  if (workout) {
    alert(`🏋️ ${workout.title}\n\nExercises:\n${
      workout.exercises.map(ex => `• ${ex.name} (${ex.duration}min) - ${ex.description}`).join('\n')
    }`);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeWorkouts();
  
  // Add filter event listeners
  document.getElementById('workoutTypeFilter').addEventListener('change', filterWorkouts);
  document.getElementById('difficultyFilter').addEventListener('change', filterWorkouts);
  document.getElementById('durationFilter').addEventListener('change', filterWorkouts);
  document.getElementById('workoutSearch').addEventListener('input', filterWorkouts);
});


