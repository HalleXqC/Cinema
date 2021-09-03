import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider'
import cls from './Main.module.scss'
import { Switch , Route, Redirect } from 'react-router-dom'
import Schedule from '../../Components/Pages/Schedule/Schedule'
import Snacks from '../../Components/Pages/Snacks/Snacks'
import About from '../../Components/Pages/About/About'
import Contacts from '../../Components/Pages/Contacts/Contacts'
import Adv from '../../Components/Pages/Adv/Adv'
import Navigation from '../../Components/Navigation/Navigation'
import SwiperComponent from '../../Components/Swiper/Swiper'

const Main = () => {

    return (
        <div className={cls.root}>
            <HeaderSlider/>
            <SwiperComponent/>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Schedule} />
                <Route path="/snacks" component={Snacks} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/advertisement" component={Adv} />
                <Route path="/error">
                    <h1>Error 404. Page not found</h1>
                </Route>
                <Redirect to="/error"/>
            </Switch>
        </div>
    )
}

export default Main