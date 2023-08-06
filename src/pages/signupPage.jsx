import PageTemplate from "../components/TemplateSignupPage";

const SignupPage = ({supabaseClient}) => {

  return (
    <PageTemplate
      title="Signup"
      supabaseClient={supabaseClient}
    />
  );
};
export default SignupPage;