import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';

connectMongo();

export default async(req, res) => {
     const { method } = req;
     const searchString = req.query.searchString || ""; 
  
     switch (method) {
          case 'GET':
               try {
                    await connectMongo();
                    const peoples = await People.find({
                         $or: [
                              { firstname: { $regex: searchString, $options: "i" } },
                              { lastname: { $regex: searchString, $options: "i" } }
                         ]   
                    }).sort({'createdAt': -1});
                    res.status(200).json({ success: true, data: peoples });
               } catch (error) {
                    res.status(400).json({ success: false });
               }
               break;
          case 'POST':
               try {
                    const person = await People.create(req.body)
                    res.status(201).json({ success: true, data: person });
               } catch (error) {
                    res.status(400).json({ success: false });
               }
               break;
          default:
               res.status(400).json({ success: false });
               break;
     }
}