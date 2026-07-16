import { supabase } from "../config/supabaseClient";

export async function createNewUser(
  companyEmail: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string,
) {
  const { error: errorCreatingUser } = await supabase.auth.signUp({
    email: companyEmail,
    password: password,
  });
  if (errorCreatingUser) {
    throw errorCreatingUser;
  }

  const { error: errorInsertingUsersData } = await supabase
    .from("users")
    .insert({
      first_name: firstName,
      last_name: lastName,
      company_email: companyEmail,
      role: role,
    });

  if (errorInsertingUsersData) {
    throw errorInsertingUsersData;
  }
}
