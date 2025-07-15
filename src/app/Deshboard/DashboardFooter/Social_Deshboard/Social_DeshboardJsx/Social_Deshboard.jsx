



'use client'

import { useState } from "react";

import Swal from "sweetalert2";


function Social_Deshboard() {


  const [posttype, setPostType] = useState("facebook")



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const Selected_type = form.get('posttype');

    let postedData = {
      Selected_type,
      Facebook_Url: "",
      Youtube_Url: "",
      Twitter_Url: "",
      Linkdin_Url: "",

    };

    if (Selected_type === "facebook") {
      const Facebook_Url = form.get('facebookurl');
    

      postedData = {
        Selected_type,
        Facebook_Url
        

      };
    }

    if (Selected_type === "youtube") {
      const Youtube_Url = form.get('youtubeurl');
      
      postedData = {
        Selected_type,
       Youtube_Url
      };
    }

    if (Selected_type === "twitter") {
      const Twitter_Url = form.get('twitterurl');
      

      postedData = {
        Selected_type,
        Twitter_Url
      };
    }

    if (Selected_type === "linkedin") {
      const Linkdin_Url = form.get('linkedinurl');
      
      postedData = {
        Selected_type,
        Linkdin_Url
      };
    }

    try {
      const response = await fetch("https://speach-and-langauge-responsive.vercel.app/social_api", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postedData),
      });

      const res = await response.json();

      if (res.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Post Successfully Added!',
          showConfirmButton: false,
          timer: 1500
        });
        e.target.reset();

      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Network Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
    <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Social Media Link Post Form</h1>
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
            <option className=" text-white text-lg">facebook</option>
            <option className=" text-white text-lg">youtube</option>
            <option className=" text-white text-lg">twitter</option>
            <option className=" text-white text-lg">linkedin</option>
           

          </select>
        </div>

        {
          posttype === "facebook" && (

            <>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Facebook URL  </legend>
                <input type="url" name='facebookurl' className="input w-full text-white text-lg" placeholder="Facebook URL" required />
              </div>
              

            </>
          )
        }
        {
          posttype === "youtube" && (

            <>

              <div>
                <legend className="text-lg font-semibold pt-5 text-white">YouTube URL</legend>
                <input type="url" name='youtubeurl' className="input w-full text-white text-lg" placeholder="YouTube URL" required />
              </div>
             
            </>

          )
        }


        {
          posttype === "twitter" && (
            <>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Twitter URL </legend>
                <input type="text" name='twitterurl' className="input w-full text-white text-lg" placeholder="Twitter URL" required />
              </div>
             
            </>
          )
        }

        {

          posttype === "linkedin" && (
            <>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Linkedin URL</legend>
                <input type="text" name='linkedinurl' className="input w-full text-white text-lg" placeholder="Linkedin URL" required />
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

export default Social_Deshboard
