import React from "react";

function CardFooter({ item }) {
  const { description, imageSrc, links } = item;
  return (
    <div
      className={`flex flex-col justify-center items-center max-w-[300px] p-5 m-5`}
    >
      <img src={imageSrc} alt="hhh" width={150} height={150} />
      <p className="my-5 text-sm text-right font-alata ">
        <bdi>{description}</bdi>
      </p>
      <div className="flex space-x-2">
        {/* TODO hover change color gradien and change svg icon */}
        <a href={links.facebook}>
          {" "}
          <img src="facebook.svg" alt="fb" />{" "}
        </a>
        <a href={links.twitter}>
          {" "}
          <img src="twitter.svg" alt="twitter" />{" "}
        </a>
        <a href={links.linkedin}>
          {" "}
          <img src="linkedin.svg" alt="linkedin" />{" "}
        </a>
        {/* TODO change svg for youtube */}
        <a href={links.youtube}>
          {" "}
          <img src="instagram.svg" alt="instagram" />{" "}
        </a>
      </div>
    </div>
  );
}

export default CardFooter;
