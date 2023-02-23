export const updatedAt = (date: string | null | undefined) : string => {
    if (!date) return ""
   const year = date.slice(0,4);
   const monthInNumber = Number(date.slice(5,7));
   const monthOptions = [
    "Jan", "Feb",  "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   const month = monthOptions[monthInNumber-1];
   const day = date.slice(8,10);
   const res = "Updated at " + month + " " + day + ", " + year;
   return res;
}
