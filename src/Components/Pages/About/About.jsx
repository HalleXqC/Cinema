import cls from './About.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const About = () => {

    const [state1 , setState1] = useState(false)
    const [state2 , setState2] = useState(false)
    const [state3 , setState3] = useState(false)
    const [state4 , setState4] = useState(false)

    const imageResize1 = () => {
        setState1(!state1)
        setState2(false)
        setState3(false)
        setState4(false)
    }
    const imageResize2 = () => {
        setState2(!state2)
        setState1(false)
        setState3(false)
        setState4(false)
    }
    const imageResize3 = () => {
        setState3(!state3)
        setState1(false)
        setState2(false)
        setState4(false)
    }
    const imageResize4 = () => {
        setState4(!state4)
        setState1(false)
        setState2(false)
        setState3(false)
    }

    return (
        <div className={cls.root}>
            <div className={cls.header}>
                <div onClick={imageResize1} className={ state1===true ? cls.headerDiv1Big : state2===true ? cls.displayNone : cls.headerDiv1 }></div>
                <div onClick={imageResize2} className={ state2===true ? cls.headerDiv2Big : state1===true ? cls.displayNone : cls.headerDiv2 }></div>
                <div onClick={imageResize3} className={ state3===true ? cls.headerDiv3Big : state4===true ? cls.displayNone : cls.headerDiv3 }></div>
                <div onClick={imageResize4} className={ state4===true ? cls.headerDiv4Big : state3===true ? cls.displayNone : cls.headerDiv4 }></div>
            </div>
            <div className={cls.main}>
                <h2>Улица Пушкина, Дом Колотушкина</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, impedit! Vitae, est voluptatum praesentium quae eveniet numquam sit iste, officiis voluptatem aperiam quidem cumque voluptates officia reprehenderit similique dolores laboriosam asperiores eaque necessitatibus itaque fuga. Error pariatur quisquam quo facilis asperiores. Eveniet, adipisci sequi quibusdam, voluptatibus veritatis inventore et voluptate nemo laborum quidem rem repellendus corrupti. In minima repudiandae sequi minus incidunt ut fugit molestias ea, id repellendus quibusdam perferendis doloribus alias? Deleniti in porro temporibus eveniet veniam! Architecto qui voluptatem, consequatur soluta excepturi illo recusandae dolor dicta accusamus quidem fugit atque itaque eligendi facilis vitae voluptatibus. Perferendis, amet delectus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor alias, voluptatem aliquid accusantium doloribus ab earum qui. Ullam illum veniam architecto dolores ipsam ducimus, tenetur similique quisquam, sequi repellat, nam non obcaecati! Aliquam nostrum, nemo illum iure dignissimos provident quia veniam dolore reiciendis voluptas qui possimus animi sed quo consequatur, porro, maiores alias repellendus architecto numquam ea deserunt! Corporis dolorem voluptatibus, quidem et aut facere fugiat quas. Itaque inventore voluptate eos deserunt vitae, consequatur beatae maxime autem, quis, neque ullam nam. Sed laborum aliquam magni dignissimos nostrum, quibusdam quis ea natus tenetur aspernatur eius voluptates ullam recusandae. Expedita, ipsa.</p>
                <Link className={cls.button} to="/contacts">Как с нами связатьcя?</Link>
            </div>
        </div>
    )
}

export default About