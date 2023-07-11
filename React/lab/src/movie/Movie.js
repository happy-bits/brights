
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
/*
todo: 

- Skriv ut i konsolen om en användare håller musen över en stjärna, t.ex "Hovered star 4"
- Skriv ut i konsolen om en användare lämnar en stjärna, skriv då "Left a star"

tips:

- Skapa två till funktioner (som clickStar)
- Lägg till två till events (som onClick)

*/

    return(

        <article className="box">

            <img className='img-fluid' src={poster} alt='A poster'/>

            <div className='text-center'>
                <img onClick={() => clickStar(1)} onMouseEnter={() => hoverStar(1)} onMouseLeave={() => leftStar()} className='movie__star' src={starGray} alt='A star'  />
                <img onClick={() => clickStar(2)} onMouseEnter={() => hoverStar(2)} onMouseLeave={() => leftStar()} className='movie__star' src={starGray} alt='A star'  />
                <img onClick={() => clickStar(3)} onMouseEnter={() => hoverStar(3)} onMouseLeave={() => leftStar()} className='movie__star' src={starGray} alt='A star'  />
                <img onClick={() => clickStar(4)} onMouseEnter={() => hoverStar(4)} onMouseLeave={() => leftStar()} className='movie__star' src={starGray} alt='A star'  />
                <img onClick={() => clickStar(5)} onMouseEnter={() => hoverStar(5)} onMouseLeave={() => leftStar()} className='movie__star' src={starGray} alt='A star'  />
            </div>

            <div className='movie__info'>
                You rated 3 stars!
            </div>

        </article>
    )
}

export default Movie