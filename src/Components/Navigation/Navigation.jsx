import cls from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={cls.root}>
            <ul>
                <li>
                    <NavLink className={cls.link} id={cls.link1} to="/" activeClassName={cls.active} exact>Фильмы</NavLink>
                </li>
                <img src="/img/rhombus.png" alt="rhombus"/>
                <li>
                    <NavLink className={cls.link} id={cls.link2} to="/snacks" activeClassName={cls.active}>Магазин</NavLink>
                </li>
                <img src="/img/rhombus.png" alt="rhombus"/>
                <li>
                    <NavLink className={cls.link} id={cls.link3} to="/about" activeClassName={cls.active}>О кинотеатре</NavLink>
                </li>
                <img src="/img/rhombus.png" alt="rhombus"/>
                <li>
                    <NavLink className={cls.link} id={cls.link4} to="/contacts" activeClassName={cls.active}>Контакты</NavLink>
                </li>
                <img src="/img/rhombus.png" alt="rhombus"/>
                <li>
                    <NavLink className={cls.link} id={cls.link5} to="/advertisement" activeClassName={cls.active}>Рекламодателям</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation