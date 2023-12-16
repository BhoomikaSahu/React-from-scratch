import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    let [status, setStatus] = useState(true);
    useEffect(() => {
        addEventListener('online', () => {
            setStatus(true);
        });
        addEventListener('offline', () => {
            setStatus(false);
        })
    }, []);
    return status;
}

export default useOnlineStatus;