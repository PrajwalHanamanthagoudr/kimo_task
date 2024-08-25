import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const ChapterCard = ({ chapter }) => {
  const [rating, setRating] = useState(chapter.ratings);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);

    axios.post(`http://localhost:3000/courses/${chapter.CourseId}/chapters/${chapter.id}/rate`, { rating: newValue })
      .then(response => {
        setMessage(response.data.message);
        setOpen(true);
      })
      .catch(error => {
        console.error('Error updating rating:', error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="body1">
          {chapter.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {chapter.text}
        </Typography>
        <Rating 
          name="chapter-rating" 
          value={rating} 
          precision={0.5} 
          onChange={handleRatingChange}
          sx={{ mt: 1 }}
        />
      </CardContent>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ 
          '& .MuiSnackbarContent-root': { 
            backgroundColor: 'green' 
          }
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ChapterCard;
