import { initialCode } from "./code";

export function viewCode(): string {
  return initialCode
    .split("\n")
    .filter((_, i, arr) => i !== 0 && i !== arr.length - 1)
    .map((line) => line.slice(2))
    .join("\n");
}

export function getByteLen(s: string): number {
  // 関数部分を除去
  s = s
    .replace(/\r/g, "")
    .replace(/^.+?{|}\n*?$/g, "")
    .replace(/^\n+|\n+$/g, "");

  // 全角2文字でバイト数取得
  var len = 0;
  for (var i = 0; i < s.length; i++) {
    len += s.charCodeAt(i) > 255 ? 2 : 1;
  }
  return len;
}

export function isValidCode(code: string): boolean {
  try {
    // eslint-disable-next-line
    Function(code)();
    return true;
  } catch (error) {
    return false;
  }
}

export function execCode(code: string): string {
  // eslint-disable-next-line
  return Function(code)();
}
