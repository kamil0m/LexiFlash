import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {createClient} from "@supabase/supabase-js";
import config from "../../config.dev.json";


export const SupabaseContext = createContext(null);

export const SupabaseProvider = ({children}) => {
    const [supabase, setSupabase] = useState(null);

    useEffect(() => {
        setSupabase(createClient(config.supabase.url, config.supabase.public_key));
    }, []);

    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
};


SupabaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
