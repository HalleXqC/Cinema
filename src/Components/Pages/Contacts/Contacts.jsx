import cls from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={cls.root}>
            <div className={cls.header}>
                <div className={cls.contact1}>
                    <img src="/img/whatsapp.png" alt="whatsapp" />
                    <span>8-800-555-35-35</span>
                </div>
                <img className={cls.lineImg} src="/img/line.png" alt="line"/>
                <div className={cls.contact2}>
                    <img src="/img/instagram.png" alt="instagram" />
                    <a href="https://www.instagram.com/itacademy.osh/?hl=ru" target="_blank" rel="noreferrer">@cinema_kg</a>
                </div>
                <img className={cls.lineImg} src="/img/line.png" alt="line"/>
                <div className={cls.contact3}>
                    <img src="/img/beeline.png" alt="beeline" />
                    <span>0776 667 776</span>
                </div>
                <img className={cls.lineImg} src="/img/line.png" alt="line"/>
                <div className={cls.contact4}>
                    <img src="/img/megacom.png" alt="megacom" />
                    <span>0555 353 535</span>
                </div>
            </div>
            <h3>УЛИЦА ПУШКИНА, ДОМ КОЛОТУШКИНА</h3>
            <div className={cls.main}>
                <iframe className={cls.iframe} title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.097888648597!2d72.79452352190066!3d40.53383941850098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad12f404472f%3A0x7a5dcf3fc3370c2b!2sOlolohaus%20Osh!5e0!3m2!1sen!2skg!4v1627875584550!5m2!1sen!2skg" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contacts