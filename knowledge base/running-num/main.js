function runningNums(elementName, interval, step) {
  const elementsList = document.querySelectorAll(elementName);
  if (!elementsList.length) return;
  if (step <= 0) step = 1;

  elementsList.forEach((elem) => {
    const baseNum = +elem.innerHTML;
    const curInterval = Math.round(interval / (baseNum / step));

    let counter = 0;

    const iterator = setInterval(() => {
      if (counter >= baseNum - step) {
        elem.innerHTML = baseNum;
        clearInterval(iterator);
      } else {
        elem.innerHTML = counter;
        counter += step;
      }
    }, curInterval);
  });
}

runningNums(".box", 3000, 10);
