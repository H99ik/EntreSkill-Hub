import DashboardLayout from "../components/layout/DashboardLayout";
import ProgressCard from "../components/dashboard/ProgressCard";
import RoadmapTimeline from "../components/roadmap/RoadmapTimeline";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRoadmapById,
  getRoadmaps,
  getRoadmapByEntrepreneur,
} from "../services/roadmapService";

function Roadmap() {
  const { id } = useParams();

  const [roadmap, setRoadmap] = useState(null);

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
        <h1 className="text-3xl font-bold text-gray-800">Startup Roadmap</h1>

        <p className="mt-2 text-gray-500">
          Track your startup journey step by step.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
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
    </DashboardLayout>
  );
}

export default Roadmap;
