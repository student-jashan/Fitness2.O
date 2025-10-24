      const navItems = document.querySelectorAll(".nav-links li");
      const sections = document.querySelectorAll(".section");

      navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const target = item.getAttribute("data-section");

          navItems.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");

          sections.forEach((sec) => sec.classList.remove("visible"));
          document.getElementById(target).classList.add("visible");

          // If courses section is clicked, display course cards
          if (target === "courses") {
            displayCourseCards();
          }
        });
      });

      // ===== COURSE DATABASE =====
      const courses = [
        {
          id: 1,
          title: "Complete Beginner Fitness Journey",
          description:
            "Build a solid foundation in fitness with expert-guided lessons. Perfect for those new to exercise or returning after a break.",
          instructor: "Mike Chen",
          duration: 180,
          lessons: 6,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
          video:
            "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          tags: ["beginner", "foundation", "full-body"],
          lessonsList: [
            {
              name: "Introduction to Fitness",
              duration: 25,
              completed: false,
              description:
                "Learn the basics of fitness and set realistic goals.",
            },
            {
              name: "Proper Form & Technique",
              duration: 30,
              completed: false,
              description:
                "Master the fundamental movements with correct form.",
            },
            {
              name: "Full Body Warm-up",
              duration: 20,
              completed: false,
              description: "Essential warm-up routine to prevent injuries.",
            },
            {
              name: "Core Strength Fundamentals",
              duration: 35,
              completed: false,
              description: "Build a strong core for stability and power.",
            },
            {
              name: "Cardio Basics",
              duration: 30,
              completed: false,
              description: "Introduction to cardiovascular exercise.",
            },
            {
              name: "Recovery & Flexibility",
              duration: 40,
              completed: false,
              description: "Learn proper cool-down and recovery techniques.",
            },
          ],
        },
        {
          id: 2,
          title: "Yoga for Stress Relief",
          description:
            "A gentle yoga course focused on reducing stress, improving flexibility, and promoting mindfulness.",
          instructor: "Sarah Johnson",
          duration: 120,
          lessons: 5,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
          video:
            "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          tags: ["yoga", "stress-relief", "flexibility"],
          lessonsList: [
            {
              name: "Breathing Techniques",
              duration: 20,
              completed: false,
              description: "Learn breathing exercises to calm the mind.",
            },
            {
              name: "Gentle Flow",
              duration: 25,
              completed: false,
              description: "Slow, mindful movements to release tension.",
            },
            {
              name: "Restorative Poses",
              duration: 30,
              completed: false,
              description: "Supported poses for deep relaxation.",
            },
            {
              name: "Meditation Basics",
              duration: 25,
              completed: false,
              description: "Introduction to meditation practice.",
            },
            {
              name: "Evening Wind-down",
              duration: 20,
              completed: false,
              description: "A perfect routine for before bedtime.",
            },
          ],
        },
        {
          id: 3,
          title: "Strength Training Mastery",
          description:
            "Advanced strength training techniques to build muscle, increase power, and improve overall performance.",
          instructor: "David Rodriguez",
          duration: 240,
          lessons: 8,
          difficulty: "advanced",
          image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b",
          video:
            "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          tags: ["strength", "muscle-building", "advanced"],
          lessonsList: [
            {
              name: "Program Design",
              duration: 30,
              completed: false,
              description: "Learn to create effective training programs.",
            },
            {
              name: "Compound Movements",
              duration: 35,
              completed: false,
              description: "Master the big lifts for maximum gains.",
            },
            {
              name: "Accessory Work",
              duration: 25,
              completed: false,
              description:
                "Target specific muscle groups for balanced development.",
            },
            {
              name: "Progressive Overload",
              duration: 30,
              completed: false,
              description: "Understand how to consistently make progress.",
            },
            {
              name: "Recovery Strategies",
              duration: 35,
              completed: false,
              description: "Optimize recovery for better performance.",
            },
            {
              name: "Nutrition for Strength",
              duration: 40,
              completed: false,
              description: "Fuel your body for optimal results.",
            },
            {
              name: "Mobility for Lifters",
              duration: 25,
              completed: false,
              description: "Maintain flexibility while building strength.",
            },
            {
              name: "Peaking for Performance",
              duration: 20,
              completed: false,
              description: "Prepare for maximum performance.",
            },
          ],
        },
      ];

      // ===== USER DATA & STATE =====
      let userStats = {
        completedWorkouts: 0,
        totalMinutes: 0,
        currentStreak: 0,
        caloriesBurned: 0,
      };

      // Course state
      let currentCourse = null;
      let courseTimerInterval = null;
      let courseStartTime = null;
      let coursePaused = false;

      // ===== DOM ELEMENTS =====
      // Course elements
      const courseCardsContainer = document.getElementById(
        "courseCardsContainer"
      );
      const videoCourseContainer = document.getElementById(
        "videoCourseContainer"
      );
      const courseVideo = document.getElementById("courseVideo");
      const courseVideoSource = document.getElementById("courseVideoSource");
      const courseTitle = document.getElementById("courseTitle");
      const courseDescription = document.getElementById("courseDescription");
      const courseDuration = document.getElementById("courseDuration");
      const courseLessons = document.getElementById("courseLessons");
      const courseDifficulty = document.getElementById("courseDifficulty");
      const courseLessonsList = document.getElementById("courseLessonsList");
      const courseTimer = document.getElementById("courseTimer");
      const closeCourseBtn = document.getElementById("closeCourseBtn");
      const pauseCourseBtn = document.getElementById("pauseCourseBtn");
      const finishCourseBtn = document.getElementById("finishCourseBtn");
      const rateCourseBtn = document.getElementById("rateCourseBtn");

      // ===== INITIALIZATION =====
      document.addEventListener("DOMContentLoaded", function () {
        loadUserStats();

        // BMI Calculator
        document
          .getElementById("calcBMI")
          .addEventListener("click", calculateBMI);

        // Nutrition Filters
        document
          .getElementById("typeFilter")
          .addEventListener("change", filterNutrition);
        document
          .getElementById("calorieFilter")
          .addEventListener("change", filterNutrition);

        // View Full Plan buttons
        document.querySelectorAll(".view-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            alert("🍽 Full Plan:\n\n" + this.getAttribute("data-fullplan"));
          });
        });

        // AI Coach
        document.getElementById("askBtn").addEventListener("click", askAI);

        // Course functionality
        closeCourseBtn.addEventListener("click", closeVideoCourse);
        pauseCourseBtn.addEventListener("click", toggleCoursePause);
        finishCourseBtn.addEventListener("click", finishCourse);
        rateCourseBtn.addEventListener("click", showRatingModal);

        // Rating modal functionality
        document
          .getElementById("cancelBtn")
          .addEventListener("click", closeRatingModal);
        document
          .getElementById("submitBtn")
          .addEventListener("click", submitRating);

        // Initialize courses when courses section is active
        if (document.getElementById("courses").classList.contains("visible")) {
          displayCourseCards();
        }
      });

      // ===== COURSE FUNCTIONS =====
      function displayCourseCards() {
        courseCardsContainer.innerHTML = courses
          .map(
            (course) => `
        <div class="col-md-6 col-lg-4">
          <div class="card course-card h-100">
            <img src="${course.image}" class="card-img-top" alt="${course.title}" style="height: 200px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text flex-grow-1">${course.description}</p>
              <div class="course-meta text-muted small mb-2">
                <div><i class="fas fa-user"></i> ${course.instructor}</div>
                <div><i class="fas fa-clock"></i> ${course.duration} min</div>
                <div><i class="fas fa-book"></i> ${course.lessons} Lessons</div>
                <div><i class="fas fa-signal"></i> ${course.difficulty}</div>
              </div>
              <button class="btn btn-primary w-100 view-course-btn" data-course-id="${course.id}">
                View Course
              </button>
            </div>
          </div>
        </div>
      `
          )
          .join("");

        // Add event listeners to course buttons
        document.querySelectorAll(".view-course-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            const courseId = parseInt(this.getAttribute("data-course-id"));
            startCourse(courseId);
          });
        });
      }

      function startCourse(courseId) {
        currentCourse = courses.find((c) => c.id === courseId);
        if (!currentCourse) return;

        // Set up the course player
        courseTitle.textContent = currentCourse.title;
        courseDescription.textContent = currentCourse.description;
        courseDuration.textContent = currentCourse.duration;
        courseLessons.textContent = currentCourse.lessons;
        courseDifficulty.textContent = currentCourse.difficulty;

        // Set video source
        courseVideoSource.src = currentCourse.video;
        courseVideo.load();

        // Set up lessons list
        courseLessonsList.innerHTML = currentCourse.lessonsList
          .map(
            (lesson) => `
        <div class="exercise-item">
          <div class="exercise-check ${lesson.completed ? "completed" : ""}">
            <i class="fas fa-${
              lesson.completed ? "check-circle" : "circle"
            }"></i>
          </div>
          <div class="exercise-info">
            <div class="exercise-name">${lesson.name}</div>
            <div class="exercise-duration">${lesson.duration} minutes</div>
          </div>
        </div>
      `
          )
          .join("");

        // Reset course state
        courseStartTime = new Date();
        coursePaused = false;
        pauseCourseBtn.textContent = "Pause";

        // Show the video course container
        videoCourseContainer.style.display = "block";

        // Start the timer
        startCourseTimer();

        // Play the video
        courseVideo.play().catch((e) => {
          console.log("Autoplay prevented:", e);
        });
      }

      function startCourseTimer() {
        if (courseTimerInterval) clearInterval(courseTimerInterval);

        courseTimerInterval = setInterval(() => {
          if (!coursePaused && courseStartTime) {
            const now = new Date();
            const elapsed = Math.floor((now - courseStartTime) / 1000);
            const totalSeconds = currentCourse.duration * 60;

            const elapsedMinutes = Math.floor(elapsed / 60);
            const elapsedSeconds = elapsed % 60;
            const remainingMinutes = Math.floor((totalSeconds - elapsed) / 60);
            const remainingSeconds = (totalSeconds - elapsed) % 60;

            courseTimer.textContent =
              `${String(elapsedMinutes).padStart(2, "0")}:${String(
                elapsedSeconds
              ).padStart(2, "0")} / ` +
              `${String(remainingMinutes).padStart(2, "0")}:${String(
                remainingSeconds
              ).padStart(2, "0")}`;

            // Check if course is completed
            if (elapsed >= totalSeconds) {
              finishCourse();
            }
          }
        }, 1000);
      }

      function toggleCoursePause() {
        if (coursePaused) {
          // Resume course
          coursePaused = false;
          pauseCourseBtn.textContent = "Pause";
          courseVideo.play();
        } else {
          // Pause course
          coursePaused = true;
          pauseCourseBtn.textContent = "Resume";
          courseVideo.pause();
        }
      }

      function finishCourse() {
        if (courseTimerInterval) {
          clearInterval(courseTimerInterval);
          courseTimerInterval = null;
        }

        // Update user stats
        userStats.completedWorkouts++;
        userStats.totalMinutes += currentCourse.duration;

        // Save and update stats
        saveUserStats();
        updateStatsDisplay();

        // Show completion message
        alert(
          `🎉 Congratulations! You've completed "${currentCourse.title}"!\n\nDuration: ${currentCourse.duration} minutes\nLessons: ${currentCourse.lessons}`
        );

        // Close the video course
        closeVideoCourse();
      }

      function closeVideoCourse() {
        if (courseTimerInterval) {
          clearInterval(courseTimerInterval);
          courseTimerInterval = null;
        }

        courseVideo.pause();
        videoCourseContainer.style.display = "none";
        currentCourse = null;
      }

      // ===== BMI CALCULATOR =====
      function calculateBMI() {
        const height =
          parseFloat(document.getElementById("height").value) / 100;
        const weight = parseFloat(document.getElementById("weight").value);
        if (!height || !weight) return alert("Enter valid height & weight!");

        const bmi = (weight / (height * height)).toFixed(2);
        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        document.getElementById("bmiValue").textContent = bmi;
        document.getElementById("bmiCategory").textContent = category;
        document.getElementById("bmiHeight").textContent =
          document.getElementById("height").value;
        document.getElementById("bmiWeight").textContent =
          document.getElementById("weight").value;
        document.getElementById("bmiCircleValue").textContent = bmi;

        // Animate circle progress
        const progress = Math.min((bmi / 40) * 565, 565);
        document.querySelector(".bmi-bar").style.strokeDashoffset =
          565 - progress;

        // Change color by BMI range
        const bmiBar = document.querySelector(".bmi-bar");
        if (bmi < 18.5) bmiBar.style.stroke = "#fdd835";
        else if (bmi < 25) bmiBar.style.stroke = "#43a047";
        else if (bmi < 30) bmiBar.style.stroke = "#fb8c00";
        else bmiBar.style.stroke = "#e53935";
      }

      // ===== NUTRITION FILTER =====
      function filterNutrition() {
        const type = document.getElementById("typeFilter").value;
        const cal = document.getElementById("calorieFilter").value;
        const cards = document.querySelectorAll(".nutrition-card");

        cards.forEach((card) => {
          const matchType = type === "all" || card.dataset.type === type;
          const matchCal = cal === "all" || card.dataset.calories === cal;
          card.parentElement.style.display =
            matchType && matchCal ? "block" : "none";
        });
      }

      // ===== AI COACH =====
      function askAI() {
        const question = document.getElementById("aiQuestion").value.trim();
        const responseBox = document.getElementById("aiResponse");
        if (question === "") return alert("Please ask a question!");

        responseBox.style.display = "block";
        responseBox.innerHTML = `<strong>You:</strong> ${question}<br><em>AI Coach:</em> Thinking... 🤔`;

        setTimeout(() => {
          responseBox.innerHTML = `<strong>You:</strong> ${question}<br><em>AI Coach:</em> Consistency is key! Stay hydrated and follow your plan 💪`;
        }, 1000);
      }

      // ===== RATING MODAL FUNCTIONS =====
      function showRatingModal() {
        document.getElementById("ratingModal").style.display = "block";
      }

      function closeRatingModal() {
        document.getElementById("ratingModal").style.display = "none";
      }

      function submitRating() {
        const stars = document.querySelectorAll(".star");
        let selectedRating = 0;

        stars.forEach((star) => {
          if (star.classList.contains("active")) {
            selectedRating = star.dataset.value;
          }
        });

        if (selectedRating === 0) {
          alert("Please select a star rating!");
          return;
        }

        alert(`Thank you for your ${selectedRating} star rating!`);
        closeRatingModal();

        // Reset stars
        stars.forEach((star) => star.classList.remove("active"));
        document.getElementById("reviewMsg").value = "";
      }

      // Add event listeners to stars
      document.addEventListener("DOMContentLoaded", function () {
        const stars = document.querySelectorAll(".star");
        stars.forEach((star) => {
          star.addEventListener("click", function () {
            const value = this.dataset.value;
            stars.forEach((s) => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
              stars[i].classList.add("active");
            }
          });
        });
      });

      // ===== STATISTICS MANAGEMENT =====
      function loadUserStats() {
        const savedStats = localStorage.getItem("fitnessStats");
        if (savedStats) {
          userStats = JSON.parse(savedStats);
          updateStatsDisplay();
        }
      }

      function saveUserStats() {
        localStorage.setItem("fitnessStats", JSON.stringify(userStats));
      }

      function updateStatsDisplay() {}

      // Comprehensive exercise database
      const exerciseDatabase = {
        cardio: [
          {
            name: "Walking",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["legs", "cardio"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Jogging",
            intensity: "moderate",
            impact: "moderate",
            equipment: "none",
            muscles: ["legs", "cardio"],
            ageMin: 15,
            ageMax: 70,
          },
          {
            name: "Running",
            intensity: "high",
            impact: "high",
            equipment: "none",
            muscles: ["legs", "cardio"],
            ageMin: 18,
            ageMax: 60,
          },
          {
            name: "Cycling",
            intensity: "moderate",
            impact: "low",
            equipment: "bike",
            muscles: ["legs", "cardio"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Swimming",
            intensity: "moderate",
            impact: "low",
            equipment: "pool",
            muscles: ["full-body", "cardio"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Jump Rope",
            intensity: "high",
            impact: "high",
            equipment: "rope",
            muscles: ["legs", "cardio"],
            ageMin: 15,
            ageMax: 55,
          },
          {
            name: "Elliptical",
            intensity: "moderate",
            impact: "low",
            equipment: "machine",
            muscles: ["legs", "cardio"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Rowing Machine",
            intensity: "high",
            impact: "low",
            equipment: "machine",
            muscles: ["full-body", "cardio"],
            ageMin: 18,
            ageMax: 75,
          },
          {
            name: "HIIT Intervals",
            intensity: "high",
            impact: "moderate",
            equipment: "none",
            muscles: ["full-body", "cardio"],
            ageMin: 20,
            ageMax: 50,
          },
        ],
        strength: [
          {
            name: "Bodyweight Squats",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["legs", "glutes"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Push-ups",
            intensity: "moderate",
            impact: "low",
            equipment: "none",
            muscles: ["chest", "arms"],
            ageMin: 15,
            ageMax: 100,
          },
          {
            name: "Lunges",
            intensity: "moderate",
            impact: "moderate",
            equipment: "none",
            muscles: ["legs", "glutes"],
            ageMin: 15,
            ageMax: 80,
          },
          {
            name: "Plank",
            intensity: "moderate",
            impact: "low",
            equipment: "none",
            muscles: ["core"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Dumbbell Press",
            intensity: "moderate",
            impact: "low",
            equipment: "weights",
            muscles: ["chest", "arms"],
            ageMin: 18,
            ageMax: 100,
          },
          {
            name: "Deadlifts",
            intensity: "high",
            impact: "moderate",
            equipment: "weights",
            muscles: ["back", "legs"],
            ageMin: 20,
            ageMax: 65,
          },
          {
            name: "Pull-ups",
            intensity: "high",
            impact: "low",
            equipment: "bar",
            muscles: ["back", "arms"],
            ageMin: 18,
            ageMax: 70,
          },
          {
            name: "Leg Press",
            intensity: "moderate",
            impact: "low",
            equipment: "machine",
            muscles: ["legs"],
            ageMin: 18,
            ageMax: 100,
          },
          {
            name: "Shoulder Press",
            intensity: "moderate",
            impact: "low",
            equipment: "weights",
            muscles: ["shoulders"],
            ageMin: 18,
            ageMax: 100,
          },
          {
            name: "Bicep Curls",
            intensity: "low",
            impact: "low",
            equipment: "weights",
            muscles: ["arms"],
            ageMin: 15,
            ageMax: 100,
          },
          {
            name: "Tricep Dips",
            intensity: "moderate",
            impact: "low",
            equipment: "none",
            muscles: ["arms"],
            ageMin: 18,
            ageMax: 75,
          },
          {
            name: "Burpees",
            intensity: "high",
            impact: "high",
            equipment: "none",
            muscles: ["full-body"],
            ageMin: 20,
            ageMax: 50,
          },
          {
            name: "Mountain Climbers",
            intensity: "high",
            impact: "moderate",
            equipment: "none",
            muscles: ["core", "cardio"],
            ageMin: 18,
            ageMax: 60,
          },
        ],
        flexibility: [
          {
            name: "Yoga Flow",
            intensity: "low",
            impact: "low",
            equipment: "mat",
            muscles: ["full-body"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Dynamic Stretching",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["full-body"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Hamstring Stretch",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["legs"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Quad Stretch",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["legs"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Cat-Cow Stretch",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["back"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Shoulder Rolls",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["shoulders"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Child's Pose",
            intensity: "low",
            impact: "low",
            equipment: "mat",
            muscles: ["back"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Pigeon Pose",
            intensity: "moderate",
            impact: "low",
            equipment: "mat",
            muscles: ["hips"],
            ageMin: 18,
            ageMax: 100,
          },
        ],
        lowImpact: [
          {
            name: "Wall Push-ups",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["chest", "arms"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Seated Leg Raises",
            intensity: "low",
            impact: "low",
            equipment: "chair",
            muscles: ["legs"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Arm Circles",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["shoulders"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Tai Chi",
            intensity: "low",
            impact: "low",
            equipment: "none",
            muscles: ["full-body"],
            ageMin: 0,
            ageMax: 100,
          },
          {
            name: "Water Aerobics",
            intensity: "low",
            impact: "low",
            equipment: "pool",
            muscles: ["full-body"],
            ageMin: 0,
            ageMax: 100,
          },
        ],
      };

      function calculateBMI(weight, height) {
        if (!weight || !height) return null;
        return (weight / (height / 100) ** 2).toFixed(1);
      }

      function getAgeCategory(age) {
        if (age < 25) return "young";
        if (age < 40) return "adult";
        if (age < 55) return "middle";
        return "senior";
      }

      function getIntensityModifier(age, health) {
        let modifier = 1;

        if (age > 50) modifier *= 0.85;
        if (age > 60) modifier *= 0.75;

        if (health !== "none") modifier *= 0.8;

        return modifier;
      }

      function selectExercises(userProfile) {
        const {
          age,
          gender,
          fitnessLevel,
          goal,
          health,
          workoutDays,
          workoutTime,
          weight,
          height,
        } = userProfile;

        let selectedExercises = [];
        let allExercises = [];

        // Build exercise pool based on goal
        switch (goal) {
          case "weight-loss":
            allExercises = [
              ...exerciseDatabase.cardio,
              ...exerciseDatabase.strength.filter((e) => e.intensity !== "low"),
            ];
            break;
          case "muscle-gain":
            allExercises = [...exerciseDatabase.strength];
            break;
          case "endurance":
            allExercises = [
              ...exerciseDatabase.cardio,
              ...exerciseDatabase.strength.filter((e) =>
                e.muscles.includes("cardio")
              ),
            ];
            break;
          case "flexibility":
            allExercises = [
              ...exerciseDatabase.flexibility,
              ...exerciseDatabase.lowImpact,
            ];
            break;
          case "general":
            allExercises = [
              ...exerciseDatabase.cardio,
              ...exerciseDatabase.strength,
              ...exerciseDatabase.flexibility,
            ];
            break;
        }

        // Filter by age appropriateness
        allExercises = allExercises.filter(
          (ex) => age >= ex.ageMin && age <= ex.ageMax
        );

        // Filter by health concerns
        if (health === "joint" || health === "back") {
          allExercises = allExercises.filter((ex) => ex.impact === "low");
        }
        if (health === "cardio") {
          allExercises = allExercises.filter((ex) => ex.intensity !== "high");
        }

        // Adjust by fitness level
        if (fitnessLevel === "beginner") {
          allExercises = allExercises.filter((ex) => ex.intensity !== "high");
        } else if (fitnessLevel === "advanced") {
          allExercises = allExercises.filter((ex) => ex.intensity !== "low");
        }

        // Calculate how many exercises to recommend
        const exerciseCount = Math.min(workoutTime / 10, allExercises.length);

        // Score and sort exercises
        allExercises.forEach((ex) => {
          let score = Math.random() * 10; // Add randomness for variety

          // Bonus for equipment-free (more accessible)
          if (ex.equipment === "none") score += 5;

          // Bonus for full-body exercises
          if (ex.muscles.includes("full-body")) score += 3;

          // Age-appropriate bonus
          const ageCategory = getAgeCategory(age);
          if (ageCategory === "senior" && ex.impact === "low") score += 8;
          if (ageCategory === "young" && ex.intensity === "high") score += 3;

          ex.score = score;
        });

        // Sort by score and select top exercises
        allExercises.sort((a, b) => b.score - a.score);
        selectedExercises = allExercises.slice(0, Math.ceil(exerciseCount));

        return selectedExercises;
      }

      function calculateSetsReps(exercise, userProfile) {
        const { age, fitnessLevel, workoutTime } = userProfile;
        const modifier = getIntensityModifier(age, userProfile.health);

        let sets, reps, duration;

        if (exercise.intensity === "low") {
          sets =
            fitnessLevel === "beginner"
              ? 2
              : fitnessLevel === "intermediate"
              ? 3
              : 4;
          reps = Math.round(
            (12 + (fitnessLevel === "advanced" ? 5 : 0)) * modifier
          );
        } else if (exercise.intensity === "moderate") {
          sets =
            fitnessLevel === "beginner"
              ? 3
              : fitnessLevel === "intermediate"
              ? 4
              : 5;
          reps = Math.round(
            (10 + (fitnessLevel === "advanced" ? 3 : 0)) * modifier
          );
        } else {
          sets =
            fitnessLevel === "beginner"
              ? 3
              : fitnessLevel === "intermediate"
              ? 4
              : 5;
          reps = Math.round(
            (8 + (fitnessLevel === "advanced" ? 2 : 0)) * modifier
          );
        }

        // For cardio exercises, use duration instead
        if (exercise.muscles.includes("cardio")) {
          duration =
            workoutTime < 45
              ? "15-20 min"
              : workoutTime < 60
              ? "20-30 min"
              : "30-40 min";
          return { sets: "1 session", reps: duration };
        }

        return { sets: `${sets} sets`, reps: `${reps} reps` };
      }

      function generatePersonalizationNote(userProfile) {
        const { age, gender, fitnessLevel, goal, health, weight, height } =
          userProfile;
        const bmi = calculateBMI(weight, height);

        let notes = [];

        if (age > 50) {
          notes.push(
            `Age-optimized exercises with lower impact for joint protection`
          );
        }

        if (health !== "none") {
          notes.push(`Modified exercises to accommodate ${health} concerns`);
        }

        if (bmi) {
          if (bmi < 18.5)
            notes.push(`Focus on strength building for healthy weight gain`);
          else if (bmi > 25)
            notes.push(`Cardio-focused routine for optimal calorie burn`);
        }

        if (fitnessLevel === "beginner") {
          notes.push(
            `Progressive overload approach for safe fitness development`
          );
        }

        return notes.length > 0
          ? `<strong>🎯 Why this plan:</strong> ${notes.join(". ")}.`
          : `<strong>🎯 Personalized for:</strong> Your ${fitnessLevel} level ${goal} goals.`;
      }

      function generateWorkout() {
        const age = parseInt(document.getElementById("age").value);
        const gender = document.querySelector('input[name="gender"]:checked');
        const weight =
          parseInt(document.getElementById("weight").value) || null;
        const height =
          parseInt(document.getElementById("height").value) || null;
        const fitnessLevel = document.getElementById("fitness-level").value;
        const goal = document.getElementById("goal").value;
        const health = document.getElementById("health").value;
        const workoutDays = parseInt(
          document.getElementById("workout-days").value
        );
        const workoutTime = parseInt(
          document.getElementById("workout-time").value
        );

        if (!age || !gender || !fitnessLevel || !goal) {
          alert("Please answer all required questions!");
          return;
        }

        const userProfile = {
          age,
          gender: gender.value,
          weight,
          height,
          fitnessLevel,
          goal,
          health,
          workoutDays,
          workoutTime,
        };

        const bmi = calculateBMI(weight, height);

        // User summary
        let userSummary = `
                <p><strong>Age:</strong> ${age} years | <strong>Gender:</strong> ${
          gender.value.charAt(0).toUpperCase() + gender.value.slice(1)
        }</p>
                <p><strong>Fitness Level:</strong> ${
                  fitnessLevel.charAt(0).toUpperCase() + fitnessLevel.slice(1)
                } | <strong>Goal:</strong> ${goal
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}</p>
                ${
                  bmi
                    ? `<p><strong>BMI:</strong> ${bmi} ${
                        bmi < 18.5
                          ? "(Underweight)"
                          : bmi < 25
                          ? "(Normal)"
                          : bmi < 30
                          ? "(Overweight)"
                          : "(Obese)"
                      }</p>`
                    : ""
                }
                <p><strong>Schedule:</strong> ${workoutDays} days/week, ${workoutTime} min/session</p>
            `;

        document.getElementById("user-summary").innerHTML = userSummary;

        // Generate personalization note
        const personalizationNote = generatePersonalizationNote(userProfile);
        document.getElementById("personalization-reason").innerHTML =
          personalizationNote;

        // Select exercises using AI logic
        const selectedExercises = selectExercises(userProfile);

        // Build workout HTML
        // let workoutHTML = '<h3>📋 Your Workout Plan</h3>';

        if (health !== "none") {
          workoutHTML += `<div class="workout-item" style="border-left-color: #ff9800;">
                    <h4>⚠️ Health Note</h4>
                    <p>Your plan has been adjusted for ${health} concerns. Always consult a healthcare provider before starting new exercises.</p>
                </div>`;
        }

        selectedExercises.forEach((exercise, index) => {
          const { sets, reps } = calculateSetsReps(exercise, userProfile);
          const intensityClass = exercise.intensity;

          workoutHTML += `
                    <div class="workout-item">
                        <h4>${index + 1}. ${exercise.name}</h4>
                        <span class="intensity-badge ${intensityClass}">${exercise.intensity.toUpperCase()} INTENSITY</span>
                        <p><strong>Sets:</strong> ${sets} | <strong>Reps/Duration:</strong> ${reps}</p>
                        <p><strong>Target:</strong> ${exercise.muscles.join(
                          ", "
                        )}</p>
                        <p><strong>Equipment:</strong> ${
                          exercise.equipment === "none"
                            ? "No equipment needed"
                            : exercise.equipment
                        }</p>
                    </div>
                `;
        });

        workoutHTML += `<div class="workout-item" style="background:#333b4e; border-left-color: #4caf50;">
                <h4>💡 Smart Training Tips</h4>
                <p>• Start each session with 5-10 min warm-up</p>
                <p>• Maintain proper form over speed</p>
                <p>• Rest 48 hours between muscle groups</p>
                <p>• Adjust intensity based on daily energy levels</p>
                <p>• Track progress weekly for motivation</p>
            </div>`;

        document.getElementById("workout-container").innerHTML = workoutHTML;

        // Show results
        const resultsDiv = document.getElementById("results");
        const questionnaireDiv = document.getElementById("questionnaire");

        questionnaireDiv.style.display = "none";
        resultsDiv.style.display = "block";
        resultsDiv.classList.remove("hidden");
      }

      function resetForm() {
        document.getElementById("age").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document
          .querySelectorAll('input[name="gender"]')
          .forEach((r) => (r.checked = false));
        document.getElementById("fitness-level").value = "";
        document.getElementById("goal").value = "";
        document.getElementById("health").value = "none";
        document.getElementById("workout-days").value = "3";
        document.getElementById("workout-time").value = "30";

        const resultsDiv = document.getElementById("results");
        const questionnaireDiv = document.getElementById("questionnaire");

        resultsDiv.style.display = "none";
        resultsDiv.classList.add("hidden");
        questionnaireDiv.style.display = "block";
        questionnaireDiv.classList.remove("hidden");
      }

      // ================= USER DASHBOARD JS =================
(function () {
  "use strict";

  const BACKEND_URL = "http://localhost:5000";

  function updateElement(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function clearProfile() {
    const fields = ["welcomeName", "userName", "userEmail", "userGoal", "userAge", "userHeight", "userWeight", "userGender", "userPhone"];
    fields.forEach(id => updateElement(id, "--"));
  }

  function capitalizeFirst(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // ---------------- LOAD PROFILE ----------------
  async function loadUserProfile() {
    const userId = localStorage.getItem("userId");
    if (!userId) { alert("Please login first"); window.location.href = "index.html"; return; }
    clearProfile();

    try {
      const res = await fetch(`${BACKEND_URL}/api/user/${userId}`);
      const data = await res.json();
      if (data.success && data.user) {
        const user = data.user;
        updateElement("welcomeName", user.full_name || "User");
        updateElement("userName", user.full_name || "N/A");
        updateElement("userEmail", user.email || "N/A");
        updateElement("userGoal", user.fitness_goal || "No goal set");
        updateElement("userAge", user.age || "--");
        updateElement("userHeight", user.height ? user.height + " cm" : "--");
        updateElement("userWeight", user.weight ? user.weight + " kg" : "--");
        updateElement("userGender", user.gender ? capitalizeFirst(user.gender) : "--");
        updateElement("userPhone", user.phone || "--");
      } else {
        clearProfile();
        alert("Failed to load profile");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      clearProfile();
      alert("Unable to connect to backend");
    }
  }

  // ---------------- EVENT LISTENERS ----------------
  function setupEventListeners() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", () => {
      localStorage.clear(); clearProfile(); window.location.href = "../index.html";
    });

    const editBtn = document.getElementById("editProfileBtn");
    if (editBtn) editBtn.addEventListener("click", () => {
      window.location.href = "edit_profile.html";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    loadUserProfile();
  });

})();


// ---------------- BMI Section ----------------
document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("Please login first.");
    window.location.href = "index.html";
    return;
  }

  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calcBtn = document.getElementById("calcBMI");

  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiCircleValue = document.getElementById("bmiCircleValue");
  const bmiHeight = document.getElementById("bmiHeight");
  const bmiWeight = document.getElementById("bmiWeight");
  const bmiTableBody = document.querySelector("#bmiTable tbody");
  const circle = document.querySelector(".bmi-bar");

  // ---------------- Helper: Update BMI Circle ----------------
  function updateBMICircle(bmi) {
    if (!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const percent = Math.min(bmi / 40, 1);
    const offset = circumference * (1 - percent);

    circle.style.transition = "stroke-dashoffset 1s ease, stroke 0.5s ease";
    circle.style.strokeDashoffset = offset;

    // Color-code based on category
    let color = "#2ecc71"; // normal
    if (bmi < 18.5) color = "#3498db";
    else if (bmi < 24.9) color = "#2ecc71";
    else if (bmi < 29.9) color = "#f39c12";
    else color = "#e74c3c";

    circle.style.stroke = color;
  }

  // ---------------- Load BMI History ----------------
  async function loadBMIHistory() {
    try {
      const res = await fetch(`http://localhost:5000/api/bmi/${userId}`);
      const data = await res.json();

      bmiTableBody.innerHTML = "";

      if (data.success && data.records.length > 0) {
        data.records.forEach((record) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${new Date(record.recorded_at).toLocaleDateString()}</td>
            <td>${record.bmi}</td>
            <td>${record.category}</td>
            <td>${record.height}</td>
            <td>${record.weight}</td>
          `;
          bmiTableBody.appendChild(tr);
        });
      } else {
        bmiTableBody.innerHTML = `<tr><td colspan="5">No BMI records yet</td></tr>`;
      }
    } catch (err) {
      console.error("Error loading BMI history:", err);
    }
  }

  loadBMIHistory();

  // ---------------- Calculate BMI & Save ----------------
  calcBtn.addEventListener("click", async () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight) {
      alert("Please enter valid height and weight.");
      return;
    }

    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // Update UI
    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
    bmiCircleValue.textContent = bmi;
    bmiHeight.textContent = height;
    bmiWeight.textContent = weight;

    updateBMICircle(bmi);

    // Save to backend
    try {
      const res = await fetch("http://localhost:5000/api/bmi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, height, weight, bmi, category }),
      });

      const data = await res.json();
      if (data.success) loadBMIHistory();
      else alert("Error saving BMI: " + data.message);
    } catch (err) {
      console.error("Error saving BMI:", err);
    }
  });
});
