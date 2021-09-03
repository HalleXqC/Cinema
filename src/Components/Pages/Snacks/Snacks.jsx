import { useEffect, useState } from 'react'
import { getSnacks } from '../../../API'
import Snack from '../../Snack/Snack'
import cls from './Snacks.module.scss'

const Snacks = () => {

    const [snacks , setSnacks] = useState(null)

    useEffect(() => {
        getSnacks()
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
                setSnacks(data)
            }else{
                setSnacks([])
            }
        })
    } , [])

    return (
        <div className={cls.root}>
            <div className={cls.snacksBlock}>
                {
                    snacks?.length === 0 ? (
                        <h3 style={{textAlign: "center", color: "rgba(255,51,51)"}}>Ошибка 404! Снэки не найдены</h3>
                    ) : snacks ? (
                        snacks.map(({img , title , price , id}) => (
                            <Snack 
                                img={img}
                                title={title}
                                price={price}
                                key={id}
                            />
                        ))
                    ) : <h1 style={{textAlign: "center", color: "white", width: "100%"}}>Загрузка....</h1>
                }
            </div>
        </div>
    )
}

export default Snacks