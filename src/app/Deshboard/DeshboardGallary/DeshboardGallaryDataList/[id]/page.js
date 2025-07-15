'use client';

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";

function DeshboardGallaryDataForm() {
  const { gallary_image, setGallary_image } = useAuth([]);
  const [singledata, setSingleData] = useState(null);
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  useEffect(() => {
    fetch("http://localhost:3000/Gallary_api")
      .then(res => res.json())
      .then(data => setGallary_image(data));
  }, []);

  useEffect(() => {
    if (gallary_image.length > 0 && id) {
      const found = gallary_image.find(data => data._id === id);
      setSingleData(found);
    }
  }, [gallary_image, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const Image_Width = form.get('imagewidth');
    const SingleImageFile = form.get('gallaryimage');
    const Gallary_Image = SingleImageFile && SingleImageFile.size > 0
      ? await uploadToImgBB(SingleImageFile)
      : singledata?.Gallary_Image;

    const dynamicDescriptions = await Promise.all(
      singledata?.dynamicDescriptions?.map(async (section, index) => {
        const image_width = form.get(`image_width${index}`);
        const Singleimage = form.get(`gallary_image${index}`);
        const gallary_image = Singleimage && Singleimage.size > 0
          ? await uploadToImgBB(Singleimage)
          : section?.gallary_image;
        return { image_width, gallary_image };
      }) || []
    );

    const Data = {
      Image_Width,
      Gallary_Image,
      dynamicDescriptions
    };

    try {
      const response = await fetch(`http://localhost:3000/Gallary_api?id=${singledata?._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      });

      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Post Successfully Updated!',
          showConfirmButton: false,
          timer: 1500
        });
        router.push('/Deshboard/DeshboardGallary/DeshboardGallaryDataList');
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
          <legend className="text-lg font-semibold pt-5 text-white">Image Width (max width 12 cols)</legend>
          <input
            type="number"
            defaultValue={singledata?.Image_Width || ''}
            name='imagewidth'
            className="input w-full text-white text-lg"
            placeholder="Image Width"
          />
        </div>

        <div className="flex justify-between py-10">
          <div>
            <legend className="text-lg font-semibold pt-5 text-white">Choose Image</legend>
            <input
              type="file"
              name='gallaryimage'
              className="input w-full text-white text-lg"
              placeholder="Choose Image"
            />
          </div>
          <div>
            <img src={singledata?.Gallary_Image} className="h-40 w-40 rounded-xl" alt="Selected" />
          </div>
        </div>

        {singledata?.dynamicDescriptions?.map((section, index) => (
          <div key={index} className='py-10 pb-16'>
            <div>
              <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                Section {index + 1}
              </h4>
            </div>
            <div>
              <legend className="text-lg font-semibold pt-5 text-white">Image Width</legend>
              <input
                type="number"
                defaultValue={section?.image_width || ''}
                name={`image_width${index}`}
                className="input w-full text-white text-lg"
                placeholder="Image Width"
              />

              <div className="flex justify-between py-10">
                <div>
                  <legend className="text-lg font-semibold pt-5 text-white">Choose Image</legend>
                  <input
                    type="file"
                    name={`gallary_image${index}`}
                    className="input w-full text-white text-lg"
                    placeholder="Choose Image"
                  />
                </div>
                <div>
                  <img src={section?.gallary_image || ""} className="h-40 w-40 rounded-xl" alt={`Section ${index + 1}`} />
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DeshboardGallaryDataForm;
