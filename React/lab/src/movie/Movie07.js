/*

Allow parameters to change the look and behaviour:

- maxstars (number)
- poster (image)
- title  (text)

*/

import { useState } from 'react'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'
import defaultPoster from './posters/default.png'


function Movie(props) {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const maxstars = props.maxstars ?? 5 
    const title = props.title ?? "<No name>"
    const poster = props.poster ?? defaultPoster

    const clickStar = (number)=>{
        setChosenStars(number)
    }

    const hoverStar = (number)=>{
        setHoveredStar(number)
    }

    const leftStar = () => {
        setHoveredStar(null)
    }

    const selectStarImageFor = (number) => {
        if (hoveredStar!=null){

            if (hoveredStar >= number){
                return star
            } else {
                return starGray
            }    
        }

        if (chosenStars >= number){
            return star
        } else {
            return starGray
        }
    }

    const rangeArray = (from, to) => {
        let x=[]
        for(let i=from; i<=to; i++) {
            x.push(i)
        }
        return x
    }

    return (

        <article className="box movie">

            <h2 className='text-center'>{title}</h2>

            {/* Note: added a div here */}
            <div className='text-center'>
                <img className="img-fluid" src={poster} />
            </div>

            <div className="text-center">
                {rangeArray(1, maxstars).map(n=>
                    <img key={n} src={selectStarImageFor(n)} onClick={()=>clickStar(n)} onMouseEnter={()=>hoverStar(n)} onMouseOut={()=>leftStar()} className='movie__star' alt='A star' />
                )}
            </div>

            <div className="movie__info" onClick={()=>clickStar(0)}>
                {chosenStars === 0 ? <>&nbsp;</> :
                
                    <>You rated {chosenStars} stars!</>
                }
            </div>

        </article>

    )
}

export default Movie

