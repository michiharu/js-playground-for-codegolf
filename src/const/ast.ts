import * as ESTree from "estree";

export const loopStatements: ESTree.Node["type"][] = [
  "ForStatement",
  "DoWhileStatement",
  "WhileStatement",
  "ForInStatement",
  "ForOfStatement",
];

export const checkTime: ESTree.Statement = {
  type: "IfStatement",
  test: {
    type: "BinaryExpression",
    operator: ">",
    left: {
      type: "BinaryExpression",
      operator: "-",
      left: {
        type: "CallExpression",
        callee: {
          type: "MemberExpression",
          computed: false,
          object: { type: "Identifier", name: "performance" },
          property: { type: "Identifier", name: "now" },
          optional: false,
        },
        arguments: [],
        optional: false,
      },
      right: { type: "Identifier", name: "__start" },
    },
    right: { type: "Literal", value: 100, raw: "100" },
  },
  consequent: {
    type: "BlockStatement",
    body: [
      {
        type: "ThrowStatement",
        argument: {
          type: "CallExpression",
          callee: { type: "Identifier", name: "Error" },
          arguments: [
            { type: "Literal", value: "InfiniteLoop", raw: '"InfiniteLoop"' },
          ],
          optional: false,
        },
      },
    ],
  },
  alternate: null,
};

export default { checkTime };
