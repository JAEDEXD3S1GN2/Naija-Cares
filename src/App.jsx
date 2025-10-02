// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { useEffect } from "react";
import { motion } from "framer-motion";

// import { Card, CardContent } from "@/components/ui/card";
import { FaStethoscope, FaCapsules, FaHospitalSymbol } from "react-icons/fa";
import { GiMicroscope, GiHealthNormal } from "react-icons/gi";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 p-6 text-gray-800">
        <header className="text-center py-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-blue-900"
          >
            AI-Powered Healthcare Companion
          </motion.h1>
          <p className="mt-4 text-xl text-blue-700">
            Diagnose illnesses, get checkup recommendations, and explore global
            health insights
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
          <FeatureCard
            icon={<FaStethoscope size={40} className="text-blue-600" />}
            title="Smart Diagnosis"
            description="Enter your symptoms and receive an AI-driven diagnosis with treatment suggestions."
          />
          <FeatureCard
            icon={<GiMicroscope size={40} className="text-green-600" />}
            title="Test & Checkup Suggestions"
            description="Get personalized recommendations for tests and screenings based on your age."
          />
          <FeatureCard
            icon={<FaCapsules size={40} className="text-purple-600" />}
            title="Accurate Drug Prescriptions"
            description="Receive tailored prescriptions matched to your diagnosed illness."
          />
          <FeatureCard
            icon={<FaHospitalSymbol size={40} className="text-red-600" />}
            title="Global Health Insights"
            description="Explore updates from WHO, NCDC, and other major health organizations."
          />
          <FeatureCard
            icon={<GiHealthNormal size={40} className="text-yellow-600" />}
            title="Preventive Care Advice"
            description="Stay informed on how to prevent common illnesses and maintain good health."
          />
        </section>

        <div className="text-center mt-16">
          <button className="text-lg px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl shadow-lg">
            Explore Features
          </button>
        </div>
      </div>

      {/* function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-xl p-6 text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  ); */}
    </>
  );
}

export default App;
