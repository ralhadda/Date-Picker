export const getMonthNumber = month => {
  let monthNumber;
  switch (month) {
    case "January":
      monthNumber = 1;
      break;
    case "February":
      monthNumber = 2;
      break;
    case "March":
      monthNumber = 3;
      break;
    case "April":
      monthNumber = 4;
      break;
    case "May":
      monthNumber = 5;
      break;
    case "June":
      monthNumber = 6;
      break;
    case "July":
      monthNumber = 7;
      break;
    case "August":
      monthNumber = 8;
      break;
    case "September":
      monthNumber = 9;
      break;
    case "October":
      monthNumber = 10;
      break;
    case "November":
      monthNumber = 11;
      break;
    case "December":
      monthNumber = 12;
      break;
  }
  return monthNumber;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
