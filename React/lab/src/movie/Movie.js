
import { useState } from 'react'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie() {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const clickStar = (number) => {
        setChosenStars(number)
    }

    const hoverStar = (number) => {
        setHoveredStar(number)
    }

    const leftStar = () => {
        setHoveredStar(null)
    }

    const selectStarImageFor = (number) => {

        if(hoveredStar!=null){
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

    return(

        <article className="box">

            <img className='img-fluid' src={poster} alt='A poster'/>

            <div className='text-center'>

                {[1,2,3,4,5].map(n =>
                    <img key={n} onClick={() => clickStar(n)} onMouseEnter={() => hoverStar(n)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(n)} alt='A star'  />
                )}
                
            </div>

            <div className='movie__info' onClick={() => clickStar(0)}>

                { chosenStars === 0 ? <>&nbsp;</> : <>You rated {chosenStars} star{chosenStars === 1 ? '' : 's'}</>}
                
            </div>

        </article>
    )
}

export default Movie