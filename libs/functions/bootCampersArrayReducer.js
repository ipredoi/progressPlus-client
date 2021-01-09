
// transforms an array of bootcampers in a format that is compatible with the dropdown menu component 

export default function bootCampersArrayReducer(array) {
  return array.reduce((acc, cur, index) => {
    return [
      ...acc,
      {
        key: index + 1,
        text: cur.name,
        value: cur.name,
      },
    ];
  }, []);
}
