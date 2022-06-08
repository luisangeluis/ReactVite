import useRandomUser from '../hooks/useRandomUser';

 const UserCard = ({user}) => {

    return (
    <div className='card'>
        <img src={user && user.picture.large} alt="" />
        <h2>Nombre: {user?.name.first}</h2>
        <h2>Apellido: {user?.name.last}</h2>
        <p>{`Ciudad:${user?.location.city}, Pais:${user?.location.country}`}</p>
        <p>{user?.email}</p>
    </div>
  )
}

export default UserCard