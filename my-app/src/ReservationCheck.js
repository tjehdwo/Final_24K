import { useEffect } from "react";

function ReservationCheck () {
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

    useEffect (() => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phoneNumber', phoneNumber);

        //axios
        
    })
   /* useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('')
                set
                
            }catch(error){

            }
        }
    })*/

    return(
        <div>

        </div>
    )
}
export default ReservationCheck;