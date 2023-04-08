class exampleTwo {
  interestingTime(S, T) {
    let count = 0;
    let timeRange = [];

    const startDate = new Date(`2022-01-01T${S}`);
    const endDate = new Date(`2022-01-01T${T}`);

    let currentTime = startDate;
    while (currentTime <= endDate) {
      const formattedTime = currentTime.toTimeString().slice(0, 8);
      timeRange.push(formattedTime);
      currentTime.setSeconds(currentTime.getSeconds() + 1);
    }

    for (let i = 0; i < timeRange.length; i++) {
      var textList = timeRange[i].replaceAll(":", "").split("");
      var timeSet = new Set(textList);

      if (timeSet.size <= 2) {
        count++;
      }
    }
    return count;
  }
}

module.exports = new exampleTwo();
