import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)

    const average = feedback.reduce((acc, curr)=>{

        return (acc+curr.rating)
    },0)/feedback.length
    const rndAvg = average.toFixed(1)
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(rndAvg) ? 0 : rndAvg}</h4>
      
    </div>
  )
}

export default FeedbackStats
