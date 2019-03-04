import {observable,action} from 'mobx'
import chinese from "../Lang/chinese"
import english from "../Lang/english"
class Store {
    @observable Menus=0;
    @observable Lang = chinese

    constructor(){
        setInterval(()=>{
        this.Menus++;
        },1000)
    }

    @action.bound
    switchToEnglish(){
        this.Lang=english
    }

    @action.bound
    switchToChinese(){
        this.Lang=chinese
    }

}

export  default  Store