import Button from "../components/shared/Button";
import RegistrationForm from "../Forms/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="flex flex-col justify-between gap-5 py-10">
      <div className="text-2xl font-bold font-poppins border-b-2 border-b-black py-4">
        Looking for a path? Register below
      </div>
      {/* <MultilineTextFields label="Full name" placeholder="Full name" />
      <MultilineTextFields label="Email" placeholder="Email" />
      <Tags />
      <Level /> */}
      <RegistrationForm />
      <div className="w-1/4">
        <Button>Request path</Button>
      </div>
    </div>
  );
}

export default RegistrationPage;
