export const compareDate = (date1: string | null | undefined, date2: string | null | undefined) : number => {
    if (!date1 || !date2) return 0
    const year1 = Number(date1?.slice(0,4))
    const year2 = Number(date2?.slice(0,4))
    const month1 = Number(date1?.slice(5,7))
    const month2 = Number(date2?.slice(5,7))
    const day1 = Number(date1?.slice(8,10))
    const day2 = Number(date2?.slice(8,10))
    const hour1 = Number(date1?.slice(11,13))
    const min1 = Number(date1?.slice(14,16))
    const sec1 = Number(date1?.slice(17,19))
    const hour2 = Number(date2?.slice(11,13))
    const min2 = Number(date2?.slice(14,16))
    const sec2 = Number(date2?.slice(17,19))

    if (year1 !== year2) {
        return year1 - year2;
    } else {
        if (month1 !== month2) {
            return month1 - month2;
        } else {
            if (day1 !== day2) {
                return day1 - day2;
            } else {
                if (hour1 !== hour2) {
                    return hour1 - hour2;
                } else if (min1 != min2) {
                    return min1 - min2;
                } return sec1 - sec2;
            }
        }
    }
}
