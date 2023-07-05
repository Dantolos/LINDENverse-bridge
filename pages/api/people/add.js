import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';

/** 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addPeople(req, res){
    try {
        const { name, email } = req.body;
        await connectMongo()
        const people = await People.create(req.body)

        // Add the person to your database here...
        return res.status(201).json({ message: "Person added successfully!", data: people });
    } catch (error) {
        res.json({error});
        console.log(error)
    }
    

}