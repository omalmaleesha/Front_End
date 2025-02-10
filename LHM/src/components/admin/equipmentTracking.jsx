import Layout from "./Layout"

const EquipmentTracking = () => {
  const equipment = [
    { id: 1, name: "Projector", type: "Visual", status: "Available" },
    { id: 2, name: "Microphone", type: "Audio", status: "In Use" },
    { id: 3, name: "Laptop", type: "Computer", status: "Maintenance" },
  ]

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Equipment Tracking</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Equipment</h3>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Add Equipment
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {equipment.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-blue-600 hover:text-blue-900">View Usage Logs</button>
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

export default EquipmentTracking

