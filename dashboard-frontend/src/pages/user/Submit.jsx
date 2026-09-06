import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  MapPin,
  Paperclip,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { categories } from "../../data/mockData";
import { submissionService } from "../../services/submissionService";
import { useToast } from "../../context/ToastContext";

const steps = [
  { key: "info", label: "Basic Info", icon: FileText },
  { key: "location", label: "Location", icon: MapPin },
  { key: "evidence", label: "Evidence", icon: Paperclip },
  { key: "review", label: "Review", icon: CheckCircle2 },
];

export default function Submit() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { push } = useToast();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const next = async () => {
    if (step === 0) {
      // validate step 1
      handleSubmit((d) => {
        setData({ ...data, ...d });
        setStep(1);
      })();
      return;
    }
    setStep(step + 1);
  };
  const back = () => setStep(step - 1);

  const onSubmitFinal = async () => {
    setSubmitting(true);
    try {
      const res = await submissionService.create(data);
      setSubmitted(res);
      push({
        type: "success",
        title: "Submitted",
        message: `Your ID is ${res.id}`,
      });
    } catch {
      push({ type: "error", title: "Failed", message: "Please try again" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
            Submission received!
          </h2>
          <p className="mt-2 text-slate-600">
            We've notified the relevant department. You'll receive updates as it
            progresses.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500">Submission ID</div>
              <div className="mt-1 font-bold text-slate-900">
                {submitted.id}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500">Current Status</div>
              <div className="mt-1 font-bold text-brand-600">
                {submitted.status}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500">Estimated Response</div>
              <div className="mt-1 font-bold text-slate-900">24–48 hrs</div>
            </div>
          </div>
          <div className="mt-6 flex gap-3 justify-center">
            <Button onClick={() => nav(`/submissions/${submitted.id}`)}>
              Track Submission
            </Button>
            <Button variant="secondary" onClick={() => nav("/my-submissions")}>
              My Submissions
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Submit a Report
        </h1>
        <p className="text-sm text-slate-500">
          Help us resolve issues faster with accurate information.
        </p>
      </div>

      {/* Stepper */}
      <Card className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center flex-1">
              <div
                className={`flex items-center gap-2 ${i <= step ? "text-brand-600" : "text-slate-400"}`}
              >
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold ${i < step ? "bg-emerald-500 text-white" : i === step ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-500"}`}
                >
                  {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span className="hidden md:inline text-sm font-semibold">
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-3 ${i < step ? "bg-emerald-500" : "bg-slate-200"}`}
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 md:p-8">
        {step === 0 && (
          <div className="grid gap-4">
            <h3 className="font-bold text-slate-900">Basic Information</h3>
            <Input
              label="Title"
              placeholder="Short description of the issue"
              {...register("title", { required: "Required" })}
              error={errors.title?.message}
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Category
              </label>
              <select
                {...register("category", { required: "Required" })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Description
              </label>
              <textarea
                rows="5"
                {...register("description", { required: "Required" })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm"
                placeholder="Describe the issue in detail…"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4">
            <h3 className="font-bold text-slate-900">Location</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="State"
                placeholder="e.g. Karnataka"
                {...register("state")}
              />
              <Input
                label="District"
                placeholder="e.g. Bengaluru Urban"
                {...register("district")}
              />
            </div>
            <Input
              label="City / Village"
              placeholder="e.g. Bengaluru"
              {...register("city")}
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Pin location on map
              </label>
              <div className="relative h-64 rounded-xl bg-lineart-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-10 w-10 rounded-full bg-brand-600/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-brand-600" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-xs bg-white/90 px-2 py-1 rounded-md">
                  Map preview · connect Mapbox / Google Maps
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <h3 className="font-bold text-slate-900">Evidence (optional)</h3>
            <DropZone label="Upload image" hint="JPG/PNG up to 5MB" />
            <DropZone label="Upload document" hint="PDF up to 10MB" />
            <DropZone label="Upload video (optional)" hint="MP4 up to 50MB" />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <h3 className="font-bold text-slate-900">Review your submission</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field k="Title" v={data.title || "—"} />
              <Field k="Category" v={data.category || "—"} />
              <Field k="State" v={data.state || "—"} />
              <Field k="District" v={data.district || "—"} />
              <Field k="City" v={data.city || "—"} />
              <Field k="Priority" v="Auto-detected" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Description</div>
              <div className="mt-1 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-3">
                {data.description || "—"}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <Button variant="ghost" onClick={back} disabled={step === 0}>
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          {step < steps.length - 1 ? (
            <Button onClick={next}>
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={onSubmitFinal} loading={submitting}>
              Submit Report
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

function Field({ k, v }) {
  return (
    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div className="text-xs text-slate-500">{k}</div>
      <div className="mt-0.5 text-sm font-semibold text-slate-800 capitalize">
        {v}
      </div>
    </div>
  );
}

function DropZone({ label, hint }) {
  return (
    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:border-brand-400 hover:bg-brand-50/30 transition">
      <Paperclip className="h-5 w-5 text-slate-400" />
      <div className="mt-2 text-sm font-semibold text-slate-800">{label}</div>
      <div className="text-xs text-slate-500">{hint}</div>
      <input type="file" className="hidden" />
    </label>
  );
}
