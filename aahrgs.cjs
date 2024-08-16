function aahrgs(argv) {
  return argv.reduce(([nextValue, args], arg) => {
    if (arg.startsWith("--")) {
      args[arg.slice(2)] = true;
      return [arg.slice(2), args];
    }

    if (arg.startsWith("-")) {
      args[arg.slice(1)] = true;
      return [arg.slice(1), args];
    }

    if (nextValue) {
      args[nextValue] = arg;
      return [false, args];
    }

    return [null, args];
  }, [null, {}])[1];
}

module.exports = aahrgs;
