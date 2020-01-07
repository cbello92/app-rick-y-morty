import React from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
import { connect } from 'react-redux';

function Home({ chars }) {

    function renderCharacter() {
        let char = chars[4];
        return (
            <Card {...char} />
        )
    }
    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

// extrae lo que tiene el store y los coloca en los props de este componente
function mapStoreToProps (state) {
    return {
        chars: state.characters.array
    }
}

// connect se encarga de realizar la conexión con el store de redux
export default connect(mapStoreToProps)(Home);
