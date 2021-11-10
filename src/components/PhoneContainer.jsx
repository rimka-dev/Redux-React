/* import React from 'react';
import phone from '../images/phone.webp';
import {useSelector, useDispatch} from 'react-redux';  //=== methode plus simple avec les hooks useSelector
import {buyPhone} from '../redux/phone/actionPhone'

function PhoneContainer() {
   const phones =  useSelector(state => state.phones) // useSelector nous recupere le state depuis notre store
   const dispatch = useDispatch()
   
    return (
        <div className="container">
            <div className="text-center">
                <img src={phone} alt="smartphone" />
                <h3>SmartPhone</h3>
                <p>Disponibilité :<span id="count"> {phones}</span></p>
                <button onClick={()=>dispatch(buyPhone())} className="btn-success">Acheter</button>
            </div>
        </div>
    )
}


export default PhoneContainer */



import React , {useState} from 'react';      // ==================== methode01 avec connect =========
import phone from '../images/phone.webp';
import {connect} from 'react-redux';
import {buyPhone} from '../redux/phone/actionPhone'

function PhoneComponent(props) {
    const [totalPhone, setTotalPhone] = useState(1)
//console.log(totalPhone);
    console.log(props);
    return (
        <div className="container">
            <div className="text-center">
                <img src={phone} alt="smartphone" />
                <p>Disponibilité :<span id="count"> {props.phones}</span></p>
                <div className="btnConatiner">
                <button onClick={()=>props.buyPhone(totalPhone)} className="btn-success">Acheter</button>
                <input className="w-25" type="text" value={totalPhone} onChange={(e)=>setTotalPhone(e.target.value)} />
                </div>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{ // cette méthode nous permet de d'acceder au state qui est dans le redux store
    return {
        phones: state.phone.phones
    }
}

const mapDispatchToProps = (dispatch)=>{// cette méthode nous permet de d'acceder la méthode dispatch (action) qui est dans le redux store
    return {
        buyPhone: (totalPhone)=> dispatch(buyPhone(totalPhone))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent) // on a connecter notre composant avec le stor de redux
