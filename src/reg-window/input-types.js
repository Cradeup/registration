import * as yup from 'yup';

const inputTypes = {
    inputs: [
        {
            label: "Имя",
            name: "firstName",
            type: "input",
            validators: yup.string().required('Это обязательное поле').matches(/^[?!,.а-яА-ЯёЁ0-9\s]+$/, 'Вы русский, с Вами Бог. Пишите по-русски', { excludeEmptyString: true }).min(2, 'Минимальное количество символов - 2')
        },
        {
            label: "Фамилия",
            name: "lastName",
            type: "input",
            validators: yup.string().required('Это обязательное поле').matches(/^[?!,.а-яА-ЯёЁ0-9\s]+$/, 'Вы русский, с Вами Бог. Пишите по-русски', { excludeEmptyString: true }).min(2, 'Минимальное количество символов - 2')
        },
        {
            label: "Отчество",
            name: "middleName",
            type: "input",
            validators: yup.string().matches(/^[?!,.а-яА-ЯёЁ0-9\s]+$/, 'Вы русский, с Вами Бог. Пишите по-русски', { excludeEmptyString: true })
        },
        {
            label: "Дата рождения",
            name: "birthDay",
            type: "date",
            validators: yup.string().required('Это обязательное поле')
        },
        {
            label: "Email",
            name: "email",
            type: "input",
            validators: yup.string().email('Введите корректный Email').required('Это обязательное поле')
        },
        {
            label: "Пароль",
            name: "password",
            type: "input",
            validators: yup.string().required('Это обязательное поле').min(6, 'Минимальная длина пароля - 6 символов')
        },
        {
            label: "Подтверждение пароля",
            name: "passwordConfirm",
            type: "input",
            validators: yup.string().required('Это обязательное поле').oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        },

    ]
}

export default inputTypes