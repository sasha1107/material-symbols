module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: "input",
        name: "path",
        message: "추가된 컴포넌트 경로 입력",
      })
      .then(({ path }) => {
        const name = path.split("/").pop().replace(".tsx", "");
        if (!name) {
          throw new Error("컴포넌트가 유효하지 않습니다.");
        }
        return {
          name,
          args,
        };
      }),
};
