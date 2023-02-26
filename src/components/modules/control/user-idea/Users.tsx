import React from "react";
import {FC} from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import {TUsers} from "./types"

const Users: FC<TUsers> = ({ className, items }) => {
  return (
    <div className={cn(styles.users, className)}>
      <div className={styles.list}>
        {items.map((x:any, index:any) => (
          <div className={styles.item} key={index}>
            <div className={styles.image}>
              <img src={x.image} alt="Avatar" />
              {x.reward && (
                <div className={styles.reward}>
                  <img src={x.reward} alt="Reward" />
                </div>
              )}
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{x.name}</div>
              <div className={styles.email}>{x.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;