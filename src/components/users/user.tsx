import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { fetchUsers } from './userSlice';


export const Users = ()=>{
 const user = useAppSelector(state=> state.user);
 const  dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

    return(
        <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
          <ul>
            {user.users.map((user:any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    )
}