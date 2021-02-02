import React from "react";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  return (
    <tbody>
      {results.map((result) => (
        <tr>
          <th scope="row" className="text-center">
            <img
              src={result.picture.thumbnail}
              alt={result.login.uuid}
              className="img-fluid"
            />
          </th>
          <td className="text-center">
            {result.name.first} {result.name.last}
          </td>
          <td className="text-center">{result.dob.age}</td>
          <td className="text-center">{result.phone}</td>
          <td className="text-center">{result.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;
