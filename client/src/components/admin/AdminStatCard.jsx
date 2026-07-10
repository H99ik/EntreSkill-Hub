function AdminStatCard({ title, value, color }) {
  return (
    <div className={`rounded-2xl p-6 text-white shadow-lg ${color}`}>
      <h3 className="text-lg font-medium opacity-90">{title}</h3>

      <h2 className="mt-3 text-4xl font-bold">{value}</h2>
    </div>
  );
}

export default AdminStatCard;
