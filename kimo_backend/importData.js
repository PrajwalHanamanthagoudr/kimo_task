const fs = require('fs');
const { sequelize, Course, Chapter } = require('./models');

async function importData() {
  const data = JSON.parse(fs.readFileSync('courses.json', 'utf8'));

  await sequelize.sync({ force: true });

  for (let course of data) {
    const newCourse = await Course.create({
      name: course.name,
      date: new Date(course.date * 1000),
      description: course.description,
      domain: course.domain.join(',')
    });

    for (let chapter of course.chapters) {
      await Chapter.create({
        name: chapter.name,
        text: chapter.text,
        CourseId: newCourse.id
      });
    }
  }

  console.log('Data imported successfully!');
}

importData().catch(console.error);
