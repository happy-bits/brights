/*

Use "map" in rendering to make the code less repetitive

*/

import { useState } from 'react'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'


function Movie() {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

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

    return (

        <article className="box movie">

            <img className="img-fluid" src={poster} />

            <div className="text-center">
                {[1,2,3,4,5].map(n=>
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

