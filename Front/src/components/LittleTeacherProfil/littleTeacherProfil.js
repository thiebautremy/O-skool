import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './style.scss';

import bob from '../../assets/bob.png';

const LittleTeacherProfil = () => (
    <Card className="littleTeacherProfil">
    <Image 
    inline
      src={bob}    
      className="littleTeacherProfil__picture"   
      size="small"
        />
    <Card.Content className="littleTeacherProfil__title">
      <Card.Header>Richard Hubert</Card.Header>
      <Card.Meta>
        <span className='littleTeacherProfil__status'>
          Professeur CP
        </span>
      </Card.Meta>
      <Card.Description className='littleTeacherProfil__mail'>
        <Icon name="mail"/> richard.hubert@gmail.com
      </Card.Description>
    </Card.Content>
    <Card.Content className="littleTeacherProfil__hobbies">
        <h4>Loisirs :</h4>
          <ul>
            <li>Crumble</li>
            <li>Crumble congelé</li>
            <li>Crumble japonais</li>
            <li>Crumble cru</li>
            <li>Crumble au Ketchup</li>
          </ul>
    </Card.Content>
  </Card>
);

export default LittleTeacherProfil;
