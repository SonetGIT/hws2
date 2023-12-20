import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>, setName: any, addUserCallback: any) => {
    if(name.trim() === '' || name.trim() === '    ')
    {
        setError('Ошибка! Введите имя!')
    }
    else addUserCallback(name, setName(''))
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { // если имя пустое - показать ошибку
    if(name === '' || name === '    ')
    {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
       addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [totalUsers, setTotalUsers] = useState<number>(users.length);
    
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback) 
        setTotalUsers((totalUsers) => totalUsers + 1);
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsersc = 0; // need to fix
    const lastUserName = name;
    // const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
