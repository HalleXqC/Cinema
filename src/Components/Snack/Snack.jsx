import cls from './Snack.module.scss'

const Snack = ({img , title , price}) => {
    return (
        <div className={cls.root}>
            <div className={cls.header}>
                <img src={`${img}`} alt="snack" />
            </div>
            <div className={cls.body}>
                <h5>{title}</h5>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Snack