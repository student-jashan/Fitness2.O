// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const path = require('path');
// const nodemailer = require("nodemailer");
// // Twilio setup
// const twilio = require('twilio');
// const accountSid = "AC981630e8322be3d70991337efdefc060";  // Your Account SID
// const authToken = "f883f7624cfdf4d2c546312d5121e403";     // Your Auth Token
// const TWILIO_NUMBER = "+19034748132";                     // Your Twilio number
// const client = twilio(accountSid, authToken);

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../client')));

// // MySQL Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'fitness_freak',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('✅ Connected to MySQL');
// });

// // Root Route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// // // ==================== TEST ROUTE ====================
// // app.post('/test-body', (req, res) => {
// //   console.log('Request Body:', req.body);
// //   res.json({ received: req.body });
// // });

// // ==================== AUTHENTICATION ====================

// // // Signup
// // app.post('/signup', (req, res) => {
// //   const { name, age, gender, email, password } = req.body;

// //   if (!name || !age || !gender || !email || !password) {
// //     return res.status(400).json({ success: false, message: 'Please fill all fields' });
// //   }

// //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //   if (!passwordRegex.test(password)) {
// //     return res.status(400).json({
// //       success: false,
// //       message: 'Password must include uppercase, lowercase, number, and special character.',
// //     });
// //   }

// //   db.query('SELECT 1 FROM users WHERE email = ?', [email], (err, results) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Database error' });
// //     if (results.length) {
// //       return res.status(409).json({ success: false, message: 'Email already registered' });
// //     }

// //     const sql = `INSERT INTO users (name, age, gender, email, password, role)
// //                  VALUES (?, ?, ?, ?, ?, 'user')`;
// //     db.query(sql, [name, age, gender, email, password], (err2) => {
// //       if (err2) return res.status(500).json({ success: false, message: 'Signup failed' });
// //       res.status(201).json({ success: true, message: 'Signup successful' });
// //     });
// //   });
// // });
// // ==================== EMAIL SETUP (Mailtrap) ====================
// // const transporter = nodemailer.createTransport({
// //   host: "sandbox.smtp.mailtrap.io",
// //   port: 2525,
// //   auth: {
// //     user: "c1f6d86dfb806e",   // 👉 your Mailtrap username
// //     pass: "239a25087afee5" // 👉 your Mailtrap password
// //   }
// // });

// // // Function to send mail
// // function sendEmail(to, subject, message) {
// //   const mailOptions = {
// //     from: "Fitness Freak <no-reply@fitnessfreak.com>",
// //     to,
// //     subject,
// //     text: message
// //   };

// //   transporter.sendMail(mailOptions, (err, info) => {
// //     if (err) {
// //       console.error("❌ Email failed:", err);
// //     } else {
// //       console.log("✅ Email sent:", info.response);
// //     }
// //   });
// // }


// // ==================== EMAIL SETUP (Gmail SMTP) ====================


// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "jashn496767@gmail.com",        
//     pass: "nfct gyfh lmqs uqel"           
//   }
// });


// function sendEmail(to, subject, message) {
//   const mailOptions = {
//     from: "Fitness Freak <jashn496767@gmail.com>",  
//     to,
//     subject,
//     text: message
//   };

//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.error("❌ Email failed:", err);
//     } else {
//       console.log("✅ Email sent:", info.response);
//     }
//   });
// }


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// // ==================== AUTH ====================
// // app.post('/signup', (req, res) => {
// //   const { name, age, gender, email, password } = req.body;
// //   if (!name || !age || !gender || !email || !password) {
// //     return res.status(400).json({ success:false, message:'Please fill all fields' });
// //   }



// // const trimmedPassword = password.trim();


// // const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// // if (!pwRegex.test(trimmedPassword)) {
// //   return res.status(400).json({
// //     success: false,
// //     message: 'Password must be ≥8 chars, include upper, lower, number & special char'
// //   });
// // }

// // // db.query('SELECT 1 FROM users WHERE email = ?', [email], (e, results) => {
// // //     if (e) return res.status(500).json({ success:false, message:'Database error' });
// // //     if (results.length) {
// // //       return res.status(409).json({ success:false, message:'Email already registered' });
// // //     }
// // //     db.query(
// // //       'INSERT INTO users (name, age, gender, email, password, role) VALUES (?, ?, ?, ?, ?, "user")',
// // //       [name, age, gender, email, password],
// // //       err2 => {
// // //         if (err2) return res.status(500).json({ success:false, message:'Signup failed' });
        
// // //         // ✅ Send Welcome Email (via Mailtrap)
// // //         sendEmail(email, "Welcome to Fitness Freak 🎉", 
// // //           `Hi ${name},\n\nWelcome to Fitness Freak! We are excited to help you on your fitness journey.\n\nStay fit,\nTeam Fitness Freak`);

// // //         res.status(201).json({ success:true, message:'Signup successful. Welcome email sent!' });
// // //       }
// // //     );
// // //   });

// // db.query('SELECT 1 FROM users WHERE email = ?', [email], (e, results) => {
// //   if (e) return res.status(500).json({ success:false, message:'Database error' });
// //   if (results.length) {
// //     return res.status(409).json({ success:false, message:'Email already registered' });
// //   }
// //   db.query(
// //     'INSERT INTO users (name, age, gender, email, password, role) VALUES (?, ?, ?, ?, ?, "user")',
// //     [name, age, gender, email, password],
// //     err2 => {
// //       if (err2) return res.status(500).json({ success:false, message:'Signup failed' });
      
// //       // ✅ Send Welcome Email to the registered Gmail
// //       sendEmail(email, "Welcome to Fitness Freak 🎉", 
// //         `Hi ${name},\n\nWelcome to Fitness Freak! We are excited to help you on your fitness journey.\n\nStay fit,\nTeam Fitness Freak`);

// //       res.status(201).json({ success:true, message:'Signup successful. Welcome email sent!' });
// //     }
// //   );
// // });

// // });

// // app.post('/signup', (req, res) => {
// //   const { full_name, age, gender, email, password, height, weight, phone, fitness_goal } = req.body;

// //   // Required fields check
// //   if (!full_name || !age || !gender || !email || !password || !fitness_goal) {
// //     return res.status(400).json({ success:false, message:'Please fill all required fields' });
// //   }

// //   // Password strength validation
// //   const trimmedPassword = password.trim();
// //   const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //   if (!pwRegex.test(trimmedPassword)) {
// //     return res.status(400).json({
// //       success: false,
// //       message: 'Password must be ≥8 chars, include uppercase, lowercase, number & special char'
// //     });
// //   }

// //   // Check if email already exists
// //   db.query('SELECT 1 FROM user WHERE email = ?', [email], (e, results) => {
// //     if (e) return res.status(500).json({ success:false, message:'Database error' });
// //     if (results.length) {
// //       return res.status(409).json({ success:false, message:'Email already registered' });
// //     }

// //     // Insert new user into DB (plain password)
// //     const query = `
// //       INSERT INTO user 
// //       (full_name, age, gender, email, password, height, weight, phone, fitness_goal, role)
// //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, "user")
// //     `;
// //     const values = [full_name, age, gender, email, trimmedPassword, height || null, weight || null, phone || null, fitness_goal];

// //     db.query(query, values, (err2) => {
// //       if (err2) return res.status(500).json({ success:false, message:'Signup failed' });

// //       // Send welcome email
// //     sendEmail(
// //   email, 
// //   "Welcome to Fitness Freak 🎉", 
// //   `Hi ${full_name},

// // Welcome to Fitness Freak! 🏋️‍♂️💪

// // We’re thrilled to have you join our fitness community! Here’s what’s waiting for you:

// // 🔥 **Personalized Workouts:** Tailored plans for weight loss, muscle gain & total fitness  
// // 🥗 **Nutrition Guides:** Diet plans that match your goals perfectly  
// // 🏆 **Challenges & Competitions:** Stay motivated and earn rewards  
// // 📊 **Fitness Tools:** BMI calculator, calorie tracker & progress monitor  
// // 📝 **Expert Tips & Blogs:** Stay inspired and informed  

// // Don’t wait! Your journey to a healthier, stronger, fitter you starts NOW! 🚀

// // Stay fit and motivated,  
// // **Team Fitness Freak**`
// // );

// // // Send a matching attractive JSON response
// // res.status(201).json({ 
// //   success: true, 
// //   message: `
// // 🎉 Congratulations ${full_name}! Welcome to Fitness Freak! 💪🏋️‍♂️

// // Here’s what you can explore right away:

// // 🔥 Personalized Workouts  
// // 🥗 Nutrition Guides & Diet Plans  
// // 🏆 Fitness Challenges & Competitions  
// // 📊 Tools to track your progress  
// // 📝 Blogs & Expert Tips  

// // ✨ Don’t wait! Log in now and kickstart your fitness journey! 🚀

// // Your healthier, stronger self is just a few clicks away!`
// // });

// //     });
// //   });
// // });



// // app.post('/login', (req, res) => {
// //   const { email, password, role } = req.body;
// //   if (!email || !password || !role) {
// //     return res.status(400).json({ success: false, message: 'Missing fields' });
// //   }

// //   const table = role === 'admin' ? 'admin' : 'users';
// //   const sql = `SELECT * FROM ${table} WHERE email = ? AND password = ?`;

// //   db.query(sql, [email, password], (err, results) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Database error' });
// //     if (results.length) {
// //       return res.json({ success: true, message: 'Login successful', role });
// //     }
// //     res.json({ success: false, message: 'Invalid credentials' });
// //   });
// // });

// // ==================== USER ROUTES ====================


// // app.get('/users', (req, res) => {
// //   db.query('SELECT id, name, gender, age, email FROM users', (err, results) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Failed to fetch users' });
// //     res.json({ success: true, users: results });
// //   });
// // });

// // app.delete('/users/:id', (req, res) => {
// //   const userId = req.params.id;
// //   db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Database error' });
// //     if (result.affectedRows) {
// //       return res.json({ success: true, message: 'User deleted' });
// //     }
// //     res.status(404).json({ success: false, message: 'User not found' });
// //   });
// // });


// // GET all users

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ success: false, message: 'Please fill all fields' });
//   }

//   const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
//   db.query(sql, [email.trim(), password.trim()], (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Database error' });
//     if (results.length > 0) {
//       return res.json({ success: true, message: 'Login successful', full_name: results[0].full_name });
//     } else {
//       return res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }
//   });
// });


// async function sendSMS(to, message) {
//   try {
//     const sms = await client.messages.create({
//       body: message,
//       from: TWILIO_NUMBER,
//       to: to.startsWith('+') ? to : `+91${to}` 
//     });
//     console.log(`✅ SMS sent to ${to}: ${sms.sid}`);
//   } catch (error) {
//     console.error("❌ SMS failed:", error);
//   }
// }

// // ==================== SIGNUP ====================
// app.post('/signup', (req, res) => {
//   const { full_name, age, gender, email, password, height, weight, phone, fitness_goal } = req.body;

//   // Required fields check
//   if (!full_name || !age || !gender || !email || !password || !fitness_goal) {
//     return res.status(400).json({ success: false, message: 'Please fill all required fields' });
//   }

//   // Password strength validation
//   const trimmedPassword = password.trim();
//   const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   if (!pwRegex.test(trimmedPassword)) {
//     return res.status(400).json({
//       success: false,
//       message: 'Password must be ≥8 chars, include uppercase, lowercase, number & special char'
//     });
//   }

//   // Check if email already exists
//   db.query('SELECT 1 FROM user WHERE email = ?', [email], (e, results) => {
//     if (e) return res.status(500).json({ success: false, message: 'Database error' });
//     if (results.length) return res.status(409).json({ success: false, message: 'Email already registered' });

//     // Insert new user
//     const query = `
//       INSERT INTO user 
//       (full_name, age, gender, email, password, height, weight, phone, fitness_goal)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     const values = [full_name, age, gender, email, trimmedPassword, height || null, weight || null, phone || null, fitness_goal];

//     db.query(query, values, async (err2) => {
//       if (err2) return res.status(500).json({ success: false, message: 'Signup failed' });

//       // Send Welcome Email
//       sendEmail(
//         email,
//         "Welcome to Fitness Freak 🎉",
//         `Hi ${full_name},

// Welcome to Fitness Freak! 🏋️‍♂️💪

// We’re excited to have you on board! Here’s what’s waiting for you:

// 🔥 Personalized Workouts: Achieve your goals faster  
// 🥗 Nutrition Guides: Diet plans tailored to you  
// 🏆 Best Courses: Stay motivated & keep on practicing   
// 📊 Fitness Tools: Track your progress like a pro  
// 📝 Expert Tips & Blogs: Stay inspired & informed  

// 🚀 Don’t wait! Log in now and kickstart your fitness journey.  
// Your healthier, stronger self is just a click away! 🌟

// Stay fit,  
// Team Fitness Freak`
//       );

//       // ✅ Send SMS if phone exists
//       if (phone) {
//         await sendSMS(phone, `Hi ${full_name}! Welcome to Fitness Freak 🏋️‍♂️💪. Your fitness journey starts now! Check your email for details.`);
//       } else {
//         console.log("ℹ️ No phone number provided. SMS not sent.");
//       }

// //       // JSON Response
// //       res.status(201).json({ 
// //         success: true, 
// //         message: `
// // 🎉 Congratulations ${full_name}! Welcome to Fitness Freak! 💪🏋️‍♂️

// // Here’s what you can explore right away:

// // 🔥 Personalized Workouts  
// // 🥗 Nutrition Guides & Diet Plans  
// // 🏆 Fitness Challenges & Competitions  
// // 📊 Tools to track your progress  
// // 📝 Blogs & Expert Tips  

// // ✨ Don’t wait! Log in now and kickstart your fitness journey! 🚀`
// //       });
//     });
//   });
// });

// app.get('/users', (req, res) => {
//   const sql = 'SELECT user_id AS id, name, gender, age, email FROM users';

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error('Database error in /users:', err);
//       return res.status(500).json({ success: false, message: 'Failed to fetch users' });
//     }
//     res.json({ success: true, users: results });
//   });
// });

// // DELETE user by ID
// // app.delete('/users/:id', (req, res) => {
// //   const userId = req.params.id;
// //   const sql = 'DELETE FROM users WHERE user_id = ?';

// //   db.query(sql, [userId], (err, result) => {
// //     if (err) {
// //       console.error('Database error in DELETE /users/:id:', err);
// //       return res.status(500).json({ success: false, message: 'Database error' });
// //     }

// //     if (result.affectedRows > 0) {
// //       return res.json({ success: true, message: 'User deleted' });
// //     } else {
// //       return res.status(404).json({ success: false, message: 'User not found' });
// //     }
// //   });
// // });


// // Add BMI and User Details
// // app.post('/api/user-details', (req, res) => {
// //   const { user_id, height, weight, target_weight, bmi, status } = req.body;

// //   const sql = `INSERT INTO user_details (user_id, height, weight, target_weight, bmi, status) 
// //                VALUES (?, ?, ?, ?, ?, ?)`;

// //   db.query(sql, [user_id, height, weight, target_weight, bmi, status], (err, result) => {
// //     if (err) {
// //       return res.status(500).json({ message: 'Database error', error: err });
// //     }
// //     res.status(201).json({ message: 'User details added successfully', insertedId: result.insertId });
// //   });
// // });
// // app.post('/api/user-details', (req, res) => {
// //   const { user_id, height, weight, target_weight, bmi, status } = req.body;

// //   const sql = `INSERT INTO user_details (user_id, height, weight, target_weight, bmi, status) 
// //                VALUES (?, ?, ?, ?, ?, ?)`;

// //   db.query(sql, [user_id, height, weight, target_weight, bmi, status], (err, result) => {
// //     if (err) {
// //       console.error('Database error:', err);  // Log error for debugging
// //       return res.status(500).json({ message: 'Database error', error: err });
// //     }
// //     res.status(201).json({ message: 'User details added successfully', insertedId: result.insertId });
// //   });
// // });


// // app.get('/api/user-details', (req, res) => {
// //   db.query('SELECT * FROM user_details', (err, results) => {
// //     if (err) {
// //       console.error('Database error:', err);
// //       return res.status(500).json({ message: 'Database error', error: err });
// //     }
// //     res.json(results);
// //   });
// // });


// // ==================== WORKOUT ROUTES ====================

// // Add Workout
// app.post('/workouts', (req, res) => {
//   const { title, details } = req.body;
//   if (!title || !details) {
//     return res.status(400).json({ success: false, message: 'Missing fields' });
//   }
//   const sql = 'INSERT INTO workouts (title, details) VALUES (?, ?)';
//   db.query(sql, [title, details], (err) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to add workout' });
//     res.status(201).json({ success: true, message: 'Workout added successfully' });
//   });
// });


// app.get('/workouts', (req, res) => {
//   db.query('SELECT * FROM workouts', (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to fetch workouts' });
//     res.json({ success: true, workouts: results });
//   });
// });


// app.delete('/workouts/:id', (req, res) => {
//   const workoutId = req.params.id;
//   db.query('DELETE FROM workouts WHERE id = ?', [workoutId], (err) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to delete workout' });
//     res.json({ success: true, message: 'Workout deleted successfully' });
//   });
// });

// // ==================== NUTRITION ROUTES ====================


// // app.post('/nutrition', (req, res) => {
// //   const { title, image_url } = req.body;
// //   if (!title || !image_url) {
// //     return res.status(400).json({ success: false, message: 'Missing fields' });
// //   }
// //   const sql = 'INSERT INTO nutrition_plans (title, image_url) VALUES (?, ?)';
// //   db.query(sql, [title, image_url], (err) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Failed to add nutrition plan' });
// //     res.status(201).json({ success: true, message: 'Nutrition plan added successfully' });
// //   });
// // });


// // app.post('/nutrition-plan', (req, res) => {
// //     const { bmiStatus, dietType, goal } = req.body;

// //     const sql = `
// //         SELECT * FROM nutrition_plan 
// //         WHERE bmi_category=? AND diet_type=? AND goal=? LIMIT 1
// //     `;

// //     db.query(sql, [bmiStatus, dietType, goal], (err, results) => {
// //         if (err) return res.json({ success: false, message: 'Database error' });
// //         if (results.length === 0) return res.json({ success: false, message: 'No matching nutrition plan found' });
// //         const plan = results[0];

// //         // Get meals for this plan
// //         db.query('SELECT * FROM meals WHERE plan_id=?', [plan.plan_id], (err2, meals) => {
// //             if (err2) return res.json({ success: false, message: 'Database error' });
// //             res.json({ success: true, plan, meals });
// //         });
// //     });
// // });



// // Get nutrition plan based on BMI and type (Veg/Non-Veg)
// app.get('/nutrition-plan', (req, res) => {
//     const { bmi_category, type } = req.query;

//     const sql = `
//         SELECT day, meal_category, meal_description
//         FROM nutrition_plan
//         WHERE bmi_category = ? AND type = ?
//         ORDER BY day, FIELD(meal_category, 'Breakfast','Lunch','Dinner')
//     `;

//     db.query(sql, [bmi_category, type], (err, results) => {
//         if (err) return res.status(500).json({ success: false, error: err });
//         res.json({ success: true, plan: results });
//     });
// });



// app.get('/nutrition', (req, res) => {
//   db.query('SELECT * FROM nutrition_plans', (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to fetch nutrition plans' });
//     res.json({ success: true, nutrition: results });
//   });
// });


// app.delete('/nutrition/:id', (req, res) => {
//   const nutritionId = req.params.id;
//   db.query('DELETE FROM nutrition_plans WHERE id = ?', [nutritionId], (err) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to delete nutrition plan' });
//     res.json({ success: true, message: 'Nutrition plan deleted successfully' });
//   });
// });




// // // ==================== BLOGS ====================
// app.post('/blogs', (req, res) => {
//   const { title,description, image_url } = req.body;
//   db.query('INSERT INTO blogs (title, description, image_url) VALUES (?, ?, ?)', 
//     [title, description, image_url], 
//     (err, result) => {
//       if (err) return res.json({ success: false, message: err.message });
//       res.json({ success: true });
//     });
// });


// app.get('/blogs', (req, res) => {
//   db.query('SELECT * FROM blogs', (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Failed to fetch blogs' });
//     res.json({ success: true, blogs: results });
//   });
// });

// app.delete('/blogs/:id', (req, res) => {
//   db.query('DELETE FROM blogs WHERE id = ?', [req.params.id], err => {
//     if (err) return res.status(500).json({ success:false, message:'Failed to delete blog' });
//     res.json({ success:true, message:'Blog deleted successfully' });
//   });
// });



// // ==================== COURSE ROUTES ====================

// // Add a course
// app.post('/course', (req, res) => {
//   const { title, description, video_url, bmi_category } = req.body;
//   if (!title || !description || !video_url || !bmi_category) {
//     return res.json({ success: false, message: 'All fields are required!' });
//   }

//  db.query(
//   'INSERT INTO courses (title, description, video_url, bmi_category) VALUES (?, ?, ?, ?)',
//   [title, description, video_url, bmi_category],
//   (err, result) => {
//       if (err) return res.json({ success: false, message: err.message });
//       res.json({ success: true, message: 'Course added successfully', course_id: result.insertId });
//   }
// );
// });


// app.get("/course", (req, res) => {
//     db.query("SELECT * FROM courses", (err, results) => {  
//         if(err) return res.json({ success: false, message: err });
//         res.json({ success: true, courses: results });
//     });
// });


// app.delete('/courses/:course_id', (req, res) => {
//   const courseId = req.params.course_id;
//   const sql = 'DELETE FROM courses WHERE course_id = ?';

//   db.query(sql, [courseId], (err, result) => {
//     if (err) {
//       console.error('DB error in DELETE /courses/:course_id:', err);
//       return res.status(500).json({ success: false, message: 'Failed to delete course' });
//     }

//     if (result.affectedRows > 0) {
//       res.json({ success: true, message: 'Course deleted successfully' });
//     } else {
//       res.status(404).json({ success: false, message: 'Course not found' });
//     }
//   });
// });


// app.post("/progress", async (req, res) => {
//     const { user_id, course_id, progress_percentage, last_watched_time } = req.body;

//     if (!user_id || !course_id) {
//         return res.status(400).json({ success: false, message: "Missing user_id or course_id" });
//     }

//     try {
//         await pool.query(
//             `INSERT INTO user_progress (user_id, course_id, progress_percentage, last_watched_time)
//              VALUES (?, ?, ?, ?)
//              ON DUPLICATE KEY UPDATE
//                progress_percentage = VALUES(progress_percentage),
//                last_watched_time = VALUES(last_watched_time)`,
//             [user_id, course_id, progress_percentage, last_watched_time]
//         );
//         res.json({ success: true, message: "Progress saved" });
//     } catch (err) {
//         console.error("Database error:", err);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

// // --- Get Progress for a User (All Courses) ---
// app.get("/progress/:userId", async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const [rows] = await pool.query(
//             "SELECT course_id, progress_percentage, last_watched_time FROM user_progress WHERE user_id = ?",
//             [userId]
//         );
//         res.json(rows);
//     } catch (err) {
//         console.error("Database error:", err);
//         res.status(500).json({ message: "Failed to fetch progress" });
//     }
// });

// // --- Get Progress for a User for a Specific Course ---
// app.get("/progress/:userId/:courseId", async (req, res) => {
//     const { userId, courseId } = req.params;
//     try {
//         const [rows] = await pool.query(
//             "SELECT progress_percentage, last_watched_time FROM user_progress WHERE user_id=? AND course_id=?",
//             [userId, courseId]
//         );
//         if (rows.length > 0) {
//             res.json(rows[0]);
//         } else {
//             res.json({ progress_percentage: 0, last_watched_time: 0 });
//         }
//     } catch (err) {
//         console.error("Database error:", err);
//         res.status(500).json({ message: "Failed to fetch progress" });
//     }
// });



// // ------------------ START SERVER ------------------
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });








































const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const nodemailer = require("nodemailer");
// Twilio setup
const twilio = require('twilio');
const accountSid = "AC981630e8322be3d70991337efdefc060";  // Your Account SID
const authToken = "f883f7624cfdf4d2c546312d5121e403";     // Your Auth Token
const TWILIO_NUMBER = "+19034748132";                     // Your Twilio number
const client = twilio(accountSid, authToken);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fitness_freak',
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

// Root Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jassujassi456@gmail.com",
    pass: "brbp crca qoge nqmf" // ✅ Gmail App Password
  },
  tls: {
    rejectUnauthorized: false // ✅ Prevents self-signed certificate errors
  }
});

function sendEmail(to, subject, message) {
  const mailOptions = {
    from: "Fitness Freak <jassujassi456@gmail.com>",
    to,
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Email failed:", err);
    } else {
      console.log("✅ Email sent:", info.response);
    }
  });
}

// Example test call:
// sendEmail("receiver@example.com", "Test Email", "Hello! This is a test email.");



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  db.query(sql, [email.trim(), password.trim()], (err, results) => {
    if (err) {
      console.error('❌ Database error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length > 0) {
      const user = results[0];
      return res.json({
        success: true,
        message: 'Login successful',
        id: user.id,                   // ✅ Send user ID
        full_name: user.full_name,     // ✅ Send full name
        email: user.email              // ✅ Send email for reference
      });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});


async function sendSMS(to, message) {
  try {
    const sms = await client.messages.create({
      body: message,
      from: TWILIO_NUMBER,
      to: to.startsWith('+') ? to : `+91${to}` 
    });
    console.log(`✅ SMS sent to ${to}: ${sms.sid}`);
  } catch (error) {
    console.error("❌ SMS failed:", error);
  }
}

// ==================== SIGNUP ====================
app.post('/signup', (req, res) => {
  const { full_name, age, gender, email, password, height, weight, phone, fitness_goal } = req.body;

  // Required fields check
  if (!full_name || !age || !gender || !email || !password || !fitness_goal) {
    return res.status(400).json({ success: false, message: 'Please fill all required fields' });
  }

  // ✅ Clean inputs
  const cleanEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  // ✅ Password strength validation
  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!pwRegex.test(trimmedPassword)) {
    return res.status(400).json({
      success: false,
      message: 'Password must be ≥8 chars and include uppercase, lowercase, number & special character'
    });
  }

  // ✅ Check if email already exists
  db.query('SELECT id FROM user WHERE email = ?', [cleanEmail], (err, results) => {
    if (err) {
      console.error('❌ Database error:', err);
      return res.status(500).json({ success: false, message: 'Database error while checking email' });
    }

    // ⚠️ If existing user found
    if (results.length > 0) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    // ✅ Insert new user (email not found)
    const query = `
      INSERT INTO user 
      (full_name, age, gender, email, password, height, weight, phone, fitness_goal)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      full_name.trim(),
      age,
      gender,
      cleanEmail,
      trimmedPassword,
      height || null,
      weight || null,
      phone || null,
      fitness_goal.trim()
    ];

    db.query(query, values, async (err2, result) => {
      if (err2) {
        console.error('❌ Signup error:', err2);
        return res.status(500).json({ success: false, message: 'Signup failed, please try again' });
      }

      // ✅ Send Welcome Email
      sendEmail(
        cleanEmail,
        "Welcome to Fitness Freak 🎉",
        `Hi ${full_name},

Welcome to Fitness Freak! 🏋️‍♂️💪

We’re excited to have you on board!

🔥 Personalized Workouts  
🥗 Nutrition Guides  
🏆 Fitness Challenges  
📊 Progress Tools  
📝 Expert Tips  

🚀 Don’t wait! Log in now and kickstart your fitness journey.  

Stay fit,  
Team Fitness Freak`
      );

      // ✅ Send SMS if phone exists
      if (phone) {
        try {
          await sendSMS(phone, `Hi ${full_name}! Welcome to Fitness Freak 🏋️‍♂️💪. Your fitness journey starts now!`);
        } catch (smsErr) {
          console.log("⚠️ SMS sending failed:", smsErr.message);
        }
      }

      // ✅ Success response
      res.status(201).json({
        success: true,
        message: `🎉 Welcome ${full_name}! You have successfully registered. Please log in now.`
      });
    });
  });
});

// ---------------- GET ALL USERS ----------------
app.get("/api/users", (req, res) => {
  const sql = "SELECT id, full_name, gender, age, email FROM user";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch users" });
    res.json({ success: true, users: results });
  });
});

// ---------------- GET SINGLE USER ----------------
app.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT id, full_name, age, gender, height, weight, fitness_goal, email, phone
               FROM user WHERE id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (results.length === 0) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user: results[0] });
  });
});

// ---------------- UPDATE USER ----------------
app.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const { full_name, age, gender, email, height, weight, phone } = req.body;

  // Validate required fields
  if (!full_name || !age || !gender || !email) {
    return res.status(400).json({ success: false, message: "Required fields missing" });
  }

  const sql = `
    UPDATE user
    SET full_name = ?, age = ?, gender = ?, email = ?, height = ?, weight = ?, phone = ?
    WHERE id = ?
  `;
  const values = [full_name, age, gender, email, height || null, weight || null, phone || null, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database update error:", err);
      return res.status(500).json({ success: false, message: "Failed to update user" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated successfully" });
  });
});



// ---------------- DELETE USER ----------------
app.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM user WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to delete user" });
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, message: "User deleted successfully" });
  });
});


// ---------------- BMI ----------------
app.get("/api/bmi/:userId", (req, res) => {
  const { userId } = req.params;
  const sql = `
    SELECT bmi, category, height, weight, recorded_at
    FROM bmi_data
    WHERE user_id = ?
    ORDER BY recorded_at DESC
    LIMIT 10
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("❌ BMI fetch error:", err);
      return res.status(500).json({ success: false, message: "Database error while fetching BMI" });
    }
    res.json({ success: true, records: results });
  });
});

app.post("/api/bmi", (req, res) => {
  const { userId, height, weight, bmi, category } = req.body;

  // Validate inputs
  if (!userId || !height || !weight || !bmi || !category) {
    return res.status(400).json({ success: false, message: "Incomplete BMI data" });
  }

  if (isNaN(height) || isNaN(weight) || isNaN(bmi)) {
    return res.status(400).json({ success: false, message: "Height, weight, and BMI must be numbers" });
  }

  const sql = `
    INSERT INTO bmi_data (user_id, height, weight, bmi, category, recorded_at)
    VALUES (?, ?, ?, ?, ?, NOW())
  `;

  db.query(sql, [userId, height, weight, bmi, category], (err, result) => {
    if (err) {
      console.error("❌ BMI save error:", err);
      return res.status(500).json({ success: false, message: "Database error while saving BMI" });
    }
    res.json({ success: true, message: "BMI record saved successfully!" });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));