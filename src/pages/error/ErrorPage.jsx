import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log({ error });
  return (
    <div className=" flex justify-center items-center h-screen">
      {error.status === 404 ? (
        <div>
          <img src="404.jpeg" alt="not found" />
          <p className="text-center"> {error.statusText}</p>
        </div>
      ) : (
        <div>
          <p>{error.data}</p>
          <p>{error.error.message}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
