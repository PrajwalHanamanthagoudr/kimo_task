import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseGrid from '../components/CourseGrid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => {
        console.log("Courses fetched:", data);
        setCourses(data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" color={'white'} sx={{ mt: 5, mb: 2 }}>
        All Courses
      </Typography>
      <CourseGrid courses={courses} />
    </Container>
  );
}

export default Home;
