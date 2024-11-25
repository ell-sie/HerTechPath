import RegistrationForm from "../Forms/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="flex flex-col justify-between gap-5 py-10">
      <div className="text-2xl font-bold font-poppins border-b-2 border-b-black py-4">
        Looking for a path? Register below
      </div>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
