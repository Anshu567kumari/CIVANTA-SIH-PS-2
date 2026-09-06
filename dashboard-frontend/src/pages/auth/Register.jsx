import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User, Mail, Lock } from "lucide-react";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import { LANGUAGES } from "../../context/LanguageContext";

export default function Register() {
  const { register: reg } = useAuth();
  const { push } = useToast();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const pw = watch("password");

  const onSubmit = async (data) => {
    try {
      await reg(data);
      push({
        type: "success",
        title: "Account created",
        message: "Welcome to CIVANTA!",
      });
      nav("/dashboard");
    } catch (e) {
      push({ type: "error", title: "Registration failed", message: e.message });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-linear-to-br from-emerald-600 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative">
          <Logo />
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight">
            Join CIVANTA.
          </h2>
          <p className="mt-3 text-white/80 max-w-md">
            Create your account and start making real-world impact in your
            community.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="lg:hidden mb-6">
            <Logo />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Already registered?{" "}
            <Link to="/login" className="text-brand-600 font-semibold">
              Sign in
            </Link>
          </p>
          <div className="mt-8 grid gap-4">
            <Input
              label="Full name"
              icon={<User className="h-4 w-4" />}
              {...register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              type="email"
              icon={<Mail className="h-4 w-4" />}
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Password"
                type="password"
                icon={<Lock className="h-4 w-4" />}
                {...register("password", {
                  required: "Required",
                  minLength: { value: 6, message: "Min 6 chars" },
                })}
                error={errors.password?.message}
              />
              <Input
                label="Confirm"
                type="password"
                icon={<Lock className="h-4 w-4" />}
                {...register("confirm", {
                  validate: (v) => v === pw || "Passwords do not match",
                })}
                error={errors.confirm?.message}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Preferred language
              </label>
              <select
                {...register("language")}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.native} — {l.label}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
