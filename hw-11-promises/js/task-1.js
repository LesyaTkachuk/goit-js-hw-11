const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });
};

const logger = message => console.log(message);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
