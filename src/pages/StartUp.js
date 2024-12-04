
import { useNavigate } from 'react-router-dom';
import '../stylesheets/startup.css';

const StartUp = () => {

    const navigate = useNavigate()
    const handleGetStarted = () => {
        navigate('/home')
    }

    return (
        <div className="startup-div">
            <h2>Daily Weather</h2>
            <p>Get to know your weather maps and radar precipitation forecast</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    )

};

export default StartUp;