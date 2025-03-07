import logo from './logo.svg'
import './App.css'
import { Card } from './Components/Card'

const card1 = {
    title: 'Standard',
    bColor: '#0068db',
    price: '$5.99',
    list: [
        { sticker: '✔', text: 'sample text' },
        { sticker: '✔', text: 'sample text' },
        { sticker: '✔', text: 'sample text' },
        { sticker: '❌', text: 'sample text' },
    ],
}

const card2 = {
  title: 'Classic',
  bColor: '#027d57',
  price: '$2.99',
  list: [
      { sticker: '✔', text: 'sample text' },
      { sticker: '❌', text: 'sample text' },
      { sticker: '❌', text: 'sample text' },
      { sticker: '❌', text: 'sample text' },
  ],
}

const card3 = {
  title: 'Premium',
  bColor: '#02356c',
  price: '$10.99',
  list: [
      { sticker: '✔', text: 'sample text' },
      { sticker: '✔', text: 'sample text' },
      { sticker: '✔', text: 'sample text' },
      { sticker: '✔', text: 'sample text' },
  ],
}

function App() {
    const styleDiv = {
        margin: '0 auto',
        width: '1400px',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
    }

    return (
        <div style={styleDiv}>
            <Card data={card1} />
            <Card data={card2} />
            <Card data={card3} />
        </div>
    )
}

export default App
