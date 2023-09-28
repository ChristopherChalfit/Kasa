import { useState } from 'react'
import ArrowTop from '../../assets/images/ArrowTop.svg'
import './Collapse.sass'
function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse__header">
                <h2>{title}</h2>
                <button className="collapse__header-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={ArrowTop} alt="Chevron" className={`chevron-up ${isOpen ? "open" : ""}`}/>
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}>
                {content}
            </div>
        </div>
    )

}
export default Collapse