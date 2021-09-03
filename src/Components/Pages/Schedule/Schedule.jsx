import Movie from '../../Movie/Movie'
import cls from './Schedule.module.scss'
import { getMovies } from '../../../API'
import { useEffect, useState } from 'react'

const Schedule = () => {

    const [movies , setMovies] = useState(null)

    useEffect(() => {
        getMovies()
        .then(res => res.json())
        .then(r => {
            if(r){
                const data = Object.entries(r).map(item => {
                    const id = item[0];
                    return {
                        ...item[1],
                        id
                    }
                })
                setMovies(data)
            }else{
                setMovies([])
            }
        })
    } , [])


    return (
        <div className={cls.root}>
            <div className={cls.moviesBlock}>
                {
                    movies?.length === 0 ? (
                        <h3 style={{textAlign: "center", color: "rgba(255,51,51)"}}>Ошибка 404! Фильмы не найдены</h3>
                    ) : movies ? (
                        movies.map(({ bannerMinUrl, duration , genres , premiere, title , id}) => (
                            <Movie
                                bannerMinUrl={bannerMinUrl}
                                duration={duration}
                                genres={genres}
                                premiere={premiere}
                                title={title}
                                key={id}
                                id={id}
                            />
                        ))
                    ) : <h1 style={{textAlign: "center", color: "white", width: "100%"}}>Загрузка....</h1>
                }
            </div>
        </div>
    )
}

export default Schedule