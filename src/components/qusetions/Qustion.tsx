import React, { FC, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
interface Props {
    title: string
    anw: string
}

const Qustion: FC<Props> = ({ title, anw }) => {
    const [showinfo, setShowinfo] = useState(false)
    return (
        <article className='qusetion'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShowinfo(!showinfo)}>
                    {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </header>
            {showinfo && <p>{anw}</p>}
        </article>
    )
}

export default Qustion