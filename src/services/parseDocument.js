import md5 from "md5";

const sliceOnMovieArrays = text => {
  const splitedByLines = text.split(/\r?\n/);
  let prevEmptyLineIdx = 0;
  const slicedArr = [];
  for (let i = 0; i < splitedByLines.length; i++) {
    if (splitedByLines[i] == "" && prevEmptyLineIdx !== i) {
      const slicedElem = splitedByLines.slice(prevEmptyLineIdx, i);
      if (slicedElem.length === 4) {
        slicedArr.push(slicedElem);
      }
      prevEmptyLineIdx = i + 1;
    }
  }
  return slicedArr;
};
const splitByColon = arr => {
  return arr.map(item => {
    return item.split(": ");
  });
};
const createDataObject = arr => {
  let obj = {};
  arr.forEach(item => {
    const [key, ...values] = item;
    obj[key] = `${values}`;
  });
  obj["id"] = md5(obj.Title);
  return obj;
};

const createArrayOfObjects = arr => {
  const objectsArray = arr.map(item => {
    return createDataObject(splitByColon(item));
  });
  return objectsArray;
};

export const parseDocument = text => {
  const slicedOnArrays = sliceOnMovieArrays(text);
  return createArrayOfObjects(slicedOnArrays);
};
