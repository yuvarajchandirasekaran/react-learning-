function Profile() {
    const name = 'Yuvaraj';
    const role = 'UI Developer';
    const experience = 2;

    return (
        <div className="profile">
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <p>Experience: {experience} years</p>
        </div>
    );
}

export default Profile;