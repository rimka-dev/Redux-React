import React from 'react';
import tv from '../images/tv.webp'
import {connect} from 'react-redux';
import {buyTv} from '../redux/tv/actionTv'

function TvContainer(props) {
    //console.log(props.tv)
    return (
        <div className="container">
            <div className="text-center">
                <img className="w-75" src={tv} alt="smartphone" />
                <h3>SmartTv</h3>
                <p>Disponibilité :<span id="count"> {props.tv}</span></p>
                <button onClick={()=>props.buyTv()} className="btn-success">Acheter</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{ // cette méthode nous permet de d'acceder au state qui est dans le redux store
    return {
        tv: state.television.tv
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyTv: ()=> dispatch(buyTv())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer)
