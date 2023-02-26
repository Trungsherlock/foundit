/* eslint-disable @next/next/no-img-element */
import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./IdeasDetails.module.sass";
//import {UserItem} from "../../modules/userItem";
import { TIdeasDetails } from "./types";
import {Users} from "../../modules/control/user-idea";
import useUserByUid from "../../../hooks/useUserByUid";
import { Icon } from "@/components/modules/icon";
import { updatedAt } from "utils/updatedAt";

const navLinks = ["Author"];


//Later change every idea to idea in the code
const idea = {
    id: "One",
    title: "Caticorn",
    type: [],
    description: "Problem 1. K&T Ch 3, Ex 3. The algorithm described in Section 3.6 for computing topological ordering of a DAG repeatedly finds a node with no incoming edges and deletes it. This will eventually produce a topological ordering, provided that the input graph really is a DAG. But suppose that we’re given an arbitrary graph that may or may not be a DAG. Extend the topological ordering algorithm so that, given an input directed graph G, it outputs one of two things: (a) a topological ordering, thus establishing that G is a DAG; or (b) a cycle in G, thus"
    ,
    feature: "Give an efficient algorithm to compute the pairwise connectivity of an arbitrary input graph G and analyze its running time. Full credit will be given for an algorithm with running time O(m + n). An algorithm cannot check all n 2 pairs in O(m + n) time, so to achieve this running time you will have to find another way to arrive at the same value. ",
    createdAt: "today",
    updatedAt: "",
    authorId: "hehe",
    author: "well",
    categories: [],
};

const user = [{
    id: "No other than me",
    name: "Ahaha",
    position: "Caticorn",
    bio: " ",
    facebook: " ",
    twitter: " ",
    email: "ahaha@yahoo.com ",
    instagram: " ",
    createdAt: " ",
    image: "../images/content/avatar-2.jpg",
    ideas: [],
    point: 100
}];

const IdeasDetails: FC<TIdeasDetails> = ({ idea }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const author = useUserByUid(idea.authorId);

  const users = [
    {
      name: author?.name || "Unknown",
      position: "Author",
      image: author?.image || "/images/content/avatar-2.jpg",
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
                  #{category}
                </div>
              )}
            </div>
            {/*Changes */}
            <h2 className={cn("h3", styles.title_small)}>Description</h2>
            <div className={styles.info}>
              {idea.description}
            </div>
            <h2 className={cn("h3", styles.title_small)}>Feature</h2>
            <div className={styles.info}>
              {idea.feature}
            </div>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                <button className={styles.copy}>
                <Icon name="heart" size="22" />
              </button>
              <div className={styles.number}>100</div>
              </div>
              <div className={styles.counter}>{updatedAt(idea.updatedAt)}</div>
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
            <div className={styles.group}>
              <div className={styles.item}>
                 {activeIndex === 0 && (
                <div>
                  <Users className={styles.users} items={users} />
                </div>
                  )
                }
              </div>
            </div>
            
            {/* <UserItem className={styles.users} items={users} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeasDetails;