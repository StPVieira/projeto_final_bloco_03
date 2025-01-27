import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-emerald-600 text-white shadow-md">
                <div className="container flex flex-col items-center py-6">
                    <p className='text-xl font-bold'>
                        Pharmasil | Copyright: {data}
                    </p>
                    <p className='text-lg mt-2'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4 mt-4'>
                        <LinkedinLogo size={48} weight='bold' className="hover:text-emerald-200 transition-all" />
                        <InstagramLogo size={48} weight='bold' className="hover:text-emerald-200 transition-all" />
                        <FacebookLogo size={48} weight='bold' className="hover:text-emerald-200 transition-all" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
