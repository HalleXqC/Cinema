import HeaderSlider from './Components/HeaderSlider/HeaderSlider'
import cls from './App.module.scss'
import SwiperSlider from './Components/Swiper/Swiper'
import { Switch , Route, Redirect } from 'react-router-dom'
import Schedule from './Components/Pages/Schedule/Schedule'
import Snacks from './Components/Pages/Snacks/Snacks'
import About from './Components/Pages/About/About'
import Contacts from './Components/Pages/Contacts/Contacts'
import Adv from './Components/Pages/Adv/Adv'
import Navigation from './Components/Navigation/Navigation'
import SinglePage from './Components/SinglePage/SinglePage'
import Booking from './Components/Booking/Booking'

const App = () => {

    return (
        <div className={cls.root}>
            <HeaderSlider/>
            <SwiperSlider/>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Schedule} />
                <Route path="/schedule/:id" exact component={SinglePage} />
                <Route path="/schedule/:id/booking" exact component={Booking}/>
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

export default App