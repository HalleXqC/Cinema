import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../../API';
import cls from './SinglePage.module.scss'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';

const SinglePage = () => {

    const { id } = useParams();

    const [info , setInfo] = useState(null)

    useEffect(() => {
        getSingleMovie(id)
        .then(res => res.json())
        .then(r => {
            if(r){
                setInfo(r)
            }else{
                setInfo([])
            }
        })
    } , [id])

    const currentHours = new Date().getHours()
    const currentMinutes = new Date().getMinutes()
    const currentTime = `${currentHours < 10 ? `0${currentHours}` : `${currentHours}`}:${currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`}`

    return (
        <div className={cls.root}>
            <div className={cls.singlePage}>
                {
                    info?.length === 0 ? (
                        <h3 style={{textAlign: "center", color: "rgba(255,51,51)"}}>Ошибка 404! Фильмы не найдены</h3>
                    ) : info ? (
                        <>
                            <div className={cls.header}>
                                <img src={`${info.bannerMinUrl}`} alt="movie-poster" />
                                <div className={cls.headerRight}>
                                    <h3> {info.title} </h3>
                                    <h6>
                                        Жанры: &nbsp;
                                        <span> {info.genres}</span>
                                    </h6>
                                    <h6>
                                        Страна: &nbsp; 
                                        <span> {info.country}</span>
                                    </h6>
                                    <h6>
                                        Режиссёр: &nbsp;
                                        <span>{info.director}</span>
                                    </h6>
                                    <h6>
                                        Актёры: &nbsp;
                                        <span>{info.actors}</span>
                                    </h6>
                                    <h6>
                                        Слоган: &nbsp;
                                        <span>"{info.tagline}"</span>
                                    </h6>
                                    <h6>
                                        Длительность: &nbsp;
                                        <span>{info.duration}</span>
                                    </h6>
                                    <h6>
                                        Премьера: &nbsp;
                                        <span>{info.premiere}</span>
                                    </h6>
                                    <p>
                                        {info.synopsis}
                                    </p>
                                </div>
                            </div>
                            <div className={cls.movieSchedule}>
                                <h1>Расписание: </h1>
                                <div className={cls.innerMovieSchedule}>
                                    {
                                        info.time.map((item , index) => {
                                            return currentTime > info.time[index].time
                                            ? 
                                                <div key={index} className={cls.disactiveDiv}>
                                                    <span className={cls.disactiveSpan} key={index}>{item.time}</span>
                                                    {`${item.price} сом`}
                                                </div>
                                            : 
                                                <div key={index} className={cls.activeDiv}>
                                                    <span className={cls.activeSpan} key={index}>{item.time}</span>
                                                    {`${item.price} сом`}
                                                </div>
                                                
                                        }) 
                                    }
                                </div>
                                <Link to={`/schedule/${id}/booking`} className={cls.bookingBtn}>Забронировать билет</Link>
                            </div>
                            <div className={cls.main}>
                                <ReactPlayer className={cls.iframe} controls url={`${info.trailer}`}/>
                            </div>
                        </>
                    ) : <h1 style={{textAlign: "center", color: "white", width: "100%"}}>Загрузка....</h1>
                }

                <div className={cls.backBtnDiv}>
                    <Link to="/" className={cls.backBtn}>Назад</Link>
                </div>
            </div>
        </div>
    )
}

export default SinglePage