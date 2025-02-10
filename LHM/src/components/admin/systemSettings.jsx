import Layout from "./Layout"

const SystemSettings = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">System Settings</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Configuration</h3>
        <form className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Booking Rules</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="allowOverlap" className="mr-2" />
              <label htmlFor="allowOverlap">Allow booking overlap</label>
            </div>
            <div className="flex items-center">
              <input type="number" id="maxDuration" className="w-20 mr-2 p-1 border rounded" />
              <label htmlFor="maxDuration">Maximum booking duration (hours)</label>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Notifications</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="emailNotifications" className="mr-2" />
              <label htmlFor="emailNotifications">Enable email notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="smsNotifications" className="mr-2" />
              <label htmlFor="smsNotifications">Enable SMS notifications</label>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Role Permissions</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-1">Admin</h5>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="adminManageUsers" className="mr-2" />
                    <label htmlFor="adminManageUsers">Manage Users</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="adminManageHalls" className="mr-2" />
                    <label htmlFor="adminManageHalls">Manage Halls</label>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-1">User</h5>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="userBook" className="mr-2" />
                    <label htmlFor="userBook">Book Halls</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="userCancelOwn" className="mr-2" />
                    <label htmlFor="userCancelOwn">Cancel Own Bookings</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Save Settings
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SystemSettings

