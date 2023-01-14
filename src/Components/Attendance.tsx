import * as React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { getAttendanceList } from '../API/attendanceAPI';

const Attendance = (params:any) => {
const [details, setDetails]: any = useState();
const [isLoding, setIsLoading]= useState(true);

    
useEffect(() => {
    getAttendanceList({from:'01/01/2023', to: '01/15/2023'}).then((response: any)=>{
        if (response.data.status === true) {
            setDetails(response.data.data);
            setIsLoading(false);
        }        
    })
}, [])

    return(
        <div className='App'>
            <h1> Attendance Details </h1>
            <div className='container'>
                {isLoding? <div>Loding...</div>: 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Total Working Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((item:any, index:number) => {
                            let working_hours:any;
                            if (item.check_in && item.check_out) {
                                const checkin = new Date(item.check_in);
                                const checkout = new Date(item.check_out);
                                working_hours = (Math.abs(checkout.getTime() - checkin.getTime()) / 3600000).toFixed(1)+"Hours";
                               
                            }else{
                                working_hours = "N/A"
                            }

                            return(
                                    <tr key={index}>
                                        <td> {index}</td>
                                        <td> {item.name} </td>
                                        <td> {item.check_in?item.check_in:"N/A"} </td>
                                        <td> {item.check_out?item.check_out:"N/A"} </td>
                                        <td> {working_hours} </td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </Table>
                }
            </div>
        </div>
    )
}

export default Attendance;