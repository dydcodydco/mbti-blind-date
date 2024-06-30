'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import style from './login.module.css';
import Title from '../_component/Title'
import React from 'react';
import onLogin from '@/app/(beforeLogin)/_lib/login';
import { useFormState, useFormStatus } from 'react-dom';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

function showMessage(messasge: string | null | undefined) {
  if (messasge === 'no_email') {
    return '아이디를 입력하세요.';
  }
  if (messasge === 'no_password') {
    return '비밀번호를 입력하세요.';
  }
  if (messasge === 'user_no_exists') {
    return '회원정보가 없습니다.';
  }
  return '';
}

const LoginPage = () => {
  const [state, formAction] = useFormState(onLogin, { message: '' });
  const { pending } = useFormStatus();

  return (
    <section className={style.loginSection}>
      <Title />
      <form action={formAction}>
        <Label htmlFor="email">email</Label>
        <Input id='email' name='email' type='text' placeholder="email" required className='mb-6 mt-2' />
        <Label htmlFor="password">password</Label>
        <Input id='password' name='password' type='password' required placeholder="password" className='mt-2 mb-4' />

        {state?.message && <p className='text-red-500 text-[14px]'>{showMessage(state.message)}</p>}
        <Button type="submit" disabled={pending} className='w-full mt-4'>로그인</Button>
      </form>
      <div className='mt-4 text-center'>
        <Button variant="link" disabled={pending}>
          <Link href='/signup'>회원가입</Link>
        </Button>
      </div>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={style.loginForm}>
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>id</FormLabel>
                <FormControl>
                  <Input placeholder="id" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
                <FormDescription>
                  This is your public display password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">login</Button>
        </form>
      </Form> */}
    </section>
  )
}

export default React.memo(LoginPage);