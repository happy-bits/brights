
import { useState } from 'react'
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie() {

    const [chosenStars, setChosenStars] = useState(0)

    const clickStar = (number) => {
        console.log("Clicked star", number)
        setChosenStars(number)
    }

    const hoverStar = (number) => {
        console.log("Hovered star", number)
    }

    const leftStar = () => {
        console.log("Left a star")
    }

    const selectStarImageFor = (number) => {

        if (chosenStars >= number){
            return star
        } else {
            return starGray
        }

    }

    // todo: Om användaren trycker på Reset så ska alla gula stjärnor bli grå

    return(

        <article className="box">

            <img className='img-fluid' src={poster} alt='A poster'/>

            <div className='text-center'>
                <img onClick={() => clickStar(1)} onMouseEnter={() => hoverStar(1)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(1)} alt='A star'  />
                <img onClick={() => clickStar(2)} onMouseEnter={() => hoverStar(2)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(2)} alt='A star'  />
                <img onClick={() => clickStar(3)} onMouseEnter={() => hoverStar(3)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(3)} alt='A star'  />
                <img onClick={() => clickStar(4)} onMouseEnter={() => hoverStar(4)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(4)} alt='A star'  />
                <img onClick={() => clickStar(5)} onMouseEnter={() => hoverStar(5)} onMouseLeave={() => leftStar()} className='movie__star' src={selectStarImageFor(5)} alt='A star'  />
            </div>

            <div className='movie__info'>
                Reset
            </div>

        </article>
    )
}

export default Movie