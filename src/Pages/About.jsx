import React from 'react';


const AboutPage = () => {
  return (
    
    <div className="about-page">
    
      <header>
        <h1>About Our Services</h1>
      </header>
      <section className="about-content">
        <h2 className='hh'>Our Story</h2>
        <p className='hh'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum vel neque non purus egestas suscipit sed eget
          justo. Proin viverra odio eu diam mollis, at sagittis velit interdum.
        </p>
      </section>
      <h2 className='backgrounh2'>Meet Our Team</h2>
      <section className="team-members">
        
        <div className="team-member">
          <img src="public\img\AS.jpg" alt="Team Member" />
          <h3>Abu Sufyan</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member" />
          <h3>Basharat Razi</h3>
          <p>COO</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
