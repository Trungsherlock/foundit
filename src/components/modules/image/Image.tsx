/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { TImage } from "./types";


const Image: FC<TImage> = ({ className, src, srcSet, alt }) => {
  return (
    <img
      className={className}
      srcSet={srcSet}
      src={src}
      alt={alt}
    />
  );
};

export default Image;