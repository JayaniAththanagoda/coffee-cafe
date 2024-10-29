import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History(){
    return(
        <>
        <div className="section-header">
            <i className="fa-solid fa-timeline" />
            <h2>History</h2>
        </div>
            <p>
                <i>Hover for more Information!</i>
            </p>
            <div className="coffee-history">
                {Object.keys(coffeeConsumptionHistory).sort((a,b) => b-a).map
                ((utTime, coffeeIndex) => { 
                    const coffee = coffeeConsumptionHistory[utTime]
                    const timeSinceConsume = timeSinceConsumption(utTime)
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({
                        [utTime]: coffee
                    })

                     const summary = `${coffee.name} | ${timeSinceConsume} | 
                     $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`




                    return (
                        <div title={summary} key={coffeeIndex}>
                            <i className="fa-solid fa-mug-hot" />

                        </div>
                    )
                })}
            </div>

        
        </>
    )
}