import cls from './Swiper.module.scss'
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore , { Navigation , Pagination , Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import { useEffect, useState } from 'react';
import { getMovies } from '../../API';
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination , Autoplay]);

const SwiperComponent = () => {

    const [slidesBase , setSlidesBase] = useState(null)

    const slides = [];

    useEffect(() => {
        getMovies()
        .then(res => res.json())
        .then(r => {
            if(r){
                const data = Object.entries(r).map(item => {
                    const id = item[0]
                    return {
                        ...item[1],
                        id
                    }
                })
                setSlidesBase(data)
            }else{
                setSlidesBase([])
            }
        })
    } , [])

    
    if(slidesBase?.length > 0){
        const slidesBaseLength = slidesBase.length
        for(let i = 0; i < slidesBaseLength; i++){
            slides.push(
                <SwiperSlide
                    style={{
                        background: `url(${slidesBase[i].bannerUrl}) center / cover no-repeat`
                    }} 
                    className={cls.swiperSlide} 
                    key={`slide-${i}`}
                    data-swiper-autoplay="3000"
                >
                    <div className={cls.floatBlock}>
                        <div className={cls.floatHeader}>
                            <div className={cls.floatHeaderTitle}>
                                <h2>{slidesBase[i].title}</h2>
                                <h5>{slidesBase[i].genres}</h5>
                            </div>
                            <h3>"{slidesBase[i].tagline}"</h3>
                        </div>
                        <div className={cls.floatBody}>
                            <div className={cls.floatBodyBlock1}>
                                ???????????????? ?? <br />
                                {slidesBase[i].premiere}
                            </div>
                            <div className={cls.floatBodyBlock2}>
                                ????????????????????????: <br />
                                {slidesBase[i].duration}
                            </div>
                        </div>
                        <div className={cls.floatFooter}>
                            <Link to={`/schedule/${slidesBase[i].id}`} className={cls.button1}>
                                ????????????????????
                            </Link>
                            <Link to={`/schedule/${slidesBase[i].id}`} className={cls.button2}>
                                ?? ????????????
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ) 
        }
    }

    

    return (
        <>
            <Swiper
                className={cls.swiperWrapper} 
                id="main"
                navigation 
                pagination
                spaceBetween={1}
                slidesPerView={1}
                speed={1500}
                loop
                autoplay
            >
                {slides}
            </Swiper>
        </>
    )
}

export default SwiperComponent