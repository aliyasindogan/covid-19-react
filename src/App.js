import React,{useEffect,useState} from "react"
import axios  from "axios";
function App() {

    const [data,setData]=useState();
    const [date,setDate]=useState("");
useEffect(()=>{
axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
.then(response=> setData(response.data[date]))
.catch(error=> console.log(error))

},[data,date]);

    return (
    <div className = "App"> 
    <div className = "container">
        <div className = "row">
            <div className = "col-md-8 mx-auto mt-4">
                <h2 className = "text-center display-3">TÜRKİYE COVID-19</h2>
                <input className = "form-control" type = "text" placeholder = "GG/AA/YYYY" onChange = {(e)=>setDate(e.target.value)}/>
                <table className="table table-striped mt-4">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">TEST SAYISI</th>
                        <th scope="col">HASTA SAYISI</th>
                        <th scope="col">VEFAT SAYISI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className = "text-white">
                        <td>{ data===undefined ?"Veri Bekleniyor":data.totalTests}</td>
                        <td>{ data===undefined ?"Veri Bekleniyor":data.totalPatients}</td>
                        <td>{ data===undefined ?"Veri Bekleniyor":data.deaths}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
    </div>
    );
}

export default App;