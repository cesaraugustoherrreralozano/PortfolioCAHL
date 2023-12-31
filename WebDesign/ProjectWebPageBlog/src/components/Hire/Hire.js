

export default function HireUs(){

    return(
        
        <section class="bg-gray-100">
            
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
                <h1 className="max-w-3xl text-3xl font-bold pb-10 leading-none tracking-tighter text-blue-900 md:text-5xl lg:text-6xl lg:max-w-6xl hover:text-blue-700 transition duration-3000 ease-in-out">
                    Contact Us</h1>
                
                <p class="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from
                manufacturer and other group control gives you confidence that we will only recommend what
                is right for you.
                </p>

                <div class="mt-8">
                <a href="" class="text-2xl font-bold text-blue-900 hover:text-blue-700 transition duration-3000 ease-in-out">
                     0151 475 4450 </a>

                <address class="mt-2 not-italic">Bogotá D.C., Colombia</address>
                </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" class="space-y-4">
                <div>
                    <label class="sr-only" for="name">Name</label>
                    <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <input class="peer sr-only" id="option1" type="radio" tabindex="-1" name="option" />

                    <label
                        for="option1"
                        class="block w-full rounded-lg border border-blue-900 p-3 text-gray-600 hover:border-black peer-checked:border-blue-900 peer-checked:bg-blue-900 peer-checked:text-white"
                        tabindex="0"
                    >
                        <span class="text-sm"> Email </span>
                    </label>
                    </div>

                    <div>
                    <input class="peer sr-only" id="option2" type="radio" tabindex="-1" name="option" />

                    <label
                        for="option2"
                        class="block w-full rounded-lg border border-blue-900 p-3 text-gray-600 hover:border-black peer-checked:border-blue-900 peer-checked:bg-blue-900 peer-checked:text-white"
                        tabindex="0"
                    >
                        <span class="text-sm"> LinkedIn </span>
                    </label>
                    </div>

                    <div>
                    <input class="peer sr-only" id="option3" type="radio" tabindex="-1" name="option" />

                    <label
                        for="option3"
                        class="block w-full rounded-lg border border-blue-900 p-3 text-gray-600 hover:border-black peer-checked:border-blue-900 peer-checked:bg-blue-900 peer-checked:text-white"
                        tabindex="0"
                    >
                        <span class="text-sm"> WhatsApp </span>
                    </label>
                    </div>
                </div>

                <div>
                    <label class="sr-only" for="message">Message</label>

                    <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    ></textarea>
                </div>

                <div class="mt-4">
                    <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto hover:bg-blue-700 transition duration-3000 ease-in-out"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>

    )

}