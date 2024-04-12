import React from 'react'
import Styles from './CardPlayer.module.css'
const CardPlayer = ({player}) => {
  return (
    <>
    <article className={Styles.Card}>
         {
           Object.keys(player).map((key,index)=>(
            <div key={index} className={Styles.Row}>
                <span>
                    {`${key}  =>`}
                </span>
                <span>
                    {
                        player[key]
                    }
                </span>
            </div>
           ))}

    </article>
    </>
  )
}

export default CardPlayer