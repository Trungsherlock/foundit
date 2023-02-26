/* eslint-disable @next/next/no-img-element */
import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./IdeasDetails.module.sass";
//import {UserItem} from "../../modules/userItem";
import { TIdeasDetails } from "./types";
import {Users} from "../../modules/control/users";
//import useUserByUid from "../../../hooks/useUserByUid";


const navLinks = ["Author"];

const idea = {
    id: "One",
    title: "Caticorn",
    type: [],
    description: "Paimon is food",
    feature: "none",
    createdAt: "today",
    updatedAt: "",
    authorId: "hehe",
    author: "well",
    categories: [],
};

const user = {
    id: "none",
    name: "A",
    bio: " ",
    facebook: " ",
    twitter: " ",
    email: " ",
    instagram: " ",
    createdAt: " ",
    image: " ",
    ideas: [],
    point: 100
}

const IdeasDetails: FC<TIdeasDetails> = ({ idea }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const author = user;//useUserByUid(issue.authorId);

  const users = [
    {
      name: author?.name || "Unknown",
      position: "Author",
      avatar: author?.image || "/images/content/avatar-2.jpg",
    },
  ];


  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{idea.title}</h1>
            <div className={styles.cate}>
              {idea.categories.map((category: any, index: number) => 
                <div key={index} className={cn("status-purple", styles.tag)}>
                  #{category.name}
                </div>
              )}
            </div>
            {/*Changes */}
            <h2 className={cn("h3", styles.title)}>Description</h2>
            <div className={styles.info}>
              {idea.description}
            </div>
            {/* <h2 className={cn("h3", styles.title)}>Criteria</h2>
            <div className={styles.info}>
              {idea.}
            </div> */}

            {/*End*/}

            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <Users className={styles.users} items={users} />
            {/* <UserItem className={styles.users} items={users} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeasDetails;