import React from "react";
import SearchResults from "./SearchResults.js";
import "../styles/TableHeading.css";

function TableHeadings({ results, headers, sortResults }) {
  return (
    <table className="table table-striped">
      <thead className="table__headings">
        <tr>
          {headers.map(({ title, width }) => (
            <th
              scope="col"
              style={{ width }}
              className="text-center"
              onClick={() => {
                sortResults(title);
              }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <SearchResults className="table__results" results={results} />
    </table>
  );
}

export default TableHeadings;
