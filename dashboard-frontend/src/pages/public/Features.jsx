import {
  FileText,
  BarChart3,
  Bell,
  Users,
  MapPin,
  Zap,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: "Easy Problem Reporting",
      description:
        "Report problems in your area quickly with a simple and easy-to-use form.",
    },
    {
      icon: MapPin,
      title: "Location Based Reporting",
      description:
        "Add the exact location of a problem so that it can be found and solved faster.",
    },
    {
      icon: BarChart3,
      title: "Smart Monitoring",
      description:
        "Track reported problems and see their current status from one dashboard.",
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description:
        "Get updates when the status of your reported problem changes.",
    },
    {
      icon: MessageSquare,
      title: "Better Communication",
      description:
        "Improve communication between citizens and authorities through one platform.",
    },
    {
      icon: Users,
      title: "Citizen Friendly",
      description:
        "A simple interface that makes CIVANTA easy for citizens and authorities to use.",
    },
    {
      icon: Zap,
      title: "Faster Decisions",
      description:
        "Useful data and reports help authorities understand problems and take faster action.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Keep important information organized and protected while managing reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Zap className="h-8 w-8" />
          </div>

          <h1 className="text-4xl font-bold md:text-6xl">
            Powerful Features
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            CIVANTA makes problem reporting, monitoring and decision-making
            easier, faster and more transparent.
          </p>

        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              What CIVANTA offers
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Everything in One Platform
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From reporting a problem to tracking its progress, CIVANTA
              provides all the important tools in one place.
            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Simple Process
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              How CIVANTA Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Report
              </h3>

              <p className="mt-3 text-slate-600">
                Citizens report a problem with its details and location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Monitor
              </h3>

              <p className="mt-3 text-slate-600">
                Authorities review the report and track its progress.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Resolve
              </h3>

              <p className="mt-3 text-slate-600">
                Problems are addressed and citizens receive status updates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to make a difference?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Join CIVANTA and help make problem reporting and public services
            faster and more accessible.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Get Started
          </a>

        </div>
      </section>

    </div>
  );
}