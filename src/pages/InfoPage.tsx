import React from 'react'
import { useHistory } from 'react-router'

export const InfoPage: React.FC = () => {
    const history = useHistory()

    const backMainPage = () => {
        history.push('/')
    }

    return (
        <div>
            <div className="col s12 m5">
                <div className="card-panel teal">
                    <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    </span>
                    <br />
                    <br />
                    <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    </span>
                </div>
                <button className='btn' onClick={backMainPage}>Вернуться на главную</button>
            </div>
        </div>
    );
};
