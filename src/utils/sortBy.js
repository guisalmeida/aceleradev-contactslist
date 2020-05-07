const sortBy = (arr, filter = "id", desc = true) => {
    const tmp = [...arr];
    const greater = desc ? 1 : -1;
    const lower = greater * -1;
    const equal = 0;
    tmp.sort((a, b) =>
        a[filter] === b[filter] ? equal : a[filter] > b[filter] ? greater : lower
    );
    return tmp;
};

export default sortBy;