import { supabase } from "../config/supabaseClient";
export default async function getUserId(){
    const { data:{user}} = await supabase.auth.getUser()

    if(!user){
        throw new Error("Could not find user", )
    }

    return user.id
}

