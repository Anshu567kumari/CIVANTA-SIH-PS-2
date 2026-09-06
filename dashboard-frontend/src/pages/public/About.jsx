import {
  Target,
  Eye,
  Users,
  Lightbulb,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We design CIVANTA around the needs of citizens and the communities they live in.",
    },
    {
      icon: Lightbulb,
      title: "Simple & Smart",
      description:
        "We use technology to make problem reporting and decision-making simple and effective.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      description:
        "CIVANTA helps make public problems and their progress easier to understand and track.",
    },
    {
      icon: Heart,
      title: "Real Impact",
      description:
        "Our goal is to turn citizen reports into meaningful action and better public services.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            About CIVANTA
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Technology for Better Communities
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            CIVANTA is an intelligent digital platform designed to make
            real-world problem reporting, monitoring and decision-making
            faster, smarter and more accessible.
          </p>

        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Making public problem solving easier
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              CIVANTA connects citizens and authorities through one simple
              digital platform. Citizens can report problems in their area,
              while authorities can monitor reports and take appropriate
              action.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our aim is to reduce the gap between identifying a problem and
              solving it. By bringing reporting, monitoring and useful data
              together, CIVANTA helps create a faster and more transparent
              process.
            </p>

            <a
              href="/features"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Features
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Mission Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Target className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              To build a smarter connection between citizens and public
              authorities by using technology to identify, track and solve
              real-world problems.
            </p>

          </div>

        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Eye className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Vision
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              A smarter and more connected society
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We imagine a future where citizens can easily communicate
              problems, authorities can respond quickly, and technology helps
              communities become better places to live.
            </p>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Believe
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Core Values
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Be part of the change
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Together, we can make reporting easier, services better and
            communities stronger.
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