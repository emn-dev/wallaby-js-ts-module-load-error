module.exports = function (wallaby) {
  return {
    debug: false,

    files: ["tsconfig.json", "lib/**/*.*"],
    // files: ["lib/**/*.*"],

    tests: ["test/**/*.test.ts"],

    env: {
      type: "node",
    },

    testFramework: "mocha",

    compilers: {
      "**/*.+(t|j)s?(x)": wallaby.compilers.typeScript(),
    },

    preprocessors: {
      "**/*.jsts": (file) => file.changeExt("js").content,
    },

    //executed in test framework context
    setup: function (wallaby) {
      const paper = require("paper-jsdom");
      const chai = require("chai");
      chai.use(require("sinon-chai"));
      global.expect = require("chai").expect;
      global.sinon = require("sinon");

      if (global._tsconfigPathsRegistered) return;
      const tsConfigPaths = require("tsconfig-paths");
      const tsconfig = require("./tsconfig.json");
      tsConfigPaths.register({
        baseUrl: tsconfig.compilerOptions.baseUrl,
        paths: tsconfig.compilerOptions.paths,
      });
      global._tsconfigPathsRegistered = true;
      paper.setup([100, 100]);
    },
  };
};
