import { ref } from 'vue'
import useSupabase from '@boot/supabase'

const userAuthUser = () => {
  const user = ref(null)
  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    return user
  }

  const loginWithSocialProvider = async ({ provider }) => {}

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo: `${window.location.origin}/ne?fromEmail=registrationConfirmation`
      }
    )
    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordResetEmail = async () => {}

  return {
    login,
    register,
    update,
    sendPasswordResetEmail,
    user,
    loginWithSocialProvider,
    logout,
    isLoggedIn
  }
}

export default userAuthUser
