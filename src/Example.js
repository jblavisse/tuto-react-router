//Ce fichier ne sert que d'exemple pour comprendre le fonctionnement et la syntaxe de ReactJS 
// N'hésitez pas à le supprimer à chaque nouveau projet (Modifications à apporter dans App.js également)

import React, {useState} from 'react'


export default function Example() {

     let [bachi, setBachi] = useState(0);

     function incrementBachi() {
        setBachi(bachi+1);
    }

    return (
        <div onClick={incrementBachi}>
            {bachi}
        </div>
    )
}
