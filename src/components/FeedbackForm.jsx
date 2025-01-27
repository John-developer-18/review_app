import Card from './shared/Card'
import { useState, useEffect  } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    useEffect(()=>{
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setRating(feedbackEdit.item.rating)
        setText(feedbackEdit.item.text)
      }
      
    }, [feedbackEdit])

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }

        else if(text !== '' && text.trim().length <=10){
            setMessage('Text must be at least 10 character')
            setBtnDisabled(true)
        }

        else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 1){
          const newFeedback = {
            text,
            rating
          }
          if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
          }
          else{
            addFeedback(newFeedback)
          }
          setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/*sdsr*/}
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
