import { useState } from 'react';

interface Props {
    title: string;
}

export default function ButtonCategory({title}: Props) {
    const [isActive, setActive] = useState(false);

    const buttonClassName = isActive ? "btn  btn-neutral" : "btn btn-ghost";
    
    return (
        <>
        <button onClick={() => setActive(!isActive)} className={buttonClassName}>{title}</button>
        </>
    )
}