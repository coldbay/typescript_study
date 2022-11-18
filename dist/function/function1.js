const add = (a, b) => a + b;
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else
        console.log(config.path);
};
// 많은 구조
