

'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function DeshboardGallaryDataForm() {



  const [increseDescripton, setincreseDescripton] = useState([]);






  const addSection = () => {
    setincreseDescripton(prev => [...prev, { id: Date.now() }]);
  };





  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);


    const Image_Width = form.get('imagewidth');

    const SingleImageFile = form.get('gallaryimage');
    const Gallary_Image = SingleImageFile ? await uploadToImgBB(SingleImageFile) : "";

    const dynamicDescriptions = await Promise.all(
      increseDescripton.map(async (section, index) => {
        const image_width = form.get(`image_width${index}`);
        const Singleimage = form.get(`gallary_image${index}`);
        const gallary_image = Singleimage ? await uploadToImgBB(Singleimage) : "";

        return { image_width, gallary_image };
      })
    );

    const Data = {

      Image_Width,
      Gallary_Image,
      dynamicDescriptions
    };




    try {
      const response = await fetch("http://localhost:3000/Gallary_api", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
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
        setincreseDescripton([]);
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
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Gallary Image Post Form</h1>
      <form onSubmit={handleFormSubmit}>



        <div>
          <legend className="text-lg font-semibold pt-5 text-white">Image Width (max width 12 cols) </legend>
          <input type="number" name='imagewidth' className="input w-full text-white text-lg" placeholder="Image Width  " required />
        </div>

        <div>
          <legend className="text-lg font-semibold pt-5 text-white">Choose Doctor Image </legend>
          <input type="file" name='gallaryimage' className="input w-full text-white text-lg" placeholder="Choose Image" required />
        </div>

        <div className='py-4 flex justify-between items-center'>
          <h4 className='text-2xl font-semibold uppercase text-white'>Increase Description</h4>
          <button
            type="button"
            className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
            onClick={addSection}
          >
            <TiPlus />
          </button>
        </div>


        {increseDescripton.map((section, index) => (
          <div key={section.id} className='py-10 pb-16'>
            <div>
              <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                Section {index + 1}
              </h4>
            </div>
            <div className='gap-3'>
              <div className=' gap-3'>
                <div>
                  <legend className="text-lg font-semibold pt-5 text-white">Image Width (max width 12 cols) </legend>
                  <input
                    type="number"
                    name={`image_width${index}`}
                    className="input w-full text-white text-lg"
                    placeholder="Image Width"
                    required
                  />
                </div>

                <div>
                  <legend className="text-lg font-semibold pt-5 text-white">Choose Doctor Image </legend>
                  <input
                    type="file"
                    name={`gallary_image${index}`}
                    className="input w-full text-white text-lg"
                    placeholder="Choose Image"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        ))}



        <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default DeshboardGallaryDataForm