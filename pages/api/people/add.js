import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';

/** 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addPeople(req, res){
    try {
        const { firstname, lastname, email } = req.body;
        await connectMongo()
        const people = await People.create(req.body)

        return res.status(201).json({ type: 'sucess', message: "Person added successfully!", data: people });
    } catch (error) {
        let message = error.message;

        //Unique Key (email) is in use
        if(error.code === 11000){
            message = 'Email ist schon in einem Kontakt hinterlegt!'
            console.log('TTTTTTTTT')
        }

        //Catch custon validation error messages
        

        res.json({ type: 'error', message: message, info: error});
    }
    

}