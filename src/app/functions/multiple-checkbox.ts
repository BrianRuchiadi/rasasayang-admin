export const multipleCheckbox = (
    checkStart,
    checkEnd,
    datalist
) => {
    let checkStartIndex = datalist.findIndex((data: any) => data.id === checkStart);
    let checkEndIndex = datalist.findIndex((data: any) => data.id === checkEnd);

    if (checkStartIndex > checkEndIndex) {
        [checkStartIndex, checkEndIndex] = [checkEndIndex, checkStartIndex];
    }

    for (let i = checkStartIndex; i <= checkEndIndex; i++) {
        datalist[i].isSelected = true;
    }
};


