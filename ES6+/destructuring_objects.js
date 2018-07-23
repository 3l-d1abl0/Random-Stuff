const infoObj = {
    name :'Dive into Deep Learning',
    url: 'https://abc.xyz',
    duration: 44.20,
    author: 'Ras-Al-Ghul'
};

//Extract Properties By name
const {name, author} = infoObj;
console.log(`${name} by ${author}`);

const {name: course_name, author: course_author} = infoObj;
console.log(`${course_name} by ${course_author}`);
