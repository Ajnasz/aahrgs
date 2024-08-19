function aahrgs(argv) {
  const result = argv.reduce(([currentKey, args], arg) => {
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      args[key] = true;
      return [key, args];
    }

    if (arg.startsWith('-')) {
      const key = arg.slice(1);
      args[key] = true;
      return [key, args];
    }

    if (currentKey) {
      args[currentKey] = arg;
      return [null, args];
    }

    return [null, args];
  }, [null, Object.create(null)])[1];

  return Object.freeze(result);
}

module.exports = aahrgs;
