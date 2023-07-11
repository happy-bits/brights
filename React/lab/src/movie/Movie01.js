/*

First static version

*/
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'

function Movie() {

    return (

        <article className="box movie">

            <img className="img-fluid" src={poster} />

            <div className="text-center">
                <img className='movie__star' src={starGray}/>
                <img className='movie__star' src={starGray}/>
                <img className='movie__star' src={starGray}/>
                <img className='movie__star' src={starGray}/>
                <img className='movie__star' src={starGray}/>
            </div>

            <div className="movie__info">
                You rated 3 stars!
            </div>

        </article>

    )
}

export default Movie



