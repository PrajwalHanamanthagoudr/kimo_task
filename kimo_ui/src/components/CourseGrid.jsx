import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CourseCard from './CourseCard';
import { Box } from '@mui/material';

const CourseGrid = ({ courses }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseGrid;

