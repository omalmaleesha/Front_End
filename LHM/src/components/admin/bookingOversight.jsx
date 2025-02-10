import Layout from "./Layout"

const BookingOversight = () => {
  const bookings = [
    { id: 1, hall: "Hall A", dateTime: "2023-05-15 10:00 AM", bookedBy: "John Doe", status: "Confirmed" },
    { id: 2, hall: "Hall B", dateTime: "2023-05-16 2:00 PM", bookedBy: "Jane Smith", status: "Pending" },
    { id: 3, hall: "Hall C", dateTime: "2023-05-17 11:00 AM", bookedBy: "Bob Johnson", status: "Cancelled" },
  ]

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking Oversight</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">All Bookings</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hall</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booked By
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
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.hall}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.dateTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.bookedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-900 mr-2">Confirm</button>
                    <button className="text-red-600 hover:text-red-900 mr-2">Cancel</button>
                    <button className="text-blue-600 hover:text-blue-900">Resolve Conflict</button>
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

export default BookingOversight

