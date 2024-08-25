import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/courses/${course.id}`); 
    };

    const imageUrls = {
        1: 'https://storage.googleapis.com/courses_provider_icons/rect-_image/Large%2039-min.png',
        2: 'https://storage.googleapis.com/courses_provider_icons/rect-_image/Large%2040-min.png',
        3: 'https://storage.googleapis.com/courses_provider_icons/rect-_image/Large%2010-min.png',
        4: 'https://storage.googleapis.com/courses_provider_icons/rect-_image/Large%2017-min.png',
    };

    return (
        <Card 
            onClick={handleClick} 
            sx={{ 
                cursor: 'pointer', 
                height: 300, 
                backgroundImage: `url(${imageUrls[course.id]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 2 }}>
                <Typography variant="body1" fontWeight={699} align="center">
                    {course.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
