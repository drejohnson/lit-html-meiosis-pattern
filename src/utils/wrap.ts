export const wrap = (fn: any, amt: number) => {
  const args = Array.from(arguments).slice(1);

  return (_evt: any) => {
    if (fn) {
      fn.apply(null, args);
    }
  };
};

export const safe = (fn: any) => {
  if (fn) {
    return fn;
  }
  return (_evt: any) => {};
};
