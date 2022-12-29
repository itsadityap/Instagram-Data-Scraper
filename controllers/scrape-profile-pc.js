require("dotenv").config();
const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();

async function scrapeProfilePostCount(req, res) {

    const username = req.params.username;
    const postCount = req.params.postCount;
    let feedArray = [];
    let times = 0;

    ig.state.generateDevice(process.env.INSTAGRAM_USERNAME)
        
    try 
    {
        await ig.simulate.preLoginFlow();
        
        const user = await ig.account.login(process.env.INSTAGRAM_USERNAME,process.env.INSTAGRAM_PASSWORD)

        const userSearch = await ig.search.users(username.toString());

        const userpk = userSearch[0].pk;
        const userFeeds = ig.feed.user(userpk);

        if(postCount > 33)
        {
            times = Math.ceil(postCount/33);
        }
        else
        {
            times = 1;
        }

        for(let i = 0; i < times; i++)
        {
            let x = await userFeeds.items();
            feedArray.push(x);
        }

        let dataArray = []
        let user_name = ''
        user_name = userSearch[0].username;
        for(let i = 0; i < feedArray.length; i++)
        {   
            for(let j = 0; j < feedArray[i].length; j++)
            {
                let data = {
                    postURL : feedArray[i][j]?.image_versions2?.candidates[0]?.url,
                    locationLat : feedArray[i][j]?.location?.lat,
                    locationLong : feedArray[i][j]?.location?.lng,
                    caption : feedArray[i][j]?.caption?.text
                }
                dataArray.push(data);
            }
        }

        res.status(200).json({user_name, dataArray});
    }
    catch (err)
    {
        console.log(err);
        res.status(404).json({
            message: 'The Page is not Public or something else went wrong internally!!!',
            error: err
        });
    }

}

module.exports = {
    scrapeProfilePostCount
};