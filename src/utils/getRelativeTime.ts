const getRelativeTime = (time: string) => {

    const currentTime = Date.parse((new Date()).toString());

    const timeInMilliseconds = Date.parse(time);

    const differenceInSeconds = (currentTime - timeInMilliseconds)/1000;

    if (differenceInSeconds < 0)
        return 'Do futuro';
    else if (Math.round(differenceInSeconds) < 60)
        return Math.round(differenceInSeconds) + ' s';
    else if (Math.round(differenceInSeconds) < 3600)
        return (differenceInSeconds/60) + ' min';
    else if (Math.round(differenceInSeconds) < 3600*24)
        return Math.round(differenceInSeconds/3600) + ' h';
    else if (Math.round(differenceInSeconds) < 3600*24*30) {
        if (Math.round(differenceInSeconds/3600/24) > 1) 
            return Math.round(differenceInSeconds/3600/24) + ' dias';
        else
            return Math.round(differenceInSeconds/3600/24) + ' dia';
    } else if (Math.round(differenceInSeconds) < 3600*24*365) {
        if (Math.round(differenceInSeconds/3600/24/30) > 1) 
            return Math.round(differenceInSeconds/3600/24/30) + ' meses';
        else 
            return Math.round(differenceInSeconds/3600/24/30) + ' mês';
    } else {
        if (Math.round(differenceInSeconds/3600/24/365) > 1) 
            return Math.round(differenceInSeconds/3600/24/365) + ' anos';
        else 
            return Math.round(differenceInSeconds/3600/24/365) + ' ano';
    }
    
}

export default getRelativeTime;