export const ReportCard = ({ selected, grades, handleClick, handleSubmit}) => {
    return(
        <div className='reportCard'>
        <span id="star">
          <img src='../public/images/icon-star.svg'></img>
        </span>
        <div className='info'>
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <span className='grades'>{grades.map((el, index) =>{
          return <button key={index} value={el} className={selected === el ? 'gradeCurrent' : 'grade'} onClick={handleClick}>{el}</button>
        })}
        </span>
        <button className='smbtButton' onClick={handleSubmit}>SUBMIT</button>
      </div>
    )
}