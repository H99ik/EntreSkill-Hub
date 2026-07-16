import RoadmapStep from "./RoadmapStep";

function RoadmapTimeline({ steps }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Startup Journey</h2>

      {steps.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <RoadmapStep key={index} step={step} />
          ))}
        </div>
      ) : (
        <div className="py-10 text-center text-gray-500">
          No roadmap available.
        </div>
      )}
    </div>
  );
}

export default RoadmapTimeline;
