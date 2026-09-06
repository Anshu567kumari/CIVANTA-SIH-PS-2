import { useForm } from "react-hook-form";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useToast } from "../../context/ToastContext";

export default function Profile() {
  const { push } = useToast();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Aarav Sharma",
      email: "user@civanta.in",
      phone: "+91 98xxxxxx00",
      city: "Bengaluru",
    },
  });
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Profile
      </h1>
      <Card className="p-6 flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-linear-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xl">
          AS
        </div>
        <div>
          <div className="font-bold text-slate-900">Aarav Sharma</div>
          <div className="text-sm text-slate-500">
            Citizen · Member since Aug 2026
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <form
          onSubmit={handleSubmit(() =>
            push({ type: "success", title: "Profile updated" }),
          )}
          className="grid gap-4 sm:grid-cols-2"
        >
          <Input label="Full name" {...register("name")} />
          <Input label="Email" {...register("email")} />
          <Input label="Phone" {...register("phone")} />
          <Input label="City" {...register("city")} />
          <div className="sm:col-span-2 flex justify-end">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
