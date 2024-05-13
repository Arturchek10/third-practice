// function fetchData() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve("Data fetched successfully");
//       }, 2000);
//   });
// }

// fetchData()
//   .then(data => {
//       console.log(data);
//   })
//   .catch(error => {
//       console.error(error);
//   });

async function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched successfully");
      }, 2000);
  });
}

async function processData() {
  try {
      const data = await fetchData();
      console.log(data);
  } catch (error) {
      console.error(error);
  }
}

processData();