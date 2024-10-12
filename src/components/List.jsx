import React from 'react';
import "./List.css"

const List = (props) => {
  return (
    <>
        {
            props.userInfo.length > 0 ? (<>
                {
                    props.userInfo.map((user) => 
                        <div key={user.email} className='card'>
                            <div className='box'>
                                <pre>Name  : </pre>
                                <p className='input'>{user.name}</p>
                            </div>
                            <div className='box'>
                                <pre>Live  : </pre>
                                <p className='input'>{user.live}</p>
                            </div>
                            <div className='box'>
                                <pre>Email : </pre>
                                <p className='input'>{user.email}</p>
                            </div>
                        </div>
                     )
                }
            </>) : (<>
                <p className='card'>No user infos.</p>
            </>)
        }
    </>
  )
}

export default List