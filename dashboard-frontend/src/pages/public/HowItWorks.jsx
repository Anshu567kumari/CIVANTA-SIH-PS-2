import {
  UserPlus,
  FileText,
  MapPin,
  Send,
  Search,
  CheckCircle,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create an Account",
      description:
        "Sign up on CIVANTA using your basic details and create your account in just a few simple steps.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Report a Problem",
      description:
        "Describe the problem you found and provide useful details so that it can be understood easily.",
    },
    {
      number: "03",
      icon: MapPin,
      title: "Add Location",
      description:
        "Add the location of the problem so authorities can identify the exact area where action is needed.",
    },
    {
      number: "04",
      icon: Send,
      title: "Submit Report",
      description:
        "Review your information and submit the report. Your complaint is then added to the CIVANTA system.",
    },
    {
      number: "05",
      icon: Search,
      title: "Review & Action",
      description:
        "Authorities can review the report, understand the issue and take the necessary action.",
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Problem Resolved",
      description:
        "Once the problem is addressed, its status can be updated and the citizen can see the progress.",
    },
  ];

  const benefits = [
    {
      icon: Bell,
      title: "Stay Updated",
      description:
        "Receive updates about the progress of your reported problems.",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description:
        "See the current status of your reports from one place.",
    },
    {
      icon: CheckCircle,
      title: "Better Resolution",
      description:
        "Make it easier for authorities to identify and resolve problems.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            How CIVANTA Works
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            From Problem to Solution
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            CIVANTA makes it simple for citizens to report problems and
            helps authorities track, manage and resolve them efficiently.
          </p>

        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-14 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Simple Process
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              How It Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Follow these simple steps to report a problem and track its
              progress through CIVANTA.
            </p>

          </div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Number */}
                  <div className="absolute right-6 top-6 text-3xl font-bold text-slate-100">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-6 text-slate-600">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Citizen Journey */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left */}
            <div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Citizen Journey
              </p>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                One Simple Journey
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                CIVANTA keeps the entire reporting process simple. Citizens
                can report an issue and follow its progress without needing
                to visit multiple platforms.
              </p>

              <div className="mt-8 space-y-5">

                {/* Journey 1 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    1
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Identify a Problem
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Find an issue that needs attention in your community.
                    </p>
                  </div>

                </div>

                {/* Journey 2 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    2
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Submit a Report
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Add details and location and submit the problem.
                    </p>
                  </div>

                </div>

                {/* Journey 3 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Track the Status
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Follow the progress of your report.
                    </p>
                  </div>

                </div>

                {/* Journey 4 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    4
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      See the Resolution
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Know when the reported problem has been addressed.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <CheckCircle className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Simple. Transparent. Connected.
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                CIVANTA creates a direct connection between citizens and
                authorities, helping important problems move from reporting
                to resolution.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Easy problem reporting</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Location-based reports</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Status tracking</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Better communication</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why CIVANTA
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Built to Make Things Easier
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-6 text-slate-600">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Join CIVANTA and help make your community better by reporting
            problems and staying connected.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>
      </section>

    </div>
  );
}