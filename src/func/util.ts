import estraverse from "estraverse";
import escodegen from "escodegen";
import * as ESTree from "estree";

import { checkTime, loopStatements } from "../const/ast";

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
  const entryFunctionStatement = "function __check() {\n";
  const startDeclaration = "__start = performance.now();\n";
  const funcString = entryFunctionStatement + startDeclaration + code + "\n}";
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
            body: [checkTime, ...blockStatement.body],
          },
        };
      }
      return node;
    },
  });
  const attachedString = escodegen
    .generate(attached)
    .slice(startDeclaration.length - 4, -2);
  console.log(attachedString);

  return attachedString;
}

export function isValidCode(code: string, arg?: any): boolean {
  try {
    // eslint-disable-next-line
    Function(attachInfiniteLoopChecker(code))(arg);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function execCode(code: string, arg?: any): string {
  // eslint-disable-next-line
  return Function(code)(arg);
}
