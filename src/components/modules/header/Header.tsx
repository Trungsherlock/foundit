import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { CustomLink } from '../customLink';
// import { Icon } from "../icon";
import { User } from "./user";
import { useSession, signIn } from "next-auth/react"

const nav = [
  {
    url: "/discover",
    title: "Discover",
  },
  {
    url: "/ideas",
    title: "Ideas",
  },
];

const Header: FC = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  // const [search, setSearch] = useState("");

  // const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
  //   alert();
  // };

  const { data: session} = useSession();

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <CustomLink className={styles.logo} href="/">
          {/* <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            alt="Fitness Pro"
          /> */}
          <h3>FOUND IT</h3>
        </CustomLink>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <CustomLink
                className={styles.link}
                href={x.url}
                key={index}
              >
                {x.title}
              </CustomLink>
            ))}
          </nav>
          {/* <form
            className={styles.search}
            action=""
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form> */}
        </div>
        <CustomLink
          className={cn("button-small", styles.button)}
          href="/upload-variants"
        >
          New Idea
        </CustomLink>
        {(session && session.user) ? (
          <>
            <User className={styles.user} />
            <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
            ></button>
          </>
          ) : (
            <button
            className={cn("button-small", styles.button)}
            onClick={() => signIn()}
            >
              Sign in
            </button>
          
        )}
      </div>
    </header>
  );
};

export default Header;
