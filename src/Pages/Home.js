import React from 'react'
import {inject,observer} from 'mobx-react'
import style from "./Home.module.css"
const Home = observer((props)=>{
    return (
        <div className={style.box}>
            这里是主页
        </div>
    )
})

export default  inject("store")(Home);