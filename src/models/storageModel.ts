import type { Habit } from "./habbitModel";
import type { HabitLog } from "./logModel";

export interface StorageData{
  habits:Habit[];
  logs:HabitLog[];
}