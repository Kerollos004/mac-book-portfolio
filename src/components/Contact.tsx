import { useState, useRef } from "react"
import { mainClass, contacts, type User } from "../assets/assets"
import { useMinmizeContext, useNavContext } from "../contexts"
import HeadFolder from "./HeadFolder"
import { Send } from "react-bootstrap-icons"
import emailjs from "@emailjs/browser"
export default function Contact() {
    const [user, setUser] = useState<User>({ name: "", email: "", message: "" })
    const { nav } = useNavContext()
    const {mini} = useMinmizeContext()
    const form = useRef<HTMLFormElement|null>(null);
    const ContactUs = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.current) {
            
            try { 
            emailjs
                .sendForm('service_9wh4z79', 'template_ged5qu8', form.current, {
                    publicKey: 'FNOKCmc_vD4QP74to',
                })
            }
            catch (err) {
                console.error(err)
            }
            finally {
                form.current?.reset()
                setUser({name: "", email: "", message: ""})
            }
        }
    }    
const contactsMap = contacts.map((contact, i) => {
    return (
        <div className="p-4 flex items-center justify-center flex-col gap-2 text-2xl bg-blue-50 rounded-2xl" key={i}>
            <contact.icon />
            <a href={contact.href}> {contact.tool} </a>
        </div>
    )
})
    return (
        <main

            className={`${mainClass} ${mini?"w-full h-full md:w-full md:h-full":""} ${nav === "contact" ? "block" : "hidden"}`}
        >
            <HeadFolder />
            <div className=" absolute top-10 h-[calc(100%-50px)] w-full overflow-y-scroll p-3">
                <div>
                    <h3 className="text-3xl capitalize mb-3"> reach me via </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5"> 
                        {contactsMap}
                    </div>
                </div>
                <form action="" onSubmit={ContactUs} className="mt-5  grid grid-cols-1 w-full" ref={form}>
                    <input name="name" className="p-3 border focus:bg-blue-50 mb-2.5 border-black rounded-2xl" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setUser({...user , name:e.target.value})
                    }} value={user.name} type="text" placeholder="name..." />

                    <input name='email' className="p-3 border focus:bg-blue-50 mb-2.5 border-black rounded-2xl" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setUser({...user , email:e.target.value})
                    }}
                    value={user.email} type="email" placeholder="email..." />

                    <textarea name="message" className="p-3 border focus:bg-blue-50 mb-2.5 border-black rounded-2xl" onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {
                        setUser({...user , message:e.target.value})
                    }}
                        value={user.message} placeholder="message..." id=""></textarea>
                    <button   className="flex items-center justify-center gap-2 mt-2.5 bg-blue-50 p-3 rounded-2xl text-2xl overflow-x-hidden  hover:bg-blue-200 ">
                        send message < Send className="rotate-45" />
                    </button>
                </form>
            </div>
        </main>
    )
}
