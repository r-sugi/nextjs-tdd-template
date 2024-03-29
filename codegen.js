// TODO: 環境変数の整理
// TODO: ymlにしたい
module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          Authorization: "Bearer " + process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ["src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
