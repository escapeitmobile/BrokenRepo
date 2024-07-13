import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Overview(){
    const [list, setList] = React.useState([]);
    useEffect(() => {
        axios.post('/game/getgamedata',{})
        .then((res)=>{
            setList(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
            <div className="ant-list-box table-responsive">
                  <table className="width-100">
                    <tbody>
                        <th style={{textAlign: 'center'}}>ID</th>
                        <th style={{textAlign: 'center'}}>GameName</th>
                        <th style={{textAlign: 'center'}}>GameStatus</th>
                      {list.map((item, index) => (
                        <tr key={index}>
                          <td style={{textAlign: 'center'}}>{index + 1}</td>
                          <td style={{textAlign: 'center'}}>{item.gamename} </td>
                          <td style={{textAlign: 'center'}}>{item.gamestatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
        </>
    )
}