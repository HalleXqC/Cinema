import { Link } from 'react-router-dom';
import cls from './HeaderSlider.module.scss';

const HeaderSlider = () => {
    return (
        <>
            <div className={cls.root}>
                <div className={cls.header}>
                    <div className={cls.marquee}>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                        <img src="/img/kyrgyz_orn.png" alt="kg_logo"/>
                    </div>
                    <div className={cls.headerBlock}>
                        <img src="/img/cinema_logo.png" alt="cinema_logo"/>
                        <Link to="/" className={cls.h1}>CINEMA</Link>
                    </div>
                </div>
            </div>
        </>        
    )
}

export default HeaderSlider