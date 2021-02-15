import React from 'react';
import { useTable, useFilters } from "react-table";
import SC from '../../styles.js';

const Table = ({ columns, data, filter, rowClicked }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useFilters)
  ;

  return (
    <SC.Table {...getTableProps()}>
      <SC.THeadRow>
        {headerGroups.map(headerGroup => (
          <SC.TRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <SC.THeading {...column.getHeaderProps()}>{column.render("Header")}</SC.THeading>
            ))}
          </SC.TRow>
        ))}
      </SC.THeadRow>
      <SC.TBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <SC.TRow {...row.getRowProps()} onClick={() => rowClicked(row.original.id)}>
              {row.cells.map(cell => {
                return <SC.TColumn {...cell.getCellProps()}>{cell.render("Cell")}</SC.TColumn>;
              })}
            </SC.TRow>
          );
        })}
      </SC.TBody>
    </SC.Table>
  );
};

export default Table;