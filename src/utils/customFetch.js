let is_ok = true;

const customFetch = (time, to_do) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(to_do);
      } else {
        reject("Error en la promesa customFetch");
      }
    }, time);
  });
};

export default customFetch;
