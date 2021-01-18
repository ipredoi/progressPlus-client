function setBarBgColorArr(array) {
  let barBgColorArr = [];
  array.map((e, i) => {
    if (e >= 0 && e <= 40) {
      barBgColorArr[i] = 'rgba(161, 29, 51,0.8)';
    } else if (e > 40 && e < 70) {
      barBgColorArr[i] = 'rgba(191, 210, 0,0.8)';
    } else {
      barBgColorArr[i] = 'rgba(11, 138, 72,0.8)';
    }
  });
  return barBgColorArr;
}

function setBarBorColorArr(array) {
  let barBorColorArr = [];
  array.map((e, i) => {
    if (e >= 0 && e <= 40) {
      barBorColorArr[i] = 'rgba(161, 29, 51,0.8)';
    } else if (e > 40 && e < 70) {
      barBorColorArr[i] = 'rgba(191, 210, 0,0.8)';
    } else {
      barBorColorArr[i] = 'rgba(11, 138, 72,0.8)';
    }
  });
  return barBorColorArr;
}

// set icons array for mastery task graph
function setIconArr(array) {
  let iconArr = [];
  array.map((elem, i) => {
    if (elem !== null && isNaN(elem) === true) {
      iconArr[i] = {
        src: `/icons/${elem}.png`,
        width: 25,
        height: 25,
      };
    } else {
      iconArr[i] = null;
    }
  });
  return iconArr;
}

export { setBarBgColorArr, setBarBorColorArr, setIconArr };
