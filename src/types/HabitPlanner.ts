export type HabitTask = {
  task: string;
  done: boolean;
};

export type HabitDay = {
  day: string;
  hour1: HabitTask[];
  hour2: HabitTask[];
  hour3: HabitTask[];
  hour4: HabitTask[];
  hour5: HabitTask[];
  hour6: HabitTask[];
  hour7: HabitTask[];
  hour8: HabitTask[];
  hour9: HabitTask[];
};
