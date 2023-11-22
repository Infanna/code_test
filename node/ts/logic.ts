function getYearMessageInThai({
    day,
    month,
    year,
}: {
    day: number;
    month: number;
    year: number;
}) {
    return `${year || 0} ปี ${month || 0} เดือน ${day || 0} วัน`;
}

console.log(getYearMessageInThai({ day: '1', month: '2', year: '3' }))