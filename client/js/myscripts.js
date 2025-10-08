// Show Signup form (with Admin signup restriction)
function showSignup() {
  const role = document.getElementById("loginRole").value;

  if (role === "admin") {
    alert("Admin cannot sign up. Only users can sign up.");
    return;  // Do not open signup form if admin selected
  }

  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

// Show Login form
function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}
// Access the navLinks div
const navLinks = document.getElementById("navLinks");

// Function to show the side menu
function showMenu() {
  navLinks.style.right = "0";
}

// Function to hide the side menu
function hideMenu() {
  navLinks.style.right = "-200px";
}


  function showMenu() {
    navLinks.classList.add("show");
  }

  function hideMenu() {
    navLinks.classList.remove("show");
  }



// ================= SIGNUP =================
function signup() {
  // Get all signup fields
  const name           = document.getElementById("signupName").value.trim();
  const email          = document.getElementById("signupEmail").value.trim();
  const password       = document.getElementById("signupPassword").value.trim();
  const confirmPassword= document.getElementById("signupConfirmPassword").value.trim();
  const height         = document.getElementById("signupHeight").value.trim();
  const weight         = document.getElementById("signupWeight").value.trim();
  const age            = document.getElementById("signupAge").value.trim();
  const phone          = document.getElementById("signupPhone").value.trim();
  const gender         = document.getElementById("signupGender").value;
  const fitnessGoal    = document.getElementById("signupGoal").value;

  // Check required fields
  if (!name || !email || !password || !confirmPassword || !age || !gender || !fitnessGoal) {
    return alert("Please fill all required fields.");
  }

  // Password match check
  if (password !== confirmPassword) {
    return alert("Passwords do not match.");
  }

  // Password strength check
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return alert("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
  }

  // Optional: validate phone length if entered
  if (phone && !/^\d{10}$/.test(phone)) {
    return alert("Phone number must be 10 digits.");
  }

  // Prepare data to send (exclude confirmPassword)
  const data = {
    full_name: name,
    email,
    password,
    height: height || null,
    weight: weight || null,
    age,
    phone: phone || null,
    gender,
    fitness_goal: fitnessGoal
  };

  // Send POST request to backend
  fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.success) {
      alert("Signup successful! Please login.");
      showLogin(); // switch back to login form
    } else {
      alert(response.message);
    }
  })
  .catch(() => alert("Signup failed. Please try again."));
}


// ================= LOGIN =================
function login() {
  const email    = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const role     = document.getElementById("loginRole").value;

  if (!email || !password || !role) {
    return alert("Please fill all fields.");
  }

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Login successful!");
      setTimeout(() => {
        window.location.href = role === "admin"
          ? "/admin/admin_dashboard.html"
          : "/user/user_dashboard.html";
      }, 500);
    } else {
      alert(data.message);
    }
  })
  .catch(() => alert("Login error. Try again."));
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