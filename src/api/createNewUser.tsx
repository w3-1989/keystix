import { supabase } from "../config/supabaseClient"

export async function createNewUser(email: string, password: string) {
  const { error: errorCreatingUser } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  if(errorCreatingUser){
    throw errorCreatingUser
  }
}