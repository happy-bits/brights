import { useState } from "react"

function Selectbox() {

    const [selectedFruit, setSelectedFruit] =  useState('')

    const handleChange = (e) => {
        console.log('hallå?')
        setSelectedFruit(e.target.value)
    }

    return(

        <div>

            Pick a fruit

            <select value={selectedFruit} onChange={handleChange} >
            {/* <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)} > */}
                <option value="">Select a fruit</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>

            <p>
                Your favorite fruit: {selectedFruit}
            </p>
        </div>
    )
}

export default Selectbox