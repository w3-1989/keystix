//
import { useNavigate } from "react-router";
import { supabase } from "../config/supabaseClient";
import { useEffect, type ReactNode } from "react";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (!user || error) {
        navigate("/login");
      }
    });
  }, []);
  return  children ;
}
