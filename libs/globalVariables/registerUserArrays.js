const rolesArr = [
  {
    key: 'Bootcamper',
    text: 'Bootcamper',
    value: 'Bootcamper',
    image: { avatar: true, src: '/icons/students.png' },
  },
  {
    key: 'Coach',
    text: 'Coach',
    value: 'Coach',
    image: { avatar: true, src: '/icons/professor.png' },
  },
];

var cohortArr = [];
for (let i = 4; i < 100; i++) {
  cohortArr.push({
    key: i,
    text: `${i}`,
    value: i,
    image: { avatar: true, src: '/icons/cohort_icon.png' },
  });
}

export { cohortArr, rolesArr };
