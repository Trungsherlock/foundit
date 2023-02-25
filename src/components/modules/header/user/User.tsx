import React, { FC, useState } from "react";
import { CustomLink } from "../../customLink";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import { Icon } from "../../icon";
import { TU } from "./types";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const User: FC<TU> = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const { data: session} = useSession();
  const router = useRouter();
  const disconnect = () => {
    signOut();
    router.push("/");
  }

  const items = [
    {
      title: "My profile",
      icon: "user",
      url: `/profile/${session?.user.id}`,
    },
    {
      title: "My ideas",
      icon: "image",
      url: "/item",
    },
    {
      title: "Disconnect",
      icon: "exit",
    },
  ];

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src={session?.user.image} alt="Avatar" />
          </div>
          <div>
            <div className={styles.username}>
              {session?.user.name}
            </div>
            <div className={styles.email}>
              {session?.user.email}
            </div>
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.name}>{session?.user.name}</div>
            <div className={styles.code}>
              <span className={styles.number}>100 points</span>
              <button className={styles.copy}>
                <Icon name="copy" size="16" />
              </button>
            </div>
            <div className={styles.menu}>
              {items.map((x, index) =>
                x.url ? (
                  x.url.startsWith("http") ? (
                    <a
                      className={styles.item}
                      href={x.url}
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </a>
                  ) : (
                    <CustomLink
                      className={styles.item}
                      href={x.url}
                      onClick={() => setVisible(!visible)}
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </CustomLink>
                  )
                ) : (
                  x.icon.startsWith("exit") ? (
                    <a
                      className={styles.item}
                      href={"/"}
                      onClick={() => disconnect()}
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </a>
                  ) : (
                    <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>My profile</div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
