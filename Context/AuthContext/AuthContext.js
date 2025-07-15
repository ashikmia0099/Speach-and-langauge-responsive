"use client"

// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { auth } from "../lib/firebase";

const { createContext, useState, useEffect, useContext } = require("react")


// const provider = new GoogleAuthProvider();

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


    // home page state

    const [banner_data, setbanner_data] = useState([])
    const [second_banner_image, setSecBannerImage] = useState([])
    const [mission_vission_object, setmission_vission_object] = useState([])
    const [home_three_banner_data, sethome_three_banner_data] = useState([])
    const [desies, setDesies] = useState([]);
    const [healthCare, setHealthCare] = useState([]);
    const [Questions, setQuestion] = useState([]);
    const [founding_member, setFoundingMember] = useState([]);
    const [ourEvent, setourEvent] = useState([]);


    // about us page  state
    const [title_text, setall_title_text] = useState([])
    const [about_all_Image, setabout_all_Image] = useState([])
    const [all_Ratio, setall_Ratio] = useState([])
    const [all_three_banner, setall_three_banner] = useState([])
    const [banner_last_image, setbanner_last_image] = useState([])
    const [last_banner_text, setlast_banner_text] = useState([])


    // news and updates page state

    const [all_news, set_All_news] = useState([]);


    // contact us data

    const [contactData, setContactData] = useState([]);


    // shared state

    const [social_link, setSocial_link] = useState([])

    // gallary state


    const [gallary_image, setGallary_image] = useState([])


    // donation state

    const [donationAmount, setdonationAmount] = useState([])
    const [donationMedium, setdonationMedium] = useState([])
    const [donationquestion, setdonationquestion] = useState([])







    const userInfo = {


        // home page state
        banner_data, setbanner_data,
        second_banner_image, setSecBannerImage,
        mission_vission_object, setmission_vission_object,
        home_three_banner_data, sethome_three_banner_data,
        desies, setDesies,
        healthCare, setHealthCare,
        Questions, setQuestion,
        founding_member, setFoundingMember,
        ourEvent, setourEvent,


        // about data state

        title_text, setall_title_text,
        about_all_Image, setabout_all_Image,
        all_Ratio, setall_Ratio,
        all_three_banner, setall_three_banner,
        banner_last_image, setbanner_last_image,
        last_banner_text, setlast_banner_text,




        // news and update state
        all_news, set_All_news,


        // contact data
        contactData, setContactData,

        // shared data

        social_link, setSocial_link,

        // gallary state

        gallary_image, setGallary_image,


        // donation state

        donationAmount, setdonationAmount,
        donationMedium, setdonationMedium,
        donationquestion, setdonationquestion



    }




    // useEffect(() => {

    //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    //         if (currentuser && currentuser.emailVerified) {
    //             setUsers(currentuser);

    //         } else {
    //             setUsers(null);
    //         }
    //         setLoading(false)
    //     })
    //     return () => unsubscribe()


    // }, [])







    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)