import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
<script src="https://accounts.google.com/gsi/client" async defer></script>;

function GoogleLoginComponent() {
  const googleSuccess = (resp) => {
    console.log(resp);
  };
  const googleFailure = (error) => {
    toast.error(error);
    console.log(error);
  };

  const devEnv = process.env.NODE_ENV !== "production";
  const clientId = devEnv
    ? "790672230948-n92oe2ad4187u293idcsepo6pj1b1rs6.apps.googleusercontent.com"
    : "790672230948-9hc5qk3u1gpvuuahjs7co6av6c2t1ai8.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={googleSuccess}
          onError={googleFailure}
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </>
  );
}

export default GoogleLoginComponent;
