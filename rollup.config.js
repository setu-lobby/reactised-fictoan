//import babel from 'rollup-plugin-babel'
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

// const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.tsx",
    external : [
        "styled-components",
        "prism-react-renderer",
        "lodash-es",
        "styled-normalize"
    ],
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            exports: "named"
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            exports: "named"
        }
    ],
    plugins: [
        typescript(),
        external(),
        postcss({
            modules: true
        }),
        url(),
        resolve({
            extensions: [".ts", ".tsx"]
        }),
        commonjs({ extensions: [".ts", ".tsx"] })
    ]
};
