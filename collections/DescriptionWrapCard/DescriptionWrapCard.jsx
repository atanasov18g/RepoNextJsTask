import React from 'react'
import { Icon } from '../Card/elements'

const DescriptionWrapCard = ({ icon, title, content }) => {
    return (
        <div className='desc--wrap'>
            <div className='text-icon--wrap'>
                <div className='icon--wrap'>
                    <Icon as={icon} />
                </div>
                <div className='text--wrap'>
                    <h3>{title}</h3>
                    {content.map((line, index) => (
                        <span key={index}>{line}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DescriptionWrapCard;