/* eslint-disable @next/next/no-img-element */
import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./SearchResults.module.sass";
import {Users} from "../../modules/control/user-idea";
import { Icon } from "@/components/modules/icon";
import { TSearch } from "./types";
const navLinks = ["Author"];
import Script from 'next/script'
//import "./Search.module.css";

//Later change every idea1 to idea in the code



const SearchResults: FC<TSearch> = ({  }) => {


    const [search, setSearch] = useState("");
    const href: string = "/";
  const [hydrated, setHydrated] = useState(false);
  React.useEffect(()=>{
    setHydrated(true);
  },[])
  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <form
                // className={styles.search}
                action="/search-results"
                method = "get"
                role = "search"
            >
                {/* <input */}
                
                {/* <button className={styles.result}>
                <Icon name="search" size="16" />
                </button> */}
            </form>
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}> Search Bar </h1>
            <Script src="https://cse.google.com/cse.js?cx=4415b70f284ac4d48"/>
            <div className="gcse-search"></div>
          </div>
          
        </div>
        
      </div>
    
    </>
  );
};

export default SearchResults;

// className={styles.input}
                // type="text"
                // autoComplete = "off"
                // name="search"
                // placeholder="Search ..."
                //