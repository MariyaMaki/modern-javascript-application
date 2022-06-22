import { getWeekDays } from "./getWeekDays.js";
//fonction qui retourne le nom du jour
export function getDayName(index) {
  let weekDays = getWeekDays("fr-Be");
  const currentDay = new Date().getDay();
  let DayIndex = currentDay - 1 + index;
  return weekDays[DayIndex < 7 ? DayIndex : DayIndex - 7];
}
