import { withRouter } from "react-router"
import { connect } from 'react-redux';
import './logged.css'


function Logged(props) {
    if (!props.data) {
        props.history.push('/')
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="registrationFinished">Поздравляем, {props.data.firstName} {props.data.lastName}, вы зарегистрировались! Теперь Вы можете ничего.</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.registrationReducer.data
    }
}

export default connect(mapStateToProps, null)(withRouter(Logged))