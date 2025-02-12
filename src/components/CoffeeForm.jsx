import { coffeeOptions } from "../utils/index"
import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"


export default function CoffeeForm(props){
    const{isAuthenticated} = (props)
    const[showModal, setShowModal] = useState(false)
    const [ShowCoffeeTypes, setShowCoffeeTypes] = useState(false)
    const [selectedCoffee, setSelectedCoffee] = useState(null)
    const [coffeeCost, setCoffeeCost] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)

    function handleSubmitForm() {
        if (!isAuthenticated){
            setShowModal(true)
        }
        console.log(selectedCoffee,coffeeCost, hour, min)
    }
    
    return(
        <>
        {showModal && (
            <Modal handleCloseModal= {() => {setShowModal(false)}}>
              <Authentication/>
            </Modal>
        )}
        
        <div className="section-header">
            <i className="fa-solid fa-pencil" />
            <h2>Start Tracking Today</h2>

        </div>
        <h4>Select coffee type</h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0,5).map((Option,optionIndex) => {
                    return(
                        <button onClick={() => {
                            setSelectedCoffee(Option.name)
                            setShowCoffeeTypes(false)
                            }} className={"button-card" + (Option.name === 
                            selectedCoffee ? 'coffee-button-selected' : '')} key=
                            {optionIndex}>
                             <h4>{Option.name}</h4>
                             <p>{Option.caffeine}mg</p>
                        </button>
            
                    )
                })}
                <button onClick={() =>{
                    setShowCoffeeTypes(true)
                    setSelectedCoffee(null)

                    
                }} className={"button-card" + (ShowCoffeeTypes ? 
                'coffee-button-selected' : '')}>
                    <h4>Others</h4>
                    <p>n/a</p>

                </button>
                
            </div>
            
            {ShowCoffeeTypes && ( 
                <select onChange={(e) => 
                    {setSelectedCoffee(e.target.value)
                }}  id="coffee-list" name="coffee-list">
                <option value={null}>Select type</option>
                {coffeeOptions.map ((option,optionIndex) => {
                    return(
                        <option value={option.name} key={optionIndex}>
                            {option.name} ({option.caffeine}mg)
                        </option>
                    )
                })}

               </select>
            )}
            <h4>Add the cost ($)</h4>
            <input className="w-full" type="number" value={coffeeCost} 
            onChange={(e) => {setCoffeeCost (e.target.value)

            }} placeholder="4.50"/>
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                <h6>Hours</h6>
                <select  onChange={(e) => {
                        setHour(e.target.value)
                    }} id="hours-select">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((hour, hourIndex) => {
                            return (
                                <option key={hourIndex} value={hour}>{hour}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select onChange={(e) => {
                        setMin(e.target.value)
                    }} id="mins-select">
                        {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
                            return (
                                <option key={minIndex} value={min}>{min}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <button onClick={handleSubmitForm}>
                <p>Add Entry</p>
            </button>
        </>
    )
}