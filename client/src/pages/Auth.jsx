import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaRobot } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { motion } from "motion/react";
import { BsRobot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import axios from "axios"
import { ServerUrl } from "../App";

function Auth({isModel = false}) {

  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let User = response.user
      let name = User.displayName
      let email = User.email

      const result = await axios.post(ServerUrl + "/api/auth/google", {name, email}, {withCredentials:true})
      dispatch(setUserData(result.data));
      
    } catch (error) {
      console.log(`error is found in authentication page ${error}`)
    }

  };

  return (
    <div className={`
      w-full
      ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
      `}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          w-full
          ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-4xl"}
          bg-white shadow-2xl border border-gray-200
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-black p-2 rounded-lg">
            <BsRobot size={18} color="white" />
          </div>
          <h1 className="text-xl font-bold tracking-wide">InterviewIQ.AI</h1>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">Continue with</h2>

        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-green-100">
          <BsStars className="text-green-600 text-lg" />
          <span className="text-2xl font-semibold text-green-600">
            AI Smart Interview
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-6 text-[15px] leading-7">
          Sign in to start AI-powered mock interviews, track your progress, and
          unlock detailed performance insights.
        </p>

        {/* Google Button */}
        <motion.button
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.75 }}
          onClick={handleGoogleAuth}
          className="w-full mt-10 flex items-center justify-center gap-3 bg-black text-white py-3.5 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300"
        >
          <FcGoogle size={24} />
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Auth;
