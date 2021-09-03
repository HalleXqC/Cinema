import { Link } from 'react-router-dom';
import cls from './Movie.module.scss';

const Movie = ({ bannerMinUrl ,  duration , genres , premiere , title , id}) => {

    return (
        <div className={cls.root} style={{
            background: `url(${bannerMinUrl}) center / cover no-repeat`
        }}>
            <div className={cls.floatText}>
                <h4 className={cls.title}>{title}</h4>
                <p className={cls.genres}>{genres}</p>
                <div className={cls.floatInnerText}>
                    <div className={cls.floatInnerText1}>
                        Длительность:
                        <br/>
                        <span>{duration}</span>
                    </div>
                    <div className={cls.floatInnerText2}>
                        Премьера:
                        <br/>
                        <span>{premiere}</span>
                    </div>
                </div>
            </div>
            <Link to={`/schedule/${id}`} className={cls.button}>
                Подробнее
            </Link>
        </div>
    )
}

export default Movie