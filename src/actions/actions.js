import axios from 'axios'

export const getMore = (thePlace_id) => {
return (dispatch)=>{
  return axios.get(`http://localhost:3000/chiropractors/more`,{
    params:{
      place_id: thePlace_id
    }
  })
  .then(json => {dispatch({type:"SETQUERYDISPLAY",payload:json.data.result})})
}}
