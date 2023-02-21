import {TWebData} from "../types/WebData"

export const getRandomData = (data: TWebData[]) : (TWebData[] | undefined) => {
    let rdata: TWebData[] = [];
    let index: number[] = [];
    let i = 0;
    while (i < 20) {
        let randomIndex = Math.floor(Math.random() * data.length)
        if (!index.includes(randomIndex)) {
            index.push(randomIndex);
            rdata.push(data[randomIndex]);
            i++;
        }
    }
    return rdata;
} 