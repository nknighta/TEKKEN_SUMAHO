import React,{useEffect,useState} from "react";

export default function DynamicElementProvider():React.JSX.Element {
    return (
        <>

        </>
    )
}

const changeHandler = () => {
    const [iw,ih] = useState();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            const height = window.innerHeight;
        }
    },[])
}