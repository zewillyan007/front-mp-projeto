export function HumanReadbaleDate(date: string) {
  return date.split(' ')[0].split('-').reverse().join('/');
}
