import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import style from './login.module.css';
import Title from '../_component/Title'
import React, { FormEventHandler } from 'react'
import { redirect } from 'next/navigation';

const Page = () => {
  // const router = useRouter();
  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  //   defaultValues: {
  //     id: "",
  //     password: '',
  //   },
  // })

  // const onSubmit = useCallback((data: z.infer<typeof FormSchema>) => {
  //   console.log(data);
  //   router.push('/userSetting');
  // }, [router]);

  const submit = async (formData: FormData) => {
    'use server';
    console.log(formData.get('id'));
    
    if (!formData.get('id')) {
      return {message: 'no_id'};
    }
    if (!formData.get('password')) {
      return {message: 'no_password'};
    }
    let shouldRedirect = false;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: 'post',
        body: formData,
        credentials: 'include', // 이게 있어야 쿠키전달된다.
      });
      console.log(response.status);
      console.log(await response.json());
      if (response.status === 403) {
        return { message: 'user_exists' };
      }
      shouldRedirect = true;
    } catch (err) {
      console.error(err);
      return;
    }

    if (shouldRedirect) {
      redirect('/'); // redirect는 try catch문에 있으면 안된다.
    }
  };

  return (
    <section className={style.loginSection}>
      <Title />
      <form action={submit}>
        <Input id='id' name='id' type='text' placeholder="id" />
        <Input id='password' name='password' type='password' placeholder="password" />

        <Button type="submit">로그인</Button>
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

export default React.memo(Page);