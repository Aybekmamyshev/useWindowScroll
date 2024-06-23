import {useEffect, useState} from "react";


interface IScroll {
    x?: number,
    y?: number
}


const scrollObject: IScroll = {
    x: 0,
    y: 0
}
export const useWindowScroll = () => {
    const [scroll, setScroll] = useState(scrollObject)


    useEffect(() => {
        function windowScroll() {
            setScroll({
                x: window.scrollX,
                y: window.scrollY
            })
        }

        window.addEventListener('scroll', windowScroll)
        windowScroll()

        return () =>  window.removeEventListener('scroll', windowScroll)
    }, [])

    const scrollTo = (obj: {y: number}) => {
        window.scrollTo({
            top: obj.y,
            behavior: 'smooth'
        })
    }

    return {scroll, scrollTo}
}