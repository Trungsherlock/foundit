import React from "react";
import {FC} from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import {TUsers} from "./types";
import useUserByUid from "@/hooks/useUserByUid";

const Users: FC<TUsers> = ({ className, product }) => {

  const author = useUserByUid(product.authorId);

  const users = [
    {
      name: author?.name || "Unknown",
      position: "Author",
      image: author?.image || "/images/content/avatar-2.jpg",
    },
  ];

  return (
    <div className={cn(styles.users, className)}>
      <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.avatar}>
              <img src={users[0]?.image} alt="Avatar" />
            </div>
            <div className={styles.details}>
              <div className={styles.position}>{users[0].position}</div>
              <div className={styles.name}>{users[0]?.name}</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Users;