import React, {FC, useState} from 'react';
import cn from "classnames";
import styles from "./SearchBar.module.sass";
import { Icon } from "../icon";


const SearchBar: FC = () => {

    const [search, setSearch] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        alert();
      };
    return (
        <form
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
        </form>
    )
}

export default SearchBar;