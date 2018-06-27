export const sortTable = (
    datalist,
    attribute,
    tableSortStatus
) => {
    const sortBy = (tableSortStatus[attribute]) ?
        (tableSortStatus[attribute] === 'ascending') ?
        'descending' :
        'ascending' :
        'ascending';
    const datatype = typeof(datalist[0][attribute]);
    tableSortStatus[attribute] = sortBy;

    datalist = datalist.sort(function (dataFirst, dataSecond) {
        if (datatype === 'string') {
            dataFirst[attribute] = dataFirst[attribute].toLowerCase();
            dataSecond[attribute] = dataSecond[attribute].toLowerCase();

            if (sortBy === 'ascending' &&
                dataFirst[attribute] <= dataSecond[attribute]
            ) {
                return 1;
            }

            if (sortBy === 'descending' &&
                dataFirst[attribute] > dataSecond[attribute]
            ) {
                return 1;
            }
        }

        if (datatype === 'number') {
            return (sortBy === 'ascending') ?
                dataFirst[attribute] - dataSecond[attribute] :
                dataSecond[attribute] - dataFirst[attribute];
        }
    });
    // console.log(['sort table', datalist, attribute, tableSortStatus[attribute], sortBy, typeof(datalist[0][attribute])]);

    return datalist;
};
