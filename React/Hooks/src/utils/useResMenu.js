import { useEffect, useState } from "react";
import { MENU_URL1 } from './constants';

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL1 + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
        console.log(jsonData);
    }

    return resInfo;
}

export default useResMenu;