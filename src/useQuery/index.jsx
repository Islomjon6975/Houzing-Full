import React from 'react'
import { useState } from 'react'
import { useMuatation } from 'react-query'

export const Query = () => {
    const [state, setState] = useState([])

    const {mutate} = useMuatation(
        'get data',
        () => {
            return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
        },
    )

    const onShow = () => {
        mutate({}, {
            onSuccess: (res) => {
                setState(res)
                console.log(res, 'ressssssssssssssssssss')
            }
        } )

    }
    
  return (
    <div>
        FADSFASFASD
       {/* <button onClick={onShow}>show</button> */}
       {/* {
        state?.map((value) => {
            return(
                <div>
                    {value.usename}
                </div>
            )
        })
       } */}
    </div>
  )
}

// useQuery
// useMuatation
