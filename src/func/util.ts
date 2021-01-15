import estraverse from "estraverse";
import escodegen from "escodegen";
import * as ESTree from "estree";

import { checkTime } from "../const/ast";

const esprima = require("esprima");

export function viewCode(code: string): string {
  return code
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

function attachInfiniteLoopChecker(code: string): string {
  const startFunc = "function __check() {\n";
  const startTimeMeasurement = "const __start = performance.now();\n";
  const endFunc = "\n}";
  const funcString = startFunc + startTimeMeasurement + code + endFunc;
  console.log(funcString);

  const ast = esprima.parseScript(funcString);
  const attached = estraverse.replace(ast, {
    enter(node) {
      if (node.type === "ForStatement") {
        const blockStatement = node.body as ESTree.BlockStatement;
        return {
          ...node,
          body: {
            ...blockStatement,
            body: [checkTime(200), ...blockStatement.body],
          },
        };
      }
      return node;
    },
  });
  const attachedString = escodegen
    .generate(attached, { format: { indent: { style: "  " } } })
    .slice(startFunc.length, -endFunc.length);
  console.log(attachedString);

  return attachedString;
}

type ExecCodeResult = {
  status: "success" | "error";
  body: string;
};

export function execCode(code: string, arg?: any): ExecCodeResult {
  try {
    // eslint-disable-next-line
    const body = Function(attachInfiniteLoopChecker(code))(arg);
    return { status: "success", body };
  } catch (error) {
    console.error(String(error));
    return { status: "error", body: String(error) };
  }
}
