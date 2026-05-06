import type { Habit } from "../models/habbitModel";

type StorageData={
    habits:Habit[];
};

const KEY="habit-tracker";

export function getData():StorageData{
    const raw=localStorage.getItem(KEY);
    if(!raw) return {habits:[]};
    return JSON.parse(raw);
}

export function saveData(data:StorageData){
    localStorage.setItem(KEY,JSON.stringify(data));
}