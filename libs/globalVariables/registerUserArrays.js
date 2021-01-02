const rolesArr = [
  {
    key: 'Bootcamper',
    text: 'Bootcamper',
    value: 'Bootcamper',
    image: { avatar: true, src: '/students.png' },
  },
  {
    key: 'Coach',
    text: 'Coach',
    value: 'Coach',
    image: { avatar: true, src: '/professor.png' },
  },
];

var cohortArr = [];
for (let i = 4; i < 100; i++) {
  cohortArr.push({
    key: i,
    text: `${i}`,
    value: i,
  });
}

export { cohortArr, rolesArr };
