
import { useState } from 'react'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'
import defaultPoster from './posters/default.png'

function Movie(props) {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const poster = props.poster ?? defaultPoster

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

    const rangeArray = (from, to) => {
        // todo: skriv om detta funktion så den drar nytta av 'from' och 'to'
        return [1,2,3,4,5]
    }

    return(

        <article className="box">

            <div className='text-center'>
                <img className='img-fluid' src={poster} alt='A poster'/>
            </div>
            
            <div className='text-center'>

                {rangeArray(1,5).map(n =>
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