import {
  ArchiveBoxIcon,
  UserGroupIcon,
  ClockIcon,
  ComputerDesktopIcon,
  PlusIcon,
  DocumentTextIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline"
import Layout from "./Layout"

const DashboardCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} bg-opacity-75`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="ml-4">
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  </div>
)

const QuickActionButton = ({ title, icon: Icon }) => (
  <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
    <Icon className="h-5 w-5 mr-2" />
    {title}
  </button>
)

const Dashboard = () => {
  const stats = [
    { title: "Total Lecture Halls", value: "12", icon: ArchiveBoxIcon, color: "bg-blue-500" },
    { title: "Active Bookings", value: "42", icon: ClockIcon, color: "bg-green-500" },
    { title: "Registered Users", value: "1,234", icon: UserGroupIcon, color: "bg-yellow-500" },
    { title: "Equipment Usage", value: "78%", icon: ComputerDesktopIcon, color: "bg-purple-500" },
  ]

  const quickActions = [
    { title: "Add Hall", icon: PlusIcon },
    { title: "Generate Report", icon: DocumentTextIcon },
    { title: "View Alerts", icon: BellAlertIcon },
  ]

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((action, index) => (
            <QuickActionButton key={index} {...action} />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
        <ul className="divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="py-4">
              <p className="text-sm font-medium text-gray-900">Activity {index + 1}</p>
              <p className="text-sm text-gray-500">Description of activity {index + 1}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Dashboard

