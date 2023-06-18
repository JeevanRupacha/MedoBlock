import { redirect } from 'next/navigation';

export default async function GoToCarrier(){
    try{
        redirect('/transporter');
    }catch(e){
        console.log(e);
    }

    
};