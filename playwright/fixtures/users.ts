import { User, InvalidUser } from "../interface/user";

export const validUser: User = {
    displayName: 'eiei',
    credential: {
        username: 'few',
        password: '123456'
    }
}

export const invalidUsers: InvalidUser[] = [
    {
        displayName: 'eiei',
        credential: {
            username: 'few',
            password: 'unknow'
        },
        errorMessage: 'ล็อกอินหรือรหัสผ่านไม่ถูกต้อง'
    }
    ,
    {
        displayName: 'jomyut',
        credential: {
            username: 'jomyut',
            password: '123456'
        },
        errorMessage: 'ล็อกอินถูกระงับ'
    }
]
