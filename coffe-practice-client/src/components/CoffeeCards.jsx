import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCards = ({coffee}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee

    const handleDelete= _id=>{
console.log(_id)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
   
  console.log("delete confirmed")
  fetch(`http://localhost:5000/coffees/${_id}`,{
    method:'delete'
  })
  .then(res=> res.json())
  .then((data)=>{
    console.log(data)
     if(data.deletedCount>0){
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
     }
  })
    }
  });
    }
    return (
       <div className="flex my-10 w-11/12 mx-auto justify-between items-center shadow-lg p-8 bg-zinc-400">
        <div>
            <img src={photo} alt="" />
        </div>
        <div>
            <p>{quantity}</p>
            <p>{taste}</p>
            <p>{details}</p>
        </div>
        <div className="flex flex-col space-y-4">
            <button className="btn btn-success">update</button>
            {/* <Link to={`/updateCoffee/${_id}`} className="btn btn-warning">Delete</Link> */}
            <button
            onClick={()=>handleDelete(_id)}
            className="btn btn-warning" >delete</button>
        </div>
       </div>
    );
};

export default CoffeeCards;