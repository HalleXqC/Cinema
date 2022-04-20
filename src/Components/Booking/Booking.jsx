import { useParams } from 'react-router-dom'
import cls from './Booking.module.scss'
import { useEffect, useState } from 'react';
import { getSingleMovie, sendBookedSeats } from '../../API';
import { RiErrorWarningFill as WarningIcon } from 'react-icons/ri'

const Booking = () => {

  const { id } = useParams();

  const [info, setInfo] = useState(null);
  const [hall, setHall] = useState('');
  const [chosenSeats, setChosenSeats] = useState('')
  const [alertErr, setAlertErr] = useState('')
  const [allIds, setAllIds] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [modalState, setModalState] = useState(false)
  const [affirAlertErr, setAffirAlertErr] = useState('')
  const [useEffectState, setUseEffectState] = useState(null)

  useEffect(() => {
    getSingleMovie(id)
      .then(res => res.json())
      .then(r => {
        if (r) {
          setInfo(r)
        } else {
          setInfo([])
        }
      })
  }, [id, useEffectState])

  const currentHours = new Date().getHours()
  const currentMinutes = new Date().getMinutes()
  const currentTime = `${currentHours < 10 ? `0${currentHours}` : `${currentHours}`}:${currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`}`

  const sessionSelectionClick = time => {
    const hallObj = {}
    hallObj.hall = time.hall
    hallObj.price = time.price
    hallObj.time = time.time
    setHall(hallObj)
  }

  const halls = [
    [],
    [],
    [],
    []
  ]

  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      for (let j = 0; j < 100; j++) {
        halls[0].push({
          id: j,
          active: false
        })
      }
    } else if (i === 1) {
      for (let q = 0; q < 80; q++) {
        halls[1].push({
          id: q,
          active: false
        })
      }
    } else if (i === 2) {
      for (let v = 0; v < 50; v++) {
        halls[2].push({
          id: v,
          active: false
        })
      }
    } else if (i === 3) {
      for (let x = 0; x < 20; x++) {
        halls[3].push({
          id: x,
          active: false
        })
      }
    }
  }

  const chooseSeatClick = (item, hall) => {
    if (allIds.includes(item.id)) {
      const bleep = new Audio();
      bleep.src = "/sound/error.mp3";
      bleep.play();
      setAlertErr('Вы уже выбрали это место!')
    } else if (allIds.length >= 5) {
      const bleep = new Audio();
      bleep.src = "/sound/error.mp3";
      bleep.play();
      setAlertErr('Вы можете забронировать лишь 5 мест за раз')
    }
    else {
      const chosenSeatsArr = [...chosenSeats]
      chosenSeatsArr.push({ id: item.id, hall });
      setChosenSeats(chosenSeatsArr);
      const allIdsTemp = [...allIds];
      allIdsTemp.push(item.id)
      setAllIds(allIdsTemp)
      setAlertErr('')
      halls[(hall.hall - 1)][item.id].active = true
    }
  }

  const nameAndPhoneSendFunc = e => {
    e.preventDefault()
    if (name.trim().length > 5 && name.trim().length < 70 && phone.trim().length > 4) {
      setAffirAlertErr('')
      setName('')
      setPhone('')
      alert('Бронировка успешно окончена')

      sendBookedSeats({
        chosenSeats: allIds,
        name,
        phone,
        hall: chosenSeats[0].hall.hall,
        time: chosenSeats[0].hall.time,
        price: chosenSeats[0].hall.price
      }, id)
        .then(res => res.json())
        .then(r => {
          console.log(r);
          setModalState(false)
        })
    } else {
      const bleep = new Audio();
      bleep.src = "/sound/error.mp3";
      bleep.play();
      setAffirAlertErr('Поля заполнены неверно')
    }
  }

  return (
    <div className={cls.root}>
      <div className={cls.bookingBlock}>
        {
          info?.length === 0 ? (
            <h3 style={{ textAlign: "center", color: "rgba(255,51,51)" }}>Ошибка 404! Фильмы не найдены</h3>
          ) : info ? (
            <>
              <div className={cls.header}>
                <h4>Бронирование</h4>
                <h3>{info.title}</h3>
              </div>
              <div className={cls.main}>
                <h4>Выберите сеанс:</h4>
                <div className={cls.schedule}>
                  {
                    info.time.map((item, index) => {
                      return currentTime > info.time[index].time
                        ?
                        <div key={index} className={cls.disactiveDiv}>
                          <span className={cls.disactiveSpan} key={index}>{item.time}</span>
                          {`${item.price} сом`}
                        </div>
                        :
                        <div key={index} className={cls.activeDiv}>
                          <span
                            className={cls.activeSpan}
                            onClick={() => {
                              sessionSelectionClick(info.time[index])
                            }}
                            key={index}
                          >
                            {item.time}
                          </span>
                          {`${item.price} сом`}
                        </div>
                    })
                  }
                </div>
              </div>
              <div className={cls.seats}>
                {
                  hall.hall?.length > 0 ? (
                    <>
                      <div className={cls.seatsHeader}>
                        <h3>ЗАЛ {hall.hall}</h3>
                      </div>
                      <div className={cls.seatsMain}>
                        {
                          halls[(hall.hall - 1)].map((item, index) => (
                            <button disabled={item.active} onClick={() => {
                              chooseSeatClick(item, hall)
                              setUseEffectState(item, hall)
                            }} key={item.id}>{(index + 1)}</button>
                          ))
                        }
                      </div>
                    </>
                  ) : null
                }
              </div>
              <div className={cls.affirmation}>
                {
                  chosenSeats?.length > 0 ? (
                    <>
                      <div className={cls.affirmationMain}>
                        <h3 style={{ color: "red", fontSize: "30px" }}>{alertErr}</h3>
                        <div className={cls.affirmationInnerMain}>
                          {
                            chosenSeats.map((item, index) => (
                              <span
                                key={index}
                              >
                                Сиденье №{(item.id + 1)}
                              </span>
                            ))
                          }
                        </div>
                        <div className={cls.affirmationFooter}>
                          <h3>Цена: <span> {chosenSeats[0].hall.price} </span> сом </h3>
                          <h3>Стоимость: <span style={{ color: "#d22215" }}> {chosenSeats.reduce((total, item) => +total + +item.hall.price, 0)} </span> сом </h3>
                        </div>
                        <button onClick={() => {
                          setModalState(true)
                        }} className={cls.affirmationBtn}>Забронировать</button>
                      </div>
                    </>
                  ) : null
                }
              </div>
            </>
          ) : <h1 style={{ textAlign: "center", color: "white", width: "100%" }}>Загрузка....</h1>
        }
        <div className={modalState === false ? cls.modalDisactive : cls.modalActive}>
          <div className={cls.modalWindowInner}>
            <span className={cls.closeModalBtn} onClick={() => { setModalState(false) }}>&times;</span>
            <form>
              <small> <span><WarningIcon className={cls.warningIcon} /></span> ФИО должно состоять из 5-70 симоволов не включительно</small>
              <label>
                <p>ФИО:</p>
                <input
                  type="text"
                  placeholder="Паланчаев Паланча Паланчаевич"
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
              </label>
              <label>
                <p>Телефон:</p>
                <input
                  type="tel"
                  placeholder="0777 777 777"
                  value={phone}
                  onChange={e => {
                    setPhone(e.target.value)
                  }}
                />
              </label>
              <button
                onClick={e => {
                  nameAndPhoneSendFunc(e)
                }
                }>Отправить</button>
              <h3>{affirAlertErr}</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking