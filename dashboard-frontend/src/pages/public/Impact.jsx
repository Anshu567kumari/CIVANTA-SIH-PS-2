import {
  Users,
  Building2,
  CheckCircle,
  Clock,
  TrendingUp,
  MapPin,
  BarChart3,
  Heart,
} from "lucide-react";

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      title: "Citizens Reached",
      description: "People connected through CIVANTA",
    },
    {
      icon: Building2,
      number: "100+",
      title: "Problems Reported",
      description: "Real-world issues reported",
    },
    {
      icon: CheckCircle,
      number: "85%",
      title: "Issues Resolved",
      description: "Reported problems successfully addressed",
    },
    {
      icon: Clock,
      number: "40%",
      title: "Faster Response",
      description: "Improved response to public issues",
    },
  ];

  const impacts = [
    {
      icon: MapPin,
      title: "Better Local Communities",
      description:
        "CIVANTA helps citizens report problems in their surroundings and makes it easier for authorities to identify areas that need attention.",
    },
    {
      icon: TrendingUp,
      title: "Faster Problem Solving",
      description:
        "Organized reports and real-time tracking help authorities understand problems and take action more quickly.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description:
        "Collected information can help authorities understand common problems and make better decisions.",
    },
    {
      icon: Heart,
      title: "Stronger Citizen Participation",
      description:
        "CIVANTA gives citizens an easy way to participate in improving their communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            CIVANTA Impact
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Creating Real-World Impact
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            CIVANTA connects citizens, communities and authorities to make
            public problem reporting faster, smarter and more effective.
          </p>

        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Impact
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Making a Difference
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Every report, response and resolution can contribute to a
              better and more connected community.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-blue-600">
                    {stat.number}
                  </h3>

                  <p className="mt-2 font-semibold text-slate-900">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {stat.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Main Impact Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          {/* Left */}
          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why It Matters
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Turning Problems Into Action
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              A problem becomes easier to solve when it is clearly reported,
              properly tracked and handled by the right people.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              CIVANTA creates a simple connection between citizens and
              authorities so that important problems do not get lost or
              forgotten.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-700">
                  Easy reporting of public problems
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-700">
                  Better tracking and monitoring
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-700">
                  Faster communication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-700">
                  Better decisions using useful data
                </span>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Users className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Citizens at the Center
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              CIVANTA gives citizens a voice by making it simple to report
              issues that affect their daily lives.
            </p>

            <div className="mt-8 border-t border-white/20 pt-6">

              <p className="text-sm text-blue-200">
                Our goal
              </p>

              <p className="mt-2 text-xl font-semibold">
                Better services. Faster action. Stronger communities.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Impact Areas */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Areas of Impact
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              How CIVANTA Helps
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {impacts.map((impact) => {
              const Icon = impact.icon;

              return (
                <div
                  key={impact.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {impact.title}
                    </h3>

                    <p className="mt-3 leading-6 text-slate-600">
                      {impact.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Future Impact */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <TrendingUp className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Looking Ahead
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Building a Smarter Future
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            CIVANTA aims to grow into a platform where technology and citizen
            participation work together to improve public services and
            communities.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Be a part of the impact
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Report problems, stay informed and help make your community
            better with CIVANTA.
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