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
        preResolveTypes: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
