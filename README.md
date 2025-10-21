<h1 align="center">💬 Feedback App — Backend</h1>

<p align="center">
  <strong>Node.js + Express + MongoDB + Mongoose</strong><br>
  Backend API for managing feedback data.
</p>

---

<h2>🚀 About</h2>
<p>
This is the <strong>backend</strong> part of the <em>Feedback App</em> project.  
It stores feedbacks in a <strong>MongoDB</strong> database and provides REST API endpoints for frontend interaction.
</p>

<h2>🧩 Tech Stack</h2>
<ul>
  <li>🟢 <strong>Node.js</strong> — runtime environment</li>
  <li>⚡ <strong>Express</strong> — web framework</li>
  <li>🍃 <strong>MongoDB</strong> — database</li>
  <li>🔗 <strong>Mongoose</strong> — MongoDB ODM</li>
  <li>📦 <strong>dotenv</strong> — environment variable management</li>
</ul>

<h2>💡 Features</h2>
<ul>
  <li>CRUD operations for feedbacks</li>
  <li>Data validation with Mongoose schemas</li>
  <li>Timestamps for created and updated feedbacks</li>
</ul>

<h2>⚙️ Run Locally</h2>
<pre><code>cd backend
npm install
# Create a .env file with MONGODB_LINK
node server.js
</code></pre>

<h2>🌍 Deployment</h2>
<p>
Backend deployed on <strong>Render</strong>: <a href="https://feedback-backend-gmve.onrender.com" target="_blank">feedback-backend-gmve.onrender.com</a><br>
Remember to update the frontend API URL to this deployed backend.
</p>

<h2>📁 Project Structure</h2>
<pre><code>backend/
 ├─ FeedbackController.js
 ├─ FeedbackModel.js
 ├─ feedbackRoutes.js
 ├─ server.js
 ├─ package.json
 └─ .env
</code></pre>

<h2>👩‍💻 Author</h2>
<p>
