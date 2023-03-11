import { number } from 'echarts';
import { missionStore } from '../../src/store/collection';

export function getTodayMission(info: { year: number, month: number, date: number }) {
	if (missionStore.all.length === 0) return []
	return missionStore.all.filter(item => {
		return isTaskInDay(item, `${info.year}-${info.month}-${info.date}`)
	})
}

export function isTaskInDay(task: Mission, date: string) {
  let taskDate = new Date(task.dealline); // 解析任务日期字符串并创建Date对象
  let targetDate = new Date(date); // 解析目标日期字符串并创建Date对象
  let dayStart = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()); // 获取目标日期的起始时间
  let dayEnd = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate() + 1); // 获取目标日期的结束时间

  // 判断任务是否在目标日期内
  if (taskDate >= dayStart && taskDate < dayEnd) {
    return true;
  }

  let createTaskDate = new Date(task.createtime); // 解析任务创建日期字符串并创建Date对象

  // 判断任务创建时间是否在目标日期内
  if (createTaskDate >= dayStart && createTaskDate < dayEnd) {
    return true;
  }

  return false; // 任务不在目标日期内
}
