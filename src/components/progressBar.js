import './progressBar.css';

const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '200px',
        backgroundColor: '#D9D9D9',
        borderRadius: 40,
        margin: 0
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#293D9B',
        borderRadius:40,
        textAlign: 'centre'
      }
      
    //   const progresstext = {
    //     padding: 200,
    //     color: 'black',
    //     fontWeight: 700,
    //   }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <div className= 'progText' >{`${progress}%`}</div>
      </div>
    </div>
    )
}
  
export default Progress_bar;