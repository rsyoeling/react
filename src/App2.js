//const React = require('react')
import React from 'react'
import { render } from 'react-dom'

const App = () =>{
    const [name, setName] = useState('Yoel123')

    return<div>
        {name}
    </div>
}

export default App
