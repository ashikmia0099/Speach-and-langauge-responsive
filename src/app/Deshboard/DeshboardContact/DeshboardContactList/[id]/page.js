




'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Contact_Data_Update() {


    const [posttype, setPostType] = useState("One")
    const { contactData, setContactData } = useAuth();
    const [singledata, setSingleData] = useState(null);


    const params = useParams();
    const router = useRouter()
    const id = params?.id;



    // fetch all contact data

    useEffect(() => {

        fetch("http://localhost:3000/Contact_api")
            .then(res => res.json())
            .then(data => {

                const dataWithIds = data.map((item, index) => ({ id: index + 1, ...item }))
                setContactData(dataWithIds)

            })
    }, []);


    useEffect(() => {

        if (contactData.length > 0 && id) {
            const found = contactData.find(news => news._id === id);
            setSingleData(found);
            if (found?.Selected_type) setPostType(found.Selected_type)
        }

    }, [contactData, id])


    console.log('single data ', singledata)




    const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const Selected_type = form.get('posttype');

    let postedData = { Selected_type };

    if (Selected_type === 'One') {
      postedData = {
        Selected_type,
        Title_Text_One: form.get('textone'),
        Description: form.get('Description'),
        Phone_One: form.get('phoneone'),
        Phone_Two: form.get('phonetwo'),
      };
    } else if (Selected_type === 'Two') {
      postedData = {
        Selected_type,
        Title_Text_One: form.get('textone'),
        Description: form.get('Description'),
        Email_One: form.get('emailone'),
        Email_Two: form.get('emailtwo'),
      };
    } else if (Selected_type === 'Three') {
      postedData = {
        Selected_type,
        Title_Text_One: form.get('textone'),
        Description: form.get('Description'),
        Location: form.get('locationone'),
      };
    } else if (Selected_type === 'Four') {
      postedData = {
        Selected_type,
        Title_Text_One: form.get('textone'),
        Description: form.get('Description'),
        Opening_Day: form.get('openingday'),
        Opening_Time: form.get('openingtime'),
      };
    }

    try {
      const response = await fetch(`http://localhost:3000/Contact_api?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postedData),
      });

      const res = await response.json();

      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Updated Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/Deshboard/DeshboardContact/DeshboardContactList');
      } else {
        Swal.fire('Error!', res.error || 'Something went wrong.', 'error');
      }
    } catch (error) {
      Swal.fire('Network Error!', error.message, 'error');
    }
  };


    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Contact Data Update Form</h1>
            <form onSubmit={handleFormSubmit}>


                <div>
                    <legend className="text-lg font-semibold pt-5 text-white pb-2">Choose Post Type </legend>
                    <select
                        value={posttype}
                        onChange={(e) => setPostType(e.target.value)}
                        defaultValue="Pick a color"
                        name="posttype"
                        className="select w-full text-white text-lg" required>
                        <option disabled={true} className=" text-white text-lg">Select Post Type</option>
                        <option className=" text-white text-lg">One</option>
                        <option className=" text-white text-lg">Two</option>
                        <option className=" text-white text-lg">Three</option>
                        <option className=" text-white text-lg">Four</option>

                    </select>
                </div>

                {
                    posttype === "One" && (

                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input type="text" defaultValue={singledata?.Title_Text_One || " "} name='textone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea name='Description' defaultValue={singledata?.Description || ''} className='textarea w-full text-white mt-3' placeholder='Description' rows={12}></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Phone Number One  </legend>
                                <input type="text" defaultValue={singledata?.Phone_One || " "} name='phoneone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Phone Number Two  </legend>
                                <input type="text" defaultValue={singledata?.Phone_Two || " "} name='phonetwo' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>

                        </>
                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input defaultValue={singledata?.Title_Text_One || " "} type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea defaultValue={singledata?.Description || " "} name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Email One  </legend>
                                <input defaultValue={singledata?.Email_One || " "} type="text" name='emailone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Email Two  </legend>
                                <input defaultValue={singledata?.Email_Two || " "} type="text" name='emailtwo' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>

                        </>

                    )
                }


                {
                    posttype === "Three" && (
                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input defaultValue={singledata?.Title_Text_One || " "} type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea defaultValue={singledata?.Description || " "} name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Location  One  </legend>
                                <input defaultValue={singledata?.Location || " "} type="text" name='locationone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>

                        </>
                    )
                }

                {

                    posttype === "Four" && (
                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input defaultValue={singledata?.Title_Text_One || " "} type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea defaultValue={singledata?.Description || " "} name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Opening Day One  </legend>
                                <input defaultValue={singledata?.Opening_Day || " "} type="text" name='openingday' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Opening time Two  </legend>
                                <input defaultValue={singledata?.Opening_Time || " "} type="text" name='openingtime' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                        </>
                    )
                }

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Contact_Data_Update