import styled from "styled-components";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  App: styled.div`
    width: 100%;
    color: #24292e;
  `,
  Layout: styled.div`
    padding: 0.5rem;
    width: 100%;
  `,
  Label: styled.label`
    margin: 1rem;
  `,
  Search: styled.input`
    margin: 1rem;
    width: 250px;
    padding: 0.5rem;
  `,
  Loader: styled.p`
    margin: 8px;
    padding-left: 8px;
    color: #777;
  `,
  NoDataFound: styled.p`
    margin: 8px;
    padding-left: 8px;
    color: red;
  `,
  Posts: styled.div`
    font-size: 16px;
    margin: 1rem;
  `,
  Users: styled.div`
    overflow-x: auto;
    margin: 1rem;
  `,
  Table: styled.table`
    display: table;
    width: 100%;
    margin: 1rem 0;
    font-size: 1rem;
    border: 1px solid #c6cbd1;
    border-collapse: collapse;

    .post-title {
       width: 25%;
    }

    .post-body {
       width: 75%;
    }
  `,
  TBody: styled.tbody`
    text-align: center;
    border: 1px solid #c6cbd1;
  `,
  THeadRow: styled.thead`
    text-align: center;
  `,
  THeading: styled.th`
    text-align: center;
    border: 1px solid #c6cbd1;
    padding: 10px;
    text-align: right;
    &:first-child, &:nth-child(2){
      text-align: center;
    }
  `,
  TRow: styled.tr`
    cursor: pointer;
    border: 1px solid #c6cbd1;
    &:nth-child(even) {background-color: #f6f8fa;}
    &:hover {
      background-color: #f2f2f2;
    }
  `,
  TColumn: styled.td`
    border-left: 1px solid #c6cbd1;
    padding: 4px 8px;
    text-align: right;
    &:first-child{
      text-align: left;
    }
    &:nth-child(2){
      text-align: center;
    }
  `,
};
