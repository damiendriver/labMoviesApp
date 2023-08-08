import LoginTemplate from "../components/templateLoginPage";

const LoginPage = ({supabaseClient}) => {

  return (
    <LoginTemplate
      title="Login"
      supabaseClient={supabaseClient}
    />
  );
};
export default LoginPage;