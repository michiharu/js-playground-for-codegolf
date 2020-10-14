export const initial = `function initialCode() {
  now = arguments[0];
  console.log(arguments)

  // 結果を戻して終了
  return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}`;

export function original() {
  const now: Date = arguments[0];

  // 結果を戻して終了
  return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}
