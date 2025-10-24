// ==================== SHOW/HIDE FORMS ====================

// Show Signup Form
function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

// Show Login Form
function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Close Popup
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}

// ==================== SIGNUP ====================
async function signup() {
  const full_name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();
  const height = document.getElementById("signupHeight").value;
  const weight = document.getElementById("signupWeight").value;
  const age = document.getElementById("signupAge").value;
  const phone = document.getElementById("signupPhone").value;
  const gender = document.getElementById("signupGender").value;
  const fitness_goal = document.getElementById("signupGoal").value;

  // Required fields check
  if (!full_name || !email || !password || !confirmPassword || !age || !gender || !fitness_goal) {
    alert("Please fill all required fields!");
    return;
  }

  // Password match check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Password strength check
  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!pwRegex.test(password)) {
    alert("Password must be ≥8 chars, include uppercase, lowercase, number & special char");
    return;
  }

  // Send signup data to server
  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ full_name, email, password, height, weight, age, phone, gender, fitness_goal })
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      showLogin(); // show login form after successful signup
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}

// ==================== LOGIN ====================
async function login(event) {
  if (event) event.preventDefault();

  // Get input values
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // Validate required fields
  if (!email || !password) {
    alert("⚠️ Please fill all required fields!");
    return;
  }

  try {
    console.log("🚀 Sending login request to backend...");

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Handle cases like 401 or 500 from backend
      const errorText = await response.text();
      console.error("❌ Backend returned an error:", errorText);
      alert("Login failed! Please check your credentials.");
      return;
    }

    const data = await response.json();
    console.log("📦 Login response received:", data);

    // ✅ Ensure backend sent user ID
    if (data.success && data.id) {
      // Save essential data in localStorage
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userName", data.full_name || "User");
      localStorage.setItem("userEmail", data.email || "");

      alert(`✅ Login successful! Welcome, ${data.full_name || "User"}!`);

      // Redirect to dashboard
      window.location.href = "/user/user_dashboard.html";
    } else {
      console.warn("⚠️ Backend did not return user ID or success flag.");
      alert(data.message || "Invalid login response from server.");
    }
  } catch (error) {
    console.error("❌ Network or server error:", error);
    alert("Unable to connect to backend. Please make sure it's running on port 5000.");
  }
}





function openForm(title, description) {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function showDetails(plan) {
  let details = {
      "weightLoss": `
          <h2>Weight Loss Plan</h2>
          <p>A well-balanced diet focusing on calorie deficit while ensuring essential nutrients.</p>
          <h3>Recommended Foods:</h3>
          <ul>
              <li>Leafy greens (Spinach, Kale)</li>
              <li>Lean proteins (Chicken breast, Fish)</li>
              <li>Whole grains (Brown rice, Quinoa, Oats)</li>
              <li>Fruits & Vegetables (Berries, Apples, Carrots)</li>
          </ul>
          <h3>Diet Tip:</h3>
          <p>Eat smaller, frequent meals and stay hydrated. Avoid processed foods and excess sugar.</p>
      `,
      "muscleGain": `
          <h2>Muscle Gain Plan</h2>
          <p>High-protein diet designed to build and repair muscles after workouts.</p>
          <h3>Recommended Foods:</h3>
          <ul>
              <li>Lean meats (Chicken, Beef, Turkey)</li>
              <li>Eggs and Dairy (Greek Yogurt, Cottage Cheese)</li>
              <li>Complex Carbs (Sweet potatoes, Brown rice, Whole wheat bread)</li>
              <li>Healthy Fats (Nuts, Avocados, Olive oil)</li>
          </ul>
          <h4>Diet Tip:</h4>
          <p>Combine protein intake with strength training for best muscle gain results.</p>
      `
  };

  document.getElementById("nutritionInfo").innerHTML = details[plan];
  document.getElementById("nutritionDetails").style.display = "block";
}


function closeDetails() {
  document.getElementById("nutritionDetails").style.display = "none";
}
// ================ Show/Hide Login Popup (Optional if you have Popup) ================

// Open popup
function showLoginForm() {
  document.getElementById("loginPopup").style.display = "block";
  showLogin(); // Always show login form first when popup opens
}

// Close popup
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}