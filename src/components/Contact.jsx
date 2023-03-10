import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className = 'flex flex-col mb-10 mx-auto'>
            <div className = 'flex justify-center items-center'>
                <form // This will store your form submissions, sign up on a free site such as getform.io & create a new form, then paste your link into action.
                action = 'https://getform.io/f/f37b7198-fd42-4d28-8e35-3919ed9ff3ec'
                method = 'POST'
                className = 'flex flex-col w-full md:w-7/12'>
                  <Title>Contact</Title>
                    <input
                      type = 'text'
                      name = 'name'
                      placeholder = 'Name'
                      className = 'p-2 bg-transparent border-2 border-zinc-700 dark:border-zinc-300 rounded-md focus:outline-none dark:opacity-80 '
                    />
                    <input
                      type = 'text'
                      name = 'name'
                      placeholder = 'Email Address'
                      className = 'my-2 p-2 bg-transparent border-2 border-zinc-700 dark:border-zinc-300 rounded-md focus:outline-none dark:opacity-80'
                    />
                    <textarea
                      name = 'message'
                      placeholder = 'Message'
                      rows = '10'
                      className = 'p-2 mb-4 bg-transparent border-2 border-zinc-700 dark:border-zinc-300 rounded-md focus:outline-none dark:opacity-80'
                    />
                    <button
                      type = 'bottom'
                      className = 'text-center place-self-center inline-block px-10 py-3 w-max text-neutral-200 font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-gray-800 dark:from-gray-900 dark:to-slate-700 drop-shadow-md hover:stroke-white'>
                        Get In Touch
                      </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;