const DashboardPage = async () => {
  const res = await fetch("https://protfilo-server.vercel.app/get-allData", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <div>
        <div className={`min-h-screen bg-gray-100 p-8`}>
          {/* হেডার */}
          <header className={`bg-white shadow-lg rounded-lg p-6 mb-8`}>
            <h1 className={`text-3xl font-bold text-gray-800`}>
              Admin Dashboard
            </h1>
            <p className={`text-gray-600`}>Welcome back, Admin!</p>
          </header>

          {/* কার্ড গ্রিড */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
            {/* টোটাল সেলস রেভেনিউ কার্ড */}
            <div className={`bg-white shadow-lg rounded-lg p-6`}>
              <h2 className={`text-xl font-semibold text-gray-700`}>
                Total Blogs
              </h2>
              <p className={`text-2xl font-bold text-blue-600 mt-2`}>
                {data?.allBlogs || 0}
              </p>
              <p className={`text-gray-500`}>Last 30 days</p>
            </div>

            {/* ইউনিট সোল্ড কার্ড */}
            <div className={`bg-white shadow-lg rounded-lg p-6`}>
              <h2 className={`text-xl font-semibold text-gray-700`}>
                Total Projects
              </h2>
              <p className={`text-2xl font-bold text-green-600 mt-2`}>
                {data?.allProject || 0}
              </p>
              <p className={`text-gray-500`}>Last 30 days</p>
            </div>
            <div className={`bg-white shadow-lg rounded-lg p-6`}>
              <h2 className={`text-xl font-semibold text-gray-700`}>
                Total Message
              </h2>
              <p className={`text-2xl font-bold text-green-600 mt-2`}>
                {data?.allMessage || 0}
              </p>
              <p className={`text-gray-500`}>Last 30 days</p>
            </div>
          </div>

          {/* গ্রাফ বা টেবিল সেকশন (ভবিষ্যতে যোগ করতে পারেন) */}
          <div className={`mt-8 bg-white shadow-lg rounded-lg p-6`}>
            <h2 className={`text-xl font-semibold text-gray-700`}>
              Sales Overview
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
