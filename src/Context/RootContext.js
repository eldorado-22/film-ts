import React, {useState} from 'react';
// import {LanguageContext} from "../Context";

const RootContext = ({children}) => {

    const [language, setLanguage] = useState("en-US")

    return (
        <div>

        </div>
        // <LanguageContext.Provider value={{
        //     language, setLanguage
        // }}>
        //     {children}
        // </LanguageContext.Provider>
    );
};

export default RootContext;