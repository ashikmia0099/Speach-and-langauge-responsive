





'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function About_Four_Ratio_Form() {


  const [posttype, setPostType] = useState("One")








  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const Selected_type = form.get('posttype');

    let postedData = {
      Selected_type,
      Title_Text: null,
      Number: null,
     

    };

    if (Selected_type === "One") {
      const Title_Text = form.get('textone');
      const Number = form.get('methone');


      postedData = {
        Selected_type,
        Title_Text,
        Number,

      };
    }

    if (Selected_type === "Two") {
      const Title_Text = form.get('texttwo');
      const Number = form.get('mathtwo');

      postedData = {
        Selected_type,
        Title_Text,
        Number
      };
    }

    if (Selected_type === "Three") {
      const Title_Text = form.get('textthree');
      const Number = form.get('meththree');

      postedData = {
        Selected_type,
        Title_Text,
        Number
      };
    }

    if (Selected_type === "Four") {
      const Title_Text = form.get('textfour');
      const Number = form.get('methfour');

      postedData = {
        Selected_type,
        Title_Text,
        Number
      };
    }

    try {
      const response = await fetch("https://speach-and-langauge-responsive.vercel.app/Four_Ratio_api", {
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
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>About Page 4 Grid Post Form</h1>
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
                <input type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Text One" required />
              </div>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Number Text  </legend>
                <input type="text" name='methone' className="input w-full text-white text-lg" placeholder="Number Text" required />
              </div>

            </>
          )
        }
        {
          posttype === "Two" && (

            <>

              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                <input type="text" name='texttwo' className="input w-full text-white text-lg" placeholder="Title Text One" required />
              </div>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Number Text  </legend>
                <input type="text" name='mathtwo' className="input w-full text-white text-lg" placeholder="Number Text" required />
              </div>

            </>

          )
        }


        {
          posttype === "Three" && (
            <>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                <input type="text" name='textthree' className="input w-full text-white text-lg" placeholder="Title Text One" required />
              </div>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Number Text  </legend>
                <input type="text" name='meththree' className="input w-full text-white text-lg" placeholder="Number Text" required />
              </div>
            </>
          )
        }

        {

          posttype === "Four" && (
            <>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                <input type="text" name='textfour' className="input w-full text-white text-lg" placeholder="Title Text One" required />
              </div>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Number Text  </legend>
                <input type="text" name='methfour' className="input w-full text-white text-lg" placeholder="Number Text" required />
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

export default About_Four_Ratio_Form