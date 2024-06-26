import { defineStore } from 'pinia'
import { IAuthUserInterface,IUserInterface } from '@/common/interface/interfaces'
import localStorageAuthService from '@/common/storages/authStorage'
import { authServiceApi } from '@/Auth/auth.api'

const initalUserState: Partial<IUserInterface> = {
    user: '',
    isUserLoggedIn: false,
    token: ''
  }
export const useAuthUserStore=defineStore('authUser',{
    state:()=>{
        return{
            user: initalUserState,
            loadingSession: false
        }
    },
    getters:{
        getAccessToken:(state): string | undefined => state.user.token
    },
    actions:{
        async login(userDetails: Partial<IAuthUserInterface>):Promise<boolean>{
            const { email: email, password: password } = userDetails
            try {
                const res=await authServiceApi.login(userDetails)
                console.log(res)
                
                if(res.success==true)
                {
                    localStorageAuthService.setAccessToken(res.data.accessToken)
                    return true
                }
                return false
              } catch (error: unknown) {
                console.log(error)
                return false
              } finally {
              }
        }
    }
})