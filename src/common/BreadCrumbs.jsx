import React from "react";
import { useMatches } from "react-router-dom";

function BreadCrumbs() {
  const matches = useMatches();

  let crumbs = matches
    .filter((elem) => Boolean(elem.handle?.crumb))
    .map((match) => match.handle.crumb());
  const NbrCrumbs = crumbs.length;
  return (
    <div className="bg-green-900 p-2 m-2">
      {crumbs.map((crumb, index) => {
        return (
          <div className="bg-yellow-300 m-1 inline-block " key={index}>
            {crumb} {index < NbrCrumbs - 1 && "/"}
          </div>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
