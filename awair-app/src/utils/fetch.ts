import axios from 'axios';

//Types
import { FetchSensorDataProps } from '../types/types';

export const fetchData = (props: FetchSensorDataProps) => {
  console.log(props);
  const serverURL = 'http://localhost:8000/'
  const { parameters, urlAppendix, setData, setLoading} = props;
  const url = `${serverURL}${urlAppendix}`
  axios
  .post(url, parameters)
  .then(res => {
    setData(res.data);
  })
  .catch(err => {
    console.log(err)
  })
}