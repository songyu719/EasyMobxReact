import chinese from "../Lang/chinese"
import english from "../Lang/english"
import {observable,action} from 'mobx'
class Lang {

    @observable local = chinese

   
}

export default Lang