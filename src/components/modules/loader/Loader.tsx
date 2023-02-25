import React, {FC} from "react";
import cn from "classnames";
import styles from "./Loader.module.sass";
import {TLoader} from "./types";

const Loader: FC<TLoader> = ({ className, color }) => {
  return (
    <div
      className={cn(styles.loader, className, {
        [styles.loaderWhite]: color === "white",
      })}
    ></div>
  );
};

export default Loader;
