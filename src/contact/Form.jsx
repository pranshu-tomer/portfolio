import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'
import {motion} from 'framer-motion'


const container = {
  hidden : {opacity:0},
  show : {
      opacity : 1,
      transition : {
          staggerChildren : 0.3,
          delayChildren : 0.2
      }
  }
}

const item = {
  hidden: {scale : 0},
  show : {scale : 1}
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const toastId = toast.loading('Please wait..........Magic is working !!')


  const YOUR_SERVICE_ID = 'service_6hbs2tc'
  const YOUR_TEMPLATE_ID = 'template_a4rse1r'
  const YOUR_PUBLIC_KEY = '42vGbSzg5Ai9Pu-yy'

    const sendEmail = (params) => {
  
      emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID,params, {
            publicKey: YOUR_PUBLIC_KEY,
             
          limitRate:{
            throttle: 5000, // you cant sent more than one email pre 5 second
          }
        })
        .then(
          () => {
            toast.success('Magic Done !!!')
            toast.dismiss()
          },
          (error) => {
            toast.error('Ohh something is wrong.')
            toast.dismiss()
          },
        );
    };
  

  const onSubmit = data => {
    const templateParams = {
        to_name : 'Pranshu Tomer',
        from_name : data.Name,
        reply_to : data.email,
        message: data.message
    }

    sendEmail(templateParams)
  };
  
  return (
    <>
    <Toaster richColors={true} />
    <motion.form 
    variants={container}
    initial='hidden'
    animate='show'
    onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <motion.input variants={item} type="text" placeholder="Name" {...register("Name", {required: 'Name is required !!',minLength: {value: 3,message:'Name atleast have 3 character'}})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
      }
      <motion.input variants={item} type="email" placeholder="email" {...register("email", {required: 'Email is required !!'})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
      }
      <motion.textarea variants={item} {...register("message", {required: 'Message is required !!', maxLength:{value: 500,message:'Message should be short'}, minLength:{value: 10,message:'Message atleast have 10 characters'}})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' placeholder='Write your Message Here'
      />
      {
        errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
      }

      <motion.input variants={item} value='cast your message' className='px-8 py-2 text-accent rounded-md shadow-lg font-witch text-2xl border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </motion.form>
    </>
  );
}
