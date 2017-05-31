export interface Application {
  firstName: string,
  lastName: string,
  email: string,
  text: string,
  status: string,
  date: string,
  games: string[]
}
;

export const composedGameString = (item) => {
  let result: string = '';
  item.games.forEach((v, i, a) => {
    result += v;
    if (i < a.length - 1) result += ', ';
  });
  return result;
}
