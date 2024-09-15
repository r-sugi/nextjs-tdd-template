require("dotenv").config();

module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_URI ??
      "http://localhost:8080/v1/graphql"]: {
        headers: {
          Authorization:
            "Bearer " + process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "xxxxxx",
        },
      },
    },
  ],
  documents: ["src/**/*.graphql"],
  overwrite: true,
  customization: {
    naming_convention: "graphql-default",
  },
  enumsAsConst: true,
  avoidOptionals: {
    field: true,
    inputValue: false,
    object: true,
    defaultValue: false,
  },
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: "string", // TODO: 厳密な型定義
          bigint: "number",
          date: "string",
          timestamptz: "string",
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
