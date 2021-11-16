import React, { useEffect } from 'react'
import { getCostsData } from '../costSlice/costSlice'
import { useAppDispatch } from '../hooks'

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCostsData())
    }, [])
    return (
        <p>
            buyye
        </p>
    )
}

export default App
