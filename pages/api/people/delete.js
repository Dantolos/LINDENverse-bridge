import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';

/** 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function deletePeople(req, res){
     try {
          const { email } = req.body;
          await connectMongo()
          const people = await People.deleteOne({email: email})

          return res.status(201).json({ message: "Person added successfully!", data: people });
     } catch (error) {
          res.json({error});
          console.log(error)
     }
}