import sortBy from './sortBy';

const searchFilter = (arr, query, filter) => {    
    if (!query) return arr;
    // Search list by name
    const tmp = [...arr].filter(({ name }) => name.toLowerCase().includes(query))
    return sortBy(tmp, filter);
};

export default searchFilter;