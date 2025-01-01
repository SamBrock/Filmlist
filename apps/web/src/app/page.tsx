import { Habit } from '@/components/habits/Habit';
import { trpc } from '@/lib/trpc';

export default async function Home() {
  const habits = await trpc.habits.getUserHabits.query({ userId: 1 });

  return (
    <div className="mx-auto my-12 grid max-w-4xl grid-cols-3 gap-4">
      <div className="col-span-2 col-start-1 space-y-4">
        {habits.map((h) => (
          <Habit key={h.id} habit={h}></Habit>
        ))}
      </div>
      {/* <div className="bg-foreground col-start-3 h-[400px] rounded-lg"></div> */}
    </div>
  );
}
