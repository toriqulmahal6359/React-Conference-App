
const column = [
    { heading: "Tue"},
    { heading: "Wed"},
    { heading: "Thu"},
    { heading: "Fri"},
    { heading: "Sat"},
    { heading: "Sun"},
];

const TableComponent = () => {
    const columns = useMemo(() => { COLUMNS, []});
    const data = useMemo(() => { DUMMYDATA, []});
    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    <th></th>
                    {headerGroup.headers.map((column) => {
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    })} 
                </tr>
                )}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}