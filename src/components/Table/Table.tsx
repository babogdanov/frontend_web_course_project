import React, { FC, useMemo } from 'react';
import { useTable } from 'react-table'
 
interface TableProps {
    data: any[];
}
const Table: FC<TableProps>= ({data}) => {
 
    console.log(data);

    const columnNames =  useMemo(() => Object.keys(data[0]),[data]);
    const columns = useMemo(() => columnNames.map((x,i) => ({Header: `Column ${i + 1}`, accessor: x})),[columnNames]);
   /* const columns = React.useMemo(
     () => [
       {
         Header: 'Column 1',
         accessor: 'Name', // accessor is the "key" in the data
       },
       {
         Header: 'Column 2',
         accessor: 'Work Hours Per Day',
       },
       {
        Header: 'Column 3',
        accessor: 'field3',
      },
     ],
     []
   ) */
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default Table;