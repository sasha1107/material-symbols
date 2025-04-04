var { toUnion, toStringUnion } = require("../utils.js");

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Material Symbols Icon 이름을 입력하세요.",
      })
      .then(({ name }) => {
        if (!name) {
          throw new Error("Icon 이름이 없습니다.");
        }
        const variantChoices = [
          "sharp",
          // "outlined",
          // "rounded",
        ];
        return prompter
          .multiselect({
            type: "input",
            name: "variant",
            message: "아이콘의 Style을 선택하세요.",
            choices: variantChoices,
          })
          .then((variant) => {
            const weightChoices = [
              // "100",
              // "200",
              // "300",
              // "400",
              "500",
              // "600",
              // "700",
            ];
            return prompter
              .multiselect({
                type: "input",
                name: "weight",
                message: "아이콘의 Weight를 선택하세요.",
                choices: weightChoices,
              })
              .then((weight) => {
                if (weight.length === 0) {
                  throw new Error("Weight를 선택하세요!");
                }
                return {
                  variant,
                  weight,
                  weightUnion: toUnion(weight),
                  name: name,
                  variantUnion: toStringUnion(variant),
                  args,
                };
              });
          });
      }),
};
