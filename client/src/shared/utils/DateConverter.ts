import { Timestamp } from "firebase/firestore";

export const timeStampToString = (timeStamp: number | string) => {
    try{
        const date2 = new Date(timeStamp);
    }catch(error){
        console.log("Date error", error)
    }

    if(typeof parseInt(timeStamp.toString()) != 'number') return ''
    const date = new Date(timeStamp);

    console.log("Date", date)
    // Get the components of the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    // Create the string date in the desired format (e.g., "YYYY-MM-DD")
    const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}  ${hour}:${minute}`;
    // return date.toISOString();
    return dateString;
}

export const todayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

export const currenMillis = () => {
    return Date.now()
}