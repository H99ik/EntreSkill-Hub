import DashboardLayout from "../components/layout/DashboardLayout";
import ProgressCard from "../components/dashboard/ProgressCard";
import RoadmapTimeline from "../components/roadmap/RoadmapTimeline";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRoadmaps,
  getRoadmapByEntrepreneur,
} from "../services/roadmapService";

import { FaUserGraduate } from "react-icons/fa";

function Roadmap() {
  const { id } = useParams();

  const [roadmap, setRoadmap] = useState(null);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  useEffect(() => {
    fetchRoadmap();
  }, [id]);

  const fetchRoadmap = async () => {
    try {
      let response;

      if (id) {
        response = await getRoadmapByEntrepreneur(id);
        setRoadmap(response.data);
      } else {
        response = await getRoadmaps();

        if (response.data.length > 0) {
          setRoadmap(response.data[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const totalSteps = roadmap?.steps?.length || 0;

  const completedSteps =
    roadmap?.steps?.filter((step) => step.completed).length || 0;

  const progress =
    totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {userInfo.role === "mentor" && roadmap?.entrepreneur
            ? `${roadmap.entrepreneur.name}'s Startup Roadmap`
            : "My Startup Roadmap"}
        </h1>

        <p className="mt-2 text-gray-500">
          Track your startup journey step by step.
        </p>
      </div>

      {userInfo.role === "mentor" && roadmap?.entrepreneur && (
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
            <FaUserGraduate className="text-xl text-blue-600" />
            Entrepreneur Information
          </h2>

          <div className="mt-5 space-y-3">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {roadmap.entrepreneur.name}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {roadmap.entrepreneur.email}
            </p>

            <p>
              <span className="font-semibold">Roadmap:</span> Startup Journey
            </p>
          </div>

          {!showRoadmap && (
            <button
              onClick={() => setShowRoadmap(true)}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              View Startup Roadmap
            </button>
          )}
        </div>
      )}

      {(userInfo.role !== "mentor" || showRoadmap) && (
        <>
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-1">
              <ProgressCard
                progress={progress}
                completedSteps={completedSteps}
                totalSteps={totalSteps}
                title="Startup Progress"
                description="Track your startup journey step by step."
              />
            </div>

            <div className="xl:col-span-2">
              <RoadmapTimeline steps={roadmap?.steps || []} />
            </div>
          </div>

          {userInfo.role === "mentor" && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowRoadmap(false)}
                className="rounded-xl bg-gray-700 px-6 py-3 text-white transition hover:bg-gray-800"
              >
                Hide Roadmap
              </button>
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
}

export default Roadmap;
