import "./style/main.css";

import { getDates } from "./services/dateService";

import { renderCalendar } from "./ui/calendarUI";
import { renderGrid } from "./ui/grid";
import { renderHabits, initHabit } from "./ui/habbit";
import { renderCount } from "./ui/countUI";

const dates=getDates(30);

function renderAll(){

  renderCalendar(dates);

  renderHabits(renderAll);

  renderGrid(dates);

  renderCount(dates);
}

document.addEventListener("DOMContentLoaded",()=>{

  initHabit(renderAll);

  renderAll();
});