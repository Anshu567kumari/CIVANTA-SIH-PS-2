import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Contact CIVANTA
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            We're Here to Help
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Have a question, suggestion or problem? Get in touch with the
            CIVANTA team and we'll be happy to help.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Get in Touch
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Let's talk
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Whether you want to report an issue, share feedback or learn
              more about CIVANTA, you can contact us using any of the options
              below.
            </p>

            {/* Email */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Email
                </h3>

                <p className="mt-1 text-slate-600">
                  support@civanta.in
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Phone className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Phone
                </h3>

                <p className="mt-1 text-slate-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Location
                </h3>

                <p className="mt-1 text-slate-600">
                  India
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Working Hours
                </h3>

                <p className="mt-1 text-slate-600">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MessageSquare className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Send us a message
            </h2>

            <p className="mt-2 text-slate-600">
              Fill out the form and we'll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FAQ / Help Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <MessageSquare className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Need help with CIVANTA?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            You can use our platform to report problems, track submissions
            and stay updated about their progress.
          </p>

          <a
            href="/features"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore CIVANTA
          </a>

        </div>
      </section>

    </div>
  );
}