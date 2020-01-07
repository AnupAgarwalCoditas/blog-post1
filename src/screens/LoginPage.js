import React,{useState} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../scss/loginPage.scss'

function LoginPage(props) {
    const [state, setState] = useState({
        username:"eve.holt@reqres.in",
        password:'cityslicka',
        confirmPassword:'cityslicka',
        isLogin: true
    })

    const toggleLoginHandler=()=>setState({...state,isLogin:!state.isLogin})

    const inputHandler=(name,value)=>setState({...state,[name]:value})

    const onSubmitHandler = () => {
        Axios.post('https://reqres.in/api/login',{
            "email": state.username,
            "password": state.password
        }).then(res=>props.submit(res.data.token)).catch(err=>console.log(err))
    }

    if(props.token)return <Redirect to="/Posts"/>
    
    return (
        <form onSubmit={e=>e.preventDefault()} className='login-page'>
            <div className='form-heading'>
                <h1>{!state.isLogin?'Sign-up':'Login'}</h1>
            </div>
            <div className='form-body'>
                <input className='input' value={state.username} type='text' onChange={(e)=>inputHandler('username',e.target.value)} placeholder='Email ID'></input>
                <input className='input' value={state.password} type='password' onChange={(e)=>inputHandler('password',e.target.value)} placeholder='Password'/>
                {!state.isLogin?<input value={state.confirmPassword} type='password' onChange={(e)=>setState({...state,confirmPassword:e.target.value})} placeholder='Confirm Password'/>:null}
                <div className='form-buttons'>
                    <button className='button' onClick={onSubmitHandler}>{!state.isLogin?'Sign Up':'Login'}</button>
                    <p className='p' onClick={toggleLoginHandler}>{!state.isLogin?'Registered Already? Login':'Not registered yet? Sign-up'}</p>                
                </div>
            </div>                
        </form>
    )
}

let mapStateToProps = state => {
    return {token : state.token}
}

let mapDispatchToProps = dispatch => {
    return { submit: (temp)=>dispatch({type:'LOGIN',token:temp}) }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);