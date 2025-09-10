// components
import FormBtnsHolder from "../components/ui/FormBtnsHolder";
import InputHolder from "../components/ui/InputHolder";
import PageTitle from "../components/ui/PageTitle";

// hooks
import useHandleLoginForm from "../hooks/useHandleLoginForm";

const LoginPage = () => {
  const { handleSubmit, loading } = useHandleLoginForm();

  return (
    <main className="container flex items-start pt-[5%] justify-center min-h-screen">
      <div className="rounded-lg shadow-sm shadow-red-950/65 p-7 border w-full border-red-500">
        <PageTitle>Login To Dashboard</PageTitle>

        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          <InputHolder
            disabled={loading}
            name="email"
            id="email"
            sameSize
            type="email"
            defaultValue="eve.holt@reqres.in"
          >
            Email:
          </InputHolder>
          <InputHolder
            disabled={loading}
            name="password"
            id="password"
            sameSize
            type="password"
            defaultValue="cityslicka"
          >
            Password:
          </InputHolder>

          <FormBtnsHolder loading={loading} />
        </form>
      </div>
    </main>
  );
};
export default LoginPage;
