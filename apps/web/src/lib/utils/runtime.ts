export const runtimeMinutesToHours = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours} hr ${minutes} min`;
};
