'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import style from './login.module.css';
import Title from '../_component/Title'
import React from 'react';
import onLogin from '@/app/(beforeLogin)/_lib/login';
import { useFormState, useFormStatus } from 'react-dom';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function showMessage(messasge: string | null | undefined) {
  if (messasge === 'no_id') {
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
  const { data: me } = useSession();
  console.log(me, '-----------login page (client component)');

  // if (me?.user) {
  //   redirect('/');
  // }

  return (
    <section className={style.loginSection}>
      <Title />
      <form action={formAction}>
        <Input id='id' name='id' type='text' placeholder="id" required />
        <Input id='password' name='password' type='password' required placeholder="password" />

        <Button type="submit" disabled={pending}>로그인</Button>
        {state?.message && <p className='text-red-500'>{showMessage(state.message)}</p>}
      </form>
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