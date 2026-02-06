require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypton', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Import Routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const profileRoutes = require('./routes/profile');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/profile', profileRoutes);

// Sample Data Endpoints
app.get('/api/roadmap', (req, res) => {
    const roadmapData = {
        "Red Team": {
            roles: [
                {
                    title: "Penetration Tester",
                    level: "Intermediate",
                    certs: ["OSCP", "CEH", "GPEN"],
                    prerequisites: ["Networking basics", "Linux basics", "Programming basics"],
                    description: "Authorized simulated cyber attacks on systems"
                },
                {
                    title: "Ethical Hacker",
                    level: "Intermediate",
                    certs: ["CEH", "CISSP", "Security+"],
                    prerequisites: ["Networking", "Operating systems", "Programming"],
                    description: "Legally breaks into systems to find vulnerabilities"
                }
            ]
        },
        "Blue Team": {
            roles: [
                {
                    title: "SOC Analyst",
                    level: "Fresher Friendly",
                    certs: ["Security+", "CySA+", "Splunk Certified"],
                    prerequisites: ["Basic security concepts", "Network fundamentals"],
                    description: "Monitors security alerts and responds to incidents"
                },
                {
                    title: "Security Analyst",
                    level: "Fresher Friendly",
                    certs: ["Security+", "GSEC", "CISSP"],
                    prerequisites: ["IT fundamentals", "Problem-solving skills"],
                    description: "Analyzes security systems and recommends improvements"
                }
            ]
        }
    };
    res.json(roadmapData);
});

app.get('/api/resources', (req, res) => {
    const resources = [
        {
            id: 1,
            title: "CompTIA Security+ Full Course",
            url: "https://youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv&si=P2sLMxXjgn1dnWH8",
            icon: "shield",
            description: "Complete guide for Security+ certification"
        },
        {
            id: 2,
            title: "CompTIA Network+",
            url: "https://youtube.com/playlist?list=PLG49S3nxzAnl_tQe3kvnmeMid0mjF8Le8&si=Os1hKYuygsaIsPj3",
            icon: "network",
            description: "Networking fundamentals for cybersecurity"
        },
        {
            id: 3,
            title: "Red Team Full Course",
            url: "https://youtube.com/playlist?list=PLBf0hzazHTGMjSlPmJ73Cydh9vCqxukCu&si=lkQM5mIo8p7ZxI5k",
            icon: "skull",
            description: "Complete offensive security training"
        }
    ];
    res.json(resources);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
