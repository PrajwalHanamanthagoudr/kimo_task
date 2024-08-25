const express = require('express');
const { Op } = require('sequelize');
const { sequelize, Course, Chapter } = require('./models');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));
app.use(express.json());

// Endpoint to get a list of all available courses with sorting and filtering
app.get('/courses', async (req, res) => {
  const { sort = 'alphabetical', domain } = req.query;
  let order = [['name', 'ASC']];

  if (sort === 'date') order = [['date', 'DESC']];
  if (sort === 'rating') order = [['rating', 'DESC']];

  const where = domain ? { domain: { [Op.like]: `%${domain}%` } } : {};

  const courses = await Course.findAll({ where, order });
  res.json(courses);
});

// Endpoint to get the course overview
app.get('/courses/:id', async (req, res) => {
  const course = await Course.findByPk(req.params.id, {
    include: 'Chapters'
  });

  if (!course) return res.status(404).json({ error: 'Course not found' });

  res.json(course);
});

// Endpoint to get specific chapter information
app.get('/courses/:courseId/chapters/:chapterId', async (req, res) => {
  const chapter = await Chapter.findOne({
    where: {
      id: req.params.chapterId,
      CourseId: req.params.courseId
    }
  });

  if (!chapter) return res.status(404).json({ error: 'Chapter not found' });

  res.json(chapter);
});

// Endpoint to rate a chapter
app.post('/courses/:courseId/chapters/:chapterId/rate', async (req, res) => {
    const { rating } = req.body;
  
    // Validate rating 
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Invalid rating. Please provide a whole number between 1 and 5.' });
    }
  
    try {
      const chapter = await Chapter.findOne({
        where: {
          id: req.params.chapterId,
          CourseId: req.params.courseId
        }
      });
  
      if (!chapter) {
        return res.status(404).json({ error: 'Chapter not found' });
      }
  
      // Save the rating
      chapter.ratings = rating;
      await chapter.save();
  
      res.json({ success: true, message: 'Thank you for rating the chapter.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the rating.' });
    }
  });
  

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
