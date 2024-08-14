import JobPost from '@/app/types/JobPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthUser } from '../types/AuthUser';



interface Credential{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com' }),
  endpoints: builder => ({
    getAllJobs: builder.query<{data: JobPost[]}, void>({
      query: () => '/opportunities/search'
    }),
    getJobById: builder.query<{data: JobPost}, string>({
      query: postId => `/opportunities/${postId}`,
    }),
    signup: builder.mutation<any, Credential>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
   
  })
})

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useSignupMutation
} = apiSlice