import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';


/** 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function handler(req, res) {
  const { searchString } = req.query; // Access the URL parameter

  console.log('req: ' + searchString);
  try {
    await connectMongo();
    const people = await People.find({
      $or: [
        { firstname: { $regex: searchString, $options: "i" } },
        { lastname: { $regex: searchString, $options: "i" } }
      ]   
    }).sort({'createdAt': -1});
    res.status(200).json(people);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}