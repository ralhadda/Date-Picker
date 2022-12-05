import { getMonthNumber, months } from "./constants.js";
import { clickLeftCalculation, clickRightCalculation } from "./calculations.js";
import {
  dateButton,
  datePickerHeader,
  previousMonthButton,
  nextMonthButton,
  currentMonthLabel,
  datePicker,
  datePickerDates,
  button
} from "./elements.js";

let year = dateButton.innerHTML.split(" ")[2];
let currentMonth = dateButton.innerHTML.split(" ")[0];
let days = dateFns.getDaysInMonth(new Date(year, 9));

const changeCalenderUI = (numOfDays, yearMonth) => {
  datePickerDates.innerHTML = "";
  const otherMonthDaysNumber = 35 - numOfDays;
  let daysPreviousMonth = dateFns.getDaysInMonth(
    new Date(yearMonth[0], yearMonth[1] - 1)
  );

  for (let i = otherMonthDaysNumber; i > 0; i--) {
    let buttonDay = document.createElement("button");
    buttonDay.innerText = daysPreviousMonth - i;
    buttonDay.className = "date date-picker-other-month-date";
    datePickerDates.append(buttonDay);
  }
  for (let i = 0; i < numOfDays; i++) {
    let buttonDay = document.createElement("button");
    buttonDay.innerText = i + 1;
    buttonDay.className = "date";
    datePickerDates.append(buttonDay);
  }
};

const getPreviousMonth = (currentMonth, year) => {
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

const pickDate = () => {
  datePicker.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.className === "date") {
      //e.target.className = "date selected";
      dateButton.innerHTML =
        currentMonth + " " + e.target.innerText + "th, " + year;
      datePicker.className = "date-picker";
    }
  });
};

changeCalenderUI(days, getPreviousMonth(currentMonth, year));
pickDate();

dateButton.addEventListener("click", e => {
  e.preventDefault();
  datePicker.className = "date-picker show";
  button.forEach(element => {
    if (element.className === "date selected") {
      console.log(element, "found");
    }
  });
});

previousMonthButton.addEventListener("click", e => {
  e.preventDefault();
  const leftCalc = clickLeftCalculation(currentMonth, year, days);
  currentMonthLabel.innerHTML = leftCalc[0] + " - " + leftCalc[2];
  year = leftCalc[2];
  currentMonth = leftCalc[0];
  changeCalenderUI(leftCalc[1], leftCalc[3]);
  pickDate();
});

nextMonthButton.addEventListener("click", e => {
  e.preventDefault;
  const rightCalc = clickRightCalculation(currentMonth, year, days);
  currentMonthLabel.innerHTML = rightCalc[0] + " - " + rightCalc[2];
  year = rightCalc[2];
  currentMonth = rightCalc[0];
  changeCalenderUI(rightCalc[1], rightCalc[3]);
  pickDate();
});
