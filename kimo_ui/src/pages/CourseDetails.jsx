import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ChapterCard from '../components/ChapterCard';

const CourseDetails = () => {

    const { id } = useParams();

    const [course, setCourse] = useState(null);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/courses/${id}`)
            .then(response => {
                setCourse(response.data);
                setChapters(response.data.Chapters);

            })
            .catch(error => console.error('Error fetching course details:', error));
    }, [id]);

    return (
        <Container sx={{ mt: 5 }}>
            {course && (
                <div>
                    <Typography variant="h4" align="center" color={'white'} sx={{ mb: 4 }}>
                        {course.name}
                    </Typography>
                    <Typography variant="h5" color={'white'} align="center" sx={{ mb: 2 }}>
                        Chapters
                    </Typography>
                    <Grid container spacing={3}>
                        {chapters.map(chapter => (
                            <Grid item xs={12} sm={6} key={chapter.id}>
                                <ChapterCard chapter={chapter} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </Container>
    );
};

export default CourseDetails;
