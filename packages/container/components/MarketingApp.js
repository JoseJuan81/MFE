import React, { useEffect, useRef } from 'react';
import  { mount as marketingMount } from 'marketingModule/MarketingApp';


export const MarketingApp = () => {
    const ref = useRef( null );

    useEffect(() => {
        
        marketingMount( ref.current );

    }, [])
    return (
        <div ref={ ref }></div>
    )
}
