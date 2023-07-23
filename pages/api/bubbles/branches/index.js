import connectMongo from '../../../../utils/connectdb';
import Branches from '../../../../models/Branches';

connectMongo();

export default async(req, res) => {
     const { method } = req;
     const searchString = req.query.searchString || ""; 
  
     switch (method) {
          case 'GET':
               try {
                    await connectMongo();
                    const branches = await Branches.find({ }).sort({'branche': 1});
                    res.status(200).json({ success: true, data: branches });
               } catch (error) {
                    res.status(400).json({ success: false });
               }
               break;
          case 'POST':
               try {
                    const branches = await Branches.create(req.body)
                    res.status(201).json({ success: true, data: branches });
               } catch (error) {
                    res.status(400).json({ success: false });
               }
               break;
          default:
               res.status(400).json({ success: false });
               break;
     }
}