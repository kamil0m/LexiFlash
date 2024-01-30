import {useEffect} from "react";
export default function ErrorMessage({setShowErrorMessage}) {
    useEffect(() => {
        const hideError = setTimeout(() => {
            setShowErrorMessage(false)
        }, 3000);
    }, [])

    return <p style={{
        color: "red"
    }}>
        Please complete all form fields
    </p>
}