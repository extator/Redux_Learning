import React from 'react'
import { useSelector} from 'react-redux'

const ShowData = () => {

    const {login} =  useSelector(state => ({...state}))
    if (login !== 'log out payload'){
        return 'log in jaa'
    }

    return (
        <div>
            {login}
        </div>
    )
}

export default ShowData
