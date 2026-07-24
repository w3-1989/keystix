import { supabase } from "../config/supabaseClient";

export async function createNewUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string,
) {
  const { data, error: errorCreatingUser } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (errorCreatingUser) {
    throw errorCreatingUser;
  }

  const userId = data.user?.id;
  if (!userId) {
    throw new Error("No user id returned from signUp");
  }

  const { error: errorInsertingUsersData } = await supabase
    .from("users")
    .insert({
      id: userId,
      first_name: firstName,
      last_name: lastName,
      email: email,
      role: role,
    });

  if (errorInsertingUsersData) {
    throw errorInsertingUsersData;
  }
}