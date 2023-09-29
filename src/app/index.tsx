import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"

export default () => {
    const { tryLocalSignIn } = useAuth();

    useEffect(() => {
        tryLocalSignIn();
    }, []) 

    return null;
}