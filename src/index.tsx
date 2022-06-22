import ReactDom from 'react-dom'
import React, { useEffect, useState } from "react";

/**
 * Die folgende React-Komponente soll einen Info-Text anzeigen.
 * Der Text soll beim initialen Rendern der Komponente über die
 * REST-Schnittstelle "/api/info" geladen werden.
 * 
 * In der gegenwärtigen Implementierung wird der Text zwar wie gewünscht angezeigt,
 * aber der Netzwerkrequest zu /api/info wird mehrfach ausgeführt.
 * 
 * Wie kann der Code verändert werden, so dass der Request nur ein einziges mal durchgeführt wird?
 * 
 * Lösung: Der Funktion `useEffect` muss als zweites Argument ein leeres Array übergeben werden.
 * 
 * Vergleiche: https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
 */

export default function InfoText() {
  const [text, setText] = useState("loading...")
  
  useEffect(() => {
    fetch('/api/info')
      .then(response => response.text())
      .then(setText)
  })

  return (
    <p>
      {text}
    </p>
  );
}

ReactDom.render(<InfoText/>, document.getElementById('app'))