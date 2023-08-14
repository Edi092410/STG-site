import React, {useEffect} from 'react'
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OrderContext } from "../../context/OrderProvider";

export const List = () => {
    
  const [selectedOption, setSelectedOption] = useState({});
  // UseContext ашиглан component refresh хийх
  const [OrderData, setOrderData] = useState([]);
  const { refresh, setRefresh } = useContext(OrderContext);
  // Loading хийх
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        const FetchData = async () => {
          if (selectedOption !== "") {
            setLoading(true);
            try {
              const data = await axios.get(
                // `https://service2.stg.mn/api/services/getservicelist?customerId=${selectedOption}&startDate=${date}&endDate=${date2}`,
                `/api/services/getservicelist?customerId=${selectedOption}&startDate=${date}&endDate=${date2}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-type": "application/json",
                  },
                }
              );
              setOrderData(data.data);
              console.log(data.data);
            } catch (err) {
              setHasError(true);
            } finally {
              setLoading(false);
            }
          }
        };
        FetchData();
      }, [selectedOption, month, refresh]);
    
  return (
    <div>List</div>
  )
}
