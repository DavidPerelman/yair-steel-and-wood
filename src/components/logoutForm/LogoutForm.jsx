import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const LogoutForm = async () => {
  const seesion = await auth();

  return (
    <>
      {seesion ? (
        <>
          <form action={handleLogout}>
            <button>Logout</button>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default LogoutForm;
