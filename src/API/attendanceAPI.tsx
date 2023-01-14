import axios from 'axios';

const APIUrl =process.env.REACT_APP_API;

export const getAttendanceList = (data: any) => axios.get(APIUrl+"get-attendance-list?from="+data.from+"&to="+data.to); 
