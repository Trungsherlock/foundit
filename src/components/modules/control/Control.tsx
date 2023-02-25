import React, {FC} from "react";
import cn from "classnames";
import { CustomLink } from '../customLink';
import styles from "./Control.module.sass";
import {Icon} from "../icon";
import { TControl } from "./types";

const Control:FC<TControl> = ({ className, item }) => {
  return (
    <div className={cn(styles.control, className)}>
      <div className={cn("container", styles.container)}>
        <CustomLink
          className={cn("button-stroke button-small", styles.button)}
          href="/"
        >
          <Icon name="arrow-prev" size="10" />
          <span>Back to home</span>
        </CustomLink>
        <div className={styles.breadcrumbs}>
          {item.map((x, index) => (
            <div className={styles.item} key={index}>
              {x.url ? (
                <CustomLink className={styles.link} href={x.url}>
                  {x.title}
                </CustomLink>
              ) : (
                x.title
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Control;
