import * as ESTree from "estree";

export const loopStatements: ESTree.Node["type"][] = [
  "ForStatement",
  "DoWhileStatement",
  "WhileStatement",
  "ForInStatement",
  "ForOfStatement",
];

export const checkTime = (milliseconds: number): ESTree.Statement => {
  const sec = (milliseconds / 1000).toFixed(2);
  const timeLimitErrorMsg = `TimeLimitError: The execution time has exceeded ${sec} seconds.`;
  return {
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
      right: { type: "Literal", value: milliseconds, raw: `${milliseconds}` },
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
              {
                type: "Literal",
                value: timeLimitErrorMsg,
                raw: `"${timeLimitErrorMsg}"`,
              },
            ],
            optional: false,
          },
        },
      ],
    },
    alternate: null,
  };
};

export default { checkTime };
