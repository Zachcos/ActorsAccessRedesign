const UserCard = () => (
  <div className='card'>
    <div className='top'>
      <h2>Zach Cossman</h2>
      <div className='statusLinks'>
        <div className='link_mail'>cMail (0)</div>
        <div className='card'>Cart (0)</div>
      </div>
    </div>
    <div className='main'>
      <a href='#'>Manage Profile</a>
      <a href='#'>Manage Resume</a>
      <a href='#'>Manage Size Card</a>
      <a href='#'>Manage Media</a>
      <a href='#'>Manage Photos</a>
      <a href='#'>Manage SlateShots</a>
    </div>
    <div className='footer'>
      <div className='footer_links'>
        <a href='#'>View your account</a>
        <a href='#'>Manage Representation</a>
        <a href='#'>Manage contact info</a>
      </div>
      <div className='signOut'>
        <a href='#'>Sign out</a>
      </div>
    </div>
  </div>
);

export default UserCard;
