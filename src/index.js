module.exports = function check(str, bracketsConfig) {
    const config = bracketsConfig.join("").split(",").join("");
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let index = config.indexOf(str[i]);

        if (index === -1) {
            continue;
        }

        if (config[index] === config[index + 1]) {
            if (str[i] === str[i + 1]) {
                i++;
            } else if (str[i] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else {
            if (index % 2 === 0) {
                stack.push(config[index + 1]);
            } else {
                if (stack.pop() !== config[index]) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
