const add = (a, b) => a + b;
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else
        console.log(config.path);
};
const addr = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
