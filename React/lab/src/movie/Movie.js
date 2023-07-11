
import poster from './posters/good-bad-ugly.jpg'
import starGray from './stars/star-gray.png'

function Movie() {
    return(

        <article className="box">

            <img className='img-fluid' src={poster} alt='A poster'/>

            <div className='text-center'>
                <img className='movie__star' src={starGray} alt='A star'  />
                <img className='movie__star' src={starGray} alt='A star'  />
                <img className='movie__star' src={starGray} alt='A star'  />
                <img className='movie__star' src={starGray} alt='A star'  />
                <img className='movie__star' src={starGray} alt='A star'  />
            </div>

            <div className='movie__info'>
                You rated 3 stars!
            </div>

        </article>
    )
}

export default Movie