import { getMonthNumber, months } from "./constants.js";

export const clickLeftCalculation = (currentMonth, year, days) => {
  let monthNumberAfterClick = getMonthNumber(currentMonth);
  monthNumberAfterClick--;
  if (monthNumberAfterClick === 0) {
    monthNumberAfterClick = 12;
    year--;
  }

  days = dateFns.getDaysInMonth(new Date(year, monthNumberAfterClick - 1));
  const newMonth = months[monthNumberAfterClick - 1];
  return [newMonth, days, year, getPreviousMonth(newMonth, year)];
};

export const clickRightCalculation = (currentMonth, year, days) => {
  let monthNumberAfterClick = getMonthNumber(currentMonth);
  monthNumberAfterClick++;
  if (monthNumberAfterClick === 13) {
    monthNumberAfterClick = 1;
    year++;
  }
  days = dateFns.getDaysInMonth(new Date(year, monthNumberAfterClick));
  const newMonth = months[monthNumberAfterClick - 1];
  return [newMonth, days, year, getPreviousMonth(newMonth, year)];
};

export const getPreviousMonth = (currentMonth, year) => {
  let currentMonthNumber = getMonthNumber(currentMonth);

  currentMonthNumber--;
  if (currentMonthNumber === 0) {
    currentMonthNumber = 12;
  }
  let previousMonthNumber = currentMonthNumber;

  if (previousMonthNumber === 0) {
    previousMonthNumber = 12;
  }
  return [year, previousMonthNumber];
};
