
// function showSection(sectionId) {
//   let sections = document.querySelectorAll(".section");
//   sections.forEach(section => section.style.display = "none");

//   document.getElementById(sectionId).style.display = "block";
// }


// // document.getElementById('logoutBtn').addEventListener('click', function() {
// //     // Clear any user session (optional, if stored in localStorage/sessionStorage)
// //     localStorage.removeItem('userId');
// //     localStorage.removeItem('userRole');

// //     // Redirect to original dashboard or login page
// //     window.location.href = 'http://localhost:5000/';  // replace with your original dashboard URL
// // });

// // // ================= BMI CALCULATION =================
// function calculateBMI() {
//     let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
//     let weight = parseFloat(document.getElementById("weight").value);

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//         alert("Please enter valid height and weight values.");
//         return;
//     }

//     let bmi = (weight / (height * height)).toFixed(2);
//     document.getElementById("bmiResult").innerText = bmi;

//     let status = "";
//     if (bmi < 18.5) {
//         status = "Underweight";
//         showWeightGainWorkouts();
//     } else if (bmi < 24.9) {
//         status = "Normal weight";
//         showGeneralWorkouts();
//     } else {
//         status = "Overweight";
//         showWeightLossWorkouts();
//     }

//     document.getElementById("bmiStatus").innerText = status;

//     // Store BMI status in localStorage
//     localStorage.setItem("bmiStatus", status);

//     // Load recommended courses immediately
//     loadCourses();

//     // Send data to server if needed
//     const targetWeightInput = parseFloat(document.getElementById("targetWeight").value);
//     sendDataToServer(height, weight, targetWeightInput, bmi, status);
// } 
  


// document.querySelector('button[onclick="calculateBMI()"]').addEventListener("click", function () {
//     setTimeout(() => {
//       const height = document.getElementById("height").value;
//       const weight = document.getElementById("weight").value;
//       const targetWeight = document.getElementById("targetWeight").value; // ✅ correct ID
//       const bmi = document.getElementById("bmiResult").innerText;
//       const status = document.getElementById("bmiStatus").innerText;
  
//       if (height && weight && bmi !== "--" && status !== "--") {
//         addToProfilesTable(height, weight, targetWeight, bmi, status); // ✅ pass correct variable
//         const user_id = 1; // 🔁 Replace with dynamic value if needed
//         sendDataToServer(user_id, height, weight, targetWeight, bmi, status); // ✅ call API
//       }
//     }, 100);
//   });
  
// function addToProfilesTable(height, weight, targetWeight, bmi, status) {
//     const tableBody = document.querySelector("#profilesTable tbody");
  
//     const newRow = document.createElement("tr");
//     newRow.style.color = "black";
  
//     newRow.innerHTML = `
//       <td>${height}</td>
//       <td>${weight}</td>
//       <td>${targetWeight}</td>
//       <td>${bmi}</td>
//       <td>${status}</td>
//     `;
  
//     tableBody.appendChild(newRow);
//   }


// function showWeightGainWorkouts() {
//   document.getElementById("workout").innerHTML = `
//       <h2 style="color: white;">Workouts for Weight Gain</h2>
//       <ul style="color: white;">
//           <li>Strength Training (3-4 times a week)</li>
//           <li>Calisthenics (Push-ups, Squats, Pull-ups)</li>
//           <li>Progressive Overload Training</li>
//           <li>High-Calorie Diet Plan</li>
//       </ul>
//       <h3 style="color: white;">Recommended Exercises:</h3>
//       <ol style="color: white;">
//           <li><b>Pull-ups:</b> Perform 3 sets of 6-10 reps.</li>
//           <video width="320" height="240" controls>
//               <source src="../Videos/pullups.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
          
//           <li><b>Push-ups:</b> Perform 3 sets of 12-15 reps.</li>
//           <video width="320" height="240" controls>
//               <source src="../Videos/pushups.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>

//           <li><b>Squats:</b> Perform 3 sets of 10-15 reps.</li>
//           <video width="320" height="240" controls>
//               <source src="../Videos/squat.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//       </ol>
//   `;
// }

// function showGeneralWorkouts() {
//   document.getElementById("workout").innerHTML = `
//       <h2 style="color: white;">General Fitness Workouts</h2>
//       <ul style="color: white;">
//           <li>Cardio (Running, Cycling, Swimming)</li>
//           <li>Full-Body Strength Training</li>
//           <li>Flexibility Exercises (Yoga, Stretching)</li>
//       </ul>
      
     
// <h3 style="color: white; text-align: center;">Recommended Workout:</h3>
//       <img src="../Images/yoga.jpg" alt="Yoga Workout" width="400" height="250" 
//            style="display: block; margin: 10px auto; border-radius: 10px;">
//             <video width="320" height="240" controls>
//               <source src="../Videos/sprints.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//           <video width="320" height="240" controls>
//               <source src="../Videos/cycling.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//       `;
// }
// function showWeightLossWorkouts() {
//   document.getElementById("workout").innerHTML = `
//       <h2>Workouts for Weight Loss</h2>
//       <ul style="color: white;">
//           <li>HIIT Workouts</li>
//           <li>Cardio (Jump Rope, Running, Cycling)</li>
//           <li>Strength Training (Fat-Burning Focus)</li>
//           <li>Caloric Deficit Diet</li>
//       </ul>
//       <h3>Watch this weight loss workout guide:</h3>
//       <video width="320" height="240" controls>
//               <source src="../Videos/jump_rope.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//            <video width="320" height="240" controls>
//               <source src="../Videos/deadlift.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//   `;
// }

// function showSection(sectionId) {
//   document.querySelectorAll(".section").forEach(section => section.style.display = "none");
//   document.getElementById(sectionId).style.display = "block";
// }

// // function updateNutritionPlan() {
// //   let bmi = parseFloat(document.getElementById("bmiResult").innerText);
// //   let nutritionDetails = document.getElementById("nutritionDetails");

// //   if (!bmi) {
// //       nutritionDetails.innerHTML = `<p>Please calculate your BMI first.</p>`;
// //       return;
// //   }

// //   let planTitle = "";
// //   let mealPlans = [];

// //   // Determine the meal plan based on the BMI value
// //   if (bmi < 18.5) {
// //       planTitle = "Weight Gain Meal Plan";
// //       mealPlans = [
// //           { food: "Oatmeal with peanut butter & banana", calories: "450 kcal", image: "../Images/peanut.jpg" },
// //           { food: "Nuts & Greek yogurt", calories: "300 kcal", image: "../Images/yogrt.jpg" }
// //       ];
// //   }
// //   else if (bmi < 24.9) {
// //       planTitle = "Balanced Nutrition Meal Plan";
// //       mealPlans = [
// //           { food: "Scrambled eggs with whole-grain toast", calories: "350 kcal", image: "../Images/egg.jpg" },
// //           { food: "Hummus & veggie sticks", calories: "250 kcal", image: "../Images/vegstcik.jpg" }
// //       ];
// //   } else {
// //       planTitle = "Weight Loss Meal Plan";
// //       mealPlans = [
// //           { food: "Smoothie with spinach, banana & almond milk", calories: "300 kcal", image: "../Images/ALmond.jpg" },
// //           { food: "Grilled chicken salad with olive oil dressing", calories: "400 kcal", image: "../Images/Grilled.jpg" }
// //       ];
// //   }

// //   // Generate HTML for the meal plans
// //   let mealPlanHTML = `<h3>${planTitle}</h3><div class="meal-plan-container">`;

// //   mealPlans.forEach(meal => {
// //       mealPlanHTML += `
// //           <div class="meal-card">
// //               <img src="${meal.image}" alt="${meal.food}" class="meal-image">
// //               <p class="meal-name">${meal.food}</p>
// //               <p class="meal-calories">Calories: ${meal.calories}</p>
// //           </div>
// //       `;
// //   });

// //   mealPlanHTML += `</div>`;
// //   nutritionDetails.innerHTML = mealPlanHTML;
// // }




// // Function to get BMI category
// function getBMICategory(bmi) {
//     if (bmi < 18.5) return "Underweight";
//     if (bmi >= 18.5 && bmi < 25) return "Normal";
//     return "Overweight";
// }


// async function updateNutritionPlan() {
//     const userBmiCategory = localStorage.getItem("bmiCategory") || "Normal";
//     const type = document.getElementById("typeSelect").value;
//     const container = document.getElementById("nutritionDetails");

//     container.innerHTML = "<p>Loading your personalized plan...</p>";

//     try {
//        const res = await fetch(`http://localhost:5000/nutrition-plan?bmi_category=${userBmiCategory}&type=${type}`);

//         const data = await res.json();

//         if (!data.success || !data.plan || data.plan.length === 0) {
//             container.innerHTML = "<p>No nutrition plan found.</p>";
//             return;
//         }

//         container.innerHTML = ""; // clear old

//         // Group meals by day
//         const days = {};
//         data.plan.forEach(meal => {
//             if (!days[meal.day]) days[meal.day] = [];
//             days[meal.day].push(meal);
//         });

//         // Create table
//         const table = document.createElement("table");
//         table.className = "nutrition-table";

//         // Header
//         const thead = document.createElement("thead");
//         const headerRow = document.createElement("tr");
//         ["Day", "Meal", "Description"].forEach(text => {
//             const th = document.createElement("th");
//             th.innerText = text;
//             headerRow.appendChild(th);
//         });
//         thead.appendChild(headerRow);
//         table.appendChild(thead);

//         // Body
//         const tbody = document.createElement("tbody");
//         Object.keys(days).forEach(dayNum => {
//             const dayMeals = days[dayNum];

//             const tr = document.createElement("tr");

//             // Day column
//             const tdDay = document.createElement("td");
//             tdDay.innerText = dayNum;
//             tr.appendChild(tdDay);

//             // Meal column
//             const tdMeal = document.createElement("td");
//             tdMeal.innerText = dayMeals.map(m => m.meal_category).join(", ");
//             tr.appendChild(tdMeal);

//             // Description column
//             const tdDesc = document.createElement("td");
//             tdDesc.innerText = dayMeals.map(m => m.meal_description).join(" | ");
//             tr.appendChild(tdDesc);

//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         container.appendChild(table);

//     } catch (err) {
//         console.error("Error fetching nutrition plan:", err);
//         container.innerHTML = "<p>Error loading plan. Try again later.</p>";
//     }
// }





// function showSection(sectionId) {
//   const sections = document.querySelectorAll(".section");
//   sections.forEach(section => section.style.display = "none");
//   document.getElementById(sectionId).style.display = "block";
// }
// function openForm(title, content) {
//   alert(title + "\n\n" + content);}







// // ==================== LOAD COURSES ====================
// async function loadCourses() {
//     const bmiStatus = localStorage.getItem("bmiStatus"); 
//     const userId = localStorage.getItem("userId");       
//     const container = document.getElementById("courses-container");

//     container.innerHTML = "";
//     container.style.padding = "20px";
//     container.style.borderRadius = "10px";
//     container.style.textAlign = "center";
//     container.style.display = "flex";
//     container.style.flexDirection = "column";
//     container.style.justifyContent = "flex-start";
//     container.style.alignItems = "center";
//     container.style.color = "white";

//     if (!bmiStatus) {
//         container.innerHTML = `<p style="font-size:18px; color:white; text-align:center;">
//             Please calculate your BMI first to see recommended courses.
//         </p>`;
//         return;
//     }

//     try {
//         const res = await fetch("http://localhost:5000/course");
//         const data = await res.json();

//         if (!data.success || data.courses.length === 0) {
//             container.innerHTML = `<p style="font-size:18px; color:white; text-align:center;">
//                 No courses available right now.
//             </p>`;
//             return;
//         }

//         const recommendedCourses = data.courses.filter(course => course.bmi_category === bmiStatus);

//         if (recommendedCourses.length === 0) {
//             container.innerHTML = `<p style="font-size:18px; color:white; text-align:center;">
//                 No recommended courses for your BMI status: <b>${bmiStatus}</b>
//             </p>`;
//             return;
//         }

//         const heading = document.createElement("h2");
//         heading.innerText = "Recommended Courses for You";
//         heading.style.color = "white";
//         heading.style.marginBottom = "20px";
//         container.appendChild(heading);

//         // Fetch user progress
//         let progressData = [];
//         if (userId) {
//             try {
//                 const progressRes = await fetch(`http://localhost:5000/progress/${userId}`);
//                 const progressJson = await progressRes.json();
//                 if (progressJson.success) progressData = progressJson.progress;
//             } catch (err) {
//                 console.error("Error fetching progress:", err);
//             }
//         }

//         window.players = {};

//         recommendedCourses.forEach(course => {
//             const card = document.createElement("div");
//             card.classList.add("course-card");
//             card.style.backgroundColor = "#222";
//             card.style.border = "1px solid #444";
//             card.style.borderRadius = "10px";
//             card.style.padding = "15px";
//             card.style.margin = "15px";
//             card.style.textAlign = "center";
//             card.style.width = "350px";
//             card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
//             card.style.color = "white";
//             card.style.transition = "transform 0.3s, box-shadow 0.3s";

//             card.onmouseenter = () => {
//                 card.style.transform = "translateY(-5px)";
//                 card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.6)";
//             };
//             card.onmouseleave = () => {
//                 card.style.transform = "translateY(0)";
//                 card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
//             };

//             const userProgress = progressData.find(p => p.course_id === course.course_id);
//             const progressPercentage = userProgress ? userProgress.progress_percentage : 0;

//             card.innerHTML = `
//                 <!-- YouTube player container -->
//                 <div id="player-${course.course_id}" style="width:100%; height:200px;"></div>
//                 <h3 style="color:white; margin-top:10px;">${course.title}</h3>
//                 <p style="color:white; font-size:14px;">${course.description}</p>

//                 <!-- Progress Bar -->
//                 <div style="margin-top:10px;">
//                     <div style="background:#444; border-radius:8px; width:100%; height:15px; position:relative;">
//                         <div class="progress-bar" id="progress-${course.course_id}" 
//                              style="background:#4caf50; height:100%; width:${progressPercentage}%; border-radius:8px;">
//                         </div>
//                     </div>
//                     <p id="progress-text-${course.course_id}" style="font-size:13px; color:#ddd; margin-top:5px;">
//                         ${progressPercentage}% completed
//                     </p>
//                 </div>
//             `;
//             container.appendChild(card);
//         });

      
//         if (window.YT && window.YT.Player) initYouTubePlayers(recommendedCourses, userId);

//     } catch (error) {
//         console.error("❌ Error loading courses:", error);
//         container.innerHTML = `<p style="font-size:18px; color:red; text-align:center;">
//             Failed to load courses.
//         </p>`;
//     }
// }

// function initYouTubePlayers(courses, userId) {
//     courses.forEach(course => {
//         const player = new YT.Player(`player-${course.course_id}`, {
//             videoId: extractVideoId(course.video_url),
//             events: {
//                 'onStateChange': (event) => trackProgress(event, course.course_id, userId)
//             }
//         });
//         window.players[course.course_id] = player;
//     });
// }

// function extractVideoId(url) {
//     const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
//     return match ? match[1] : '';
// }

// window.progressIntervals = {};

// function trackProgress(event, courseId, userId) {
//     if(event.data === YT.PlayerState.PLAYING) {
//         const player = window.players[courseId];
//         const interval = setInterval(async () => {
//             if(player.getPlayerState() !== YT.PlayerState.PLAYING) {
//                 clearInterval(interval);
//                 return;
//             }

//             const currentTime = player.getCurrentTime();
//             const duration = player.getDuration();
//             const progressPercentage = Math.floor((currentTime / duration) * 100);

            
//             const bar = document.getElementById(`progress-${courseId}`);
//             const text = document.getElementById(`progress-text-${courseId}`);
//             if(bar) bar.style.width = `${progressPercentage}%`;
//             if(text) text.innerText = `${progressPercentage}% completed`;

//             try {
//                 const res = await fetch("http://localhost:5000/progress/update", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ userId, courseId, progress: progressPercentage, lastWatchedTime: currentTime })
//                 });
//                 const data = await res.json();
//                 console.log("Progress saved:", data);
//             } catch (err) {
//                 console.error("Error saving progress:", err);
//             }
//         }, 5000);
//     }
// }

// async function loadProgress(userId) {
//     const res = await fetch(`http://localhost:5000/progress/${userId}`);
//     const data = await res.json(); // Expected format: [{ course_id, progress_percentage, last_watched_time }, ...]
    
//     if (data.success && data.progress) {
//         data.progress.forEach(p => {
//             const bar = document.getElementById(`progress-${p.course_id}`);
//             const text = document.getElementById(`progress-text-${p.course_id}`);
//             if (bar) bar.style.width = `${p.progress_percentage}%`;
//             if (text) text.innerText = `${p.progress_percentage}% completed`;

//             // Resume video
//             if (window.players[p.course_id]) {
//                 window.players[p.course_id].seekTo(p.last_watched_time, true);
//             }
//         });
//     }
// }


// window.addEventListener("beforeunload", async () => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     for (const courseId in window.players) {
//         const player = window.players[courseId];
//         if (player && typeof player.getCurrentTime === "function") {
//             const currentTime = player.getCurrentTime();
//             const duration = player.getDuration();
//             const progressPercentage = Math.floor((currentTime / duration) * 100);

//             await fetch("http://localhost:5000/progress/update", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     userId,
//                     courseId,
//                     progress: progressPercentage,
//                     lastWatchedTime: currentTime
//                 })
//             });
//         }
//     }
// });

// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden") {
//         window.dispatchEvent(new Event("beforeunload"));
//     }
// });
// const video = document.getElementById('myVideo');
// const userId = 1;       // Logged-in user ID
// const courseId = 101;   // Current course/video ID

// // Send progress every 5 seconds
// setInterval(() => {
//     const progress = (video.currentTime / video.duration) * 100;
//     const lastWatched = video.currentTime;

//     fetch('http://localhost:5000/progress', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             user_id: userId,
//             course_id: courseId,
//             progress_percentage: progress.toFixed(2),
//             last_watched_time: lastWatched.toFixed(2)
//         })
//     }).then(res => res.json())
//       .then(data => console.log('Progress saved:', data))
//       .catch(err => console.error('Error saving progress:', err));
// }, 5000);


// // Send progress every 5 seconds
// setInterval(() => {
//     const progress = (video.currentTime / video.duration) * 100;
//     const lastWatched = video.currentTime;

//     fetch('http://localhost:5000/progress', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             user_id: userId,
//             course_id: courseId,
//             progress_percentage: progress.toFixed(2),
//             last_watched_time: lastWatched.toFixed(2)
//         })
//     }).then(res => res.json())
//       .then(data => console.log('Progress saved:', data))
//       .catch(err => console.error('Error saving progress:', err));
// }, 2000);


// document.addEventListener("DOMContentLoaded", loadCourses);

// document.addEventListener("DOMContentLoaded", () => {
//     const logoutBtn = document.querySelector('.logout-btn'); // select by class
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', function() {
//             // Clear user session
//             localStorage.removeItem('userId');
//             localStorage.removeItem('userRole');

//             // Redirect to login page
//             window.location.href = 'http://localhost:5000/';
//         });
//     } else {
//         console.error("Logout button not found!");
//     }
// });





















// Load Chart.js
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

let bmiChartInstance;
let currentBMI = '--';
let currentCategory = '--';

script.onload = () => {
  const ctx = document.getElementById('bmiChart').getContext('2d');

  // 🟢 Custom plugin to draw text inside the doughnut
  const centerTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea: { width, height } } = chart;
      ctx.save();
      ctx.font = 'bold 24px Inter';
      ctx.fillStyle = '#0ab17b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(currentBMI, width / 2, height / 2 - 10);

      ctx.font = '14px Inter';
      ctx.fillStyle = '#666';
      ctx.fillText(currentCategory, width / 2, height / 2 + 15);
      ctx.restore();
    }
  };

  // Create Chart
  bmiChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['BMI', 'Remaining'],
      datasets: [{
        data: [0, 40],
        backgroundColor: ['#0ab17b', '#e0e0e0'],
        cutout: '75%',
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    },
    plugins: [centerTextPlugin]  // ✅ Added plugin
  });
};

// BMI Calculation
document.getElementById('calcBMI').addEventListener('click', () => {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) {
    alert('Please enter valid height and weight!');
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  // Update text shown outside as well
  document.getElementById('bmiValue').textContent = bmi;
  document.getElementById('bmiCategory').textContent = category;
  document.getElementById('bmiHeight').textContent = height;
  document.getElementById('bmiWeight').textContent = weight;

  // Update center text for the plugin
  currentBMI = bmi;
  currentCategory = category;

  // Update doughnut chart dynamically
  const value = Math.min(bmi, 40);
  if (bmiChartInstance) {
    bmiChartInstance.data.datasets[0].data = [value, 40 - value];
    bmiChartInstance.update();
  }
});

//Courses Sec
const lessons = [
  {
    title: "Introduction to Fitness",
    duration: "15 min",
    description: "Understanding the basics of fitness and setting realistic goals.",
    video: "videos/intro.mp4"
  },
  {
    title: "Proper Form and Technique",
    duration: "25 min",
    description: "Learn how to perform exercises safely and effectively.",
    video: "videos/form.mp4"
  },
  {
    title: "Creating Your Workout Plan",
    duration: "20 min",
    description: "Build a workout routine that fits your lifestyle and goals.",
    video: "videos/workout-plan.mp4"
  },
  {
    title: "Nutrition Fundamentals",
    duration: "30 min",
    description: "Basic nutrition tips for fueling your fitness journey.",
    video: "videos/nutrition.mp4"
  },
  {
    title: "Recovery and Rest",
    duration: "15 min",
    description: "The importance of rest and recovery in your fitness routine.",
    video: "videos/recovery.mp4"
  },
  {
    title: "Tracking Your Progress",
    duration: "20 min",
    description: "How to monitor and measure your progress effectively.",
    video: "videos/progress.mp4"
  }
];

const courseCardView = document.getElementById("courseCardView");
const courseDetailView = document.getElementById("courseDetailView");
const viewCourseBtn = document.getElementById("viewCourseBtn");
const backBtn = document.getElementById("backBtn");
const lessonList = document.getElementById("lessonList");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const lessonDescription = document.getElementById("lessonDescription");

// Show course detail view on click
viewCourseBtn.addEventListener("click", () => {
  courseCardView.style.display = "none";
  courseDetailView.style.display = "block";
});

// Go back to card view
backBtn.addEventListener("click", () => {
  courseDetailView.style.display = "none";
  courseCardView.style.display = "block";
  videoPlayer.pause();
  videoSource.src = "";
  videoPlayer.load();
  lessonDescription.textContent = "Select a lesson to view details here.";
});

// Load lessons dynamically
lessons.forEach((lesson, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>▶ ${lesson.title}</span> <span>${lesson.duration}</span>`;
  
  li.addEventListener("click", () => {
    videoSource.src = lesson.video;
    videoPlayer.load();
    videoPlayer.play();
    lessonDescription.innerHTML = `<strong>Lesson ${index + 1}: ${lesson.title}</strong><br><br>${lesson.description}`;
  });
  
  lessonList.appendChild(li);
});

// // Rate button
// document.getElementById("rateBtn").addEventListener("click", () => {
//   alert("Thank you for rating the course! 🌟");
// });


const rateBtn = document.getElementById("rateBtn");
const modal = document.getElementById("ratingModal");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const stars = document.querySelectorAll(".star");

let rating = 5; // default all 5 stars filled

// Open Modal
rateBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  updateStars();
});

// Close Modal
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Handle Star Click
stars.forEach(star => {
  star.addEventListener("click", () => {
    rating = star.getAttribute("data-value");
    updateStars();
  });
});

// Update star colors
function updateStars() {
  stars.forEach(star => {
    star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "#ccc";
  });
}

// ✅ Submit rating (without alert)
submitBtn.addEventListener("click", () => {
  const review = document.getElementById("reviewMsg").value.trim();
  modal.style.display = "none";
  document.getElementById("reviewMsg").value = "";

  // Create a small “Thank You” message
  const message = document.createElement("div");
  message.className = "rating-message";
  message.innerText = "⭐ Thanks for rating!";

  document.body.appendChild(message);

  // Fade out after 2 seconds
  setTimeout(() => {
    message.style.opacity = "0";
  }, 2000);

  // Remove completely after fade-out
  setTimeout(() => {
    message.remove();
  }, 2800);
});
