module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "~",
        rootPathSuffix: "src",
      },
    ],
  ],
};
