import Layout from "./Layout"

const LectureHallManagement = () => {
  const halls = [
    { id: 1, name: "Hall A", capacity: 100, equipment: "Projector, Whiteboard", status: "Available" },
    { id: 2, name: "Hall B", capacity: 50, equipment: "Smart TV, Audio System", status: "Occupied" },
    { id: 3, name: "Hall C", capacity: 200, equipment: "Projector, Video Conferencing", status: "Maintenance" },
  ]

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lecture Hall Management</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Lecture Halls</h3>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Add Hall
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {halls.map((hall) => (
                <tr key={hall.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{hall.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hall.capacity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hall.equipment}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hall.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-blue-600 hover:text-blue-900 mr-2">View Calendar</button>
                    <button className="text-green-600 hover:text-green-900">Toggle Availability</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default LectureHallManagement

