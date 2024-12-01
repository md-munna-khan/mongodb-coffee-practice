

const UpdateCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] w-11/12 mx-auto p-24'>
        <h2 className="text-3xl text-green-600">update coffee</h2>
        <form >
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > Name</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='coffee name' name="name" id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > chef</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='coffee chef' name="quantity" id="" />
                    </label>
                </div>
            </div>
            {/* end */}
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > supplier</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='supplier' name="supplier" id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > taste</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='taste chef' name="taste" id="" />
                    </label>
                </div>
            </div>
            {/* end */}
            {/* form */}
            <div className='flex'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > category</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='category' name="category" id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span > Details</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='Details' name="details" id="" />
                    </label>
                </div>
               
            </div>
            {/* end */}
            <div className='form-control w-full'>
                    <label className='label'>
                        <span > photo URL</span>
                    </label>
                    <label className='label'>
                     <input className='input input-bordered w-full' type="text" placeholder='photo URl' name="photo" id="" />
                    </label>
                </div>
     <input className='btn btn-warning w-full' type="submit" value="add coffee" />
       
        </form>
    </div>
    );
};

export default UpdateCoffee;