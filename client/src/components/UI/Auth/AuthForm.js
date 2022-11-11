import React from 'react';
import TennisInput from "../Input/TennisInput";
import TennisPhoneInput from "../Input/TennisPhoneInput";

const AuthForm = ({email,setEmail,name,setName,password,setPassword,phone,setPhone,isLogin}) => {
    return (
        <div style={{width: '50%'}}>
            {!isLogin ?
                <div>
                    <TennisInput inputtype={'auth'} placeholder="Введите ваше имя..."
                                 value={name}
                                 onChange={e => setName(e.target.value)}
                                 type="text"/>
                    <TennisPhoneInput placeholder="Номер телефона"
                                      onChange={e => setPhone(e.target.value)}
                                      value={phone}
                                      inputtype={'auth'}/>
                </div>
                : null

            }
            <TennisInput inputtype={'auth'} type="text" placeholder="Введите ваш email..."
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
            <TennisInput inputtype={'auth'} placeholder="Введите ваш пароль..."
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="password"/>
        </div>
    );
};

export default AuthForm;