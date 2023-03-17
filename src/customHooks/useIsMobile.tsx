import React, { useEffect, useState } from "react"

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(checkWidth())

    function checkWidth() {
        if(window.innerWidth < 768) {
            return true
        }
        else {
            return false
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(checkWidth())
        })
    }, []) 

    return isMobile;
}