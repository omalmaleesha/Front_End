import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import Layout from "./Layout"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const AnalyticsReports = () => {
  const roomUtilizationData = {
    labels: ["Hall A", "Hall B", "Hall C", "Hall D"],
    datasets: [
      {
        label: "Utilization Rate",
        data: [75, 60, 80, 55],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const peakHoursData = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"],
    datasets: [
      {
        label: "Bookings",
        data: [10, 25, 15, 30, 20, 5],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Analytics & Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Utilization</h3>
          <Bar data={roomUtilizationData} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Peak Hours</h3>
          <Line data={peakHoursData} />
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Export Reports</h3>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Download PDF
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
            Download CSV
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default AnalyticsReports

