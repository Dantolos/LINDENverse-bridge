import connectMongo from '../../../utils/connectdb';
import People from '../../../models/People';

connectMongo();

export default async(req, res) => {
     try {
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - 10); // Subtract 5 days
          const count = await People.countDocuments();
          const countByDay = await People.aggregate([
               {
                 $match: {
                   createdAt: { $gte: startDate, $lt: new Date() } // Filter by date range
                 }
               },
               {
                 $group: {
                   _id: {
                     $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } // Group by day
                   },
                   count: { $sum: 1 } // Count documents for each day
                 }
               },
               { $sort: { _id: 1 } } // Sort by day
          ]);
          // Create an array with all the days in the range
          const daysRange = Array.from(
               { length: 10 },
               (_, i) => new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000)
          );
          const countByDayWithMissing = daysRange.map((day) => {
               const formattedDay = day.toISOString().slice(0, 10);
               const match = countByDay.find((data) => data._id === formattedDay);
         
               return match || { _id: formattedDay, count: 0 };
             });
             res.status(200).json({ count: count, countByDay: countByDayWithMissing });

        } catch (error) {
          res.status(500).json({ error: "Failed to fetch people statistics" });
        }
}