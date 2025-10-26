import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://tesfamicael-portifolio.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// Debug middleware to see incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.post("/api/email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received request body:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.TO_EMAIL, // Must be verified in SendGrid
    subject: `New Contact Form Message from ${name}`,
    text: message,
    html: `<h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    const response = await sgMail.send(msg);
    console.log("SendGrid response:", response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
