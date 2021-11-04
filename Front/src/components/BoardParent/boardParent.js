import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Dropdown, Table } from 'semantic-ui-react';
// import add from '../../assets/add_profil.png';
// import Children from './children';
import './style.scss';

const BoardParent = ({
    // children,
    // childrenNumber,
    isLogged,
    handleDeconnexion,
}) => {
  const handleOnDeconnexion = () => {
    handleDeconnexion();
  }
  return (
    <main className="boardParent">
      <div className="boardParent__dropdown">
      <Dropdown text='Choisir'>
      <Dropdown.Menu>
          <Link to="parentProfil"><Dropdown.Item text='Mon profil' /></Link> 
          <Dropdown.Divider />
          <Dropdown.Item 
            text='Se déconnecter'
            onClick={handleOnDeconnexion}
          />
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Dates</Table.HeaderCell>
            <Table.HeaderCell>Type de l'événement</Table.HeaderCell>
            <Table.HeaderCell>Nom de l'événement</Table.HeaderCell>
            <Table.HeaderCell>Enfant(s) concernés</Table.HeaderCell>
            <Table.HeaderCell>Commentaires</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>22/10/2020</Table.Cell>
            <Table.Cell>Sortie scolaire</Table.Cell>
            <Table.Cell>Cinema - Les zozos du lasso</Table.Cell>
            <Table.Cell>Mickael Lacour</Table.Cell>
            <Table.Cell>2 accompagnants parents - pas de besoin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>23/10/2020</Table.Cell>
            <Table.Cell>Evénement interne</Table.Cell>
            <Table.Cell>Fête de l'école</Table.Cell>
            <Table.Cell>Lucie Lacour</Table.Cell>
            <Table.Cell>Venez comme vous êtes !</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15/11/2020</Table.Cell>
            <Table.Cell>Evaluation</Table.Cell>
            <Table.Cell>Table de multiplication - (table de 6)</Table.Cell>
            <Table.Cell>Mickael Lacour</Table.Cell>
            <Table.Cell>Réviser les tables de multiplication</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {!isLogged && <Redirect to="/" />}
  </main>
  )
}
BoardParent.propTypes = {
  // children: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }).isRequired
  // ),
  // childrenNumber: PropTypes.number.isRequired,
  handleDeconnexion: PropTypes.func,
  isLogged: PropTypes.bool,
};

export default BoardParent;
