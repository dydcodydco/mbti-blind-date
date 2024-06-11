"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import style from './signup.module.css';
import { useCallback } from 'react'
import Title from '../_component/Title'
import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "id must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  passwordCheck: z.string()
    .min(2, {
      message: "Password check must be at least 2 characters.",
    }),
}).refine(data => data.password === data.passwordCheck, {
  message: "Passwords must match.",
  path: ["passwordCheck"], // This specifies where the error message will be attached
});

const SignupPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: '',
      passwordCheck: '',
    },
  });
  const router = useRouter();

  const onSignupSubmit = useCallback(async (data: z.infer<typeof FormSchema>) => {
    try {
      console.log('------------------SignupPage signup response --------------------------------');
      console.log(data);
      form.reset();
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // credentials: 'include',
      });
      console.log(response, '------------------SignupPage signup response');
      if (!response.ok) {
        if (response.status === 500) {
          form.setError('root.serverError',
            { type: `${response.status}`, message: '회원가입 중 에러 발생' });
        } else {
          const responseJson = await response.json();
          form.setError('root.serverError',
            { type: `${response.status}`, message: responseJson.message ?? '회원가입 중 에러 발생' });
        }
        return;
      }

      await signIn("credentials", {
        id: data.email,
        password: data.password,
        redirect: false,
      });
    } catch (err) {
      console.error(err);
      return;
    }

    router.replace('/');

  }, [form, router]);

  return (
    <section className={style.signupSection}>
      <Title />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSignupSubmit)} className={style.signupForm}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>id</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display phone number.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="password" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display password.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordCheck"
            render={({ field }) => (
              <FormItem>
                <FormLabel>passwordCheck</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="passwordCheck" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display password check.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && form.formState.errors.root.serverError.type === '403'
            && <p className='text-red-500'>{form.formState.errors.root.serverError.message}</p>}
          <Button type="submit">회원가입</Button>
        </form>
      </Form>
    </section>
  )
}

export default React.memo(SignupPage);