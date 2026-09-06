import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

export default function Login() {
  const { login } = useAuth();
  const { push } = useToast();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const u = await login(data);
      push({
        type: "success",
        title: "Welcome back",
        message: `Signed in as ${u.name}`,
      });
      nav(u.role === "admin" ? "/admin" : "/dashboard");
    } catch (e) {
      push({
        type: "error",
        title: "Login failed",
        message: e.message || "Invalid credentials",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-linear-to-br from-brand-600 via-indigo-600 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative">
          <Logo />
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight">
            Welcome back to CIVANTA.
          </h2>
          <p className="mt-3 text-white/80 max-w-md">
            Sign in to track submissions, receive updates and make impact in
            your community.
          </p>
        </div>
        <div className="relative text-sm text-white/70">
          Demo accounts: <span className="text-white">user@civanta.in</span> ·{" "}
          <span className="text-white">admin@civanta.in</span> (any password ≥ 4
          chars)
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="lg:hidden mb-6">
            <Logo />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Sign in to your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            New here?{" "}
            <Link to="/register" className="text-brand-600 font-semibold">
              Create an account
            </Link>
          </p>

          <div className="mt-8 grid gap-4">
            <Input
              label="Email or mobile"
              placeholder="you@example.com"
              icon={<Mail className="h-4 w-4" />}
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={<Lock className="h-4 w-4" />}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 4, message: "Min 4 characters" },
              })}
              error={errors.password?.message}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />{" "}
                Remember me
              </label>
              <a href="#" className="text-brand-600 font-semibold">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              Sign in <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
