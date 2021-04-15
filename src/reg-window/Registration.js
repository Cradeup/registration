import './registration.css'
import { useForm } from "react-hook-form";
import inputTypes from './input-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registrationDataSubmit } from '../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input } from '@material-ui/core';

let validators = inputTypes.inputs.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.validators }), {})

const schema = yup.object().shape(
    validators
)

function Registration(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => dispatchData(data);
    console.log(errors)

    function dispatchData(data) {
        let action = registrationDataSubmit(data)
        props.dispatch(action)
    }

    if (props.data) {
        props.history.push('/logged')
    }

    const inputFields = inputTypes.inputs.map((input, key) => {
        return (
            <div key={key}>
                <div>
                    <label className="inputLabel">{input.label}</label>
                </div>
                <div>
                    <Input className="inputField" type={input.type} {...register(input.name, { required: true })} />
                </div>
                <div className="errors">
                    {errors[input.name]?.message}
                </div>
            </div>
        )
    })

    return (
        <form className="registrationField" onSubmit={handleSubmit(onSubmit)} >
            {inputFields}
            <Input type="submit" value="Регистрация" />
        </form>
    );
}

function mapStateToProps(state) {
    return {
        data: state.registrationReducer.data
    }
}
export default connect(mapStateToProps, null)(withRouter(Registration))