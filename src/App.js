import React, {useEffect, useState} from "react";

export const App = () => {
    const [users , setUsers] = useState([]);

    useEffect(()=>{
            const fetchUsers = async () =>{
                const usersNameJson = await fetch('https://jsonplaceholder.typicode.com/users');
                const users= await usersNameJson.json();
                setUsers(users);
            };

            fetchUsers();
        },
        []
    );

    const renderUsers = () =>{
        const shotUsers = [...users];
        return shotUsers.splice(0,5)
            .map((item) =>{
                return (
                    <div key={item.id}>
                        <ul>
                            <li>Имя : {item.name}</li>
                            <li>Никнейм : {item.username}</li>
                            <li>email : {item.email}</li>
                            <li>улица : {item.address.street}</li>
                            <li>suite : {item.address.suite}</li>
                            <li>город : {item.address.city}</li>
                            <li>zipcode : {item.address.zipcode}</li>
                            <li>lat : {item.address.geo.lat}</li>
                            <li>lng : {item.address.geo.lng}</li>
                            <li>телефон : {item.phone}</li>
                            <li>website : {item.website}</li>
                            <li>name : {item.company.name}</li>
                            <li>catchPhrase : {item.company.catchPhrase}</li>
                            <li>bs : {item.company.bs}</li>
                        </ul>
                    </div>
                )


        })
    }
    const next = () =>{
        const nextUsers = [...users];
        setUsers(nextUsers.splice(5,5));
    }
  return (
      <div>
          {renderUsers()}
          <button onClick={next}>
             next
          </button>
      </div>
  )

}

