import React, {FC, useEffect, useState} from "react";
import cn from "classnames";
import styles from "./WebList.module.sass";
import {data} from "../../mock/data";
import { getRandomData } from "utils/getRandomData";
import { TWebData } from "types/WebData";
import Link from "next/link";

const WebList: FC = () => {

    const [randomData, setRandomData] = useState<TWebData[]>();

    useEffect(() => {
        setRandomData(getRandomData(data));
    }, []);

    return (
        <div className={styles.chain}>
            {randomData ? randomData.map((d, index) => (
            <Link className={styles.head} style={{ textDecoration: 'none' }} href={d.url} key ={index} target="_blank">
                <div className={styles.avatar}>
                    <img src={d.image}/>
                </div>
                <div>
                    <div className={styles.username}>
                        {d.name}
                    </div>
                </div>
            </Link>
            ))
                : <span>Loading...</span>
        }
        </div>
    )
}

export default WebList;