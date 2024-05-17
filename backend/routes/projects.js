const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

router.post('/', auth, async (req, res) => {
  const { name } = req.body;
  try {
    const newProject = new Project({ user: req.user.id, name });
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
