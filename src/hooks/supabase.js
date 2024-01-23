import {useContext} from "react";
import {SupabaseContext} from "../context/SupabaseContext.jsx";

export const useSupabase = () => {
    const context = useContext(SupabaseContext);
    if (undefined === context) throw new Error('useSupabase must be used within a SupabaseProvider')
    return context;
};