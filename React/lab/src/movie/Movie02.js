/*

Listen if the user interacts with the imagers and log:
- Click on star
- Hover a star
- Leave a star

*/

import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'

function Movie() {

    const clickStar = (number) => {
        console.log("Clicked star", number)
    }

    const hoverStar = (number) => {
        console.log("Hovered star", number)
    }

    const leftStar = () => {
        console.log("Left a star")
    }

    return (

        <article className="box movie">

            <img className="img-fluid" src={poster} />

            <div className="text-center">
                <img onClick={() => clickStar(1)} onMouseEnter={() => hoverStar(1)} onMouseOut={() => leftStar()} className='movie__star' src={starGray} />
                <img onClick={() => clickStar(2)} onMouseEnter={() => hoverStar(2)} onMouseOut={() => leftStar()} className='movie__star' src={starGray} />
                <img onClick={() => clickStar(3)} onMouseEnter={() => hoverStar(3)} onMouseOut={() => leftStar()} className='movie__star' src={starGray} />
                <img onClick={() => clickStar(4)} onMouseEnter={() => hoverStar(4)} onMouseOut={() => leftStar()} className='movie__star' src={starGray} />
                <img onClick={() => clickStar(5)} onMouseEnter={() => hoverStar(5)} onMouseOut={() => leftStar()} className='movie__star' src={starGray} />
            </div>

        </article>

    )
}

export default Movie


