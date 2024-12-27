import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import PropTypes from 'prop-types'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback ] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this item')){
          setFeedback(feedback.filter(item => item.id !== id))
        }
      }
 
      //Add Feedback
      const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
         setFeedback([newFeedback, ...feedback])
         console.log(feedback)
      }
     // update FeedbackItem
     const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=>item.id === id ? {...item, ...updItem}:item))
     }
      //edit Feedback
      const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
        console.log(item)
      }

      return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}
      >
        {children}
      </FeedbackContext.Provider>
}

FeedbackProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default FeedbackContext